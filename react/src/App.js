import React, { Component } from 'react';
import SiderBar from './components/SiderBar';
import HeaderBar from "./components/HeaderBar";
import './assets/css/App.css'
import 'antd/dist/antd.css'
import { Layout} from 'antd';
const { Content, Footer} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout>
                <SiderBar  collapsed={this.state.collapsed} onCollapse={this.toggle}/>
                <Layout>
                    <HeaderBar collapsed={this.state.collapsed} onCollapse={this.toggle}/>
                    <Content style={{ margin: '24px', padding: 24, background: '#fff',  }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default App;
