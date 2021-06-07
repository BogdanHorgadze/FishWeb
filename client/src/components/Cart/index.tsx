import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Row, Col } from "antd";
import {
  CloseCircleOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import { product } from "../../Interfaces/Interfaces";
import { buyThunk, deleteFullItemThunk } from "../../store/actions/actions";
import styles from "./styles.module.scss";

type Props = {
  cart: Array<product>;
  totalPrice: number;
  closeModal: () => void;
  onChangeProductAmount?: (action: string) => void;
  secondHandler?: (action: string, id: string, size: string) => void;
};

const Cart = ({
  cart,
  totalPrice,
  closeModal,
  onChangeProductAmount,
  secondHandler,
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cart.length) {
      closeModal();
    }
  }, [cart]);

  const clearCart = (id: string) => {
    dispatch(deleteFullItemThunk(id));
  };

  return (
    <div>
      <Row>
        <Col xs={4} sm={6}>
          Название
        </Col>
        <Col xs={4} sm={6}>
          Количество
        </Col>
        <Col xs={6} sm={6}>
          Размеры
        </Col>
        <Col xs={2} sm={6}>
          Цена
        </Col>
      </Row>
      {cart &&
        cart.length &&
        cart.map((item, idx) => (
          <div key={item._id} style={{ marginTop: "10px" }}>
            <Row>
              <Col sm={6}>
                <div>{item.name}</div>
              </Col>
              <Col sm={6}>
                <div className={styles["amount-wrapper"]}>
                  {onChangeProductAmount && (
                    <PlusOutlined
                      onClick={() => onChangeProductAmount("add")}
                      style={{ marginRight: "20px", cursor: "pointer" }}
                    />
                  )}
                  {secondHandler && (
                    <PlusOutlined
                      onClick={() =>
                        secondHandler(
                          "add",
                          item._id,
                          `${item.selectedSize[0]}`
                        )
                      }
                      style={{ marginRight: "20px", cursor: "pointer" }}
                    />
                  )}
                  <span style={{ marginRight: "20px" }}> {item.count} </span>
                  {onChangeProductAmount && (
                    <MinusOutlined
                      onClick={() => onChangeProductAmount("delete")}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  {secondHandler && (
                    <MinusOutlined
                      onClick={() =>
                        secondHandler(
                          "delete",
                          item._id,
                          `${item.selectedSize[0]}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </Col>
              <Col sm={6}>
                <span>
                  {item.selectedSize.map((size, i) => {
                    return <div key={`size` + i}> {size} </div>;
                  })}
                </span>
              </Col>
              <Col sm={4}>
                <span>{+item.count * +item.price}грн</span>
              </Col>
              <Col sm={2}>
                <span
                  onClick={() => clearCart(item._id)}
                  style={{ cursor: "pointer" }}
                >
                  <CloseCircleOutlined />
                </span>
              </Col>
            </Row>
          </div>
        ))}
      <div style={{ marginTop: "30px", fontWeight: "bold" }}>
        {totalPrice ? <div>Общая цена :{totalPrice}грн</div> : null}
      </div>
    </div>
  );
};

export default memo(Cart);
