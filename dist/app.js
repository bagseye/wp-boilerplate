/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLASSES": () => (/* binding */ CLASSES),
/* harmony export */   "CLASS_ACTIVE": () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   "CLASS_ARROW": () => (/* binding */ CLASS_ARROW),
/* harmony export */   "CLASS_ARROWS": () => (/* binding */ CLASS_ARROWS),
/* harmony export */   "CLASS_ARROW_NEXT": () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   "CLASS_ARROW_PREV": () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   "CLASS_CLONE": () => (/* binding */ CLASS_CLONE),
/* harmony export */   "CLASS_CONTAINER": () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   "CLASS_FOCUS_IN": () => (/* binding */ CLASS_FOCUS_IN),
/* harmony export */   "CLASS_INITIALIZED": () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   "CLASS_LIST": () => (/* binding */ CLASS_LIST),
/* harmony export */   "CLASS_LOADING": () => (/* binding */ CLASS_LOADING),
/* harmony export */   "CLASS_NEXT": () => (/* binding */ CLASS_NEXT),
/* harmony export */   "CLASS_PAGINATION": () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   "CLASS_PAGINATION_PAGE": () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   "CLASS_PREV": () => (/* binding */ CLASS_PREV),
/* harmony export */   "CLASS_PROGRESS": () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   "CLASS_PROGRESS_BAR": () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   "CLASS_ROOT": () => (/* binding */ CLASS_ROOT),
/* harmony export */   "CLASS_SLIDE": () => (/* binding */ CLASS_SLIDE),
/* harmony export */   "CLASS_SPINNER": () => (/* binding */ CLASS_SPINNER),
/* harmony export */   "CLASS_SR": () => (/* binding */ CLASS_SR),
/* harmony export */   "CLASS_TOGGLE": () => (/* binding */ CLASS_TOGGLE),
/* harmony export */   "CLASS_TOGGLE_PAUSE": () => (/* binding */ CLASS_TOGGLE_PAUSE),
/* harmony export */   "CLASS_TOGGLE_PLAY": () => (/* binding */ CLASS_TOGGLE_PLAY),
/* harmony export */   "CLASS_TRACK": () => (/* binding */ CLASS_TRACK),
/* harmony export */   "CLASS_VISIBLE": () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   "DEFAULTS": () => (/* binding */ DEFAULTS),
/* harmony export */   "EVENT_ACTIVE": () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   "EVENT_ARROWS_MOUNTED": () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   "EVENT_ARROWS_UPDATED": () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   "EVENT_AUTOPLAY_PAUSE": () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   "EVENT_AUTOPLAY_PLAY": () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   "EVENT_AUTOPLAY_PLAYING": () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   "EVENT_CLICK": () => (/* binding */ EVENT_CLICK),
/* harmony export */   "EVENT_DESTROY": () => (/* binding */ EVENT_DESTROY),
/* harmony export */   "EVENT_DRAG": () => (/* binding */ EVENT_DRAG),
/* harmony export */   "EVENT_DRAGGED": () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   "EVENT_DRAGGING": () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   "EVENT_HIDDEN": () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   "EVENT_INACTIVE": () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   "EVENT_LAZYLOAD_LOADED": () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   "EVENT_MOUNTED": () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   "EVENT_MOVE": () => (/* binding */ EVENT_MOVE),
/* harmony export */   "EVENT_MOVED": () => (/* binding */ EVENT_MOVED),
/* harmony export */   "EVENT_NAVIGATION_MOUNTED": () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_MOUNTED": () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   "EVENT_PAGINATION_UPDATED": () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   "EVENT_READY": () => (/* binding */ EVENT_READY),
/* harmony export */   "EVENT_REFRESH": () => (/* binding */ EVENT_REFRESH),
/* harmony export */   "EVENT_RESIZE": () => (/* binding */ EVENT_RESIZE),
/* harmony export */   "EVENT_RESIZED": () => (/* binding */ EVENT_RESIZED),
/* harmony export */   "EVENT_SCROLL": () => (/* binding */ EVENT_SCROLL),
/* harmony export */   "EVENT_SCROLLED": () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   "EVENT_SHIFTED": () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   "EVENT_SLIDE_KEYDOWN": () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   "EVENT_UPDATED": () => (/* binding */ EVENT_UPDATED),
/* harmony export */   "EVENT_VISIBLE": () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   "EventBinder": () => (/* binding */ EventBinder),
/* harmony export */   "EventInterface": () => (/* binding */ EventInterface),
/* harmony export */   "FADE": () => (/* binding */ FADE),
/* harmony export */   "LOOP": () => (/* binding */ LOOP),
/* harmony export */   "LTR": () => (/* binding */ LTR),
/* harmony export */   "RTL": () => (/* binding */ RTL),
/* harmony export */   "RequestInterval": () => (/* binding */ RequestInterval),
/* harmony export */   "SLIDE": () => (/* binding */ SLIDE),
/* harmony export */   "STATUS_CLASSES": () => (/* binding */ STATUS_CLASSES),
/* harmony export */   "Splide": () => (/* binding */ Splide),
/* harmony export */   "SplideRenderer": () => (/* binding */ SplideRenderer),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "TTB": () => (/* binding */ TTB),
/* harmony export */   "Throttle": () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.0.6
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  return subject instanceof HTMLElement;
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    var keys = ownKeys(object);
    keys = right ? keys.reverse() : keys;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  toArray(keys || ownKeys(object)).forEach(function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, minOrMax, maxOrMin, exclusive) {
  var minimum = min(minOrMax, maxOrMin);
  var maximum = max(minOrMax, maxOrMin);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_SHIFTED = "shifted";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_SLIDE_KEYDOWN = "slide:keydown";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      raf(update);
    }
  }

  function start(resume) {
    !resume && cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval;

  function throttled() {
    if (!interval) {
      interval = RequestInterval(duration || 0, function () {
        func();
        interval = null;
      }, null, 1);
      interval.start();
    }
  }

  return throttled;
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, user) {
    merge(options, opts);
    user && merge(Object.getPrototypeOf(options), opts);

    if (!state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = PROJECT_CODE + "__track";
var CLASS_LIST = PROJECT_CODE + "__list";
var CLASS_SLIDE = PROJECT_CODE + "__slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = PROJECT_CODE + "__arrows";
var CLASS_ARROW = PROJECT_CODE + "__arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = PROJECT_CODE + "__pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = PROJECT_CODE + "__progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = PROJECT_CODE + "__toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = PROJECT_CODE + "__spinner";
var CLASS_SR = PROJECT_CODE + "__sr";
var CLASS_INITIALIZED = "is-initialized";
var CLASS_ACTIVE = "is-active";
var CLASS_PREV = "is-prev";
var CLASS_NEXT = "is-next";
var CLASS_VISIBLE = "is-visible";
var CLASS_LOADING = "is-loading";
var CLASS_FOCUS_IN = "is-focus-in";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var focusableNodes = queryAll(slide, options.focusableNodes || "");
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(focusableNodes, TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left");
    var right = resolve("right");
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      Slides2.sort(function (Slide1, Slide2) {
        return Slide1.index - Slide2.index;
      });
    });
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    rootRect = null;
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize();
  }

  function resize() {
    var newRect = rect(root);

    if (!rootRect || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize() {
    return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  return {
    mount: mount,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
  }

  function init() {
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      emit(EVENT_RESIZE);
    }
  }

  function destroy() {
    remove(clones);
    empty(clones);
  }

  function observe() {
    if (cloneCount < computeCloneCount()) {
      emit(EVENT_REFRESH);
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (!clones2) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition());
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize() - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH], init);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    var index = clamp(currIndex, 0, slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      setIndex(loop(Move.toIndex(getPosition())));
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, getEnd());
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : getEnd();
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough()) {
      var end = getEnd();
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > end) {
        if (between(0, dest, from, true) || between(end, from, dest, true)) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? end : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    return max(slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage), 0);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
  }

  function toPage(index) {
    return hasFocus() ? index : floor((index >= getEnd() ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, getEnd()) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var userArrows = Elements.arrows,
      track = Elements.track;
  var wrapper = userArrows;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(userArrows ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = userArrows || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !userArrows && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    var index = Splide2.index;
    var prevIndex = Controller.getPrev();
    var nextIndex = Controller.getNext();
    var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
    var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
    prev.disabled = prevIndex < 0;
    next.disabled = nextIndex < 0;
    setAttribute(prev, ARIA_LABEL, prevLabel);
    setAttribute(next, ARIA_LABEL, nextLabel);
    emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on,
      bind = _EventInterface7.bind,
      emit = _EventInterface7.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (Splide2.is(SLIDE) && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      emit = _EventInterface10.emit,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      bind = _EventInterface11.bind,
      unbind = _EventInterface11.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      on = _EventInterface12.on,
      off = _EventInterface12.off,
      bind = _EventInterface12.bind,
      emit = _EventInterface12.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOUNTED, EVENT_REFRESH, EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
      isSequential || on(events, observe);
    }
  }

  function init() {
    empty(entries);
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
    isSequential && loadNext();
  }

  function observe() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries)
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH], mount);

    if (options.pagination && Slides.isEnough()) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(Elements.pagination ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? length : ceil(length / perPage);
    list = Elements.pagination || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function setup() {
    Splide2.options = {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    };
  }

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: setup,
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      bind = _EventInterface13.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface14 = EventInterface(Splide2),
      on = _EventInterface14.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var _EventInterface15 = EventInterface(Splide2),
      on = _EventInterface15.on;

  function mount() {
    on([EVENT_MOUNTED, EVENT_REFRESH], function () {
      nextTick(function () {
        Components2.Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
      });
    });
  }

  function start(index, done) {
    var track = Components2.Elements.track;
    style(track, "height", unit(rect(track).height));
    nextTick(function () {
      done();
      style(track, "height", "");
    });
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var _EventInterface16 = EventInterface(Splide2),
      bind = _EventInterface16.bind;

  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface17 = EventInterface(splide),
        on = _EventInterface17.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ }),

/***/ "./gutenberg/customer-testimonials/utils-testimonials.js":
/*!***************************************************************!*\
  !*** ./gutenberg/customer-testimonials/utils-testimonials.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignTestimonials": () => (/* binding */ assignTestimonials),
/* harmony export */   "testimonials": () => (/* binding */ testimonials)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide_css_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide/css/core */ "./node_modules/@splidejs/splide/dist/css/splide-core.min.css");


var testimonials = document.querySelectorAll(".testimonials");
function assignTestimonials(items) {
  items.forEach(function (item) {
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](item, {
      type: "fade",
      rewind: true,
      arrows: false,
      pagination: true,
      autoplay: false,
      autoHeight: true,
      classes: {
        arrows: "splide__arrows testimonials__arrows",
        arrow: "splide__arrow testimonials__arrow",
        prev: "splide__arrow--prev testimonials__arrow--prev",
        next: "splide__arrow--next testimonials__arrow--next",
        pagination: "splide__pagination testimonials__pagination",
        page: "splide__pagination__page testimonials__pagination--page"
      }
    }).mount();
  });
}

/***/ }),

/***/ "./gutenberg/faqs/utils-faqs.js":
/*!**************************************!*\
  !*** ./gutenberg/faqs/utils-faqs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignFaqListeners": () => (/* binding */ assignFaqListeners),
/* harmony export */   "faqItem": () => (/* binding */ faqItem)
/* harmony export */ });
var faqItem = document.querySelectorAll(".faq__item");
function assignFaqListeners(items) {
  items.forEach(function (item) {
    var faqQuestion = item.querySelector(".faq__question");
    faqQuestion.addEventListener("click", function () {
      return toggleFaq(faqQuestion);
    });
  });
}

function toggleFaq(faqItem) {
  faqItem.classList.toggle("faq__open");
}

/***/ }),

/***/ "./gutenberg/hero/utils-hero.js":
/*!**************************************!*\
  !*** ./gutenberg/hero/utils-hero.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignHero": () => (/* binding */ assignHero),
/* harmony export */   "heroBanners": () => (/* binding */ heroBanners)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide_css_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/splide/css/core */ "./node_modules/@splidejs/splide/dist/css/splide-core.min.css");


var heroBanners = document.querySelectorAll(".hero.splide");
function assignHero(items) {
  items.forEach(function (heroBanner) {
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](heroBanner, {
      type: "fade",
      rewind: true,
      arrows: false,
      pagination: false,
      autoplay: true,
      classes: {
        arrows: "splide__arrows hero__arrows",
        arrow: "splide__arrow hero__arrow",
        prev: "splide__arrow--prev hero__arrow--prev",
        next: "splide__arrow--next hero__arrow--next",
        pagination: "splide__pagination hero__pagination",
        page: "splide__pagination__page hero__pagination--page"
      }
    }).mount();
  });
}

/***/ }),

/***/ "./js/utils-nav.js":
/*!*************************!*\
  !*** ./js/utils-nav.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navButton": () => (/* binding */ navButton),
/* harmony export */   "toggleNav": () => (/* binding */ toggleNav),
/* harmony export */   "trackScrollPosition": () => (/* binding */ trackScrollPosition)
/* harmony export */ });
var navButton = document.querySelector("#navigationButton");
function toggleNav() {
  var body = document.body;

  if (body.classList.contains("headernavigation__open")) {
    body.classList.remove("headernavigation__open");
    var scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    navButton.setAttribute("aria-expanded", "false");
  } else {
    body.classList.add("headernavigation__open");

    var _scrollY = document.documentElement.style.getPropertyValue("--scroll-y");

    body.style.position = "fixed";
    body.style.top = "-".concat(_scrollY);
    navButton.setAttribute("aria-expanded", "true");
  }
}
function trackScrollPosition() {
  document.documentElement.style.setProperty("--scroll-y", "".concat(window.scrollY, "px"));
}

/***/ }),

/***/ "./node_modules/@splidejs/splide/dist/css/splide-core.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/css/splide-core.min.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils-nav */ "./js/utils-nav.js");
/* harmony import */ var _gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gutenberg/faqs/utils-faqs.js */ "./gutenberg/faqs/utils-faqs.js");
/* harmony import */ var _gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gutenberg/customer-testimonials/utils-testimonials */ "./gutenberg/customer-testimonials/utils-testimonials.js");
/* harmony import */ var _gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gutenberg/hero/utils-hero */ "./gutenberg/hero/utils-hero.js");





if (_utils_nav__WEBPACK_IMPORTED_MODULE_0__.navButton) {
  _utils_nav__WEBPACK_IMPORTED_MODULE_0__.navButton.addEventListener("click", _utils_nav__WEBPACK_IMPORTED_MODULE_0__.toggleNav);
}

window.addEventListener("scroll", _utils_nav__WEBPACK_IMPORTED_MODULE_0__.trackScrollPosition);

if (_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.faqItem.length >= 1) {
  (0,_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.assignFaqListeners)(_gutenberg_faqs_utils_faqs_js__WEBPACK_IMPORTED_MODULE_1__.faqItem);
}

if (_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.testimonials.length >= 1) {
  (0,_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.assignTestimonials)(_gutenberg_customer_testimonials_utils_testimonials__WEBPACK_IMPORTED_MODULE_2__.testimonials);
}

if (_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.heroBanners.length > 0) {
  (0,_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.assignHero)(_gutenberg_hero_utils_hero__WEBPACK_IMPORTED_MODULE_3__.heroBanners);
}

