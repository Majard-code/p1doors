import React, { useState } from 'react';
import './calc.css';
import CalcMain from './calc_main/calc_main';
import { useGet } from '../../../libs/useAPI';

const Calc = () => {
  const calc = useGet('http://armada.bestdoorshop.ru/api/1.0/calc.php');
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

  if (calc.isLoading) {
    return (
      <section className="calc">
        <div className="all-columns loading">Загрузка...</div>
      </section>
    )
  } else {
    return (
      <section className="calc">
        <h2 className="all-columns">ДВЕРИ АРМАДА ПО ИНДИВИДУАЛЬНОМУ ЗАКАЗУ</h2>
        <p className="all-columns">НЕ НАШЛИ НУЖНОЙ ДВЕРИ СРЕДИ ГОТОВЫХ ВАРИАНТОВ?<br />
          ВОСПОЛЬЗУЙТЕСЬ ИНДИВИДУАЛЬНЫМ ПОДБОРОМ ДВЕРИ.<br />
          РАСЧЕТ ЗАЙМЕТ НЕ БОЛЕЕ ТРЁХ МИНУТ.</p>
        <div className="steps">
          <span className={stepsClass[0]}>Шаг 1</span>
          <span> &gt; </span>
          <span className={stepsClass[1]}>Шаг 2</span>
          <span> &gt; </span>
          <span className={stepsClass[2]}>Шаг 3</span>
        </div>
        <CalcMain step={step} setStep={setStep} calc={calc} />
      </section>
    );
  }
}

export default Calc;
