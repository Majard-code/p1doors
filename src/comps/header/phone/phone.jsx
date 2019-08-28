import React from 'react';
import './phone.css';
import { useGet } from '../../../libs/useAPI';

const Phone = (props) => {
  const phones = useGet('http://armada.bestdoorshop.ru/api/1.0/phone.php');

  if (phones.isLoading) {
    return (
      <div className="phone">
        <div className="phoneDesktop"><a target="_blank" rel="noopener noreferrer" href="tel:#">Загрузка...</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href="tel:#"><div className="phoneMobile"></div></a></div>
      </div >
    );
  } else {
    return (
      <div className="phone">
        <div className="phoneDesktop"><a target="_blank" rel="noopener noreferrer" href={`tel:${phones.data.callPhone}`}>{phones.data.seePhone}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={`tel:${phones.data.callPhone}`}><div className="phoneMobile animated tada infinite slow10"></div></a></div>
      </div >
    );
  }
}

export default Phone;