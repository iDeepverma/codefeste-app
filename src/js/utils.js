export const isMobile = function() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatDateTo12HoursTime = function(date) {
  if (!(date instanceof Date))
    throw Error(`Date value expected, got ${date.constructor.name}`);
  return date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
};

export class TypingAnim {
  constructor(elem, msg) {
    this.elem = elem;
    this.msg = msg;
    this.shouldType = null;
  }

  _type() {
    if (!this.shouldType) return;
    this.elem.innerText = this.msg.substr(0, this._msgLength++);
    if (this._msgLength < this.msg.length + 1)
      requestAnimationFrame(this._type.bind(this));
  }

  _erase() {
    if (this.shouldType) return;
    this.elem.innerText = this.msg.substr(0, this._msgLength--);
    if (this._msgLength >= 0) requestAnimationFrame(this._erase.bind(this));
  }

  type() {
    this._msgLength = 0;
    this.shouldType = true;
    return this._type();
  }

  erase() {
    this._msgLength = this.elem.innerText.length;
    this.shouldType = false;
    return this._erase();
  }
}

export const interpolateEaseOutQuad = function(
  currentTime,
  startValue,
  endValue,
  animationDuration
) {
  endValue = endValue - startValue;
  currentTime /= animationDuration;
  return -endValue * currentTime * (currentTime - 2) + startValue;
};
