/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/bulk-select.js":
/*!*************************************!*\
  !*** ./resources/js/bulk-select.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ "./resources/js/node.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/*-----------------------------------------------
|   Bulk Select
-----------------------------------------------*/
var BulkSelect = /*#__PURE__*/function () {
  function BulkSelect(element, option) {
    _classCallCheck(this, BulkSelect);
    this.element = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](element);
    this.option = _objectSpread({
      displayNoneClassName: 'd-none'
    }, option);
  }
  _createClass(BulkSelect, [{
    key: "init",
    value: function init() {
      this.attachNodes();
      this.clickBulkCheckbox();
      this.clickRowCheckbox();
    }
  }, {
    key: "attachNodes",
    value: function attachNodes() {
      var _this$element$data = this.element.data('bulk-select'),
        body = _this$element$data.body,
        actions = _this$element$data.actions,
        replacedElement = _this$element$data.replacedElement;
      this.actions = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById(actions));
      this.replacedElement = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById(replacedElement));
      this.bulkSelectRows = document.getElementById(body).querySelectorAll('[data-bulk-select-row]');
    }
  }, {
    key: "clickBulkCheckbox",
    value: function clickBulkCheckbox() {
      var _this = this;
      // Handle click event in bulk checkbox
      this.element.on('click', function () {
        if (_this.element.attr('indeterminate') === 'indeterminate') {
          _this.actions.addClass(_this.option.displayNoneClassName);
          _this.replacedElement.removeClass(_this.option.displayNoneClassName);
          _this.removeBulkCheck();
          _this.bulkSelectRows.forEach(function (el) {
            var rowCheck = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](el);
            rowCheck.setProp('checked', false);
            rowCheck.setAttribute('checked', false);
          });
          return;
        }
        _this.toggleDisplay();
        _this.bulkSelectRows.forEach(function (el) {
          var rowCheck = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](el);
          rowCheck.setProp('checked', _this.element.attr('checked'));
          rowCheck.setAttribute('checked', _this.element.attr('checked'));
        });
      });
    }
  }, {
    key: "clickRowCheckbox",
    value: function clickRowCheckbox() {
      var _this2 = this;
      // Handle click event in checkbox of each row
      this.bulkSelectRows.forEach(function (el) {
        var rowCheck = new _node__WEBPACK_IMPORTED_MODULE_0__["default"](el);
        rowCheck.on('click', function () {
          if (_this2.element.attr('indeterminate') !== 'indeterminate') {
            _this2.element.setProp('indeterminate', true);
            _this2.element.setAttribute('indeterminate', 'indeterminate');
            _this2.element.setProp('checked', true);
            _this2.element.setAttribute('checked', true);
            _this2.actions.removeClass(_this2.option.displayNoneClassName);
            _this2.replacedElement.addClass(_this2.option.displayNoneClassName);
          }
          if (_toConsumableArray(_this2.bulkSelectRows).every(function (element) {
            return element.checked;
          })) {
            _this2.element.setProp('indeterminate', false);
            _this2.element.setAttribute('indeterminate', false);
          }
          if (_toConsumableArray(_this2.bulkSelectRows).every(function (element) {
            return !element.checked;
          })) {
            _this2.removeBulkCheck();
            _this2.toggleDisplay();
          }
        });
      });
    }
  }, {
    key: "removeBulkCheck",
    value: function removeBulkCheck() {
      this.element.setProp('indeterminate', false);
      this.element.removeAttribute('indeterminate');
      this.element.setProp('checked', false);
      this.element.setAttribute('checked', false);
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay() {
      this.actions.toggleClass(this.option.displayNoneClassName);
      this.replacedElement.toggleClass(this.option.displayNoneClassName);
    }
  }]);
  return BulkSelect;
}();
function bulkSelectInit() {
  var bulkSelects = document.querySelectorAll('[data-bulk-select');
  if (bulkSelects.length) {
    bulkSelects.forEach(function (el) {
      var bulkSelect = new BulkSelect(el);
      bulkSelect.init();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bulkSelectInit);

/***/ }),

/***/ "./resources/js/calendar/events.js":
/*!*****************************************!*\
  !*** ./resources/js/calendar/events.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _window = window,
  dayjs = _window.dayjs;
var currentDay = dayjs && dayjs().format('DD');
var currentMonth = dayjs && dayjs().format('MM');
var prevMonth = dayjs && dayjs().subtract(1, 'month').format('MM');
var nextMonth = dayjs && dayjs().add(1, 'month').format('MM');
var currentYear = dayjs && dayjs().format('YYYY');
var events = [{
  title: 'Boot Camp',
  start: "".concat(currentYear, "-").concat(currentMonth, "-01 10:00:00"),
  end: "".concat(currentYear, "-").concat(currentMonth, "-03 16:00:00"),
  description: "Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council and the City of Boston is proud to announce the New Year's Eve Midnight Harbor Fireworks! This beloved nearly 40-year old tradition is made possible by the generous support of local waterfront organizations and businesses and the support of the City of Boston and the Office of Mayor Marty Walsh.",
  className: 'bg-soft-success',
  location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
  organizer: 'Boston Harbor Now'
}, {
  title: "Crain's New York Business ",
  start: "".concat(currentYear, "-").concat(currentMonth, "-11"),
  description: "Crain's 2020 Hall of Fame. Sponsored Content By Crain's Content Studio. Crain's Content Studio Presents: New Jersey: Perfect for Business. Crain's Business Forum: Letitia James, New York State Attorney General. Crain's NYC Summit: Examining racial disparities during the pandemic",
  className: 'bg-soft-primary'
}, {
  title: 'Conference',
  start: "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay),
  description: 'The Milken Institute Global Conference gathered the best minds in the world to tackle some of its most stubborn challenges. It was a unique experience in which individuals with the power to enact change connected with experts who are reinventing health, technology, philanthropy, industry, and media.',
  className: 'bg-soft-success',
  allDay: true,
  schedules: [{
    title: 'Reporting',
    start: "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay, " 11:00:00"),
    description: 'Time to start the conference and will briefly describe all information about the event.  ',
    className: 'event-bg-soft-success'
  }, {
    title: 'Lunch',
    start: "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay, " 14:00:00"),
    description: 'Lunch facility for all the attendance in the conference.',
    className: 'event-bg-soft-success'
  }, {
    title: 'Contest',
    start: "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay, " 16:00:00"),
    description: 'The starting of the programming contest',
    className: 'event-bg-soft-success'
  }, {
    title: 'Dinner',
    start: "".concat(currentYear, "-").concat(currentMonth, "-").concat(currentDay, " 22:00:00"),
    description: 'Dinner facility for all the attendance in the conference',
    className: 'event-bg-soft-success'
  }]
}, {
  title: "ICT Expo ".concat(currentYear, " - Product Release"),
  start: "".concat(currentYear, "-").concat(currentMonth, "-16 10:00:00"),
  description: "ICT Expo ".concat(currentYear, " is the largest private-sector exposition aimed at showcasing IT and ITES products and services in Switzerland."),
  end: "".concat(currentYear, "-").concat(currentMonth, "-18 16:00:00"),
  className: 'bg-soft-warning'
}, {
  title: 'Meeting',
  start: "".concat(currentYear, "-").concat(currentMonth, "-07 10:00:00"),
  description: 'Discuss about the upcoming projects in current year and assign all tasks to the individuals'
}, {
  title: 'Contest',
  start: "".concat(currentYear, "-").concat(currentMonth, "-14 10:00:00"),
  description: 'PeaceX is an international peace and amity organisation that aims at casting a pall at the striking issues surmounting the development of peoples and is committed to impacting the lives of young people all over the world.'
}, {
  title: 'Event With Url',
  start: "".concat(currentYear, "-").concat(currentMonth, "-23"),
  description: 'Sample example of a event with url. Click the event, will redirect to the given link.',
  className: 'bg-soft-success',
  url: 'http://google.com'
}, {
  title: 'Competition',
  start: "".concat(currentYear, "-").concat(currentMonth, "-26"),
  description: 'The Future of Zambia – Top 30 Under 30 is an annual award, ranking scheme, and recognition platform for young Zambian achievers under the age of 30, who are building brands, creating jobs, changing the game, and transforming the country.',
  className: 'bg-soft-danger'
}, {
  title: 'Birthday Party',
  start: "".concat(currentYear, "-").concat(nextMonth, "-05"),
  description: 'Will celebrate birthday party with my friends and family',
  className: 'bg-soft-primary'
}, {
  title: 'Click for Google',
  url: 'http://google.com/',
  start: "".concat(currentYear, "-").concat(prevMonth, "-10"),
  description: 'Applications are open for the New Media Writing Prize 2020. The New Media Writing Prize (NMWP) showcases exciting and inventive stories and poetry that integrate a variety of formats, platforms, and digital media.',
  className: 'bg-soft-primary'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./resources/js/calendar/index.js":
/*!****************************************!*\
  !*** ./resources/js/calendar/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/js/utils.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./resources/js/calendar/events.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./resources/js/calendar/template.js");
/* harmony import */ var _fullcalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fullcalendar */ "./resources/js/fullcalendar.js");







/*-----------------------------------------------
|   Calendar
-----------------------------------------------*/
var appCalendarInit = function appCalendarInit() {
  var Selectors = {
    ACTIVE: '.active',
    ADD_EVENT_FORM: '#addEventForm',
    ADD_EVENT_MODAL: '#addEventModal',
    CALENDAR: '#appCalendar',
    CALENDAR_TITLE: '.calendar-title',
    DATA_CALENDAR_VIEW: '[data-fc-view]',
    DATA_EVENT: '[data-event]',
    DATA_VIEW_TITLE: '[data-view-title]',
    EVENT_DETAILS_MODAL: '#eventDetailsModal',
    EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
    EVENT_START_DATE: '#addEventModal [name="startDate"]',
    INPUT_TITLE: '[name="title"]'
  };
  var Events = {
    CLICK: 'click',
    SHOWN_BS_MODAL: 'shown.bs.modal',
    SUBMIT: 'submit'
  };
  var DataKeys = {
    EVENT: 'event',
    FC_VIEW: 'fc-view'
  };
  var ClassNames = {
    ACTIVE: 'active'
  };
  var eventList = _events__WEBPACK_IMPORTED_MODULE_1__["default"].reduce(function (acc, val) {
    return val.schedules ? acc.concat(val.schedules.concat(val)) : acc.concat(val);
  }, []);
  var updateTitle = function updateTitle(title) {
    document.querySelector(Selectors.CALENDAR_TITLE).textContent = title;
  };
  var appCalendar = document.querySelector(Selectors.CALENDAR);
  var addEventForm = document.querySelector(Selectors.ADD_EVENT_FORM);
  var addEventModal = document.querySelector(Selectors.ADD_EVENT_MODAL);
  var eventDetailsModal = document.querySelector(Selectors.EVENT_DETAILS_MODAL);
  if (appCalendar) {
    var calendar = (0,_fullcalendar__WEBPACK_IMPORTED_MODULE_3__.renderCalendar)(appCalendar, {
      headerToolbar: false,
      dayMaxEvents: 2,
      height: 800,
      stickyHeaderDates: false,
      views: {
        week: {
          eventLimit: 3
        }
      },
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: true
      },
      events: eventList,
      eventClick: function eventClick(info) {
        if (info.event.url) {
          window.open(info.event.url, '_blank');
          info.jsEvent.preventDefault();
        } else {
          var template = (0,_template__WEBPACK_IMPORTED_MODULE_2__["default"])(info.event);
          document.querySelector(Selectors.EVENT_DETAILS_MODAL_CONTENT).innerHTML = template;
          var modal = new window.bootstrap.Modal(eventDetailsModal);
          modal.show();
        }
      },
      dateClick: function dateClick(info) {
        var modal = new window.bootstrap.Modal(addEventModal);
        modal.show();
        /*eslint-disable-next-line*/
        var flatpickr = document.querySelector(Selectors.EVENT_START_DATE)._flatpickr;
        flatpickr.setDate([info.dateStr]);
      }
    });
    updateTitle(calendar.currentData.viewTitle);
    document.querySelectorAll(Selectors.DATA_EVENT).forEach(function (button) {
      button.addEventListener(Events.CLICK, function (e) {
        var el = e.currentTarget;
        var type = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, DataKeys.EVENT);
        switch (type) {
          case 'prev':
            calendar.prev();
            updateTitle(calendar.currentData.viewTitle);
            break;
          case 'next':
            calendar.next();
            updateTitle(calendar.currentData.viewTitle);
            break;
          case 'today':
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;
          default:
            calendar.today();
            updateTitle(calendar.currentData.viewTitle);
            break;
        }
      });
    });
    document.querySelectorAll(Selectors.DATA_CALENDAR_VIEW).forEach(function (link) {
      link.addEventListener(Events.CLICK, function (e) {
        e.preventDefault();
        var el = e.currentTarget;
        var text = el.textContent;
        el.parentElement.querySelector(Selectors.ACTIVE).classList.remove(ClassNames.ACTIVE);
        el.classList.add(ClassNames.ACTIVE);
        document.querySelector(Selectors.DATA_VIEW_TITLE).textContent = text;
        calendar.changeView(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, DataKeys.FC_VIEW));
        updateTitle(calendar.currentData.viewTitle);
      });
    });
    addEventForm && addEventForm.addEventListener(Events.SUBMIT, function (e) {
      e.preventDefault();
      var _e$target = e.target,
        title = _e$target.title,
        startDate = _e$target.startDate,
        endDate = _e$target.endDate,
        label = _e$target.label,
        description = _e$target.description,
        allDay = _e$target.allDay;
      calendar.addEvent({
        title: title.value,
        start: startDate.value,
        end: endDate.value ? endDate.value : null,
        allDay: allDay.checked,
        className: allDay.checked && label.value ? "bg-soft-".concat(label.value) : '',
        description: description.value
      });
      e.target.reset();
      window.bootstrap.Modal.getInstance(addEventModal).hide();
    });
  }
  addEventModal && addEventModal.addEventListener(Events.SHOWN_BS_MODAL, function (_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.querySelector(Selectors.INPUT_TITLE).focus();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appCalendarInit);

/***/ }),

/***/ "./resources/js/calendar/management-calendar.js":
/*!******************************************************!*\
  !*** ./resources/js/calendar/management-calendar.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/js/utils.js");
/* harmony import */ var _management_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management-events */ "./resources/js/calendar/management-events.js");
/* harmony import */ var _fullcalendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fullcalendar */ "./resources/js/fullcalendar.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template */ "./resources/js/calendar/template.js");







/*-----------------------------------------------
|   Project Management Calendar
-----------------------------------------------*/
var managementCalendarInit = function managementCalendarInit() {
  var Selectors = {
    ADD_EVENT_FORM: '#addEventForm',
    ADD_EVENT_MODAL: '#addEventModal',
    CALENDAR: '#managementAppCalendar',
    EVENT_DETAILS_MODAL: '#eventDetailsModal',
    EVENT_DETAILS_MODAL_CONTENT: '#eventDetailsModal .modal-content',
    DATA_EVENT: '[data-event]',
    DATA_VIEW_TITLE: '[data-view-title]',
    EVENT_START_DATE: '#addEventModal [name="startDate"]',
    EVENT_MANAGEMENT_INFO: '[data-calendar-events]'
  };
  var Events = {
    CLICK: 'click',
    SUBMIT: 'submit'
  };
  var managementEventList = [];
  var DataKeys = {
    EVENT: 'event'
  };
  var managementCalendar = document.querySelector(Selectors.CALENDAR);
  if (managementCalendar) {
    var calendarData = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(managementCalendar, 'calendar-option');
    var managementCalendarEvents = document.getElementById(calendarData === null || calendarData === void 0 ? void 0 : calendarData.events);
    var addEventForm = document.querySelector(Selectors.ADD_EVENT_FORM);
    var addEventModal = document.querySelector(Selectors.ADD_EVENT_MODAL);
    var eventDetailsModal = document.querySelector(Selectors.EVENT_DETAILS_MODAL);
    var updateTitle = function updateTitle(title) {
      var selectTitle = document.getElementById(calendarData === null || calendarData === void 0 ? void 0 : calendarData.title);
      if (selectTitle) {
        selectTitle.textContent = title;
      }
    };
    var updateDay = function updateDay(day) {
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var selectDay = document.getElementById(calendarData === null || calendarData === void 0 ? void 0 : calendarData.day);
      if (selectDay) {
        selectDay.textContent = days[day];
      }
    };
    if (_management_events__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      _management_events__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (e) {
        managementEventList.push({
          start: e.start,
          end: e.end,
          display: 'background',
          classNames: "border border-2 border-".concat(e.classNames, " bg-100")
        });
      });
    }
    if (managementCalendarEvents) {
      _management_events__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (e) {
        managementCalendarEvents.innerHTML += "\n          <li class= 'border-top pt-3 mb-3 pb-1 cursor-pointer' data-calendar-events>\n            <div class= 'border-start border-3 border-".concat(e.classNames, " ps-3 mt-1'>\n              <h6 class=\"mb-1 fw-semi-bold text-700\">").concat(e.title, "</h6>\n              <p class= 'fs--2 text-600 mb-0'>").concat(e.startTime || '', " ").concat(e.endTime ? '-' : '', " ").concat(e.endTime || '', "</p>\n            </div>\n          </li> ");
      });
    }
    var eventManagementInfo = document.querySelectorAll(Selectors.EVENT_MANAGEMENT_INFO);
    if (eventManagementInfo) {
      eventManagementInfo.forEach(function (li, index) {
        li.addEventListener(Events.CLICK, function () {
          var event = _management_events__WEBPACK_IMPORTED_MODULE_1__["default"][index];
          var template = (0,_template__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
          document.querySelector(Selectors.EVENT_DETAILS_MODAL_CONTENT).innerHTML = template;
          var modal = new window.bootstrap.Modal(eventDetailsModal);
          modal.show();
        });
      });
    }
    if (managementCalendar) {
      var calendar = (0,_fullcalendar__WEBPACK_IMPORTED_MODULE_2__.renderCalendar)(managementCalendar, {
        headerToolbar: false,
        dayMaxEvents: 2,
        height: 360,
        stickyHeaderDates: false,
        dateClick: function dateClick(info) {
          var modal = new window.bootstrap.Modal(addEventModal);
          modal.show();
          /*eslint-disable-next-line*/
          var flatpickr = document.querySelector(Selectors.EVENT_START_DATE)._flatpickr;
          flatpickr.setDate([info.dateStr]);
        },
        events: managementEventList
      });
      updateTitle(calendar.currentData.viewTitle);
      updateDay(calendar.currentData.currentDate.getDay());
      document.querySelectorAll(Selectors.DATA_EVENT).forEach(function (button) {
        button.addEventListener(Events.CLICK, function (e) {
          var el = e.currentTarget;
          var type = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, DataKeys.EVENT);
          switch (type) {
            case 'prev':
              calendar.prev();
              updateTitle(calendar.currentData.viewTitle);
              break;
            case 'next':
              calendar.next();
              updateTitle(calendar.currentData.viewTitle);
              break;
            case 'today':
              calendar.today();
              updateTitle(calendar.currentData.viewTitle);
              break;
            default:
              calendar.today();
              updateTitle(calendar.currentData.viewTitle);
              break;
          }
        });
      });
      if (addEventForm) {
        addEventForm.addEventListener(Events.SUBMIT, function (e) {
          e.preventDefault();
          e.target.reset();
          window.bootstrap.Modal.getInstance(addEventModal).hide();
        });
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (managementCalendarInit);

/***/ }),

/***/ "./resources/js/calendar/management-events.js":
/*!****************************************************!*\
  !*** ./resources/js/calendar/management-events.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var thisDay = window.dayjs && window.dayjs().format('DD');
var plus2Day = window.dayjs && window.dayjs().add(2, 'day').format('DD');
var thisMonthNumber = window.dayjs && window.dayjs().format('MM');
var thisMonthName = window.dayjs && window.dayjs().format('MMM');
var upcomingMonthNumber = window.dayjs && window.dayjs().add(1, 'month').format('MM');
var upcomingMonthName = window.dayjs && window.dayjs().format('MMM');
var thisYear = window.dayjs && window.dayjs().format('YYYY');
var managementEvents = [{
  title: "Monthly team meeting for Falcon React Project",
  start: "".concat(thisYear, "-").concat(thisMonthNumber, "-07"),
  end: "".concat(thisYear, "-").concat(thisMonthNumber, "-09"),
  startTime: "07 ".concat(thisMonthName, ", ").concat(thisYear),
  endTime: "10 ".concat(thisMonthName, ", ").concat(thisYear),
  classNames: 'primary',
  extendedProps: {
    description: 'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
    location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now'
  }
}, {
  title: "Newmarket Nights",
  start: "".concat(thisYear, "-").concat(thisMonthNumber, "-16"),
  end: "".concat(thisYear, "-").concat(thisMonthNumber, "-18"),
  startTime: "16 ".concat(thisMonthName, ", ").concat(thisYear),
  classNames: 'success',
  extendedProps: {
    description: 'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
    location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now'
  }
}, {
  title: 'Folk Festival',
  start: "".concat(thisYear, "-").concat(thisMonthNumber, "-25"),
  end: "".concat(thisYear, "-").concat(thisMonthNumber, "-28"),
  startTime: "07 ".concat(thisMonthName, ", ").concat(thisYear),
  endTime: "10 ".concat(thisMonthName, ", ").concat(thisYear),
  classNames: 'warning',
  extendedProps: {
    description: 'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
    location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now'
  }
}, {
  title: "Film Festival",
  start: "".concat(thisYear, "-").concat(upcomingMonthNumber, "-").concat(thisDay),
  end: "".concat(thisYear, "-").concat(upcomingMonthNumber, "-").concat(plus2Day),
  startTime: "07 ".concat(upcomingMonthName, ", ").concat(thisYear),
  endTime: "10 ".concat(upcomingMonthName, ", ").concat(thisYear),
  classNames: 'danger',
  extendedProps: {
    description: 'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
    location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now'
  }
}, {
  title: 'Meeting',
  start: "".concat(thisYear, "-").concat(upcomingMonthNumber, "-28"),
  startTime: "07 ".concat(upcomingMonthName, ", ").concat(thisYear),
  classNames: 'warning',
  extendedProps: {
    description: 'Boston Harbor Now in partnership with the Friends of Christopher Columbus Park, the Wharf District Council.',
    location: 'Boston Harborwalk, Christopher Columbus Park, </br> Boston, MA 02109, United States',
    organizer: 'Boston Harbor Now'
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (managementEvents);

/***/ }),

/***/ "./resources/js/calendar/template.js":
/*!*******************************************!*\
  !*** ./resources/js/calendar/template.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getStackIcon = function getStackIcon(icon, transform) {
  return "\n  <span class=\"fa-stack ms-n1 me-3\">\n    <i class=\"fas fa-circle fa-stack-2x text-200\"></i>\n    <i class=\"".concat(icon, " fa-stack-1x text-primary\" data-fa-transform=").concat(transform, "></i>\n  </span>\n");
};
var getTemplate = function getTemplate(event) {
  return "\n<div class=\"modal-header bg-light ps-card pe-5 border-bottom-0\">\n  <div>\n    <h5 class=\"modal-title mb-0\">".concat(event.title, "</h5>\n    ").concat(!!event.extendedProps.organizer ? "<p class=\"mb-0 fs--1 mt-1\">\n        by <a href=\"#!\">".concat(event.extendedProps.organizer, "</a>\n      </p>") : '', "\n  </div>\n  <button type=\"button\" class=\"btn-close position-absolute end-0 top-0 mt-3 me-3\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n</div>\n<div class=\"modal-body px-card pb-card pt-1 fs--1\">\n  ").concat(event.extendedProps.description ? "\n      <div class=\"d-flex mt-3\">\n        ".concat(getStackIcon('fas fa-align-left'), "\n        <div class=\"flex-1\">\n          <h6>Description</h6>\n          <p class=\"mb-0\">\n            \n          ").concat(event.extendedProps.description.split(' ').slice(0, 30).join(' '), "\n          </p>\n        </div>\n      </div>\n    ") : '', " \n  <div class=\"d-flex mt-3\">\n    ").concat(getStackIcon('fas fa-calendar-check'), "\n    <div class=\"flex-1\">\n        <h6>Date and Time</h6>\n        <p class=\"mb-1\">\n          ").concat(window.dayjs && window.dayjs(event.start).format('dddd, MMMM D, YYYY, h:mm A'), " \n          ").concat(event.end ? "\u2013 <br/>".concat(window.dayjs && window.dayjs(event.end).subtract(1, 'day').format('dddd, MMMM D, YYYY, h:mm A')) : '', "\n        </p>\n    </div>\n  </div>\n  ").concat(event.extendedProps.location ? "\n        <div class=\"d-flex mt-3\">\n          ".concat(getStackIcon('fas fa-map-marker-alt'), "\n          <div class=\"flex-1\">\n              <h6>Location</h6>\n              <p class=\"mb-0\">").concat(event.extendedProps.location, "</p>\n          </div>\n        </div>\n      ") : '', "\n  ").concat(event.schedules ? "\n        <div class=\"d-flex mt-3\">\n        ".concat(getStackIcon('fas fa-clock'), "\n        <div class=\"flex-1\">\n            <h6>Schedule</h6>\n            \n            <ul class=\"list-unstyled timeline mb-0\">\n              ").concat(event.schedules.map(function (schedule) {
    return "<li>".concat(schedule.title, "</li>");
  }).join(''), "\n            </ul>\n        </div>\n      ") : '', "\n  </div>\n</div>\n<div class=\"modal-footer d-flex justify-content-end bg-light px-card border-top-0\">\n  <a href=\"").concat(document.location.href.split('/').slice(0, 5).join('/'), "/app/events/create-an-event.html\" class=\"btn btn-falcon-default btn-sm\">\n    <span class=\"fas fa-pencil-alt fs--2 mr-2\"></span> Edit\n  </a>\n  <a href='").concat(document.location.href.split('/').slice(0, 5).join('/'), "/app/events/event-detail.html' class=\"btn btn-falcon-primary btn-sm\">\n    See more details\n    <span class=\"fas fa-angle-right fs--2 ml-1\"></span>\n  </a>\n</div>\n");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTemplate);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-bar.js":
/*!**************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-bar.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                                  bar-chart                                 */
/* -------------------------------------------------------------------------- */

