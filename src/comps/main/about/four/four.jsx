import React from 'react';
import './four.css';

const Four = () => {
  return (
    <section className="four">
      <div className="four__sec four__sert">
        <div className="four__sec__icon four__sec__icon1"></div>
        <div className="four__sec__text">
          <h5>СЕРТИФИЦИРОВАННАЯ ПРОДУКЦИЯ</h5>
          <p className="four__p">Двери Армада изготовлены по ГОСТ 31173-2003. Это подтверждено сертификатом и гарантирует высокую прочность и надежность наших дверей. Все двери проходят обязательную проверку качества на испытательном стенде завода.</p>
        </div>
      </div>
      <div className="four__sec four__price">
        <div className="four__sec__icon four__sec__icon2"></div>
        <div className="four__sec__text">
          <h5>АДЕКВАТНАЯ СТОИМОСТЬ</h5>
          <p className="four__p">Двери Армада стоят ощутимо дешевле аналогичных дверей других именитых производителей, без потери качества и не уступая им по внешнему виду и техническим характеристикам!</p>
        </div>
      </div>
      <div className="four__sec four__stock">
        <div className="four__sec__icon four__sec__icon3"></div>
        <div className="four__sec__text">
          <h5>БОЛЬШОЙ ВЫБОР КОНСТРУКЦИЙ И ВАРИАНТОВ ОТДЕЛКИ</h5>
          <p className="four__p">В нашем ассортименте есть модели дверей с уникальными техническими решениями: скрытые петли, противовзломный лабиринт, сплошной противосъем, терморазрыв. Выбор вариантов отделки огромен!</p>
        </div>
      </div>
      <div className="four__sec four__resist">
        <div className="four__sec__icon four__sec__icon4"></div>
        <div className="four__sec__text">
          <h5>ПОВЫШЕННАЯ ВЗЛОМОСТОЙКОСТЬ</h5>
          <p className="four__p">Двери изготавливаются с учетом рекомендаций ГУВО МВД России (НИЦ "Охрана"), комплектуются надежными замками 4 класса взломостойкости. По результатам испытаний дверям Армада привсвоен класс прочности М1 - Наивысший.</p>
        </div>
      </div>
    </section>
  );
}

export default Four;
