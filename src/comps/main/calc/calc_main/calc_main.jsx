import React, { useReducer } from 'react';
import './calc_main.css';
import CalcSelect from './calc_select/calc_select';
import CalcTotal from './calc_total/calc_total';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_OUTFACE':
      return { ...state, outFace: action.outFace };
    case 'CHANGE_INFACE':
      return { ...state, inFace: action.inFace };
    case 'CHANGE_SEALING':
      return { ...state, sealing: action.sealing };
    case 'CHANGE_INSULATION':
      return { ...state, insulation: action.insulation };
    case 'CHANGE_INSULATION27': {
      if (state.insulation27) {
        return { ...state, insulation27: false };
      } else {
        return { ...state, insulation27: true };
      }
    }
    case 'CHANGE_INSULATION28': {
      if (state.insulation28) {
        return { ...state, insulation28: false };
      } else {
        return { ...state, insulation28: true };
      }
    }
    case 'CHANGE_DEPTH':
      return { ...state, depth: action.depth };
    case 'CHANGE_LOCKER':
      return { ...state, locker: action.locker };
    case 'CHANGE_FURN41': {
      if (state.furn41) {
        return { ...state, furn41: false };
      } else {
        return { ...state, furn41: true };
      }
    }
    case 'CHANGE_FURN42': {
      if (state.furn42) {
        return { ...state, furn42: false };
      } else {
        return { ...state, furn42: true };
      }
    }
    case 'CHANGE_FURN43': {
      if (state.furn43) {
        return { ...state, furn43: false };
      } else {
        return { ...state, furn43: true };
      }
    }
    case 'CHANGE_FURN44': {
      if (state.furn44) {
        return { ...state, furn44: false };
      } else {
        return { ...state, furn44: true };
      }
    }
    case 'CHANGE_FURN45': {
      if (state.furn45) {
        return { ...state, furn45: false };
      } else {
        return { ...state, furn45: true };
      }
    }
    case 'CHANGE_FURN46': {
      if (state.furn46) {
        return { ...state, furn46: false };
      } else {
        return { ...state, furn46: true };
      }
    }
    case 'CHANGE_FURN47': {
      if (state.furn47) {
        return { ...state, furn47: false };
      } else {
        return { ...state, furn47: true };
      }
    }
    case 'CHANGE_FURN48': {
      if (state.furn48) {
        return { ...state, furn48: false };
      } else {
        return { ...state, furn48: true };
      }
    }
    case 'CHANGE_PEEPHOLE':
      return { ...state, peephole: action.peephole };
    default:
      return state;
  }
}

const CalcMain = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    outFace: "1",
    inFace: "10",
    sealing: "20",
    insulation: "24",
    insulation27: false,
    insulation28: false,
    depth: "30",
    locker: "34",
    furn41: false,
    furn42: false,
    furn43: false,
    furn44: false,
    furn45: false,
    furn46: false,
    furn47: false,
    furn48: false,
    peephole: "50",
    summ: props.calc[0].price
  });
  return (
    <div className="calc_main">
      <CalcSelect state={state} dispatch={dispatch} step={props.step} setStep={props.setStep} calc={props.calc} />
      <CalcTotal state={state} dispatch={dispatch} step={props.step} setStep={props.setStep} calc={props.calc} />
    </div>
  );
}

export default CalcMain;
