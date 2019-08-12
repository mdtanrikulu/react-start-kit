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
                <section className="section">
                    <div className="container">
                        <h1 className="title">Hi</h1>
                        <h2 className="subtitle">
                            Simple text here
                        </h2>
                        <div className="tabs is-left">
                            <ul>
                                <li className="is-active">
                                    <a>Url</a>
                                </li>
                                <li>
                                    <a>List</a>
                                </li>
                            </ul>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input
                                    className="input"
                                    type="url"
                                    placeholder="URL"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-link" />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check" />
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <div className="control">
                                <textarea
                                    className="textarea is-medium"
                                    placeholder="Medium textarea"
                                />
                            </div>
                        </div>

                        <div className="field is-grouped is-grouped-right">
                            <p className="control">
                                <a className="button is-primary">Submit</a>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
