import React from 'react';
import './phone.css';
import useGlobal from '../../../store';

const Phone = (props) => {
  const phones = useGlobal()[0].phones.data;
    return (
      <div className="phone">
        <div className="phoneDesktop"><a target="_blank" rel="noopener noreferrer" href={`tel:${phones.callPhone}`}>{phones.seePhone}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={`tel:${phones.callPhone}`}><div className="phoneMobile animated tada infinite slow10"></div></a></div>
      </div >
    );
}

export default Phone;