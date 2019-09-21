import { mobmenuClose } from "./mobmenu";

const initState = {
    name: '',
    phone: '',
    doorName: '',
    calcResult: null,
    popupType: 'INIT',
    isOpen: false
};

const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';
const SET_NAME = 'SET_NAME';
const SET_PHONE = 'SET_PHONE';

const popup = (state = initState, action) => {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                popupType: action.payload,
                isOpen: true
            }
        case CLOSE_POPUP:
            return {
                ...state,
                popupType: 'INIT',
                isOpen: false
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case SET_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        default:
            return state;
    };
};

const openPopupInside = (popupType) => ({ type: OPEN_POPUP, payload: popupType });
export const closePopup = () => ({ type: CLOSE_POPUP });
export const setName = (name) => ({ type: SET_NAME, payload: name });
export const setPhone = (phone) => ({ type: SET_PHONE, payload: phone });

export const openPopup = () => (dispatch) => {
    dispatch(openPopupInside());
    dispatch(mobmenuClose())
}
export default popup;