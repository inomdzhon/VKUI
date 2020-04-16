// Является ли переданное значение числовым
export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

// Является ли переданное значение функцией
export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function throttle(fn: any, threshhold = 50, scope = window) {
  let last: number;
  let deferTimer: any;

  return function(...args: any[]) {
    // @ts-ignore
    const context = scope || this;
    const now = Date.now();

    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

export function debounce(fn: any, delay: number, context = window) {
  let timeout: any;
  let args: any[] = null;

  const later = () => fn.apply(context, args);

  return (...a: any[]) => {
    args = a;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
}
