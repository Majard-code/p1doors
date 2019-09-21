import React, { useState } from 'react';
import { connect } from 'react-redux';
import './calc.css';
import CalcMain from './calc_main/calc_main';
import { openPopup } from '../../../redux/reducers/popup';

const Calc = (props) => {

  const [step, setStep] = useState(1);
  let stepsClass = [];
  switch (step) {
    case 1:
      stepsClass = ["bold", null, null];
      break;
    case 2:
      stepsClass = [null, "bold", null];
      break;
    case 3:
      stepsClass = [null, null, "bold"];
      break;
    default:
      break;
  }
  return (
    <section className="calc" id="custom">
      <h2 className="app__h2 all-columns">ДВЕРИ АРМАДА ПО ИНДИВИДУАЛЬНОМУ ЗАКАЗУ</h2>
      <p className="app__sub-h2 all-columns">НЕ НАШЛИ НУЖНОЙ ДВЕРИ СРЕДИ ГОТОВЫХ ВАРИАНТОВ?<br />
        ВОСПОЛЬЗУЙТЕСЬ ИНДИВИДУАЛЬНЫМ ПОДБОРОМ ДВЕРИ.<br />
        РАСЧЕТ ЗАЙМЕТ НЕ БОЛЕЕ ТРЁХ МИНУТ.</p>
      <div className="steps">
        <span className={stepsClass[0]}>Шаг 1</span>
        <span> &gt; </span>
        <span className={stepsClass[1]}>Шаг 2</span>
        <span> &gt; </span>
        <span className={stepsClass[2]}>Шаг 3</span>
      </div>
      <CalcMain step={step} setStep={setStep} calc={props.calc} openPopup={props.openPopup}/>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    calc: state.calc.data
  }
}

export default connect(mapStateToProps, { openPopup })(Calc);