var barChartInit = function barChartInit() {
  var barChartElement = document.getElementById('chartjs-bar-chart');
  var getOptions = function getOptions() {
    return {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 6, 3],
          backgroundColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('secondary'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.2)],
          borderColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('secondary'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        scales: {
          x: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          },
          y: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1),
              drawBorder: true
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(barChartElement, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (barChartInit);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-bubble.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-bubble.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");
/* eslint-disable */


/* -------------------------------------------------------------------------- */
/*                            Chart Bubble                                    */
/* -------------------------------------------------------------------------- */

var chartBubble = function chartBubble() {
  var pie = document.getElementById('chartjs-bubble-chart');
  var getOptions = function getOptions() {
    return {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Dataset 1',
          data: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.getBubbleDataset)(5, 5, 15, 0, 100),
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors()['primary'],
          hoverBackgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors()['primary']
        }, {
          label: 'Dataset 2',
          data: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.getBubbleDataset)(5, 5, 15, 0, 100),
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors()['success'],
          hoverBackgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors()['success']
        }, {
          label: 'Dataset 3',
          data: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.getBubbleDataset)(5, 5, 15, 0, 100),
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors()['danger'],
          hoverBackgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors()['danger']
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        scales: {
          x: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          },
          y: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(pie, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartBubble);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-combo.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-combo.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Combo                                  */
/* -------------------------------------------------------------------------- */
var chartCombo = function chartCombo() {
  var combo = document.getElementById('chartjs-combo-chart');
  var getOptions = function getOptions() {
    return {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          type: 'line',
          label: 'Dataset 1',
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'),
          borderWidth: 2,
          fill: false,
          data: [55, 80, -60, -22, -50, 40, 90]
        }, {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors()['danger'],
          data: [4, -80, 90, -22, 70, 35, -50],
          borderWidth: 1
        }, {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors()['primary'],
          data: [-30, 30, -18, 100, -45, -25, -50],
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        scales: {
          x: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          },
          y: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(combo, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartCombo);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-doughnut.js":
/*!*******************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-doughnut.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Doughnut                                  */
/* -------------------------------------------------------------------------- */
var chartDoughnut = function chartDoughnut() {
  var doughnut = document.getElementById('chartjs-doughnut-chart');
  var getOptions = function getOptions() {
    return {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [5, 3, 2, 1, 1],
          backgroundColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('facebook'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('youtube'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('twitter'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('linkedin'), 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('github'), 0.2)],
          borderWidth: 1,
          borderColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('facebook'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('youtube'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('twitter'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('linkedin'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('github')]
        }],
        labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub']
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        maintainAspectRatio: false
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(doughnut, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartDoughnut);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-line.js":
/*!***************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-line.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Line                                  */
/* -------------------------------------------------------------------------- */
var chartLine = function chartLine() {
  var line = document.getElementById('chartjs-line-chart');
  var getOptions = function getOptions() {
    return {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          type: 'line',
          label: 'Dataset 1',
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'),
          borderWidth: 2,
          fill: false,
          data: [55, 80, 60, 22, 50, 40, 90],
          tension: 0.3
        }]
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        scales: {
          x: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          },
          y: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(line, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartLine);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-pie.js":
/*!**************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-pie.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Pie                                  */
/* -------------------------------------------------------------------------- */
var chartPie = function chartPie() {
  var pie = document.getElementById('chartjs-pie-chart');
  var getOptions = function getOptions() {
    return {
      type: 'pie',
      data: {
        datasets: [{
          data: [5, 3, 2, 1, 1],
          backgroundColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('facebook'), 0.75), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('youtube'), 0.75), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('twitter'), 0.75), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('linkedin'), 0.75), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('github'), 0.75)],
          borderWidth: 1,
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100']
        }],
        labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'GitHub']
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        maintainAspectRatio: false
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(pie, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartPie);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-polar.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-polar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Polar                                  */
/* -------------------------------------------------------------------------- */
var chartPolar = function chartPolar() {
  var polar = document.getElementById('chartjs-polar-chart');
  var getOptions = function getOptions() {
    return {
      type: 'polarArea',
      data: {
        datasets: [{
          data: [10, 20, 50, 40, 30],
          backgroundColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('facebook'), 0.5), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('youtube'), 0.5), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('twitter'), 0.5), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('linkedin'), 0.5), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success'), 0.5)],
          borderWidth: 1,
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400']
        }],
        labels: ['Facebook', 'Youtube', 'Twitter', 'Linkedin', 'Medium']
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(polar, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartPolar);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-radar.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-radar.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Radar                                  */
/* -------------------------------------------------------------------------- */
var chartRadar = function chartRadar() {
  var radar = document.getElementById('chartjs-radar-chart');
  var getOptions = function getOptions() {
    return {
      type: 'radar',
      data: {
        labels: ['English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'History'],
        datasets: [{
          label: 'Student A',
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success'), 0.5),
          data: [65, 75, 70, 80, 60, 80],
          borderWidth: 1
        }, {
          label: 'Student B',
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.5),
          data: [54, 65, 60, 70, 70, 75],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        maintainAspectRatio: false,
        scales: {
          r: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(radar, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartRadar);

/***/ }),

/***/ "./resources/js/charts/chartjs/chart-scatter.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/chartjs/chart-scatter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
var chartScatter = function chartScatter() {
  var scatter = document.getElementById('chartjs-scatter-chart');
  var getOptions = function getOptions() {
    return {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Dataset one',
          data: [{
            x: -98,
            y: 42
          }, {
            x: -85,
            y: -29
          }, {
            x: -87,
            y: -70
          }, {
            x: -53,
            y: 28
          }, {
            x: -29,
            y: 4
          }, {
            x: -2,
            y: -42
          }, {
            x: 5,
            y: 3
          }, {
            x: 39,
            y: 19
          }, {
            x: 49,
            y: 79
          }, {
            x: 83,
            y: -9
          }, {
            x: 93,
            y: 12
          }],
          pointBackgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'),
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'),
          borderWidth: 1
        }, {
          label: 'Dataset Two',
          data: [{
            x: 53,
            y: 12
          }, {
            x: -78,
            y: 42
          }, {
            x: -65,
            y: -39
          }, {
            x: -57,
            y: -20
          }, {
            x: 57,
            y: 28
          }, {
            x: -35,
            y: 75
          }, {
            x: -29,
            y: -43
          }, {
            x: 15,
            y: 31
          }, {
            x: 97,
            y: 19
          }, {
            x: 49,
            y: 69
          }, {
            x: 33,
            y: -57
          }],
          pointBackgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'),
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'),
          borderWidth: 1,
          borderRadius: '50%'
        }]
      },
      options: {
        plugins: {
          tooltip: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)()
        },
        scales: {
          x: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          },
          y: {
            grid: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.1)
            }
          }
        },
        animation: {
          duration: 2000
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(scatter, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chartScatter);

/***/ }),

/***/ "./resources/js/charts/chartjs/chartjs-utils.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/chartjs/chartjs-utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                            ChartJs Initialization                          */
/* -------------------------------------------------------------------------- */

var chartJsInit = function chartJsInit(chartEl, config) {
  if (!chartEl) return;
  var ctx = chartEl.getContext('2d');
  var chart = new window.Chart(ctx, config());
  var themeController = document.body;
  themeController.addEventListener('clickControl', function (_ref) {
    var control = _ref.detail.control;
    if (control === 'theme') {
      chart.destroy();
      chart = new window.Chart(ctx, config());
    }
    return null;
  });
};
var chartJsDefaultTooltip = function chartJsDefaultTooltip() {
  return {
    backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
    borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
    borderWidth: 1,
    titleColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'],
    callbacks: {
      labelTextColor: function labelTextColor() {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'];
      }
    }
  };
};
var getBubbleDataset = function getBubbleDataset(count, rmin, rmax, min, max) {
  var arr = Array.from(Array(count).keys());
  return arr.map(function () {
    return {
      x: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(min, max),
      y: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(min, max),
      r: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(rmin, rmax)
    };
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  chartJsDefaultTooltip: chartJsDefaultTooltip,
  chartJsInit: chartJsInit,
  getBubbleDataset: getBubbleDataset
});

/***/ }),

/***/ "./resources/js/charts/chartjs/product-share-doughnut.js":
/*!***************************************************************!*\
  !*** ./resources/js/charts/chartjs/product-share-doughnut.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _chartjs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs-utils */ "./resources/js/charts/chartjs/chartjs-utils.js");
/* eslint-disable */



/* -------------------------------------------------------------------------- */
/*                            Chart Scatter                                   */
/* -------------------------------------------------------------------------- */
var productShareDoughnutInit = function productShareDoughnutInit() {
  var marketShareDoughnutElement = document.getElementById('marketShareDoughnut');
  var getOptions = function getOptions() {
    return {
      type: 'doughnut',
      data: {
        labels: ['Flacon', 'Sparrow'],
        datasets: [{
          data: [50, 88],
          backgroundColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300')],
          borderColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300')]
        }]
      },
      options: {
        tooltips: (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsDefaultTooltip)(),
        rotation: -90,
        circumference: '180',
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    };
  };
  (0,_chartjs_utils__WEBPACK_IMPORTED_MODULE_1__.chartJsInit)(marketShareDoughnutElement, getOptions);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productShareDoughnutInit);

/***/ }),

/***/ "./resources/js/charts/echarts/active-users-report.js":
/*!************************************************************!*\
  !*** ./resources/js/charts/echarts/active-users-report.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Active Users                           */
/* -------------------------------------------------------------------------- */

var activeUsersChartReportInit = function activeUsersChartReportInit() {
  var $echartsActiveUsersChart = document.querySelector('.echart-active-users-report');
  if ($echartsActiveUsersChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsActiveUsersChart, 'options');
    var chart = window.echarts.init($echartsActiveUsersChart);
    var tooltipFormatter = function tooltipFormatter(params) {
      return "\n      <div>\n        <p class='mb-2 text-600'>".concat(window.dayjs(params[0].axisValue).format('MMM DD, YYYY'), "</p>\n        <div class='ms-1'>\n          <h6 class=\"fs--1 text-700\"><span class=\"fas fa-circle text-primary me-2\"></span>").concat(params[0].value, "</h6>\n          <h6 class=\"fs--1 text-700\"><span class=\"fas fa-circle text-success me-2\"></span>").concat(params[1].value, "</h6>\n          <h6 class=\"fs--1 text-700\"><span class=\"fas fa-circle text-info me-2\"></span>").concat(params[2].value, "</h6>\n        </div>\n      </div>\n      ");
    };
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info')],
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(30).map(function (date) {
            return window.dayjs(date).format('DD MMM, YYYY');
          }),
          boundaryGap: false,
          silent: true,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
            }
          },
          axisTick: {
            show: true,
            length: 20,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            },
            interval: 5
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            align: 'left',
            fontSize: 11,
            padding: [0, 0, 0, 5],
            interval: 5
          }
        },
        yAxis: {
          type: 'value',
          position: 'right',
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return "".concat(Math.round(value / 1000 * 10) / 10, "k");
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          data: [4164, 4652, 4817, 4841, 4920, 5439, 5486, 5498, 5512, 5538, 5841, 5877, 6086, 6146, 6199, 6431, 6704, 7939, 8127, 8296, 8322, 8389, 8411, 8502, 8868, 8977, 9273, 9325, 9345, 9430],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
          },
          symbolSize: 2
        }, {
          type: 'line',
          data: [2164, 2292, 2386, 2430, 2528, 3045, 3255, 3295, 3481, 3604, 3688, 3840, 3932, 3949, 4003, 4298, 4424, 4869, 4922, 4973, 5155, 5267, 5566, 5689, 5692, 5758, 5773, 5799, 5960, 6000],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().success,
            borderWidth: 2
          },
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('success')
          },
          symbolSize: 2
        }, {
          type: 'line',
          data: [1069, 1089, 1125, 1141, 1162, 1179, 1185, 1216, 1274, 1322, 1346, 1395, 1439, 1564, 1581, 1590, 1656, 1815, 1868, 2010, 2133, 2179, 2264, 2265, 2278, 2343, 2354, 2456, 2472, 2480],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info,
            borderWidth: 2
          },
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info')
          },
          symbolSize: 2
        }],
        grid: {
          right: '30px',
          left: '5px',
          bottom: '20px',
          top: '20px'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activeUsersChartReportInit);

/***/ }),

/***/ "./resources/js/charts/echarts/audience.js":
/*!*************************************************!*\
  !*** ./resources/js/charts/echarts/audience.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Audience Chart                              */
/* -------------------------------------------------------------------------- */

var audienceChartInit = function audienceChartInit() {
  var data = {
    dates: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(7),
    dataset: {
      users: [[504, 333, 400, 606, 451, 685, 404], [237, 229, 707, 575, 420, 536, 258]],
      sessions: [[322, 694, 235, 537, 791, 292, 806], [584, 661, 214, 286, 526, 707, 627]],
      rate: [[789, 749, 412, 697, 633, 254, 472], [276, 739, 525, 394, 643, 653, 719]],
      duration: [[625, 269, 479, 654, 549, 305, 671], [499, 670, 550, 222, 696, 695, 469]]
    }
  };
  var tooltipFormatter = function tooltipFormatter(params) {
    var percentage = (params[0].value - params[1].value) / params[1].value * 100;
    var perTemp = "\n      <div class=\"d-flex align-items-center ms-2\">\n        <span class=\"fas fa-caret-".concat(percentage < 0 ? 'down' : 'up', " text-").concat(percentage < 0 ? 'danger' : 'success', "\"></span>\n        <h6 class=\"fs--2 mb-0 ms-1 fw-semi-bold\">").concat(Math.abs(percentage).toFixed(2), " %</h6>\n      </div>\n    ");
    var currentDate = new Date(params[0].axisValue);
    var prevDate = new Date(new Date().setDate(currentDate.getDate() - 7));
    return "<div>\n          <p class='mb-0 fs--2 text-600'>".concat(window.dayjs(params[0].axisValue).format('MMM DD'), " vs ").concat(window.dayjs(prevDate).format('MMM DD'), "</p>\n          <div class=\"d-flex align-items-center\">\n            <p class='mb-0 text-600 fs--1'>\n              Users: <span class='text-800 fw-semi-bold fs--1'>").concat(params[0].data, "</span>\n            </p>\n            ").concat(perTemp, "\n          </div>\n        </div>");
  };
  var getDefaultOptions = function getDefaultOptions(data1, data2) {
    return function () {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().white,
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: data.dates,
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            align: 'left',
            fontSize: 11,
            padding: [0, 0, 0, 5],
            showMaxLabel: false
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisTick: {
            show: true,
            length: 20,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          boundaryGap: false
        },
        yAxis: {
          position: 'right',
          axisPointer: {
            type: 'none'
          },
          axisTick: 'none',
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600']
          }
        },
        series: [{
          type: 'line',
          data: data1,
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.2)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0)
              }]
            }
          }
        }, {
          type: 'line',
          data: data2,
          symbol: 'none',
          lineStyle: {
            type: 'dashed',
            width: 1,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info')
          }
        }],
        grid: {
          right: '40px',
          left: '5px',
          bottom: '10%',
          top: '3%'
        }
      };
    };
  };
  var initChart = function initChart(el, options) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'options');
    var chart = window.echarts.init(el);
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, options);
  };
  var tab = document.querySelector('#audience-chart-tab');
  if (tab) {
    initChart(document.querySelector('.echart-audience'), getDefaultOptions(data.dataset.users[0], data.dataset.users[1]));
    var triggerTabList = Array.from(tab.querySelectorAll('[data-bs-toggle="tab"]'));
    triggerTabList.forEach(function (triggerEl) {
      triggerEl.addEventListener('shown.bs.tab', function () {
        var key = triggerEl.href.split('#').pop();
        var $echartAudience = document.getElementById(key).querySelector('.echart-audience');
        initChart($echartAudience, getDefaultOptions(data.dataset[key][0], data.dataset[key][1]));
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audienceChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/bandwidth-saved.js":
/*!********************************************************!*\
  !*** ./resources/js/charts/echarts/bandwidth-saved.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                            Bandwidth Saved                                 */
/* -------------------------------------------------------------------------- */

var bandwidthSavedInit = function bandwidthSavedInit() {
  var $echartsBandwidthSaved = document.querySelector('.echart-bandwidth-saved');
  if ($echartsBandwidthSaved) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsBandwidthSaved, 'options');
    var chart = window.echarts.init($echartsBandwidthSaved);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          radius: '90%',
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: '#1970e2'
                }, {
                  offset: 1,
                  color: '#4695ff'
                }]
              }
            }
          },
          axisLine: {
            lineStyle: {
              width: 8,
              color: [[1, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('200')]]
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          data: [{
            value: 93,
            detail: {
              offsetCenter: ['7%', '4%']
            }
          }],
          detail: {
            width: 50,
            height: 14,
            fontSize: 28,
            fontWeight: 500,
            fontFamily: 'poppins',
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('500'),
            formatter: '{value}%',
            valueAnimation: true
          },
          animationDuration: 3000
        }]
      };
    };
    var initChart = function initChart() {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isScrolledIntoView($echartsBandwidthSaved)) {
        (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
        window.removeEventListener('scroll', initChart);
      }
    };
    window.addEventListener('scroll', initChart);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bandwidthSavedInit);

/***/ }),

/***/ "./resources/js/charts/echarts/basic-echarts.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/echarts/basic-echarts.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                     Echart Bar Member info                                 */
/* -------------------------------------------------------------------------- */

var basicEchartsInit = function basicEchartsInit() {
  var $echartBasicCharts = document.querySelectorAll('[data-echarts]');
  $echartBasicCharts.forEach(function ($echartBasicChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartBasicChart, 'echarts');
    var chart = window.echarts.init($echartBasicChart);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false,
          type: 'value',
          boundaryGap: false
        },
        series: [{
          type: 'bar',
          symbol: 'none',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.25)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0)
              }]
            }
          }
        }],
        grid: {
          right: '0',
          left: '0',
          bottom: '0',
          top: '0'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicEchartsInit);

/***/ }),

/***/ "./resources/js/charts/echarts/bounce-rate.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/echarts/bounce-rate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Bounce Rate                            */
/* -------------------------------------------------------------------------- */

var bounceRateChartInit = function bounceRateChartInit() {
  var $echartsBounceRateChart = document.querySelector('.echart-bounce-rate');
  var tooltipFormatter = function tooltipFormatter(params) {
    return "<div>\n          <p class='mb-0 text-600'>".concat(window.dayjs(params[0].axisValue).format('DD, MMMM'), "</p>\n          <div class=\"d-flex align-items-center\">\n            <p class=\"mb-0 text-600\">\n              Rate : <span class='text-800'>").concat(params[0].value, "%</span>\n            </p>\n          </div>\n        </div>");
  };
  var dataset = {
    week: [41, 45, 37, 44, 35, 39, 43],
    month: [40, 37, 42, 44, 36, 39, 37, 43, 38, 35, 43, 39, 42, 36, 37, 36, 42, 44, 34, 41, 37, 41, 40, 40, 43, 34, 41, 35, 44, 41, 40]
  };
  if ($echartsBounceRateChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsBounceRateChart, 'options');
    var chart = window.echarts.init($echartsBounceRateChart);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().white,
        title: {
          text: 'Bounce Rate',
          padding: [5, 0, 0, 0],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['900'],
            fontSize: 13,
            fontWeight: 600
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(30).map(function (date) {
            return window.dayjs(date).format('DD MMM, YYYY');
          }),
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            fontSize: 11
          }
        },
        yAxis: {
          type: 'value',
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return "".concat(value, "%");
            },
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          data: [40, 37, 42, 44, 36, 39, 37, 43, 38, 35, 43, 39, 42, 36, 37, 36, 42, 44, 34, 41, 37, 41, 40, 40, 43, 34, 41, 35, 44, 41, 40],
          showSymbol: false,
          symbol: 'circle',
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
          },
          symbolSize: 2
        }],
        grid: {
          right: '10px',
          left: '40px',
          bottom: '10%',
          top: '13%'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    var selectMenu = document.querySelector("[data-target='.echart-bounce-rate']");
    if (selectMenu) {
      selectMenu.addEventListener('change', function (e) {
        var value = e.currentTarget.value;
        chart.setOption({
          xAxis: {
            data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(value).map(function (date) {
              return window.dayjs(date).format('DD MMM, YYYY');
            })
          },
          series: [{
            data: dataset[value]
          }]
        });
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bounceRateChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/candle-chart.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/echarts/candle-chart.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Candle Chart                           */
/* -------------------------------------------------------------------------- */

var candleChartInit = function candleChartInit() {
  var ECHART_CANDLE_CHART = ".echart-candle-chart";
  var ECHART_ZOOM_IN = "[data-zoom='in']";
  var ECHART_ZOOM_OUT = "[data-zoom='out']";
  var $echartsCandleChart = document.querySelector(ECHART_CANDLE_CHART);
  if ($echartsCandleChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsCandleChart, "options");
    var chart = window.echarts.init($echartsCandleChart);
    var $echartsZoomIn = document.getElementById($echartsCandleChart.dataset.actionTarget).querySelector(ECHART_ZOOM_IN);
    var $echartsZoomOut = document.getElementById($echartsCandleChart.dataset.actionTarget).querySelector(ECHART_ZOOM_OUT);
    var warning = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors()["warning"];
    var primary = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors()["primary"];
    var splitData = function splitData(rawData) {
      var categoryData = [];
      var values = [];
      rawData.forEach(function (item) {
        categoryData.push(item.splice(0, 1)[0]);
        values.push(item);
      });
      return {
        categoryData: categoryData,
        values: values
      };
    };
    var data = splitData([["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94], ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38], ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92], ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8], ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76], ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82], ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15], ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38], ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42], ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73], ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89], ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03], ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8], ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07], ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94], ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82], ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88], ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78], ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71], ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63], ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16], ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65], ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54], ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14], ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44], ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02], ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67], ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96], ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29], ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33], ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22], ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08], ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05], ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31], ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86], ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81], ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332], ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89], ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99], ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48], ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55], ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87], ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95], ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42], ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34], ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59], ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73], ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04], ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48], ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26]]);
    var zoomStart = 0;
    var zoomEnd = 70;
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: "cross",
          // },
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["100"],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: "category",
          data: data.categoryData,
          scale: true,
          splitLine: {
            show: false
          },
          splitNumber: 10,
          min: "dataMin",
          max: "dataMax",
          boundaryGap: true,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["600"],
            formatter: function formatter(value) {
              return new Date(value).toLocaleString("en-US", {
                month: "short",
                day: "numeric"
              });
            },
            margin: 15,
            fontWeight: 500
          }
        },
        yAxis: {
          scale: true,
          position: "right",
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["200"],
              type: "dashed"
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["600"],
            margin: 15,
            fontWeight: 500
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        dataZoom: [{
          type: "inside",
          start: zoomStart,
          end: zoomEnd
        }],
        series: [{
          name: "candlestick",
          type: "candlestick",
          data: data.values,
          itemStyle: {
            color: warning,
            color0: primary,
            borderColor: warning,
            borderColor0: primary
          }
        }],
        grid: {
          right: "70px",
          left: "20px",
          bottom: "15%",
          top: "20px"
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    var dispatchZoomAction = function dispatchZoomAction() {
      chart.dispatchAction({
        type: "dataZoom",
        start: zoomStart,
        end: zoomEnd
      });
    };
    $echartsZoomIn.addEventListener("click", function () {
      if (zoomEnd > 10) {
        zoomEnd -= 10;
      }
      if (zoomEnd <= 10) {
        $echartsZoomIn.disabled = true;
      }
      if (zoomEnd > 0) {
        $echartsZoomOut.disabled = false;
        dispatchZoomAction();
      }
    });
    $echartsZoomOut.addEventListener("click", function () {
      if (zoomEnd < 100) {
        zoomEnd += 10;
      }
      if (zoomEnd >= 100) {
        $echartsZoomOut.disabled = true;
      }
      if (zoomEnd > 0) {
        $echartsZoomIn.disabled = false;
        dispatchZoomAction();
      }
    });
    chart.on("dataZoom", function (params) {
      if (params.batch) {
        zoomStart = params.batch[0].start;
        zoomEnd = params.batch[0].end;
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (candleChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/closed-vs-goal.js":
/*!*******************************************************!*\
  !*** ./resources/js/charts/echarts/closed-vs-goal.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

var closedVsGoalInit = function closedVsGoalInit() {
  var ECHART_LINE_TOTAL_SALES = '.echart-closed-vs-goal';
  var $echartsLineTotalSales = document.querySelector(ECHART_LINE_TOTAL_SALES);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if ($echartsLineTotalSales) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsLineTotalSales, 'options');
    var chart = window.echarts.init($echartsLineTotalSales);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning],
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          formatter: _echarts_utils__WEBPACK_IMPORTED_MODULE_1__.tooltipFormatter,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        legend: {
          left: 'left',
          data: ['Closed Amount', 'Revenue Date'],
          itemWidth: 10,
          itemHeight: 10,
          borderRadius: 0,
          icon: 'circle',
          inactiveColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700']
          },
          itemGap: 20
        },
        xAxis: {
          type: 'category',
          name: 'Closed Date',
          nameGap: 50,
          nameLocation: 'center',
          offset: 0,
          nameTextStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700']
          },
          data: ['2019-06-15', '2019-06-22', '2019-06-29', '2019-07-06', '2019-07-13', '2019-07-20', '2019-07-27', '2019-07-12', '2019-07-03'],
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor('#000', 0.01),
              type: 'dashed'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            formatter: function formatter(value) {
              var date = new Date(value);
              return "".concat(date.getDate(), " ").concat(months[date.getMonth()], " , 21");
            },
            margin: 20
          }
        },
        yAxis: {
          type: 'value',
          name: 'Closed Amount',
          nameGap: 85,
          nameLocation: 'middle',
          nameTextStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700']
          },
          splitNumber: 3,
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            formatter: function formatter(value) {
              return "$".concat(value);
            },
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          name: 'Closed Amount',
          data: [0, 5000, 18000, 40000, 58000, 65000, 90000, 110000, 140000],
          symbolSize: 5,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true,
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'))
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.6),
            borderWidth: 2
          }
        }, {
          type: 'line',
          name: 'Revenue Date',
          data: [0, 10000, 24000, 35000, 45000, 53000, 57000, 68000, 79000],
          symbolSize: 5,
          symbol: 'circle',
          smooth: false,
          hoverAnimation: true,
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'))
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.6),
            borderWidth: 2
          }
        }],
        grid: {
          right: '25px',
          left: '100px',
          bottom: '60px',
          top: '35px'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closedVsGoalInit);

/***/ }),

/***/ "./resources/js/charts/echarts/crm-revenue.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/echarts/crm-revenue.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Audience Chart                              */
/* -------------------------------------------------------------------------- */

var revenueChartInit = function revenueChartInit() {
  var data = {
    dates: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDates(new Date('5-6-2019'), new Date('5-6-2021'), 1000 * 60 * 60 * 24 * 30),
    dataset: {
      revenue: [[645, 500, 550, 550, 473, 405, 286, 601, 743, 450, 604, 815, 855, 722, 700, 896, 866, 952, 719, 558, 737, 885, 972, 650, 600], [440, 250, 270, 400, 175, 180, 200, 400, 600, 380, 340, 550, 650, 450, 400, 688, 650, 721, 500, 300, 445, 680, 568, 400, 371]],
      users: [[545, 500, 650, 727, 773, 705, 686, 501, 643, 580, 604, 615, 755, 722, 727, 816, 836, 952, 719, 758, 937, 785, 872, 850, 800], [340, 360, 230, 250, 410, 430, 450, 200, 220, 540, 500, 250, 355, 320, 500, 630, 680, 500, 520, 550, 750, 720, 700, 780, 750]],
      deals: [[545, 400, 450, 627, 473, 450, 460, 780, 770, 800, 504, 550, 500, 530, 727, 716, 736, 820, 719, 758, 737, 885, 872, 850, 800], [245, 300, 450, 427, 273, 250, 260, 580, 570, 500, 402, 450, 400, 330, 527, 516, 536, 620, 519, 558, 537, 483, 472, 250, 300]],
      profit: [[545, 400, 450, 627, 673, 605, 686, 501, 843, 518, 504, 715, 955, 622, 627, 716, 736, 952, 619, 558, 937, 785, 872, 550, 400], [340, 360, 330, 300, 410, 380, 450, 400, 420, 240, 200, 250, 355, 320, 500, 630, 680, 400, 420, 450, 650, 620, 700, 450, 340]]
    }
  };
  var tooltipFormatter = function tooltipFormatter(params) {
    return "<div class=\"card\">\n                <div class=\"card-header bg-light py-2\">\n                  <h6 class=\"text-600 mb-0\">".concat(params[0].axisValue, "</h6>\n                </div>\n              <div class=\"card-body py-2\">\n                <h6 class=\"text-600 fw-normal\">\n                  <span class=\"fas fa-circle text-primary me-2\"></span>Revenue: \n                  <span class=\"fw-medium\">$").concat(params[0].data, "</span></h6>\n                <h6 class=\"text-600 mb-0 fw-normal\"> \n                  <span class=\"fas fa-circle text-warning me-2\"></span>Revenue Goal: \n                  <span class=\"fw-medium\">$").concat(params[1].data, "</span></h6>\n              </div>\n            </div>");
  };
  var getDefaultOptions = function getDefaultOptions(data1, data2) {
    return function () {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().white,
        tooltip: {
          trigger: 'axis',
          padding: 0,
          backgroundColor: 'transparent',
          borderWidth: 0,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          axisPointer: {
            type: 'none'
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(25).map(function (date) {
            return window.dayjs(date).format('DD MMM, YYYY');
          }),
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('MMM DD');
            },
            align: 'left',
            fontSize: 11,
            padding: [0, 0, 0, 5],
            showMaxLabel: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          boundaryGap: true
        },
        yAxis: {
          position: 'right',
          axisPointer: {
            type: 'none'
          },
          axisTick: 'none',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          name: 'Revenue',
          data: data1,
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
          },
          itemStyle: {
            barBorderRadius: [4, 4, 0, 0],
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
            borderWidth: 1
          },
          emphasis: {
            itemStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
            }
          }
        }, {
          type: 'line',
          name: 'Revenue Goal',
          data: data2,
          symbol: 'circle',
          symbolSize: 6,
          animation: false,
          itemStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning')
          },
          lineStyle: {
            type: 'dashed',
            width: 2,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning')
          }
        }],
        grid: {
          right: 5,
          left: 5,
          bottom: '8%',
          top: '5%'
        }
      };
    };
  };
  var initChart = function initChart(el, options) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'options');
    var chart = window.echarts.init(el);
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, options);
  };
  var chartKeys = ['revenue', 'users', 'deals', 'profit'];
  chartKeys.forEach(function (key) {
    var el = document.querySelector(".echart-crm-".concat(key));
    el && initChart(el, getDefaultOptions(data.dataset[key][0], data.dataset[key][1]));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (revenueChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/deal-storage-funnel.js":
/*!************************************************************!*\
  !*** ./resources/js/charts/echarts/deal-storage-funnel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Bounce Rate                            */
/* -------------------------------------------------------------------------- */

var dealStorageFunnelInit = function dealStorageFunnelInit() {
  var $echartDealStorageFunnel = document.querySelector('.echart-deal-storage-funnel');
  if ($echartDealStorageFunnel) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartDealStorageFunnel, 'options');
    var data = userOptions.data,
      dataAxis1 = userOptions.dataAxis1,
      dataAxis2 = userOptions.dataAxis2;
    var chart = window.echarts.init($echartDealStorageFunnel);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        yAxis: [{
          data: dataAxis1,
          axisLabel: {
            inside: true,
            textStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700'],
              fontWeight: 500,
              fontSize: 11,
              fontFamily: 'poppins'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        }, {
          data: dataAxis2,
          axisLabel: {
            inside: false,
            textStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
              fontWeight: 500,
              fontSize: 11,
              fontFamily: 'poppins'
            },
            borderRadius: 5,
            backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getSoftColors().primary,
            padding: [6, 16, 6, 16],
            width: 115
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        }],
        xAxis: {
          type: 'value',
          min: 0,
          max: 35,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          inverse: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          showBackground: true,
          barWidth: 25,
          label: {
            show: true,
            formatter: '{c} ',
            position: 'insideLeft'
          },
          backgroundStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200'],
            borderRadius: 5
          },
          itemStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderRadius: 5
          },
          data: data
        }],
        grid: {
          right: '65px',
          left: '0',
          bottom: '0',
          top: '0'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dealStorageFunnelInit);

/***/ }),

/***/ "./resources/js/charts/echarts/echarts-utils.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/echarts/echarts-utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/* eslint-disable */
var getPosition = function getPosition(pos, params, dom, rect, size) {
  return {
    top: pos[1] - size.contentSize[1] - 10,
    left: pos[0] - size.contentSize[0] / 2
  };
};
var echartSetOption = function echartSetOption(chart, userOptions, getDefaultOptions) {
  var themeController = document.body;
  // Merge user options with lodash
  chart.setOption(window._.merge(getDefaultOptions(), userOptions));
  themeController.addEventListener('clickControl', function (_ref) {
    var control = _ref.detail.control;
    if (control === 'theme') {
      chart.setOption(window._.merge(getDefaultOptions(), userOptions));
    }
  });
};
var tooltipFormatter = function tooltipFormatter(params) {
  var tooltipItem = "";
  params.forEach(function (el) {
    tooltipItem = tooltipItem + "<div class='ms-1'> \n        <h6 class=\"text-700\"><span class=\"fas fa-circle me-1 fs--2\" style=\"color:".concat(el.borderColor ? el.borderColor : el.color, "\"></span>\n          ").concat(el.seriesName, " : ").concat(_typeof(el.value) === 'object' ? el.value[1] : el.value, "\n        </h6>\n      </div>");
  });
  return "<div>\n            <p class='mb-2 text-600'>\n              ".concat(window.dayjs(params[0].axisValue).isValid() ? window.dayjs(params[0].axisValue).format('MMMM DD') : params[0].axisValue, "\n            </p>\n            ").concat(tooltipItem, "\n          </div>");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getPosition: getPosition,
  echartSetOption: echartSetOption,
  tooltipFormatter: tooltipFormatter
});

/***/ }),

