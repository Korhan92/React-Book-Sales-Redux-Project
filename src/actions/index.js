export const SEPETE_EKLE = "SEPETE_EKLE";
export const SEPETTEN_CIKAR = "SEPETTEN_CIKAR";
export const SEPETI_ARTIR = "SEPETI_ARTIR";
export const SEPETI_AZALT = "SEPETI_AZALT";

export const sepeteEkle = (book) => {
  return {
    type: SEPETE_EKLE,
    payload: book,
  };
};

export const sepettenCıkar = (book) => {
  return {
    type: SEPETTEN_CIKAR,
    payload: book,
  };
};

export const sepetiArtir = (book) => {
  return {
    type: SEPETI_ARTIR,
    payload: book,
  };
};

export const sepetiAzalt = (book) => {
  return {
    type: SEPETI_AZALT,
    payload: book,
  };
};

//* 9
// Burada işlemi yapacak olan function oluşturacağız.
// Yani actionu create yapacak olan function
// id paremetre alacak. id sine göre sepete ekleyelim. Şimdilik burda kitabın tamamını gönderelim

// Action creater function lar action döndürür. Bizim actionlarımız objeydi. Dolayısıyla bu function bize obje dönecek.

// Bu dönen objenin type ı olmak zorunda
// Bu objede taşıması istenilen başka bilgilerde verilebilir (payload)

// Action creater çağrıldığında(çalıştığında) döneceği actionu(obje) dispatch(sevk) sayesinde sevk ederek reducer a gönderir

// Özet

// Kullanıcı Sepete ekle butonuna tıkladığında, sepeteEkle fonksiyonu çalışacak, Bu fonksiyon bütün kitap bilgilerini SEPETE_EKLE action u oluşturarak. reducer a gönderecek.
