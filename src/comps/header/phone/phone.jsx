import React from 'react';
import { connect } from 'react-redux';
import './phone.css';

const Phone = (props) => {
    return (
      <div className="phone">
        <div className="phoneDesktop"><a target="_blank" rel="noopener noreferrer" href={`tel:${props.callPhone}`}>{props.seePhone}</a></div>
        <div><a target="_blank" rel="noopener noreferrer" href={`tel:${props.callPhone}`}><div className="phoneMobile animated tada infinite slow10"></div></a></div>
      </div >
    );
}
const mapStateToProps = (state) => {
  return {
    seePhone: state.phones.data.seePhone,
    callPhone: state.phones.data.callPhone
  }
}

export default connect(mapStateToProps)(Phone);