/***/ "./resources/js/charts/echarts/gross-revenue.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/echarts/gross-revenue.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Gross Revenue                          */
/* -------------------------------------------------------------------------- */

var grossRevenueChartInit = function grossRevenueChartInit() {
  var ECHART_GROSS_REVENUE = '.echart-gross-revenue-chart';
  var $echartsGrossRevenue = document.querySelector(ECHART_GROSS_REVENUE);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if ($echartsGrossRevenue) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsGrossRevenue, 'options');
    var chart = window.echarts.init($echartsGrossRevenue);
    var SELECT_MONTH = "#".concat(userOptions.monthSelect);
    var LEGEND_MONTH_TARGET = userOptions.target;
    var LEGEND_CURRENT_MONTH = "#".concat(userOptions.optionOne);
    var LEGEND_PREV_MONTH = "#".concat(userOptions.optionTwo);
    var $legendCurrentMonth = document.getElementById(LEGEND_MONTH_TARGET).querySelector(LEGEND_CURRENT_MONTH);
    var $legendPrevMonth = document.getElementById(LEGEND_MONTH_TARGET).querySelector(LEGEND_PREV_MONTH);
    var dates = function dates(month) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDates(window.dayjs().month(month).date(1), window.dayjs().month(Number(month) + 1).date(0), 1000 * 60 * 60 * 24 * 3);
    };
    var monthsnumber = [[20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70], [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50], [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60], [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80], [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50], [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70], [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50], [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110], [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70], [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70], [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]];
    var tooltipFormatter = function tooltipFormatter(params) {
      var currentDate = window.dayjs(params[0].axisValue);
      var tooltipItem = "";
      params.forEach(function (el) {
        tooltipItem = tooltipItem + "<h6 class=\"fs--1 text-700\"><span class=\"fas fa-circle me-2\" style=\"color:".concat(el.borderColor, "\"></span>\n        ").concat(currentDate.format('MMM DD'), " : ").concat(el.value, "\n      </h6>");
      });
      return "<div class='ms-1'>\n                ".concat(tooltipItem, "\n              </div>");
    };
    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: {
          text: 'Sales over time',
          textStyle: {
            fontWeight: 500,
            fontSize: 13,
            fontFamily: 'poppins'
          }
        },
        legend: {
          show: false,
          data: ['currentMonth', 'prevMonth']
        },
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().white,
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: 'category',
          data: dates(0),
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            formatter: function formatter(value) {
              var date = new Date(value);
              return "".concat(months[date.getMonth()].substring(0, 3), " ").concat(date.getDate());
            },
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'prevMonth',
          type: 'line',
          data: monthsnumber[0],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
            borderWidth: 2
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        }, {
          name: 'currentMonth',
          type: 'line',
          data: monthsnumber[1],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '8px',
          left: '40px',
          bottom: '15%',
          top: '20%'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    var monthSelect = document.querySelector(SELECT_MONTH);
    var month = 0;
    var currentMonthData = monthsnumber[Number(month) + 1];
    var prevMonthData = monthsnumber[monthSelect.selectedIndex];
    monthSelect.addEventListener('change', function (e) {
      month = e.currentTarget.value;
      currentMonthData = monthsnumber[Number(month) + 1];
      prevMonthData = monthsnumber[month];
      $legendCurrentMonth.querySelector('.text').innerText = months[month];
      $legendPrevMonth.querySelector('.text').innerText = months[month - 1] ? months[month - 1] : 'Dec';
      chart.setOption({
        xAxis: {
          data: dates(month)
        },
        series: [{
          data: currentMonthData
        }, {
          data: prevMonthData
        }]
      });
    });
    $legendCurrentMonth.addEventListener('click', function () {
      $legendCurrentMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'currentMonth'
      });
    });
    $legendPrevMonth.addEventListener('click', function () {
      $legendPrevMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'prevMonth'
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grossRevenueChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/lead-conversion.js":
/*!********************************************************!*\
  !*** ./resources/js/charts/echarts/lead-conversion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Traffic Channels                           */
/* -------------------------------------------------------------------------- */

var leadConversionInit = function leadConversionInit() {
  var $leadConversion = document.querySelector('.echart-lead-conversion');
  if ($leadConversion) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($leadConversion, 'options');
    var chart = window.echarts.init($leadConversion);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.7), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info, 0.6), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().secondary, 0.2), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning, 0.6)],
        legend: {
          data: ['Campaigns', 'Lead', 'Opportunity', 'Deal'],
          left: '0%',
          icon: 'circle',
          inactiveColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700']
          },
          itemGap: 10
        },
        yAxis: {
          type: 'category',
          data: ['kerry Ingram', 'Bradie Pitter', 'Harrington', 'Ashley Shaw', 'Jenny Horas', 'Chris Pratt'],
          axisLine: {
            show: false
          },
          boundaryGap: false,
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600']
          }
        },
        xAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          axisPointer: {
            type: 'none'
          },
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: _echarts_utils__WEBPACK_IMPORTED_MODULE_1__.tooltipFormatter
        },
        series: [{
          name: 'Campaigns',
          type: 'bar',
          stack: 'total',
          data: [1405, 1300, 1620, 1430, 1500, 1520],
          barWidth: '20%'
        }, {
          name: 'Lead',
          type: 'bar',
          stack: 'total',
          data: [320, 302, 301, 334, 340, 390],
          barWidth: '20%'
        }, {
          name: 'Opportunity',
          type: 'bar',
          stack: 'total',
          data: [220, 182, 351, 234, 290, 300],
          barWidth: '20%'
        }, {
          name: 'Deal',
          type: 'bar',
          stack: 'total',
          data: [120, 182, 191, 134, 190, 170],
          barWidth: '20%'
        }],
        grid: {
          right: 5,
          left: 5,
          bottom: 8,
          top: 60,
          containLabel: true
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leadConversionInit);

/***/ }),

/***/ "./resources/js/charts/echarts/line-payment.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/echarts/line-payment.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Line Payment                           */
/* -------------------------------------------------------------------------- */

var linePaymentChartInit = function linePaymentChartInit() {
  var $echartsLinePaymentChart = document.querySelector('.echart-line-payment');
  var dataset = {
    all: [4, 1, 6, 2, 7, 12, 4, 6, 5, 4, 5, 10],
    successful: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
    failed: [1, 0, 2, 1, 2, 1, 1, 0, 0, 1, 0, 2]
  };
  var labels = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
  if ($echartsLinePaymentChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsLinePaymentChart, 'options');
    var chart = window.echarts.init($echartsLinePaymentChart);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "".concat(params[0].axisValue, " - ").concat(params[0].value, " USD");
          },
          textStyle: {
            fontWeight: 500,
            fontSize: 12,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          }
        },
        xAxis: {
          type: 'category',
          data: labels,
          splitLine: {
            show: true,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor('#fff', 0.1)
            },
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor('#fff', 0.1)
            }
          },
          axisTick: {
            show: true,
            length: 10,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor('#fff', 0.1)
            }
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            fontWeight: 600,
            formatter: function formatter(value) {
              return value.substring(0, value.length - 3);
            },
            fontSize: 12,
            interval: window.innerWidth < 768 ? 'auto' : 0,
            margin: 15
          },
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          axisPointer: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          smooth: true,
          data: dataset.successful.map(function (d) {
            return (d * 3.14).toFixed(2);
          }),
          symbol: 'emptyCircle',
          itemStyle: {
            color: localStorage.getItem('theme') === 'light' ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['white'] : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          lineStyle: {
            color: localStorage.getItem('theme') === 'light' ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['white'], 0.8) : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: localStorage.getItem('theme') === 'light' ? 'rgba(255, 255, 255, 0.5)' : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.5)
              }, {
                offset: 1,
                color: localStorage.getItem('theme') === 'light' ? 'rgba(255, 255, 255, 0)' : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0)
              }]
            }
          },
          emphasis: {
            lineStyle: {
              width: 2
            }
          }
        }],
        grid: {
          right: 15,
          left: 15,
          bottom: '15%',
          top: 0
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].resize(function () {
      if (window.innerWidth < 768) {
        chart.setOption({
          xAxis: {
            axisLabel: {
              interval: 'auto'
            }
          }
        });
      }
    });
    var selectMenu = document.querySelector('#dashboard-chart-select');
    if (selectMenu) {
      selectMenu.addEventListener('change', function (e) {
        var value = e.currentTarget.value;
        chart.setOption({
          series: [{
            data: dataset[value].map(function (d) {
              return (d * 3.14).toFixed(2);
            })
          }]
        });
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linePaymentChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/location-by-session-crm.js":
/*!****************************************************************!*\
  !*** ./resources/js/charts/echarts/location-by-session-crm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Session By Country Map                      */
/* -------------------------------------------------------------------------- */

var locationBySessionInit = function locationBySessionInit() {
  var $locationBySessionMap = document.querySelector('.echart-location-by-session-map');
  var data = [{
    name: 'Afghanistan',
    value: 28397.812
  }, {
    name: 'Angola',
    value: 19549.124
  }, {
    name: 'Albania',
    value: 3150.143
  }, {
    name: 'United Arab Emirates',
    value: 8441.537
  }, {
    name: 'Argentina',
    value: 40374.224
  }, {
    name: 'Armenia',
    value: 2963.496
  }, {
    name: 'French Southern and Antarctic Lands',
    value: 268.065
  }, {
    name: 'Australia',
    value: 22404.488
  }, {
    name: 'Austria',
    value: 8401.924
  }, {
    name: 'Azerbaijan',
    value: 9094.718
  }, {
    name: 'Burundi',
    value: 9232.753
  }, {
    name: 'Belgium',
    value: 10941.288
  }, {
    name: 'Benin',
    value: 9509.798
  }, {
    name: 'Burkina Faso',
    value: 15540.284
  }, {
    name: 'Bangladesh',
    value: 151125.475
  }, {
    name: 'Bulgaria',
    value: 7389.175
  }, {
    name: 'The Bahamas',
    value: 66402.316
  }, {
    name: 'Bosnia and Herzegovina',
    value: 3845.929
  }, {
    name: 'Belarus',
    value: 9491.07
  }, {
    name: 'Belize',
    value: 308.595
  }, {
    name: 'Bermuda',
    value: 64.951
  }, {
    name: 'Bolivia',
    value: 716.939
  }, {
    name: 'Brazil',
    value: 195210.154
  }, {
    name: 'Brunei',
    value: 27.223
  }, {
    name: 'Bhutan',
    value: 716.939
  }, {
    name: 'Botswana',
    value: 1969.341
  }, {
    name: 'Central African Rep.',
    value: 4349.921
  }, {
    name: 'Canada',
    value: 34126.24
  }, {
    name: 'Switzerland',
    value: 7830.534
  }, {
    name: 'Chile',
    value: 17150.76
  }, {
    name: 'China',
    value: 1359821.465
  }, {
    name: "Côte d'Ivoire",
    value: 60508.978
  }, {
    name: 'Cameroon',
    value: 20624.343
  }, {
    name: 'Dem. Rep. Congo',
    value: 62191.161
  }, {
    name: 'Congo',
    value: 3573.024
  }, {
    name: 'Colombia',
    value: 46444.798
  }, {
    name: 'Costa Rica',
    value: 4669.685
  }, {
    name: 'Cuba',
    value: 11281.768
  }, {
    name: 'Northern Cyprus',
    value: 1.468
  }, {
    name: 'Cyprus',
    value: 1103.685
  }, {
    name: 'Czech Republic',
    value: 10553.701
  }, {
    name: 'Germany',
    value: 83017.404
  }, {
    name: 'Djibouti',
    value: 834.036
  }, {
    name: 'Denmark',
    value: 5550.959
  }, {
    name: 'Dominican Republic',
    value: 10016.797
  }, {
    name: 'Algeria',
    value: 37062.82
  }, {
    name: 'Ecuador',
    value: 15001.072
  }, {
    name: 'Egypt',
    value: 78075.705
  }, {
    name: 'Eritrea',
    value: 5741.159
  }, {
    name: 'Spain',
    value: 46182.038
  }, {
    name: 'Estonia',
    value: 1298.533
  }, {
    name: 'Ethiopia',
    value: 87095.281
  }, {
    name: 'Finland',
    value: 5367.693
  }, {
    name: 'Fiji',
    value: 860.559
  }, {
    name: 'Falkland Islands',
    value: 49.581
  }, {
    name: 'France',
    value: 63230.866
  }, {
    name: 'Gabon',
    value: 1556.222
  }, {
    name: 'United Kingdom',
    value: 62066.35
  }, {
    name: 'Georgia',
    value: 4388.674
  }, {
    name: 'Ghana',
    value: 24262.901
  }, {
    name: 'Eq. Guinea',
    value: 10876.033
  }, {
    name: 'Guinea',
    value: 10876.033
  }, {
    name: 'Gambia',
    value: 1680.64
  }, {
    name: 'Guinea Bissau',
    value: 10876.033
  }, {
    name: 'Equatorial Guinea',
    value: 696.167
  }, {
    name: 'Greece',
    value: 11109.999
  }, {
    name: 'Greenland',
    value: 56.546
  }, {
    name: 'Guatemala',
    value: 14341.576
  }, {
    name: 'French Guiana',
    value: 231.169
  }, {
    name: 'Guyana',
    value: 786.126
  }, {
    name: 'Honduras',
    value: 7621.204
  }, {
    name: 'Croatia',
    value: 4338.027
  }, {
    name: 'Haiti',
    value: 9896.4
  }, {
    name: 'Hungary',
    value: 10014.633
  }, {
    name: 'Indonesia',
    value: 240676.485
  }, {
    name: 'India',
    value: 1205624.648
  }, {
    name: 'Ireland',
    value: 4467.561
  }, {
    name: 'Iran',
    value: 240676.485
  }, {
    name: 'Iraq',
    value: 30962.38
  }, {
    name: 'Iceland',
    value: 318.042
  }, {
    name: 'Israel',
    value: 7420.368
  }, {
    name: 'Italy',
    value: 60508.978
  }, {
    name: 'Jamaica',
    value: 2741.485
  }, {
    name: 'Jordan',
    value: 6454.554
  }, {
    name: 'Japan',
    value: 127352.833
  }, {
    name: 'Kazakhstan',
    value: 15921.127
  }, {
    name: 'Kenya',
    value: 40909.194
  }, {
    name: 'Kyrgyzstan',
    value: 5334.223
  }, {
    name: 'Cambodia',
    value: 14364.931
  }, {
    name: 'South Korea',
    value: 51452.352
  }, {
    name: 'Kosovo',
    value: 97.743
  }, {
    name: 'Kuwait',
    value: 2991.58
  }, {
    name: 'Laos',
    value: 6395.713
  }, {
    name: 'Lebanon',
    value: 4341.092
  }, {
    name: 'Liberia',
    value: 3957.99
  }, {
    name: 'Libya',
    value: 6040.612
  }, {
    name: 'Sri Lanka',
    value: 20758.779
  }, {
    name: 'Lesotho',
    value: 2008.921
  }, {
    name: 'Lithuania',
    value: 3068.457
  }, {
    name: 'Luxembourg',
    value: 507.885
  }, {
    name: 'Latvia',
    value: 2090.519
  }, {
    name: 'Morocco',
    value: 31642.36
  }, {
    name: 'Moldova',
    value: 103.619
  }, {
    name: 'Madagascar',
    value: 21079.532
  }, {
    name: 'Mexico',
    value: 117886.404
  }, {
    name: 'Macedonia',
    value: 507.885
  }, {
    name: 'Mali',
    value: 13985.961
  }, {
    name: 'Myanmar',
    value: 51931.231
  }, {
    name: 'Montenegro',
    value: 620.078
  }, {
    name: 'Mongolia',
    value: 2712.738
  }, {
    name: 'Mozambique',
    value: 23967.265
  }, {
    name: 'Mauritania',
    value: 3609.42
  }, {
    name: 'Malawi',
    value: 15013.694
  }, {
    name: 'Malaysia',
    value: 28275.835
  }, {
    name: 'Namibia',
    value: 2178.967
  }, {
    name: 'New Caledonia',
    value: 246.379
  }, {
    name: 'Niger',
    value: 15893.746
  }, {
    name: 'Nigeria',
    value: 159707.78
  }, {
    name: 'Nicaragua',
    value: 5822.209
  }, {
    name: 'Netherlands',
    value: 16615.243
  }, {
    name: 'Norway',
    value: 4891.251
  }, {
    name: 'Nepal',
    value: 26846.016
  }, {
    name: 'New Zealand',
    value: 4368.136
  }, {
    name: 'Oman',
    value: 2802.768
  }, {
    name: 'Pakistan',
    value: 173149.306
  }, {
    name: 'Panama',
    value: 3678.128
  }, {
    name: 'Peru',
    value: 29262.83
  }, {
    name: 'Philippines',
    value: 93444.322
  }, {
    name: 'Papua New Guinea',
    value: 6858.945
  }, {
    name: 'Poland',
    value: 38198.754
  }, {
    name: 'Puerto Rico',
    value: 3709.671
  }, {
    name: 'North Korea',
    value: 1.468
  }, {
    name: 'Portugal',
    value: 10589.792
  }, {
    name: 'Paraguay',
    value: 6459.721
  }, {
    name: 'Qatar',
    value: 1749.713
  }, {
    name: 'Romania',
    value: 21861.476
  }, {
    name: 'Russia',
    value: 21861.476
  }, {
    name: 'Rwanda',
    value: 10836.732
  }, {
    name: 'Western Sahara',
    value: 514.648
  }, {
    name: 'Saudi Arabia',
    value: 27258.387
  }, {
    name: 'Sudan',
    value: 35652.002
  }, {
    name: 'S. Sudan',
    value: 9940.929
  }, {
    name: 'Senegal',
    value: 12950.564
  }, {
    name: 'Solomon Islands',
    value: 526.447
  }, {
    name: 'Sierra Leone',
    value: 5751.976
  }, {
    name: 'El Salvador',
    value: 6218.195
  }, {
    name: 'Somaliland',
    value: 9636.173
  }, {
    name: 'Somalia',
    value: 9636.173
  }, {
    name: 'Republic of Serbia',
    value: 3573.024
  }, {
    name: 'Suriname',
    value: 524.96
  }, {
    name: 'Slovakia',
    value: 5433.437
  }, {
    name: 'Slovenia',
    value: 2054.232
  }, {
    name: 'Sweden',
    value: 9382.297
  }, {
    name: 'Swaziland',
    value: 1193.148
  }, {
    name: 'Syria',
    value: 7830.534
  }, {
    name: 'Chad',
    value: 11720.781
  }, {
    name: 'Togo',
    value: 6306.014
  }, {
    name: 'Thailand',
    value: 66402.316
  }, {
    name: 'Tajikistan',
    value: 7627.326
  }, {
    name: 'Turkmenistan',
    value: 5041.995
  }, {
    name: 'East Timor',
    value: 10016.797
  }, {
    name: 'Trinidad and Tobago',
    value: 1328.095
  }, {
    name: 'Tunisia',
    value: 10631.83
  }, {
    name: 'Turkey',
    value: 72137.546
  }, {
    name: 'Tanzania',
    value: 44973.33
  }, {
    name: 'Uganda',
    value: 33987.213
  }, {
    name: 'Ukraine',
    value: 46050.22
  }, {
    name: 'Uruguay',
    value: 3371.982
  }, {
    name: 'United States',
    value: 312247.116
  }, {
    name: 'Uzbekistan',
    value: 27769.27
  }, {
    name: 'Venezuela',
    value: 236.299
  }, {
    name: 'Vietnam',
    value: 89047.397
  }, {
    name: 'Vanuatu',
    value: 236.299
  }, {
    name: 'West Bank',
    value: 13.565
  }, {
    name: 'Yemen',
    value: 22763.008
  }, {
    name: 'South Africa',
    value: 51452.352
  }, {
    name: 'Zambia',
    value: 13216.985
  }, {
    name: 'Zimbabwe',
    value: 13076.978
  }];
  var total = 6961500;
  var maxZoomLevel = 5;
  var minZoomLevel = 1;
  if ($locationBySessionMap) {
    var _document$querySelect, _document$querySelect2, _document$querySelect3;
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($locationBySessionMap, 'options');
    var chart = window.echarts.init($locationBySessionMap);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            var _params$data, _params$data2;
            return "<strong>".concat((_params$data = params.data) === null || _params$data === void 0 ? void 0 : _params$data.name, " :</strong> ").concat((((_params$data2 = params.data) === null || _params$data2 === void 0 ? void 0 : _params$data2.value) / total * 100).toFixed(2), "%");
          }
        },
        visualMap: {
          show: false,
          min: 800,
          max: 50000,
          inRange: {
            color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.8), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.6), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.4), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.2)].reverse()
          }
        },
        series: [{
          type: 'map',
          map: 'world',
          data: data,
          roam: 'move',
          scaleLimit: {
            min: minZoomLevel,
            max: maxZoomLevel
          },
          left: 0,
          right: 0,
          label: {
            show: false
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning')
            }
          }
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    var zoomLevel = 1;
    (_document$querySelect = document.querySelector('.location-by-session-map-reset')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', function () {
      zoomLevel = 1;
      chart.dispatchAction({
        type: 'restore'
      });
      chart.setOption({
        series: {
          zoom: 1
        }
      });
    });
    (_document$querySelect2 = document.querySelector('.location-by-session-map-zoom')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener('click', function () {
      if (zoomLevel < maxZoomLevel) {
        zoomLevel = zoomLevel + 1;
      }
      chart.setOption({
        series: {
          zoom: zoomLevel
        }
      });
    });
    (_document$querySelect3 = document.querySelector('.location-by-session-map-zoomOut')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.addEventListener('click', function () {
      if (zoomLevel > minZoomLevel) {
        zoomLevel = zoomLevel - 1;
      }
      chart.setOption({
        series: {
          zoom: zoomLevel
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationBySessionInit);

/***/ }),

/***/ "./resources/js/charts/echarts/market-share-ecommerce.js":
/*!***************************************************************!*\
  !*** ./resources/js/charts/echarts/market-share-ecommerce.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");


/* -------------------------------------------------------------------------- */
/*                                Product Share                               */
/* -------------------------------------------------------------------------- */

var marketShareEcommerceInit = function marketShareEcommerceInit() {
  var ECHART_PRODUCT_SHARE = ".echart-product-share";
  var $echartProductShare = document.querySelector(ECHART_PRODUCT_SHARE);
  if ($echartProductShare) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartProductShare, "options");
    var chart = window.echarts.init($echartProductShare);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning],
        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "<strong>".concat(params.data.name, ":</strong> ").concat(params.percent, "%");
          }
        },
        position: function position(pos, params, dom, rect, size) {
          return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
        },
        legend: {
          show: false
        },
        series: [{
          type: "pie",
          radius: ["100%", "80%"],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('card-bg')
          },
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "20",
                fontWeight: "500",
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["700"]
              }
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 5300000,
            name: "Falcon"
          }, {
            value: 1900000,
            name: "Sparrow"
          }, {
            value: 2000000,
            name: "Phoenix"
          }]
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (marketShareEcommerceInit);

/***/ }),

/***/ "./resources/js/charts/echarts/market-share.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/echarts/market-share.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

var marketShareInit = function marketShareInit() {
  var ECHART_MARKET_SHARE = ".echart-market-share";
  var $echartMarketShare = document.querySelector(ECHART_MARKET_SHARE);
  if ($echartMarketShare) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartMarketShare, "options");
    var chart = window.echarts.init($echartMarketShare);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()[300]],
        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "<strong>".concat(params.data.name, ":</strong> ").concat(params.percent, "%");
          }
        },
        position: function position(pos, params, dom, rect, size) {
          return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
        },
        legend: {
          show: false
        },
        series: [{
          type: "pie",
          radius: ["100%", "87%"],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('card-bg')
          },
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "20",
                fontWeight: "500",
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["700"]
              }
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 5300000,
            name: "Samsung"
          }, {
            value: 1900000,
            name: "Huawei"
          }, {
            value: 2000000,
            name: "Apple"
          }]
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (marketShareInit);

/***/ }),

/***/ "./resources/js/charts/echarts/most-leads.js":
/*!***************************************************!*\
  !*** ./resources/js/charts/echarts/most-leads.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Market Share                                */
/* -------------------------------------------------------------------------- */

var mostLeadsInit = function mostLeadsInit() {
  var ECHART_MOST_LEADS = ".echart-most-leads";
  var $echartMostLeads = document.querySelector(ECHART_MOST_LEADS);
  if ($echartMostLeads) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartMostLeads, "options");
    var chart = window.echarts.init($echartMostLeads);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info
        // utils.getGrays()[300],
        ],

        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "<strong>".concat(params.data.name, ":</strong> ").concat(params.percent, "%");
          }
        },
        position: function position(pos, params, dom, rect, size) {
          return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
        },
        legend: {
          show: false
        },
        series: [{
          type: "pie",
          radius: ["100%", "67%"],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('card-bg')
          },
          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "20",
                fontWeight: "500",
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["700"]
              }
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 60,
            name: "Email"
          }, {
            value: 30,
            name: "Social"
          }, {
            value: 10,
            name: "Call"
          }, {
            value: 120,
            name: "Other"
          }]
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mostLeadsInit);

/***/ }),

/***/ "./resources/js/charts/echarts/real-time-users.js":
/*!********************************************************!*\
  !*** ./resources/js/charts/echarts/real-time-users.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Real Time Users                        */
/* -------------------------------------------------------------------------- */

var realTimeUsersChartInit = function realTimeUsersChartInit() {
  var $echartsRealTimeUsers = document.querySelector('.echart-real-time-users');
  if ($echartsRealTimeUsers) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsRealTimeUsers, 'options');
    var chart = window.echarts.init($echartsRealTimeUsers);
    var data = [921, 950, 916, 913, 909, 962, 926, 936, 977, 976, 999, 981, 998, 1000, 900, 906, 973, 911, 994, 982, 917, 972, 952, 963, 991];
    var axisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    var tooltipFormatter = function tooltipFormatter(params) {
      return "\n      <div>\n          <h6 class=\"fs--1 text-700 mb-0\"><span class=\"fas fa-circle me-1 text-info\"></span>\n            Users : ".concat(params[0].value, "\n          </h6>\n      </div>\n      ");
    };
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          axisPointer: {
            type: 'none'
          },
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          boundaryGap: [0.2, 0.2],
          data: axisData
        },
        yAxis: {
          type: 'value',
          scale: true,
          boundaryGap: false,
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          min: 500,
          max: 1100
        },
        series: [{
          type: 'bar',
          barCategoryGap: '12%',
          data: data,
          itemStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor('#fff', 0.3)
          }
        }],
        grid: {
          right: '0px',
          left: '0px',
          bottom: 0,
          top: 0
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    var userCounterDom = document.querySelector('.real-time-user');
    setInterval(function () {
      var rndData = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(900, 1000);
      data.shift();
      data.push(rndData);
      axisData.shift();
      axisData.push(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(100, 500));
      userCounterDom.innerHTML = rndData;
      chart.setOption({
        xAxis: {
          data: axisData
        },
        series: [{
          data: data
        }]
      });
    }, 2000);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (realTimeUsersChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/report-for-this-week.js":
/*!*************************************************************!*\
  !*** ./resources/js/charts/echarts/report-for-this-week.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                     Echart Bar Report For This Week                        */
/* -------------------------------------------------------------------------- */

var reportForThisWeekInit = function reportForThisWeekInit() {
  var ECHART_BAR_REPORT_FOR_THIS_WEEK = ".echart-bar-report-for-this-week";
  var $echartBarReportForThisWeek = document.querySelector(ECHART_BAR_REPORT_FOR_THIS_WEEK);
  if ($echartBarReportForThisWeek) {
    var selectChart = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartBarReportForThisWeek, "chart");
    var legendLastWeek = document.getElementById(selectChart === null || selectChart === void 0 ? void 0 : selectChart.option1);
    var legendThisWeek = document.getElementById(selectChart === null || selectChart === void 0 ? void 0 : selectChart.option2);
    var data = [["product", "This Week", "Last Week"], ["Sun", 43, 85], ["Mon", 83, 73], ["Tue", 86, 62], ["Wed", 72, 53], ["Thu", 80, 50], ["Fri", 50, 70], ["Sat", 80, 90]];
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartBarReportForThisWeek, "options");
    var chart = window.echarts.init($echartBarReportForThisWeek);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"]],
        dataset: {
          source: data
        },
        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["100"],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: function formatter(params) {
            return "<div class=\"font-weight-semi-bold\">".concat(params.seriesName, "</div><div class=\"fs--1 text-600\"><strong>").concat(params.name, ":</strong> ").concat(params.value[params.componentIndex + 1], "</div>");
          }
        },
        legend: {
          show: false
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"]
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          axisTick: false,
          boundaryGap: true
        },
        yAxis: {
          axisPointer: {
            type: "none"
          },
          axisTick: "none",
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"],
            formatter: function formatter(value) {
              return "".concat(value, " hr");
            }
          }
        },
        series: [{
          type: "bar",
          name: "",
          barWidth: "12%",
          barGap: "30%",
          label: {
            normal: {
              show: false
            }
          },
          z: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
            }
          }
        }, {
          type: "bar",
          barWidth: "12%",
          barGap: "30%",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()[300]
            }
          }
        }],
        grid: {
          right: "0",
          left: "40px",
          bottom: "10%",
          top: "15%"
        }
      };
    };
    legendLastWeek && legendLastWeek.addEventListener("click", function () {
      legendLastWeek.classList.toggle("opacity-50");
      chart.dispatchAction({
        type: "legendToggleSelect",
        name: "Last Week"
      });
    });
    legendThisWeek && legendThisWeek.addEventListener("click", function () {
      legendThisWeek.classList.toggle("opacity-50");
      chart.dispatchAction({
        type: "legendToggleSelect",
        name: "This Week"
      });
    });
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportForThisWeekInit);

/***/ }),

