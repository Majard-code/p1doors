import { useReducer, useEffect } from 'react';
import { removeClass, addClass } from './lib1';
import { AUTO_SLIDE, NEXT_SLIDE, PREV_SLIDE, WANT_SLIDE } from './actions1';

const reducer = (state, action) => {
    switch (action.type) {
        case AUTO_SLIDE:
            if (state.slide < state.slides) {
                return { ...state, slide: state.slide + 1 };
            } else {
                return { ...state, slide: 1 };
            }
        case NEXT_SLIDE:
            window.clearTimeout(action.timeoutHandle);
            if (state.slide < state.slides) {
                return { ...state, slide: state.slide + 1 };
            } else {
                return { ...state, slide: 1 };
            }
        case PREV_SLIDE:
            window.clearTimeout(action.timeoutHandle);
            if (state.slide > 1) {
                return { ...state, slide: state.slide - 1 };
            } else {
                return { ...state, slide: state.slides };
            }
        case WANT_SLIDE:
            window.clearTimeout(action.timeoutHandle);
            return { ...state, slide: action.num };

        default:
            return state;

    }
}

const initState = {
    slides: 7,
    slide: 1,
}

export const useSlider = () => {
    const [state, dispatch] = useReducer(reducer, initState);


    useEffect(() => {
        document.querySelectorAll('.slider__slide').forEach((item, i) => {
            if (i === state.slide - 1) {
                addClass(item, 'slider__slide_active');
            } else {
                removeClass(item, 'slider__slide_active');
            }
        });
        document.querySelectorAll('.slider__dot').forEach((item, i) => {
            if (i === state.slide - 1) {
                addClass(item, 'slider__dot_active');
            } else {
                removeClass(item, 'slider__dot_active');
            }
        });
    });

    return dispatch;
}