import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        show: false
    }

    closeSideDrawer = () => {
        this.setState({ show: false });
    }

    menuHandler = () => {
        this.setState((prevState) => {
            return { show: !prevState.show };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar menuHandler={this.menuHandler} />
                <SideDrawer show={this.state.show} closed={this.closeSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;