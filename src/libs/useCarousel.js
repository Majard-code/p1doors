import { useReducer, useEffect } from 'react';
import { NEXT_CAROUSEL, PREV_CAROUSEL, OPEN_CAROUSEL, CLOSE_CAROUSEL } from './actions1';
import { addClass, removeClass, hasClass } from './lib1';

const reducer = (state, action) => {
    switch (action.type) {
        case NEXT_CAROUSEL:
            return { ...state, selectUnit: state.selectUnit + 1 };
        case PREV_CAROUSEL:
            return { ...state, selectUnit: state.selectUnit - 1 };
        case OPEN_CAROUSEL:
            return { ...state, unit: action.obj, isLooking: true };
        case CLOSE_CAROUSEL:
            return { ...state, unit: action.obj, isLooking: false };
        default:
            return state;
    }
}

export const useCarousel = (units, unitWidth, unitsGap, carouselBaseClass, carouselClass, carouselUnitClass) => {
    const [state, dispatch] = useReducer(reducer, {
        units: units,
        unitWidth: unitWidth,
        unitsGap: unitsGap,
        radius: Math.round(((unitWidth + unitsGap) / 2) / Math.tan(Math.PI / units)),
        selectUnit: 0,
        unit: null,
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
            item.style.transform = `rotateY(${Math.round(i * 360 / state.units)}deg) translateZ(${state.radius}px)`;
        });
        console.log(state.radius);
    }, [state.units, state.unitWidth, state.unitsGap, state.radius, carouselBaseClass, carouselClass, carouselUnitClass]);
    // ДВИЖЕНИЕ
    useEffect(() => {
        let angle = state.selectUnit / state.units * -360;
        document.querySelector(`.${carouselClass}`).style.transform = `translateZ(-${state.radius}px) rotateY(${angle}deg)`;
    }, [state, carouselClass]);
    // ПРОСМОТР
    useEffect(() => {
        if (state.unit) {
            debugger;
            if (hasClass(state.unit, 'carousel__unit-look')) {
                debugger;
                removeClass(state.unit, 'carousel__unit-look');
            } else {
                debugger;
                addClass(state.unit, 'carousel__unit-look');
            }




        }
    }, [state.unit]);

    return dispatch;
}