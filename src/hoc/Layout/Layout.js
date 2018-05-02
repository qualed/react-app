import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <Toolbar menuHandler={this.menuHandler} isAuth={this.props.isAuthenticated} />
                <SideDrawer show={this.state.show} closed={this.closeSideDrawer} isAuth={this.props.isAuthenticated} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);