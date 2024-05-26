import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// let users = [
//     {
//         name: 'Tima',
//         age: 10,
//         address: {
//             city: 'Vinnitsa',
//             country: 'Ukraine'
//         }
//     },
//     {
//         name: 'Dima',
//         age: 12,
//         address: {
//             city: 'Kyiv',
//             country: 'Ukraine'
//         }
//     }
// ]
//
// console.log(users[0].address.city)
// console.log(users[1].address.city)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
