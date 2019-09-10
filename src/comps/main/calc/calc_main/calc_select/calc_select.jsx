import React from 'react';
import './calc_select.css';
import { thousands, lcFirst } from '../../../../../libs/lib1';

const CalcSelect = (props) => {
  let tegCalcSelect = [];
  let calcSelectH3;
  let btnClass1 = [];
  let btnClass2 = [];

  switch (props.step) {
    case 1:
      calcSelectH3 = "ВЫБЕРИТЕ ВНЕШНЮЮ ОТДЕЛКУ ДВЕРИ."
      tegCalcSelect = props.calc.map((outFace, i) => {
        if (i >= 1 && i < 10) {
          return (
            <label key={outFace.id} className="labels">
              <input type="radio"
                name="step1"
                value={outFace.id}
                checked={+outFace.id === +props.state.outFace}
                onChange={() => props.dispatch({ type: 'CHANGE_OUTFACE', outFace: outFace.id })} />
              <span className="calc-select__name">{outFace.name}</span>
              <span className="calc-select__price">{`+${thousands(outFace.price)}`}</span>
              <span className="calc-select__rub">&nbsp;руб.<br /></span>
            </label>
          );
        } else {
          return null;
        }
      });
      btnClass1 = [null, "calc-select__btn-alone", null];
      btnClass2 = ["hidden", null, "hidden"];
      break;
    case 2:
      calcSelectH3 = "ВЫБЕРИТЕ ВНУТРЕННЮЮ ОТДЕЛКУ ДВЕРИ."
      tegCalcSelect = props.calc.map((inFace, i) => {
        if (i >= 10 && i < 19) {
          return (
            <label key={inFace.id} className="labels">
              <input type="radio"
                name="step2"
                value={inFace.id}
                checked={+inFace.id === +props.state.inFace}
                onChange={() => props.dispatch({ type: 'CHANGE_INFACE', inFace: inFace.id })} />
              <span className="calc-select__name">{inFace.name}</span>
              <span className="calc-select__price">{`+${thousands(inFace.price)}`}</span>
              <span className="calc-select__rub">&nbsp;руб.<br /></span>
            </label>
          );
        } else {
          return null;
        }
      });
      btnClass1 = ["calc-select__btn-left", "calc-select__btn-right", null];
      btnClass2 = [null, null, "hidden"];
      break;
    case 3:
      calcSelectH3 = "ВЫБЕРИТЕ ЗАМКИ, ФУРНИТУРУ И ПРОЧИЕ КОМПЛЕКТУЮЩИЕ."
      tegCalcSelect = props.calc.map((other, i) => {
        if (i >= 19 && i < 54) {
          if (i === 19) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i > 19 && i < 23) {
            return (
              <label key={other.id} className="labels">
                <input type="radio"
                  name="sealing"
                  value={other.id}
                  checked={+other.id === +props.state.sealing}
                  onChange={() => props.dispatch({ type: 'CHANGE_SEALING', sealing: other.id })} />
                <span className="calc-select__name">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 23) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i > 23 && i < 27) {
            return (
              <label key={other.id} className="labels">
                <input type="radio"
                  name="insulation"
                  value={other.id}
                  checked={+other.id === +props.state.insulation}
                  onChange={() => props.dispatch({ type: 'CHANGE_INSULATION', insulation: other.id })} />
                <span className="calc-select__name">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 27) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="insulation27"
                  value={other.id}
                  checked={props.state.insulation27}
                  onChange={() => props.dispatch({ type: 'CHANGE_INSULATION27' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 28) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="insulation28"
                  value={other.id}
                  checked={props.state.insulation28}
                  onChange={() => props.dispatch({ type: 'CHANGE_INSULATION28' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 29) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i > 29 && i < 33) {
            return (
              <label key={other.id} className="labels">
                <input type="radio"
                  name="depth"
                  value={other.id}
                  checked={+other.id === +props.state.depth}
                  onChange={() => props.dispatch({ type: 'CHANGE_DEPTH', depth: other.id })} />
                <span className="calc-select__name">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 33) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i > 33 && i < 40) {
            return (
              <label key={other.id} className="labels">
                <input type="radio"
                  name="locker"
                  value={other.id}
                  checked={+other.id === +props.state.locker}
                  onChange={() => props.dispatch({ type: 'CHANGE_LOCKER', locker: other.id })} />
                <span className="calc-select__name">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 40) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i === 41) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn41"
                  value={other.id}
                  checked={props.state.furn41}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN41' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 42) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn42"
                  value={other.id}
                  checked={props.state.furn42}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN42' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 43) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn43"
                  value={other.id}
                  checked={props.state.furn43}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN43' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 44) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn44"
                  value={other.id}
                  checked={props.state.furn44}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN44' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 45) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn45"
                  value={other.id}
                  checked={props.state.furn45}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN45' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 46) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn46"
                  value={other.id}
                  checked={props.state.furn46}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN46' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 47) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn47"
                  value={other.id}
                  checked={props.state.furn47}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN47' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 48) {
            return (
              <label key={other.id} className="labels">
                <input type="checkbox"
                  name="furn48"
                  value={other.id}
                  checked={props.state.furn48}
                  onChange={() => props.dispatch({ type: 'CHANGE_FURN48' })} />
                <span className="calc-select__name-checkbox">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else if (i === 49) {
            return (
              <h4 key={other.id} className="calc-select__h4">{other.name}</h4>
            );
          } else if (i > 49 && i < 54) {
            return (
              <label key={other.id} className="labels">
                <input type="radio"
                  name="peephole"
                  value={other.id}
                  checked={+other.id === +props.state.peephole}
                  onChange={() => props.dispatch({ type: 'CHANGE_PEEPHOLE', peephole: other.id })} />
                <span className="calc-select__name">{other.name}</span>
                <span className="calc-select__price">{`+${thousands(other.price)}`}</span>
                <span className="calc-select__rub">&nbsp;руб.<br /></span>
              </label>
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      });
      btnClass1 = ["calc-select__btn-left", null, "calc-select__btn-right"];
      btnClass2 = [null, "hidden", null];
      break;
    case 4:
      calcSelectH3 = "ВЫ ВЫБРАЛИ СЛЕДУЮЩИЙ ВАРИАНТ ДВЕРИ:"
      for (let k in props.state) {
        switch (k) {
          case 'outFace':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`Внешняя отделка: ${lcFirst(props.calc[props.state[k]].name)}.`}</div>);
            break;
          case 'inFace':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`Внутреняя отделка: ${lcFirst(props.calc[props.state[k]].name)}.`}</div>);
            break;
          case 'sealing':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`${props.calc[props.state[k]].name} уплотнения.`}</div>);
            break;
          case 'insulation':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`${props.calc[props.state[k]].name}.`}</div>);
            break;
          case 'insulation27':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[27].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[27].name)}.`}</div>);
            break;
          case 'insulation28':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[28].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[28].name)}.`}</div>);
            break;
          case 'depth':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`Толщина металла двери - ${props.calc[props.state[k]].name}.`}</div>);
            break;
          case 'locker':
            tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`Замок ${lcFirst(props.calc[props.state[k]].name)}.`}</div>);
            break;
          case 'furn41':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[41].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[41].name)}.`}</div>);
            break;
          case 'furn42':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[42].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[42].name)}.`}</div>);
            break;
          case 'furn43':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[43].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[43].name)}.`}</div>);
            break;
          case 'furn44':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[44].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[44].name)}.`}</div>);
            break;
          case 'furn45':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[45].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[45].name)}.`}</div>);
            break;
          case 'furn46':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[46].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[46].name)}.`}</div>);
            break;
          case 'furn47':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[47].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[47].name)}.`}</div>);
            break;
          case 'furn48':
            if (props.state[k]) tegCalcSelect.push(<div key={props.calc[48].id} className="calc-select__itogo">{`+ ${lcFirst(props.calc[48].name)}.`}</div>);
            break;
          case 'peephole':
            if (props.state.peephole === '50') {
              tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`${props.calc[props.state[k]].name}.`}</div>);
            } else {
              tegCalcSelect.push(<div key={props.calc[props.state[k]].id} className="calc-select__itogo">{`Глазок ${lcFirst(props.calc[props.state[k]].name)}.`}</div>);
            }
            break;
          default:
            break;
        }
      }
      btnClass1 = ["calc-select__btn-alone", null, null];
      btnClass2 = [null, "hidden", "hidden"];
      break;
    default:
      break;
  };
  return (
    <div className="calc-select">
      <h3 className="calc-select__h3">{calcSelectH3}</h3>
      {tegCalcSelect}
      <div className="calc_select__step-btns">
        <button className={`${btnClass1[0]} ${btnClass2[0]}`} onClick={() => props.setStep(props.step - 1)}>&lt; ШАГ НАЗАД</button>
        <button className={`${btnClass1[1]} ${btnClass2[1]}`} onClick={() => props.setStep(props.step + 1)}>СЛЕДУЮЩИЙ ШАГ &gt;</button>
        <button className={`${btnClass1[2]} ${btnClass2[2]}`} onClick={() => props.setStep(props.step + 1)}>ИТОГО</button>
      </div>
    </div>
  );
}

export default CalcSelect;
