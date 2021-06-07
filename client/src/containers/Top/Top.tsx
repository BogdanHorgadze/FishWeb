import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Top.module.scss";
import "../../assets/scss/_settings.scss";

import { NavBar } from "./NavBar/NavBar";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
import { FaShoppingCart } from "react-icons/fa";
import { AppState } from "../../store/reducers/rootReducer";
import {
  getProducts,
  setCorrectNumber,
  setIsEnd,
  refresh,
  deleteFullItemThunk,
  buyThunk,
} from "../../store/actions/actions";
import { CloseCircleOutlined, ArrowLeftOutlined } from "@ant-design/icons";

import { Layout } from "antd";
import { Row, Col, Modal } from "antd";
import Cart from "../../components/Cart";
import { useHistory } from "react-router-dom";
const { Header } = Layout;

const Top = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isSearch = useSelector((state: AppState) => state.mainReducer.isSearch);
  const cart = useSelector((state: AppState) => state.mainReducer.cart);
  const totalPrice: number = useSelector(
    (state: AppState) => state.mainReducer.totalPrice
  );
  const isCorrectPhone = useSelector(
    (state: AppState) => state.mainReducer.isCorrectPhone
  );
  const isEnd = useSelector((state: AppState) => state.mainReducer.isEnd);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFooter, setIsFooter] = useState({});
  const phoneValue = useRef<any>(null);
  const regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

  useEffect(() => {
    if (isEnd) {
      setIsFooter({ footer: null });
    } else {
      setIsFooter({});
    }
  }, [isEnd]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (cart.length) {
      history.push("/order");
      dispatch(setIsEnd(true));
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // if (isEnd) {
    //   dispatch(getProducts());
    //   dispatch(refresh(false));
    // }
  };

  const buyHandler = (action: string, id?: string, size?: string) => {
    if (id && size) {
      dispatch(buyThunk(id, action, size));
      setIsModalVisible(true);
    }
  };

  return (
    <Header className={styles.header}>
      <Row>
        <Col sm={4} xs={0}>
          <Logo />
        </Col>
        <Col sm={12} xs={7}>
          <NavBar />
        </Col>
        <Col sm={4} xs={12}>
          <div className={styles.search}>{isSearch ? <Search /> : null}</div>
        </Col>
        <Col sm={4}>
          <div className={styles.cart} onClick={showModal}>
            <FaShoppingCart size="30" color="white" />
            <div style={{ marginLeft: "10px" }}>{cart.length}</div>
          </div>
        </Col>
      </Row>
      <Modal
        title="Корзина"
        visible={isModalVisible}
        width={1000}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Заказать"
        cancelText="Продолжить"
      >
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          closeModal={() => setIsModalVisible(false)}
          secondHandler={buyHandler}
        />
      </Modal>
    </Header>
  );
};

export default Top;
