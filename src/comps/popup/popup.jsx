import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './popup.css';
import { closePopup } from '../../redux/reducers/popup';

const Popup = (props) => {
  useEffect(() => {
    if (props.isOpen) {
      if (!document.querySelector('.popup').classList.contains('popup__visible')) {
        document.querySelector('.popup').classList.add('popup__visible');
      }
    } else {
      if (document.querySelector('.popup').classList.contains('popup__visible')) {
        document.querySelector('.popup').classList.remove('popup__visible');
      }
    }
  }, [props.isOpen]);
  return (
    <div className="popup popup-overlay">
      <div className="form-popup ">
        <p>В связи с проведением профилактических работ, некоторые формы обратной связи на сайте могут быть недоступны. Cвяжитесь с нами по телефону:</p>
        <a target="_blank" rel="noopener noreferrer" href={`tel:${props.callPhone}`}>{props.seePhone}</a>
        <p>и мы с удовольствием проконсультируем Вас по всем, интересующим Вас вопросам, касательно дверей Армада, их доставки и установки.</p>
        <div className="close-popup" onClick={() => props.closePopup()}></div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isOpen: state.popup.isOpen,
    callPhone: state.phones.data.callPhone,
    seePhone: state.phones.data.seePhone
  };
};
export default connect(mapStateToProps, { closePopup })(Popup);
