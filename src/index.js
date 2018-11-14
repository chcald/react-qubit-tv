import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle, faSearch, faBars, faPlayCircle  } from '@fortawesome/free-solid-svg-icons'

library.add(faQuestionCircle, faSearch, faBars, faPlayCircle)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
