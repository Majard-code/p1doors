import { useReducer, useEffect } from 'react';
import { NEXT_CAROUSEL, PREV_CAROUSEL, LOOK_CAROUSEL, UNIT_PURGE, unitPurge, lookPurge, LOOK_PURGE } from './actions1';

const reducer = (state, action) => {
    let nextUnitLook;
    let nextLookUnitWidth;
    switch (action.type) {
        case NEXT_CAROUSEL:
            if (state.selectUnit >= -1) {
                nextUnitLook = (state.selectUnit + 1) % state.units;
            } else {
                nextUnitLook = state.units + ((state.selectUnit + 1) % state.units);
                if (nextUnitLook === state.units) nextUnitLook = 0;
            }
            return { ...state, selectUnit: state.selectUnit + 1, unitLook: nextUnitLook };
        case PREV_CAROUSEL:
            if (state.selectUnit >= 1) {
                nextUnitLook = (state.selectUnit - 1) % state.units;
            } else {
                nextUnitLook = state.units + ((state.selectUnit - 1) % state.units);
                if (nextUnitLook === state.units) nextUnitLook = 0;
            }
            return { ...state, selectUnit: state.selectUnit - 1, unitLook: nextUnitLook };
        case LOOK_CAROUSEL:
            if (document.body.clientWidth > 740) {
                nextLookUnitWidth = 720;
            } else {
                nextLookUnitWidth = document.body.clientWidth - 20;
            }
            return { ...state, lookUnitWidth: nextLookUnitWidth, unit: action.obj, isLooking: state.isLooking ? false : true };
        case UNIT_PURGE:
            return { ...state, unit: null };
        case LOOK_PURGE:
            return { ...state, isLooking: false };
        default:
            return state;
    }
}

export const useCarousel = (units, unitWidth, unitsGap, carouselBaseClass, carouselClass, carouselUnitClass) => {
    const [state, dispatch] = useReducer(reducer, {
        units: units,
        lookUnitWidth: unitWidth,
        unitWidth: unitWidth,
        unitsGap: unitsGap,
        radius: Math.round(((unitWidth + unitsGap) / 2) / Math.tan(Math.PI / units)),
        selectUnit: 0,
        unit: null,
        unitLook: 0,
        isLooking: false
    });
    // ОТРИСОВКА
    useEffect(() => {
        document.querySelector(`.${carouselBaseClass}`).style.width = `${state.unitWidth + state.unitsGap}px`;
        document.querySelector(`.${carouselBaseClass}`).style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
        document.querySelectorAll(`.${carouselUnitClass}`).forEach((item, i) => {
            item.style.width = `${state.unitWidth}px`;
            item.style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
            item.style.marginLeft = `-${state.unitWidth / 2}px`;
            item.style.marginTop = `-${state.unitWidth / 9 * 12.8 / 2}px`;
            item.style.background = `url(${require('./serts/sert' + i + '.jpg')}) center center / 100% 100% no-repeat`;
            item.style.transform = `rotateY(${Math.round(i * 360 / state.units)}deg) translateZ(${state.radius}px)`;
        });
    }, [state.units, state.unitWidth, state.unitsGap, state.radius, carouselBaseClass, carouselClass, carouselUnitClass]);
    // ДВИЖЕНИЕ
    useEffect(() => {
        dispatch(lookPurge());
        document.querySelector(`.${carouselBaseClass}`).style.width = `${state.unitWidth + state.unitsGap}px`;
        document.querySelector(`.${carouselBaseClass}`).style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
        let angle = Math.round(state.selectUnit / state.units * -360);
        document.querySelector(`.${carouselClass}`).style.transform = `translateZ(-${state.radius}px) rotateY(${angle}deg)`;
        document.querySelectorAll(`.${carouselUnitClass}`).forEach((item, i) => {
            i === state.unitLook ? item.classList.add('carousel-unit__btn') : item.classList.remove('carousel-unit__btn');
            i === state.unitLook ? item.firstChild.classList.add('carousel-unit__round-btn') : item.firstChild.classList.remove('carousel-unit__round-btn');
            if (i === state.unitLook - 1 || i === state.unitLook + 1 || i === 0 || i === state.units - 1){
                item.style.width = `${state.unitWidth}px`;
                item.style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
                item.style.marginLeft = `-${state.unitWidth / 2}px`;
                item.style.marginTop = `-${state.unitWidth / 9 * 12.8 / 2}px`;
                item.firstChild.classList.remove('carousel-unit__btn_close');
                item.firstChild.classList.add('carousel-unit__btn_look');
            }
        });
    }, [state.selectUnit, state.units, state.unitLook, state.radius, carouselClass, carouselUnitClass, carouselBaseClass, state.unitWidth, state.unitsGap]);
    // ПРОСМОТР
    useEffect(() => {
        if (state.unit) {
            if (state.unit.id === `carousel-unit${state.unitLook}`) {
                if (state.unit.firstChild.classList.contains('carousel-unit__btn_look')) {
                    state.unit.firstChild.classList.remove('carousel-unit__btn_look');
                    state.unit.firstChild.classList.add('carousel-unit__btn_close');
                    document.querySelector(`.${carouselBaseClass}`).style.width = `${state.lookUnitWidth}px`;
                    document.querySelector(`.${carouselBaseClass}`).style.height = `${Math.round(state.lookUnitWidth / 9 * 12.8)}px`;
                    state.unit.style.width = `${state.lookUnitWidth}px`;
                    state.unit.style.height = `${Math.round(state.lookUnitWidth / 9 * 12.8)}px`;
                    state.unit.style.marginLeft = `-${state.lookUnitWidth / 2}px`;
                    state.unit.style.marginTop = `-${state.lookUnitWidth / 9 * 12.8 / 2}px`;
                } else {
                    document.querySelector(`.${carouselBaseClass}`).style.width = `${state.unitWidth + state.unitsGap}px`;
                    document.querySelector(`.${carouselBaseClass}`).style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
                    state.unit.style.width = `${state.unitWidth}px`;
                    state.unit.style.height = `${Math.round(state.unitWidth / 9 * 12.8)}px`;
                    state.unit.style.marginLeft = `-${state.unitWidth / 2}px`;
                    state.unit.style.marginTop = `-${state.unitWidth / 9 * 12.8 / 2}px`;
                    state.unit.firstChild.classList.remove('carousel-unit__btn_close');
                    state.unit.firstChild.classList.add('carousel-unit__btn_look');
                }
            }
            dispatch(unitPurge());
        }
    }, [state.unit, state.isLooking, state.unitLook, carouselBaseClass, state.lookUnitWidth, state.unitWidth, state.unitsGap]);
    return [state, dispatch];
}