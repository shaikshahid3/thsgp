import React from 'react';
import ReactDOM from 'react-dom';

 import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//  <a href="https://ibb.co/wz4Tz8Y"><img src="https://i.ibb.co/wz4Tz8Y/wallpaper2.jpg" alt="wallpaper2" border="0"></a> 
//  <a href="https://ibb.co/rFXMMDY"><img src="https://i.ibb.co/rFXMMDY/wallpaper3.jpg" alt="wallpaper3" border="0"></a> 
//  <a href="https://ibb.co/dMMzdHx"><img src="https://i.ibb.co/dMMzdHx/wallpaper4.jpg" alt="wallpaper4" border="0"></a>