import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as somethingActions from '../reducers/something';

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(somethingActions, dispatch)
});

const mapStateToProps = state => ({ props: state.something.test });

export class Home extends Component {
    handleClick = () => this.props.actions.someAction();

    render() {
        return (
            <div className="container__home">
                <span onClick={this.handleClick}>Test</span>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