/***/ "./resources/js/charts/echarts/returning-customer-rate.js":
/*!****************************************************************!*\
  !*** ./resources/js/charts/echarts/returning-customer-rate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");


/* -------------------------------------------------------------------------- */
/*                     Echarts Line Returing Customer Rate                    */
/* -------------------------------------------------------------------------- */
var returningCustomerRateInit = function returningCustomerRateInit() {
  var ECHART_LINE_RETURNING_CUSTOMER_RATE = '.echart-line-returning-customer-rate';
  var $echartsLineReturningCustomerRate = document.querySelector(ECHART_LINE_RETURNING_CUSTOMER_RATE);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if ($echartsLineReturningCustomerRate) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsLineReturningCustomerRate, 'options');
    var LEGEND_MONTH_TARGET = userOptions.target;
    var SELECT_MONTH = "#".concat(userOptions.monthSelect);
    var LEGEND_NEW_MONTH = "#".concat(userOptions.optionOne);
    var LEGEND_RETURNING_MONTH = "#".concat(userOptions.optionTwo);
    var $legendNewMonth = document.getElementById(LEGEND_MONTH_TARGET).querySelector(LEGEND_NEW_MONTH);
    var $legendReturningMonth = document.getElementById(LEGEND_MONTH_TARGET).querySelector(LEGEND_RETURNING_MONTH);
    var chart = window.echarts.init($echartsLineReturningCustomerRate);
    var monthNumbers = [[20, 40, 20, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70], [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50], [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60], [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80], [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50], [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70], [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50], [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110], [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70], [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70], [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]];
    var dates = function dates(month) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDates(window.dayjs().month(month).date(1), window.dayjs().month(Number(month) + 1).date(0), 1000 * 60 * 60 * 24 * 3);
    };
    var getDefaultOptions = function getDefaultOptions() {
      return {
        title: {
          text: 'Customers',
          textStyle: {
            fontWeight: 500,
            fontSize: 13,
            fontFamily: 'poppins',
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('900')
          }
        },
        legend: {
          show: false,
          data: ['New', 'Returning']
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: _echarts_utils__WEBPACK_IMPORTED_MODULE_1__.tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: dates(0),
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300'),
              type: 'dashed'
            }
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300'),
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('400'),
            formatter: function formatter(value) {
              var date = new Date(value);
              if (date.getDate() === 1) {
                return "".concat(months[date.getMonth()].substring(0, 3), " ").concat(date.getDate());
              }
              return "".concat(date.getDate());
            },
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: 'New',
          type: 'line',
          data: monthNumbers[1],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.2)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.01)
              }]
            }
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        }, {
          name: 'Returning',
          type: 'line',
          data: monthNumbers[0],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning')
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'),
            borderWidth: 2
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.2)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.01)
              }]
            }
          },
          symbol: 'none',
          smooth: false,
          hoverAnimation: true
        }],
        grid: {
          right: '7px',
          left: '35px',
          bottom: '8%',
          top: '15%'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    var monthSelect = document.querySelector(SELECT_MONTH);
    monthSelect.addEventListener('change', function (e) {
      var month = e.currentTarget.value;
      var dataNewMonth = monthNumbers[Number(month) + 1];
      var dataReturningMonth = monthNumbers[month];
      chart.setOption({
        xAxis: {
          data: dates(month)
        },
        series: [{
          data: dataNewMonth
        }, {
          data: dataReturningMonth
        }]
      });
    });
    $legendNewMonth.addEventListener('click', function () {
      $legendNewMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'New'
      });
    });
    $legendReturningMonth.addEventListener('click', function () {
      $legendReturningMonth.classList.toggle('opacity-50');
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'Returning'
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (returningCustomerRateInit);

/***/ }),

/***/ "./resources/js/charts/echarts/sales-by-pos-location.js":
/*!**************************************************************!*\
  !*** ./resources/js/charts/echarts/sales-by-pos-location.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                          Echarts Sales Pos Location                        */
/* -------------------------------------------------------------------------- */

var salesByPosLocationInit = function salesByPosLocationInit() {
  var ECHART_RADAR_SALES_BY_POS_LOCATION = '.echart-radar-sales-by-pos-location';
  var $echartsRadarSalesByPosLocation = document.querySelector(ECHART_RADAR_SALES_BY_POS_LOCATION);
  function getformatter(params) {
    //const indicators = ['Marketing','Sales', 'Dev', 'Support', 'Tech', 'Admin']
    return "<strong > ".concat(params.name, " </strong>\n    <div class=\"fs--1 text-600\">\n      <strong >Marketing</strong>: ").concat(params.value[0], "  <br>\n      <strong>Sales</strong>: ").concat(params.value[1], "  <br>\n      <strong>Dev</strong>: ").concat(params.value[2], "  <br>\n      <strong>Support</strong>: ").concat(params.value[3], "  <br>\n      <strong>Tech</strong>: ").concat(params.value[4], "  <br>\n      <strong>Admin</strong>: ").concat(params.value[5], "  <br>\n    </div>");
  }
  if ($echartsRadarSalesByPosLocation) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsRadarSalesByPosLocation, 'options');
    var chart = window.echarts.init($echartsRadarSalesByPosLocation);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('100'),
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300'),
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: getformatter
        },
        radar: {
          splitNumber: 7,
          radius: '75%',
          axisLine: {
            show: true,
            symbol: 'circle',
            symbolSize: [13, 13],
            lineStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.5,
                colorStops: [{
                  offset: 0.7,
                  color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('100')
                }, {
                  offset: 1,
                  color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('400')
                }]
              }
            }
          },
          splitArea: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300')
            }
          },
          name: {
            textStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('600'),
              fontWeight: 500
            }
          },
          indicator: [{
            name: 'Marketing',
            max: 70
          }, {
            name: 'Admin',
            max: 70
          }, {
            name: 'Tech',
            max: 70
          }, {
            name: 'Support',
            max: 70
          }, {
            name: 'Dev',
            max: 70
          }, {
            name: 'Sales',
            max: 70
          }]
        },
        series: [{
          name: 'Budget vs spending',
          type: 'radar',
          symbol: 'pin',
          data: [{
            value: [20, 50, 60, 50, 60, 60],
            name: 'Budget',
            itemStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning, 0.5)
            },
            areaStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().warning, 0.24)
            },
            symbol: 'circle',
            symbolSize: 8
          }, {
            value: [40, 60, 30, 15, 60, 35],
            name: 'Spending',
            areaStyle: {
              color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.24)]
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary)
            }
          }]
        }],
        grid: {
          top: 0,
          bottom: '100px'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (salesByPosLocationInit);

/***/ }),

/***/ "./resources/js/charts/echarts/session-by-browser.js":
/*!***********************************************************!*\
  !*** ./resources/js/charts/echarts/session-by-browser.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Session By Device                           */
/* -------------------------------------------------------------------------- */

var sessionByBrowserChartInit = function sessionByBrowserChartInit() {
  var $sessionByBroswser = document.querySelector('.echart-session-by-browser');
  if ($sessionByBroswser) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($sessionByBroswser, 'options');
    var chart = window.echarts.init($sessionByBroswser);
    var dataset = {
      week: [{
        value: 50.3,
        name: 'Chrome'
      }, {
        value: 20.6,
        name: 'Safari'
      }, {
        value: 30.1,
        name: 'Mozilla'
      }],
      month: [{
        value: 35.1,
        name: 'Chrome'
      }, {
        value: 25.6,
        name: 'Safari'
      }, {
        value: 40.3,
        name: 'Mozilla'
      }],
      year: [{
        value: 26.1,
        name: 'Chrome'
      }, {
        value: 10.6,
        name: 'Safari'
      }, {
        value: 64.3,
        name: 'Mozilla'
      }]
    };
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().success, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().info],
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            return "<strong>".concat(params.data.name, ":</strong> ").concat(params.data.value, "%");
          },
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        legend: {
          show: false
        },
        series: [{
          type: 'pie',
          radius: ['100%', '65%'],
          avoidLabelOverlap: false,
          hoverAnimation: false,
          itemStyle: {
            borderWidth: 2,
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('card-bg')
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: dataset.week
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    var selectMenu = document.querySelector("[data-target='.echart-session-by-browser']");
    if (selectMenu) {
      selectMenu.addEventListener('change', function (e) {
        var value = e.currentTarget.value;
        chart.setOption({
          series: [{
            data: dataset[value]
          }]
        });
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionByBrowserChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/session-by-country-map.js":
/*!***************************************************************!*\
  !*** ./resources/js/charts/echarts/session-by-country-map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Session By Country Map                      */
/* -------------------------------------------------------------------------- */

var sessionByCountryMapInit = function sessionByCountryMapInit() {
  var $sessionByCountryMap = document.querySelector('.echart-session-by-country-map');
  var data = [{
    name: 'Afghanistan',
    value: 28397.812
  }, {
    name: 'Angola',
    value: 19549.124
  }, {
    name: 'Albania',
    value: 3150.143
  }, {
    name: 'United Arab Emirates',
    value: 8441.537
  }, {
    name: 'Argentina',
    value: 40374.224
  }, {
    name: 'Armenia',
    value: 2963.496
  }, {
    name: 'French Southern and Antarctic Lands',
    value: 268.065
  }, {
    name: 'Australia',
    value: 22404.488
  }, {
    name: 'Austria',
    value: 8401.924
  }, {
    name: 'Azerbaijan',
    value: 9094.718
  }, {
    name: 'Burundi',
    value: 9232.753
  }, {
    name: 'Belgium',
    value: 10941.288
  }, {
    name: 'Benin',
    value: 9509.798
  }, {
    name: 'Burkina Faso',
    value: 15540.284
  }, {
    name: 'Bangladesh',
    value: 151125.475
  }, {
    name: 'Bulgaria',
    value: 7389.175
  }, {
    name: 'The Bahamas',
    value: 66402.316
  }, {
    name: 'Bosnia and Herzegovina',
    value: 3845.929
  }, {
    name: 'Belarus',
    value: 9491.07
  }, {
    name: 'Belize',
    value: 308.595
  }, {
    name: 'Bermuda',
    value: 64.951
  }, {
    name: 'Bolivia',
    value: 716.939
  }, {
    name: 'Brazil',
    value: 195210.154
  }, {
    name: 'Brunei',
    value: 27.223
  }, {
    name: 'Bhutan',
    value: 716.939
  }, {
    name: 'Botswana',
    value: 1969.341
  }, {
    name: 'Central African Rep.',
    value: 4349.921
  }, {
    name: 'Canada',
    value: 34126.24
  }, {
    name: 'Switzerland',
    value: 7830.534
  }, {
    name: 'Chile',
    value: 17150.76
  }, {
    name: 'China',
    value: 1359821.465
  }, {
    name: "Côte d'Ivoire",
    value: 60508.978
  }, {
    name: 'Cameroon',
    value: 20624.343
  }, {
    name: 'Dem. Rep. Congo',
    value: 62191.161
  }, {
    name: 'Congo',
    value: 3573.024
  }, {
    name: 'Colombia',
    value: 46444.798
  }, {
    name: 'Costa Rica',
    value: 4669.685
  }, {
    name: 'Cuba',
    value: 11281.768
  }, {
    name: 'Northern Cyprus',
    value: 1.468
  }, {
    name: 'Cyprus',
    value: 1103.685
  }, {
    name: 'Czech Republic',
    value: 10553.701
  }, {
    name: 'Germany',
    value: 83017.404
  }, {
    name: 'Djibouti',
    value: 834.036
  }, {
    name: 'Denmark',
    value: 5550.959
  }, {
    name: 'Dominican Republic',
    value: 10016.797
  }, {
    name: 'Algeria',
    value: 37062.82
  }, {
    name: 'Ecuador',
    value: 15001.072
  }, {
    name: 'Egypt',
    value: 78075.705
  }, {
    name: 'Eritrea',
    value: 5741.159
  }, {
    name: 'Spain',
    value: 46182.038
  }, {
    name: 'Estonia',
    value: 1298.533
  }, {
    name: 'Ethiopia',
    value: 87095.281
  }, {
    name: 'Finland',
    value: 5367.693
  }, {
    name: 'Fiji',
    value: 860.559
  }, {
    name: 'Falkland Islands',
    value: 49.581
  }, {
    name: 'France',
    value: 63230.866
  }, {
    name: 'Gabon',
    value: 1556.222
  }, {
    name: 'United Kingdom',
    value: 62066.35
  }, {
    name: 'Georgia',
    value: 4388.674
  }, {
    name: 'Ghana',
    value: 24262.901
  }, {
    name: 'Eq. Guinea',
    value: 10876.033
  }, {
    name: 'Guinea',
    value: 10876.033
  }, {
    name: 'Gambia',
    value: 1680.64
  }, {
    name: 'Guinea Bissau',
    value: 10876.033
  }, {
    name: 'Equatorial Guinea',
    value: 696.167
  }, {
    name: 'Greece',
    value: 11109.999
  }, {
    name: 'Greenland',
    value: 56.546
  }, {
    name: 'Guatemala',
    value: 14341.576
  }, {
    name: 'French Guiana',
    value: 231.169
  }, {
    name: 'Guyana',
    value: 786.126
  }, {
    name: 'Honduras',
    value: 7621.204
  }, {
    name: 'Croatia',
    value: 4338.027
  }, {
    name: 'Haiti',
    value: 9896.4
  }, {
    name: 'Hungary',
    value: 10014.633
  }, {
    name: 'Indonesia',
    value: 240676.485
  }, {
    name: 'India',
    value: 1205624.648
  }, {
    name: 'Ireland',
    value: 4467.561
  }, {
    name: 'Iran',
    value: 240676.485
  }, {
    name: 'Iraq',
    value: 30962.38
  }, {
    name: 'Iceland',
    value: 318.042
  }, {
    name: 'Israel',
    value: 7420.368
  }, {
    name: 'Italy',
    value: 60508.978
  }, {
    name: 'Jamaica',
    value: 2741.485
  }, {
    name: 'Jordan',
    value: 6454.554
  }, {
    name: 'Japan',
    value: 127352.833
  }, {
    name: 'Kazakhstan',
    value: 15921.127
  }, {
    name: 'Kenya',
    value: 40909.194
  }, {
    name: 'Kyrgyzstan',
    value: 5334.223
  }, {
    name: 'Cambodia',
    value: 14364.931
  }, {
    name: 'South Korea',
    value: 51452.352
  }, {
    name: 'Kosovo',
    value: 97.743
  }, {
    name: 'Kuwait',
    value: 2991.58
  }, {
    name: 'Laos',
    value: 6395.713
  }, {
    name: 'Lebanon',
    value: 4341.092
  }, {
    name: 'Liberia',
    value: 3957.99
  }, {
    name: 'Libya',
    value: 6040.612
  }, {
    name: 'Sri Lanka',
    value: 20758.779
  }, {
    name: 'Lesotho',
    value: 2008.921
  }, {
    name: 'Lithuania',
    value: 3068.457
  }, {
    name: 'Luxembourg',
    value: 507.885
  }, {
    name: 'Latvia',
    value: 2090.519
  }, {
    name: 'Morocco',
    value: 31642.36
  }, {
    name: 'Moldova',
    value: 103.619
  }, {
    name: 'Madagascar',
    value: 21079.532
  }, {
    name: 'Mexico',
    value: 117886.404
  }, {
    name: 'Macedonia',
    value: 507.885
  }, {
    name: 'Mali',
    value: 13985.961
  }, {
    name: 'Myanmar',
    value: 51931.231
  }, {
    name: 'Montenegro',
    value: 620.078
  }, {
    name: 'Mongolia',
    value: 2712.738
  }, {
    name: 'Mozambique',
    value: 23967.265
  }, {
    name: 'Mauritania',
    value: 3609.42
  }, {
    name: 'Malawi',
    value: 15013.694
  }, {
    name: 'Malaysia',
    value: 28275.835
  }, {
    name: 'Namibia',
    value: 2178.967
  }, {
    name: 'New Caledonia',
    value: 246.379
  }, {
    name: 'Niger',
    value: 15893.746
  }, {
    name: 'Nigeria',
    value: 159707.78
  }, {
    name: 'Nicaragua',
    value: 5822.209
  }, {
    name: 'Netherlands',
    value: 16615.243
  }, {
    name: 'Norway',
    value: 4891.251
  }, {
    name: 'Nepal',
    value: 26846.016
  }, {
    name: 'New Zealand',
    value: 4368.136
  }, {
    name: 'Oman',
    value: 2802.768
  }, {
    name: 'Pakistan',
    value: 173149.306
  }, {
    name: 'Panama',
    value: 3678.128
  }, {
    name: 'Peru',
    value: 29262.83
  }, {
    name: 'Philippines',
    value: 93444.322
  }, {
    name: 'Papua New Guinea',
    value: 6858.945
  }, {
    name: 'Poland',
    value: 38198.754
  }, {
    name: 'Puerto Rico',
    value: 3709.671
  }, {
    name: 'North Korea',
    value: 1.468
  }, {
    name: 'Portugal',
    value: 10589.792
  }, {
    name: 'Paraguay',
    value: 6459.721
  }, {
    name: 'Qatar',
    value: 1749.713
  }, {
    name: 'Romania',
    value: 21861.476
  }, {
    name: 'Russia',
    value: 21861.476
  }, {
    name: 'Rwanda',
    value: 10836.732
  }, {
    name: 'Western Sahara',
    value: 514.648
  }, {
    name: 'Saudi Arabia',
    value: 27258.387
  }, {
    name: 'Sudan',
    value: 35652.002
  }, {
    name: 'S. Sudan',
    value: 9940.929
  }, {
    name: 'Senegal',
    value: 12950.564
  }, {
    name: 'Solomon Islands',
    value: 526.447
  }, {
    name: 'Sierra Leone',
    value: 5751.976
  }, {
    name: 'El Salvador',
    value: 6218.195
  }, {
    name: 'Somaliland',
    value: 9636.173
  }, {
    name: 'Somalia',
    value: 9636.173
  }, {
    name: 'Republic of Serbia',
    value: 3573.024
  }, {
    name: 'Suriname',
    value: 524.96
  }, {
    name: 'Slovakia',
    value: 5433.437
  }, {
    name: 'Slovenia',
    value: 2054.232
  }, {
    name: 'Sweden',
    value: 9382.297
  }, {
    name: 'Swaziland',
    value: 1193.148
  }, {
    name: 'Syria',
    value: 7830.534
  }, {
    name: 'Chad',
    value: 11720.781
  }, {
    name: 'Togo',
    value: 6306.014
  }, {
    name: 'Thailand',
    value: 66402.316
  }, {
    name: 'Tajikistan',
    value: 7627.326
  }, {
    name: 'Turkmenistan',
    value: 5041.995
  }, {
    name: 'East Timor',
    value: 10016.797
  }, {
    name: 'Trinidad and Tobago',
    value: 1328.095
  }, {
    name: 'Tunisia',
    value: 10631.83
  }, {
    name: 'Turkey',
    value: 72137.546
  }, {
    name: 'Tanzania',
    value: 44973.33
  }, {
    name: 'Uganda',
    value: 33987.213
  }, {
    name: 'Ukraine',
    value: 46050.22
  }, {
    name: 'Uruguay',
    value: 3371.982
  }, {
    name: 'United States',
    value: 312247.116
  }, {
    name: 'Uzbekistan',
    value: 27769.27
  }, {
    name: 'Venezuela',
    value: 236.299
  }, {
    name: 'Vietnam',
    value: 89047.397
  }, {
    name: 'Vanuatu',
    value: 236.299
  }, {
    name: 'West Bank',
    value: 13.565
  }, {
    name: 'Yemen',
    value: 22763.008
  }, {
    name: 'South Africa',
    value: 51452.352
  }, {
    name: 'Zambia',
    value: 13216.985
  }, {
    name: 'Zimbabwe',
    value: 13076.978
  }];
  var total = 6961500;
  if ($sessionByCountryMap) {
    var _document$querySelect;
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($sessionByCountryMap, 'options');
    var chart = window.echarts.init($sessionByCountryMap);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'item',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          formatter: function formatter(params) {
            var _params$data, _params$data2;
            return "<strong>".concat((_params$data = params.data) === null || _params$data === void 0 ? void 0 : _params$data.name, " :</strong> ").concat((((_params$data2 = params.data) === null || _params$data2 === void 0 ? void 0 : _params$data2.value) / total * 100).toFixed(2), "%");
          }
        },
        toolbox: {
          show: false,
          feature: {
            restore: {}
          }
        },
        visualMap: {
          show: false,
          min: 800,
          max: 50000,
          inRange: {
            color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.8), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.6), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.4), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.2)].reverse()
          }
        },
        series: [{
          type: 'map',
          map: 'world',
          data: data,
          roam: true,
          scaleLimit: {
            min: 1,
            max: 5
          },
          left: 0,
          right: 0,
          label: {
            show: false
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300']
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning')
            }
          }
        }]
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    (_document$querySelect = document.querySelector('.session-by-country-map-reset')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', function () {
      chart.dispatchAction({
        type: 'restore'
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionByCountryMapInit);

/***/ }),

/***/ "./resources/js/charts/echarts/session-by-country.js":
/*!***********************************************************!*\
  !*** ./resources/js/charts/echarts/session-by-country.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Session By Country                          */
/* -------------------------------------------------------------------------- */

var sessionByCountryChartInit = function sessionByCountryChartInit() {
  var $sessionByCountry = document.querySelector('.echart-session-by-country');
  var data = [['CHINA', 'INDIA', 'USA', 'IRAN', 'BRAZIL', 'PAKISTAN'], [19.53, 17.32, 4.49, 3.46, 2.8, 1.7]];
  if ($sessionByCountry) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($sessionByCountry, 'options');
    var chart = window.echarts.init($sessionByCountry);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          axisPointer: {
            type: 'none'
          },
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          } // formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: data[0],
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return value.substring(0, 3);
            }
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400']
            }
          },
          axisTick: {
            show: true,
            // length: 8,
            alignWithLabel: true,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          }
        },
        yAxis: {
          type: 'value',
          // inverse: true,
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return "".concat(value, "%");
            },
            fontWeight: 500,
            padding: [3, 0, 0, 0],
            margin: 12
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          data: data[1],
          itemStyle: {
            barBorderRadius: [3, 3, 0, 0],
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          barWidth: 15
        }],
        grid: {
          right: '12px',
          left: '40px',
          bottom: '10%',
          top: '16px'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionByCountryChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/top-products.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/echarts/top-products.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Top Products                                */
/* -------------------------------------------------------------------------- */

var topProductsInit = function topProductsInit() {
  var ECHART_BAR_TOP_PRODUCTS = ".echart-bar-top-products";
  var $echartBarTopProducts = document.querySelector(ECHART_BAR_TOP_PRODUCTS);
  if ($echartBarTopProducts) {
    var data = [["product", "2019", "2018"], ["Boots4", 43, 85], ["Reign Pro", 83, 73], ["Slick", 86, 62], ["Falcon", 72, 53], ["Sparrow", 80, 50], ["Hideway", 50, 70], ["Freya", 80, 90]];
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartBarTopProducts, "options");
    var chart = window.echarts.init($echartBarTopProducts);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"]],
        dataset: {
          source: data
        },
        tooltip: {
          trigger: "item",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: function formatter(params) {
            return "<div class=\"font-weight-semi-bold\">".concat(params.seriesName, "</div><div class=\"fs--1 text-600\"><strong>").concat(params.name, ":</strong> ").concat(params.value[params.componentIndex + 1], "</div>");
          }
        },
        legend: {
          data: ["2019", "2018"],
          left: "left",
          itemWidth: 10,
          itemHeight: 10,
          borderRadius: 0,
          icon: "circle",
          inactiveColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["700"]
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"]
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          axisTick: false,
          boundaryGap: true
        },
        yAxis: {
          axisPointer: {
            type: "none"
          },
          axisTick: "none",
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"]
          }
        },
        series: [{
          type: "bar",
          barWidth: "10px",
          barGap: "30%",
          label: {
            normal: {
              show: false
            }
          },
          z: 10,
          itemStyle: {
            normal: {
              barBorderRadius: [10, 10, 0, 0],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
            }
          }
        }, {
          type: "bar",
          barWidth: "10px",
          barGap: "30%",
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()[300]
            }
          }
        }],
        grid: {
          right: "0",
          left: "30px",
          bottom: "10%",
          top: "20%"
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topProductsInit);

/***/ }),

/***/ "./resources/js/charts/echarts/total-order.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/echarts/total-order.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Total Order                                 */
/* -------------------------------------------------------------------------- */

var totalOrderInit = function totalOrderInit() {
  var ECHART_LINE_TOTAL_ORDER = '.echart-line-total-order';

  //
  // ─── TOTAL ORDER CHART ──────────────────────────────────────────────────────────
  //
  var $echartLineTotalOrder = document.querySelector(ECHART_LINE_TOTAL_ORDER);
  if ($echartLineTotalOrder) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartLineTotalOrder, 'options');
    var chart = window.echarts.init($echartLineTotalOrder);

    // Default options
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          triggerOn: 'mousemove',
          trigger: 'axis',
          padding: [7, 10],
          formatter: '{b0}: {c0}',
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: 'category',
          data: ['Week 4', 'Week 5', 'Week 6', 'Week 7'],
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
              type: 'dashed'
            }
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            type: 'none'
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            show: false
          }
        },
        series: [{
          type: 'line',
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            width: 3
          },
          itemStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().white,
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          hoverAnimation: true,
          data: [20, 40, 100, 120],
          // connectNulls: true,
          smooth: 0.6,
          smoothMonotone: 'x',
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 8,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.25)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0)
              }]
            }
          }
        }],
        grid: {
          bottom: '2%',
          top: '0%',
          right: '10px',
          left: '10px'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalOrderInit);

/***/ }),

/***/ "./resources/js/charts/echarts/total-sales-ecommerce.js":
/*!**************************************************************!*\
  !*** ./resources/js/charts/echarts/total-sales-ecommerce.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                      Echarts Total Sales E-commerce                        */
/* -------------------------------------------------------------------------- */

var totalSalesEcommerce = function totalSalesEcommerce() {
  var ECHART_LINE_TOTAL_SALES_ECOMM = ".echart-line-total-sales-ecommerce";
  var $echartsLineTotalSalesEcomm = document.querySelector(ECHART_LINE_TOTAL_SALES_ECOMM);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function getFormatter(params) {
    return params.map(function (_ref, index) {
      var value = _ref.value,
        borderColor = _ref.borderColor;
      return "<span class= \"fas fa-circle\" style=\"color: ".concat(borderColor, "\"></span>\n    <span class='text-600'>").concat(index === 0 ? 'Last Month' : 'Previous Year', ": ").concat(value, "</span>");
    }).join('<br/>');
  }
  if ($echartsLineTotalSalesEcomm) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsLineTotalSalesEcomm, "options");
    var TOTAL_SALES_LAST_MONTH = "#".concat(userOptions.optionOne);
    var TOTAL_SALES_PREVIOUS_YEAR = "#".concat(userOptions.optionTwo);
    var totalSalesLastMonth = document.querySelector(TOTAL_SALES_LAST_MONTH);
    var totalSalesPreviousYear = document.querySelector(TOTAL_SALES_PREVIOUS_YEAR);
    var chart = window.echarts.init($echartsLineTotalSalesEcomm);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
        tooltip: {
          trigger: "axis",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          formatter: function formatter(params) {
            return getFormatter(params);
          },
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        legend: {
          data: ['lastMonth', 'previousYear'],
          show: false
        },
        xAxis: {
          type: "category",
          data: ["2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08", "2019-01-09", "2019-01-10", "2019-01-11", "2019-01-12", "2019-01-13", "2019-01-14", "2019-01-15", "2019-01-16"],
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300'),
              type: "dashed"
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              // color: utils.getGrays()['300'],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor("#000", 0.01),
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('400'),
            formatter: function formatter(value) {
              var date = new Date(value);
              return "".concat(months[date.getMonth()], " ").concat(date.getDate());
            },
            margin: 15
            // showMaxLabel: false
          }
        },

        yAxis: {
          type: "value",
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('300'),
              type: "dashed"
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('400'),
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          name: "lastMonth",
          type: "line",
          data: [50, 80, 60, 80, 65, 90, 130, 90, 30, 40, 30, 70],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'),
            borderWidth: 2
          },
          symbol: "circle",
          symbolSize: 10,
          hoverAnimation: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0.2)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary'), 0)
              }]
            }
          }
        }, {
          name: "previousYear",
          type: "line",
          data: [110, 30, 40, 50, 80, 70, 50, 40, 110, 90, 60, 60],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.3)
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('warning'), 0.6),
            borderWidth: 2
          },
          symbol: "circle",
          symbolSize: 10,
          hoverAnimation: true
        }],
        grid: {
          right: "18px",
          left: "40px",
          bottom: "15%",
          top: "5%"
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
    totalSalesLastMonth.addEventListener("click", function () {
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'lastMonth'
      });
    });
    totalSalesPreviousYear.addEventListener("click", function () {
      chart.dispatchAction({
        type: 'legendToggleSelect',
        name: 'previousYear'
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalSalesEcommerce);

/***/ }),

/***/ "./resources/js/charts/echarts/total-sales.js":
/*!****************************************************!*\
  !*** ./resources/js/charts/echarts/total-sales.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Total Sales                            */
/* -------------------------------------------------------------------------- */

var totalSalesInit = function totalSalesInit() {
  var ECHART_LINE_TOTAL_SALES = ".echart-line-total-sales";
  var SELECT_MONTH = ".select-month";
  var $echartsLineTotalSales = document.querySelector(ECHART_LINE_TOTAL_SALES);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function getFormatter(params) {
    var _params$ = params[0],
      name = _params$.name,
      value = _params$.value;
    var date = new Date(name);
    return "".concat(months[0], " ").concat(date.getDate(), ", ").concat(value);
  }
  if ($echartsLineTotalSales) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartsLineTotalSales, "options");
    var chart = window.echarts.init($echartsLineTotalSales);
    var monthsnumber = [[60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70], [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50], [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60], [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80], [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50], [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70], [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50], [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110], [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70], [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110], [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70], [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70]];
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
        tooltip: {
          trigger: "axis",
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          formatter: function formatter(params) {
            return getFormatter(params);
          },
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: "category",
          data: ["2019-01-05", "2019-01-06", "2019-01-07", "2019-01-08", "2019-01-09", "2019-01-10", "2019-01-11", "2019-01-12", "2019-01-13", "2019-01-14", "2019-01-15", "2019-01-16"],
          boundaryGap: false,
          axisPointer: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              // color: utils.getGrays()['300'],
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor("#000", 0.01),
              type: "dashed"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"],
            formatter: function formatter(value) {
              var date = new Date(value);
              return "".concat(months[date.getMonth()], " ").concat(date.getDate());
            },
            margin: 15
          }
        },
        yAxis: {
          type: "value",
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["300"],
              type: "dashed"
            }
          },
          boundaryGap: false,
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()["400"],
            margin: 15
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [{
          type: "line",
          data: monthsnumber[0],
          lineStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary,
            borderWidth: 2
          },
          symbol: "circle",
          symbolSize: 10,
          smooth: false,
          hoverAnimation: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.2)
              }, {
                offset: 1,
                color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0)
              }]
            }
          }
        }],
        grid: {
          right: "28px",
          left: "40px",
          bottom: "15%",
          top: "5%"
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);

    // Change chart options accordiong to the selected month
    var monthSelect = document.querySelector(SELECT_MONTH);
    if (monthSelect) {
      monthSelect.addEventListener("change", function (e) {
        var month = e.currentTarget.value;
        var data = monthsnumber[month];
        chart.setOption({
          tooltip: {
            formatter: function formatter(params) {
              var _params$2 = params[0],
                name = _params$2.name,
                value = _params$2.value;
              var date = new Date(name);
              return "".concat(months[month], " ").concat(date.getDate(), ", ").concat(value);
            }
          },
          xAxis: {
            axisLabel: {
              formatter: function formatter(value) {
                var date = new Date(value);
                return "".concat(months[month], " ").concat(date.getDate());
              },
              margin: 15
            }
          },
          series: [{
            data: data
          }]
        });
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalSalesInit);

/***/ }),

