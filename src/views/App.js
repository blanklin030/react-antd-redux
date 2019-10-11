import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import IndexPage from './index/Index'
import ReduxPage from './redux/Index'
import StorePage from './store/Index'
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '/',
    }
    this.handleInputChange = this.handleClick.bind(this)
  }

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <Row gutter={10}>
            <Col span={4}>
              <div className="logo">Api Control</div>
            </Col>
            <Col span={20}>
              <Menu
                onClick={this.handleClick}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['/']}
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="/">
                  <Link to="/">Index</Link>
                </Menu.Item>
                <Menu.Item key="/redux">
                  <Link to="/redux">Redux</Link>
                </Menu.Item>
                <Menu.Item key="/store">
                  <Link to="/store">Store</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item>List</Breadcrumb.Item> */}
            <Breadcrumb.Item>{this.props.location.pathname.replace("/","")}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route exact path="/" component={IndexPage} />
            <Route path="/redux" component={ReduxPage} />
            <Route path="/store" component={StorePage} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Blank</Footer>
      </Layout>
    )
  }
}

export default App;
