import React from 'react';
import './popup.css';

const Popup = () => {
  return (
    <div className="popup popup-overlay">
      <form className="form-popup ">
        <input type="text" name="name" placeholder="Имя" id="form-popup_name" className="InputText" /><br />
        <input type="text" name="phone" placeholder="Телефон" id="form-popup_phone" className="InputText" /><br />
        <button id="form-popup_btn">Отправить</button>
        <div className="close-popup"></div>
      </form>
    </div>
  );
}

export default Popup;
