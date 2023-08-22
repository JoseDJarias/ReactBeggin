import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = {
  name: 'Daniel',
  lastname: 'Arias',
  photo: 'https://picsum.photos/200'
};
function printName() {
  return user.name + ' ' + user.lastname;
}
function printNameV2() {
  if (user) {
    return user.name + ' ' + user.lastname;
  } else {
    return 'Desconocido';
  };
};
function printTernary(user) {
  return user? user.name + ' ' + user.lastname : 'Desconocido';
}

const element2 = (
  <h1>
    Hello,{printTernary(null)}
  </h1>
);
const imageElement = (
  <img src={user.photo} />
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
