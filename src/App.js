import React from 'react';
import "./styles.css";
import { Routes,Route } from "react-router-dom";


import Products from "./components/Products";
import Cart from "./components/Cart";


function App(props) {
  // console.log(props.bookList); // 7.adım testi
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
       <img src="https://avatars3.githubusercontent.com/u/60869810?v=4" alt="React Dersleri" />
       React Dersleri
     </h1>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}
export default App;

//* 7.adımı örnek olarak burda yaptık ama bu kitap listesine burada ihtiyacım yok. Bu yüzden burada kapatıp Product.js de kullanacağım

// const mapSatetToProps = state => {   // 7. adım
//   return {
//     bookList: state.bookList
//   }
// }


// export default connect(mapSatetToProps)(App);  // 6. adım


//* -6
// redux store bağlamak için connect fonksiyonunu import edelim.
// connect fonksiyonu başka bir fonksiyon döndürür. Bu yüzden connect fonksiyonunu çağırdığımızda döndürdüğü yeni fonsiyona parametre olarak componenti veriyoruz.

//* -7
// Connect ile bağlandığımızda state e ulaşmak için, mapSatetToProps fonksiyonu oluşturuyoruz.
// state (reducer da) ten hangi parçaları almak istyorsak bu fonksiyon onu döndürüyor
// Bizim reducer de booklist ve cart state lerimiz vardı.
// App.js de sadece bookList e ihtiyacımız var.
// mapSatetToProps reducer den aldığı state i, App.js in props ları vasıtasıyla bize verir.
// Bu fonksionu connect e veriyoruz

//