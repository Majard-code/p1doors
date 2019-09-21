// ДЛЯ СЛАЙДЕРА

export const AUTO_SLIDE = 'AUTO_SLIDE';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const WANT_SLIDE = 'WANT_SLIDE';

export const autoSlide = () => {
    return { type: AUTO_SLIDE };
};
export const nextSlide = (timeoutHandle) => {
    return { type: NEXT_SLIDE, timeoutHandle: timeoutHandle };
};
export const prevSlide = (timeoutHandle) => {
    return { type: PREV_SLIDE, timeoutHandle: timeoutHandle };
};
export const wantSlide = (num, timeoutHandle) => {
    return { type: WANT_SLIDE, num: num, timeoutHandle: timeoutHandle };
};

// ДЛЯ КАРУСЕЛИ

export const NEXT_CAROUSEL = 'NEXT_CAROUSEL';
export const PREV_CAROUSEL = 'PREV_CAROUSEL';
export const LOOK_CAROUSEL = 'LOOK_CAROUSEL';
export const UNIT_PURGE = 'UNIT_PURGE';
export const CHANGE_WIDTH = 'CHANGE_WIDTH';
export const LOOK_PURGE = 'LOOK_PURGE';

export const nextCarousel = () => {
    return { type: NEXT_CAROUSEL };
};
export const prevCarousel = () => {
    return { type: PREV_CAROUSEL };
};
export const lookCarousel = (obj) => {
    return { type: LOOK_CAROUSEL, obj: obj };
};
export const unitPurge = () => {
    return { type: UNIT_PURGE};
};
export const changeWidth = (newWidth) => {
    return { type: CHANGE_WIDTH, newWidth: newWidth};
};
export const lookPurge = () => {
    return { type: LOOK_PURGE};
};