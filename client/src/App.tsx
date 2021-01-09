import React from 'react';
import "./App.scss";
import { Route, Switch } from 'react-router-dom'
import DetailProduct from './containers/DetailProduct/DetailProduct';
import Top from './containers/Top/Top'
import Products from './containers/Products/Products';
import { Layout } from 'antd';
const { Content } = Layout;

function App() {
  return (
    <div className='app'>
      <Layout>
        <Top />
        <Content>
          <Switch>
            <Route exact path='/' />
            <Route exact path='/about' />
            <Route exact path='/contacts' />
            <Route exact path='/products/:productId' component={DetailProduct} />
            <Route exact path='/products' component={Products} />
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
