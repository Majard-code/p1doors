import React from 'react';
import { connect } from 'react-redux';
import './doors.css';
import Door from './door/door';
import { openPopup } from '../../../redux/reducers/popup';


const Doors = (props) => {
  return (
    <section className="doors" id="presence">
      <h2 className="app__h2 all-columns">ДВЕРИ АРМАДА В НАЛИЧИИ С УСТАНОВКОЙ В ДЕНЬ ЗАКАЗА</h2>
      <p className="app__sub-h2 all-columns">ДЛЯ УСТАНОВКИ ВНУТРИ ПОМЕЩЕНИЙ</p>
      {props.doors.map((door) => <Door key={door.id} door={door} openPopup={props.openPopup}/>)}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    doors: state.doors.data
  }
}

export default connect(mapStateToProps, { openPopup })(Doors);
