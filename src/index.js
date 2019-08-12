import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import fontawesome from '@fortawesome/fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

fontawesome.library.add(faEnvelope, faKey, fab);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
