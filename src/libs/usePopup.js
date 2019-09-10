import { useReducer, useEffect } from 'react';
import { OPEN_CALL_MEASURER, CLOSE_POPUP } from './actions1';

const reducer = (state, action) => {
    switch (action.type) {
        case OPEN_CALL_MEASURER:
            return { ...state,
                isOpen: true
            };
        case CLOSE_POPUP:
            return { ...state,
                isOpen: false
            }
        default:
            return state;
    }
}

export const usePopup = () => {
    const [state, dispatch] = useReducer ( reducer, {
        isOpen: false
    });

    useEffect(() => {
        if (state.isOpen) {
            document.querySelector('.popup').style.display = 'block';
        } else {
            document.querySelector('.popup').style.display = 'none';
        }

    }, [state.isOpen]);
    return [state, dispatch];
}