import React from 'react';
import './calc_total.css';
import { thousands } from '../../../../../libs/lib1';

const CalcTotal = (props) => {
  let realSumm = String(Number(props.state.summ) +
  Number(props.calc.data[props.state.outFace].price) +
  Number(props.calc.data[props.state.inFace].price) +
  Number(props.calc.data[props.state.sealing].price) +
  Number(props.calc.data[props.state.insulation].price) +
  (props.state.insulation27 ? Number(props.calc.data[27].price) : 0) +
  (props.state.insulation28 ? Number(props.calc.data[28].price) : 0) +
  Number(props.calc.data[props.state.depth].price) +
  Number(props.calc.data[props.state.locker].price) +
  (props.state.furn41 ? Number(props.calc.data[41].price) : 0) +
  (props.state.furn42 ? Number(props.calc.data[42].price) : 0) +
  (props.state.furn43 ? Number(props.calc.data[43].price) : 0) +
  (props.state.furn44 ? Number(props.calc.data[44].price) : 0) +
  (props.state.furn45 ? Number(props.calc.data[45].price) : 0) +
  (props.state.furn46 ? Number(props.calc.data[46].price) : 0) +
  (props.state.furn47 ? Number(props.calc.data[47].price) : 0) +
  (props.state.furn48 ? Number(props.calc.data[48].price) : 0) +
  Number(props.calc.data[props.state.peephole].price)
  );
  return (
    <div className="calc-total">
      <img className="calc-total__img-outface" src={require(`./calc_imgs/outface/${props.calc.data[+props.state.outFace].foto}.jpg`)} alt="Внешняя отделка двери" />
      <img className="calc-total__img-inface" src={require(`./calc_imgs/inface/${props.calc.data[+props.state.inFace].foto}.jpg`)} alt="Внутренняя отделка двери" />
      <div className="calc-total__text1">
        * цвет и рисунок отделки выбирается при замере по каталогам.
      </div>
      <div className="calc-total__text2">
        ПРЕДВАРИТЕЛЬНАЯ ЦЕНА ВАШЕГО ВАРИАНТА:
      </div>
      <div className="calc-total__summ">
        {`~ ${thousands(realSumm)} руб.`}
      </div>
      <button className="calc-total__btn calc-total__btn-buy">Заказать дверь</button>
      <button className="calc-total__btn calc-total__btn-adj">Вызвать замерщика</button>
    </div>
  );
}

export default CalcTotal;
