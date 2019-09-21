import $ from 'jquery';

export const thousands = inData => inData.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${'\u00A0'}`);

export const lcFirst = str => {
    if (!str) return str;
    if (str[0] === 'М') return str;
    return str[0].toLowerCase() + str.slice(1);
}

export const hasClass = (ele,cls) => {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  
export const addClass = (ele,cls) => {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
  }
  
export const removeClass = (ele,cls) => {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s+|^)'+cls+'(\\s+|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  }

let isScrolling = false;

export const trottleScroll = (e) => {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}
const scrolling = (e) => {
    if ($(window).scrollTop() >= 1) {
        $('.header').css('background-color', 'rgba(25, 18, 13, 1)');
    } else {
        $('.header').css('background-color', 'rgba(25, 18, 13, 0.7)');
    }
}