/***/ "./resources/js/charts/echarts/traffic-channels.js":
/*!*********************************************************!*\
  !*** ./resources/js/charts/echarts/traffic-channels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                                Traffic Channels                           */
/* -------------------------------------------------------------------------- */

var trafficChannelChartInit = function trafficChannelChartInit() {
  var $trafficChannels = document.querySelector('.echart-traffic-channels');
  if ($trafficChannels) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($trafficChannels, 'options');
    var chart = window.echarts.init($trafficChannels);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        color: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.8), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.6), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.4), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary, 0.2)],
        legend: {
          data: ['Display', 'Direct', 'Organic Search', 'Paid Search', 'Other'],
          left: 5,
          // bottom: 10,
          itemWidth: 10,
          itemHeight: 10,
          borderRadius: 0,
          icon: 'circle',
          inactiveColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['700']
          },
          itemGap: 20
        },
        xAxis: {
          type: 'category',
          data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(7).map(function (date) {
            return window.dayjs(date).format('DD MMM, YYYY');
          }),
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('ddd');
            }
          }
        },
        yAxis: {
          type: 'value',
          position: 'right',
          splitLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['200']
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            margin: 15
          }
        },
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          axisPointer: {
            type: 'none'
          },
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          transitionDuration: 0,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          },
          formatter: _echarts_utils__WEBPACK_IMPORTED_MODULE_1__.tooltipFormatter
        },
        series: [{
          name: 'Display',
          type: 'bar',
          stack: 'total',
          data: [320, 302, 301, 334, 390, 330, 320]
        }, {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: 'Organic Search',
          type: 'bar',
          stack: 'total',
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: 'Paid Search',
          type: 'bar',
          stack: 'total',
          data: [150, 212, 201, 154, 190, 330, 410]
        }, {
          name: 'Other',
          type: 'bar',
          stack: 'total',
          data: [820, 832, 901, 934, 1290, 1330, 1320],
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          }
        }],
        grid: {
          right: '50px',
          left: '0px',
          bottom: '10%',
          top: '15%'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trafficChannelChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/users-by-time.js":
/*!******************************************************!*\
  !*** ./resources/js/charts/echarts/users-by-time.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");



/* -------------------------------------------------------------------------- */
/*                             Echarts Users By Time                          */
/* -------------------------------------------------------------------------- */

var usersByTimeChartInit = function usersByTimeChartInit() {
  var $echartUsersByTimeChart = document.querySelector('.echart-users-by-time');
  var hours = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];
  var data = [];
  for (var i = 0; i < 24; i += 1) {
    for (var j = 0; j < 7; j += 1) {
      data.push([j, i, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getRandomNumber(20, 300)]);
    }
  }
  var tooltipFormatter = function tooltipFormatter(params) {
    return "<div>\n          <p class='mb-0 text-600'>".concat(window.dayjs(params.name).format('MMM DD, YYYY'), "</p>\n          <div class=\"d-flex align-items-center\">\n            <p class=\"mb-0 text-600\">\n              ").concat(window.dayjs().hour(params.data[1]).format('hA'), " : <span class='text-800 fw-semi-bold'>").concat(params.data[2], "</span>\n            </p>\n          </div>\n        </div>");
  };
  if ($echartUsersByTimeChart) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartUsersByTimeChart, 'options');
    var chart = window.echarts.init($echartUsersByTimeChart);
    var getDefaultOptions = function getDefaultOptions() {
      return {
        gradientColor: [_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('info'), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('primary')],
        tooltip: {
          position: 'top',
          padding: [7, 10],
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          formatter: tooltipFormatter
        },
        xAxis: {
          type: 'category',
          data: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getPastDates(7),
          splitArea: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            formatter: function formatter(value) {
              return window.dayjs(value).format('ddd');
            }
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400']
            }
          }
        },
        yAxis: {
          position: 'right',
          type: 'category',
          inverse: true,
          data: hours,
          splitArea: {
            show: true
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            margin: 20,
            padding: [10, 0, 0, 0]
          },
          axisLine: {
            lineStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['400']
            }
          }
        },
        visualMap: {
          type: 'piecewise',
          orient: 'horizontal',
          left: 'left',
          bottom: '3%',
          itemSymbol: 'diamond',
          itemWidth: '10px',
          itemHeight: '10px',
          min: 20,
          max: 300,
          splitNumber: 4,
          textGap: 5,
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['600'],
            fontWeight: 500
          }
        },
        series: [{
          name: 'Users By Time',
          type: 'heatmap',
          data: data,
          label: {
            show: false
          },
          itemStyle: {
            borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColor('white'),
            borderWidth: 3
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 3,
              shadowColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].rgbaColor(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['black'], 0.5)
            }
          }
        }],
        grid: {
          right: '60px',
          left: '0px',
          bottom: '20%',
          top: '0%'
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersByTimeChartInit);

/***/ }),

/***/ "./resources/js/charts/echarts/weekly-sales.js":
/*!*****************************************************!*\
  !*** ./resources/js/charts/echarts/weekly-sales.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./resources/js/utils.js");
/* harmony import */ var _echarts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./echarts-utils */ "./resources/js/charts/echarts/echarts-utils.js");
/* eslint-disable */



/* -------------------------------------------------------------------------- */
/*                                Weekly Sales                                */
/* -------------------------------------------------------------------------- */

var weeklySalesInit = function weeklySalesInit() {
  var ECHART_BAR_WEEKLY_SALES = '.echart-bar-weekly-sales';
  var $echartBarWeeklySales = document.querySelector(ECHART_BAR_WEEKLY_SALES);
  if ($echartBarWeeklySales) {
    // Get options from data attribute
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($echartBarWeeklySales, 'options');
    var data = [120, 200, 150, 80, 70, 110, 120];

    // Max value of data
    var yMax = Math.max.apply(Math, data);

    // const dataBackground = data.map(() => yMax);
    var chart = window.echarts.init($echartBarWeeklySales);

    // Default options
    var getDefaultOptions = function getDefaultOptions() {
      return {
        tooltip: {
          trigger: 'axis',
          padding: [7, 10],
          formatter: '{b0} : {c0}',
          transitionDuration: 0,
          backgroundColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['100'],
          borderColor: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays()['300'],
          textStyle: {
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().dark
          },
          borderWidth: 1,
          position: function position(pos, params, dom, rect, size) {
            return (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.getPosition)(pos, params, dom, rect, size);
          }
        },
        xAxis: {
          type: 'category',
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          boundaryGap: false,
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            type: 'none'
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            type: 'none'
          }
        },
        series: [{
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10
          },
          barWidth: '5px',
          itemStyle: {
            barBorderRadius: 10,
            color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
          },
          data: data,
          z: 10,
          emphasis: {
            itemStyle: {
              color: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors().primary
            }
          }
        }],
        grid: {
          right: 5,
          left: 10,
          top: 0,
          bottom: 0
        }
      };
    };
    (0,_echarts_utils__WEBPACK_IMPORTED_MODULE_1__.echartSetOption)(chart, userOptions, getDefaultOptions);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weeklySalesInit);

/***/ }),

/***/ "./resources/js/chat.js":
/*!******************************!*\
  !*** ./resources/js/chat.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/*-----------------------------------------------
|   Chat
-----------------------------------------------*/
var chatInit = function chatInit() {
  var Events = {
    CLICK: 'click',
    SHOWN_BS_TAB: 'shown.bs.tab',
    KEYUP: 'keyup',
    EMOJI: 'emoji'
  };
  var Selector = {
    CHAT_SIDEBAR: '.chat-sidebar',
    CHAT_CONTACT: '.chat-contact',
    CHAT_CONTENT_SCROLL_AREA: '.chat-content-scroll-area',
    CHAT_CONTENT_SCROLL_AREA_ACTIVE: '.card-chat-pane.active .chat-content-scroll-area',
    CHAT_EMOJIAREA: '.chat-editor-area .emojiarea-editor',
    BTN_SEND: '.btn-send',
    EMOJIEAREA_EDITOR: '.emojiarea-editor',
    BTN_INFO: '.btn-info',
    CONVERSATION_INFO: '.conversation-info',
    CONTACTS_LIST_SHOW: '.contacts-list-show'
  };
  var ClassName = {
    UNREAD_MESSAGE: 'unread-message',
    TEXT_PRIMARY: 'text-primary',
    SHOW: 'show'
  };
  var DATA_KEY = {
    INDEX: 'index'
  };
  var $chatSidebar = document.querySelector(Selector.CHAT_SIDEBAR);
  var $chatContact = document.querySelectorAll(Selector.CHAT_CONTACT);
  var $chatEmojiarea = document.querySelector(Selector.CHAT_EMOJIAREA);
  var $btnSend = document.querySelector(Selector.BTN_SEND);
  var $currentChatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA);

  // Set scrollbar position
  var setScrollbarPosition = function setScrollbarPosition($chatArea) {
    if ($chatArea) {
      var scrollArea = $chatArea;
      scrollArea.scrollTop = $chatArea.scrollHeight;
    }
  };
  setTimeout(function () {
    setScrollbarPosition($currentChatArea);
  }, 700);
  document.querySelectorAll(Selector.CHAT_CONTACT).forEach(function (el) {
    el.addEventListener(Events.CLICK, function (e) {
      var $this = e.currentTarget;
      $this.classList.add('active');
      // Hide contact list sidebar on responsive
      window.innerWidth < 768 && !e.target.classList.contains('hover-actions') && ($chatSidebar.style.left = '-100%');

      // Remove unread-message class when read
      $this.classList.contains(ClassName.UNREAD_MESSAGE) && $this.classList.remove(ClassName.UNREAD_MESSAGE);
    });
  });
  $chatContact.forEach(function (el) {
    el.addEventListener(Events.SHOWN_BS_TAB, function () {
      $chatEmojiarea.innerHTML = '';
      $btnSend.classList.remove(ClassName.TEXT_PRIMARY);
      var TargetChatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE);
      setScrollbarPosition(TargetChatArea);
    });
  });

  // change send button color on

  if ($chatEmojiarea) {
    $chatEmojiarea.setAttribute('placeholder', 'Type your message');
    $chatEmojiarea.addEventListener(Events.KEYUP, function (e) {
      if (e.target.textContent.length <= 0) {
        $btnSend.classList.remove(ClassName.TEXT_PRIMARY);
        if (e.target.innerHTML === '<br>') {
          e.target.innerHTML = '';
        }
      } else {
        $btnSend.classList.add(ClassName.TEXT_PRIMARY);
      }
      var TargetChatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE);
      setScrollbarPosition(TargetChatArea);
    });
  }
  // Open conversation info sidebar
  $chatEmojiarea && document.querySelectorAll(Selector.BTN_INFO).forEach(function (el) {
    el.addEventListener(Events.CLICK, function (e) {
      var $this = e.currentTarget;
      var dataIndex = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData($this, DATA_KEY.INDEX);
      var $info = document.querySelector("".concat(Selector.CONVERSATION_INFO, "[data-").concat(DATA_KEY.INDEX, "='").concat(dataIndex, "']"));
      $info.classList.toggle(ClassName.SHOW);
    });
  });

  // Show contact list sidebar on responsive
  document.querySelectorAll(Selector.CONTACTS_LIST_SHOW).forEach(function (el) {
    el.addEventListener(Events.CLICK, function () {
      $chatSidebar.style.left = 0;
    });
  });

  // Set scrollbar area height on resize
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].resize(function () {
    var TargetChatArea = document.querySelector(Selector.CHAT_CONTENT_SCROLL_AREA_ACTIVE);
    setScrollbarPosition(TargetChatArea);
  });

  // Emoji append in message text
  $chatEmojiarea && window.picker.on(Events.EMOJI, function (selection) {
    document.querySelector(Selector.EMOJIEAREA_EDITOR).innerHTML += selection.emoji;
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatInit);

/***/ }),

/***/ "./resources/js/choices.js":
/*!*********************************!*\
  !*** ./resources/js/choices.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* -------------------------------------------------------------------------- */
/*                                   choices                                   */
/* -------------------------------------------------------------------------- */
var choicesInit = function choicesInit() {
  if (window.Choices) {
    var elements = document.querySelectorAll('.js-choice');
    elements.forEach(function (item) {
      var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(item, 'options');
      var choices = new window.Choices(item, _objectSpread({
        itemSelectText: ''
      }, userOptions));
      var needsValidation = document.querySelectorAll('.needs-validation');
      needsValidation.forEach(function (validationItem) {
        var selectFormValidation = function selectFormValidation() {
          validationItem.querySelectorAll('.choices').forEach(function (choicesItem) {
            var singleSelect = choicesItem.querySelector('.choices__list--single');
            var multipleSelect = choicesItem.querySelector('.choices__list--multiple');
            if (choicesItem.querySelector('[required]')) {
              if (singleSelect) {
                var _singleSelect$querySe;
                if (((_singleSelect$querySe = singleSelect.querySelector('.choices__item--selectable')) === null || _singleSelect$querySe === void 0 ? void 0 : _singleSelect$querySe.getAttribute('data-value')) !== '') {
                  choicesItem.classList.remove('invalid');
                  choicesItem.classList.add('valid');
                } else {
                  choicesItem.classList.remove('valid');
                  choicesItem.classList.add('invalid');
                }
              }
              //----- for multiple select only ----------
              if (multipleSelect) {
                if (choicesItem.getElementsByTagName('option').length) {
                  choicesItem.classList.remove('invalid');
                  choicesItem.classList.add('valid');
                } else {
                  choicesItem.classList.remove('valid');
                  choicesItem.classList.add('invalid');
                }
              }

              //------ select end ---------------
            }
          });
        };

        validationItem.addEventListener('submit', function () {
          selectFormValidation();
        });
        item.addEventListener('change', function () {
          selectFormValidation();
        });
      });
      return choices;
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choicesInit);

/***/ }),

/***/ "./resources/js/config.js":
/*!********************************!*\
  !*** ./resources/js/config.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                              Config                                        */
/* -------------------------------------------------------------------------- */
var CONFIG = {
  isNavbarVerticalCollapsed: false,
  theme: 'light',
  isRTL: false,
  isFluid: false,
  navbarStyle: 'transparent',
  navbarPosition: 'vertical'
};
Object.keys(CONFIG).forEach(function (key) {
  if (localStorage.getItem(key) === null) {
    localStorage.setItem(key, CONFIG[key]);
  }
});
if (!!JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'))) {
  document.documentElement.classList.add('navbar-vertical-collapsed');
}
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);

/***/ }),

/***/ "./resources/js/cookie-notice.js":
/*!***************************************!*\
  !*** ./resources/js/cookie-notice.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/*-----------------------------------------------
|   Cookie notice
-----------------------------------------------*/
var cookieNoticeInit = function cookieNoticeInit() {
  var Selector = {
    NOTICE: '.notice',
    DATA_TOGGLE_Notice: '[data-bs-toggle="notice"]'
  };
  var Events = {
    CLICK: 'click',
    HIDDEN_BS_TOAST: 'hidden.bs.toast'
  };
  var DataKeys = {
    OPTIONS: 'options'
  };
  var ClassNames = {
    HIDE: 'hide'
  };
  var notices = document.querySelectorAll(Selector.NOTICE);
  var showNotice = true;
  notices.forEach(function (item) {
    var notice = new window.bootstrap.Toast(item);
    var options = _objectSpread({
      autoShow: false,
      autoShowDelay: 0,
      showOnce: false,
      cookieExpireTime: 3600000
    }, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(item, DataKeys.OPTIONS));
    var showOnce = options.showOnce,
      autoShow = options.autoShow,
      autoShowDelay = options.autoShowDelay;
    if (showOnce) {
      var hasNotice = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getCookie('notice');
      showNotice = hasNotice === null;
    }
    if (autoShow && showNotice) {
      setTimeout(function () {
        notice.show();
      }, autoShowDelay);
    }
    item.addEventListener(Events.HIDDEN_BS_TOAST, function (e) {
      var el = e.currentTarget;
      var toastOptions = _objectSpread({
        cookieExpireTime: 3600000,
        showOnce: false
      }, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, DataKeys.OPTIONS));
      toastOptions.showOnce && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setCookie('notice', false, toastOptions.cookieExpireTime);
    });
  });
  var btnNoticeToggle = document.querySelector(Selector.DATA_TOGGLE_Notice);
  btnNoticeToggle && btnNoticeToggle.addEventListener(Events.CLICK, function (_ref) {
    var currentTarget = _ref.currentTarget;
    var id = currentTarget.getAttribute('href');
    var notice = new window.bootstrap.Toast(document.querySelector(id));

    /*eslint-disable-next-line*/
    var el = notice._element;
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(el, ClassNames.HIDE) ? notice.show() : notice.hide();
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cookieNoticeInit);

/***/ }),

/***/ "./resources/js/copy-link.js":
/*!***********************************!*\
  !*** ./resources/js/copy-link.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                                  Copy LinK                                 */
/* -------------------------------------------------------------------------- */

var copyLink = function copyLink() {
  var copyLinkModal = document.getElementById('copyLinkModal');
  copyLinkModal && copyLinkModal.addEventListener('shown.bs.modal', function () {
    var invitationLink = document.querySelector('.invitation-link');
    invitationLink.select();
  });
  var copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons && copyButtons.forEach(function (button) {
    var tooltip = new window.bootstrap.Tooltip(button);
    button.addEventListener('mouseover', function () {
      return tooltip.show();
    });
    button.addEventListener('mouseleave', function () {
      return tooltip.hide();
    });
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      var el = e.target;
      el.setAttribute('data-original-title', 'Copied');
      tooltip.show();
      el.setAttribute('data-original-title', 'Copy to clipboard');
      tooltip.update();
      var inputID = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'copy');
      var input = document.querySelector(inputID);
      input.select();
      document.execCommand('copy');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyLink);

/***/ }),

/***/ "./resources/js/countup.js":
/*!*********************************!*\
  !*** ./resources/js/countup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["endValue"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* -------------------------------------------------------------------------- */
/*                                  Count Up                                  */
/* -------------------------------------------------------------------------- */

var countupInit = function countupInit() {
  if (window.countUp) {
    var countups = document.querySelectorAll('[data-countup]');
    countups.forEach(function (node) {
      var _utils$getData = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(node, 'countup'),
        endValue = _utils$getData.endValue,
        options = _objectWithoutProperties(_utils$getData, _excluded);
      var countUp = new window.countUp.CountUp(node, endValue, _objectSpread({
        duration: 5
      }, options));
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countupInit);

/***/ }),

/***/ "./resources/js/detector.js":
/*!**********************************!*\
  !*** ./resources/js/detector.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");

/* -------------------------------------------------------------------------- */
/*                                  Detector                                  */
/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
  var _window = window,
    is = _window.is;
  var html = document.querySelector('html');
  is.opera() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'opera');
  is.mobile() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'mobile');
  is.firefox() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'firefox');
  is.safari() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'safari');
  is.ios() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'ios');
  is.iphone() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'iphone');
  is.ipad() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'ipad');
  is.ie() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'ie');
  is.edge() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'edge');
  is.chrome() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'chrome');
  is.mac() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'osx');
  is.windows() && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'windows');
  navigator.userAgent.match('CriOS') && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.addClass)(html, 'chrome');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (detectorInit);

/***/ }),

/***/ "./resources/js/draggable.js":
/*!***********************************!*\
  !*** ./resources/js/draggable.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* -------------------------------------------------------------------------- */
/*                                  Draggable                                 */
/* -------------------------------------------------------------------------- */


var draggableInit = function draggableInit() {
  var Selectors = {
    BODY: 'body',
    KANBAN_CONTAINER: '.kanban-container',
    KABNBAN_COLUMN: '.kanban-column',
    KANBAN_ITEMS_CONTAINER: '.kanban-items-container',
    KANBAN_ITEM: '.kanban-item',
    ADD_CARD_FORM: '.add-card-form'
  };
  var Events = {
    DRAG_START: 'drag:start',
    DRAG_STOP: 'drag:stop'
  };
  var ClassNames = {
    FORM_ADDED: 'form-added'
  };
  var columns = document.querySelectorAll(Selectors.KABNBAN_COLUMN);
  var columnContainers = document.querySelectorAll(Selectors.KANBAN_ITEMS_CONTAINER);
  var container = document.querySelector(Selectors.KANBAN_CONTAINER);
  if (!!columnContainers.length) {
    // Initialize Sortable
    var sortable = new window.Draggable.Sortable(columnContainers, {
      draggable: Selectors.KANBAN_ITEM,
      delay: 200,
      mirror: {
        appendTo: Selectors.BODY,
        constrainDimensions: true
      },
      scrollable: {
        draggable: Selectors.KANBAN_ITEM,
        scrollableElements: [].concat(_toConsumableArray(columnContainers), [container])
      }
    });

    // Hide form when drag start
    sortable.on(Events.DRAG_START, function () {
      columns.forEach(function (column) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(column, ClassNames.FORM_ADDED) && column.classList.remove(ClassNames.FORM_ADDED);
      });
    });

    // Place forms and other contents bottom of the sortable container
    sortable.on(Events.DRAG_STOP, function (_ref) {
      var el = _ref.data.source;
      var columnContainer = el.closest(Selectors.KANBAN_ITEMS_CONTAINER);
      var form = columnContainer.querySelector(Selectors.ADD_CARD_FORM);
      !el.nextElementSibling && columnContainer.appendChild(form);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (draggableInit);

/***/ }),

/***/ "./resources/js/dropdown-menu.js":
/*!***************************************!*\
  !*** ./resources/js/dropdown-menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*-----------------------------------------------
|   Dashboard Table dropdown
-----------------------------------------------*/
var dropdownMenuInit = function dropdownMenuInit() {
  // Only for ios
  if (window.is.ios()) {
    var Event = {
      SHOWN_BS_DROPDOWN: 'shown.bs.dropdown',
      HIDDEN_BS_DROPDOWN: 'hidden.bs.dropdown'
    };
    var Selector = {
      TABLE_RESPONSIVE: '.table-responsive',
      DROPDOWN_MENU: '.dropdown-menu'
    };
    document.querySelectorAll(Selector.TABLE_RESPONSIVE).forEach(function (table) {
      table.addEventListener(Event.SHOWN_BS_DROPDOWN, function (e) {
        var t = e.currentTarget;
        if (t.scrollWidth > t.clientWidth) {
          t.style.paddingBottom = e.target.nextElementSibling.clientHeight + 'px';
        }
      });
      table.addEventListener(Event.HIDDEN_BS_DROPDOWN, function (e) {
        e.currentTarget.style.paddingBottom = '';
      });
    });
  }
};

// Reference
// https://github.com/twbs/bootstrap/issues/11037#issuecomment-274870381

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownMenuInit);

/***/ }),

/***/ "./resources/js/dropdown-on-hover.js":
/*!*******************************************!*\
  !*** ./resources/js/dropdown-on-hover.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                           Open dropdown on hover                           */
/* -------------------------------------------------------------------------- */

