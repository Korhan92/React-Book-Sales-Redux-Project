import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';


const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement

);
//* -1
//*Başlangıç
// Redux ile uygulamayı oluşturmak için ilk yapmamız gereken store olşturmak
// Store reducer ı parametre olarak alır. Bunu ayrı dosyada oluşturacağım
//reducers klasörü ve actions klasörleri oluşturuyorum
//reducer fonksiyonunu reducer içindeki index.js içinde oluşturacağız ve buradan çağırıyoruz
//* -3
// reducer i import ediyoruz

//* -4
// Bütün componentlerin stora ulaşabilmesi için uygulamanın en üst seviyesini Provider ile sarmamız gerekiyor.
// Provider stor isminde bir parametre alır ve burdaki stora eşitlenir

// Bu seviyede uygulama redux a bağlandı

