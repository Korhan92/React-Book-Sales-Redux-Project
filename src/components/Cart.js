import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepettenCıkar } from "../actions";
import { sepetiArtir } from "../actions";
import { sepetiAzalt } from "../actions";

const Cart = (props) => {
  const handleSepettenCıkar = (book) => {
    props.sepettenCıkar(book);
  };

  const handleAdetArtir = (book) => {
    props.sepetiArtir(book);
  };

  const handleAdetAzalt = (book) => {
    props.sepetiAzalt(book);
  };
  // Sepetteki toplam kitap sayısı
  const totalQuantityToCart = () => {
    let totalQuantity = 0;
    props.cart.map((book) => (totalQuantity += book.quantity));
    return totalQuantity;
  };

  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;{props.total.toFixed(2)}</h3>
      <h3>Toplam Sepet Adedi : {totalQuantityToCart()}</h3>
      {props.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>
              <b>Yazar :</b> {book.author}
            </p>
            <p>
              <b>Fiyat :</b> &#8378;{book.price}
            </p>
            <p>
              <b>Adet :</b> {book.quantity}
            </p>
            <button onClick={() => handleAdetAzalt(book)}>-</button>
            <button onClick={() => handleSepettenCıkar(book)}>
              Sepetten Çıkar
            </button>
            <button onClick={() => handleAdetArtir(book)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapSatetToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sepettenCıkar: (book) => {
      dispatch(sepettenCıkar(book));
    },
    sepetiArtir: (book) => {
      dispatch(sepetiArtir(book));
    },
    sepetiAzalt: (book) => {
      dispatch(sepetiAzalt(book));
    },
  };
};

export default connect(mapSatetToProps, mapDispatchToProps)(Cart);

//* 13
// redux store bağlamak için connect fonksiyonunu import edelim.
// Cconnect bağlantısını önceki gibi yapalım
// Sepete eklenen kitaplara map uygulayarak sepet içerisinde yazdırdık

// Toplam kitap fiyatı için totalPrice değerini oluşturduk

//* 14
// Sepete eklenen ürünün bir daha eklenmesini istemiyorunz bunun için reduce adım 14
