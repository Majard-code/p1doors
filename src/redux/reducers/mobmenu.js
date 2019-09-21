const initState = {
    isOpen: false
}

const MOBMENU_TOGGLE = 'MOBMENU_TOGGLE';
const MOBMENU_CLOSE = 'MOBMENU_CLOSE';

const mobmenu = (state = initState, action) => {
    switch(action.type) {
        case MOBMENU_TOGGLE:
            if (state.isOpen) {
                return {
                    ...state,
                    isOpen: false
                }
            } else {
                return {
                    ...state,
                    isOpen: true
                }
            }
        case MOBMENU_CLOSE:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    };
};

export const mobmenuClose = () => ({ type: MOBMENU_CLOSE });
export const mobmenuToggle = () => ({ type: MOBMENU_TOGGLE });

export default mobmenu;