function getSelect(selectObject) {
  var value = selectObject.value;
  window.location.pathname = "/category/" + value;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTRDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQ7O0FBRS9QLDhEQUE4RCxzRUFBc0UsOERBQThELGtEQUFrRCxpQkFBaUIsR0FBRzs7QUFFeFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpQkFBaUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QiwwQ0FBMEM7QUFDeEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RCxLQUFLLElBQUk7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQ0FBMkM7O0FBRWhEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxPQUFPO0FBQ1AsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHNEQUFzRDtBQUN0RDtBQUNBLDJCQUEyQix1Q0FBdUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUCwyQkFBMkI7QUFDM0I7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRWlsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2pIbGxDO0FBQ0E7QUFFTyxJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBckI7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7RUFDeENBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtJQUN0QixJQUFJUCx3REFBSixDQUFXTyxJQUFYLEVBQWlCO01BQ2ZDLElBQUksRUFBRSxNQURTO01BRWZDLE1BQU0sRUFBRSxJQUZPO01BR2ZDLE1BQU0sRUFBRSxLQUhPO01BSWZDLFVBQVUsRUFBRSxJQUpHO01BS2ZDLFFBQVEsRUFBRSxLQUxLO01BTWZDLFVBQVUsRUFBRSxJQU5HO01BT2ZDLE9BQU8sRUFBRTtRQUNQSixNQUFNLEVBQUUscUNBREQ7UUFFUEssS0FBSyxFQUFFLG1DQUZBO1FBR1BDLElBQUksRUFBRSwrQ0FIQztRQUlQQyxJQUFJLEVBQUUsK0NBSkM7UUFLUE4sVUFBVSxFQUFFLDZDQUxMO1FBTVBPLElBQUksRUFBRTtNQU5DO0lBUE0sQ0FBakIsRUFlR0MsS0FmSDtFQWdCRCxDQWpCRDtBQWtCRDs7Ozs7Ozs7Ozs7Ozs7O0FDeEJNLElBQU1DLE9BQU8sR0FBR2xCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBaEI7QUFFQSxTQUFTa0Isa0JBQVQsQ0FBNEJoQixLQUE1QixFQUFtQztFQUN4Q0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0lBQ3RCLElBQU1lLFdBQVcsR0FBR2YsSUFBSSxDQUFDZ0IsYUFBTCxDQUFtQixnQkFBbkIsQ0FBcEI7SUFFQUQsV0FBVyxDQUFDRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQztNQUFBLE9BQU1DLFNBQVMsQ0FBQ0gsV0FBRCxDQUFmO0lBQUEsQ0FBdEM7RUFDRCxDQUpEO0FBS0Q7O0FBRUQsU0FBU0csU0FBVCxDQUFtQkwsT0FBbkIsRUFBNEI7RUFDMUJBLE9BQU8sQ0FBQ00sU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsV0FBekI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDtBQUNBO0FBRU8sSUFBTUMsV0FBVyxHQUFHMUIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixjQUExQixDQUFwQjtBQUVBLFNBQVMwQixVQUFULENBQW9CeEIsS0FBcEIsRUFBMkI7RUFDaENBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUN3QixVQUFELEVBQWdCO0lBQzVCLElBQUk5Qix3REFBSixDQUFXOEIsVUFBWCxFQUF1QjtNQUNyQnRCLElBQUksRUFBRSxNQURlO01BRXJCQyxNQUFNLEVBQUUsSUFGYTtNQUdyQkMsTUFBTSxFQUFFLEtBSGE7TUFJckJDLFVBQVUsRUFBRSxLQUpTO01BS3JCQyxRQUFRLEVBQUUsSUFMVztNQU1yQkUsT0FBTyxFQUFFO1FBQ1BKLE1BQU0sRUFBRSw2QkFERDtRQUVQSyxLQUFLLEVBQUUsMkJBRkE7UUFHUEMsSUFBSSxFQUFFLHVDQUhDO1FBSVBDLElBQUksRUFBRSx1Q0FKQztRQUtQTixVQUFVLEVBQUUscUNBTEw7UUFNUE8sSUFBSSxFQUFFO01BTkM7SUFOWSxDQUF2QixFQWNHQyxLQWRIO0VBZUQsQ0FoQkQ7QUFpQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Qk0sSUFBTVksU0FBUyxHQUFHN0IsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7QUFFQSxTQUFTUyxTQUFULEdBQXFCO0VBQzFCLElBQU1DLElBQUksR0FBRy9CLFFBQVEsQ0FBQytCLElBQXRCOztFQUNBLElBQUlBLElBQUksQ0FBQ1AsU0FBTCxDQUFlUSxRQUFmLENBQXdCLHdCQUF4QixDQUFKLEVBQXVEO0lBQ3JERCxJQUFJLENBQUNQLFNBQUwsQ0FBZVMsTUFBZixDQUFzQix3QkFBdEI7SUFDQSxJQUFNQyxPQUFPLEdBQUdILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxHQUEzQjtJQUNBTCxJQUFJLENBQUNJLEtBQUwsQ0FBV0UsUUFBWCxHQUFzQixFQUF0QjtJQUNBTixJQUFJLENBQUNJLEtBQUwsQ0FBV0MsR0FBWCxHQUFpQixFQUFqQjtJQUNBRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFFBQVEsQ0FBQ04sT0FBTyxJQUFJLEdBQVosQ0FBUixHQUEyQixDQUFDLENBQS9DO0lBQ0FMLFNBQVMsQ0FBQ1ksWUFBVixDQUF1QixlQUF2QixFQUF3QyxPQUF4QztFQUNELENBUEQsTUFPTztJQUNMVixJQUFJLENBQUNQLFNBQUwsQ0FBZWtCLEdBQWYsQ0FBbUIsd0JBQW5COztJQUNBLElBQU1SLFFBQU8sR0FDWGxDLFFBQVEsQ0FBQzJDLGVBQVQsQ0FBeUJSLEtBQXpCLENBQStCUyxnQkFBL0IsQ0FBZ0QsWUFBaEQsQ0FERjs7SUFFQWIsSUFBSSxDQUFDSSxLQUFMLENBQVdFLFFBQVgsR0FBc0IsT0FBdEI7SUFDQU4sSUFBSSxDQUFDSSxLQUFMLENBQVdDLEdBQVgsY0FBcUJGLFFBQXJCO0lBQ0FMLFNBQVMsQ0FBQ1ksWUFBVixDQUF1QixlQUF2QixFQUF3QyxNQUF4QztFQUNEO0FBQ0Y7QUFFTSxTQUFTSSxtQkFBVCxHQUErQjtFQUNwQzdDLFFBQVEsQ0FBQzJDLGVBQVQsQ0FBeUJSLEtBQXpCLENBQStCVyxXQUEvQixDQUNFLFlBREYsWUFFS1IsTUFBTSxDQUFDSixPQUZaO0FBSUQ7Ozs7Ozs7Ozs7O0FDMUJEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUlBOztBQUVBLElBQUlMLGlEQUFKLEVBQWU7RUFDYkEsa0VBQUEsQ0FBMkIsT0FBM0IsRUFBb0NDLGlEQUFwQztBQUNEOztBQUVEUSxNQUFNLENBQUNoQixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ3VCLDJEQUFsQzs7QUFFQSxJQUFJM0IseUVBQUEsSUFBa0IsQ0FBdEIsRUFBeUI7RUFDdkJDLGlGQUFrQixDQUFDRCxrRUFBRCxDQUFsQjtBQUNEOztBQUVELElBQUluQixvR0FBQSxJQUF1QixDQUEzQixFQUE4QjtFQUM1QkcsdUdBQWtCLENBQUNILDZGQUFELENBQWxCO0FBQ0Q7O0FBRUQsSUFBSTJCLDBFQUFBLEdBQXFCLENBQXpCLEVBQTRCO0VBQzFCQyxzRUFBVSxDQUFDRCxtRUFBRCxDQUFWO0FBQ0Q7O0FBRUQsU0FBU3NCLFNBQVQsQ0FBbUJDLFlBQW5CLEVBQWlDO0VBQy9CLElBQUlDLEtBQUssR0FBR0QsWUFBWSxDQUFDQyxLQUF6QjtFQUNBWixNQUFNLENBQUNhLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCLGVBQWVGLEtBQTFDO0FBQ0QsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9qcy9zcGxpZGUuZXNtLmpzIiwid2VicGFjazovL3dwLWJvaWxlcnBsYXRlLy4vZ3V0ZW5iZXJnL2N1c3RvbWVyLXRlc3RpbW9uaWFscy91dGlscy10ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvLi9ndXRlbmJlcmcvZmFxcy91dGlscy1mYXFzLmpzIiwid2VicGFjazovL3dwLWJvaWxlcnBsYXRlLy4vZ3V0ZW5iZXJnL2hlcm8vdXRpbHMtaGVyby5qcyIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL2pzL3V0aWxzLW5hdi5qcyIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9Ac3BsaWRlanMvc3BsaWRlL2Rpc3QvY3NzL3NwbGlkZS1jb3JlLm1pbi5jc3M/YmY0MyIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd3AtYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93cC1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dwLWJvaWxlcnBsYXRlLy4vanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogNC4wLjZcbiAqIExpY2Vuc2UgIDogTUlUXG4gKiBDb3B5cmlnaHQ6IDIwMjIgTmFvdG9zaGkgRnVqaXRhXG4gKi9cbnZhciBNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OID0gXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiO1xudmFyIENSRUFURUQgPSAxO1xudmFyIE1PVU5URUQgPSAyO1xudmFyIElETEUgPSAzO1xudmFyIE1PVklORyA9IDQ7XG52YXIgU0NST0xMSU5HID0gNTtcbnZhciBEUkFHR0lORyA9IDY7XG52YXIgREVTVFJPWUVEID0gNztcbnZhciBTVEFURVMgPSB7XG4gIENSRUFURUQ6IENSRUFURUQsXG4gIE1PVU5URUQ6IE1PVU5URUQsXG4gIElETEU6IElETEUsXG4gIE1PVklORzogTU9WSU5HLFxuICBTQ1JPTExJTkc6IFNDUk9MTElORyxcbiAgRFJBR0dJTkc6IERSQUdHSU5HLFxuICBERVNUUk9ZRUQ6IERFU1RST1lFRFxufTtcblxuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgYXJyYXkubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gc2xpY2UoYXJyYXlMaWtlLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIHN0YXJ0LCBlbmQpO1xufVxuXG5mdW5jdGlvbiBhcHBseShmdW5jKSB7XG4gIHJldHVybiBmdW5jLmJpbmQuYXBwbHkoZnVuYywgW251bGxdLmNvbmNhdChzbGljZShhcmd1bWVudHMsIDEpKSk7XG59XG5cbnZhciBuZXh0VGljayA9IHNldFRpbWVvdXQ7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiByYWYoZnVuYykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2YodHlwZSwgc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09IHR5cGU7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICFpc051bGwoc3ViamVjdCkgJiYgdHlwZU9mKFwib2JqZWN0XCIsIHN1YmplY3QpO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgaXNGdW5jdGlvbiA9IGFwcGx5KHR5cGVPZiwgXCJmdW5jdGlvblwiKTtcbnZhciBpc1N0cmluZyA9IGFwcGx5KHR5cGVPZiwgXCJzdHJpbmdcIik7XG52YXIgaXNVbmRlZmluZWQgPSBhcHBseSh0eXBlT2YsIFwidW5kZWZpbmVkXCIpO1xuXG5mdW5jdGlvbiBpc051bGwoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKHZhbHVlcywgaXRlcmF0ZWUpIHtcbiAgdG9BcnJheSh2YWx1ZXMpLmZvckVhY2goaXRlcmF0ZWUpO1xufVxuXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXksIGl0ZW1zKSB7XG4gIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHRvQXJyYXkoaXRlbXMpKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGFkZCkge1xuICBpZiAoZWxtKSB7XG4gICAgZm9yRWFjaChjbGFzc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFthZGQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0obmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIHRvZ2dsZUNsYXNzKGVsbSwgaXNTdHJpbmcoY2xhc3NlcykgPyBjbGFzc2VzLnNwbGl0KFwiIFwiKSA6IGNsYXNzZXMsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZHJlbikge1xuICBmb3JFYWNoKGNoaWxkcmVuLCBwYXJlbnQuYXBwZW5kQ2hpbGQuYmluZChwYXJlbnQpKTtcbn1cblxuZnVuY3Rpb24gYmVmb3JlKG5vZGVzLCByZWYpIHtcbiAgZm9yRWFjaChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gKHJlZiB8fCBub2RlKS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCByZWYpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMoZWxtLCBzZWxlY3Rvcikge1xuICByZXR1cm4gaXNIVE1MRWxlbWVudChlbG0pICYmIChlbG1bXCJtc01hdGNoZXNTZWxlY3RvclwiXSB8fCBlbG0ubWF0Y2hlcykuY2FsbChlbG0sIHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50LCBzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4yID0gcGFyZW50ID8gc2xpY2UocGFyZW50LmNoaWxkcmVuKSA6IFtdO1xuICByZXR1cm4gc2VsZWN0b3IgPyBjaGlsZHJlbjIuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBtYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7XG4gIH0pIDogY2hpbGRyZW4yO1xufVxuXG5mdW5jdGlvbiBjaGlsZChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA/IGNoaWxkcmVuKHBhcmVudCwgc2VsZWN0b3IpWzBdIDogcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG52YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5mdW5jdGlvbiBmb3JPd24ob2JqZWN0LCBpdGVyYXRlZSwgcmlnaHQpIHtcbiAgaWYgKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhvYmplY3QpO1xuICAgIGtleXMgPSByaWdodCA/IGtleXMucmV2ZXJzZSgpIDoga2V5cztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09IFwiX19wcm90b19fXCIpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGVlKG9iamVjdFtrZXldLCBrZXkpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gYXNzaWduKG9iamVjdCkge1xuICBzbGljZShhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGZvck93bihzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gbWVyZ2Uob2JqZWN0KSB7XG4gIHNsaWNlKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgZm9yT3duKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IG1lcmdlKHt9LCBpc09iamVjdChvYmplY3Rba2V5XSkgPyBvYmplY3Rba2V5XSA6IHt9LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gb21pdChvYmplY3QsIGtleXMpIHtcbiAgdG9BcnJheShrZXlzIHx8IG93bktleXMob2JqZWN0KSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsbXMsIGF0dHJzKSB7XG4gIGZvckVhY2goZWxtcywgZnVuY3Rpb24gKGVsbSkge1xuICAgIGZvckVhY2goYXR0cnMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShlbG1zLCBhdHRycywgdmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KGF0dHJzKSkge1xuICAgIGZvck93bihhdHRycywgZnVuY3Rpb24gKHZhbHVlMiwgbmFtZSkge1xuICAgICAgc2V0QXR0cmlidXRlKGVsbXMsIG5hbWUsIHZhbHVlMik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChlbG1zLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICBpc051bGwodmFsdWUpIHx8IHZhbHVlID09PSBcIlwiID8gcmVtb3ZlQXR0cmlidXRlKGVsbSwgYXR0cnMpIDogZWxtLnNldEF0dHJpYnV0ZShhdHRycywgU3RyaW5nKHZhbHVlKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMsIHBhcmVudCkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIGlmIChhdHRycykge1xuICAgIGlzU3RyaW5nKGF0dHJzKSA/IGFkZENsYXNzKGVsbSwgYXR0cnMpIDogc2V0QXR0cmlidXRlKGVsbSwgYXR0cnMpO1xuICB9XG5cbiAgcGFyZW50ICYmIGFwcGVuZChwYXJlbnQsIGVsbSk7XG4gIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsbSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsbSlbcHJvcF07XG4gIH1cblxuICBpZiAoIWlzTnVsbCh2YWx1ZSkpIHtcbiAgICBlbG0uc3R5bGVbcHJvcF0gPSBcIlwiICsgdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheShlbG0sIGRpc3BsYXkyKSB7XG4gIHN0eWxlKGVsbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkyKTtcbn1cblxuZnVuY3Rpb24gZm9jdXMoZWxtKSB7XG4gIGVsbVtcInNldEFjdGl2ZVwiXSAmJiBlbG1bXCJzZXRBY3RpdmVcIl0oKSB8fCBlbG0uZm9jdXMoe1xuICAgIHByZXZlbnRTY3JvbGw6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIGF0dHIpIHtcbiAgcmV0dXJuIGVsbS5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbG0gJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZWN0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobm9kZXMpIHtcbiAgZm9yRWFjaChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICByZXR1cm4gY2hpbGQobmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKS5ib2R5KTtcbn1cblxuZnVuY3Rpb24gcHJldmVudChlLCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChzdG9wUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnkocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBbGwocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBzbGljZShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpIDogW107XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdGltZU9mKGUpIHtcbiAgcmV0dXJuIGUudGltZVN0YW1wO1xufVxuXG5mdW5jdGlvbiB1bml0KHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gdmFsdWUgKyBcInB4XCIgOiBcIlwiO1xufVxuXG52YXIgUFJPSkVDVF9DT0RFID0gXCJzcGxpZGVcIjtcbnZhciBEQVRBX0FUVFJJQlVURSA9IFwiZGF0YS1cIiArIFBST0pFQ1RfQ09ERTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltcIiArIFBST0pFQ1RfQ09ERSArIFwiXSBcIiArIChtZXNzYWdlIHx8IFwiXCIpKTtcbiAgfVxufVxuXG52YXIgbWluID0gTWF0aC5taW4sXG4gICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yLFxuICAgIGNlaWwgPSBNYXRoLmNlaWwsXG4gICAgYWJzID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIGFwcHJveGltYXRlbHlFcXVhbCh4LCB5LCBlcHNpbG9uKSB7XG4gIHJldHVybiBhYnMoeCAtIHkpIDwgZXBzaWxvbjtcbn1cblxuZnVuY3Rpb24gYmV0d2VlbihudW1iZXIsIG1pbk9yTWF4LCBtYXhPck1pbiwgZXhjbHVzaXZlKSB7XG4gIHZhciBtaW5pbXVtID0gbWluKG1pbk9yTWF4LCBtYXhPck1pbik7XG4gIHZhciBtYXhpbXVtID0gbWF4KG1pbk9yTWF4LCBtYXhPck1pbik7XG4gIHJldHVybiBleGNsdXNpdmUgPyBtaW5pbXVtIDwgbnVtYmVyICYmIG51bWJlciA8IG1heGltdW0gOiBtaW5pbXVtIDw9IG51bWJlciAmJiBudW1iZXIgPD0gbWF4aW11bTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCB4LCB5KSB7XG4gIHZhciBtaW5pbXVtID0gbWluKHgsIHkpO1xuICB2YXIgbWF4aW11bSA9IG1heCh4LCB5KTtcbiAgcmV0dXJuIG1pbihtYXgobWluaW11bSwgbnVtYmVyKSwgbWF4aW11bSk7XG59XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKyh4ID4gMCkgLSArKHggPCAwKTtcbn1cblxuZnVuY3Rpb24gY2FtZWxUb0tlYmFiKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cmluZywgcmVwbGFjZW1lbnRzKSB7XG4gIGZvckVhY2gocmVwbGFjZW1lbnRzLCBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShcIiVzXCIsIFwiXCIgKyByZXBsYWNlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogXCJcIiArIG51bWJlcjtcbn1cblxudmFyIGlkcyA9IHt9O1xuXG5mdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgcmV0dXJuIFwiXCIgKyBwcmVmaXggKyBwYWQoaWRzW3ByZWZpeF0gPSAoaWRzW3ByZWZpeF0gfHwgMCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCaW5kZXIoKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBiaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICB2YXIgaXNFdmVudFRhcmdldCA9IChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB0YXJnZXQpO1xuICAgICAgdmFyIHJlbW92ZXIgPSBpc0V2ZW50VGFyZ2V0ID8gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0YXJnZXQsIGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJyZW1vdmVMaXN0ZW5lclwiXS5iaW5kKHRhcmdldCwgY2FsbGJhY2spO1xuICAgICAgaXNFdmVudFRhcmdldCA/IHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJhZGRMaXN0ZW5lclwiXShjYWxsYmFjayk7XG4gICAgICBsaXN0ZW5lcnMucHVzaChbdGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlLCBjYWxsYmFjaywgcmVtb3Zlcl0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXJbMF0gPT09IHRhcmdldCAmJiBsaXN0ZW5lclsxXSA9PT0gZXZlbnQgJiYgbGlzdGVuZXJbMl0gPT09IG5hbWVzcGFjZSAmJiAoIWNhbGxiYWNrIHx8IGxpc3RlbmVyWzNdID09PSBjYWxsYmFjaykpIHtcbiAgICAgICAgICBsaXN0ZW5lcls0XSgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwYXRjaCh0YXJnZXQsIHR5cGUsIGRldGFpbCkge1xuICAgIHZhciBlO1xuICAgIHZhciBidWJibGVzID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZSA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXG4gICAgICAgIGRldGFpbDogZGV0YWlsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsIGl0ZXJhdGVlKSB7XG4gICAgZm9yRWFjaCh0YXJnZXRzLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgJiYgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uIChldmVudHMyKSB7XG4gICAgICAgIGV2ZW50czIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TlMpIHtcbiAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBldmVudE5TLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBpdGVyYXRlZSh0YXJnZXQsIGZyYWdtZW50WzBdLCBmcmFnbWVudFsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhWzRdKCk7XG4gICAgfSk7XG4gICAgZW1wdHkobGlzdGVuZXJzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmluZDogYmluZCxcbiAgICB1bmJpbmQ6IHVuYmluZCxcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG52YXIgRVZFTlRfTU9VTlRFRCA9IFwibW91bnRlZFwiO1xudmFyIEVWRU5UX1JFQURZID0gXCJyZWFkeVwiO1xudmFyIEVWRU5UX01PVkUgPSBcIm1vdmVcIjtcbnZhciBFVkVOVF9NT1ZFRCA9IFwibW92ZWRcIjtcbnZhciBFVkVOVF9TSElGVEVEID0gXCJzaGlmdGVkXCI7XG52YXIgRVZFTlRfQ0xJQ0sgPSBcImNsaWNrXCI7XG52YXIgRVZFTlRfQUNUSVZFID0gXCJhY3RpdmVcIjtcbnZhciBFVkVOVF9JTkFDVElWRSA9IFwiaW5hY3RpdmVcIjtcbnZhciBFVkVOVF9WSVNJQkxFID0gXCJ2aXNpYmxlXCI7XG52YXIgRVZFTlRfSElEREVOID0gXCJoaWRkZW5cIjtcbnZhciBFVkVOVF9TTElERV9LRVlET1dOID0gXCJzbGlkZTprZXlkb3duXCI7XG52YXIgRVZFTlRfUkVGUkVTSCA9IFwicmVmcmVzaFwiO1xudmFyIEVWRU5UX1VQREFURUQgPSBcInVwZGF0ZWRcIjtcbnZhciBFVkVOVF9SRVNJWkUgPSBcInJlc2l6ZVwiO1xudmFyIEVWRU5UX1JFU0laRUQgPSBcInJlc2l6ZWRcIjtcbnZhciBFVkVOVF9EUkFHID0gXCJkcmFnXCI7XG52YXIgRVZFTlRfRFJBR0dJTkcgPSBcImRyYWdnaW5nXCI7XG52YXIgRVZFTlRfRFJBR0dFRCA9IFwiZHJhZ2dlZFwiO1xudmFyIEVWRU5UX1NDUk9MTCA9IFwic2Nyb2xsXCI7XG52YXIgRVZFTlRfU0NST0xMRUQgPSBcInNjcm9sbGVkXCI7XG52YXIgRVZFTlRfREVTVFJPWSA9IFwiZGVzdHJveVwiO1xudmFyIEVWRU5UX0FSUk9XU19NT1VOVEVEID0gXCJhcnJvd3M6bW91bnRlZFwiO1xudmFyIEVWRU5UX0FSUk9XU19VUERBVEVEID0gXCJhcnJvd3M6dXBkYXRlZFwiO1xudmFyIEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCA9IFwicGFnaW5hdGlvbjptb3VudGVkXCI7XG52YXIgRVZFTlRfUEFHSU5BVElPTl9VUERBVEVEID0gXCJwYWdpbmF0aW9uOnVwZGF0ZWRcIjtcbnZhciBFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQgPSBcIm5hdmlnYXRpb246bW91bnRlZFwiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BMQVkgPSBcImF1dG9wbGF5OnBsYXlcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QTEFZSU5HID0gXCJhdXRvcGxheTpwbGF5aW5nXCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUEFVU0UgPSBcImF1dG9wbGF5OnBhdXNlXCI7XG52YXIgRVZFTlRfTEFaWUxPQURfTE9BREVEID0gXCJsYXp5bG9hZDpsb2FkZWRcIjtcblxuZnVuY3Rpb24gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMikge1xuICB2YXIgYnVzID0gU3BsaWRlMiA/IFNwbGlkZTIuZXZlbnQuYnVzIDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICB2YXIgYmluZGVyID0gRXZlbnRCaW5kZXIoKTtcblxuICBmdW5jdGlvbiBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgYmluZGVyLmJpbmQoYnVzLCB0b0FycmF5KGV2ZW50cykuam9pbihcIiBcIiksIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgaXNBcnJheShlLmRldGFpbCkgPyBlLmRldGFpbCA6IFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICBiaW5kZXIuZGlzcGF0Y2goYnVzLCBldmVudCwgc2xpY2UoYXJndW1lbnRzLCAxKSk7XG4gIH1cblxuICBpZiAoU3BsaWRlMikge1xuICAgIFNwbGlkZTIuZXZlbnQub24oRVZFTlRfREVTVFJPWSwgYmluZGVyLmRlc3Ryb3kpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2lnbihiaW5kZXIsIHtcbiAgICBidXM6IGJ1cyxcbiAgICBvbjogb24sXG4gICAgb2ZmOiBhcHBseShiaW5kZXIudW5iaW5kLCBidXMpLFxuICAgIGVtaXQ6IGVtaXRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFJlcXVlc3RJbnRlcnZhbChpbnRlcnZhbCwgb25JbnRlcnZhbCwgb25VcGRhdGUsIGxpbWl0KSB7XG4gIHZhciBub3cgPSBEYXRlLm5vdztcbiAgdmFyIHN0YXJ0VGltZTtcbiAgdmFyIHJhdGUgPSAwO1xuICB2YXIgaWQ7XG4gIHZhciBwYXVzZWQgPSB0cnVlO1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgcmF0ZSA9IGludGVydmFsID8gbWluKChub3coKSAtIHN0YXJ0VGltZSkgLyBpbnRlcnZhbCwgMSkgOiAxO1xuICAgICAgb25VcGRhdGUgJiYgb25VcGRhdGUocmF0ZSk7XG5cbiAgICAgIGlmIChyYXRlID49IDEpIHtcbiAgICAgICAgb25JbnRlcnZhbCgpO1xuICAgICAgICBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgICBpZiAobGltaXQgJiYgKytjb3VudCA+PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybiBwYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJhZih1cGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KHJlc3VtZSkge1xuICAgICFyZXN1bWUgJiYgY2FuY2VsKCk7XG4gICAgc3RhcnRUaW1lID0gbm93KCkgLSAocmVzdW1lID8gcmF0ZSAqIGludGVydmFsIDogMCk7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgcmFmKHVwZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV3aW5kKCkge1xuICAgIHN0YXJ0VGltZSA9IG5vdygpO1xuICAgIHJhdGUgPSAwO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShyYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWQgJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgIHJhdGUgPSAwO1xuICAgIGlkID0gMDtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KHRpbWUpIHtcbiAgICBpbnRlcnZhbCA9IHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhdXNlZCgpIHtcbiAgICByZXR1cm4gcGF1c2VkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcmV3aW5kOiByZXdpbmQsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGNhbmNlbDogY2FuY2VsLFxuICAgIHNldDogc2V0LFxuICAgIGlzUGF1c2VkOiBpc1BhdXNlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIHN0YXRlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBpcyhzdGF0ZXMpIHtcbiAgICByZXR1cm4gaW5jbHVkZXModG9BcnJheShzdGF0ZXMpLCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldDogc2V0LFxuICAgIGlzOiBpc1xuICB9O1xufVxuXG5mdW5jdGlvbiBUaHJvdHRsZShmdW5jLCBkdXJhdGlvbikge1xuICB2YXIgaW50ZXJ2YWw7XG5cbiAgZnVuY3Rpb24gdGhyb3R0bGVkKCkge1xuICAgIGlmICghaW50ZXJ2YWwpIHtcbiAgICAgIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKGR1cmF0aW9uIHx8IDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuYygpO1xuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG4gICAgICB9LCBudWxsLCAxKTtcbiAgICAgIGludGVydmFsLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZnVuY3Rpb24gTWVkaWEoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIHN0YXRlID0gU3BsaWRlMi5zdGF0ZTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyB8fCB7fTtcbiAgdmFyIHJlZHVjZWRNb3Rpb24gPSBvcHRpb25zLnJlZHVjZWRNb3Rpb24gfHwge307XG4gIHZhciBiaW5kZXIgPSBFdmVudEJpbmRlcigpO1xuICB2YXIgcXVlcmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHZhciBpc01pbiA9IG9wdGlvbnMubWVkaWFRdWVyeSA9PT0gXCJtaW5cIjtcbiAgICBvd25LZXlzKGJyZWFrcG9pbnRzKS5zb3J0KGZ1bmN0aW9uIChuLCBtKSB7XG4gICAgICByZXR1cm4gaXNNaW4gPyArbiAtICttIDogK20gLSArbjtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJlZ2lzdGVyKGJyZWFrcG9pbnRzW2tleV0sIFwiKFwiICsgKGlzTWluID8gXCJtaW5cIiA6IFwibWF4XCIpICsgXCItd2lkdGg6XCIgKyBrZXkgKyBcInB4KVwiKTtcbiAgICB9KTtcbiAgICByZWdpc3RlcihyZWR1Y2VkTW90aW9uLCBNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIGlmIChjb21wbGV0ZWx5KSB7XG4gICAgICBiaW5kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnMyLCBxdWVyeSkge1xuICAgIHZhciBxdWVyeUxpc3QgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICBiaW5kZXIuYmluZChxdWVyeUxpc3QsIFwiY2hhbmdlXCIsIHVwZGF0ZSk7XG4gICAgcXVlcmllcy5wdXNoKFtvcHRpb25zMiwgcXVlcnlMaXN0XSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIGRlc3Ryb3llZCA9IHN0YXRlLmlzKERFU1RST1lFRCk7XG4gICAgdmFyIGRpcmVjdGlvbiA9IG9wdGlvbnMuZGlyZWN0aW9uO1xuICAgIHZhciBtZXJnZWQgPSBxdWVyaWVzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkMiwgZW50cnkpIHtcbiAgICAgIHJldHVybiBtZXJnZShtZXJnZWQyLCBlbnRyeVsxXS5tYXRjaGVzID8gZW50cnlbMF0gOiB7fSk7XG4gICAgfSwge30pO1xuICAgIG9taXQob3B0aW9ucyk7XG4gICAgc2V0KG1lcmdlZCk7XG5cbiAgICBpZiAob3B0aW9ucy5kZXN0cm95KSB7XG4gICAgICBTcGxpZGUyLmRlc3Ryb3kob3B0aW9ucy5kZXN0cm95ID09PSBcImNvbXBsZXRlbHlcIik7XG4gICAgfSBlbHNlIGlmIChkZXN0cm95ZWQpIHtcbiAgICAgIGRlc3Ryb3kodHJ1ZSk7XG4gICAgICBTcGxpZGUyLm1vdW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiAhPT0gb3B0aW9ucy5kaXJlY3Rpb24gJiYgU3BsaWRlMi5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlKGVuYWJsZSkge1xuICAgIGlmIChtYXRjaE1lZGlhKE1FRElBX1BSRUZFUlNfUkVEVUNFRF9NT1RJT04pLm1hdGNoZXMpIHtcbiAgICAgIGVuYWJsZSA/IG1lcmdlKG9wdGlvbnMsIHJlZHVjZWRNb3Rpb24pIDogb21pdChvcHRpb25zLCBvd25LZXlzKHJlZHVjZWRNb3Rpb24pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXQob3B0cywgdXNlcikge1xuICAgIG1lcmdlKG9wdGlvbnMsIG9wdHMpO1xuICAgIHVzZXIgJiYgbWVyZ2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLCBvcHRzKTtcblxuICAgIGlmICghc3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIFNwbGlkZTIuZW1pdChFVkVOVF9VUERBVEVELCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldHVwOiBzZXR1cCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHJlZHVjZTogcmVkdWNlLFxuICAgIHNldDogc2V0XG4gIH07XG59XG5cbnZhciBBUlJPVyA9IFwiQXJyb3dcIjtcbnZhciBBUlJPV19MRUZUID0gQVJST1cgKyBcIkxlZnRcIjtcbnZhciBBUlJPV19SSUdIVCA9IEFSUk9XICsgXCJSaWdodFwiO1xudmFyIEFSUk9XX1VQID0gQVJST1cgKyBcIlVwXCI7XG52YXIgQVJST1dfRE9XTiA9IEFSUk9XICsgXCJEb3duXCI7XG52YXIgTFRSID0gXCJsdHJcIjtcbnZhciBSVEwgPSBcInJ0bFwiO1xudmFyIFRUQiA9IFwidHRiXCI7XG52YXIgT1JJRU5UQVRJT05fTUFQID0ge1xuICB3aWR0aDogW1wiaGVpZ2h0XCJdLFxuICBsZWZ0OiBbXCJ0b3BcIiwgXCJyaWdodFwiXSxcbiAgcmlnaHQ6IFtcImJvdHRvbVwiLCBcImxlZnRcIl0sXG4gIHg6IFtcInlcIl0sXG4gIFg6IFtcIllcIl0sXG4gIFk6IFtcIlhcIl0sXG4gIEFycm93TGVmdDogW0FSUk9XX1VQLCBBUlJPV19SSUdIVF0sXG4gIEFycm93UmlnaHQ6IFtBUlJPV19ET1dOLCBBUlJPV19MRUZUXVxufTtcblxuZnVuY3Rpb24gRGlyZWN0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmUocHJvcCwgYXhpc09ubHksIGRpcmVjdGlvbikge1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCBvcHRpb25zLmRpcmVjdGlvbjtcbiAgICB2YXIgaW5kZXggPSBkaXJlY3Rpb24gPT09IFJUTCAmJiAhYXhpc09ubHkgPyAxIDogZGlyZWN0aW9uID09PSBUVEIgPyAwIDogLTE7XG4gICAgcmV0dXJuIE9SSUVOVEFUSU9OX01BUFtwcm9wXSAmJiBPUklFTlRBVElPTl9NQVBbcHJvcF1baW5kZXhdIHx8IHByb3AucmVwbGFjZSgvd2lkdGh8bGVmdHxyaWdodC9pLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCkge1xuICAgICAgdmFyIHJlcGxhY2VtZW50ID0gT1JJRU5UQVRJT05fTUFQW21hdGNoLnRvTG93ZXJDYXNlKCldW2luZGV4XSB8fCBtYXRjaDtcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gcmVwbGFjZW1lbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXBsYWNlbWVudC5zbGljZSgxKSA6IHJlcGxhY2VtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb3JpZW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICogKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwgPyAxIDogLTEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIG9yaWVudDogb3JpZW50XG4gIH07XG59XG5cbnZhciBST0xFID0gXCJyb2xlXCI7XG52YXIgVEFCX0lOREVYID0gXCJ0YWJpbmRleFwiO1xudmFyIERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xudmFyIEFSSUFfUFJFRklYID0gXCJhcmlhLVwiO1xudmFyIEFSSUFfQ09OVFJPTFMgPSBBUklBX1BSRUZJWCArIFwiY29udHJvbHNcIjtcbnZhciBBUklBX0NVUlJFTlQgPSBBUklBX1BSRUZJWCArIFwiY3VycmVudFwiO1xudmFyIEFSSUFfU0VMRUNURUQgPSBBUklBX1BSRUZJWCArIFwic2VsZWN0ZWRcIjtcbnZhciBBUklBX0xBQkVMID0gQVJJQV9QUkVGSVggKyBcImxhYmVsXCI7XG52YXIgQVJJQV9MQUJFTExFREJZID0gQVJJQV9QUkVGSVggKyBcImxhYmVsbGVkYnlcIjtcbnZhciBBUklBX0hJRERFTiA9IEFSSUFfUFJFRklYICsgXCJoaWRkZW5cIjtcbnZhciBBUklBX09SSUVOVEFUSU9OID0gQVJJQV9QUkVGSVggKyBcIm9yaWVudGF0aW9uXCI7XG52YXIgQVJJQV9ST0xFREVTQ1JJUFRJT04gPSBBUklBX1BSRUZJWCArIFwicm9sZWRlc2NyaXB0aW9uXCI7XG52YXIgQVJJQV9MSVZFID0gQVJJQV9QUkVGSVggKyBcImxpdmVcIjtcbnZhciBBUklBX0JVU1kgPSBBUklBX1BSRUZJWCArIFwiYnVzeVwiO1xudmFyIEFSSUFfQVRPTUlDID0gQVJJQV9QUkVGSVggKyBcImF0b21pY1wiO1xudmFyIEFMTF9BVFRSSUJVVEVTID0gW1JPTEUsIFRBQl9JTkRFWCwgRElTQUJMRUQsIEFSSUFfQ09OVFJPTFMsIEFSSUFfQ1VSUkVOVCwgQVJJQV9MQUJFTCwgQVJJQV9MQUJFTExFREJZLCBBUklBX0hJRERFTiwgQVJJQV9PUklFTlRBVElPTiwgQVJJQV9ST0xFREVTQ1JJUFRJT05dO1xudmFyIENMQVNTX1JPT1QgPSBQUk9KRUNUX0NPREU7XG52YXIgQ0xBU1NfVFJBQ0sgPSBQUk9KRUNUX0NPREUgKyBcIl9fdHJhY2tcIjtcbnZhciBDTEFTU19MSVNUID0gUFJPSkVDVF9DT0RFICsgXCJfX2xpc3RcIjtcbnZhciBDTEFTU19TTElERSA9IFBST0pFQ1RfQ09ERSArIFwiX19zbGlkZVwiO1xudmFyIENMQVNTX0NMT05FID0gQ0xBU1NfU0xJREUgKyBcIi0tY2xvbmVcIjtcbnZhciBDTEFTU19DT05UQUlORVIgPSBDTEFTU19TTElERSArIFwiX19jb250YWluZXJcIjtcbnZhciBDTEFTU19BUlJPV1MgPSBQUk9KRUNUX0NPREUgKyBcIl9fYXJyb3dzXCI7XG52YXIgQ0xBU1NfQVJST1cgPSBQUk9KRUNUX0NPREUgKyBcIl9fYXJyb3dcIjtcbnZhciBDTEFTU19BUlJPV19QUkVWID0gQ0xBU1NfQVJST1cgKyBcIi0tcHJldlwiO1xudmFyIENMQVNTX0FSUk9XX05FWFQgPSBDTEFTU19BUlJPVyArIFwiLS1uZXh0XCI7XG52YXIgQ0xBU1NfUEFHSU5BVElPTiA9IFBST0pFQ1RfQ09ERSArIFwiX19wYWdpbmF0aW9uXCI7XG52YXIgQ0xBU1NfUEFHSU5BVElPTl9QQUdFID0gQ0xBU1NfUEFHSU5BVElPTiArIFwiX19wYWdlXCI7XG52YXIgQ0xBU1NfUFJPR1JFU1MgPSBQUk9KRUNUX0NPREUgKyBcIl9fcHJvZ3Jlc3NcIjtcbnZhciBDTEFTU19QUk9HUkVTU19CQVIgPSBDTEFTU19QUk9HUkVTUyArIFwiX19iYXJcIjtcbnZhciBDTEFTU19UT0dHTEUgPSBQUk9KRUNUX0NPREUgKyBcIl9fdG9nZ2xlXCI7XG52YXIgQ0xBU1NfVE9HR0xFX1BMQVkgPSBDTEFTU19UT0dHTEUgKyBcIl9fcGxheVwiO1xudmFyIENMQVNTX1RPR0dMRV9QQVVTRSA9IENMQVNTX1RPR0dMRSArIFwiX19wYXVzZVwiO1xudmFyIENMQVNTX1NQSU5ORVIgPSBQUk9KRUNUX0NPREUgKyBcIl9fc3Bpbm5lclwiO1xudmFyIENMQVNTX1NSID0gUFJPSkVDVF9DT0RFICsgXCJfX3NyXCI7XG52YXIgQ0xBU1NfSU5JVElBTElaRUQgPSBcImlzLWluaXRpYWxpemVkXCI7XG52YXIgQ0xBU1NfQUNUSVZFID0gXCJpcy1hY3RpdmVcIjtcbnZhciBDTEFTU19QUkVWID0gXCJpcy1wcmV2XCI7XG52YXIgQ0xBU1NfTkVYVCA9IFwiaXMtbmV4dFwiO1xudmFyIENMQVNTX1ZJU0lCTEUgPSBcImlzLXZpc2libGVcIjtcbnZhciBDTEFTU19MT0FESU5HID0gXCJpcy1sb2FkaW5nXCI7XG52YXIgQ0xBU1NfRk9DVVNfSU4gPSBcImlzLWZvY3VzLWluXCI7XG52YXIgU1RBVFVTX0NMQVNTRVMgPSBbQ0xBU1NfQUNUSVZFLCBDTEFTU19WSVNJQkxFLCBDTEFTU19QUkVWLCBDTEFTU19ORVhULCBDTEFTU19MT0FESU5HLCBDTEFTU19GT0NVU19JTl07XG52YXIgQ0xBU1NFUyA9IHtcbiAgc2xpZGU6IENMQVNTX1NMSURFLFxuICBjbG9uZTogQ0xBU1NfQ0xPTkUsXG4gIGFycm93czogQ0xBU1NfQVJST1dTLFxuICBhcnJvdzogQ0xBU1NfQVJST1csXG4gIHByZXY6IENMQVNTX0FSUk9XX1BSRVYsXG4gIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gIHBhZ2luYXRpb246IENMQVNTX1BBR0lOQVRJT04sXG4gIHBhZ2U6IENMQVNTX1BBR0lOQVRJT05fUEFHRSxcbiAgc3Bpbm5lcjogQ0xBU1NfU1BJTk5FUlxufTtcblxuZnVuY3Rpb24gY2xvc2VzdChmcm9tLCBzZWxlY3Rvcikge1xuICBpZiAoaXNGdW5jdGlvbihmcm9tLmNsb3Nlc3QpKSB7XG4gICAgcmV0dXJuIGZyb20uY2xvc2VzdChzZWxlY3Rvcik7XG4gIH1cblxuICB2YXIgZWxtID0gZnJvbTtcblxuICB3aGlsZSAoZWxtICYmIGVsbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChtYXRjaGVzKGVsbSwgc2VsZWN0b3IpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbG0gPSBlbG0ucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbG07XG59XG5cbnZhciBGUklDVElPTiA9IDU7XG52YXIgTE9HX0lOVEVSVkFMID0gMjAwO1xudmFyIFBPSU5URVJfRE9XTl9FVkVOVFMgPSBcInRvdWNoc3RhcnQgbW91c2Vkb3duXCI7XG52YXIgUE9JTlRFUl9NT1ZFX0VWRU5UUyA9IFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiO1xudmFyIFBPSU5URVJfVVBfRVZFTlRTID0gXCJ0b3VjaGVuZCB0b3VjaGNhbmNlbCBtb3VzZXVwIGNsaWNrXCI7XG5cbmZ1bmN0aW9uIEVsZW1lbnRzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZS5iaW5kO1xuXG4gIHZhciByb290ID0gU3BsaWRlMi5yb290O1xuICB2YXIgaTE4biA9IG9wdGlvbnMuaTE4bjtcbiAgdmFyIGVsZW1lbnRzID0ge307XG4gIHZhciBzbGlkZXMgPSBbXTtcbiAgdmFyIHJvb3RDbGFzc2VzID0gW107XG4gIHZhciB0cmFja0NsYXNzZXMgPSBbXTtcbiAgdmFyIHRyYWNrO1xuICB2YXIgbGlzdDtcbiAgdmFyIGlzVXNpbmdLZXk7XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29sbGVjdCgpO1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHNldHVwKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCB1cGRhdGUpO1xuICAgIGJpbmQoZG9jdW1lbnQsIFBPSU5URVJfRE9XTl9FVkVOVFMgKyBcIiBrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpc1VzaW5nS2V5ID0gZS50eXBlID09PSBcImtleWRvd25cIjtcbiAgICB9LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gICAgYmluZChyb290LCBcImZvY3VzaW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlQ2xhc3Mocm9vdCwgQ0xBU1NfRk9DVVNfSU4sICEhaXNVc2luZ0tleSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICB2YXIgYXR0cnMgPSBBTExfQVRUUklCVVRFUy5jb25jYXQoXCJzdHlsZVwiKTtcbiAgICBlbXB0eShzbGlkZXMpO1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoW3RyYWNrLCBsaXN0XSwgYXR0cnMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBjb21wbGV0ZWx5ID8gYXR0cnMgOiBbXCJzdHlsZVwiLCBBUklBX1JPTEVERVNDUklQVElPTl0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByb290Q2xhc3NlcyA9IGdldENsYXNzZXMoQ0xBU1NfUk9PVCk7XG4gICAgdHJhY2tDbGFzc2VzID0gZ2V0Q2xhc3NlcyhDTEFTU19UUkFDSyk7XG4gICAgYWRkQ2xhc3Mocm9vdCwgcm9vdENsYXNzZXMpO1xuICAgIGFkZENsYXNzKHRyYWNrLCB0cmFja0NsYXNzZXMpO1xuICAgIHNldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMLCBvcHRpb25zLmxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZLCBvcHRpb25zLmxhYmVsbGVkYnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICB0cmFjayA9IGZpbmQoXCIuXCIgKyBDTEFTU19UUkFDSyk7XG4gICAgbGlzdCA9IGNoaWxkKHRyYWNrLCBcIi5cIiArIENMQVNTX0xJU1QpO1xuICAgIGFzc2VydCh0cmFjayAmJiBsaXN0LCBcIkEgdHJhY2svbGlzdCBlbGVtZW50IGlzIG1pc3NpbmcuXCIpO1xuICAgIHB1c2goc2xpZGVzLCBjaGlsZHJlbihsaXN0LCBcIi5cIiArIENMQVNTX1NMSURFICsgXCI6bm90KC5cIiArIENMQVNTX0NMT05FICsgXCIpXCIpKTtcbiAgICBmb3JPd24oe1xuICAgICAgYXJyb3dzOiBDTEFTU19BUlJPV1MsXG4gICAgICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICAgICAgcHJldjogQ0xBU1NfQVJST1dfUFJFVixcbiAgICAgIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gICAgICBiYXI6IENMQVNTX1BST0dSRVNTX0JBUixcbiAgICAgIHRvZ2dsZTogQ0xBU1NfVE9HR0xFXG4gICAgfSwgZnVuY3Rpb24gKGNsYXNzTmFtZSwga2V5KSB7XG4gICAgICBlbGVtZW50c1trZXldID0gZmluZChcIi5cIiArIGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gICAgYXNzaWduKGVsZW1lbnRzLCB7XG4gICAgICByb290OiByb290LFxuICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBpZCA9IHJvb3QuaWQgfHwgdW5pcXVlSWQoUFJPSkVDVF9DT0RFKTtcbiAgICB2YXIgcm9sZSA9IG9wdGlvbnMucm9sZTtcbiAgICByb290LmlkID0gaWQ7XG4gICAgdHJhY2suaWQgPSB0cmFjay5pZCB8fCBpZCArIFwiLXRyYWNrXCI7XG4gICAgbGlzdC5pZCA9IGxpc3QuaWQgfHwgaWQgKyBcIi1saXN0XCI7XG5cbiAgICBpZiAoIWdldEF0dHJpYnV0ZShyb290LCBST0xFKSAmJiByb290LnRhZ05hbWUgIT09IFwiU0VDVElPTlwiICYmIHJvbGUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShyb290LCBST0xFLCByb2xlKTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9ST0xFREVTQ1JJUFRJT04sIGkxOG4uY2Fyb3VzZWwpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcInByZXNlbnRhdGlvblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWxtID0gcXVlcnkocm9vdCwgc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbG0gJiYgY2xvc2VzdChlbG0sIFwiLlwiICsgQ0xBU1NfUk9PVCkgPT09IHJvb3QgPyBlbG0gOiB2b2lkIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKGJhc2UpIHtcbiAgICByZXR1cm4gW2Jhc2UgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIGJhc2UgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIGJhc2UgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIGJhc2UgKyBcIi0tbmF2XCIsIGJhc2UgPT09IENMQVNTX1JPT1QgJiYgQ0xBU1NfQUNUSVZFXTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oZWxlbWVudHMsIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfSk7XG59XG5cbnZhciBTTElERSA9IFwic2xpZGVcIjtcbnZhciBMT09QID0gXCJsb29wXCI7XG52YXIgRkFERSA9IFwiZmFkZVwiO1xuXG5mdW5jdGlvbiBTbGlkZSQxKFNwbGlkZTIsIGluZGV4LCBzbGlkZUluZGV4LCBzbGlkZSkge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdCxcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kO1xuICB2YXIgQ29tcG9uZW50cyA9IFNwbGlkZTIuQ29tcG9uZW50cyxcbiAgICAgIHJvb3QgPSBTcGxpZGUyLnJvb3QsXG4gICAgICBvcHRpb25zID0gU3BsaWRlMi5vcHRpb25zO1xuICB2YXIgaXNOYXZpZ2F0aW9uID0gb3B0aW9ucy5pc05hdmlnYXRpb24sXG4gICAgICB1cGRhdGVPbk1vdmUgPSBvcHRpb25zLnVwZGF0ZU9uTW92ZSxcbiAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG4sXG4gICAgICBwYWdpbmF0aW9uID0gb3B0aW9ucy5wYWdpbmF0aW9uLFxuICAgICAgc2xpZGVGb2N1cyA9IG9wdGlvbnMuc2xpZGVGb2N1cztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgc3R5bGVzID0gZ2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIpO1xuICB2YXIgbGFiZWwgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwpO1xuICB2YXIgaXNDbG9uZSA9IHNsaWRlSW5kZXggPiAtMTtcbiAgdmFyIGNvbnRhaW5lciA9IGNoaWxkKHNsaWRlLCBcIi5cIiArIENMQVNTX0NPTlRBSU5FUik7XG4gIHZhciBmb2N1c2FibGVOb2RlcyA9IHF1ZXJ5QWxsKHNsaWRlLCBvcHRpb25zLmZvY3VzYWJsZU5vZGVzIHx8IFwiXCIpO1xuICB2YXIgZGVzdHJveWVkO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmICghaXNDbG9uZSkge1xuICAgICAgc2xpZGUuaWQgPSByb290LmlkICsgXCItc2xpZGVcIiArIHBhZChpbmRleCArIDEpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBST0xFLCBwYWdpbmF0aW9uID8gXCJ0YWJwYW5lbFwiIDogXCJncm91cFwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ST0xFREVTQ1JJUFRJT04sIGkxOG4uc2xpZGUpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCB8fCBmb3JtYXQoaTE4bi5zbGlkZUxhYmVsLCBbaW5kZXggKyAxLCBTcGxpZGUyLmxlbmd0aF0pKTtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBiaW5kKHNsaWRlLCBcImNsaWNrXCIsIGFwcGx5KGVtaXQsIEVWRU5UX0NMSUNLLCBzZWxmKSk7XG4gICAgYmluZChzbGlkZSwgXCJrZXlkb3duXCIsIGFwcGx5KGVtaXQsIEVWRU5UX1NMSURFX0tFWURPV04sIHNlbGYpKTtcbiAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1NISUZURUQsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgICBvbihFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIGluaXROYXZpZ2F0aW9uKTtcblxuICAgIGlmICh1cGRhdGVPbk1vdmUpIHtcbiAgICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICByZW1vdmVDbGFzcyhzbGlkZSwgU1RBVFVTX0NMQVNTRVMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQUxMX0FUVFJJQlVURVMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgXCJzdHlsZVwiLCBzdHlsZXMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgbGFiZWwgfHwgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TmF2aWdhdGlvbigpIHtcbiAgICB2YXIgY29udHJvbHMgPSBTcGxpZGUyLnNwbGlkZXMubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHZhciBTbGlkZTIgPSB0YXJnZXQuc3BsaWRlLkNvbXBvbmVudHMuU2xpZGVzLmdldEF0KGluZGV4KTtcbiAgICAgIHJldHVybiBTbGlkZTIgPyBTbGlkZTIuc2xpZGUuaWQgOiBcIlwiO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgZm9ybWF0KGkxOG4uc2xpZGVYLCAoaXNDbG9uZSA/IHNsaWRlSW5kZXggOiBpbmRleCkgKyAxKSk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBST0xFLCBzbGlkZUZvY3VzID8gXCJidXR0b25cIiA6IFwiXCIpO1xuICAgIHNsaWRlRm9jdXMgJiYgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBUklBX1JPTEVERVNDUklQVElPTik7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoKSB7XG4gICAgaWYgKCFkZXN0cm95ZWQpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIWRlc3Ryb3llZCkge1xuICAgICAgdmFyIGN1cnIgPSBTcGxpZGUyLmluZGV4O1xuICAgICAgdXBkYXRlQWN0aXZpdHkoKTtcbiAgICAgIHVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19QUkVWLCBpbmRleCA9PT0gY3VyciAtIDEpO1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX05FWFQsIGluZGV4ID09PSBjdXJyICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZpdHkoKSB7XG4gICAgdmFyIGFjdGl2ZSA9IGlzQWN0aXZlKCk7XG5cbiAgICBpZiAoYWN0aXZlICE9PSBoYXNDbGFzcyhzbGlkZSwgQ0xBU1NfQUNUSVZFKSkge1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX0FDVElWRSwgYWN0aXZlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5ULCBpc05hdmlnYXRpb24gJiYgYWN0aXZlIHx8IFwiXCIpO1xuICAgICAgZW1pdChhY3RpdmUgPyBFVkVOVF9BQ1RJVkUgOiBFVkVOVF9JTkFDVElWRSwgc2VsZik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlzaWJpbGl0eSgpIHtcbiAgICB2YXIgdmlzaWJsZSA9IGlzVmlzaWJsZSgpO1xuICAgIHZhciBoaWRkZW4gPSAhdmlzaWJsZSAmJiAoIWlzQWN0aXZlKCkgfHwgaXNDbG9uZSk7XG5cbiAgICBpZiAoIVNwbGlkZTIuc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSkpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ISURERU4sIGhpZGRlbiB8fCBcIlwiKTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUoZm9jdXNhYmxlTm9kZXMsIFRBQl9JTkRFWCwgaGlkZGVuID8gLTEgOiBcIlwiKTtcblxuICAgIGlmIChzbGlkZUZvY3VzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFRBQl9JTkRFWCwgaGlkZGVuID8gLTEgOiAwKTtcbiAgICB9XG5cbiAgICBpZiAodmlzaWJsZSAhPT0gaGFzQ2xhc3Moc2xpZGUsIENMQVNTX1ZJU0lCTEUpKSB7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfVklTSUJMRSwgdmlzaWJsZSk7XG4gICAgICBlbWl0KHZpc2libGUgPyBFVkVOVF9WSVNJQkxFIDogRVZFTlRfSElEREVOLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAoIXZpc2libGUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gc2xpZGUpIHtcbiAgICAgIHZhciBTbGlkZTIgPSBDb21wb25lbnRzLlNsaWRlcy5nZXRBdChTcGxpZGUyLmluZGV4KTtcbiAgICAgIFNsaWRlMiAmJiBmb2N1cyhTbGlkZTIuc2xpZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlJDEocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcikge1xuICAgIHN0eWxlKHVzZUNvbnRhaW5lciAmJiBjb250YWluZXIgfHwgc2xpZGUsIHByb3AsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHZhciBjdXJyID0gU3BsaWRlMi5pbmRleDtcbiAgICByZXR1cm4gY3VyciA9PT0gaW5kZXggfHwgb3B0aW9ucy5jbG9uZVN0YXR1cyAmJiBjdXJyID09PSBzbGlkZUluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgIGlmIChTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICByZXR1cm4gaXNBY3RpdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tSZWN0ID0gcmVjdChDb21wb25lbnRzLkVsZW1lbnRzLnRyYWNrKTtcbiAgICB2YXIgc2xpZGVSZWN0ID0gcmVjdChzbGlkZSk7XG4gICAgdmFyIGxlZnQgPSByZXNvbHZlKFwibGVmdFwiKTtcbiAgICB2YXIgcmlnaHQgPSByZXNvbHZlKFwicmlnaHRcIik7XG4gICAgcmV0dXJuIGZsb29yKHRyYWNrUmVjdFtsZWZ0XSkgPD0gY2VpbChzbGlkZVJlY3RbbGVmdF0pICYmIGZsb29yKHNsaWRlUmVjdFtyaWdodF0pIDw9IGNlaWwodHJhY2tSZWN0W3JpZ2h0XSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1dpdGhpbihmcm9tLCBkaXN0YW5jZSkge1xuICAgIHZhciBkaWZmID0gYWJzKGZyb20gLSBpbmRleCk7XG5cbiAgICBpZiAoIWlzQ2xvbmUgJiYgKG9wdGlvbnMucmV3aW5kIHx8IFNwbGlkZTIuaXMoTE9PUCkpKSB7XG4gICAgICBkaWZmID0gbWluKGRpZmYsIFNwbGlkZTIubGVuZ3RoIC0gZGlmZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmYgPD0gZGlzdGFuY2U7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBpbmRleDogaW5kZXgsXG4gICAgc2xpZGVJbmRleDogc2xpZGVJbmRleCxcbiAgICBzbGlkZTogc2xpZGUsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgaXNDbG9uZTogaXNDbG9uZSxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBzdHlsZTogc3R5bGUkMSxcbiAgICBpc1dpdGhpbjogaXNXaXRoaW5cbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlcyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UyLm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTIuZW1pdCxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UyLmJpbmQ7XG5cbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzLnNsaWRlcyxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMubGlzdDtcbiAgdmFyIFNsaWRlczIgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgZGVzdHJveSk7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgaW5pdCk7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFRlJFU0hdLCBmdW5jdGlvbiAoKSB7XG4gICAgICBTbGlkZXMyLnNvcnQoZnVuY3Rpb24gKFNsaWRlMSwgU2xpZGUyKSB7XG4gICAgICAgIHJldHVybiBTbGlkZTEuaW5kZXggLSBTbGlkZTIuaW5kZXg7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpbmRleCkge1xuICAgICAgcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCAtMSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KFNsaWRlczIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihzbGlkZSwgaW5kZXgsIHNsaWRlSW5kZXgpIHtcbiAgICB2YXIgb2JqZWN0ID0gU2xpZGUkMShTcGxpZGUyLCBpbmRleCwgc2xpZGVJbmRleCwgc2xpZGUpO1xuICAgIG9iamVjdC5tb3VudCgpO1xuICAgIFNsaWRlczIucHVzaChvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICByZXR1cm4gZXhjbHVkZUNsb25lcyA/IGZpbHRlcihmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gIVNsaWRlMi5pc0Nsb25lO1xuICAgIH0pIDogU2xpZGVzMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluKHBhZ2UpIHtcbiAgICB2YXIgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gICAgdmFyIGluZGV4ID0gQ29udHJvbGxlci50b0luZGV4KHBhZ2UpO1xuICAgIHZhciBtYXggPSBDb250cm9sbGVyLmhhc0ZvY3VzKCkgPyAxIDogb3B0aW9ucy5wZXJQYWdlO1xuICAgIHJldHVybiBmaWx0ZXIoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIGJldHdlZW4oU2xpZGUyLmluZGV4LCBpbmRleCwgaW5kZXggKyBtYXggLSAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGZpbHRlcihpbmRleClbMF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaXRlbXMsIGluZGV4KSB7XG4gICAgZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICBpZiAoaXNTdHJpbmcoc2xpZGUpKSB7XG4gICAgICAgIHNsaWRlID0gcGFyc2VIdG1sKHNsaWRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoc2xpZGUpKSB7XG4gICAgICAgIHZhciByZWYgPSBzbGlkZXNbaW5kZXhdO1xuICAgICAgICByZWYgPyBiZWZvcmUoc2xpZGUsIHJlZikgOiBhcHBlbmQobGlzdCwgc2xpZGUpO1xuICAgICAgICBhZGRDbGFzcyhzbGlkZSwgb3B0aW9ucy5jbGFzc2VzLnNsaWRlKTtcbiAgICAgICAgb2JzZXJ2ZUltYWdlcyhzbGlkZSwgYXBwbHkoZW1pdCwgRVZFTlRfUkVTSVpFKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSQxKG1hdGNoZXIpIHtcbiAgICByZW1vdmUoZmlsdGVyKG1hdGNoZXIpLm1hcChmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gU2xpZGUyLnNsaWRlO1xuICAgIH0pKTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yRWFjaCQxKGl0ZXJhdGVlLCBleGNsdWRlQ2xvbmVzKSB7XG4gICAgZ2V0KGV4Y2x1ZGVDbG9uZXMpLmZvckVhY2goaXRlcmF0ZWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyKG1hdGNoZXIpIHtcbiAgICByZXR1cm4gU2xpZGVzMi5maWx0ZXIoaXNGdW5jdGlvbihtYXRjaGVyKSA/IG1hdGNoZXIgOiBmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcobWF0Y2hlcikgPyBtYXRjaGVzKFNsaWRlMi5zbGlkZSwgbWF0Y2hlcikgOiBpbmNsdWRlcyh0b0FycmF5KG1hdGNoZXIpLCBTbGlkZTIuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcikge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIuc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZlSW1hZ2VzKGVsbSwgY2FsbGJhY2spIHtcbiAgICB2YXIgaW1hZ2VzID0gcXVlcnlBbGwoZWxtLCBcImltZ1wiKTtcbiAgICB2YXIgbGVuZ3RoID0gaW1hZ2VzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgYmluZChpbWcsIFwibG9hZCBlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCEgLS1sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aChleGNsdWRlQ2xvbmVzKSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGVDbG9uZXMgPyBzbGlkZXMubGVuZ3RoIDogU2xpZGVzMi5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Vub3VnaCgpIHtcbiAgICByZXR1cm4gU2xpZGVzMi5sZW5ndGggPiBvcHRpb25zLnBlclBhZ2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHJlZ2lzdGVyOiByZWdpc3RlcixcbiAgICBnZXQ6IGdldCxcbiAgICBnZXRJbjogZ2V0SW4sXG4gICAgZ2V0QXQ6IGdldEF0LFxuICAgIGFkZDogYWRkLFxuICAgIHJlbW92ZTogcmVtb3ZlJDEsXG4gICAgZm9yRWFjaDogZm9yRWFjaCQxLFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBnZXRMZW5ndGg6IGdldExlbmd0aCxcbiAgICBpc0Vub3VnaDogaXNFbm91Z2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UzID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTMub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMy5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTMuZW1pdDtcblxuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzMiA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgcm9vdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czIucm9vdCxcbiAgICAgIHRyYWNrID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi50cmFjayxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLmxpc3Q7XG4gIHZhciBnZXRBdCA9IFNsaWRlcy5nZXRBdCxcbiAgICAgIHN0eWxlU2xpZGVzID0gU2xpZGVzLnN0eWxlO1xuICB2YXIgdmVydGljYWw7XG4gIHZhciByb290UmVjdDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgYmluZCh3aW5kb3csIFwicmVzaXplIGxvYWRcIiwgVGhyb3R0bGUoYXBwbHkoZW1pdCwgRVZFTlRfUkVTSVpFKSkpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgaW5pdCk7XG4gICAgb24oRVZFTlRfUkVTSVpFLCByZXNpemUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICByb290UmVjdCA9IG51bGw7XG4gICAgdmVydGljYWwgPSBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAgIHN0eWxlKHJvb3QsIFwibWF4V2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSk7XG4gICAgc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgY3NzUGFkZGluZyhmYWxzZSkpO1xuICAgIHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ1JpZ2h0XCIpLCBjc3NQYWRkaW5nKHRydWUpKTtcbiAgICByZXNpemUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgbmV3UmVjdCA9IHJlY3Qocm9vdCk7XG5cbiAgICBpZiAoIXJvb3RSZWN0IHx8IHJvb3RSZWN0LndpZHRoICE9PSBuZXdSZWN0LndpZHRoIHx8IHJvb3RSZWN0LmhlaWdodCAhPT0gbmV3UmVjdC5oZWlnaHQpIHtcbiAgICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCBjc3NUcmFja0hlaWdodCgpKTtcbiAgICAgIHN0eWxlU2xpZGVzKHJlc29sdmUoXCJtYXJnaW5SaWdodFwiKSwgdW5pdChvcHRpb25zLmdhcCkpO1xuICAgICAgc3R5bGVTbGlkZXMoXCJ3aWR0aFwiLCBjc3NTbGlkZVdpZHRoKCkpO1xuICAgICAgc3R5bGVTbGlkZXMoXCJoZWlnaHRcIiwgY3NzU2xpZGVIZWlnaHQoKSwgdHJ1ZSk7XG4gICAgICByb290UmVjdCA9IG5ld1JlY3Q7XG4gICAgICBlbWl0KEVWRU5UX1JFU0laRUQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1BhZGRpbmcocmlnaHQpIHtcbiAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICB2YXIgcHJvcCA9IHJlc29sdmUocmlnaHQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7XG4gICAgcmV0dXJuIHBhZGRpbmcgJiYgdW5pdChwYWRkaW5nW3Byb3BdIHx8IChpc09iamVjdChwYWRkaW5nKSA/IDAgOiBwYWRkaW5nKSkgfHwgXCIwcHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1RyYWNrSGVpZ2h0KCkge1xuICAgIHZhciBoZWlnaHQgPSBcIlwiO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBoZWlnaHQgPSBjc3NIZWlnaHQoKTtcbiAgICAgIGFzc2VydChoZWlnaHQsIFwiaGVpZ2h0IG9yIGhlaWdodFJhdGlvIGlzIG1pc3NpbmcuXCIpO1xuICAgICAgaGVpZ2h0ID0gXCJjYWxjKFwiICsgaGVpZ2h0ICsgXCIgLSBcIiArIGNzc1BhZGRpbmcoZmFsc2UpICsgXCIgLSBcIiArIGNzc1BhZGRpbmcodHJ1ZSkgKyBcIilcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzSGVpZ2h0KCkge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuaGVpZ2h0IHx8IHJlY3QobGlzdCkud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlV2lkdGgoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXV0b1dpZHRoID8gbnVsbCA6IHVuaXQob3B0aW9ucy5maXhlZFdpZHRoKSB8fCAodmVydGljYWwgPyBcIlwiIDogY3NzU2xpZGVTaXplKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5maXhlZEhlaWdodCkgfHwgKHZlcnRpY2FsID8gb3B0aW9ucy5hdXRvSGVpZ2h0ID8gbnVsbCA6IGNzc1NsaWRlU2l6ZSgpIDogY3NzSGVpZ2h0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVTaXplKCkge1xuICAgIHZhciBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gXCJjYWxjKCgxMDAlXCIgKyAoZ2FwICYmIFwiICsgXCIgKyBnYXApICsgXCIpL1wiICsgKG9wdGlvbnMucGVyUGFnZSB8fCAxKSArIChnYXAgJiYgXCIgLSBcIiArIGdhcCkgKyBcIilcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RTaXplKCkge1xuICAgIHJldHVybiByZWN0KGxpc3QpW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZVNpemUoaW5kZXgsIHdpdGhvdXRHYXApIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdChpbmRleCB8fCAwKTtcbiAgICByZXR1cm4gU2xpZGUgPyByZWN0KFNsaWRlLnNsaWRlKVtyZXNvbHZlKFwid2lkdGhcIildICsgKHdpdGhvdXRHYXAgPyAwIDogZ2V0R2FwKCkpIDogMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdGFsU2l6ZShpbmRleCwgd2l0aG91dEdhcCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KGluZGV4KTtcblxuICAgIGlmIChTbGlkZSkge1xuICAgICAgdmFyIHJpZ2h0ID0gcmVjdChTbGlkZS5zbGlkZSlbcmVzb2x2ZShcInJpZ2h0XCIpXTtcbiAgICAgIHZhciBsZWZ0ID0gcmVjdChsaXN0KVtyZXNvbHZlKFwibGVmdFwiKV07XG4gICAgICByZXR1cm4gYWJzKHJpZ2h0IC0gbGVmdCkgKyAod2l0aG91dEdhcCA/IDAgOiBnZXRHYXAoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXJTaXplKCkge1xuICAgIHJldHVybiB0b3RhbFNpemUoU3BsaWRlMi5sZW5ndGggLSAxLCB0cnVlKSAtIHRvdGFsU2l6ZSgtMSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHYXAoKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoMCk7XG4gICAgcmV0dXJuIFNsaWRlICYmIHBhcnNlRmxvYXQoc3R5bGUoU2xpZGUuc2xpZGUsIHJlc29sdmUoXCJtYXJnaW5SaWdodFwiKSkpIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWRkaW5nKHJpZ2h0KSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nXCIgKyAocmlnaHQgPyBcIlJpZ2h0XCIgOiBcIkxlZnRcIikpKSkgfHwgMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGxpc3RTaXplOiBsaXN0U2l6ZSxcbiAgICBzbGlkZVNpemU6IHNsaWRlU2l6ZSxcbiAgICBzbGlkZXJTaXplOiBzbGlkZXJTaXplLFxuICAgIHRvdGFsU2l6ZTogdG90YWxTaXplLFxuICAgIGdldFBhZGRpbmc6IGdldFBhZGRpbmdcbiAgfTtcbn1cblxudmFyIE1VTFRJUExJRVIgPSAyO1xuXG5mdW5jdGlvbiBDbG9uZXMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNC5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U0LmVtaXQ7XG5cbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBjbG9uZXMgPSBbXTtcbiAgdmFyIGNsb25lQ291bnQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRVNJWkVdLCBvYnNlcnZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKGNsb25lQ291bnQgPSBjb21wdXRlQ2xvbmVDb3VudCgpKSB7XG4gICAgICBnZW5lcmF0ZShjbG9uZUNvdW50KTtcbiAgICAgIGVtaXQoRVZFTlRfUkVTSVpFKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICAgIGVtcHR5KGNsb25lcyk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZlKCkge1xuICAgIGlmIChjbG9uZUNvdW50IDwgY29tcHV0ZUNsb25lQ291bnQoKSkge1xuICAgICAgZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZShjb3VudCkge1xuICAgIHZhciBzbGlkZXMgPSBTbGlkZXMuZ2V0KCkuc2xpY2UoKTtcbiAgICB2YXIgbGVuZ3RoID0gc2xpZGVzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHdoaWxlIChzbGlkZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgICB9XG5cbiAgICAgIHB1c2goc2xpZGVzLnNsaWNlKC1jb3VudCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlLCBpbmRleCkge1xuICAgICAgICB2YXIgaXNIZWFkID0gaW5kZXggPCBjb3VudDtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwKFNsaWRlLnNsaWRlLCBpbmRleCk7XG4gICAgICAgIGlzSGVhZCA/IGJlZm9yZShjbG9uZSwgc2xpZGVzWzBdLnNsaWRlKSA6IGFwcGVuZChFbGVtZW50cy5saXN0LCBjbG9uZSk7XG4gICAgICAgIHB1c2goY2xvbmVzLCBjbG9uZSk7XG4gICAgICAgIFNsaWRlcy5yZWdpc3RlcihjbG9uZSwgaW5kZXggLSBjb3VudCArIChpc0hlYWQgPyAwIDogbGVuZ3RoKSwgU2xpZGUuaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVEZWVwKGVsbSwgaW5kZXgpIHtcbiAgICB2YXIgY2xvbmUgPSBlbG0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGFkZENsYXNzKGNsb25lLCBvcHRpb25zLmNsYXNzZXMuY2xvbmUpO1xuICAgIGNsb25lLmlkID0gU3BsaWRlMi5yb290LmlkICsgXCItY2xvbmVcIiArIHBhZChpbmRleCArIDEpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVDbG9uZUNvdW50KCkge1xuICAgIHZhciBjbG9uZXMyID0gb3B0aW9ucy5jbG9uZXM7XG5cbiAgICBpZiAoIVNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIGNsb25lczIgPSAwO1xuICAgIH0gZWxzZSBpZiAoIWNsb25lczIpIHtcbiAgICAgIHZhciBmaXhlZFNpemUgPSBvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSAmJiBDb21wb25lbnRzMi5MYXlvdXQuc2xpZGVTaXplKDApO1xuICAgICAgdmFyIGZpeGVkQ291bnQgPSBmaXhlZFNpemUgJiYgY2VpbChyZWN0KEVsZW1lbnRzLnRyYWNrKVtyZXNvbHZlKFwid2lkdGhcIildIC8gZml4ZWRTaXplKTtcbiAgICAgIGNsb25lczIgPSBmaXhlZENvdW50IHx8IG9wdGlvbnNbcmVzb2x2ZShcImF1dG9XaWR0aFwiKV0gJiYgU3BsaWRlMi5sZW5ndGggfHwgb3B0aW9ucy5wZXJQYWdlICogTVVMVElQTElFUjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVzMjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxuZnVuY3Rpb24gTW92ZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U1Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTUuZW1pdDtcblxuICB2YXIgc2V0ID0gU3BsaWRlMi5zdGF0ZS5zZXQ7XG4gIHZhciBfQ29tcG9uZW50czIkTGF5b3V0ID0gQ29tcG9uZW50czIuTGF5b3V0LFxuICAgICAgc2xpZGVTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5zbGlkZVNpemUsXG4gICAgICBnZXRQYWRkaW5nID0gX0NvbXBvbmVudHMyJExheW91dC5nZXRQYWRkaW5nLFxuICAgICAgdG90YWxTaXplID0gX0NvbXBvbmVudHMyJExheW91dC50b3RhbFNpemUsXG4gICAgICBsaXN0U2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQubGlzdFNpemUsXG4gICAgICBzbGlkZXJTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5zbGlkZXJTaXplO1xuICB2YXIgX0NvbXBvbmVudHMyJERpcmVjdGlvID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLFxuICAgICAgcmVzb2x2ZSA9IF9Db21wb25lbnRzMiREaXJlY3Rpby5yZXNvbHZlLFxuICAgICAgb3JpZW50ID0gX0NvbXBvbmVudHMyJERpcmVjdGlvLm9yaWVudDtcbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50czMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMzLmxpc3QsXG4gICAgICB0cmFjayA9IF9Db21wb25lbnRzMiRFbGVtZW50czMudHJhY2s7XG4gIHZhciBUcmFuc2l0aW9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIFRyYW5zaXRpb24gPSBDb21wb25lbnRzMi5UcmFuc2l0aW9uO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRVNJWkVELCBFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgcmVwb3NpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZXBvc2l0aW9uKCkge1xuICAgIGlmICghQ29tcG9uZW50czIuQ29udHJvbGxlci5pc0J1c3koKSkge1xuICAgICAgQ29tcG9uZW50czIuU2Nyb2xsLmNhbmNlbCgpO1xuICAgICAganVtcChTcGxpZGUyLmluZGV4KTtcbiAgICAgIENvbXBvbmVudHMyLlNsaWRlcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGRlc3QsIGluZGV4LCBwcmV2LCBjYWxsYmFjaykge1xuICAgIGlmIChkZXN0ICE9PSBpbmRleCAmJiBjYW5TaGlmdChkZXN0ID4gcHJldikpIHtcbiAgICAgIGNhbmNlbCgpO1xuICAgICAgdHJhbnNsYXRlKHNoaWZ0KGdldFBvc2l0aW9uKCksIGRlc3QgPiBwcmV2KSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2V0KE1PVklORyk7XG4gICAgZW1pdChFVkVOVF9NT1ZFLCBpbmRleCwgcHJldiwgZGVzdCk7XG4gICAgVHJhbnNpdGlvbi5zdGFydChpbmRleCwgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0KElETEUpO1xuICAgICAgZW1pdChFVkVOVF9NT1ZFRCwgaW5kZXgsIHByZXYsIGRlc3QpO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGp1bXAoaW5kZXgpIHtcbiAgICB0cmFuc2xhdGUodG9Qb3NpdGlvbihpbmRleCwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHBvc2l0aW9uLCBwcmV2ZW50TG9vcCkge1xuICAgIGlmICghU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgdmFyIGRlc3RpbmF0aW9uID0gcHJldmVudExvb3AgPyBwb3NpdGlvbiA6IGxvb3AocG9zaXRpb24pO1xuICAgICAgc3R5bGUobGlzdCwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVcIiArIHJlc29sdmUoXCJYXCIpICsgXCIoXCIgKyBkZXN0aW5hdGlvbiArIFwicHgpXCIpO1xuICAgICAgcG9zaXRpb24gIT09IGRlc3RpbmF0aW9uICYmIGVtaXQoRVZFTlRfU0hJRlRFRCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChwb3NpdGlvbikge1xuICAgIGlmIChTcGxpZGUyLmlzKExPT1ApKSB7XG4gICAgICB2YXIgaW5kZXggPSB0b0luZGV4KHBvc2l0aW9uKTtcbiAgICAgIHZhciBleGNlZWRlZE1heCA9IGluZGV4ID4gQ29tcG9uZW50czIuQ29udHJvbGxlci5nZXRFbmQoKTtcbiAgICAgIHZhciBleGNlZWRlZE1pbiA9IGluZGV4IDwgMDtcblxuICAgICAgaWYgKGV4Y2VlZGVkTWluIHx8IGV4Y2VlZGVkTWF4KSB7XG4gICAgICAgIHBvc2l0aW9uID0gc2hpZnQocG9zaXRpb24sIGV4Y2VlZGVkTWF4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzaGlmdChwb3NpdGlvbiwgYmFja3dhcmRzKSB7XG4gICAgdmFyIGV4Y2VzcyA9IHBvc2l0aW9uIC0gZ2V0TGltaXQoYmFja3dhcmRzKTtcbiAgICB2YXIgc2l6ZSA9IHNsaWRlclNpemUoKTtcbiAgICBwb3NpdGlvbiAtPSBvcmllbnQoc2l6ZSAqIChjZWlsKGFicyhleGNlc3MpIC8gc2l6ZSkgfHwgMSkpICogKGJhY2t3YXJkcyA/IDEgOiAtMSk7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRyYW5zbGF0ZShnZXRQb3NpdGlvbigpKTtcbiAgICBUcmFuc2l0aW9uLmNhbmNlbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXMuZ2V0KCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgU2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2xpZGVJbmRleCA9IFNsaWRlc1tpXS5pbmRleDtcbiAgICAgIHZhciBkaXN0YW5jZSA9IGFicyh0b1Bvc2l0aW9uKHNsaWRlSW5kZXgsIHRydWUpIC0gcG9zaXRpb24pO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gbWluRGlzdGFuY2UpIHtcbiAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgaW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9Qb3NpdGlvbihpbmRleCwgdHJpbW1pbmcpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBvcmllbnQodG90YWxTaXplKGluZGV4IC0gMSkgLSBvZmZzZXQoaW5kZXgpKTtcbiAgICByZXR1cm4gdHJpbW1pbmcgPyB0cmltKHBvc2l0aW9uKSA6IHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyIGxlZnQgPSByZXNvbHZlKFwibGVmdFwiKTtcbiAgICByZXR1cm4gcmVjdChsaXN0KVtsZWZ0XSAtIHJlY3QodHJhY2spW2xlZnRdICsgb3JpZW50KGdldFBhZGRpbmcoZmFsc2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaW0ocG9zaXRpb24pIHtcbiAgICBpZiAob3B0aW9ucy50cmltU3BhY2UgJiYgU3BsaWRlMi5pcyhTTElERSkpIHtcbiAgICAgIHBvc2l0aW9uID0gY2xhbXAocG9zaXRpb24sIDAsIG9yaWVudChzbGlkZXJTaXplKCkgLSBsaXN0U2l6ZSgpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgdmFyIGZvY3VzID0gb3B0aW9ucy5mb2N1cztcbiAgICByZXR1cm4gZm9jdXMgPT09IFwiY2VudGVyXCIgPyAobGlzdFNpemUoKSAtIHNsaWRlU2l6ZShpbmRleCwgdHJ1ZSkpIC8gMiA6ICtmb2N1cyAqIHNsaWRlU2l6ZShpbmRleCkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpbWl0KG1heCkge1xuICAgIHJldHVybiB0b1Bvc2l0aW9uKG1heCA/IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0RW5kKCkgOiAwLCAhIW9wdGlvbnMudHJpbVNwYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNoaWZ0KGJhY2t3YXJkcykge1xuICAgIHZhciBzaGlmdGVkID0gb3JpZW50KHNoaWZ0KGdldFBvc2l0aW9uKCksIGJhY2t3YXJkcykpO1xuICAgIHJldHVybiBiYWNrd2FyZHMgPyBzaGlmdGVkID49IDAgOiBzaGlmdGVkIDw9IGxpc3RbcmVzb2x2ZShcInNjcm9sbFdpZHRoXCIpXSAtIHJlY3QodHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBleGNlZWRlZExpbWl0KG1heCwgcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IGlzVW5kZWZpbmVkKHBvc2l0aW9uKSA/IGdldFBvc2l0aW9uKCkgOiBwb3NpdGlvbjtcbiAgICB2YXIgZXhjZWVkZWRNaW4gPSBtYXggIT09IHRydWUgJiYgb3JpZW50KHBvc2l0aW9uKSA8IG9yaWVudChnZXRMaW1pdChmYWxzZSkpO1xuICAgIHZhciBleGNlZWRlZE1heCA9IG1heCAhPT0gZmFsc2UgJiYgb3JpZW50KHBvc2l0aW9uKSA+IG9yaWVudChnZXRMaW1pdCh0cnVlKSk7XG4gICAgcmV0dXJuIGV4Y2VlZGVkTWluIHx8IGV4Y2VlZGVkTWF4O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgbW92ZTogbW92ZSxcbiAgICBqdW1wOiBqdW1wLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIHNoaWZ0OiBzaGlmdCxcbiAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIHRvUG9zaXRpb246IHRvUG9zaXRpb24sXG4gICAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICAgIGdldExpbWl0OiBnZXRMaW1pdCxcbiAgICBleGNlZWRlZExpbWl0OiBleGNlZWRlZExpbWl0LFxuICAgIHJlcG9zaXRpb246IHJlcG9zaXRpb25cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U2Lm9uO1xuXG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZTtcbiAgdmFyIGdldFBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbixcbiAgICAgIGdldExpbWl0ID0gTW92ZS5nZXRMaW1pdCxcbiAgICAgIHRvUG9zaXRpb24gPSBNb3ZlLnRvUG9zaXRpb247XG4gIHZhciBfQ29tcG9uZW50czIkU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLFxuICAgICAgaXNFbm91Z2ggPSBfQ29tcG9uZW50czIkU2xpZGVzLmlzRW5vdWdoLFxuICAgICAgZ2V0TGVuZ3RoID0gX0NvbXBvbmVudHMyJFNsaWRlcy5nZXRMZW5ndGg7XG4gIHZhciBpc0xvb3AgPSBTcGxpZGUyLmlzKExPT1ApO1xuICB2YXIgaXNTbGlkZSA9IFNwbGlkZTIuaXMoU0xJREUpO1xuICB2YXIgZ2V0TmV4dCA9IGFwcGx5KGdldEFkamFjZW50LCBmYWxzZSk7XG4gIHZhciBnZXRQcmV2ID0gYXBwbHkoZ2V0QWRqYWNlbnQsIHRydWUpO1xuICB2YXIgY3VyckluZGV4ID0gb3B0aW9ucy5zdGFydCB8fCAwO1xuICB2YXIgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICB2YXIgc2xpZGVDb3VudDtcbiAgdmFyIHBlck1vdmU7XG4gIHZhciBwZXJQYWdlO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzbGlkZUNvdW50ID0gZ2V0TGVuZ3RoKHRydWUpO1xuICAgIHBlck1vdmUgPSBvcHRpb25zLnBlck1vdmU7XG4gICAgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgaW5kZXggPSBjbGFtcChjdXJySW5kZXgsIDAsIHNsaWRlQ291bnQgLSAxKTtcblxuICAgIGlmIChpbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICBjdXJySW5kZXggPSBpbmRleDtcbiAgICAgIE1vdmUucmVwb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKGNvbnRyb2wsIGFsbG93U2FtZUluZGV4LCBjYWxsYmFjaykge1xuICAgIGlmICghaXNCdXN5KCkpIHtcbiAgICAgIHZhciBkZXN0ID0gcGFyc2UoY29udHJvbCk7XG4gICAgICB2YXIgaW5kZXggPSBsb29wKGRlc3QpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSAmJiAoYWxsb3dTYW1lSW5kZXggfHwgaW5kZXggIT09IGN1cnJJbmRleCkpIHtcbiAgICAgICAgc2V0SW5kZXgoaW5kZXgpO1xuICAgICAgICBNb3ZlLm1vdmUoZGVzdCwgaW5kZXgsIHByZXZJbmRleCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHNuYXAsIGNhbGxiYWNrKSB7XG4gICAgQ29tcG9uZW50czIuU2Nyb2xsLnNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHNuYXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldEluZGV4KGxvb3AoTW92ZS50b0luZGV4KGdldFBvc2l0aW9uKCkpKSk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2UoY29udHJvbCkge1xuICAgIHZhciBpbmRleCA9IGN1cnJJbmRleDtcblxuICAgIGlmIChpc1N0cmluZyhjb250cm9sKSkge1xuICAgICAgdmFyIF9yZWYgPSBjb250cm9sLm1hdGNoKC8oWytcXC08Pl0pKFxcZCspPy8pIHx8IFtdLFxuICAgICAgICAgIGluZGljYXRvciA9IF9yZWZbMV0sXG4gICAgICAgICAgbnVtYmVyID0gX3JlZlsyXTtcblxuICAgICAgaWYgKGluZGljYXRvciA9PT0gXCIrXCIgfHwgaW5kaWNhdG9yID09PSBcIi1cIikge1xuICAgICAgICBpbmRleCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgKyhcIlwiICsgaW5kaWNhdG9yICsgKCtudW1iZXIgfHwgMSkpLCBjdXJySW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPlwiKSB7XG4gICAgICAgIGluZGV4ID0gbnVtYmVyID8gdG9JbmRleCgrbnVtYmVyKSA6IGdldE5leHQodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gXCI8XCIpIHtcbiAgICAgICAgaW5kZXggPSBnZXRQcmV2KHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGlzTG9vcCA/IGNvbnRyb2wgOiBjbGFtcChjb250cm9sLCAwLCBnZXRFbmQoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWRqYWNlbnQocHJldiwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgbnVtYmVyID0gcGVyTW92ZSB8fCAoaGFzRm9jdXMoKSA/IDEgOiBwZXJQYWdlKTtcbiAgICB2YXIgZGVzdCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgbnVtYmVyICogKHByZXYgPyAtMSA6IDEpLCBjdXJySW5kZXgsICEocGVyTW92ZSB8fCBoYXNGb2N1cygpKSk7XG5cbiAgICBpZiAoZGVzdCA9PT0gLTEgJiYgaXNTbGlkZSkge1xuICAgICAgaWYgKCFhcHByb3hpbWF0ZWx5RXF1YWwoZ2V0UG9zaXRpb24oKSwgZ2V0TGltaXQoIXByZXYpLCAxKSkge1xuICAgICAgICByZXR1cm4gcHJldiA/IDAgOiBnZXRFbmQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb24gPyBkZXN0IDogbG9vcChkZXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVEZXN0SW5kZXgoZGVzdCwgZnJvbSwgc25hcFBhZ2UpIHtcbiAgICBpZiAoaXNFbm91Z2goKSkge1xuICAgICAgdmFyIGVuZCA9IGdldEVuZCgpO1xuICAgICAgdmFyIGluZGV4ID0gY29tcHV0ZU1vdmFibGVEZXN0SW5kZXgoZGVzdCk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gZGVzdCkge1xuICAgICAgICBmcm9tID0gZGVzdDtcbiAgICAgICAgZGVzdCA9IGluZGV4O1xuICAgICAgICBzbmFwUGFnZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVzdCA8IDAgfHwgZGVzdCA+IGVuZCkge1xuICAgICAgICBpZiAoYmV0d2VlbigwLCBkZXN0LCBmcm9tLCB0cnVlKSB8fCBiZXR3ZWVuKGVuZCwgZnJvbSwgZGVzdCwgdHJ1ZSkpIHtcbiAgICAgICAgICBkZXN0ID0gdG9JbmRleCh0b1BhZ2UoZGVzdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0xvb3ApIHtcbiAgICAgICAgICAgIGRlc3QgPSBzbmFwUGFnZSA/IGRlc3QgPCAwID8gLShzbGlkZUNvdW50ICUgcGVyUGFnZSB8fCBwZXJQYWdlKSA6IHNsaWRlQ291bnQgOiBkZXN0O1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgICAgIGRlc3QgPSBkZXN0IDwgMCA/IGVuZCA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3QgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzbmFwUGFnZSAmJiBkZXN0ICE9PSBmcm9tKSB7XG4gICAgICAgICAgZGVzdCA9IHRvSW5kZXgodG9QYWdlKGZyb20pICsgKGRlc3QgPCBmcm9tID8gLTEgOiAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdCA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU1vdmFibGVEZXN0SW5kZXgoZGVzdCkge1xuICAgIGlmIChpc1NsaWRlICYmIG9wdGlvbnMudHJpbVNwYWNlID09PSBcIm1vdmVcIiAmJiBkZXN0ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA9PT0gdG9Qb3NpdGlvbihkZXN0LCB0cnVlKSAmJiBiZXR3ZWVuKGRlc3QsIDAsIFNwbGlkZTIubGVuZ3RoIC0gMSwgIW9wdGlvbnMucmV3aW5kKSkge1xuICAgICAgICBkZXN0IDwgY3VyckluZGV4ID8gLS1kZXN0IDogKytkZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChpbmRleCkge1xuICAgIHJldHVybiBpc0xvb3AgPyAoaW5kZXggKyBzbGlkZUNvdW50KSAlIHNsaWRlQ291bnQgfHwgMCA6IGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5kKCkge1xuICAgIHJldHVybiBtYXgoc2xpZGVDb3VudCAtIChoYXNGb2N1cygpIHx8IGlzTG9vcCAmJiBwZXJNb3ZlID8gMSA6IHBlclBhZ2UpLCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgIHJldHVybiBjbGFtcChoYXNGb2N1cygpID8gcGFnZSA6IHBlclBhZ2UgKiBwYWdlLCAwLCBnZXRFbmQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b1BhZ2UoaW5kZXgpIHtcbiAgICByZXR1cm4gaGFzRm9jdXMoKSA/IGluZGV4IDogZmxvb3IoKGluZGV4ID49IGdldEVuZCgpID8gc2xpZGVDb3VudCAtIDEgOiBpbmRleCkgLyBwZXJQYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRGVzdChkZXN0aW5hdGlvbikge1xuICAgIHZhciBjbG9zZXN0ID0gTW92ZS50b0luZGV4KGRlc3RpbmF0aW9uKTtcbiAgICByZXR1cm4gaXNTbGlkZSA/IGNsYW1wKGNsb3Nlc3QsIDAsIGdldEVuZCgpKSA6IGNsb3Nlc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbmRleChpbmRleCkge1xuICAgIGlmIChpbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgICBjdXJySW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmRleChwcmV2KSB7XG4gICAgcmV0dXJuIHByZXYgPyBwcmV2SW5kZXggOiBjdXJySW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKG9wdGlvbnMuZm9jdXMpIHx8IG9wdGlvbnMuaXNOYXZpZ2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNCdXN5KCkge1xuICAgIHJldHVybiBTcGxpZGUyLnN0YXRlLmlzKFtNT1ZJTkcsIFNDUk9MTElOR10pICYmICEhb3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGdvOiBnbyxcbiAgICBzY3JvbGw6IHNjcm9sbCxcbiAgICBnZXROZXh0OiBnZXROZXh0LFxuICAgIGdldFByZXY6IGdldFByZXYsXG4gICAgZ2V0QWRqYWNlbnQ6IGdldEFkamFjZW50LFxuICAgIGdldEVuZDogZ2V0RW5kLFxuICAgIHNldEluZGV4OiBzZXRJbmRleCxcbiAgICBnZXRJbmRleDogZ2V0SW5kZXgsXG4gICAgdG9JbmRleDogdG9JbmRleCxcbiAgICB0b1BhZ2U6IHRvUGFnZSxcbiAgICB0b0Rlc3Q6IHRvRGVzdCxcbiAgICBoYXNGb2N1czogaGFzRm9jdXMsXG4gICAgaXNCdXN5OiBpc0J1c3lcbiAgfTtcbn1cblxudmFyIFhNTF9OQU1FX1NQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xudmFyIFBBVEggPSBcIm0xNS41IDAuOTMyLTQuMyA0LjM4IDE0LjUgMTQuNi0xNC41IDE0LjUgNC4zIDQuNCAxNC42LTE0LjYgNC40LTQuMy00LjQtNC40LTE0LjYtMTQuNnpcIjtcbnZhciBTSVpFID0gNDA7XG5cbmZ1bmN0aW9uIEFycm93cyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBiaW5kID0gZXZlbnQuYmluZCxcbiAgICAgIGVtaXQgPSBldmVudC5lbWl0O1xuICB2YXIgY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG47XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gIHZhciB1c2VyQXJyb3dzID0gRWxlbWVudHMuYXJyb3dzLFxuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgdmFyIHdyYXBwZXIgPSB1c2VyQXJyb3dzO1xuICB2YXIgcHJldiA9IEVsZW1lbnRzLnByZXY7XG4gIHZhciBuZXh0ID0gRWxlbWVudHMubmV4dDtcbiAgdmFyIGNyZWF0ZWQ7XG4gIHZhciB3cmFwcGVyQ2xhc3NlcztcbiAgdmFyIGFycm93cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCByZW1vdW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBlbmFibGVkID0gb3B0aW9ucy5hcnJvd3M7XG5cbiAgICBpZiAoZW5hYmxlZCAmJiAhKHByZXYgJiYgbmV4dCkpIHtcbiAgICAgIGNyZWF0ZUFycm93cygpO1xuICAgIH1cblxuICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgIGFzc2lnbihhcnJvd3MsIHtcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dFxuICAgICAgfSk7XG4gICAgICBkaXNwbGF5KHdyYXBwZXIsIGVuYWJsZWQgPyBcIlwiIDogXCJub25lXCIpO1xuICAgICAgYWRkQ2xhc3Mod3JhcHBlciwgd3JhcHBlckNsYXNzZXMgPSBDTEFTU19BUlJPV1MgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbik7XG5cbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIGxpc3RlbigpO1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgQVJJQV9DT05UUk9MUywgdHJhY2suaWQpO1xuICAgICAgICBlbWl0KEVWRU5UX0FSUk9XU19NT1VOVEVELCBwcmV2LCBuZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICByZW1vdmVDbGFzcyh3cmFwcGVyLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgcmVtb3ZlKHVzZXJBcnJvd3MgPyBbcHJldiwgbmV4dF0gOiB3cmFwcGVyKTtcbiAgICAgIHByZXYgPSBuZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgQUxMX0FUVFJJQlVURVMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgICBiaW5kKG5leHQsIFwiY2xpY2tcIiwgYXBwbHkoZ28sIFwiPlwiKSk7XG4gICAgYmluZChwcmV2LCBcImNsaWNrXCIsIGFwcGx5KGdvLCBcIjxcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28oY29udHJvbCkge1xuICAgIENvbnRyb2xsZXIuZ28oY29udHJvbCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvd3MoKSB7XG4gICAgd3JhcHBlciA9IHVzZXJBcnJvd3MgfHwgY3JlYXRlKFwiZGl2XCIsIGNsYXNzZXMuYXJyb3dzKTtcbiAgICBwcmV2ID0gY3JlYXRlQXJyb3codHJ1ZSk7XG4gICAgbmV4dCA9IGNyZWF0ZUFycm93KGZhbHNlKTtcbiAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICBhcHBlbmQod3JhcHBlciwgW3ByZXYsIG5leHRdKTtcbiAgICAhdXNlckFycm93cyAmJiBiZWZvcmUod3JhcHBlciwgdHJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3cocHJldjIpIHtcbiAgICB2YXIgYXJyb3cgPSBcIjxidXR0b24gY2xhc3M9XFxcIlwiICsgY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYyID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSArIFwiXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCIgdmlld0JveD1cXFwiMCAwIFwiICsgU0laRSArIFwiIFwiICsgU0laRSArIFwiXFxcIiB3aWR0aD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiIGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiPjxwYXRoIGQ9XFxcIlwiICsgKG9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEgpICsgXCJcXFwiIC8+XCI7XG4gICAgcmV0dXJuIHBhcnNlSHRtbChhcnJvdyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIGluZGV4ID0gU3BsaWRlMi5pbmRleDtcbiAgICB2YXIgcHJldkluZGV4ID0gQ29udHJvbGxlci5nZXRQcmV2KCk7XG4gICAgdmFyIG5leHRJbmRleCA9IENvbnRyb2xsZXIuZ2V0TmV4dCgpO1xuICAgIHZhciBwcmV2TGFiZWwgPSBwcmV2SW5kZXggPiAtMSAmJiBpbmRleCA8IHByZXZJbmRleCA/IGkxOG4ubGFzdCA6IGkxOG4ucHJldjtcbiAgICB2YXIgbmV4dExhYmVsID0gbmV4dEluZGV4ID4gLTEgJiYgaW5kZXggPiBuZXh0SW5kZXggPyBpMThuLmZpcnN0IDogaTE4bi5uZXh0O1xuICAgIHByZXYuZGlzYWJsZWQgPSBwcmV2SW5kZXggPCAwO1xuICAgIG5leHQuZGlzYWJsZWQgPSBuZXh0SW5kZXggPCAwO1xuICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0xBQkVMLCBwcmV2TGFiZWwpO1xuICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0xBQkVMLCBuZXh0TGFiZWwpO1xuICAgIGVtaXQoRVZFTlRfQVJST1dTX1VQREFURUQsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXJyb3dzOiBhcnJvd3MsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxudmFyIElOVEVSVkFMX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1pbnRlcnZhbFwiO1xuXG5mdW5jdGlvbiBBdXRvcGxheShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U3Lm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTcuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U3LmVtaXQ7XG5cbiAgdmFyIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKG9wdGlvbnMuaW50ZXJ2YWwsIFNwbGlkZTIuZ28uYmluZChTcGxpZGUyLCBcIj5cIiksIG9uQW5pbWF0aW9uRnJhbWUpO1xuICB2YXIgaXNQYXVzZWQgPSBpbnRlcnZhbC5pc1BhdXNlZDtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBfQ29tcG9uZW50czIkRWxlbWVudHM0ID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICByb290ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC5yb290LFxuICAgICAgdG9nZ2xlID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC50b2dnbGU7XG4gIHZhciBhdXRvcGxheSA9IG9wdGlvbnMuYXV0b3BsYXk7XG4gIHZhciBob3ZlcmVkO1xuICB2YXIgZm9jdXNlZDtcbiAgdmFyIHN0b3BwZWQgPSBhdXRvcGxheSA9PT0gXCJwYXVzZVwiO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgbGlzdGVuKCk7XG4gICAgICB0b2dnbGUgJiYgc2V0QXR0cmlidXRlKHRvZ2dsZSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgc3RvcHBlZCB8fCBwbGF5KCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICBiaW5kKHJvb3QsIFwibW91c2VlbnRlciBtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhvdmVyZWQgPSBlLnR5cGUgPT09IFwibW91c2VlbnRlclwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJmb2N1c2luIGZvY3Vzb3V0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvY3VzZWQgPSBlLnR5cGUgPT09IFwiZm9jdXNpblwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICBiaW5kKHRvZ2dsZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3BwZWQgPyBwbGF5KCkgOiBwYXVzZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uKFtFVkVOVF9NT1ZFLCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1JFRlJFU0hdLCBpbnRlcnZhbC5yZXdpbmQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmIChpc1BhdXNlZCgpICYmIENvbXBvbmVudHMyLlNsaWRlcy5pc0Vub3VnaCgpKSB7XG4gICAgICBpbnRlcnZhbC5zdGFydCghb3B0aW9ucy5yZXNldFByb2dyZXNzKTtcbiAgICAgIGZvY3VzZWQgPSBob3ZlcmVkID0gc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKHN0b3ApIHtcbiAgICBpZiAoc3RvcCA9PT0gdm9pZCAwKSB7XG4gICAgICBzdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdG9wcGVkID0gISFzdG9wO1xuICAgIHVwZGF0ZSgpO1xuXG4gICAgaWYgKCFpc1BhdXNlZCgpKSB7XG4gICAgICBpbnRlcnZhbC5wYXVzZSgpO1xuICAgICAgZW1pdChFVkVOVF9BVVRPUExBWV9QQVVTRSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXV0b1RvZ2dsZSgpIHtcbiAgICBpZiAoIXN0b3BwZWQpIHtcbiAgICAgIGhvdmVyZWQgfHwgZm9jdXNlZCA/IHBhdXNlKGZhbHNlKSA6IHBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgdG9nZ2xlQ2xhc3ModG9nZ2xlLCBDTEFTU19BQ1RJVkUsICFzdG9wcGVkKTtcbiAgICAgIHNldEF0dHJpYnV0ZSh0b2dnbGUsIEFSSUFfTEFCRUwsIG9wdGlvbnMuaTE4bltzdG9wcGVkID8gXCJwbGF5XCIgOiBcInBhdXNlXCJdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkFuaW1hdGlvbkZyYW1lKHJhdGUpIHtcbiAgICB2YXIgYmFyID0gRWxlbWVudHMuYmFyO1xuICAgIGJhciAmJiBzdHlsZShiYXIsIFwid2lkdGhcIiwgcmF0ZSAqIDEwMCArIFwiJVwiKTtcbiAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIHJhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKGluZGV4KSB7XG4gICAgdmFyIFNsaWRlID0gQ29tcG9uZW50czIuU2xpZGVzLmdldEF0KGluZGV4KTtcbiAgICBpbnRlcnZhbC5zZXQoU2xpZGUgJiYgK2dldEF0dHJpYnV0ZShTbGlkZS5zbGlkZSwgSU5URVJWQUxfREFUQV9BVFRSSUJVVEUpIHx8IG9wdGlvbnMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogaW50ZXJ2YWwuY2FuY2VsLFxuICAgIHBsYXk6IHBsYXksXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGlzUGF1c2VkOiBpc1BhdXNlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBDb3ZlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlOCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U4Lm9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLmNvdmVyKSB7XG4gICAgICBvbihFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGFwcGx5KHRvZ2dsZSwgdHJ1ZSkpO1xuICAgICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBhcHBseShjb3ZlciwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdmVyKGNvdmVyMikge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLmNvbnRhaW5lciB8fCBTbGlkZS5zbGlkZSwgXCJpbWdcIik7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICB0b2dnbGUoY292ZXIyLCBpbWcsIFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShjb3ZlcjIsIGltZywgU2xpZGUpIHtcbiAgICBTbGlkZS5zdHlsZShcImJhY2tncm91bmRcIiwgY292ZXIyID8gXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybChcXFwiXCIgKyBpbWcuc3JjICsgXCJcXFwiKVwiIDogXCJcIiwgdHJ1ZSk7XG4gICAgZGlzcGxheShpbWcsIGNvdmVyMiA/IFwibm9uZVwiIDogXCJcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBhcHBseShjb3ZlciwgZmFsc2UpXG4gIH07XG59XG5cbnZhciBCT1VOQ0VfRElGRl9USFJFU0hPTEQgPSAxMDtcbnZhciBCT1VOQ0VfRFVSQVRJT04gPSA2MDA7XG52YXIgRlJJQ1RJT05fRkFDVE9SID0gMC42O1xudmFyIEJBU0VfVkVMT0NJVFkgPSAxLjU7XG52YXIgTUlOX0RVUkFUSU9OID0gODAwO1xuXG5mdW5jdGlvbiBTY3JvbGwoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTkgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlOS5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U5LmVtaXQ7XG5cbiAgdmFyIHNldCA9IFNwbGlkZTIuc3RhdGUuc2V0O1xuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0LFxuICAgICAgdHJhbnNsYXRlID0gTW92ZS50cmFuc2xhdGU7XG4gIHZhciBpbnRlcnZhbDtcbiAgdmFyIGNhbGxiYWNrO1xuICB2YXIgZnJpY3Rpb24gPSAxO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX01PVkUsIGNsZWFyKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGNhbmNlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBvblNjcm9sbGVkLCBub0NvbnN0cmFpbikge1xuICAgIHZhciBmcm9tID0gZ2V0UG9zaXRpb24oKTtcbiAgICBjbGVhcigpO1xuXG4gICAgaWYgKHNuYXApIHtcbiAgICAgIHZhciBzaXplID0gQ29tcG9uZW50czIuTGF5b3V0LnNsaWRlclNpemUoKTtcbiAgICAgIHZhciBvZmZzZXQgPSBzaWduKGRlc3RpbmF0aW9uKSAqIHNpemUgKiBmbG9vcihhYnMoZGVzdGluYXRpb24pIC8gc2l6ZSkgfHwgMDtcbiAgICAgIGRlc3RpbmF0aW9uID0gTW92ZS50b1Bvc2l0aW9uKENvbXBvbmVudHMyLkNvbnRyb2xsZXIudG9EZXN0KGRlc3RpbmF0aW9uICUgc2l6ZSkpICsgb2Zmc2V0O1xuICAgIH1cblxuICAgIHZhciBub0Rpc3RhbmNlID0gYXBwcm94aW1hdGVseUVxdWFsKGZyb20sIGRlc3RpbmF0aW9uLCAxKTtcbiAgICBmcmljdGlvbiA9IDE7XG4gICAgZHVyYXRpb24gPSBub0Rpc3RhbmNlID8gMCA6IGR1cmF0aW9uIHx8IG1heChhYnMoZGVzdGluYXRpb24gLSBmcm9tKSAvIEJBU0VfVkVMT0NJVFksIE1JTl9EVVJBVElPTik7XG4gICAgY2FsbGJhY2sgPSBvblNjcm9sbGVkO1xuICAgIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKGR1cmF0aW9uLCBvbkVuZCwgYXBwbHkodXBkYXRlLCBmcm9tLCBkZXN0aW5hdGlvbiwgbm9Db25zdHJhaW4pLCAxKTtcbiAgICBzZXQoU0NST0xMSU5HKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTCk7XG4gICAgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW5kKCkge1xuICAgIHNldChJRExFKTtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIGVtaXQoRVZFTlRfU0NST0xMRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGZyb20sIHRvLCBub0NvbnN0cmFpbiwgcmF0ZSkge1xuICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHRhcmdldCA9IGZyb20gKyAodG8gLSBmcm9tKSAqIGVhc2luZyhyYXRlKTtcbiAgICB2YXIgZGlmZiA9ICh0YXJnZXQgLSBwb3NpdGlvbikgKiBmcmljdGlvbjtcbiAgICB0cmFuc2xhdGUocG9zaXRpb24gKyBkaWZmKTtcblxuICAgIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiAhbm9Db25zdHJhaW4gJiYgZXhjZWVkZWRMaW1pdCgpKSB7XG4gICAgICBmcmljdGlvbiAqPSBGUklDVElPTl9GQUNUT1I7XG5cbiAgICAgIGlmIChhYnMoZGlmZikgPCBCT1VOQ0VfRElGRl9USFJFU0hPTEQpIHtcbiAgICAgICAgc2Nyb2xsKGdldExpbWl0KGV4Y2VlZGVkTGltaXQodHJ1ZSkpLCBCT1VOQ0VfRFVSQVRJT04sIGZhbHNlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKGludGVydmFsICYmICFpbnRlcnZhbC5pc1BhdXNlZCgpKSB7XG4gICAgICBjbGVhcigpO1xuICAgICAgb25FbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlYXNpbmcodCkge1xuICAgIHZhciBlYXNpbmdGdW5jID0gb3B0aW9ucy5lYXNpbmdGdW5jO1xuICAgIHJldHVybiBlYXNpbmdGdW5jID8gZWFzaW5nRnVuYyh0KSA6IDEgLSBNYXRoLnBvdygxIC0gdCwgNCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBjbGVhcixcbiAgICBzY3JvbGw6IHNjcm9sbCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgU0NST0xMX0xJU1RFTkVSX09QVElPTlMgPSB7XG4gIHBhc3NpdmU6IGZhbHNlLFxuICBjYXB0dXJlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBEcmFnKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMC5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UxMC5lbWl0LFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEwLmJpbmQsXG4gICAgICB1bmJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMC51bmJpbmQ7XG5cbiAgdmFyIHN0YXRlID0gU3BsaWRlMi5zdGF0ZTtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlLFxuICAgICAgU2Nyb2xsID0gQ29tcG9uZW50czIuU2Nyb2xsLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXIsXG4gICAgICB0cmFjayA9IENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrLFxuICAgICAgcmVkdWNlID0gQ29tcG9uZW50czIuTWVkaWEucmVkdWNlO1xuICB2YXIgX0NvbXBvbmVudHMyJERpcmVjdGlvMiA9IENvbXBvbmVudHMyLkRpcmVjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8yLnJlc29sdmUsXG4gICAgICBvcmllbnQgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8yLm9yaWVudDtcbiAgdmFyIGdldFBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbixcbiAgICAgIGV4Y2VlZGVkTGltaXQgPSBNb3ZlLmV4Y2VlZGVkTGltaXQ7XG4gIHZhciBiYXNlUG9zaXRpb247XG4gIHZhciBiYXNlRXZlbnQ7XG4gIHZhciBwcmV2QmFzZUV2ZW50O1xuICB2YXIgaXNGcmVlO1xuICB2YXIgZHJhZ2dpbmc7XG4gIHZhciBleGNlZWRlZCA9IGZhbHNlO1xuICB2YXIgY2xpY2tQcmV2ZW50ZWQ7XG4gIHZhciBkaXNhYmxlZDtcbiAgdmFyIHRhcmdldDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX01PVkVfRVZFTlRTLCBub29wLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9VUF9FVkVOVFMsIG5vb3AsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX0RPV05fRVZFTlRTLCBvblBvaW50ZXJEb3duLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgXCJjbGlja1wiLCBvbkNsaWNrLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gICAgYmluZCh0cmFjaywgXCJkcmFnc3RhcnRcIiwgcHJldmVudCk7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURURdLCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGRyYWcgPSBvcHRpb25zLmRyYWc7XG4gICAgZGlzYWJsZSghZHJhZyk7XG4gICAgaXNGcmVlID0gZHJhZyA9PT0gXCJmcmVlXCI7XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJEb3duKGUpIHtcbiAgICBjbGlja1ByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgdmFyIGlzVG91Y2ggPSBpc1RvdWNoRXZlbnQoZSk7XG5cbiAgICAgIGlmIChpc0RyYWdnYWJsZShlLnRhcmdldCkgJiYgKGlzVG91Y2ggfHwgIWUuYnV0dG9uKSkge1xuICAgICAgICBpZiAoIUNvbnRyb2xsZXIuaXNCdXN5KCkpIHtcbiAgICAgICAgICB0YXJnZXQgPSBpc1RvdWNoID8gdHJhY2sgOiB3aW5kb3c7XG4gICAgICAgICAgZHJhZ2dpbmcgPSBzdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKTtcbiAgICAgICAgICBwcmV2QmFzZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9NT1ZFX0VWRU5UUywgb25Qb2ludGVyTW92ZSwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgICAgICAgIGJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXAsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBNb3ZlLmNhbmNlbCgpO1xuICAgICAgICAgIFNjcm9sbC5jYW5jZWwoKTtcbiAgICAgICAgICBzYXZlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAoIXN0YXRlLmlzKERSQUdHSU5HKSkge1xuICAgICAgc3RhdGUuc2V0KERSQUdHSU5HKTtcbiAgICAgIGVtaXQoRVZFTlRfRFJBRyk7XG4gICAgfVxuXG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIE1vdmUudHJhbnNsYXRlKGJhc2VQb3NpdGlvbiArIGNvbnN0cmFpbihkaWZmQ29vcmQoZSkpKTtcbiAgICAgICAgdmFyIGV4cGlyZWQgPSBkaWZmVGltZShlKSA+IExPR19JTlRFUlZBTDtcbiAgICAgICAgdmFyIGhhc0V4Y2VlZGVkID0gZXhjZWVkZWQgIT09IChleGNlZWRlZCA9IGV4Y2VlZGVkTGltaXQoKSk7XG5cbiAgICAgICAgaWYgKGV4cGlyZWQgfHwgaGFzRXhjZWVkZWQpIHtcbiAgICAgICAgICBzYXZlKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpY2tQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICBlbWl0KEVWRU5UX0RSQUdHSU5HKTtcbiAgICAgICAgcHJldmVudChlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTbGlkZXJEaXJlY3Rpb24oZSkpIHtcbiAgICAgICAgZHJhZ2dpbmcgPSBzaG91bGRTdGFydChlKTtcbiAgICAgICAgcHJldmVudChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJVcChlKSB7XG4gICAgaWYgKHN0YXRlLmlzKERSQUdHSU5HKSkge1xuICAgICAgc3RhdGUuc2V0KElETEUpO1xuICAgICAgZW1pdChFVkVOVF9EUkFHR0VEKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIG1vdmUoZSk7XG4gICAgICBwcmV2ZW50KGUpO1xuICAgIH1cblxuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUpO1xuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfVVBfRVZFTlRTLCBvblBvaW50ZXJVcCk7XG4gICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICghZGlzYWJsZWQgJiYgY2xpY2tQcmV2ZW50ZWQpIHtcbiAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZShlKSB7XG4gICAgcHJldkJhc2VFdmVudCA9IGJhc2VFdmVudDtcbiAgICBiYXNlRXZlbnQgPSBlO1xuICAgIGJhc2VQb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICB2YXIgdmVsb2NpdHkgPSBjb21wdXRlVmVsb2NpdHkoZSk7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KTtcbiAgICB2YXIgcmV3aW5kID0gb3B0aW9ucy5yZXdpbmQgJiYgb3B0aW9ucy5yZXdpbmRCeURyYWc7XG4gICAgcmVkdWNlKGZhbHNlKTtcblxuICAgIGlmIChpc0ZyZWUpIHtcbiAgICAgIENvbnRyb2xsZXIuc2Nyb2xsKGRlc3RpbmF0aW9uLCAwLCBvcHRpb25zLnNuYXApO1xuICAgIH0gZWxzZSBpZiAoU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgQ29udHJvbGxlci5nbyhvcmllbnQoc2lnbih2ZWxvY2l0eSkpIDwgMCA/IHJld2luZCA/IFwiPFwiIDogXCItXCIgOiByZXdpbmQgPyBcIj5cIiA6IFwiK1wiKTtcbiAgICB9IGVsc2UgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmIGV4Y2VlZGVkICYmIHJld2luZCkge1xuICAgICAgQ29udHJvbGxlci5nbyhleGNlZWRlZExpbWl0KHRydWUpID8gXCI+XCIgOiBcIjxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnRyb2xsZXIuZ28oQ29udHJvbGxlci50b0Rlc3QoZGVzdGluYXRpb24pLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZWR1Y2UodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRTdGFydChlKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBvcHRpb25zLmRyYWdNaW5UaHJlc2hvbGQ7XG4gICAgdmFyIGlzT2JqID0gaXNPYmplY3QodGhyZXNob2xkcyk7XG4gICAgdmFyIG1vdXNlID0gaXNPYmogJiYgdGhyZXNob2xkcy5tb3VzZSB8fCAwO1xuICAgIHZhciB0b3VjaCA9IChpc09iaiA/IHRocmVzaG9sZHMudG91Y2ggOiArdGhyZXNob2xkcykgfHwgMTA7XG4gICAgcmV0dXJuIGFicyhkaWZmQ29vcmQoZSkpID4gKGlzVG91Y2hFdmVudChlKSA/IHRvdWNoIDogbW91c2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTbGlkZXJEaXJlY3Rpb24oZSkge1xuICAgIHJldHVybiBhYnMoZGlmZkNvb3JkKGUpKSA+IGFicyhkaWZmQ29vcmQoZSwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZVZlbG9jaXR5KGUpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhMT09QKSB8fCAhZXhjZWVkZWQpIHtcbiAgICAgIHZhciB0aW1lID0gZGlmZlRpbWUoZSk7XG5cbiAgICAgIGlmICh0aW1lICYmIHRpbWUgPCBMT0dfSU5URVJWQUwpIHtcbiAgICAgICAgcmV0dXJuIGRpZmZDb29yZChlKSAvIHRpbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlRGVzdGluYXRpb24odmVsb2NpdHkpIHtcbiAgICByZXR1cm4gZ2V0UG9zaXRpb24oKSArIHNpZ24odmVsb2NpdHkpICogbWluKGFicyh2ZWxvY2l0eSkgKiAob3B0aW9ucy5mbGlja1Bvd2VyIHx8IDYwMCksIGlzRnJlZSA/IEluZmluaXR5IDogQ29tcG9uZW50czIuTGF5b3V0Lmxpc3RTaXplKCkgKiAob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpZmZDb29yZChlLCBvcnRob2dvbmFsKSB7XG4gICAgcmV0dXJuIGNvb3JkT2YoZSwgb3J0aG9nb25hbCkgLSBjb29yZE9mKGdldEJhc2VFdmVudChlKSwgb3J0aG9nb25hbCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaWZmVGltZShlKSB7XG4gICAgcmV0dXJuIHRpbWVPZihlKSAtIHRpbWVPZihnZXRCYXNlRXZlbnQoZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmFzZUV2ZW50KGUpIHtcbiAgICByZXR1cm4gYmFzZUV2ZW50ID09PSBlICYmIHByZXZCYXNlRXZlbnQgfHwgYmFzZUV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY29vcmRPZihlLCBvcnRob2dvbmFsKSB7XG4gICAgcmV0dXJuIChpc1RvdWNoRXZlbnQoZSkgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSlbXCJwYWdlXCIgKyByZXNvbHZlKG9ydGhvZ29uYWwgPyBcIllcIiA6IFwiWFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJhaW4oZGlmZikge1xuICAgIHJldHVybiBkaWZmIC8gKGV4Y2VlZGVkICYmIFNwbGlkZTIuaXMoU0xJREUpID8gRlJJQ1RJT04gOiAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRHJhZ2dhYmxlKHRhcmdldDIpIHtcbiAgICB2YXIgbm9EcmFnID0gb3B0aW9ucy5ub0RyYWc7XG4gICAgcmV0dXJuICFtYXRjaGVzKHRhcmdldDIsIFwiLlwiICsgQ0xBU1NfUEFHSU5BVElPTl9QQUdFICsgXCIsIC5cIiArIENMQVNTX0FSUk9XKSAmJiAoIW5vRHJhZyB8fCAhbWF0Y2hlcyh0YXJnZXQyLCBub0RyYWcpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVG91Y2hFdmVudChlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBUb3VjaEV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKHZhbHVlKSB7XG4gICAgZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRpc2FibGU6IGRpc2FibGUsXG4gICAgaXNEcmFnZ2luZzogaXNEcmFnZ2luZ1xuICB9O1xufVxuXG52YXIgTk9STUFMSVpBVElPTl9NQVAgPSB7XG4gIFNwYWNlYmFyOiBcIiBcIixcbiAgUmlnaHQ6IEFSUk9XX1JJR0hULFxuICBMZWZ0OiBBUlJPV19MRUZULFxuICBVcDogQVJST1dfVVAsXG4gIERvd246IEFSUk9XX0RPV05cbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAga2V5ID0gaXNTdHJpbmcoa2V5KSA/IGtleSA6IGtleS5rZXk7XG4gIHJldHVybiBOT1JNQUxJWkFUSU9OX01BUFtrZXldIHx8IGtleTtcbn1cblxudmFyIEtFWUJPQVJEX0VWRU5UID0gXCJrZXlkb3duXCI7XG5cbmZ1bmN0aW9uIEtleWJvYXJkKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMS5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMS5iaW5kLFxuICAgICAgdW5iaW5kID0gX0V2ZW50SW50ZXJmYWNlMTEudW5iaW5kO1xuXG4gIHZhciByb290ID0gU3BsaWRlMi5yb290O1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgZGlzYWJsZWQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIGluaXQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBrZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG5cbiAgICBpZiAoa2V5Ym9hcmQpIHtcbiAgICAgIHRhcmdldCA9IGtleWJvYXJkID09PSBcImdsb2JhbFwiID8gd2luZG93IDogcm9vdDtcbiAgICAgIGJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCwgb25LZXlkb3duKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHVuYmluZCh0YXJnZXQsIEtFWUJPQVJEX0VWRU5UKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUodmFsdWUpIHtcbiAgICBkaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIHZhciBfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZGlzYWJsZWQgPSBfZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24oZSkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVLZXkoZSk7XG5cbiAgICAgIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfTEVGVCkpIHtcbiAgICAgICAgU3BsaWRlMi5nbyhcIjxcIik7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19SSUdIVCkpIHtcbiAgICAgICAgU3BsaWRlMi5nbyhcIj5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBkaXNhYmxlOiBkaXNhYmxlXG4gIH07XG59XG5cbnZhciBTUkNfREFUQV9BVFRSSUJVVEUgPSBEQVRBX0FUVFJJQlVURSArIFwiLWxhenlcIjtcbnZhciBTUkNTRVRfREFUQV9BVFRSSUJVVEUgPSBTUkNfREFUQV9BVFRSSUJVVEUgKyBcIi1zcmNzZXRcIjtcbnZhciBJTUFHRV9TRUxFQ1RPUiA9IFwiW1wiICsgU1JDX0RBVEFfQVRUUklCVVRFICsgXCJdLCBbXCIgKyBTUkNTRVRfREFUQV9BVFRSSUJVVEUgKyBcIl1cIjtcblxuZnVuY3Rpb24gTGF6eUxvYWQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTEyID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTEyLm9uLFxuICAgICAgb2ZmID0gX0V2ZW50SW50ZXJmYWNlMTIub2ZmLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEyLmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMTIuZW1pdDtcblxuICB2YXIgaXNTZXF1ZW50aWFsID0gb3B0aW9ucy5sYXp5TG9hZCA9PT0gXCJzZXF1ZW50aWFsXCI7XG4gIHZhciBldmVudHMgPSBbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXTtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy5sYXp5TG9hZCkge1xuICAgICAgaW5pdCgpO1xuICAgICAgb24oRVZFTlRfUkVGUkVTSCwgaW5pdCk7XG4gICAgICBpc1NlcXVlbnRpYWwgfHwgb24oZXZlbnRzLCBvYnNlcnZlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGVtcHR5KGVudHJpZXMpO1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgcXVlcnlBbGwoU2xpZGUuc2xpZGUsIElNQUdFX1NFTEVDVE9SKS5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgdmFyIHNyYyA9IGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX0FUVFJJQlVURSk7XG4gICAgICAgIHZhciBzcmNzZXQgPSBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuXG4gICAgICAgIGlmIChzcmMgIT09IGltZy5zcmMgfHwgc3Jjc2V0ICE9PSBpbWcuc3Jjc2V0KSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3Nlcy5zcGlubmVyO1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBpbWcucGFyZW50RWxlbWVudDtcbiAgICAgICAgICB2YXIgc3Bpbm5lciA9IGNoaWxkKHBhcmVudCwgXCIuXCIgKyBjbGFzc05hbWUpIHx8IGNyZWF0ZShcInNwYW5cIiwgY2xhc3NOYW1lLCBwYXJlbnQpO1xuICAgICAgICAgIGVudHJpZXMucHVzaChbaW1nLCBTbGlkZSwgc3Bpbm5lcl0pO1xuICAgICAgICAgIGltZy5zcmMgfHwgZGlzcGxheShpbWcsIFwibm9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXNTZXF1ZW50aWFsICYmIGxvYWROZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZlKCkge1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdmFyIGRpc3RhbmNlID0gb3B0aW9ucy5wZXJQYWdlICogKChvcHRpb25zLnByZWxvYWRQYWdlcyB8fCAxKSArIDEpIC0gMTtcbiAgICAgIHJldHVybiBkYXRhWzFdLmlzV2l0aGluKFNwbGlkZTIuaW5kZXgsIGRpc3RhbmNlKSA/IGxvYWQoZGF0YSkgOiB0cnVlO1xuICAgIH0pO1xuICAgIGVudHJpZXMubGVuZ3RoIHx8IG9mZihldmVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgdmFyIGltZyA9IGRhdGFbMF07XG4gICAgYWRkQ2xhc3MoZGF0YVsxXS5zbGlkZSwgQ0xBU1NfTE9BRElORyk7XG4gICAgYmluZChpbWcsIFwibG9hZCBlcnJvclwiLCBhcHBseShvbkxvYWQsIGRhdGEpKTtcbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCBcInNyY1wiLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpKTtcbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCBcInNyY3NldFwiLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShpbWcsIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkxvYWQoZGF0YSwgZSkge1xuICAgIHZhciBpbWcgPSBkYXRhWzBdLFxuICAgICAgICBTbGlkZSA9IGRhdGFbMV07XG4gICAgcmVtb3ZlQ2xhc3MoU2xpZGUuc2xpZGUsIENMQVNTX0xPQURJTkcpO1xuXG4gICAgaWYgKGUudHlwZSAhPT0gXCJlcnJvclwiKSB7XG4gICAgICByZW1vdmUoZGF0YVsyXSk7XG4gICAgICBkaXNwbGF5KGltZywgXCJcIik7XG4gICAgICBlbWl0KEVWRU5UX0xBWllMT0FEX0xPQURFRCwgaW1nLCBTbGlkZSk7XG4gICAgICBlbWl0KEVWRU5UX1JFU0laRSk7XG4gICAgfVxuXG4gICAgaXNTZXF1ZW50aWFsICYmIGxvYWROZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBlbnRyaWVzLmxlbmd0aCAmJiBsb2FkKGVudHJpZXMuc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBhcHBseShlbXB0eSwgZW50cmllcylcbiAgfTtcbn1cblxuZnVuY3Rpb24gUGFnaW5hdGlvbihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdCxcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kO1xuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLFxuICAgICAgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICB2YXIgaGFzRm9jdXMgPSBDb250cm9sbGVyLmhhc0ZvY3VzLFxuICAgICAgZ2V0SW5kZXggPSBDb250cm9sbGVyLmdldEluZGV4LFxuICAgICAgZ28gPSBDb250cm9sbGVyLmdvO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgaXRlbXMgPSBbXTtcbiAgdmFyIGxpc3Q7XG4gIHZhciBwYWdpbmF0aW9uQ2xhc3NlcztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBtb3VudCk7XG5cbiAgICBpZiAob3B0aW9ucy5wYWdpbmF0aW9uICYmIFNsaWRlcy5pc0Vub3VnaCgpKSB7XG4gICAgICBvbihbRVZFTlRfTU9WRSwgRVZFTlRfU0NST0xMLCBFVkVOVF9TQ1JPTExFRF0sIHVwZGF0ZSk7XG4gICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGVtaXQoRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVELCB7XG4gICAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgfSwgZ2V0QXQoU3BsaWRlMi5pbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHJlbW92ZShFbGVtZW50cy5wYWdpbmF0aW9uID8gc2xpY2UobGlzdC5jaGlsZHJlbikgOiBsaXN0KTtcbiAgICAgIHJlbW92ZUNsYXNzKGxpc3QsIHBhZ2luYXRpb25DbGFzc2VzKTtcbiAgICAgIGVtcHR5KGl0ZW1zKTtcbiAgICAgIGxpc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IFNwbGlkZTIubGVuZ3RoO1xuICAgIHZhciBjbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzLFxuICAgICAgICBpMThuID0gb3B0aW9ucy5pMThuLFxuICAgICAgICBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIHZhciBtYXggPSBoYXNGb2N1cygpID8gbGVuZ3RoIDogY2VpbChsZW5ndGggLyBwZXJQYWdlKTtcbiAgICBsaXN0ID0gRWxlbWVudHMucGFnaW5hdGlvbiB8fCBjcmVhdGUoXCJ1bFwiLCBjbGFzc2VzLnBhZ2luYXRpb24sIEVsZW1lbnRzLnRyYWNrLnBhcmVudEVsZW1lbnQpO1xuICAgIGFkZENsYXNzKGxpc3QsIHBhZ2luYXRpb25DbGFzc2VzID0gQ0xBU1NfUEFHSU5BVElPTiArIFwiLS1cIiArIGdldERpcmVjdGlvbigpKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgUk9MRSwgXCJ0YWJsaXN0XCIpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBBUklBX0xBQkVMLCBpMThuLnNlbGVjdCk7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIEFSSUFfT1JJRU5UQVRJT04sIGdldERpcmVjdGlvbigpID09PSBUVEIgPyBcInZlcnRpY2FsXCIgOiBcIlwiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIHZhciBsaSA9IGNyZWF0ZShcImxpXCIsIG51bGwsIGxpc3QpO1xuICAgICAgdmFyIGJ1dHRvbiA9IGNyZWF0ZShcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnBhZ2UsXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgIH0sIGxpKTtcbiAgICAgIHZhciBjb250cm9scyA9IFNsaWRlcy5nZXRJbihpKS5tYXAoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5zbGlkZS5pZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHRleHQgPSAhaGFzRm9jdXMoKSAmJiBwZXJQYWdlID4gMSA/IGkxOG4ucGFnZVggOiBpMThuLnNsaWRlWDtcbiAgICAgIGJpbmQoYnV0dG9uLCBcImNsaWNrXCIsIGFwcGx5KG9uQ2xpY2ssIGkpKTtcblxuICAgICAgaWYgKG9wdGlvbnMucGFnaW5hdGlvbktleWJvYXJkKSB7XG4gICAgICAgIGJpbmQoYnV0dG9uLCBcImtleWRvd25cIiwgYXBwbHkob25LZXlkb3duLCBpKSk7XG4gICAgICB9XG5cbiAgICAgIHNldEF0dHJpYnV0ZShsaSwgUk9MRSwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBST0xFLCBcInRhYlwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzLmpvaW4oXCIgXCIpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfTEFCRUwsIGZvcm1hdCh0ZXh0LCBpICsgMSkpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgVEFCX0lOREVYLCAtMSk7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgbGk6IGxpLFxuICAgICAgICBidXR0b246IGJ1dHRvbixcbiAgICAgICAgcGFnZTogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DbGljayhwYWdlKSB7XG4gICAgZ28oXCI+XCIgKyBwYWdlLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihwYWdlLCBlKSB7XG4gICAgdmFyIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5KGUpO1xuICAgIHZhciBkaXIgPSBnZXREaXJlY3Rpb24oKTtcbiAgICB2YXIgbmV4dFBhZ2UgPSAtMTtcblxuICAgIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfUklHSFQsIGZhbHNlLCBkaXIpKSB7XG4gICAgICBuZXh0UGFnZSA9ICsrcGFnZSAlIGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19MRUZULCBmYWxzZSwgZGlyKSkge1xuICAgICAgbmV4dFBhZ2UgPSAoLS1wYWdlICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJIb21lXCIpIHtcbiAgICAgIG5leHRQYWdlID0gMDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgbmV4dFBhZ2UgPSBsZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gaXRlbXNbbmV4dFBhZ2VdO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGZvY3VzKGl0ZW0uYnV0dG9uKTtcbiAgICAgIGdvKFwiPlwiICsgbmV4dFBhZ2UpO1xuICAgICAgcHJldmVudChlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMucGFnaW5hdGlvbkRpcmVjdGlvbiB8fCBvcHRpb25zLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1zW0NvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHByZXYgPSBnZXRBdChnZXRJbmRleCh0cnVlKSk7XG4gICAgdmFyIGN1cnIgPSBnZXRBdChnZXRJbmRleCgpKTtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICB2YXIgYnV0dG9uID0gcHJldi5idXR0b247XG4gICAgICByZW1vdmVDbGFzcyhidXR0b24sIENMQVNTX0FDVElWRSk7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX1NFTEVDVEVEKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFRBQl9JTkRFWCwgLTEpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICB2YXIgX2J1dHRvbiA9IGN1cnIuYnV0dG9uO1xuICAgICAgYWRkQ2xhc3MoX2J1dHRvbiwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgIHNldEF0dHJpYnV0ZShfYnV0dG9uLCBBUklBX1NFTEVDVEVELCB0cnVlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShfYnV0dG9uLCBUQUJfSU5ERVgsIFwiXCIpO1xuICAgIH1cblxuICAgIGVtaXQoRVZFTlRfUEFHSU5BVElPTl9VUERBVEVELCB7XG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfSwgcHJldiwgY3Vycik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBnZXRBdDogZ2V0QXQsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcbn1cblxudmFyIFRSSUdHRVJfS0VZUyA9IFtcIiBcIiwgXCJFbnRlclwiXTtcblxuZnVuY3Rpb24gU3luYyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgaXNOYXZpZ2F0aW9uID0gb3B0aW9ucy5pc05hdmlnYXRpb24sXG4gICAgICBzbGlkZUZvY3VzID0gb3B0aW9ucy5zbGlkZUZvY3VzO1xuICB2YXIgZXZlbnRzID0gW107XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgU3BsaWRlMi5vcHRpb25zID0ge1xuICAgICAgc2xpZGVGb2N1czogaXNVbmRlZmluZWQoc2xpZGVGb2N1cykgPyBpc05hdmlnYXRpb24gOiBzbGlkZUZvY3VzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIFNwbGlkZTIuc3BsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGlmICghdGFyZ2V0LmlzUGFyZW50KSB7XG4gICAgICAgIHN5bmMoU3BsaWRlMiwgdGFyZ2V0LnNwbGlkZSk7XG4gICAgICAgIHN5bmModGFyZ2V0LnNwbGlkZSwgU3BsaWRlMik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgZW1wdHkoZXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKHNwbGlkZSwgdGFyZ2V0KSB7XG4gICAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2Uoc3BsaWRlKTtcbiAgICBldmVudC5vbihFVkVOVF9NT1ZFLCBmdW5jdGlvbiAoaW5kZXgsIHByZXYsIGRlc3QpIHtcbiAgICAgIHRhcmdldC5nbyh0YXJnZXQuaXMoTE9PUCkgPyBkZXN0IDogaW5kZXgpO1xuICAgIH0pO1xuICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdmlnYXRlKCkge1xuICAgIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICAgIHZhciBvbiA9IGV2ZW50Lm9uO1xuICAgIG9uKEVWRU5UX0NMSUNLLCBvbkNsaWNrKTtcbiAgICBvbihFVkVOVF9TTElERV9LRVlET1dOLCBvbktleWRvd24pO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVEXSwgdXBkYXRlKTtcbiAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgZXZlbnQuZW1pdChFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIFNwbGlkZTIuc3BsaWRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgc2V0QXR0cmlidXRlKENvbXBvbmVudHMyLkVsZW1lbnRzLmxpc3QsIEFSSUFfT1JJRU5UQVRJT04sIG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIgPyBcInZlcnRpY2FsXCIgOiBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soU2xpZGUpIHtcbiAgICBTcGxpZGUyLmdvKFNsaWRlLmluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihTbGlkZSwgZSkge1xuICAgIGlmIChpbmNsdWRlcyhUUklHR0VSX0tFWVMsIG5vcm1hbGl6ZUtleShlKSkpIHtcbiAgICAgIG9uQ2xpY2soU2xpZGUpO1xuICAgICAgcHJldmVudChlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldHVwOiBzZXR1cCxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZW1vdW50OiByZW1vdW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdoZWVsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEzLmJpbmQ7XG5cbiAgdmFyIGxhc3RUaW1lID0gMDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy53aGVlbCkge1xuICAgICAgYmluZChDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaywgXCJ3aGVlbFwiLCBvbldoZWVsLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25XaGVlbChlKSB7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgdmFyIGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgdmFyIGJhY2t3YXJkcyA9IGRlbHRhWSA8IDA7XG4gICAgICB2YXIgdGltZVN0YW1wID0gdGltZU9mKGUpO1xuXG4gICAgICB2YXIgX21pbiA9IG9wdGlvbnMud2hlZWxNaW5UaHJlc2hvbGQgfHwgMDtcblxuICAgICAgdmFyIHNsZWVwID0gb3B0aW9ucy53aGVlbFNsZWVwIHx8IDA7XG5cbiAgICAgIGlmIChhYnMoZGVsdGFZKSA+IF9taW4gJiYgdGltZVN0YW1wIC0gbGFzdFRpbWUgPiBzbGVlcCkge1xuICAgICAgICBTcGxpZGUyLmdvKGJhY2t3YXJkcyA/IFwiPFwiIDogXCI+XCIpO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgIH1cblxuICAgICAgc2hvdWxkUHJldmVudChiYWNrd2FyZHMpICYmIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChiYWNrd2FyZHMpIHtcbiAgICByZXR1cm4gIW9wdGlvbnMucmVsZWFzZVdoZWVsIHx8IFNwbGlkZTIuc3RhdGUuaXMoTU9WSU5HKSB8fCBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEFkamFjZW50KGJhY2t3YXJkcykgIT09IC0xO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnRcbiAgfTtcbn1cblxudmFyIFNSX1JFTU9WQUxfREVMQVkgPSA5MDtcblxuZnVuY3Rpb24gTGl2ZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTQub247XG5cbiAgdmFyIHRyYWNrID0gQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2s7XG4gIHZhciBlbmFibGVkID0gb3B0aW9ucy5saXZlICYmICFvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgdmFyIHNyID0gY3JlYXRlKFwic3BhblwiLCBDTEFTU19TUik7XG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChTUl9SRU1PVkFMX0RFTEFZLCBhcHBseSh0b2dnbGUsIGZhbHNlKSk7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGUoIUNvbXBvbmVudHMyLkF1dG9wbGF5LmlzUGF1c2VkKCkpO1xuICAgICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0FUT01JQywgdHJ1ZSk7XG4gICAgICBzci50ZXh0Q29udGVudCA9IFwiXFx1MjAyNlwiO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUExBWSwgYXBwbHkoZGlzYWJsZSwgdHJ1ZSkpO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUEFVU0UsIGFwcGx5KGRpc2FibGUsIGZhbHNlKSk7XG4gICAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXSwgYXBwbHkodG9nZ2xlLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGFjdGl2ZSkge1xuICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9CVVNZLCBhY3RpdmUpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYXBwZW5kKHRyYWNrLCBzcik7XG4gICAgICBpbnRlcnZhbC5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoc3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHRyYWNrLCBbQVJJQV9MSVZFLCBBUklBX0FUT01JQywgQVJJQV9CVVNZXSk7XG4gICAgcmVtb3ZlKHNyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoZGlzYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0xJVkUsIGRpc2FibGVkID8gXCJvZmZcIiA6IFwicG9saXRlXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRpc2FibGU6IGRpc2FibGUsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG52YXIgQ29tcG9uZW50Q29uc3RydWN0b3JzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIE1lZGlhOiBNZWRpYSxcbiAgRGlyZWN0aW9uOiBEaXJlY3Rpb24sXG4gIEVsZW1lbnRzOiBFbGVtZW50cyxcbiAgU2xpZGVzOiBTbGlkZXMsXG4gIExheW91dDogTGF5b3V0LFxuICBDbG9uZXM6IENsb25lcyxcbiAgTW92ZTogTW92ZSxcbiAgQ29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgQXJyb3dzOiBBcnJvd3MsXG4gIEF1dG9wbGF5OiBBdXRvcGxheSxcbiAgQ292ZXI6IENvdmVyLFxuICBTY3JvbGw6IFNjcm9sbCxcbiAgRHJhZzogRHJhZyxcbiAgS2V5Ym9hcmQ6IEtleWJvYXJkLFxuICBMYXp5TG9hZDogTGF6eUxvYWQsXG4gIFBhZ2luYXRpb246IFBhZ2luYXRpb24sXG4gIFN5bmM6IFN5bmMsXG4gIFdoZWVsOiBXaGVlbCxcbiAgTGl2ZTogTGl2ZVxufSk7XG52YXIgSTE4TiA9IHtcbiAgcHJldjogXCJQcmV2aW91cyBzbGlkZVwiLFxuICBuZXh0OiBcIk5leHQgc2xpZGVcIixcbiAgZmlyc3Q6IFwiR28gdG8gZmlyc3Qgc2xpZGVcIixcbiAgbGFzdDogXCJHbyB0byBsYXN0IHNsaWRlXCIsXG4gIHNsaWRlWDogXCJHbyB0byBzbGlkZSAlc1wiLFxuICBwYWdlWDogXCJHbyB0byBwYWdlICVzXCIsXG4gIHBsYXk6IFwiU3RhcnQgYXV0b3BsYXlcIixcbiAgcGF1c2U6IFwiUGF1c2UgYXV0b3BsYXlcIixcbiAgY2Fyb3VzZWw6IFwiY2Fyb3VzZWxcIixcbiAgc2xpZGU6IFwic2xpZGVcIixcbiAgc2VsZWN0OiBcIlNlbGVjdCBhIHNsaWRlIHRvIHNob3dcIixcbiAgc2xpZGVMYWJlbDogXCIlcyBvZiAlc1wiXG59O1xudmFyIERFRkFVTFRTID0ge1xuICB0eXBlOiBcInNsaWRlXCIsXG4gIHJvbGU6IFwicmVnaW9uXCIsXG4gIHNwZWVkOiA0MDAsXG4gIHBlclBhZ2U6IDEsXG4gIGNsb25lU3RhdHVzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIHBhZ2luYXRpb246IHRydWUsXG4gIHBhZ2luYXRpb25LZXlib2FyZDogdHJ1ZSxcbiAgaW50ZXJ2YWw6IDVlMyxcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gIHJlc2V0UHJvZ3Jlc3M6IHRydWUsXG4gIGVhc2luZzogXCJjdWJpYy1iZXppZXIoMC4yNSwgMSwgMC41LCAxKVwiLFxuICBkcmFnOiB0cnVlLFxuICBkaXJlY3Rpb246IFwibHRyXCIsXG4gIHRyaW1TcGFjZTogdHJ1ZSxcbiAgZm9jdXNhYmxlTm9kZXM6IFwiYSwgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgaWZyYW1lXCIsXG4gIGxpdmU6IHRydWUsXG4gIGNsYXNzZXM6IENMQVNTRVMsXG4gIGkxOG46IEkxOE4sXG4gIHJlZHVjZWRNb3Rpb246IHtcbiAgICBzcGVlZDogMCxcbiAgICByZXdpbmRTcGVlZDogMCxcbiAgICBhdXRvcGxheTogXCJwYXVzZVwiXG4gIH1cbn07XG5cbmZ1bmN0aW9uIEZhZGUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTE1ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTE1Lm9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRUZSRVNIXSwgZnVuY3Rpb24gKCkge1xuICAgICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICBDb21wb25lbnRzMi5TbGlkZXMuc3R5bGUoXCJ0cmFuc2l0aW9uXCIsIFwib3BhY2l0eSBcIiArIG9wdGlvbnMuc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChpbmRleCwgZG9uZSkge1xuICAgIHZhciB0cmFjayA9IENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrO1xuICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCB1bml0KHJlY3QodHJhY2spLmhlaWdodCkpO1xuICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbmUoKTtcbiAgICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCBcIlwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IG5vb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2xpZGUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTE2ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTYuYmluZDtcblxuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmUsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcixcbiAgICAgIFNjcm9sbCA9IENvbXBvbmVudHMyLlNjcm9sbDtcbiAgdmFyIGxpc3QgPSBDb21wb25lbnRzMi5FbGVtZW50cy5saXN0O1xuICB2YXIgdHJhbnNpdGlvbiA9IGFwcGx5KHN0eWxlLCBsaXN0LCBcInRyYW5zaXRpb25cIik7XG4gIHZhciBlbmRDYWxsYmFjaztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBiaW5kKGxpc3QsIFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBsaXN0ICYmIGVuZENhbGxiYWNrKSB7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoaW5kZXgsIGRvbmUpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSBNb3ZlLnRvUG9zaXRpb24oaW5kZXgsIHRydWUpO1xuICAgIHZhciBwb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24oKTtcbiAgICB2YXIgc3BlZWQgPSBnZXRTcGVlZChpbmRleCk7XG5cbiAgICBpZiAoYWJzKGRlc3RpbmF0aW9uIC0gcG9zaXRpb24pID49IDEgJiYgc3BlZWQgPj0gMSkge1xuICAgICAgaWYgKG9wdGlvbnMudXNlU2Nyb2xsKSB7XG4gICAgICAgIFNjcm9sbC5zY3JvbGwoZGVzdGluYXRpb24sIHNwZWVkLCBmYWxzZSwgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uKFwidHJhbnNmb3JtIFwiICsgc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcpO1xuICAgICAgICBNb3ZlLnRyYW5zbGF0ZShkZXN0aW5hdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGVuZENhbGxiYWNrID0gZG9uZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgTW92ZS5qdW1wKGluZGV4KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdHJhbnNpdGlvbihcIlwiKTtcbiAgICBTY3JvbGwuY2FuY2VsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVlZChpbmRleCkge1xuICAgIHZhciByZXdpbmRTcGVlZCA9IG9wdGlvbnMucmV3aW5kU3BlZWQ7XG5cbiAgICBpZiAoU3BsaWRlMi5pcyhTTElERSkgJiYgcmV3aW5kU3BlZWQpIHtcbiAgICAgIHZhciBwcmV2ID0gQ29udHJvbGxlci5nZXRJbmRleCh0cnVlKTtcbiAgICAgIHZhciBlbmQgPSBDb250cm9sbGVyLmdldEVuZCgpO1xuXG4gICAgICBpZiAocHJldiA9PT0gMCAmJiBpbmRleCA+PSBlbmQgfHwgcHJldiA+PSBlbmQgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJld2luZFNwZWVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zLnNwZWVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59XG5cbnZhciBfU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX1NwbGlkZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUoQ1JFQVRFRCk7XG4gICAgdGhpcy5zcGxpZGVzID0gW107XG4gICAgdGhpcy5fbyA9IHt9O1xuICAgIHRoaXMuX0UgPSB7fTtcbiAgICB2YXIgcm9vdCA9IGlzU3RyaW5nKHRhcmdldCkgPyBxdWVyeShkb2N1bWVudCwgdGFyZ2V0KSA6IHRhcmdldDtcbiAgICBhc3NlcnQocm9vdCwgcm9vdCArIFwiIGlzIGludmFsaWQuXCIpO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgb3B0aW9ucyA9IG1lcmdlKHtcbiAgICAgIGxhYmVsOiBnZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTCkgfHwgXCJcIixcbiAgICAgIGxhYmVsbGVkYnk6IGdldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMTEVEQlkpIHx8IFwiXCJcbiAgICB9LCBERUZBVUxUUywgX1NwbGlkZS5kZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICB0cnkge1xuICAgICAgbWVyZ2Uob3B0aW9ucywgSlNPTi5wYXJzZShnZXRBdHRyaWJ1dGUocm9vdCwgREFUQV9BVFRSSUJVVEUpKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXNzZXJ0KGZhbHNlLCBcIkludmFsaWQgSlNPTlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vID0gT2JqZWN0LmNyZWF0ZShtZXJnZSh7fSwgb3B0aW9ucykpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9TcGxpZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KEV4dGVuc2lvbnMsIFRyYW5zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgQ29tcG9uZW50czIgPSB0aGlzLkNvbXBvbmVudHM7XG4gICAgYXNzZXJ0KHN0YXRlLmlzKFtDUkVBVEVELCBERVNUUk9ZRURdKSwgXCJBbHJlYWR5IG1vdW50ZWQhXCIpO1xuICAgIHN0YXRlLnNldChDUkVBVEVEKTtcbiAgICB0aGlzLl9DID0gQ29tcG9uZW50czI7XG4gICAgdGhpcy5fVCA9IFRyYW5zaXRpb24gfHwgdGhpcy5fVCB8fCAodGhpcy5pcyhGQURFKSA/IEZhZGUgOiBTbGlkZSk7XG4gICAgdGhpcy5fRSA9IEV4dGVuc2lvbnMgfHwgdGhpcy5fRTtcbiAgICB2YXIgQ29uc3RydWN0b3JzID0gYXNzaWduKHt9LCBDb21wb25lbnRDb25zdHJ1Y3RvcnMsIHRoaXMuX0UsIHtcbiAgICAgIFRyYW5zaXRpb246IHRoaXMuX1RcbiAgICB9KTtcbiAgICBmb3JPd24oQ29uc3RydWN0b3JzLCBmdW5jdGlvbiAoQ29tcG9uZW50LCBrZXkpIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBDb21wb25lbnQoX3RoaXMsIENvbXBvbmVudHMyLCBfdGhpcy5fbyk7XG4gICAgICBDb21wb25lbnRzMltrZXldID0gY29tcG9uZW50O1xuICAgICAgY29tcG9uZW50LnNldHVwICYmIGNvbXBvbmVudC5zZXR1cCgpO1xuICAgIH0pO1xuICAgIGZvck93bihDb21wb25lbnRzMiwgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdChFVkVOVF9NT1VOVEVEKTtcbiAgICBhZGRDbGFzcyh0aGlzLnJvb3QsIENMQVNTX0lOSVRJQUxJWkVEKTtcbiAgICBzdGF0ZS5zZXQoSURMRSk7XG4gICAgdGhpcy5lbWl0KEVWRU5UX1JFQURZKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3luYyA9IGZ1bmN0aW9uIHN5bmMoc3BsaWRlKSB7XG4gICAgdGhpcy5zcGxpZGVzLnB1c2goe1xuICAgICAgc3BsaWRlOiBzcGxpZGVcbiAgICB9KTtcbiAgICBzcGxpZGUuc3BsaWRlcy5wdXNoKHtcbiAgICAgIHNwbGlkZTogdGhpcyxcbiAgICAgIGlzUGFyZW50OiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pcyhJRExFKSkge1xuICAgICAgdGhpcy5fQy5TeW5jLnJlbW91bnQoKTtcblxuICAgICAgc3BsaWRlLkNvbXBvbmVudHMuU3luYy5yZW1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdvID0gZnVuY3Rpb24gZ28oY29udHJvbCkge1xuICAgIHRoaXMuX0MuQ29udHJvbGxlci5nbyhjb250cm9sKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICB0aGlzLmV2ZW50Lm9uKGV2ZW50cywgY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnRzKSB7XG4gICAgdGhpcy5ldmVudC5vZmYoZXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMkZXZlbnQ7XG5cbiAgICAoX3RoaXMkZXZlbnQgPSB0aGlzLmV2ZW50KS5lbWl0LmFwcGx5KF90aGlzJGV2ZW50LCBbZXZlbnRdLmNvbmNhdChzbGljZShhcmd1bWVudHMsIDEpKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNsaWRlcywgaW5kZXgpIHtcbiAgICB0aGlzLl9DLlNsaWRlcy5hZGQoc2xpZGVzLCBpbmRleCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG1hdGNoZXIpIHtcbiAgICB0aGlzLl9DLlNsaWRlcy5yZW1vdmUobWF0Y2hlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXMgPSBmdW5jdGlvbiBpcyh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX28udHlwZSA9PT0gdHlwZTtcbiAgfTtcblxuICBfcHJvdG8ucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5lbWl0KEVWRU5UX1JFRlJFU0gpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgaWYgKGNvbXBsZXRlbHkgPT09IHZvaWQgMCkge1xuICAgICAgY29tcGxldGVseSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50ID0gdGhpcy5ldmVudCxcbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBFdmVudEludGVyZmFjZSh0aGlzKS5vbihFVkVOVF9SRUFEWSwgdGhpcy5kZXN0cm95LmJpbmQodGhpcywgY29tcGxldGVseSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPd24odGhpcy5fQywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICAgIH0sIHRydWUpO1xuICAgICAgZXZlbnQuZW1pdChFVkVOVF9ERVNUUk9ZKTtcbiAgICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICAgIGNvbXBsZXRlbHkgJiYgZW1wdHkodGhpcy5zcGxpZGVzKTtcbiAgICAgIHN0YXRlLnNldChERVNUUk9ZRUQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhfU3BsaWRlLCBbe1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX0MuTWVkaWEuc2V0KG9wdGlvbnMsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9DLlNsaWRlcy5nZXRMZW5ndGgodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluZGV4XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fQy5Db250cm9sbGVyLmdldEluZGV4KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9TcGxpZGU7XG59KCk7XG5cbnZhciBTcGxpZGUgPSBfU3BsaWRlO1xuU3BsaWRlLmRlZmF1bHRzID0ge307XG5TcGxpZGUuU1RBVEVTID0gU1RBVEVTO1xudmFyIENMQVNTX1JFTkRFUkVEID0gXCJpcy1yZW5kZXJlZFwiO1xudmFyIFJFTkRFUkVSX0RFRkFVTFRfQ09ORklHID0ge1xuICBsaXN0VGFnOiBcInVsXCIsXG4gIHNsaWRlVGFnOiBcImxpXCJcbn07XG5cbnZhciBTdHlsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlKGlkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gU3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIucnVsZSA9IGZ1bmN0aW9uIHJ1bGUoc2VsZWN0b3IsIHByb3AsIHZhbHVlLCBicmVha3BvaW50KSB7XG4gICAgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnQgfHwgXCJkZWZhdWx0XCI7XG4gICAgdmFyIHNlbGVjdG9ycyA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdID0gdGhpcy5zdHlsZXNbYnJlYWtwb2ludF0gfHwge307XG4gICAgdmFyIHN0eWxlcyA9IHNlbGVjdG9yc1tzZWxlY3Rvcl0gPSBzZWxlY3RvcnNbc2VsZWN0b3JdIHx8IHt9O1xuICAgIHN0eWxlc1twcm9wXSA9IHZhbHVlO1xuICB9O1xuXG4gIF9wcm90bzIuYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3R5bGVzLmRlZmF1bHQpIHtcbiAgICAgIGNzcyArPSB0aGlzLmJ1aWxkU2VsZWN0b3JzKHRoaXMuc3R5bGVzLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKS5zb3J0KGZ1bmN0aW9uIChuLCBtKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMubWVkaWFRdWVyeSA9PT0gXCJtaW5cIiA/ICtuIC0gK20gOiArbSAtICtuO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgIGlmIChicmVha3BvaW50ICE9PSBcImRlZmF1bHRcIikge1xuICAgICAgICBjc3MgKz0gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcIiArIGJyZWFrcG9pbnQgKyBcInB4KSB7XCI7XG4gICAgICAgIGNzcyArPSBfdGhpczIuYnVpbGRTZWxlY3RvcnMoX3RoaXMyLnN0eWxlc1ticmVha3BvaW50XSk7XG4gICAgICAgIGNzcyArPSBcIn1cIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9wcm90bzIuYnVpbGRTZWxlY3RvcnMgPSBmdW5jdGlvbiBidWlsZFNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIGZvck93bihzZWxlY3RvcnMsIGZ1bmN0aW9uIChzdHlsZXMsIHNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9IChcIiNcIiArIF90aGlzMy5pZCArIFwiIFwiICsgc2VsZWN0b3IpLnRyaW0oKTtcbiAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHtcIjtcbiAgICAgIGZvck93bihzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICBjc3MgKz0gcHJvcCArIFwiOiBcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlO1xufSgpO1xuXG52YXIgU3BsaWRlUmVuZGVyZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTcGxpZGVSZW5kZXJlcihjb250ZW50cywgb3B0aW9ucywgY29uZmlnLCBkZWZhdWx0cykge1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5icmVha3BvaW50cyA9IFtdO1xuICAgIG1lcmdlKERFRkFVTFRTLCBkZWZhdWx0cyB8fCB7fSk7XG4gICAgbWVyZ2UobWVyZ2UodGhpcy5vcHRpb25zLCBERUZBVUxUUyksIG9wdGlvbnMgfHwge30pO1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICB0aGlzLmNvbmZpZyA9IGFzc2lnbih7fSwgUkVOREVSRVJfREVGQVVMVF9DT05GSUcsIGNvbmZpZyB8fCB7fSk7XG4gICAgdGhpcy5pZCA9IHRoaXMuY29uZmlnLmlkIHx8IHVuaXF1ZUlkKFwic3BsaWRlXCIpO1xuICAgIHRoaXMuU3R5bGUgPSBuZXcgU3R5bGUodGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLkRpcmVjdGlvbiA9IERpcmVjdGlvbihudWxsLCBudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgIGFzc2VydCh0aGlzLmNvbnRlbnRzLmxlbmd0aCwgXCJQcm92aWRlIGF0IGxlYXN0IDEgY29udGVudC5cIik7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBTcGxpZGVSZW5kZXJlci5jbGVhbiA9IGZ1bmN0aW9uIGNsZWFuKHNwbGlkZSkge1xuICAgIHZhciBfRXZlbnRJbnRlcmZhY2UxNyA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSksXG4gICAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTcub247XG5cbiAgICB2YXIgcm9vdCA9IHNwbGlkZS5yb290O1xuICAgIHZhciBjbG9uZXMgPSBxdWVyeUFsbChyb290LCBcIi5cIiArIENMQVNTX0NMT05FKTtcbiAgICBvbihFVkVOVF9NT1VOVEVELCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmUoY2hpbGQocm9vdCwgXCJzdHlsZVwiKSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlKGNsb25lcyk7XG4gIH07XG5cbiAgdmFyIF9wcm90bzMgPSBTcGxpZGVSZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLnBhcnNlQnJlYWtwb2ludHMoKTtcbiAgICB0aGlzLmluaXRTbGlkZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyUm9vdFN0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJUcmFja1N0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJTbGlkZVN0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJMaXN0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5pbml0U2xpZGVzID0gZnVuY3Rpb24gaW5pdFNsaWRlcygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHB1c2godGhpcy5zbGlkZXMsIHRoaXMuY29udGVudHMubWFwKGZ1bmN0aW9uIChjb250ZW50LCBpbmRleCkge1xuICAgICAgY29udGVudCA9IGlzU3RyaW5nKGNvbnRlbnQpID8ge1xuICAgICAgICBodG1sOiBjb250ZW50XG4gICAgICB9IDogY29udGVudDtcbiAgICAgIGNvbnRlbnQuc3R5bGVzID0gY29udGVudC5zdHlsZXMgfHwge307XG4gICAgICBjb250ZW50LmF0dHJzID0gY29udGVudC5hdHRycyB8fCB7fTtcblxuICAgICAgX3RoaXM0LmNvdmVyKGNvbnRlbnQpO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IF90aGlzNC5vcHRpb25zLmNsYXNzZXMuc2xpZGUgKyBcIiBcIiArIChpbmRleCA9PT0gMCA/IENMQVNTX0FDVElWRSA6IFwiXCIpO1xuICAgICAgYXNzaWduKGNvbnRlbnQuYXR0cnMsIHtcbiAgICAgICAgY2xhc3M6IChjbGFzc2VzICsgXCIgXCIgKyAoY29udGVudC5hdHRycy5jbGFzcyB8fCBcIlwiKSkudHJpbSgpLFxuICAgICAgICBzdHlsZTogX3RoaXM0LmJ1aWxkU3R5bGVzKGNvbnRlbnQuc3R5bGVzKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KSk7XG5cbiAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUNsb25lcyh0aGlzLnNsaWRlcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJSb290U3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJSb290U3R5bGVzKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjJbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYyWzFdO1xuXG4gICAgICBfdGhpczUuU3R5bGUucnVsZShcIiBcIiwgXCJtYXgtd2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSwgd2lkdGgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJUcmFja1N0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyVHJhY2tTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX1RSQUNLO1xuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWYzWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmM1sxXTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczYucmVzb2x2ZShcInBhZGRpbmdMZWZ0XCIpLCBfdGhpczYuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczYucmVzb2x2ZShcInBhZGRpbmdSaWdodFwiKSwgX3RoaXM2LmNzc1BhZGRpbmcob3B0aW9ucywgdHJ1ZSksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImhlaWdodFwiLCBfdGhpczYuY3NzVHJhY2tIZWlnaHQob3B0aW9ucyksIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyTGlzdFN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdFN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfTElTVDtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmNFswXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjRbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJ0cmFuc2Zvcm1cIiwgX3RoaXM3LmJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpLCB3aWR0aCk7XG5cbiAgICAgIGlmICghX3RoaXM3LmNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpKSB7XG4gICAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImFzcGVjdC1yYXRpb1wiLCBfdGhpczcuY3NzQXNwZWN0UmF0aW8ob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyU2xpZGVTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclNsaWRlU3R5bGVzKCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19TTElERTtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmNVswXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjVbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJ3aWR0aFwiLCBfdGhpczguY3NzU2xpZGVXaWR0aChvcHRpb25zKSwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiaGVpZ2h0XCIsIF90aGlzOC5jc3NTbGlkZUhlaWdodChvcHRpb25zKSB8fCBcIjEwMCVcIiwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIF90aGlzOC5yZXNvbHZlKFwibWFyZ2luUmlnaHRcIiksIHVuaXQob3B0aW9ucy5nYXApIHx8IFwiMHB4XCIsIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yICsgXCIgPiBpbWdcIiwgXCJkaXNwbGF5XCIsIG9wdGlvbnMuY292ZXIgPyBcIm5vbmVcIiA6IFwiaW5saW5lXCIsIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkVHJhbnNsYXRlID0gZnVuY3Rpb24gYnVpbGRUcmFuc2xhdGUob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24gPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbi5yZXNvbHZlLFxuICAgICAgICBvcmllbnQgPSBfdGhpcyREaXJlY3Rpb24ub3JpZW50O1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YWx1ZXMucHVzaCh0aGlzLmNzc09mZnNldENsb25lcyhvcHRpb25zKSk7XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRHYXBzKG9wdGlvbnMpKTtcblxuICAgIGlmICh0aGlzLmlzQ2VudGVyKG9wdGlvbnMpKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KC01MCksIFwiJVwiKSk7XG4gICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIHRoaXMuY3NzT2Zmc2V0Q2VudGVyKG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLmZpbHRlcihCb29sZWFuKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJ0cmFuc2xhdGVcIiArIHJlc29sdmUoXCJYXCIpICsgXCIoXCIgKyB2YWx1ZSArIFwiKVwiO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0Q2xvbmVzID0gZnVuY3Rpb24gY3NzT2Zmc2V0Q2xvbmVzKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uMiA9IHRoaXMuRGlyZWN0aW9uLFxuICAgICAgICByZXNvbHZlID0gX3RoaXMkRGlyZWN0aW9uMi5yZXNvbHZlLFxuICAgICAgICBvcmllbnQgPSBfdGhpcyREaXJlY3Rpb24yLm9yaWVudDtcbiAgICB2YXIgY2xvbmVDb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuXG4gICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZSA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlLnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZS51bml0O1xuXG4gICAgICByZXR1cm4gdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCh2YWx1ZSkgKiBjbG9uZUNvdW50LCB1bml0Mik7XG4gICAgfVxuXG4gICAgdmFyIHBlcmNlbnQgPSAxMDAgKiBjbG9uZUNvdW50IC8gb3B0aW9ucy5wZXJQYWdlO1xuICAgIHJldHVybiBvcmllbnQocGVyY2VudCkgKyBcIiVcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldENlbnRlciA9IGZ1bmN0aW9uIGNzc09mZnNldENlbnRlcihvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbjMgPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbjMucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uMy5vcmllbnQ7XG5cbiAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgIHZhciBfdGhpcyRwYXJzZUNzc1ZhbHVlMiA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMi52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWUyLnVuaXQ7XG5cbiAgICAgIHJldHVybiBbdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCh2YWx1ZSAvIDIpLCB1bml0MildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZSxcbiAgICAgICAgZ2FwID0gb3B0aW9ucy5nYXA7XG4gICAgdmFsdWVzLnB1c2gob3JpZW50KDUwIC8gcGVyUGFnZSkgKyBcIiVcIik7XG5cbiAgICBpZiAoZ2FwKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTMgPSB0aGlzLnBhcnNlQ3NzVmFsdWUoZ2FwKSxcbiAgICAgICAgICBfdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMy52YWx1ZSxcbiAgICAgICAgICBfdW5pdCA9IF90aGlzJHBhcnNlQ3NzVmFsdWUzLnVuaXQ7XG5cbiAgICAgIHZhciBnYXBPZmZzZXQgPSAoX3ZhbHVlIC8gcGVyUGFnZSAtIF92YWx1ZSkgLyAyO1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudChnYXBPZmZzZXQpLCBfdW5pdCkpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRHYXBzID0gZnVuY3Rpb24gY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSB7XG4gICAgdmFyIGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcblxuICAgIGlmIChjbG9uZUNvdW50ICYmIG9wdGlvbnMuZ2FwKSB7XG4gICAgICB2YXIgb3JpZW50ID0gdGhpcy5EaXJlY3Rpb24ub3JpZW50O1xuXG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTQgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9ucy5nYXApLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTQudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlNC51bml0O1xuXG4gICAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgKiBjbG9uZUNvdW50KSwgdW5pdDIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHZhciBnYXBzID0gY2xvbmVDb3VudCAvIHBlclBhZ2U7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudChnYXBzICogdmFsdWUpLCB1bml0Mik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShwcm9wKSB7XG4gICAgcmV0dXJuIGNhbWVsVG9LZWJhYih0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKHByb3ApKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1BhZGRpbmcgPSBmdW5jdGlvbiBjc3NQYWRkaW5nKG9wdGlvbnMsIHJpZ2h0KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgdmFyIHByb3AgPSB0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKHJpZ2h0ID8gXCJyaWdodFwiIDogXCJsZWZ0XCIsIHRydWUpO1xuICAgIHJldHVybiBwYWRkaW5nICYmIHVuaXQocGFkZGluZ1twcm9wXSB8fCAoaXNPYmplY3QocGFkZGluZykgPyAwIDogcGFkZGluZykpIHx8IFwiMHB4XCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NUcmFja0hlaWdodCA9IGZ1bmN0aW9uIGNzc1RyYWNrSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICB2YXIgaGVpZ2h0ID0gXCJcIjtcblxuICAgIGlmICh0aGlzLmlzVmVydGljYWwoKSkge1xuICAgICAgaGVpZ2h0ID0gdGhpcy5jc3NIZWlnaHQob3B0aW9ucyk7XG4gICAgICBhc3NlcnQoaGVpZ2h0LCAnXCJoZWlnaHRcIiBpcyBtaXNzaW5nLicpO1xuICAgICAgaGVpZ2h0ID0gXCJjYWxjKFwiICsgaGVpZ2h0ICsgXCIgLSBcIiArIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSkgKyBcIiAtIFwiICsgdGhpcy5jc3NQYWRkaW5nKG9wdGlvbnMsIHRydWUpICsgXCIpXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8zLmNzc0hlaWdodCA9IGZ1bmN0aW9uIGNzc0hlaWdodChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5oZWlnaHQpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzU2xpZGVXaWR0aCA9IGZ1bmN0aW9uIGNzc1NsaWRlV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmF1dG9XaWR0aCA/IFwiXCIgOiB1bml0KG9wdGlvbnMuZml4ZWRXaWR0aCkgfHwgKHRoaXMuaXNWZXJ0aWNhbCgpID8gXCJcIiA6IHRoaXMuY3NzU2xpZGVTaXplKG9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlSGVpZ2h0ID0gZnVuY3Rpb24gY3NzU2xpZGVIZWlnaHQob3B0aW9ucykge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuZml4ZWRIZWlnaHQpIHx8ICh0aGlzLmlzVmVydGljYWwoKSA/IG9wdGlvbnMuYXV0b0hlaWdodCA/IFwiXCIgOiB0aGlzLmNzc1NsaWRlU2l6ZShvcHRpb25zKSA6IHRoaXMuY3NzSGVpZ2h0KG9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlU2l6ZSA9IGZ1bmN0aW9uIGNzc1NsaWRlU2l6ZShvcHRpb25zKSB7XG4gICAgdmFyIGdhcCA9IHVuaXQob3B0aW9ucy5nYXApO1xuICAgIHJldHVybiBcImNhbGMoKDEwMCVcIiArIChnYXAgJiYgXCIgKyBcIiArIGdhcCkgKyBcIikvXCIgKyAob3B0aW9ucy5wZXJQYWdlIHx8IDEpICsgKGdhcCAmJiBcIiAtIFwiICsgZ2FwKSArIFwiKVwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzQXNwZWN0UmF0aW8gPSBmdW5jdGlvbiBjc3NBc3BlY3RSYXRpbyhvcHRpb25zKSB7XG4gICAgdmFyIGhlaWdodFJhdGlvID0gb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICByZXR1cm4gaGVpZ2h0UmF0aW8gPyBcIlwiICsgMSAvIGhlaWdodFJhdGlvIDogXCJcIjtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQ3NzVmFsdWUgPSBmdW5jdGlvbiBidWlsZENzc1ZhbHVlKHZhbHVlLCB1bml0Mikge1xuICAgIHJldHVybiBcIlwiICsgdmFsdWUgKyB1bml0MjtcbiAgfTtcblxuICBfcHJvdG8zLnBhcnNlQ3NzVmFsdWUgPSBmdW5jdGlvbiBwYXJzZUNzc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgdmFyIG51bWJlciA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XG4gICAgICB2YXIgdW5pdDIgPSB2YWx1ZS5yZXBsYWNlKC9cXGQqKFxcLlxcZCopPy8sIFwiXCIpIHx8IFwicHhcIjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBudW1iZXIsXG4gICAgICAgIHVuaXQ6IHVuaXQyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB1bml0OiBcInB4XCJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90bzMucGFyc2VCcmVha3BvaW50cyA9IGZ1bmN0aW9uIHBhcnNlQnJlYWtwb2ludHMoKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgYnJlYWtwb2ludHMgPSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludHM7XG4gICAgdGhpcy5icmVha3BvaW50cy5wdXNoKFtcImRlZmF1bHRcIiwgdGhpcy5vcHRpb25zXSk7XG5cbiAgICBpZiAoYnJlYWtwb2ludHMpIHtcbiAgICAgIGZvck93bihicmVha3BvaW50cywgZnVuY3Rpb24gKG9wdGlvbnMsIHdpZHRoKSB7XG4gICAgICAgIF90aGlzOS5icmVha3BvaW50cy5wdXNoKFt3aWR0aCwgbWVyZ2UobWVyZ2Uoe30sIF90aGlzOS5vcHRpb25zKSwgb3B0aW9ucyldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmlzRml4ZWRXaWR0aCA9IGZ1bmN0aW9uIGlzRml4ZWRXaWR0aChvcHRpb25zKSB7XG4gICAgcmV0dXJuICEhb3B0aW9uc1t0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV07XG4gIH07XG5cbiAgX3Byb3RvMy5pc0xvb3AgPSBmdW5jdGlvbiBpc0xvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50eXBlID09PSBMT09QO1xuICB9O1xuXG4gIF9wcm90bzMuaXNDZW50ZXIgPSBmdW5jdGlvbiBpc0NlbnRlcihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZm9jdXMgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgPT09IFNMSURFKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLnRyaW1TcGFjZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvMy5pc1ZlcnRpY2FsID0gZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRDbGFzc2VzID0gZnVuY3Rpb24gYnVpbGRDbGFzc2VzKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBbQ0xBU1NfUk9PVCwgQ0xBU1NfUk9PVCArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgQ0xBU1NfUk9PVCArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uLCBvcHRpb25zLmRyYWcgJiYgQ0xBU1NfUk9PVCArIFwiLS1kcmFnZ2FibGVcIiwgb3B0aW9ucy5pc05hdmlnYXRpb24gJiYgQ0xBU1NfUk9PVCArIFwiLS1uYXZcIiwgQ0xBU1NfQUNUSVZFLCAhdGhpcy5jb25maWcuaGlkZGVuICYmIENMQVNTX1JFTkRFUkVEXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZEF0dHJzID0gZnVuY3Rpb24gYnVpbGRBdHRycyhhdHRycykge1xuICAgIHZhciBhdHRyID0gXCJcIjtcbiAgICBmb3JPd24oYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBhdHRyICs9IHZhbHVlID8gXCIgXCIgKyBjYW1lbFRvS2ViYWIoa2V5KSArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIgOiBcIlwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhdHRyLnRyaW0oKTtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkU3R5bGVzID0gZnVuY3Rpb24gYnVpbGRTdHlsZXMoc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gXCJcIjtcbiAgICBmb3JPd24oc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgc3R5bGUgKz0gXCIgXCIgKyBjYW1lbFRvS2ViYWIoa2V5KSArIFwiOlwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGUudHJpbSgpO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyU2xpZGVzID0gZnVuY3Rpb24gcmVuZGVyU2xpZGVzKCkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIHZhciB0YWcgPSB0aGlzLmNvbmZpZy5zbGlkZVRhZztcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMubWFwKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICByZXR1cm4gXCI8XCIgKyB0YWcgKyBcIiBcIiArIF90aGlzMTAuYnVpbGRBdHRycyhjb250ZW50LmF0dHJzKSArIFwiPlwiICsgKGNvbnRlbnQuaHRtbCB8fCBcIlwiKSArIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgX3Byb3RvMy5jb3ZlciA9IGZ1bmN0aW9uIGNvdmVyKGNvbnRlbnQpIHtcbiAgICB2YXIgc3R5bGVzID0gY29udGVudC5zdHlsZXMsXG4gICAgICAgIF9jb250ZW50JGh0bWwgPSBjb250ZW50Lmh0bWwsXG4gICAgICAgIGh0bWwgPSBfY29udGVudCRodG1sID09PSB2b2lkIDAgPyBcIlwiIDogX2NvbnRlbnQkaHRtbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY292ZXIgJiYgIXRoaXMub3B0aW9ucy5sYXp5TG9hZCkge1xuICAgICAgdmFyIHNyYyA9IGh0bWwubWF0Y2goLzxpbWcuKj9zcmNcXHMqPVxccyooWydcIl0pKC4rPylcXDEuKj8+Lyk7XG5cbiAgICAgIGlmIChzcmMgJiYgc3JjWzJdKSB7XG4gICAgICAgIHN0eWxlcy5iYWNrZ3JvdW5kID0gXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybCgnXCIgKyBzcmNbMl0gKyBcIicpXCI7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuZ2VuZXJhdGVDbG9uZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lcyhjb250ZW50cykge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5vcHRpb25zLmNsYXNzZXM7XG4gICAgdmFyIGNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG4gICAgdmFyIHNsaWRlcyA9IGNvbnRlbnRzLnNsaWNlKCk7XG5cbiAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICBwdXNoKHNsaWRlcywgc2xpZGVzKTtcbiAgICB9XG5cbiAgICBwdXNoKHNsaWRlcy5zbGljZSgtY291bnQpLnJldmVyc2UoKSwgc2xpZGVzLnNsaWNlKDAsIGNvdW50KSkuZm9yRWFjaChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHtcbiAgICAgIHZhciBhdHRycyA9IGFzc2lnbih7fSwgY29udGVudC5hdHRycywge1xuICAgICAgICBjbGFzczogY29udGVudC5hdHRycy5jbGFzcyArIFwiIFwiICsgY2xhc3Nlcy5jbG9uZVxuICAgICAgfSk7XG4gICAgICB2YXIgY2xvbmUgPSBhc3NpZ24oe30sIGNvbnRlbnQsIHtcbiAgICAgICAgYXR0cnM6IGF0dHJzXG4gICAgICB9KTtcbiAgICAgIGluZGV4IDwgY291bnQgPyBjb250ZW50cy51bnNoaWZ0KGNsb25lKSA6IGNvbnRlbnRzLnB1c2goY2xvbmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMuZ2V0Q2xvbmVDb3VudCA9IGZ1bmN0aW9uIGdldENsb25lQ291bnQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY2xvbmVzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGVyUGFnZSA9IG1heC5hcHBseSh2b2lkIDAsIHRoaXMuYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChfcmVmNikge1xuICAgICAgICB2YXIgb3B0aW9uczIgPSBfcmVmNlsxXTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMyLnBlclBhZ2U7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gcGVyUGFnZSAqICgob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgX3Byb3RvMy5yZW5kZXJBcnJvd3MgPSBmdW5jdGlvbiByZW5kZXJBcnJvd3MoKSB7XG4gICAgdmFyIGh0bWwgPSBcIlwiO1xuICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHRoaXMub3B0aW9ucy5jbGFzc2VzLmFycm93cyArIFwiXFxcIj5cIjtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyQXJyb3codHJ1ZSk7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KGZhbHNlKTtcbiAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG5cbiAgX3Byb3RvMy5yZW5kZXJBcnJvdyA9IGZ1bmN0aW9uIHJlbmRlckFycm93KHByZXYpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2xhc3NlcyA9IF90aGlzJG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgICAgaTE4biA9IF90aGlzJG9wdGlvbnMuaTE4bjtcbiAgICB2YXIgYXR0cnMgPSB7XG4gICAgICBjbGFzczogY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGFyaWFMYWJlbDogcHJldiA/IGkxOG4ucHJldiA6IGkxOG4ubmV4dFxuICAgIH07XG4gICAgcmV0dXJuIFwiPGJ1dHRvbiBcIiArIHRoaXMuYnVpbGRBdHRycyhhdHRycykgKyBcIj48c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCBcIiArIFNJWkUgKyBcIiBcIiArIFNJWkUgKyBcIlxcXCIgd2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIiBoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIj48cGF0aCBkPVxcXCJcIiArICh0aGlzLm9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEgpICsgXCJcXFwiIC8+PC9zdmc+PC9idXR0b24+XCI7XG4gIH07XG5cbiAgX3Byb3RvMy5odG1sID0gZnVuY3Rpb24gaHRtbCgpIHtcbiAgICB2YXIgX3RoaXMkY29uZmlnID0gdGhpcy5jb25maWcsXG4gICAgICAgIHJvb3RDbGFzcyA9IF90aGlzJGNvbmZpZy5yb290Q2xhc3MsXG4gICAgICAgIGxpc3RUYWcgPSBfdGhpcyRjb25maWcubGlzdFRhZyxcbiAgICAgICAgYXJyb3dzID0gX3RoaXMkY29uZmlnLmFycm93cyxcbiAgICAgICAgYmVmb3JlVHJhY2sgPSBfdGhpcyRjb25maWcuYmVmb3JlVHJhY2ssXG4gICAgICAgIGFmdGVyVHJhY2sgPSBfdGhpcyRjb25maWcuYWZ0ZXJUcmFjayxcbiAgICAgICAgc2xpZGVyID0gX3RoaXMkY29uZmlnLnNsaWRlcixcbiAgICAgICAgYmVmb3JlU2xpZGVyID0gX3RoaXMkY29uZmlnLmJlZm9yZVNsaWRlcixcbiAgICAgICAgYWZ0ZXJTbGlkZXIgPSBfdGhpcyRjb25maWcuYWZ0ZXJTbGlkZXI7XG4gICAgdmFyIGh0bWwgPSBcIlwiO1xuICAgIGh0bWwgKz0gXCI8ZGl2IGlkPVxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgY2xhc3M9XFxcIlwiICsgdGhpcy5idWlsZENsYXNzZXMoKSArIFwiIFwiICsgKHJvb3RDbGFzcyB8fCBcIlwiKSArIFwiXFxcIj5cIjtcbiAgICBodG1sICs9IFwiPHN0eWxlPlwiICsgdGhpcy5TdHlsZS5idWlsZCgpICsgXCI8L3N0eWxlPlwiO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgaHRtbCArPSBiZWZvcmVTbGlkZXIgfHwgXCJcIjtcbiAgICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJzcGxpZGVfX3NsaWRlclxcXCI+XCI7XG4gICAgfVxuXG4gICAgaHRtbCArPSBiZWZvcmVUcmFjayB8fCBcIlwiO1xuXG4gICAgaWYgKGFycm93cykge1xuICAgICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93cygpO1xuICAgIH1cblxuICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJzcGxpZGVfX3RyYWNrXFxcIj5cIjtcbiAgICBodG1sICs9IFwiPFwiICsgbGlzdFRhZyArIFwiIGNsYXNzPVxcXCJzcGxpZGVfX2xpc3RcXFwiPlwiO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJTbGlkZXMoKTtcbiAgICBodG1sICs9IFwiPC9cIiArIGxpc3RUYWcgKyBcIj5cIjtcbiAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgaHRtbCArPSBhZnRlclRyYWNrIHx8IFwiXCI7XG5cbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgICBodG1sICs9IGFmdGVyU2xpZGVyIHx8IFwiXCI7XG4gICAgfVxuXG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9O1xuXG4gIHJldHVybiBTcGxpZGVSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0IHsgQ0xBU1NFUywgQ0xBU1NfQUNUSVZFLCBDTEFTU19BUlJPVywgQ0xBU1NfQVJST1dTLCBDTEFTU19BUlJPV19ORVhULCBDTEFTU19BUlJPV19QUkVWLCBDTEFTU19DTE9ORSwgQ0xBU1NfQ09OVEFJTkVSLCBDTEFTU19GT0NVU19JTiwgQ0xBU1NfSU5JVElBTElaRUQsIENMQVNTX0xJU1QsIENMQVNTX0xPQURJTkcsIENMQVNTX05FWFQsIENMQVNTX1BBR0lOQVRJT04sIENMQVNTX1BBR0lOQVRJT05fUEFHRSwgQ0xBU1NfUFJFViwgQ0xBU1NfUFJPR1JFU1MsIENMQVNTX1BST0dSRVNTX0JBUiwgQ0xBU1NfUk9PVCwgQ0xBU1NfU0xJREUsIENMQVNTX1NQSU5ORVIsIENMQVNTX1NSLCBDTEFTU19UT0dHTEUsIENMQVNTX1RPR0dMRV9QQVVTRSwgQ0xBU1NfVE9HR0xFX1BMQVksIENMQVNTX1RSQUNLLCBDTEFTU19WSVNJQkxFLCBERUZBVUxUUywgRVZFTlRfQUNUSVZFLCBFVkVOVF9BUlJPV1NfTU9VTlRFRCwgRVZFTlRfQVJST1dTX1VQREFURUQsIEVWRU5UX0FVVE9QTEFZX1BBVVNFLCBFVkVOVF9BVVRPUExBWV9QTEFZLCBFVkVOVF9BVVRPUExBWV9QTEFZSU5HLCBFVkVOVF9DTElDSywgRVZFTlRfREVTVFJPWSwgRVZFTlRfRFJBRywgRVZFTlRfRFJBR0dFRCwgRVZFTlRfRFJBR0dJTkcsIEVWRU5UX0hJRERFTiwgRVZFTlRfSU5BQ1RJVkUsIEVWRU5UX0xBWllMT0FEX0xPQURFRCwgRVZFTlRfTU9VTlRFRCwgRVZFTlRfTU9WRSwgRVZFTlRfTU9WRUQsIEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVELCBFVkVOVF9QQUdJTkFUSU9OX1VQREFURUQsIEVWRU5UX1JFQURZLCBFVkVOVF9SRUZSRVNILCBFVkVOVF9SRVNJWkUsIEVWRU5UX1JFU0laRUQsIEVWRU5UX1NDUk9MTCwgRVZFTlRfU0NST0xMRUQsIEVWRU5UX1NISUZURUQsIEVWRU5UX1NMSURFX0tFWURPV04sIEVWRU5UX1VQREFURUQsIEVWRU5UX1ZJU0lCTEUsIEV2ZW50QmluZGVyLCBFdmVudEludGVyZmFjZSwgRkFERSwgTE9PUCwgTFRSLCBSVEwsIFJlcXVlc3RJbnRlcnZhbCwgU0xJREUsIFNUQVRVU19DTEFTU0VTLCBTcGxpZGUsIFNwbGlkZVJlbmRlcmVyLCBTdGF0ZSwgVFRCLCBUaHJvdHRsZSwgU3BsaWRlIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBTcGxpZGUgZnJvbSAnQHNwbGlkZWpzL3NwbGlkZSc7XG5pbXBvcnQgJ0BzcGxpZGVqcy9zcGxpZGUvY3NzL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZXN0aW1vbmlhbHNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25UZXN0aW1vbmlhbHMoaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIG5ldyBTcGxpZGUoaXRlbSwge1xuICAgICAgdHlwZTogXCJmYWRlXCIsXG4gICAgICByZXdpbmQ6IHRydWUsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIGFycm93czogXCJzcGxpZGVfX2Fycm93cyB0ZXN0aW1vbmlhbHNfX2Fycm93c1wiLFxuICAgICAgICBhcnJvdzogXCJzcGxpZGVfX2Fycm93IHRlc3RpbW9uaWFsc19fYXJyb3dcIixcbiAgICAgICAgcHJldjogXCJzcGxpZGVfX2Fycm93LS1wcmV2IHRlc3RpbW9uaWFsc19fYXJyb3ctLXByZXZcIixcbiAgICAgICAgbmV4dDogXCJzcGxpZGVfX2Fycm93LS1uZXh0IHRlc3RpbW9uaWFsc19fYXJyb3ctLW5leHRcIixcbiAgICAgICAgcGFnaW5hdGlvbjogXCJzcGxpZGVfX3BhZ2luYXRpb24gdGVzdGltb25pYWxzX19wYWdpbmF0aW9uXCIsXG4gICAgICAgIHBhZ2U6IFwic3BsaWRlX19wYWdpbmF0aW9uX19wYWdlIHRlc3RpbW9uaWFsc19fcGFnaW5hdGlvbi0tcGFnZVwiLFxuICAgICAgfSxcbiAgICB9KS5tb3VudCgpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBmYXFJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mYXFfX2l0ZW1cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25GYXFMaXN0ZW5lcnMoaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGZhcVF1ZXN0aW9uID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmZhcV9fcXVlc3Rpb25cIik7XG5cbiAgICBmYXFRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlRmFxKGZhcVF1ZXN0aW9uKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVGYXEoZmFxSXRlbSkge1xuICBmYXFJdGVtLmNsYXNzTGlzdC50b2dnbGUoXCJmYXFfX29wZW5cIik7XG59XG4iLCJpbXBvcnQgU3BsaWRlIGZyb20gJ0BzcGxpZGVqcy9zcGxpZGUnO1xuaW1wb3J0ICdAc3BsaWRlanMvc3BsaWRlL2Nzcy9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGhlcm9CYW5uZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLnNwbGlkZVwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkhlcm8oaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaCgoaGVyb0Jhbm5lcikgPT4ge1xuICAgIG5ldyBTcGxpZGUoaGVyb0Jhbm5lciwge1xuICAgICAgdHlwZTogXCJmYWRlXCIsXG4gICAgICByZXdpbmQ6IHRydWUsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgYXJyb3dzOiBcInNwbGlkZV9fYXJyb3dzIGhlcm9fX2Fycm93c1wiLFxuICAgICAgICBhcnJvdzogXCJzcGxpZGVfX2Fycm93IGhlcm9fX2Fycm93XCIsXG4gICAgICAgIHByZXY6IFwic3BsaWRlX19hcnJvdy0tcHJldiBoZXJvX19hcnJvdy0tcHJldlwiLFxuICAgICAgICBuZXh0OiBcInNwbGlkZV9fYXJyb3ctLW5leHQgaGVyb19fYXJyb3ctLW5leHRcIixcbiAgICAgICAgcGFnaW5hdGlvbjogXCJzcGxpZGVfX3BhZ2luYXRpb24gaGVyb19fcGFnaW5hdGlvblwiLFxuICAgICAgICBwYWdlOiBcInNwbGlkZV9fcGFnaW5hdGlvbl9fcGFnZSBoZXJvX19wYWdpbmF0aW9uLS1wYWdlXCIsXG4gICAgICB9LFxuICAgIH0pLm1vdW50KCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IG5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvbkJ1dHRvblwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU5hdigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImhlYWRlcm5hdmlnYXRpb25fX29wZW5cIikpIHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoZWFkZXJuYXZpZ2F0aW9uX19vcGVuXCIpO1xuICAgIGNvbnN0IHNjcm9sbFkgPSBib2R5LnN0eWxlLnRvcDtcbiAgICBib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJcIjtcbiAgICBib2R5LnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KHNjcm9sbFkgfHwgXCIwXCIpICogLTEpO1xuICAgIG5hdkJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gIH0gZWxzZSB7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVybmF2aWdhdGlvbl9fb3BlblwiKTtcbiAgICBjb25zdCBzY3JvbGxZID1cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1zY3JvbGwteVwiKTtcbiAgICBib2R5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIGJvZHkuc3R5bGUudG9wID0gYC0ke3Njcm9sbFl9YDtcbiAgICBuYXZCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrU2Nyb2xsUG9zaXRpb24oKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICBcIi0tc2Nyb2xsLXlcIixcbiAgICBgJHt3aW5kb3cuc2Nyb2xsWX1weGBcbiAgKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbmF2QnV0dG9uLCB0b2dnbGVOYXYsIHRyYWNrU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiLi91dGlscy1uYXZcIjtcbmltcG9ydCB7IGZhcUl0ZW0sIGFzc2lnbkZhcUxpc3RlbmVycyB9IGZyb20gXCIuLi9ndXRlbmJlcmcvZmFxcy91dGlscy1mYXFzLmpzXCI7XG5pbXBvcnQge1xuICB0ZXN0aW1vbmlhbHMsXG4gIGFzc2lnblRlc3RpbW9uaWFscyxcbn0gZnJvbSBcIi4uL2d1dGVuYmVyZy9jdXN0b21lci10ZXN0aW1vbmlhbHMvdXRpbHMtdGVzdGltb25pYWxzXCI7XG5pbXBvcnQgeyBoZXJvQmFubmVycywgYXNzaWduSGVybyB9IGZyb20gXCIuLi9ndXRlbmJlcmcvaGVyby91dGlscy1oZXJvXCI7XG5cbmlmIChuYXZCdXR0b24pIHtcbiAgbmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXYpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0cmFja1Njcm9sbFBvc2l0aW9uKTtcblxuaWYgKGZhcUl0ZW0ubGVuZ3RoID49IDEpIHtcbiAgYXNzaWduRmFxTGlzdGVuZXJzKGZhcUl0ZW0pO1xufVxuXG5pZiAodGVzdGltb25pYWxzLmxlbmd0aCA+PSAxKSB7XG4gIGFzc2lnblRlc3RpbW9uaWFscyh0ZXN0aW1vbmlhbHMpO1xufVxuXG5pZiAoaGVyb0Jhbm5lcnMubGVuZ3RoID4gMCkge1xuICBhc3NpZ25IZXJvKGhlcm9CYW5uZXJzKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0KHNlbGVjdE9iamVjdCkge1xuICB2YXIgdmFsdWUgPSBzZWxlY3RPYmplY3QudmFsdWU7XG4gIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9IFwiL2NhdGVnb3J5L1wiICsgdmFsdWU7XG59XG4iXSwibmFtZXMiOlsiU3BsaWRlIiwidGVzdGltb25pYWxzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXNzaWduVGVzdGltb25pYWxzIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInR5cGUiLCJyZXdpbmQiLCJhcnJvd3MiLCJwYWdpbmF0aW9uIiwiYXV0b3BsYXkiLCJhdXRvSGVpZ2h0IiwiY2xhc3NlcyIsImFycm93IiwicHJldiIsIm5leHQiLCJwYWdlIiwibW91bnQiLCJmYXFJdGVtIiwiYXNzaWduRmFxTGlzdGVuZXJzIiwiZmFxUXVlc3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZUZhcSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImhlcm9CYW5uZXJzIiwiYXNzaWduSGVybyIsImhlcm9CYW5uZXIiLCJuYXZCdXR0b24iLCJ0b2dnbGVOYXYiLCJib2R5IiwiY29udGFpbnMiLCJyZW1vdmUiLCJzY3JvbGxZIiwic3R5bGUiLCJ0b3AiLCJwb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJzZXRBdHRyaWJ1dGUiLCJhZGQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidHJhY2tTY3JvbGxQb3NpdGlvbiIsInNldFByb3BlcnR5IiwibGVuZ3RoIiwiZ2V0U2VsZWN0Iiwic2VsZWN0T2JqZWN0IiwidmFsdWUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==