var dropdownOnHover = function dropdownOnHover() {
  var navbarArea = document.querySelector("[data-top-nav-dropdowns]");
  if (navbarArea) {
    navbarArea.addEventListener("mouseover", function (e) {
      if (e.target.className.includes("dropdown-toggle") && window.innerWidth > 992) {
        var dropdownInstance = new window.bootstrap.Dropdown(e.target);

        /* eslint-disable no-underscore-dangle */
        dropdownInstance._element.classList.add('show');
        dropdownInstance._menu.classList.add('show');
        dropdownInstance._menu.setAttribute('data-bs-popper', 'none');
        e.target.parentNode.addEventListener("mouseleave", function () {
          dropdownInstance.hide();
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownOnHover);

/***/ }),

/***/ "./resources/js/dropzone.js":
/*!**********************************!*\
  !*** ./resources/js/dropzone.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/* eslint-disable */


/*-----------------------------------------------
|   Dropzone
-----------------------------------------------*/

window.Dropzone ? window.Dropzone.autoDiscover = false : '';
var dropzoneInit = function dropzoneInit() {
  var merge = window._.merge;
  var Selector = {
    DROPZONE: '[data-dropzone]',
    DZ_ERROR_MESSAGE: '.dz-error-message',
    DZ_PREVIEW: '.dz-preview',
    DZ_PROGRESS: '.dz-preview .dz-preview-cover .dz-progress',
    DZ_PREVIEW_COVER: '.dz-preview .dz-preview-cover'
  };
  var ClassName = {
    DZ_FILE_PROCESSING: 'dz-file-processing',
    DZ_FILE_COMPLETE: 'dz-file-complete',
    DZ_COMPLETE: 'dz-complete',
    DZ_PROCESSING: 'dz-processing'
  };
  var DATA_KEY = {
    OPTIONS: 'options'
  };
  var Events = {
    ADDED_FILE: 'addedfile',
    REMOVED_FILE: 'removedfile',
    COMPLETE: 'complete'
  };
  var dropzones = document.querySelectorAll(Selector.DROPZONE);
  !!dropzones.length && dropzones.forEach(function (item) {
    var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(item, DATA_KEY.OPTIONS);
    userOptions = userOptions ? userOptions : {};
    var data = userOptions.data ? userOptions.data : {};
    var options = merge({
      url: '/assets/php/',
      addRemoveLinks: false,
      previewsContainer: item.querySelector(Selector.DZ_PREVIEW),
      previewTemplate: item.querySelector(Selector.DZ_PREVIEW).innerHTML,
      thumbnailWidth: null,
      thumbnailHeight: null,
      maxFilesize: 20,
      autoProcessQueue: false,
      filesizeBase: 1000,
      init: function init() {
        var thisDropzone = this;
        if (data.length) {
          data.forEach(function (v) {
            var mockFile = {
              name: v.name,
              size: v.size
            };
            thisDropzone.options.addedfile.call(thisDropzone, mockFile);
            thisDropzone.options.thumbnail.call(thisDropzone, mockFile, "".concat(v.url, "/").concat(v.name));
          });
        }
        thisDropzone.on(Events.ADDED_FILE, function addedfile() {
          if ('maxFiles' in userOptions) {
            if (userOptions.maxFiles === 1 && item.querySelectorAll(Selector.DZ_PREVIEW_COVER).length > 1) {
              item.querySelector(Selector.DZ_PREVIEW_COVER).remove();
            }
            if (userOptions.maxFiles === 1 && this.files.length > 1) {
              this.removeFile(this.files[0]);
            }
          }
        });
      },
      error: function error(file, message) {
        if (file.previewElement) {
          file.previewElement.classList.add('dz-error');
          if (typeof message !== 'string' && message.error) {
            message = message.error;
          }
          var _iterator = _createForOfIteratorHelper(file.previewElement.querySelectorAll('[data-dz-errormessage]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var node = _step.value;
              node.textContent = message;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }, userOptions);
    // eslint-disable-next-line
    item.querySelector(Selector.DZ_PREVIEW).innerHTML = '';
    var dropzone = new window.Dropzone(item, options);
    dropzone.on(Events.ADDED_FILE, function () {
      if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
        item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_FILE_COMPLETE);
      }
      item.classList.add(ClassName.DZ_FILE_PROCESSING);
    });
    dropzone.on(Events.REMOVED_FILE, function () {
      if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
        item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_PROCESSING);
      }
      item.classList.add(ClassName.DZ_FILE_COMPLETE);
    });
    dropzone.on(Events.COMPLETE, function () {
      if (item.querySelector(Selector.DZ_PREVIEW_COVER)) {
        item.querySelector(Selector.DZ_PREVIEW_COVER).classList.remove(ClassName.DZ_PROCESSING);
      }
      item.classList.add(ClassName.DZ_FILE_COMPLETE);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropzoneInit);

/***/ }),

/***/ "./resources/js/form-validation.js":
/*!*****************************************!*\
  !*** ./resources/js/form-validation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                               from-validation                              */
/* -------------------------------------------------------------------------- */

var formValidationInit = function formValidationInit() {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formValidationInit);

/***/ }),

/***/ "./resources/js/fullcalendar.js":
/*!**************************************!*\
  !*** ./resources/js/fullcalendar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* -------------------------------------------------------------------------- */
/*                                FullCalendar                                */
/* -------------------------------------------------------------------------- */


var merge = window._.merge;
var renderCalendar = function renderCalendar(el, option) {
  var _document$querySelect;
  var options = merge({
    initialView: 'dayGridMonth',
    editable: true,
    direction: document.querySelector('html').getAttribute('dir'),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    buttonText: {
      month: 'Month',
      week: 'Week',
      day: 'Day'
    }
  }, option);
  var calendar = new window.FullCalendar.Calendar(el, options);
  calendar.render();
  (_document$querySelect = document.querySelector('.navbar-vertical-toggle')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('navbar.vertical.toggle', function () {
    return calendar.updateSize();
  });
  return calendar;
};
var fullCalendarInit = function fullCalendarInit() {
  var calendars = document.querySelectorAll('[data-calendar]');
  calendars.forEach(function (item) {
    var options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(item, 'calendar');
    renderCalendar(item, options);
  });
};
var fullCalendar = {
  renderCalendar: renderCalendar,
  fullCalendarInit: fullCalendarInit
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullCalendar);

/***/ }),

/***/ "./resources/js/glightbox.js":
/*!***********************************!*\
  !*** ./resources/js/glightbox.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                 Glightbox                                */
/* -------------------------------------------------------------------------- */

var glightboxInit = function glightboxInit() {
  if (window.GLightbox) {
    window.GLightbox({
      selector: '[data-gallery]'
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (glightboxInit);

/***/ }),

/***/ "./resources/js/googleMap.js":
/*!***********************************!*\
  !*** ./resources/js/googleMap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");

/*-----------------------------------------------
|   Gooogle Map
-----------------------------------------------*/

function initMap() {
  var themeController = document.body;
  var $googlemaps = document.querySelectorAll(".googlemap");
  if ($googlemaps.length && window.google) {
    // Visit https://snazzymaps.com/ for more themes
    var mapStyles = {
      Default: [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#e9e9e9"
        }, {
          lightness: 17
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
          color: "#f5f5f5"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
          color: "#ffffff"
        }, {
          lightness: 17
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#ffffff"
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          color: "#ffffff"
        }, {
          lightness: 18
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          color: "#ffffff"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#f5f5f5"
        }, {
          lightness: 21
        }]
      }, {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#dedede"
        }, {
          lightness: 21
        }]
      }, {
        elementType: "labels.text.stroke",
        stylers: [{
          visibility: "on"
        }, {
          color: "#ffffff"
        }, {
          lightness: 16
        }]
      }, {
        elementType: "labels.text.fill",
        stylers: [{
          saturation: 36
        }, {
          color: "#333333"
        }, {
          lightness: 40
        }]
      }, {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#f2f2f2"
        }, {
          lightness: 19
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
          color: "#fefefe"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#fefefe"
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }],
      Gray: [{
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
          saturation: 36
        }, {
          color: "#000000"
        }, {
          lightness: 40
        }]
      }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
          visibility: "on"
        }, {
          color: "#000000"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 21
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 17
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 18
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 19
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 17
        }]
      }],
      Midnight: [{
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#ffffff"
        }]
      }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 13
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#144b53"
        }, {
          lightness: 14
        }, {
          weight: 1.4
        }]
      }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
          color: "#08304b"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#0c4152"
        }, {
          lightness: 5
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#0b434f"
        }, {
          lightness: 25
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#0b3d51"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }]
      }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          color: "#146474"
        }]
      }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
          color: "#021019"
        }]
      }],
      Hopper: [{
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          hue: "#165c64"
        }, {
          saturation: 34
        }, {
          lightness: -69
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
          hue: "#b7caaa"
        }, {
          saturation: -14
        }, {
          lightness: -18
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "landscape.man_made",
        elementType: "all",
        stylers: [{
          hue: "#cbdac1"
        }, {
          saturation: -6
        }, {
          lightness: -9
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          hue: "#8d9b83"
        }, {
          saturation: -89
        }, {
          lightness: -12
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          hue: "#d4dad0"
        }, {
          saturation: -88
        }, {
          lightness: 54
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          hue: "#bdc5b6"
        }, {
          saturation: -89
        }, {
          lightness: -3
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          hue: "#bdc5b6"
        }, {
          saturation: -89
        }, {
          lightness: -26
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          hue: "#c17118"
        }, {
          saturation: 61
        }, {
          lightness: -45
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "poi.park",
        elementType: "all",
        stylers: [{
          hue: "#8ba975"
        }, {
          saturation: -46
        }, {
          lightness: -28
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          hue: "#a43218"
        }, {
          saturation: 74
        }, {
          lightness: -51
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [{
          hue: "#ffffff"
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [{
          hue: "#ffffff"
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: "off"
        }]
      }, {
        featureType: "administrative.locality",
        elementType: "labels",
        stylers: [{
          hue: "#ffffff"
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: "off"
        }]
      }, {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [{
          hue: "#ffffff"
        }, {
          saturation: 0
        }, {
          lightness: 100
        }, {
          visibility: "off"
        }]
      }, {
        featureType: "administrative",
        elementType: "all",
        stylers: [{
          hue: "#3a3935"
        }, {
          saturation: 5
        }, {
          lightness: -57
        }, {
          visibility: "off"
        }]
      }, {
        featureType: "poi.medical",
        elementType: "geometry",
        stylers: [{
          hue: "#cba923"
        }, {
          saturation: 50
        }, {
          lightness: -46
        }, {
          visibility: "on"
        }]
      }],
      Beard: [{
        featureType: "poi.business",
        elementType: "labels.text",
        stylers: [{
          visibility: "on"
        }, {
          color: "#333333"
        }]
      }],
      AssassianCreed: [{
        featureType: "all",
        elementType: "all",
        stylers: [{
          visibility: "on"
        }]
      }, {
        featureType: "all",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }, {
          saturation: "-100"
        }]
      }, {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{
          saturation: 36
        }, {
          color: "#000000"
        }, {
          lightness: 40
        }, {
          visibility: "off"
        }]
      }, {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [{
          visibility: "off"
        }, {
          color: "#000000"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 17
        }, {
          weight: 1.2
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 20
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [{
          color: "#4d6059"
        }]
      }, {
        featureType: "landscape",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4d6059"
        }]
      }, {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{
          color: "#4d6059"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          lightness: 21
        }]
      }, {
        featureType: "poi",
        elementType: "geometry.fill",
        stylers: [{
          color: "#4d6059"
        }]
      }, {
        featureType: "poi",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#4d6059"
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          visibility: "on"
        }, {
          color: "#7f8d89"
        }]
      }, {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{
          color: "#7f8d89"
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{
          color: "#7f8d89"
        }, {
          lightness: 17
        }]
      }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#7f8d89"
        }, {
          lightness: 29
        }, {
          weight: 0.2
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 18
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [{
          color: "#7f8d89"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#7f8d89"
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 16
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{
          color: "#7f8d89"
        }]
      }, {
        featureType: "road.local",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#7f8d89"
        }]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
          color: "#000000"
        }, {
          lightness: 19
        }]
      }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
          color: "#2b3638"
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#2b3638"
        }, {
          lightness: 17
        }]
      }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{
          color: "#24282b"
        }]
      }, {
        featureType: "water",
        elementType: "geometry.stroke",
        stylers: [{
          color: "#24282b"
        }]
      }, {
        featureType: "water",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text",
        stylers: [{
          visibility: "off "
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "water",
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }],
      SubtleGray: [{
        featureType: "administrative",
        elementType: "all",
        stylers: [{
          saturation: "-100"
        }]
      }, {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
          saturation: -100
        }, {
          lightness: 65
        }, {
          visibility: "on"
        }]
      }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
          saturation: -100
        }, {
          lightness: "50"
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
          saturation: -100
        }]
      }, {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{
          visibility: "simplified"
        }]
      }, {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [{
          lightness: "30"
        }]
      }, {
        featureType: "road.local",
        elementType: "all",
        stylers: [{
          lightness: "40"
        }]
      }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          saturation: -100
        }, {
          visibility: "simplified"
        }]
      }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          hue: "#ffff00"
        }, {
          lightness: -25
        }, {
          saturation: -97
        }]
      }, {
        featureType: "water",
        elementType: "labels",
        stylers: [{
          lightness: -25
        }, {
          saturation: -100
        }]
      }],
      Tripitty: [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "administrative",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "landscape",
        elementType: "all",
        stylers: [{
          color: "#2c5ca5"
        }]
      }, {
        featureType: "poi",
        elementType: "all",
        stylers: [{
          color: "#2c5ca5"
        }]
      }, {
        featureType: "road",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "transit",
        elementType: "all",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: "water",
        elementType: "all",
        stylers: [{
          color: "#193a70"
        }, {
          visibility: "on"
        }]
      }],
      Cobalt: [{
        "featureType": "all",
        "elementType": "all",
        "stylers": [{
          "invert_lightness": true
        }, {
          "saturation": 10
        }, {
          "lightness": 30
        }, {
          "gamma": 0.5
        }, {
          "hue": "#435158"
        }]
      }]
    };
    $googlemaps.forEach(function (itm) {
      var latLng = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "latlng").split(",");
      var markerPopup = itm.innerHTML;
      var icon = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "icon") ? _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "icon") : "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png";
      var zoom = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "zoom");
      var mapElement = itm;
      var mapStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "theme");
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "theme") === "streetview") {
        var pov = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "pov");
        var _mapOptions = {
          position: {
            lat: Number(latLng[0]),
            lng: Number(latLng[1])
          },
          pov: pov,
          zoom: zoom,
          gestureHandling: "none",
          scrollwheel: false
        };
        return new window.google.maps.StreetViewPanorama(mapElement, _mapOptions);
      }
      var mapOptions = {
        zoom: zoom,
        scrollwheel: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(itm, "scrollwheel"),
        center: new window.google.maps.LatLng(latLng[0], latLng[1]),
        styles: localStorage.getItem("theme") === "dark" ? mapStyles.Cobalt : mapStyles[mapStyle]
      };
      var map = new window.google.maps.Map(mapElement, mapOptions);
      var infowindow = new window.google.maps.InfoWindow({
        content: markerPopup
      });
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(latLng[0], latLng[1]),
        icon: icon,
        map: map
      });
      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
      themeController && themeController.addEventListener("clickControl", function (_ref) {
        var _ref$detail = _ref.detail,
          control = _ref$detail.control,
          value = _ref$detail.value;
        if (control === "theme") {
          map.set("styles", value === "dark" ? mapStyles.Cobalt : mapStyles[mapStyle]);
        }
      });
      return null;
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMap);

/***/ }),

/***/ "./resources/js/icons.js":
/*!*******************************!*\
  !*** ./resources/js/icons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                           Icon copy to clipboard                           */
/* -------------------------------------------------------------------------- */

var iconCopiedInit = function iconCopiedInit() {
  var iconList = document.getElementById("icon-list");
  var iconCopiedToast = document.getElementById("icon-copied-toast");
  var iconCopiedToastInstance = new window.bootstrap.Toast(iconCopiedToast);
  if (iconList) {
    iconList.addEventListener("click", function (e) {
      var el = e.target;
      if (el.tagName === "INPUT") {
        el.select();
        el.setSelectionRange(0, 99999);
        document.execCommand("copy");
        iconCopiedToast.querySelector(".toast-body").innerHTML = "<span class=\"fw-black\">Copied:</span> <code>".concat(el.value, "</code>");
        iconCopiedToastInstance.show();
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconCopiedInit);

/***/ }),

/***/ "./resources/js/kanban.js":
/*!********************************!*\
  !*** ./resources/js/kanban.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* -------------------------------------------------------------------------- */
/*                                   Kanbah                                   */
/* -------------------------------------------------------------------------- */


var kanbanInit = function kanbanInit() {
  var Selectors = {
    KANBAN_COLUMN: '.kanban-column',
    KANBAN_ITEMS_CONTAINER: '.kanban-items-container',
    BTN_ADD_CARD: '.btn-add-card',
    COLLAPSE: '.collapse',
    ADD_LIST_FORM: '#addListForm',
    BTN_COLLAPSE_DISMISS: '[data-dismiss="collapse"]',
    BTN_FORM_HIDE: '[data-btn-form="hide"]',
    INPUT_ADD_CARD: '[data-input="add-card"]',
    INPUT_ADD_LIST: '[data-input="add-list"]'
  };
  var ClassNames = {
    FORM_ADDED: 'form-added',
    D_NONE: 'd-none'
  };
  var Events = {
    CLICK: 'click',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    SHOWN_BS_COLLAPSE: 'shown.bs.collapse'
  };
  var addCardButtons = document.querySelectorAll(Selectors.BTN_ADD_CARD);
  var formHideButtons = document.querySelectorAll(Selectors.BTN_FORM_HIDE);
  var addListForm = document.querySelector(Selectors.ADD_LIST_FORM);
  var collapseDismissButtons = document.querySelectorAll(Selectors.BTN_COLLAPSE_DISMISS);

  // Show add card form and place scrollbar bottom of the list
  addCardButtons && addCardButtons.forEach(function (button) {
    button.addEventListener(Events.CLICK, function (_ref) {
      var el = _ref.currentTarget;
      var column = el.closest(Selectors.KANBAN_COLUMN);
      var container = column.querySelector(Selectors.KANBAN_ITEMS_CONTAINER);
      var scrollHeight = container.scrollHeight;
      column.classList.add(ClassNames.FORM_ADDED);
      container.querySelector(Selectors.INPUT_ADD_CARD).focus();
      container.scrollTo({
        top: scrollHeight
      });
    });
  });

  // Remove add card form
  formHideButtons.forEach(function (button) {
    button.addEventListener(Events.CLICK, function (_ref2) {
      var el = _ref2.currentTarget;
      el.closest(Selectors.KANBAN_COLUMN).classList.remove(ClassNames.FORM_ADDED);
    });
  });
  if (addListForm) {
    // Hide add list button when the form is going to show
    addListForm.addEventListener(Events.SHOW_BS_COLLAPSE, function (_ref3) {
      var el = _ref3.currentTarget;
      var nextElement = el.nextElementSibling;
      nextElement && nextElement.classList.add(ClassNames.D_NONE);
    });

    // Focus input field when the form is shown
    addListForm.addEventListener(Events.SHOWN_BS_COLLAPSE, function (_ref4) {
      var el = _ref4.currentTarget;
      el.querySelector(Selectors.INPUT_ADD_LIST).focus();
    });
  }

  // Hide add list form when the dismiss button is clicked
  collapseDismissButtons.forEach(function (button) {
    button.addEventListener(Events.CLICK, function (_ref5) {
      var el = _ref5.currentTarget;
      var collapseElement = el.closest(Selectors.COLLAPSE);
      var collapse = window.bootstrap.Collapse.getInstance(collapseElement);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(collapseElement.nextElementSibling, ClassNames.D_NONE) && collapseElement.nextElementSibling.classList.remove(ClassNames.D_NONE);
      collapse.hide();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (kanbanInit);

/***/ }),

/***/ "./resources/js/leaflet-active-user.js":
/*!*********************************************!*\
  !*** ./resources/js/leaflet-active-user.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                   leaflet                                  */
/* -------------------------------------------------------------------------- */

var leafletActiveUserInit = function leafletActiveUserInit() {
  var points = [{
    lat: 53.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 52.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 51.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 53.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 54.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 55.958332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 53.908332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 53.008332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 53.158332,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 53.000032,
    "long": -1.080278,
    name: "Diana Meyer",
    street: "Slude Strand 27",
    location: "1130 Kobenhavn"
  }, {
    lat: 52.292001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 52.392001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 51.492001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 51.192001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 52.292001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 54.392001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 51.292001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 52.102001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 52.202001,
    "long": -2.22,
    name: "Anke Schroder",
    street: "Industrivej 54",
    location: "4140 Borup"
  }, {
    lat: 51.063202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.363202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.463202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.563202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.763202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.863202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.963202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.000202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.000202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.163202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 52.263202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 53.463202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 55.163202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.263202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.463202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.563202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.663202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.763202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.863202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 56.963202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 57.973202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 57.163202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.163202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.263202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.363202,
    "long": -1.308,
    name: "Tobias Vogel",
    street: "Mollebakken 33",
    location: "3650 Olstykke"
  }, {
    lat: 51.409,
    "long": -2.647,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.68,
    "long": -1.49,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 50.259998,
    "long": -5.051,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 54.906101,
    "long": -1.38113,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.383331,
    "long": -1.466667,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.483002,
    "long": -2.2931,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.509865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.109865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.209865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.309865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.409865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.609865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.709865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.809865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 51.909865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.109865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.209865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.309865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.409865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.509865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.609865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.709865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.809865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.909865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.519865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.529865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.539865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.549865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 52.549865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.109865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.209865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.319865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.329865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.409865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.559865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.619865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.629865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.639865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.649865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.669865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.669865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.719865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.739865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.749865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.759865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.769865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.769865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.819865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.829865,
    "long": -0.118092,
    name: "Richard Hendricks",
    street: "37 Seafield Place",
    location: "London"
  }, {
    lat: 53.483959,
    "long": -2.244644,
    name: "Ethel B. Brooks",
    street: "2576 Sun Valley Road"
  }, {
    lat: 40.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 39.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 38.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 37.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 40.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 41.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 42.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 43.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 44.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 45.737,
    "long": -73.923,
    name: "Marshall D. Lewis",
    street: "1489 Michigan Avenue",
    location: "Michigan"
  }, {
    lat: 46.7128,
    "long": 74.006,
    name: "Elizabeth C. Lyons",
    street: "4553 Kenwood Place",
    location: "Fort Lauderdale"
  }, {
    lat: 40.7128,
    "long": 74.1181,
    name: "Elizabeth C. Lyons",
    street: "4553 Kenwood Place",
    location: "Fort Lauderdale"
  }, {
    lat: 14.235,
    "long": 51.9253,
    name: "Ralph D. Wylie",
    street: "3186 Levy Court",
    location: "North Reading"
  }, {
    lat: 15.235,
    "long": 51.9253,
    name: "Ralph D. Wylie",
    street: "3186 Levy Court",
    location: "North Reading"
  }, {
    lat: 16.235,
    "long": 51.9253,
    name: "Ralph D. Wylie",
    street: "3186 Levy Court",
    location: "North Reading"
  }, {
    lat: 14.235,
    "long": 51.9253,
    name: "Ralph D. Wylie",
    street: "3186 Levy Court",
    location: "North Reading"
  }, {
    lat: 15.8267,
    "long": 47.9218,
    name: "Hope A. Atkins",
    street: "3715 Hillcrest Drive",
    location: "Seattle"
  }, {
    lat: 15.9267,
    "long": 47.9218,
    name: "Hope A. Atkins",
    street: "3715 Hillcrest Drive",
    location: "Seattle"
  }, {
    lat: 23.4425,
    "long": 58.4438,
    name: "Samuel R. Bailey",
    street: "2883 Raoul Wallenberg Place",
    location: "Cheshire"
  }, {
    lat: 23.5425,
    "long": 58.3438,
    name: "Samuel R. Bailey",
    street: "2883 Raoul Wallenberg Place",
    location: "Cheshire"
  }, {
    lat: -37.8927369333,
    "long": 175.4087452333,
    name: "Samuel R. Bailey",
    street: "3228 Glory Road",
    location: "Nashville"
  }, {
    lat: -38.9064188833,
    "long": 175.4441556833,
    name: "Samuel R. Bailey",
    street: "3228 Glory Road",
    location: "Nashville"
  }, {
    lat: -12.409874,
    "long": -65.596832,
    name: "Ann J. Perdue",
    street: "921 Ella Street",
    location: "Dublin"
  }, {
    lat: -22.090887,
    "long": -57.411827,
    name: "Jorge C. Woods",
    street: "4800 North Bend River Road",
    location: "Allen"
  }, {
    lat: -19.019585,
    "long": -65.261963,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: -16.500093,
    "long": -68.214684,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: -17.413977,
    "long": -66.165321,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: -16.489689,
    "long": -68.119293,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 54.766323,
    "long": 3.08603729,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 54.866323,
    "long": 3.08603729,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 49.537685,
    "long": 3.08603729,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 54.715424,
    "long": 0.509207,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 44.891666,
    "long": 10.136665,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: 48.078335,
    "long": 14.535004,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: -26.358055,
    "long": 27.398056,
    name: "Russ E. Panek",
    street: "4068 Hartland Avenue",
    location: "Appleton"
  }, {
    lat: -29.1,
    "long": 26.2167,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -29.883333,
    "long": 31.049999,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -26.266111,
    "long": 27.865833,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -29.087217,
    "long": 26.154898,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -33.958252,
    "long": 25.619022,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -33.977074,
    "long": 22.457581,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: -26.563404,
    "long": 27.844164,
    name: "Wilbur J. Dry",
    street: "2043 Jadewood Drive",
    location: "Northbrook"
  }, {
    lat: 51.21389,
    "long": -102.462776,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 52.321945,
    "long": -106.584167,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 50.288055,
    "long": -107.793892,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 52.7575,
    "long": -108.28611,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 50.393333,
    "long": -105.551941,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 50.930557,
    "long": -102.807777,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 52.856388,
    "long": -104.610001,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 52.289722,
    "long": -106.666664,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 52.201942,
    "long": -105.123055,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 53.278046,
    "long": -110.00547,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 49.13673,
    "long": -102.990959,
    name: "Joseph B. Poole",
    street: "3364 Lunetta Street",
    location: "Wichita Falls"
  }, {
    lat: 45.484531,
    "long": -73.597023,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.266666,
    "long": -71.900002,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.349998,
    "long": -72.51667,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 47.333332,
    "long": -79.433334,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.400002,
    "long": -74.033333,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.683334,
    "long": -73.433334,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 48.099998,
    "long": -77.783333,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.5,
    "long": -72.316666,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 46.349998,
    "long": -72.550003,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 48.119999,
    "long": -69.18,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.599998,
    "long": -75.25,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 46.099998,
    "long": -71.300003,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 45.700001,
    "long": -73.633331,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 47.68,
    "long": -68.879997,
    name: "Claudette D. Nowakowski",
    street: "3742 Farland Avenue",
    location: "San Antonio"
  }, {
    lat: 46.716667,
    "long": -79.099998,
    name: "299"
  }, {
    lat: 45.016666,
    "long": -72.099998,
    name: "299"
  }];
  var _window = window,
    L = _window.L;
  var mapContainer = document.getElementById("map");
  if (L && mapContainer) {
    var getFilterColor = function getFilterColor() {
      return localStorage.getItem("theme") === "dark" ? ["invert:98%", "grayscale:69%", "bright:89%", "contrast:111%", "hue:205deg", "saturate:1000%"] : ["bright:101%", "contrast:101%", "hue:23deg", "saturate:225%"];
    };
    var tileLayerTheme = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    var tiles = L.tileLayer.colorFilter(tileLayerTheme, {
      attribution: null,
      transparent: true,
      filter: getFilterColor()
    });
    var map = L.map("map", {
      center: L.latLng(10.737, 0),
      zoom: 0,
      layers: [tiles],
      minZoom: 1.3,
      zoomSnap: 0.5,
      dragging: !L.Browser.mobile,
      tap: !L.Browser.mobile
    });
    var mcg = L.markerClusterGroup({
      chunkedLoading: false,
      spiderfyOnMaxZoom: false
    });
    points.map(function (point) {
      var name = point.name,
        location = point.location,
        street = point.street;
      var icon = L.icon({
        iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAACXBIWXMAAAFgAAABYAEg2RPaAAADpElEQVRYCZ1XS1LbQBBtybIdiMEJKSpUqihgEW/xDdARyAnirOIl3MBH8NK7mBvkBpFv4Gy9IRSpFIQiRPyNfqkeZkY9HwmFt7Lm06+7p/vN2MmyDIrQ6QebALAHAD4AbFuWfQeAAACGs5H/w5jlsJJw4wMA+GhMFuMA99jIDJJOP+ihZwDQFmNuowWO1wS3viDXpdEdZPEc0odruj0EgN5s5H8tJOEEX8R3rbkMtcU34NTqhe5nSQTJ7Tkk80s6/Gk28scGiULguFBffgdufdEwWoQ0uoXo8hdAlooVH0REjISfwZSlyHGh0V5n6aHAtKTxXI5g6nQnMH0P4bEgwtR18Yw8Pj8QZ4ARUAI0Hl+fQZZGisGEBVwHr7XKzox57DXZ/ij8Cdwe2u057z9/wygOxRl4S2vSUHx1oucaMQGAHTrgtdag9mK5aN+Wx/uAAQ9Zenp/SRce4TpaNbQK4+sTcGqeTB/aIXv3XN5oj2VKqii++U0JunpZ8urxee4hvjqVc2hHpBDXuKKT9XMgVYJ1/1fPGSeaikzgmWWkMIi9bVf8UhotXxzORn5gWFchI8QyttlzjS0qpsaIGY2MMsujV/AUSdcY0dDpB6/EiOPYzclR1CI5mOez3ekHvrFLxa7cR5pTscfrXjk0Vhm5V2PqLUWnH3R5GbPGpMVD7E1ckXesKBQ7AS/vmQ1c0+kHuxpBj98lTCm8pbc5QRJRdZ6qHb/wGryXq3Lxszv+5gySuwvxueXySwYvHEjuQ9ofTGKYlrmK1EsCHMd5SoD7mZ1HHFCBHLNbMEshvrugqWLn01hpVVJhFgVGkDvK7hR6n2B+d9C7xsqWsbkqHv4cCsWezEb+o2SR+SFweUBxfA5wH7kShjKt2vWL57Px3GhIFEezkb8pxvUWHYhotAfCk2AtkEcxoOttrxUWDR5svb1emSQKj0WXK1HYIgFREbiBqmoZcB2RkbE+byMZiosorVgAZF1ID7yQhEs38wa7nUqNDezdlavC2HbBGSQkGgZ8uJVBmzeiKCRRpEa9ilWghORVeGB7BxeSKF5xqbFBkxBrFKUk/JHA7ppENQaCnCjthK+3opCEYyANztXmZN858cDYWSUSHk3A311GAZDvo6deNKUk1EsqnJoQlkYBNlmxQZeaMgmxoUokICoHDce351RCCiuKoirJWEgNOYvQplM2VCLhUqF7jf94rW9kHVUjQeheV4riv0i4ZOzzz/2y/+0KAOAfr4EE4HpCFhwAAAAASUVORK5CYII=\n        "
      });
      var marker = L.marker(new L.LatLng(point.lat, point["long"]), {
        icon: icon
      }, {
        name: name,
        location: location
      });
      var popupContent = "\n        <h6 class=\"mb-1\">".concat(name, "</h6>\n        <p class=\"m-0 text-500\">").concat(street, ", ").concat(location, "</p>\n      ");
      var popup = L.popup({
        minWidth: 180
      }).setContent(popupContent);
      marker.bindPopup(popup);
      mcg.addLayer(marker);
      return true;
    });
    map.addLayer(mcg);
    var themeController = document.body;
    themeController.addEventListener("clickControl", function (_ref) {
      var _ref$detail = _ref.detail,
        control = _ref$detail.control,
        value = _ref$detail.value;
      if (control === "theme") {
        tiles.updateFilter(value === "dark" ? ["invert:98%", "grayscale:69%", "bright:89%", "contrast:111%", "hue:205deg", "saturate:1000%"] : ["bright:101%", "contrast:101%", "hue:23deg", "saturate:225%"]);
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (leafletActiveUserInit);

/***/ }),

/***/ "./resources/js/list.js":
/*!******************************!*\
  !*** ./resources/js/list.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* -------------------------------------------------------------------------- */
/*                                 Data Table                                 */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */

var togglePaginationButtonDisable = function togglePaginationButtonDisable(button, disabled) {
  button.disabled = disabled;
  button.classList[disabled ? 'add' : 'remove']('disabled');
};
var listInit = function listInit() {
  if (window.List) {
    var lists = document.querySelectorAll('[data-list]');
    if (lists.length) {
      lists.forEach(function (el) {
        var options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'list');
        if (options.pagination) {
          options = _objectSpread(_objectSpread({}, options), {}, {
            pagination: _objectSpread({
              item: "<li><button class='page' type='button'></button></li>"
            }, options.pagination)
          });
        }
        var paginationButtonNext = el.querySelector('[data-list-pagination="next"]');
        var paginationButtonPrev = el.querySelector('[data-list-pagination="prev"]');
        var viewAll = el.querySelector('[data-list-view="*"]');
        var viewLess = el.querySelector('[data-list-view="less"]');
        var listInfo = el.querySelector('[data-list-info]');
        var listFilter = document.querySelector('[data-list-filter]');
        var list = new window.List(el, options);

        //-------fallback-----------

        list.on('updated', function (item) {
          var fallback = el.querySelector('.fallback') || document.getElementById(options.fallback);
          if (fallback) {
            if (item.matchingItems.length === 0) {
              fallback.classList.remove('d-none');
            } else {
              fallback.classList.add('d-none');
            }
          }
        });

        // ---------------------------------------

        var totalItem = list.items.length;
        var itemsPerPage = list.page;
        var btnDropdownClose = list.listContainer.querySelector('.btn-close');
        var pageQuantity = Math.ceil(totalItem / itemsPerPage);
        var numberOfcurrentItems = list.visibleItems.length;
        var pageCount = 1;
        btnDropdownClose && btnDropdownClose.addEventListener('search.close', function () {
          list.fuzzySearch('');
        });
        var updateListControls = function updateListControls() {
          listInfo && (listInfo.innerHTML = "".concat(list.i, " to ").concat(numberOfcurrentItems, " of ").concat(totalItem));
          paginationButtonPrev && togglePaginationButtonDisable(paginationButtonPrev, pageCount === 1);
          paginationButtonNext && togglePaginationButtonDisable(paginationButtonNext, pageCount === pageQuantity);
          if (pageCount > 1 && pageCount < pageQuantity) {
            togglePaginationButtonDisable(paginationButtonNext, false);
            togglePaginationButtonDisable(paginationButtonPrev, false);
          }
        };

        // List info
        updateListControls();
        if (paginationButtonNext) {
          paginationButtonNext.addEventListener('click', function (e) {
            e.preventDefault();
            pageCount = pageCount + 1;
            var nextInitialIndex = list.i + itemsPerPage;
            nextInitialIndex <= list.size() && list.show(nextInitialIndex, itemsPerPage);
            numberOfcurrentItems += list.visibleItems.length;
            updateListControls();
          });
        }
        if (paginationButtonPrev) {
          paginationButtonPrev.addEventListener('click', function (e) {
            e.preventDefault();
            pageCount = pageCount - 1;
            numberOfcurrentItems = numberOfcurrentItems - list.visibleItems.length;
            var prevItem = list.i - itemsPerPage;
            prevItem > 0 && list.show(prevItem, itemsPerPage);
            updateListControls();
          });
        }
        var toggleViewBtn = function toggleViewBtn() {
          viewLess.classList.toggle('d-none');
          viewAll.classList.toggle('d-none');
        };
        if (viewAll) {
          viewAll.addEventListener('click', function () {
            list.show(1, totalItem);
            pageQuantity = 1;
            pageCount = 1;
            numberOfcurrentItems = totalItem;
            updateListControls();
            toggleViewBtn();
          });
        }
        if (viewLess) {
          viewLess.addEventListener('click', function () {
            list.show(1, itemsPerPage);
            pageQuantity = Math.ceil(totalItem / itemsPerPage);
            pageCount = 1;
            numberOfcurrentItems = list.visibleItems.length;
            updateListControls();
            toggleViewBtn();
          });
        }
        // numbering pagination
        if (options.pagination) {
          el.querySelector('.pagination').addEventListener('click', function (e) {
            if (e.target.classList[0] === 'page') {
              pageCount = Number(e.target.innerText);
              updateListControls();
            }
          });
        }
        if (options.filter) {
          listFilter.addEventListener('change', function (e) {
            list.filter(function (item) {
              if (e.target.value === '') {
                return true;
              } else return item.values().payment.toLowerCase().includes(e.target.value.toLowerCase());
            });
          });
        }
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listInit);

/***/ }),

/***/ "./resources/js/lottie.js":
/*!********************************!*\
  !*** ./resources/js/lottie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var lottieInit = function lottieInit() {
  var lotties = document.querySelectorAll(".lottie");
  if (lotties.length) {
    lotties.forEach(function (item) {
      var options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(item, "options");
      window.bodymovin.loadAnimation(_objectSpread({
        container: item,
        path: "../img/animated-icons/warning-light.json",
        renderer: "svg",
        loop: true,
        autoplay: true,
        name: "Hello World"
      }, options));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lottieInit);

/***/ }),

/***/ "./resources/js/navbar-combo.js":
/*!**************************************!*\
  !*** ./resources/js/navbar-combo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                             Navbar Combo Layout                            */
/* -------------------------------------------------------------------------- */

var navbarComboInit = function navbarComboInit() {
  var Selector = {
    NAVBAR_VERTICAL: '.navbar-vertical',
    NAVBAR_TOP_COMBO: '[data-navbar-top="combo"]',
    COLLAPSE: '.collapse',
    DATA_MOVE_CONTAINER: '[data-move-container]',
    NAVBAR_NAV: '.navbar-nav',
    NAVBAR_VERTICAL_DIVIDER: '.navbar-vertical-divider'
  };
  var ClassName = {
    FLEX_COLUMN: 'flex-column'
  };
  var navbarVertical = document.querySelector(Selector.NAVBAR_VERTICAL);
  var navbarTopCombo = document.querySelector(Selector.NAVBAR_TOP_COMBO);
  var moveNavContent = function moveNavContent(windowWidth) {
    var navbarVerticalBreakpoint = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBreakpoint(navbarVertical);
    var navbarTopBreakpoint = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBreakpoint(navbarTopCombo);
    if (windowWidth < navbarTopBreakpoint) {
      var navbarCollapse = navbarTopCombo.querySelector(Selector.COLLAPSE);
      var navbarTopContent = navbarCollapse.innerHTML;
      if (navbarTopContent) {
        var targetID = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(navbarTopCombo, 'move-target');
        var targetElement = document.querySelector(targetID);
        navbarCollapse.innerHTML = '';
        targetElement.insertAdjacentHTML('afterend', "\n            <div data-move-container>\n              <div class='navbar-vertical-divider'>\n                <hr class='navbar-vertical-hr' />\n              </div>\n              ".concat(navbarTopContent, "\n            </div>\n          "));
        if (navbarVerticalBreakpoint < navbarTopBreakpoint) {
          var navbarNav = document.querySelector(Selector.DATA_MOVE_CONTAINER).querySelector(Selector.NAVBAR_NAV);
          _utils__WEBPACK_IMPORTED_MODULE_0__["default"].addClass(navbarNav, ClassName.FLEX_COLUMN);
        }
      }
    } else {
      var moveableContainer = document.querySelector(Selector.DATA_MOVE_CONTAINER);
      if (moveableContainer) {
        var _navbarNav = moveableContainer.querySelector(Selector.NAVBAR_NAV);
        _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(_navbarNav, ClassName.FLEX_COLUMN) && _navbarNav.classList.remove(ClassName.FLEX_COLUMN);
        moveableContainer.querySelector(Selector.NAVBAR_VERTICAL_DIVIDER).remove();
        navbarTopCombo.querySelector(Selector.COLLAPSE).innerHTML = moveableContainer.innerHTML;
        moveableContainer.remove();
      }
    }
  };
  moveNavContent(window.innerWidth);
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].resize(function () {
    return moveNavContent(window.innerWidth);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarComboInit);

/***/ }),

/***/ "./resources/js/navbar-darken-on-scroll.js":
/*!*************************************************!*\
  !*** ./resources/js/navbar-darken-on-scroll.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/* -------------------------------------------------------------------------- */
/*                         Navbar Darken on scroll                        */
/* -------------------------------------------------------------------------- */
var navbarDarkenOnScroll = function navbarDarkenOnScroll() {
  var Selector = {
    NAVBAR: '[data-navbar-darken-on-scroll]',
    NAVBAR_COLLAPSE: '.navbar-collapse',
    NAVBAR_TOGGLER: '.navbar-toggler'
  };
  var ClassNames = {
    COLLAPSED: 'collapsed'
  };
  var Events = {
    SCROLL: 'scroll',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDE_BS_COLLAPSE: 'hide.bs.collapse',
    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse'
  };
  var DataKey = {
    NAVBAR_DARKEN_ON_SCROLL: 'navbar-darken-on-scroll'
  };
  var navbar = document.querySelector(Selector.NAVBAR);
  function removeNavbarBgClass() {
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('bg-100');
  }
  var toggleThemeClass = function toggleThemeClass(theme) {
    if (theme === 'dark') {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
    } else {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
    }
  };
  function getBgClassName(name, defaultColorName) {
    var parent = document.documentElement;
    var allColors = _objectSpread(_objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getColors(parent)), _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays(parent));
    var colorName = Object.keys(allColors).includes(name) ? name : defaultColorName;
    var color = allColors[colorName];
    var bgClassName = "bg-".concat(colorName);
    return {
      color: color,
      bgClassName: bgClassName
    };
  }
  if (navbar) {
    var theme = localStorage.getItem('theme');
    var defaultColorName = theme === 'dark' ? '100' : 'dark';
    var name = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(navbar, DataKey.NAVBAR_DARKEN_ON_SCROLL);
    toggleThemeClass(theme);
    var themeController = document.body;
    themeController.addEventListener('clickControl', function (_ref) {
      var _ref$detail = _ref.detail,
        control = _ref$detail.control,
        value = _ref$detail.value;
      if (control === 'theme') {
        toggleThemeClass(value);
        defaultColorName = value === 'dark' ? '100' : 'dark';
        if (navbar.classList.contains('bg-dark') || navbar.classList.contains('bg-100')) {
          removeNavbarBgClass();
          navbar.classList.add(getBgClassName(name, defaultColorName).bgClassName);
        }
      }
    });
    var windowHeight = window.innerHeight;
    var html = document.documentElement;
    var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);
    var colorRgb = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hexToRgb(getBgClassName(name, defaultColorName).color);
    var _window$getComputedSt = window.getComputedStyle(navbar),
      backgroundImage = _window$getComputedSt.backgroundImage;
    var transition = 'background-color 0.35s ease';
    navbar.style.backgroundImage = 'none';
    // Change navbar background color on scroll
    window.addEventListener(Events.SCROLL, function () {
      var scrollTop = html.scrollTop;
      var alpha = scrollTop / windowHeight * 2;
      alpha >= 1 && (alpha = 1);
      navbar.style.backgroundColor = "rgba(".concat(colorRgb[0], ", ").concat(colorRgb[1], ", ").concat(colorRgb[2], ", ").concat(alpha, ")");
      navbar.style.backgroundImage = alpha > 0 || _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(navbarCollapse, 'show') ? backgroundImage : 'none';
    });

    // Toggle bg class on window resize
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].resize(function () {
      var breakPoint = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBreakpoint(navbar);
      if (window.innerWidth > breakPoint) {
        removeNavbarBgClass();
        navbar.style.backgroundImage = html.scrollTop ? backgroundImage : 'none';
        navbar.style.transition = 'none';
      } else if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(navbar.querySelector(Selector.NAVBAR_TOGGLER), ClassNames.COLLAPSED)) {
        removeNavbarBgClass();
        navbar.style.backgroundImage = backgroundImage;
      }
      if (window.innerWidth <= breakPoint) {
        navbar.style.transition = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(navbarCollapse, 'show') ? transition : 'none';
      }
    });
    navbarCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
      navbar.classList.add(getBgClassName(name, defaultColorName).bgClassName);
      navbar.style.backgroundImage = backgroundImage;
      navbar.style.transition = transition;
    });
    navbarCollapse.addEventListener(Events.HIDE_BS_COLLAPSE, function () {
      removeNavbarBgClass();
      !html.scrollTop && (navbar.style.backgroundImage = 'none');
    });
    navbarCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      navbar.style.transition = 'none';
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarDarkenOnScroll);

/***/ }),

