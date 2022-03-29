import { SEPETE_EKLE, SEPETTEN_CIKAR, SEPETI_ARTIR, SEPETI_AZALT } from "../actions/index";

import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
  total: 0,
}



export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEPETE_EKLE: {
      let addedItem = state.bookList.find(book => book.id === action.payload.id); //14.adım
      let existed_item = state.cart.find(book => action.payload.id === book.id);

      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          cart: [...state.cart, action.payload],
          total: newTotal
        }
      }
    }
    case SEPETTEN_CIKAR: {
      let itemToRemove = state.cart.find(book => action.payload.id === book.id);
      let new_item = state.cart.filter(book => action.payload.id !== book.id);
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      return {
        ...state,
        cart: new_item,
        total: newTotal
      }
    }
    case SEPETI_ARTIR: {
      let addedItem = state.cart.find(book => book.id === action.payload.id);
      addedItem.quantity += 1;
      let newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal
      }
    }

    case SEPETI_AZALT: {
      let addedItem = state.bookList.find(book => book.id === action.payload.id);

      if (addedItem.quantity === 1) {
        let new_item = state.cart.filter(book => action.payload.id !== book.id);
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          cart: new_item,
          total: newTotal
        }
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal
        }
      }

    }
    default:
      return state;
  }
}




//* -2
 // reducer bir fonksiyondur
 // state ve action parametresi alır
 // Her zaman state döndürür

 //* -5
 // Kitap listemizin bulunduğu data yı burada çağıralım.
 // Burada bir INITIAL_STATE tanımlayıp data yı bookList olarak atayıp, reducer in state ine varsayılan parametre olarak veriyoruz. Başlangıçta state INITIAL_STATE değeriyle başlar. 

 // App.js dosyamızı redux store bağlayıp kontrol edelim.

 //* 10

 // Reducer action bilgisini aldığında cart bilgisini güncelleyecek.
 // reducer fonksiyonunda action type ına göre switch uygulanır.
 // Eğer gelen action SEPETE_EKLE ise, state i aç, cart ı aç ve gelen action(payload) bilgisini cart a ekle

 //* 11
 // Action içindeki sepeteEkle yi Products te kullanacağız....

 //* 14
 // Yeni eklenen önceden sepette varsa eklenmez yoksa eklenir


