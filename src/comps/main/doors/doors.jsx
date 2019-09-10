import React from 'react';
import './doors.css';
import Door from './door/door';
import useGlobal from '../../../store';

const Doors = () => {
  const doors = useGlobal()[0].doors.data;
  return (
    <section className="doors" id="presence">
      <h2 className="all-columns">ДВЕРИ АРМАДА В НАЛИЧИИ С УСТАНОВКОЙ В ДЕНЬ ЗАКАЗА</h2>
      <p className="all-columns">ДЛЯ УСТАНОВКИ ВНУТРИ ПОМЕЩЕНИЙ</p>
      {doors.map((door) => <Door key={door.id} door={door} />)}
    </section>
  );
}

export default Doors;