/***/ "./resources/js/navbar-top.js":
/*!************************************!*\
  !*** ./resources/js/navbar-top.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                                 Navbar Top                                 */
/* -------------------------------------------------------------------------- */

var navbarTopDropShadow = function navbarTopDropShadow() {
  var Selector = {
    NAVBAR: '.navbar:not(.navbar-vertical)',
    NAVBAR_VERTICAL: '.navbar-vertical',
    NAVBAR_VERTICAL_CONTENT: '.navbar-vertical-content',
    NAVBAR_VERTICAL_COLLAPSE: 'navbarVerticalCollapse'
  };
  var ClassNames = {
    NAVBAR_GLASS_SHADOW: 'navbar-glass-shadow',
    SHOW: 'show'
  };
  var Events = {
    SCROLL: 'scroll',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDDEN_BS_COLLAPSE: 'hidden.bs.collapse'
  };
  var navDropShadowFlag = true;
  var $navbar = document.querySelector(Selector.NAVBAR);
  var $navbarVertical = document.querySelector(Selector.NAVBAR_VERTICAL);
  var $navbarVerticalContent = document.querySelector(Selector.NAVBAR_VERTICAL_CONTENT);
  var $navbarVerticalCollapse = document.getElementById(Selector.NAVBAR_VERTICAL_COLLAPSE);
  var html = document.documentElement;
  var breakPoint = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getBreakpoint($navbarVertical);
  var setDropShadow = function setDropShadow($elem) {
    if ($elem.scrollTop > 0 && navDropShadowFlag) {
      $navbar && $navbar.classList.add(ClassNames.NAVBAR_GLASS_SHADOW);
    } else {
      $navbar && $navbar.classList.remove(ClassNames.NAVBAR_GLASS_SHADOW);
    }
  };
  window.addEventListener(Events.SCROLL, function () {
    setDropShadow(html);
  });
  if ($navbarVerticalContent) {
    $navbarVerticalContent.addEventListener(Events.SCROLL, function () {
      if (window.outerWidth < breakPoint) {
        navDropShadowFlag = true;
        setDropShadow($navbarVerticalContent);
      }
    });
  }
  if ($navbarVerticalCollapse) {
    $navbarVerticalCollapse.addEventListener(Events.SHOW_BS_COLLAPSE, function () {
      if (window.outerWidth < breakPoint) {
        navDropShadowFlag = false;
        setDropShadow(html);
      }
    });
  }
  if ($navbarVerticalCollapse) {
    $navbarVerticalCollapse.addEventListener(Events.HIDDEN_BS_COLLAPSE, function () {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass($navbarVerticalCollapse, ClassNames.SHOW) && window.outerWidth < breakPoint) {
        navDropShadowFlag = false;
      } else {
        navDropShadowFlag = true;
      }
      setDropShadow(html);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarTopDropShadow);

/***/ }),

/***/ "./resources/js/navbar-vertical.js":
/*!*****************************************!*\
  !*** ./resources/js/navbar-vertical.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                               Navbar Vertical                              */
/* -------------------------------------------------------------------------- */

var handleNavbarVerticalCollapsed = function handleNavbarVerticalCollapsed() {
  var Selector = {
    HTML: 'html',
    NAVBAR_VERTICAL_TOGGLE: '.navbar-vertical-toggle',
    NAVBAR_VERTICAL_COLLAPSE: '.navbar-vertical .navbar-collapse',
    ECHART_RESPONSIVE: '[data-echart-responsive]'
  };
  var Events = {
    CLICK: 'click',
    MOUSE_OVER: 'mouseover',
    MOUSE_LEAVE: 'mouseleave',
    NAVBAR_VERTICAL_TOGGLE: 'navbar.vertical.toggle'
  };
  var ClassNames = {
    NAVBAR_VERTICAL_COLLAPSED: 'navbar-vertical-collapsed',
    NAVBAR_VERTICAL_COLLAPSED_HOVER: 'navbar-vertical-collapsed-hover'
  };
  var navbarVerticalToggle = document.querySelector(Selector.NAVBAR_VERTICAL_TOGGLE);
  var html = document.querySelector(Selector.HTML);
  var navbarVerticalCollapse = document.querySelector(Selector.NAVBAR_VERTICAL_COLLAPSE);
  if (navbarVerticalToggle) {
    navbarVerticalToggle.addEventListener(Events.CLICK, function (e) {
      navbarVerticalToggle.blur();
      html.classList.toggle(ClassNames.NAVBAR_VERTICAL_COLLAPSED);

      // Set collapse state on localStorage
      var isNavbarVerticalCollapsed = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getItemFromStore('isNavbarVerticalCollapsed');
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].setItemToStore('isNavbarVerticalCollapsed', !isNavbarVerticalCollapsed);
      var event = new CustomEvent(Events.NAVBAR_VERTICAL_TOGGLE);
      e.currentTarget.dispatchEvent(event);
    });
  }
  if (navbarVerticalCollapse) {
    navbarVerticalCollapse.addEventListener(Events.MOUSE_OVER, function () {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED)) {
        html.classList.add(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
      }
    });
    navbarVerticalCollapse.addEventListener(Events.MOUSE_LEAVE, function () {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].hasClass(html, ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER)) {
        html.classList.remove(ClassNames.NAVBAR_VERTICAL_COLLAPSED_HOVER);
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleNavbarVerticalCollapsed);

/***/ }),

/***/ "./resources/js/node.js":
/*!******************************!*\
  !*** ./resources/js/node.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/*-----------------------------------------------
|   DomNode
-----------------------------------------------*/
var DomNode = /*#__PURE__*/function () {
  function DomNode(node) {
    _classCallCheck(this, DomNode);
    this.node = node;
  }
  _createClass(DomNode, [{
    key: "addClass",
    value: function addClass(className) {
      this.isValidNode() && this.node.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.isValidNode() && this.node.classList.remove(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.isValidNode() && this.node.classList.toggle(className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      this.isValidNode() && this.node.classList.contains(className);
    }
  }, {
    key: "data",
    value: function data(key) {
      if (this.isValidNode()) {
        try {
          return JSON.parse(this.node.dataset[this.camelize(key)]);
        } catch (e) {
          return this.node.dataset[this.camelize(key)];
        }
      }
      return null;
    }
  }, {
    key: "attr",
    value: function attr(name) {
      return this.isValidNode() && this.node[name];
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.isValidNode() && this.node.setAttribute(name, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.isValidNode() && this.node.removeAttribute(name);
    }
  }, {
    key: "setProp",
    value: function setProp(name, value) {
      this.isValidNode() && (this.node[name] = value);
    }
  }, {
    key: "on",
    value: function on(event, cb) {
      this.isValidNode() && this.node.addEventListener(event, cb);
    }
  }, {
    key: "isValidNode",
    value: function isValidNode() {
      return !!this.node;
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "camelize",
    value: function camelize(str) {
      var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
      return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
    }
  }]);
  return DomNode;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DomNode);

/***/ }),

/***/ "./resources/js/plyr.js":
/*!******************************!*\
  !*** ./resources/js/plyr.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");

/*-----------------------------------------------
|   Inline Player [plyr]
-----------------------------------------------*/

var plyrInit = function plyrInit() {
  if (window.Plyr) {
    var plyrs = document.querySelectorAll(".player");
    plyrs.forEach(function (plyr) {
      var userOptions = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(plyr, "options");
      var defaultOptions = {
        captions: {
          active: true
        }
      };
      var options = window._.merge(defaultOptions, userOptions);
      return new window.Plyr(plyr, options);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plyrInit);

/***/ }),

/***/ "./resources/js/popover.js":
/*!*********************************!*\
  !*** ./resources/js/popover.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                   Popover                                  */
/* -------------------------------------------------------------------------- */

var popoverInit = function popoverInit() {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new window.bootstrap.Popover(popoverTriggerEl);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popoverInit);

/***/ }),

/***/ "./resources/js/progress.js":
/*!**********************************!*\
  !*** ./resources/js/progress.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                         Bootstrap Animated Progress                        */
/* -------------------------------------------------------------------------- */

var progressAnimationToggle = function progressAnimationToggle() {
  var animatedProgress = document.querySelectorAll('[data-progress-animation]');
  animatedProgress.forEach(function (progress) {
    progress.addEventListener('click', function (e) {
      var progressID = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(e.currentTarget, 'progressAnimation');
      var $progress = document.getElementById(progressID);
      $progress.classList.toggle('progress-bar-animated');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (progressAnimationToggle);

/***/ }),

/***/ "./resources/js/quantity.js":
/*!**********************************!*\
  !*** ./resources/js/quantity.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/*-----------------------------------------------
|  Quantity
-----------------------------------------------*/
var quantityInit = function quantityInit() {
  var Selector = {
    DATA_QUANTITY_BTN: '[data-quantity] [data-type]',
    DATA_QUANTITY: '[data-quantity]',
    DATA_QUANTITY_INPUT: '[data-quantity] input[type="number"]'
  };
  var Events = {
    CLICK: 'click'
  };
  var Attributes = {
    MIN: 'min'
  };
  var DataKey = {
    TYPE: 'type'
  };
  var quantities = document.querySelectorAll(Selector.DATA_QUANTITY_BTN);
  quantities.forEach(function (quantity) {
    quantity.addEventListener(Events.CLICK, function (e) {
      var el = e.currentTarget;
      var type = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, DataKey.TYPE);
      var numberInput = el.closest(Selector.DATA_QUANTITY).querySelector(Selector.DATA_QUANTITY_INPUT);
      var min = numberInput.getAttribute(Attributes.MIN);
      var value = parseInt(numberInput.value, 10);
      if (type === 'plus') {
        value += 1;
      } else {
        value = value > min ? value -= 1 : value;
      }
      numberInput.value = value;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quantityInit);

/***/ }),

/***/ "./resources/js/rater.js":
/*!*******************************!*\
  !*** ./resources/js/rater.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* -------------------------------------------------------------------------- */

/*                               Ratings                               */

/* -------------------------------------------------------------------------- */

var ratingInit = function ratingInit() {
  var raters = document.querySelectorAll("[data-rater]");
  raters.forEach(function (rater) {
    var options = _objectSpread({
      reverse: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getItemFromStore('isRTL'),
      starSize: 32,
      step: 0.5,
      element: rater,
      rateCallback: function rateCallback(rating, done) {
        this.setRating(rating);
        done();
      }
    }, _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(rater, "rater"));
    return window.raterJs(options);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ratingInit);

/***/ }),

/***/ "./resources/js/scroll-to-top.js":
/*!***************************************!*\
  !*** ./resources/js/scroll-to-top.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                                Scroll To Top                               */
/* -------------------------------------------------------------------------- */

var scrollToTop = function scrollToTop() {
  document.querySelectorAll('[data-anchor] > a, [data-scroll-to]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var _utils$getData;
      e.preventDefault();
      var el = e.target;
      var id = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'scroll-to') || el.getAttribute('href');
      window.scroll({
        top: (_utils$getData = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(el, 'offset-top')) !== null && _utils$getData !== void 0 ? _utils$getData : _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getOffset(document.querySelector(id)).top - 100,
        left: 0,
        behavior: 'smooth'
      });
      window.location.hash = id;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);

/***/ }),

/***/ "./resources/js/scroll.js":
/*!********************************!*\
  !*** ./resources/js/scroll.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */
// import utils from './utils';

var scrollInit = function scrollInit() {
  var dropdownElements = Array.from(document.querySelectorAll('[data-hide-on-body-scroll]'));
  if (window.innerWidth < 1200) {
    window.addEventListener('scroll', function () {
      dropdownElements.forEach(function (dropdownElement) {
        var instanceEl = window.bootstrap.Dropdown.getInstance(dropdownElement);
        instanceEl && instanceEl.hide();
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollInit);

/***/ }),

/***/ "./resources/js/scrollbar.js":
/*!***********************************!*\
  !*** ./resources/js/scrollbar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                 Scrollbars                                 */
/* -------------------------------------------------------------------------- */

var scrollbarInit = function scrollbarInit() {
  Array.prototype.forEach.call(document.querySelectorAll(".scrollbar-overlay"), function (el) {
    return new window.OverlayScrollbars(el, {
      scrollbars: {
        autoHide: "leave",
        autoHideDelay: 200
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollbarInit);

/***/ }),

/***/ "./resources/js/search.js":
/*!********************************!*\
  !*** ./resources/js/search.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var searchInit = function searchInit() {
  var Selectors = {
    SEARCH_DISMISS: '[data-bs-dismiss="search"]',
    DROPDOWN_TOGGLE: '[data-bs-toggle="dropdown"]',
    DROPDOWN_MENU: '.dropdown-menu',
    SEARCH_BOX: '.search-box',
    SEARCH_INPUT: '.search-input',
    SEARCH_TOGGLE: '[data-bs-toggle="search"]'
  };
  var ClassName = {
    SHOW: 'show'
  };
  var Attribute = {
    ARIA_EXPANDED: 'aria-expanded'
  };
  var Events = {
    CLICK: 'click',
    FOCUS: 'focus',
    SHOW_BS_DROPDOWN: 'show.bs.dropdown',
    SEARCH_CLOSE: 'search.close'
  };
  var hideSearchSuggestion = function hideSearchSuggestion(searchArea) {
    var el = searchArea.querySelector(Selectors.SEARCH_TOGGLE);
    var dropdownMenu = searchArea.querySelector(Selectors.DROPDOWN_MENU);
    el.setAttribute(Attribute.ARIA_EXPANDED, 'false');
    el.classList.remove(ClassName.SHOW);
    dropdownMenu.classList.remove(ClassName.SHOW);
  };
  var searchAreas = document.querySelectorAll(Selectors.SEARCH_BOX);
  var hideAllSearchAreas = function hideAllSearchAreas() {
    searchAreas.forEach(hideSearchSuggestion);
  };
  searchAreas.forEach(function (searchArea) {
    var input = searchArea.querySelector(Selectors.SEARCH_INPUT);
    var btnDropdownClose = searchArea.querySelector(Selectors.SEARCH_DISMISS);
    var dropdownMenu = searchArea.querySelector(Selectors.DROPDOWN_MENU);
    if (input) {
      input.addEventListener(Events.FOCUS, function () {
        hideAllSearchAreas();
        var el = searchArea.querySelector(Selectors.SEARCH_TOGGLE);
        el.setAttribute(Attribute.ARIA_EXPANDED, 'true');
        el.classList.add(ClassName.SHOW);
        dropdownMenu.classList.add(ClassName.SHOW);
      });
    }
    document.addEventListener(Events.CLICK, function (_ref) {
      var target = _ref.target;
      !searchArea.contains(target) && hideSearchSuggestion(searchArea);
    });
    btnDropdownClose && btnDropdownClose.addEventListener(Events.CLICK, function (e) {
      hideSearchSuggestion(searchArea);
      input.value = '';
      var event = new CustomEvent(Events.SEARCH_CLOSE);
      e.currentTarget.dispatchEvent(event);
    });
  });
  document.querySelectorAll(Selectors.DROPDOWN_TOGGLE).forEach(function (dropdown) {
    dropdown.addEventListener(Events.SHOW_BS_DROPDOWN, function () {
      hideAllSearchAreas();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchInit);

/***/ }),

/***/ "./resources/js/swiper.js":
/*!********************************!*\
  !*** ./resources/js/swiper.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/*-----------------------------------------------
|  Swiper
-----------------------------------------------*/
var swiperInit = function swiperInit() {
  var swipers = document.querySelectorAll('[data-swiper]');
  var navbarVerticalToggle = document.querySelector('.navbar-vertical-toggle');
  swipers.forEach(function (swiper) {
    var options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(swiper, 'swiper');
    var thumbsOptions = options.thumb;
    var thumbsInit;
    if (thumbsOptions) {
      var thumbImages = swiper.querySelectorAll('img');
      var slides = '';
      thumbImages.forEach(function (img) {
        slides += "\n          <div class='swiper-slide '>\n            <img class='img-fluid rounded mt-1' src=".concat(img.src, " alt=''/>\n          </div>\n        ");
      });
      var thumbs = document.createElement('div');
      thumbs.setAttribute('class', 'swiper-container thumb');
      thumbs.innerHTML = "<div class='swiper-wrapper'>".concat(slides, "</div>");
      if (thumbsOptions.parent) {
        var parent = document.querySelector(thumbsOptions.parent);
        parent.parentNode.appendChild(thumbs);
      } else {
        swiper.parentNode.appendChild(thumbs);
      }
      thumbsInit = new window.Swiper(thumbs, thumbsOptions);
    }
    var swiperNav = swiper.querySelector('.swiper-nav');
    var newSwiper = new window.Swiper(swiper, _objectSpread(_objectSpread({}, options), {}, {
      navigation: {
        nextEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-next'),
        prevEl: swiperNav === null || swiperNav === void 0 ? void 0 : swiperNav.querySelector('.swiper-button-prev')
      },
      thumbs: {
        swiper: thumbsInit
      }
    }));
    if (navbarVerticalToggle) {
      navbarVerticalToggle.addEventListener('navbar.vertical.toggle', function () {
        newSwiper.update();
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swiperInit);

/***/ }),

/***/ "./resources/js/theme-control.js":
/*!***************************************!*\
  !*** ./resources/js/theme-control.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node */ "./resources/js/node.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./resources/js/config.js");



/* -------------------------------------------------------------------------- */
/*                                Theme Control                               */
/* -------------------------------------------------------------------------- */
/* eslint-disable no-param-reassign */
/* eslint-disable */

var initialDomSetup = function initialDomSetup(element) {
  if (!element) return;
  var dataUrlDom = element.querySelector('[data-theme-control = "navbarPosition"]');
  var hasDataUrl = dataUrlDom ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(dataUrlDom, 'page-url') : null;
  element.querySelectorAll('[data-theme-control]').forEach(function (el) {
    var inputDataAttributeValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(el, 'theme-control');
    var localStorageValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getItemFromStore)(inputDataAttributeValue);
    if (inputDataAttributeValue === 'navbarStyle' && !hasDataUrl && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getItemFromStore)('navbarPosition') === 'top') {
      el.setAttribute('disabled', true);
    }
    if (el.type === 'checkbox') {
      if (inputDataAttributeValue === 'theme') {
        localStorageValue === 'dark' && el.setAttribute('checked', true);
      } else {
        localStorageValue && el.setAttribute('checked', true);
      }
    } else {
      var isChecked = localStorageValue === el.value;
      isChecked && el.setAttribute('checked', true);
    }
  });
};
var changeTheme = function changeTheme(element) {
  element.querySelectorAll('[data-theme-control = "theme"]').forEach(function (el) {
    var inputDataAttributeValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(el, 'theme-control');
    var localStorageValue = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getItemFromStore)(inputDataAttributeValue);
    if (el.type === 'checkbox') {
      localStorageValue === 'dark' ? el.checked = true : el.checked = false;
    } else {
      localStorageValue === el.value ? el.checked = true : el.checked = false;
    }
  });
};
var themeControl = function themeControl() {
  var themeController = new _node__WEBPACK_IMPORTED_MODULE_1__["default"](document.body);
  var navbarVertical = document.querySelector('.navbar-vertical');
  initialDomSetup(themeController.node);
  themeController.on('click', function (e) {
    var target = new _node__WEBPACK_IMPORTED_MODULE_1__["default"](e.target);
    if (target.data('theme-control')) {
      var control = target.data('theme-control');
      var value = e.target[e.target.type === 'radio' ? 'value' : 'checked'];
      if (control === 'theme') {
        typeof value === 'boolean' && (value = value ? 'dark' : 'light');
      }
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setItemToStore)(control, value);
      switch (control) {
        case 'theme':
          {
            document.documentElement.classList[value === 'dark' ? 'add' : 'remove']('dark');
            var clickControl = new CustomEvent('clickControl', {
              detail: {
                control: control,
                value: value
              }
            });
            e.currentTarget.dispatchEvent(clickControl);
            changeTheme(themeController.node);
            break;
          }
        case 'navbarStyle':
          {
            navbarVertical.classList.remove('navbar-card');
            navbarVertical.classList.remove('navbar-inverted');
            navbarVertical.classList.remove('navbar-vibrant');
            if (value !== 'transparent') {
              navbarVertical.classList.add("navbar-".concat(value));
            }
            break;
          }
        case 'navbarPosition':
          {
            var pageUrl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(target.node, 'page-url');
            !!pageUrl ? window.location.replace(pageUrl) : window.location.reload();
            break;
          }
        case 'reset':
          {
            Object.keys(_config__WEBPACK_IMPORTED_MODULE_2__["default"]).forEach(function (key) {
              localStorage.setItem(key, _config__WEBPACK_IMPORTED_MODULE_2__["default"][key]);
            });
            window.location.reload();
            break;
          }
        default:
          window.location.reload();
      }
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeControl);

/***/ }),

/***/ "./resources/js/tinymce.js":
/*!*********************************!*\
  !*** ./resources/js/tinymce.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                                   Tinymce                                  */
/* -------------------------------------------------------------------------- */

var tinymceInit = function tinymceInit() {
  if (window.tinymce) {
    var tinymces = document.querySelectorAll('.tinymce');
    if (tinymces.length) {
      window.tinymce.init({
        selector: '.tinymce',
        height: '50vh',
        menubar: false,
        skin: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].settings.tinymce.theme,
        content_style: ".mce-content-body { color: ".concat(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().black, " }"),
        mobile: {
          theme: 'mobile',
          toolbar: ['undo', 'bold']
        },
        statusbar: false,
        plugins: 'link,image,lists,table,media',
        toolbar: 'styleselect | bold italic link bullist numlist image blockquote table media undo redo',
        directionality: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getItemFromStore('isRTL') ? 'rtl' : 'ltr',
        theme_advanced_toolbar_align: 'center'
      });
    }
    var themeController = document.body;
    themeController && themeController.addEventListener('clickControl', function (_ref) {
      var control = _ref.detail.control;
      if (control === 'theme') {
        window.tinyMCE.editors.forEach(function (el) {
          el.dom.addStyle(".mce-content-body{color: ".concat(_utils__WEBPACK_IMPORTED_MODULE_0__["default"].getGrays().black, " !important;}"));
        });
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tinymceInit);

/***/ }),

/***/ "./resources/js/toast.js":
/*!*******************************!*\
  !*** ./resources/js/toast.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                    Toast                                   */
/* -------------------------------------------------------------------------- */

var toastInit = function toastInit() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'));
  toastElList.map(function (toastEl) {
    return new window.bootstrap.Toast(toastEl);
  });
  var liveToastBtn = document.getElementById('liveToastBtn');
  if (liveToastBtn) {
    var liveToast = new window.bootstrap.Toast(document.getElementById('liveToast'));
    liveToastBtn.addEventListener('click', function () {
      liveToast && liveToast.show();
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastInit);

/***/ }),

/***/ "./resources/js/tooltip.js":
/*!*********************************!*\
  !*** ./resources/js/tooltip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                   Tooltip                                  */
/* -------------------------------------------------------------------------- */
var tooltipInit = function tooltipInit() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new window.bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'hover'
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipInit);

/***/ }),

/***/ "./resources/js/treeview.js":
/*!**********************************!*\
  !*** ./resources/js/treeview.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* eslint-disable no-param-reassign */


/* -------------------------------------------------------------------------- */
/*                                   Treeview                                   */
/* -------------------------------------------------------------------------- */
var treeviewInit = function treeviewInit() {
  var Events = {
    CHANGE: 'change',
    SHOW_BS_COLLAPSE: 'show.bs.collapse',
    HIDE_BS_COLLAPSE: 'hide.bs.collapse'
  };
  var Selector = {
    TREEVIEW_ROW: '.treeview > li > .treeview-row,.treeview-list.collapse-show > li > .treeview-row',
    TREEVIEW: '.treeview',
    TREEVIEW_LIST: '.treeview-list',
    TOGGLE_ELEMENT: "[data-bs-toggle='collapse']",
    INPUT: 'input',
    TREEVIEW_LIST_ITEM: '.treeview-list-item',
    CHILD_SELECTOR: ':scope > li > .collapse.collapse-show'
  };
  var ClassName = {
    TREEVIEW: 'treeview',
    TREEVIEW_LIST: 'treeview-list',
    TREEVIEW_BORDER: 'treeview-border',
    TREEVIEW_BORDER_TRANSPARENT: 'treeview-border-transparent',
    COLLAPSE_SHOW: 'collapse-show',
    COLLAPSE_HIDDEN: 'collapse-hidden',
    TREEVIEW_ROW: 'treeview-row',
    TREEVIEW_ROW_ODD: 'treeview-row-odd',
    TREEVIEW_ROW_EVEN: 'treeview-row-even'
  };
  var treeviews = document.querySelectorAll(Selector.TREEVIEW);
  var makeStriped = function makeStriped(treeview) {
    var tags = Array.from(treeview.querySelectorAll(Selector.TREEVIEW_ROW));
    var uTags = tags.filter(function (tag) {
      var result = true;
      while (tag.parentElement) {
        if (tag.parentElement.classList.contains(ClassName.COLLAPSE_HIDDEN)) {
          result = false;
          break;
        }
        tag = tag.parentElement;
      }
      return result;
    });
    uTags.forEach(function (tag, index) {
      if (index % 2 === 0) {
        tag.classList.add(ClassName.TREEVIEW_ROW_EVEN);
        tag.classList.remove(ClassName.TREEVIEW_ROW_ODD);
      } else {
        tag.classList.add(ClassName.TREEVIEW_ROW_ODD);
        tag.classList.remove(ClassName.TREEVIEW_ROW_EVEN);
      }
    });
  };
  if (treeviews.length) {
    treeviews.forEach(function (treeview) {
      var options = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(treeview, 'options');
      var striped = options === null || options === void 0 ? void 0 : options.striped;
      var select = options === null || options === void 0 ? void 0 : options.select;
      if (striped) {
        makeStriped(treeview);
      }
      var collapseElementList = Array.from(treeview.querySelectorAll(Selector.TREEVIEW_LIST));
      var collapseListItem = Array.from(treeview.querySelectorAll(Selector.TREEVIEW_LIST_ITEM));
      collapseListItem.forEach(function (item) {
        var wholeRow = document.createElement('div');
        wholeRow.setAttribute('class', ClassName.TREEVIEW_ROW);
        item.prepend(wholeRow);
      });
      collapseElementList.forEach(function (collapse) {
        var collapseId = collapse.id;
        if (!striped) {
          collapse.classList.add(ClassName.TREEVIEW_BORDER);
        }
        collapse.addEventListener(Events.SHOW_BS_COLLAPSE, function (e) {
          e.target.classList.remove(ClassName.COLLAPSE_HIDDEN);
          e.target.classList.add(ClassName.COLLAPSE_SHOW);
          if (striped) {
            makeStriped(treeview);
          } else {
            e.path[2].classList.add(ClassName.TREEVIEW_BORDER_TRANSPARENT);
          }
        });
        collapse.addEventListener(Events.HIDE_BS_COLLAPSE, function (e) {
          e.target.classList.add(ClassName.COLLAPSE_HIDDEN);
          e.target.classList.remove(ClassName.COLLAPSE_SHOW);
          if (striped) {
            makeStriped(treeview);
          } else {
            var childs = e.path[2].querySelectorAll(Selector.CHILD_SELECTOR);
            if (!e.path[2].classList.contains(ClassName.TREEVIEW) && childs.length === 0) {
              e.path[2].classList.remove(ClassName.TREEVIEW_BORDER_TRANSPARENT);
            }
          }
        });
        if (collapse.dataset.show === 'true') {
          var parents = [collapse];
          while (collapse.parentElement) {
            if (collapse.parentElement.classList.contains(ClassName.TREEVIEW_LIST)) {
              parents.unshift(collapse.parentElement);
            }
            collapse = collapse.parentElement;
          }
          parents.forEach(function (collapseEl) {
            // eslint-disable-next-line no-new
            new window.bootstrap.Collapse(collapseEl, {
              show: true
            });
          });
        }
        if (select) {
          var inputElement = treeview.querySelector("input[data-target='#".concat(collapseId, "']"));
          inputElement.addEventListener(Events.CHANGE, function (e) {
            var childInputElements = Array.from(treeview.querySelector("#".concat(collapseId)).querySelectorAll(Selector.INPUT));
            childInputElements.forEach(function (input) {
              input.checked = e.target.checked;
            });
          });
        }
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (treeviewInit);

/***/ }),

/***/ "./resources/js/typed.js":
/*!*******************************!*\
  !*** ./resources/js/typed.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");


/* -------------------------------------------------------------------------- */
/*                                 Typed Text                                 */
/* -------------------------------------------------------------------------- */

var typedTextInit = function typedTextInit() {
  var typedTexts = document.querySelectorAll('.typed-text');
  if (typedTexts.length && window.Typed) {
    typedTexts.forEach(function (typedText) {
      return new window.Typed(typedText, {
        strings: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getData(typedText, 'typedText'),
        typeSpeed: 100,
        loop: true,
        backDelay: 1500
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typedTextInit);

/***/ }),

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                    Utils                                   */
/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    setTimeout(fn, 1);
  }
};
var resize = function resize(fn) {
  return window.addEventListener('resize', fn);
};
var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};
var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};
var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};

/* ----------------------------- Colors function ---------------------------- */

var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf('#') === 0 ? hex = hexValue.substring(1) : hex = hexValue;
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  }));
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
var rgbaColor = function rgbaColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#fff';
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};

/* --------------------------------- Colors --------------------------------- */

var getColor = function getColor(name) {
  var dom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
  return getComputedStyle(dom).getPropertyValue("--falcon-".concat(name)).trim();
};
var getColors = function getColors(dom) {
  return {
    primary: getColor('primary', dom),
    secondary: getColor('secondary', dom),
    success: getColor('success', dom),
    info: getColor('info', dom),
    warning: getColor('warning', dom),
    danger: getColor('danger', dom),
    light: getColor('light', dom),
    dark: getColor('dark', dom)
  };
};
var getSoftColors = function getSoftColors(dom) {
  return {
    primary: getColor('soft-primary', dom),
    secondary: getColor('soft-secondary', dom),
    success: getColor('soft-success', dom),
    info: getColor('soft-info', dom),
    warning: getColor('soft-warning', dom),
    danger: getColor('soft-danger', dom),
    light: getColor('soft-light', dom),
    dark: getColor('soft-dark', dom)
  };
};
var getGrays = function getGrays(dom) {
  return {
    white: getColor('white', dom),
    100: getColor('100', dom),
    200: getColor('200', dom),
    300: getColor('300', dom),
    400: getColor('400', dom),
    500: getColor('500', dom),
    600: getColor('600', dom),
    700: getColor('700', dom),
    800: getColor('800', dom),
    900: getColor('900', dom),
    1000: getColor('1000', dom),
    1100: getColor('1100', dom),
    black: getColor('black', dom)
  };
};
var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};
var addClass = function addClass(el, className) {
  el.classList.add(className);
};
var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
};
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};
var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;
  if (classes) {
    breakpoint = breakpoints[classes.split(' ').filter(function (cls) {
      return cls.includes('navbar-expand-');
    }).pop().split('-').pop()];
  }
  return breakpoint;
};

