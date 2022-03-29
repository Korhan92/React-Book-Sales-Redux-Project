import React, { Component } from "react";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions";
import { Link } from "react-router-dom";



class Products extends Component {

  handleSepeteEkle = (book) => {
    this.props.sepeteEkle(book);
  }

  render() {
    console.log(this.props.bookList); // 7.adım testi
    console.log(this.props.cart); // 12.adım testi
    return (
      <div>
        <h2>
          <span>Kitap Listesi</span>
          <Link to="/cart">{this.props.cart.length} Sepetim</Link>
        </h2>
        {this.props.bookList.map(book => (
          <div className="book" key={book.id}>
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author} </p>
              <p>Fiyat: &#8378; {book.price} </p>
              <button onClick={() => { this.handleSepeteEkle(book) }}>Sepete Ekle</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


//Bu kısım açıklaması App.js de 7.adım
const mapSatetToProps = state => {   // 7. adım
  return {
    bookList: state.bookList,
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sepeteEkle: (book) => { dispatch(sepeteEkle(book)) }
  }

}

export default connect(mapSatetToProps, mapDispatchToProps)(Products);  // 6. adım


//* 8

// Kitap listesi burada elimizde hazır. Biz componanti props bilgisiyle otomaik dolduralım.
// Tüm kitap listesini alabilmemiz için map yazıyoruz.

//* 9

// Sepete kitap eklemek için action creater oluşturmalıyız.
// Bu işlemi actions klasöründe yapıyoruz
// Bu klasörde index.js oluşturalım

//* 12
// Action içindeki sepeteEkle yi import edelim
// Sepete ekle butonuna tıkalanan kitap sepete eklenecek
// bunun içi onClick={()=>sepeteEkle(book)} şeklinde direk kullanım yapamıyoruz. Redux bunun nerden geldiğini bilemez.
// state leri propslara map ettiğimiz gibi action ları da propslara map etmeliyiz.
// connect te ikinci bir parametre olarak {sepeteEkle} objesini veriyoruz
// Buton içinde kullanırken, sepeteEkle yi propstan alarak kullanıyoruz
// mapSatetToProps içersinde cartımızı gönderelim

//* 13
// Cart içerisinide düzenlediğimizde redux döngüsü tamamlanmış olacak