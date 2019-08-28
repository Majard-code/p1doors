// ДЛЯ СЛАЙДЕРА

export const AUTO_SLIDE = 'AUTO_SLIDE';
export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const WANT_SLIDE = 'WANT_SLIDE';

export const autoSlide = () => {
    return { type: AUTO_SLIDE };
}
export const nextSlide = (timeoutHandle) => {
    return { type: NEXT_SLIDE, timeoutHandle: timeoutHandle };
}
export const prevSlide = (timeoutHandle) => {
    return { type: PREV_SLIDE, timeoutHandle: timeoutHandle };
}
export const wantSlide = (num, timeoutHandle) => {
    return { type: WANT_SLIDE, num: num, timeoutHandle: timeoutHandle };
}

// ДЛЯ КАРУСЕЛИ

export const NEXT_CAROUSEL = 'NEXT_CAROUSEL';
export const PREV_CAROUSEL = 'PREV_CAROUSEL';
export const OPEN_CAROUSEL = 'OPEN_CAROUSEL';
export const CLOSE_CAROUSEL = 'CLOSE_CAROUSEL';

export const nextCarousel = () => {
    return { type: NEXT_CAROUSEL };
}
export const prevCarousel = () => {
    return { type: PREV_CAROUSEL };
}
export const openCarousel = (obj) => {
    return { type: OPEN_CAROUSEL, obj: obj};
}
export const closeCarousel = (obj) => {
    return { type: CLOSE_CAROUSEL, obj: obj };
}