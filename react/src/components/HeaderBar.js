import React,{Component} from 'react';
import { Layout,Icon} from 'antd';
const { Header} = Layout;
export default class HeaderBar extends Component{
    render(){
        return(
            <Header style={{ background: '#fff', padding: '0 24px' }}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.onCollapse}
                />
            </Header>
        )
    }
}