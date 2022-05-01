import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/navBar';
import Form from './Components/form';
import MainContainer from './Components/mainContainer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const navigationBar = React.createElement(NavBar, {}, null);
const headingThree = React.createElement(MainContainer, {}, null);

const loginForm = React.createElement(Form, {}, null);
const containerDiv = React.createElement('div', {}, [navigationBar, headingThree, loginForm, ]);
root.render(
    containerDiv
);

// root.render(
//     React.createElement(Form, {}, null),
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
