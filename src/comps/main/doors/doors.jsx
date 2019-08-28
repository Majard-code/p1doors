import React from 'react';
import './doors.css';
import Door from './door/door';
import { useGet } from '../../../libs/useAPI';

const Doors = () => {
  const doors = useGet('http://armada.bestdoorshop.ru/api/1.0/doors.php');

  if (doors.isLoading) {
    return (
      <section className="doors">
        <div className="all-columns loading">Загрузка...</div>
      </section>
    )
  } else {
  return (
    <section className="doors">
      <h2 className="all-columns">ДВЕРИ АРМАДА В НАЛИЧИИ С УСТАНОВКОЙ В ДЕНЬ ЗАКАЗА</h2>
      <p className="all-columns">ДЛЯ УСТАНОВКИ ВНУТРИ ПОМЕЩЕНИЙ</p>
      {doors.data.map((door) => <Door key={door.id} door={door} />)}
    </section>
  );
  }
}

export default Doors;