/* --------------------------------- Cookie --------------------------------- */

var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
};
var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : keyValue;
};
var settings = {
  tinymce: {
    theme: 'oxide'
  },
  chart: {
    borderColor: 'rgba(255, 255, 255, 0.8)'
  }
};

/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext('2d');
  return new window.Chart(ctx, config);
};

/* ---------------------------------- Store --------------------------------- */

var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};
var setItemToStore = function setItemToStore(key, payload) {
  var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  return store.setItem(key, payload);
};
var getStoreSpace = function getStoreSpace() {
  var store = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage;
  return parseFloat((escape(encodeURIComponent(JSON.stringify(store))).length / (1024 * 1024)).toFixed(2));
};

/* get Dates between */

var getDates = function getDates(startDate, endDate) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000 * 60 * 60 * 24;
  var duration = endDate - startDate;
  var steps = duration / interval;
  return Array.from({
    length: steps + 1
  }, function (v, i) {
    return new Date(startDate.valueOf() + interval * i);
  });
};
var getPastDates = function getPastDates(duration) {
  var days;
  switch (duration) {
    case 'week':
      days = 7;
      break;
    case 'month':
      days = 30;
      break;
    case 'year':
      days = 365;
      break;
    default:
      days = duration;
  }
  var date = new Date();
  var endDate = date;
  var startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
  return getDates(startDate, endDate);
};

/* Get Random Number */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var utils = {
  docReady: docReady,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  getColor: getColor,
  getColors: getColors,
  getSoftColors: getSoftColors,
  getGrays: getGrays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace,
  getDates: getDates,
  getPastDates: getPastDates,
  getRandomNumber: getRandomNumber
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ }),

/***/ "./resources/js/wizard.js":
/*!********************************!*\
  !*** ./resources/js/wizard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* -------------------------------------------------------------------------- */
/*                                 step wizard                                */
/* -------------------------------------------------------------------------- */
var wizardInit = function wizardInit() {
  var wizards = document.querySelectorAll('.theme-wizard');
  var tabPillEl = document.querySelectorAll('#pill-tab2 [data-bs-toggle="pill"]');
  var tabProgressBar = document.querySelector('.theme-wizard .progress');
  wizards.forEach(function (wizard) {
    var tabToggleButtonEl = wizard.querySelectorAll('[data-wizard-step]');
    var inputEmail = wizard.querySelector('[data-wizard-validate-email]');
    var emailPattern = inputEmail.getAttribute('pattern');
    var inputPassword = wizard.querySelector('[data-wizard-validate-password]');
    var inputConfirmPassword = wizard.querySelector('[data-wizard-validate-confirm-password]');
    var form = wizard.querySelector('[novalidate]');
    var nextButton = wizard.querySelector('.next button');
    var prevButton = wizard.querySelector('.previous button');
    var cardFooter = wizard.querySelector('.theme-wizard .card-footer');
    var count = 0;
    var validatePattern = function validatePattern(pattern, value) {
      var regexPattern = new RegExp(pattern);
      return regexPattern.test(String(value).toLowerCase());
    };
    prevButton.classList.add('d-none');

    // on button click tab change
    nextButton.addEventListener('click', function () {
      if ((!(inputEmail.value && validatePattern(emailPattern, inputEmail.value)) || !inputPassword.value || !inputConfirmPassword.value) && form.className.includes('needs-validation')) {
        form.classList.add('was-validated');
      } else {
        count = count + 1;
        var tab = new window.bootstrap.Tab(tabToggleButtonEl[count]);
        tab.show();
      }
    });
    prevButton.addEventListener('click', function () {
      count = count - 1;
      var tab = new window.bootstrap.Tab(tabToggleButtonEl[count]);
      tab.show();
    });
    if (tabToggleButtonEl.length) {
      tabToggleButtonEl.forEach(function (item, index) {
        /* eslint-disable */

        item.addEventListener('show.bs.tab', function (e) {
          if ((!(inputEmail.value && validatePattern(emailPattern, inputEmail.value)) || !inputPassword.value || !inputConfirmPassword.value) && form.className.includes('needs-validation')) {
            e.preventDefault();
            form.classList.add('was-validated');
            return null;
            /* eslint-enable */
          }

          count = index;
          // can't go back tab
          if (count === tabToggleButtonEl.length - 1) {
            tabToggleButtonEl.forEach(function (tab) {
              tab.setAttribute('data-bs-toggle', 'modal');
              tab.setAttribute('data-bs-target', '#error-modal');
            });
          }
          //add done class
          for (var i = 0; i < count; i = i + 1) {
            tabToggleButtonEl[i].classList.add('done');
          }
          //remove done class
          for (var j = count; j < tabToggleButtonEl.length; j = j + 1) {
            tabToggleButtonEl[j].classList.remove('done');
          }
          // card footer remove at last step
          if (count > tabToggleButtonEl.length - 2) {
            item.classList.add('done');
            cardFooter.classList.add('d-none');
          } else {
            cardFooter.classList.remove('d-none');
          }
          // prev-button removing
          if (count > 0) {
            prevButton.classList.remove('d-none');
          } else {
            prevButton.classList.add('d-none');
          }
        });
      });
    }
  });

  // control wizard progressbar
  if (tabPillEl.length) {
    var dividedProgressbar = 100 / tabPillEl.length;
    tabProgressBar.querySelector('.progress-bar').style.width = dividedProgressbar + '%';
    tabPillEl.forEach(function (item, index) {
      item.addEventListener('show.bs.tab', function () {
        tabProgressBar.querySelector('.progress-bar').style.width = dividedProgressbar * (index + 1) + '%';
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wizardInit);

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
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/utils.js");
/* harmony import */ var _navbar_vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-vertical */ "./resources/js/navbar-vertical.js");
/* harmony import */ var _detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detector */ "./resources/js/detector.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip */ "./resources/js/tooltip.js");
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover */ "./resources/js/popover.js");
/* harmony import */ var _navbar_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar-top */ "./resources/js/navbar-top.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toast */ "./resources/js/toast.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progress */ "./resources/js/progress.js");
/* harmony import */ var _glightbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./glightbox */ "./resources/js/glightbox.js");
/* harmony import */ var _plyr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plyr */ "./resources/js/plyr.js");
/* harmony import */ var _googleMap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./googleMap */ "./resources/js/googleMap.js");
/* harmony import */ var _dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dropzone */ "./resources/js/dropzone.js");
/* harmony import */ var _choices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./choices */ "./resources/js/choices.js");
/* harmony import */ var _charts_chartjs_chart_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./charts/chartjs/chart-bar */ "./resources/js/charts/chartjs/chart-bar.js");
/* harmony import */ var _form_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form-validation */ "./resources/js/form-validation.js");
/* harmony import */ var _leaflet_active_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./leaflet-active-user */ "./resources/js/leaflet-active-user.js");
/* harmony import */ var _countup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./countup */ "./resources/js/countup.js");
/* harmony import */ var _copy_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./copy-link */ "./resources/js/copy-link.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./typed */ "./resources/js/typed.js");
/* harmony import */ var _navbar_darken_on_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./navbar-darken-on-scroll */ "./resources/js/navbar-darken-on-scroll.js");
/* harmony import */ var _scroll_to_top__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scroll-to-top */ "./resources/js/scroll-to-top.js");
/* harmony import */ var _tinymce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tinymce */ "./resources/js/tinymce.js");
/* harmony import */ var _bulk_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bulk-select */ "./resources/js/bulk-select.js");
/* harmony import */ var _quantity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quantity */ "./resources/js/quantity.js");
/* harmony import */ var _navbar_combo__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navbar-combo */ "./resources/js/navbar-combo.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list */ "./resources/js/list.js");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chat */ "./resources/js/chat.js");
/* harmony import */ var _draggable__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./draggable */ "./resources/js/draggable.js");
/* harmony import */ var _kanban__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./kanban */ "./resources/js/kanban.js");
/* harmony import */ var _fullcalendar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fullcalendar */ "./resources/js/fullcalendar.js");
/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./calendar/index */ "./resources/js/calendar/index.js");
/* harmony import */ var _calendar_management_calendar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./calendar/management-calendar */ "./resources/js/calendar/management-calendar.js");
/* harmony import */ var _lottie__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lottie */ "./resources/js/lottie.js");
/* harmony import */ var _wizard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./wizard */ "./resources/js/wizard.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./swiper */ "./resources/js/swiper.js");
/* harmony import */ var _rater__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rater */ "./resources/js/rater.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./search */ "./resources/js/search.js");
/* harmony import */ var _cookie_notice__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cookie-notice */ "./resources/js/cookie-notice.js");
/* harmony import */ var _theme_control__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./theme-control */ "./resources/js/theme-control.js");
/* harmony import */ var _dropdown_on_hover__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dropdown-on-hover */ "./resources/js/dropdown-on-hover.js");
/* harmony import */ var _charts_chartjs_product_share_doughnut__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./charts/chartjs/product-share-doughnut */ "./resources/js/charts/chartjs/product-share-doughnut.js");
/* harmony import */ var _charts_echarts_total_sales_ecommerce__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./charts/echarts/total-sales-ecommerce */ "./resources/js/charts/echarts/total-sales-ecommerce.js");
/* harmony import */ var _charts_echarts_sales_by_pos_location__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./charts/echarts/sales-by-pos-location */ "./resources/js/charts/echarts/sales-by-pos-location.js");
/* harmony import */ var _charts_echarts_returning_customer_rate__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./charts/echarts/returning-customer-rate */ "./resources/js/charts/echarts/returning-customer-rate.js");
/* harmony import */ var _charts_echarts_top_products__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./charts/echarts/top-products */ "./resources/js/charts/echarts/top-products.js");
/* harmony import */ var _charts_echarts_market_share_ecommerce__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./charts/echarts/market-share-ecommerce */ "./resources/js/charts/echarts/market-share-ecommerce.js");
/* harmony import */ var _charts_echarts_total_sales__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./charts/echarts/total-sales */ "./resources/js/charts/echarts/total-sales.js");
/* harmony import */ var _charts_echarts_weekly_sales__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./charts/echarts/weekly-sales */ "./resources/js/charts/echarts/weekly-sales.js");
/* harmony import */ var _charts_echarts_market_share__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./charts/echarts/market-share */ "./resources/js/charts/echarts/market-share.js");
/* harmony import */ var _charts_echarts_total_order__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./charts/echarts/total-order */ "./resources/js/charts/echarts/total-order.js");
/* harmony import */ var _charts_echarts_candle_chart__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./charts/echarts/candle-chart */ "./resources/js/charts/echarts/candle-chart.js");
/* harmony import */ var _charts_echarts_gross_revenue__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./charts/echarts/gross-revenue */ "./resources/js/charts/echarts/gross-revenue.js");
/* harmony import */ var _scrollbar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./scrollbar */ "./resources/js/scrollbar.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./icons */ "./resources/js/icons.js");
/* harmony import */ var _charts_echarts_report_for_this_week__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./charts/echarts/report-for-this-week */ "./resources/js/charts/echarts/report-for-this-week.js");
/* harmony import */ var _charts_echarts_basic_echarts__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./charts/echarts/basic-echarts */ "./resources/js/charts/echarts/basic-echarts.js");
/* harmony import */ var _charts_chartjs_chart_scatter__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./charts/chartjs/chart-scatter */ "./resources/js/charts/chartjs/chart-scatter.js");
/* harmony import */ var _charts_chartjs_chart_doughnut__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./charts/chartjs/chart-doughnut */ "./resources/js/charts/chartjs/chart-doughnut.js");
/* harmony import */ var _charts_chartjs_chart_pie__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./charts/chartjs/chart-pie */ "./resources/js/charts/chartjs/chart-pie.js");
/* harmony import */ var _charts_chartjs_chart_polar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./charts/chartjs/chart-polar */ "./resources/js/charts/chartjs/chart-polar.js");
/* harmony import */ var _charts_chartjs_chart_radar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./charts/chartjs/chart-radar */ "./resources/js/charts/chartjs/chart-radar.js");
/* harmony import */ var _charts_chartjs_chart_combo__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./charts/chartjs/chart-combo */ "./resources/js/charts/chartjs/chart-combo.js");
/* harmony import */ var _charts_chartjs_chart_bubble__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./charts/chartjs/chart-bubble */ "./resources/js/charts/chartjs/chart-bubble.js");
/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./dropdown-menu */ "./resources/js/dropdown-menu.js");
/* harmony import */ var _charts_echarts_audience__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./charts/echarts/audience */ "./resources/js/charts/echarts/audience.js");
/* harmony import */ var _charts_echarts_session_by_browser__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./charts/echarts/session-by-browser */ "./resources/js/charts/echarts/session-by-browser.js");
/* harmony import */ var _charts_echarts_session_by_country__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./charts/echarts/session-by-country */ "./resources/js/charts/echarts/session-by-country.js");
/* harmony import */ var _charts_echarts_active_users_report__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./charts/echarts/active-users-report */ "./resources/js/charts/echarts/active-users-report.js");
/* harmony import */ var _charts_echarts_traffic_channels__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./charts/echarts/traffic-channels */ "./resources/js/charts/echarts/traffic-channels.js");
/* harmony import */ var _charts_echarts_bounce_rate__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./charts/echarts/bounce-rate */ "./resources/js/charts/echarts/bounce-rate.js");
/* harmony import */ var _charts_echarts_users_by_time__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./charts/echarts/users-by-time */ "./resources/js/charts/echarts/users-by-time.js");
/* harmony import */ var _charts_echarts_session_by_country_map__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./charts/echarts/session-by-country-map */ "./resources/js/charts/echarts/session-by-country-map.js");
/* harmony import */ var _charts_echarts_most_leads__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./charts/echarts/most-leads */ "./resources/js/charts/echarts/most-leads.js");
/* harmony import */ var _charts_echarts_closed_vs_goal__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./charts/echarts/closed-vs-goal */ "./resources/js/charts/echarts/closed-vs-goal.js");
/* harmony import */ var _charts_echarts_lead_conversion__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./charts/echarts/lead-conversion */ "./resources/js/charts/echarts/lead-conversion.js");
/* harmony import */ var _charts_echarts_deal_storage_funnel__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./charts/echarts/deal-storage-funnel */ "./resources/js/charts/echarts/deal-storage-funnel.js");
/* harmony import */ var _charts_echarts_crm_revenue__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./charts/echarts/crm-revenue */ "./resources/js/charts/echarts/crm-revenue.js");
/* harmony import */ var _charts_echarts_location_by_session_crm__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./charts/echarts/location-by-session-crm */ "./resources/js/charts/echarts/location-by-session-crm.js");
/* harmony import */ var _charts_echarts_real_time_users__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./charts/echarts/real-time-users */ "./resources/js/charts/echarts/real-time-users.js");
/* harmony import */ var _charts_echarts_line_payment__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./charts/echarts/line-payment */ "./resources/js/charts/echarts/line-payment.js");
/* harmony import */ var _charts_chartjs_chart_line__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./charts/chartjs/chart-line */ "./resources/js/charts/chartjs/chart-line.js");
/* harmony import */ var _charts_echarts_bandwidth_saved__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./charts/echarts/bandwidth-saved */ "./resources/js/charts/echarts/bandwidth-saved.js");
/* harmony import */ var _treeview__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./treeview */ "./resources/js/treeview.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./scroll */ "./resources/js/scroll.js");





















































































/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_detector__WEBPACK_IMPORTED_MODULE_2__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_navbar_vertical__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_total_order__WEBPACK_IMPORTED_MODULE_49__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_weekly_sales__WEBPACK_IMPORTED_MODULE_47__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_market_share__WEBPACK_IMPORTED_MODULE_48__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_total_sales__WEBPACK_IMPORTED_MODULE_46__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_top_products__WEBPACK_IMPORTED_MODULE_44__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_navbar_top__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_popover__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_toast__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_progress__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_glightbox__WEBPACK_IMPORTED_MODULE_8__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_plyr__WEBPACK_IMPORTED_MODULE_9__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_googleMap__WEBPACK_IMPORTED_MODULE_10__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_dropzone__WEBPACK_IMPORTED_MODULE_11__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_choices__WEBPACK_IMPORTED_MODULE_12__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_form_validation__WEBPACK_IMPORTED_MODULE_14__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_bar__WEBPACK_IMPORTED_MODULE_13__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_leaflet_active_user__WEBPACK_IMPORTED_MODULE_15__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_countup__WEBPACK_IMPORTED_MODULE_16__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_copy_link__WEBPACK_IMPORTED_MODULE_17__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_navbar_darken_on_scroll__WEBPACK_IMPORTED_MODULE_19__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_typed__WEBPACK_IMPORTED_MODULE_18__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_scroll_to_top__WEBPACK_IMPORTED_MODULE_20__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_tinymce__WEBPACK_IMPORTED_MODULE_21__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_bulk_select__WEBPACK_IMPORTED_MODULE_22__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_chat__WEBPACK_IMPORTED_MODULE_26__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_quantity__WEBPACK_IMPORTED_MODULE_23__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_navbar_combo__WEBPACK_IMPORTED_MODULE_24__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_list__WEBPACK_IMPORTED_MODULE_25__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_swiper__WEBPACK_IMPORTED_MODULE_34__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_rater__WEBPACK_IMPORTED_MODULE_35__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_draggable__WEBPACK_IMPORTED_MODULE_27__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_kanban__WEBPACK_IMPORTED_MODULE_28__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_fullcalendar__WEBPACK_IMPORTED_MODULE_29__.fullCalendarInit);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_calendar_index__WEBPACK_IMPORTED_MODULE_30__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_calendar_management_calendar__WEBPACK_IMPORTED_MODULE_31__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_lottie__WEBPACK_IMPORTED_MODULE_32__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_wizard__WEBPACK_IMPORTED_MODULE_33__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_search__WEBPACK_IMPORTED_MODULE_36__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_cookie_notice__WEBPACK_IMPORTED_MODULE_37__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_theme_control__WEBPACK_IMPORTED_MODULE_38__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_dropdown_on_hover__WEBPACK_IMPORTED_MODULE_39__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_market_share_ecommerce__WEBPACK_IMPORTED_MODULE_45__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_product_share_doughnut__WEBPACK_IMPORTED_MODULE_40__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_total_sales_ecommerce__WEBPACK_IMPORTED_MODULE_41__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_bandwidth_saved__WEBPACK_IMPORTED_MODULE_81__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_sales_by_pos_location__WEBPACK_IMPORTED_MODULE_42__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_returning_customer_rate__WEBPACK_IMPORTED_MODULE_43__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_candle_chart__WEBPACK_IMPORTED_MODULE_50__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_gross_revenue__WEBPACK_IMPORTED_MODULE_51__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_scrollbar__WEBPACK_IMPORTED_MODULE_52__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_icons__WEBPACK_IMPORTED_MODULE_53__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_report_for_this_week__WEBPACK_IMPORTED_MODULE_54__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_basic_echarts__WEBPACK_IMPORTED_MODULE_55__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_scatter__WEBPACK_IMPORTED_MODULE_56__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_doughnut__WEBPACK_IMPORTED_MODULE_57__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_pie__WEBPACK_IMPORTED_MODULE_58__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_polar__WEBPACK_IMPORTED_MODULE_59__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_radar__WEBPACK_IMPORTED_MODULE_60__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_combo__WEBPACK_IMPORTED_MODULE_61__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_dropdown_menu__WEBPACK_IMPORTED_MODULE_63__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_audience__WEBPACK_IMPORTED_MODULE_64__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_session_by_browser__WEBPACK_IMPORTED_MODULE_65__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_session_by_country__WEBPACK_IMPORTED_MODULE_66__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_active_users_report__WEBPACK_IMPORTED_MODULE_67__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_traffic_channels__WEBPACK_IMPORTED_MODULE_68__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_bounce_rate__WEBPACK_IMPORTED_MODULE_69__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_users_by_time__WEBPACK_IMPORTED_MODULE_70__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_session_by_country_map__WEBPACK_IMPORTED_MODULE_71__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_most_leads__WEBPACK_IMPORTED_MODULE_72__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_closed_vs_goal__WEBPACK_IMPORTED_MODULE_73__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_lead_conversion__WEBPACK_IMPORTED_MODULE_74__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_deal_storage_funnel__WEBPACK_IMPORTED_MODULE_75__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_crm_revenue__WEBPACK_IMPORTED_MODULE_76__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_location_by_session_crm__WEBPACK_IMPORTED_MODULE_77__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_real_time_users__WEBPACK_IMPORTED_MODULE_78__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_echarts_line_payment__WEBPACK_IMPORTED_MODULE_79__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_bubble__WEBPACK_IMPORTED_MODULE_62__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_charts_chartjs_chart_line__WEBPACK_IMPORTED_MODULE_80__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_treeview__WEBPACK_IMPORTED_MODULE_82__["default"]);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.docReady)(_scroll__WEBPACK_IMPORTED_MODULE_83__["default"]);
})();

/******/ })()
;