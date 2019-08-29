export const thousands = inData => inData.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${'\u2009'}`);

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
