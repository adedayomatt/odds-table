/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formats": function() { return /* binding */ formats; },
/* harmony export */   "getOdds": function() { return /* binding */ getOdds; },
/* harmony export */   "getSports": function() { return /* binding */ getSports; },
/* harmony export */   "markets": function() { return /* binding */ markets; },
/* harmony export */   "regions": function() { return /* binding */ regions; }
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");

/**
 * Get Odds data 
 * @param {*} filters 
 * @returns 
 */

const getOdds = async filters => fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl}/sports/${filters.sport}/odds?regions=${filters.region}&apiKey=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey}`);
/**
 * Get sports
 * 
 * @returns 
 */

const getSports = () => fetch(`${_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiUrl}/sports?apiKey=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiKey}`);
const regions = ['us', 'uk', 'au', 'eu'];
const markets = ['h2h', 'outrights'];
const formats = ['decimal', 'american'];

/***/ }),

/***/ "./src/components/MarketSelect.js":
/*!****************************************!*\
  !*** ./src/components/MarketSelect.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MarketSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.js");



class MarketSelect extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      markets: []
    };
  }

  componentDidMount() {
    this.setState({
      markets: _api__WEBPACK_IMPORTED_MODULE_2__.markets
    });
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Market"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: this.props.selected,
      onChange: e => this.props.changed(e, 'market')
    }, this.state.markets.map(market => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: market
      }, market);
    })));
  }

}

/***/ }),

/***/ "./src/components/RegionSelect.js":
/*!****************************************!*\
  !*** ./src/components/RegionSelect.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RegionSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.js");



class RegionSelect extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      regions: []
    };
  }

  componentDidMount() {
    this.setState({
      regions: _api__WEBPACK_IMPORTED_MODULE_2__.regions
    });
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Region"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: this.props.selected,
      onChange: e => this.props.changed(e, 'region')
    }, this.state.regions.map(region => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: region
      }, region);
    })));
  }

}

/***/ }),

/***/ "./src/components/SportSelect.js":
/*!***************************************!*\
  !*** ./src/components/SportSelect.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SportSelect; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.js");
/* harmony import */ var _mock_sports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/sports */ "./src/mock/sports.js");




class SportSelect extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      sports: [],
      selected: null
    };
  }

  componentDidMount() {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.getSports)().then(response => {
      this.setState({
        sports: response.data
      });
    }).catch(e => {
      console.log("Error getting sports--->", e);
      this.setState({
        sports: _mock_sports__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
    });
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Sport"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: this.props.selected,
      onChange: e => this.props.changed(e, 'sport')
    }, this.state.sports.map(sport => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: sport.key
      }, sport.title);
    })));
  }

}

/***/ }),

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OddsTable; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./src/api/index.js");
/* harmony import */ var _mock_odds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/odds */ "./src/mock/odds.js");




class OddsTable extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      odds: []
    };
  }

  componentDidMount() {
    this.fetchOdds();
  }

  fetchOdds() {
    console.log("Fetching odds with props----", this.props);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.getOdds)(this.props.filters).then(response => {
      this.setState({
        odds: response.data
      });
    }).catch(e => {
      console.log("Error getting odds data--->", e);
      this.setState({
        odds: _mock_odds__WEBPACK_IMPORTED_MODULE_3__["default"]
      });
    });
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "odds-table"
    }, this.state.odds.map((odd, i) => {
      var _odd$home_team, _odd$away_team;

      const homeTeam = (_odd$home_team = odd.home_team) !== null && _odd$home_team !== void 0 ? _odd$home_team : 'HomeTeam';
      const awayTeam = (_odd$away_team = odd.away_team) !== null && _odd$away_team !== void 0 ? _odd$away_team : 'AwayTeam';
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
        className: (i + 1) % 2 == 1 ? 'bg' : ''
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        className: "team-container"
      }, homeTeam, " vs. ", awayTeam), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
        className: "bookmakers-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, odd.bookmakers.map(bookmaker => {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, bookmaker.title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, bookmaker.markets[0].outcomes.slice(0, 3).map(outcome => {
          return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, outcome.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, outcome.price));
        }))));
      })))));
    }));
  }

}

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  apiUrl: "https://the-odds-api.com/v4/sports",
  apiKey: "f19fb4234c4cf098d7df82805c6bf3b2"
});

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Table */ "./src/components/Table.js");
/* harmony import */ var _components_SportSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SportSelect */ "./src/components/SportSelect.js");
/* harmony import */ var _components_RegionSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/RegionSelect */ "./src/components/RegionSelect.js");
/* harmony import */ var _components_MarketSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/MarketSelect */ "./src/components/MarketSelect.js");


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */





function edit(props) {
  const {
    attributes: {
      sport,
      region,
      market
    },
    setAttributes
  } = props;

  function setFilter(e, attribute) {
    const selected = e.target.querySelector('option:checked');
    setAttributes({
      [attribute]: selected.value
    });
    e.preventDefault();
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "filter-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SportSelect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selected: sport,
    changed: setFilter
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_RegionSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    selected: region,
    changed: setFilter
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MarketSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selected: market,
    changed: setFilter
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "odds-table-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: props.attributes
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('create-block/odds-table', {
  attributes: {
    sport: {
      type: "string",
      default: ""
    },
    region: {
      type: "string",
      default: ""
    },
    market: {
      type: "string",
      default: ""
    }
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/mock/odds.js":
/*!**************************!*\
  !*** ./src/mock/odds.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "id": "3e8124b2c46a6ad772a03979be9b8ede",
  "has_outrights": true,
  "sport_key": "soccer_fifa_world_cup_winner",
  "sport_title": "FIFA World Cup Winner",
  "commence_time": "2022-12-18T18:58:00Z",
  "home_team": null,
  "away_team": null,
  "bookmakers": [{
    "key": "unibet",
    "title": "Unibet",
    "last_update": "2022-03-31T17:19:53Z",
    "markets": [{
      "key": "outrights",
      "outcomes": [{
        "name": "Brazil",
        "price": 6
      }, {
        "name": "France",
        "price": 8
      }, {
        "name": "England",
        "price": 8.5
      }, {
        "name": "Spain",
        "price": 9
      }, {
        "name": "Germany",
        "price": 10.5
      }, {
        "name": "Belgium",
        "price": 12
      }, {
        "name": "Portugal",
        "price": 12
      }, {
        "name": "Argentina",
        "price": 13
      }, {
        "name": "Netherlands",
        "price": 16
      }, {
        "name": "Denmark",
        "price": 31
      }, {
        "name": "Croatia",
        "price": 67
      }, {
        "name": "Uruguay",
        "price": 67
      }, {
        "name": "Switzerland",
        "price": 71
      }, {
        "name": "USA",
        "price": 71
      }, {
        "name": "Mexico",
        "price": 81
      }, {
        "name": "Poland",
        "price": 81
      }, {
        "name": "Serbia",
        "price": 81
      }, {
        "name": "Ecuador",
        "price": 91
      }, {
        "name": "Peru",
        "price": 101
      }, {
        "name": "Senegal",
        "price": 151
      }, {
        "name": "Canada",
        "price": 201
      }, {
        "name": "Japan",
        "price": 201
      }, {
        "name": "Morocco",
        "price": 251
      }, {
        "name": "Algeria",
        "price": 301
      }, {
        "name": "Cameroon",
        "price": 301
      }, {
        "name": "Ghana",
        "price": 301
      }, {
        "name": "Qatar",
        "price": 301
      }, {
        "name": "Wales",
        "price": 301
      }, {
        "name": "Scotland",
        "price": 401
      }, {
        "name": "South Korea",
        "price": 401
      }, {
        "name": "Tunisia",
        "price": 401
      }, {
        "name": "Ukraine",
        "price": 401
      }, {
        "name": "Australia",
        "price": 501
      }, {
        "name": "Iran",
        "price": 501
      }, {
        "name": "Saudi Arabia",
        "price": 501
      }, {
        "name": "Costa Rica",
        "price": 751
      }, {
        "name": "New Zealand",
        "price": 1001
      }]
    }]
  }, {
    "key": "fanduel",
    "title": "FanDuel",
    "last_update": "2022-03-31T17:22:29Z",
    "markets": [{
      "key": "outrights",
      "outcomes": [{
        "name": "Brazil",
        "price": 6.5
      }, {
        "name": "France",
        "price": 7.5
      }, {
        "name": "England",
        "price": 8.5
      }, {
        "name": "Spain",
        "price": 9.5
      }, {
        "name": "Germany",
        "price": 11
      }, {
        "name": "Argentina",
        "price": 13
      }, {
        "name": "Belgium",
        "price": 14
      }, {
        "name": "Portugal",
        "price": 15
      }, {
        "name": "Netherlands",
        "price": 20
      }, {
        "name": "Denmark",
        "price": 33
      }, {
        "name": "Croatia",
        "price": 76
      }, {
        "name": "Uruguay",
        "price": 76
      }, {
        "name": "Australia",
        "price": 101
      }, {
        "name": "Japan",
        "price": 101
      }, {
        "name": "Morocco",
        "price": 101
      }, {
        "name": "Iran",
        "price": 101
      }, {
        "name": "Senegal",
        "price": 101
      }, {
        "name": "Ecuador",
        "price": 101
      }, {
        "name": "Peru",
        "price": 101
      }, {
        "name": "Wales",
        "price": 101
      }, {
        "name": "Scotland",
        "price": 101
      }, {
        "name": "Poland",
        "price": 101
      }, {
        "name": "Mexico",
        "price": 101
      }, {
        "name": "Cameroon",
        "price": 101
      }, {
        "name": "Switzerland",
        "price": 101
      }, {
        "name": "USA",
        "price": 101
      }, {
        "name": "Ghana",
        "price": 101
      }, {
        "name": "Qatar",
        "price": 101
      }, {
        "name": "Serbia",
        "price": 101
      }, {
        "name": "New Zealand",
        "price": 101
      }, {
        "name": "Canada",
        "price": 101
      }, {
        "name": "South Korea",
        "price": 101
      }, {
        "name": "Saudi Arabia",
        "price": 101
      }, {
        "name": "Tunisia",
        "price": 101
      }]
    }]
  }, {
    "key": "betfair",
    "title": "Betfair",
    "last_update": "2022-03-31T17:21:09Z",
    "markets": [{
      "key": "outrights",
      "outcomes": [{
        "name": "Scotland",
        "price": 1.04
      }, {
        "name": "Serbia",
        "price": 4
      }, {
        "name": "Poland",
        "price": 4
      }, {
        "name": "Brazil",
        "price": 6.6
      }, {
        "name": "France",
        "price": 7.8
      }, {
        "name": "Spain",
        "price": 8.8
      }, {
        "name": "England",
        "price": 8.8
      }, {
        "name": "Germany",
        "price": 10.5
      }, {
        "name": "Argentina",
        "price": 11.5
      }, {
        "name": "Croatia",
        "price": 11.5
      }, {
        "name": "Belgium",
        "price": 12.5
      }, {
        "name": "Portugal",
        "price": 13
      }, {
        "name": "Netherlands",
        "price": 17
      }, {
        "name": "Mexico",
        "price": 20
      }, {
        "name": "Japan",
        "price": 20
      }, {
        "name": "Morocco",
        "price": 20
      }, {
        "name": "Tunisia",
        "price": 20
      }, {
        "name": "Denmark",
        "price": 30
      }, {
        "name": "Uruguay",
        "price": 55
      }, {
        "name": "Switzerland",
        "price": 75
      }, {
        "name": "Senegal",
        "price": 100
      }, {
        "name": "USA",
        "price": 130
      }, {
        "name": "Qatar",
        "price": 150
      }, {
        "name": "Wales",
        "price": 160
      }, {
        "name": "Cameroon",
        "price": 160
      }, {
        "name": "Ghana",
        "price": 170
      }, {
        "name": "Canada",
        "price": 220
      }, {
        "name": "Ukraine",
        "price": 250
      }, {
        "name": "Ecuador",
        "price": 310
      }, {
        "name": "South Korea",
        "price": 520
      }, {
        "name": "Iran",
        "price": 1000
      }, {
        "name": "Saudi Arabia",
        "price": 1000
      }, {
        "name": "New Zealand",
        "price": 1000
      }]
    }, {
      "key": "outrights_lay",
      "outcomes": [{
        "name": "Brazil",
        "price": 7
      }, {
        "name": "France",
        "price": 8
      }, {
        "name": "Spain",
        "price": 9
      }, {
        "name": "England",
        "price": 9
      }, {
        "name": "Germany",
        "price": 11
      }, {
        "name": "Argentina",
        "price": 12
      }, {
        "name": "Belgium",
        "price": 17
      }, {
        "name": "Portugal",
        "price": 18
      }, {
        "name": "Netherlands",
        "price": 19
      }, {
        "name": "Denmark",
        "price": 34
      }, {
        "name": "Croatia",
        "price": 75
      }, {
        "name": "Uruguay",
        "price": 85
      }, {
        "name": "Switzerland",
        "price": 110
      }, {
        "name": "Serbia",
        "price": 110
      }, {
        "name": "Japan",
        "price": 450
      }, {
        "name": "Ghana",
        "price": 700
      }, {
        "name": "Ukraine",
        "price": 800
      }, {
        "name": "South Korea",
        "price": 800
      }, {
        "name": "Qatar",
        "price": 900
      }, {
        "name": "Senegal",
        "price": 1000
      }, {
        "name": "Mexico",
        "price": 1000
      }, {
        "name": "Poland",
        "price": 1000
      }, {
        "name": "USA",
        "price": 1000
      }, {
        "name": "Scotland",
        "price": 1000
      }, {
        "name": "Wales",
        "price": 1000
      }, {
        "name": "Cameroon",
        "price": 1000
      }, {
        "name": "Ecuador",
        "price": 1000
      }, {
        "name": "Canada",
        "price": 1000
      }]
    }]
  }]
}]);

/***/ }),

/***/ "./src/mock/sports.js":
/*!****************************!*\
  !*** ./src/mock/sports.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "key": "americanfootball_nfl_super_bowl_winner",
  "group": "American Football",
  "title": "NFL Super Bowl Winner",
  "description": "Super Bowl Winner 2022/2023",
  "active": true,
  "has_outrights": true
}, {
  "key": "aussierules_afl",
  "group": "Aussie Rules",
  "title": "AFL",
  "description": "Aussie Football",
  "active": true,
  "has_outrights": false
}, {
  "key": "baseball_mlb",
  "group": "Baseball",
  "title": "MLB",
  "description": "Major League Baseball",
  "active": true,
  "has_outrights": false
}, {
  "key": "baseball_mlb_world_series_winner",
  "group": "Baseball",
  "title": "MLB World Series Winner",
  "description": "World Series Winner 2022",
  "active": true,
  "has_outrights": true
}, {
  "key": "basketball_euroleague",
  "group": "Basketball",
  "title": "Basketball Euroleague",
  "description": "Basketball Euroleague",
  "active": true,
  "has_outrights": false
}, {
  "key": "basketball_nba",
  "group": "Basketball",
  "title": "NBA",
  "description": "US Basketball",
  "active": true,
  "has_outrights": false
}, {
  "key": "basketball_nba_championship_winner",
  "group": "Basketball",
  "title": "NBA Championship Winner",
  "description": "Championship Winner 2021/2022",
  "active": true,
  "has_outrights": true
}, {
  "key": "basketball_ncaab",
  "group": "Basketball",
  "title": "NCAAB",
  "description": "US College Basketball",
  "active": true,
  "has_outrights": false
}, {
  "key": "cricket_ipl",
  "group": "Cricket",
  "title": "IPL",
  "description": "Indian Premier League",
  "active": true,
  "has_outrights": false
}, {
  "key": "cricket_odi",
  "group": "Cricket",
  "title": "One Day Internationals",
  "description": "One Day Internationals",
  "active": true,
  "has_outrights": false
}, {
  "key": "cricket_test_match",
  "group": "Cricket",
  "title": "Test Matches",
  "description": "International Test Matches",
  "active": true,
  "has_outrights": false
}, {
  "key": "golf_masters_tournament_winner",
  "group": "Golf",
  "title": "Masters Tournament Winner",
  "description": "2022 Winner",
  "active": true,
  "has_outrights": true
}, {
  "key": "golf_pga_championship_winner",
  "group": "Golf",
  "title": "PGA Championship Winner",
  "description": "2022 Winner",
  "active": true,
  "has_outrights": true
}, {
  "key": "golf_the_open_championship_winner",
  "group": "Golf",
  "title": "The Open Winner",
  "description": "2022 Winner",
  "active": true,
  "has_outrights": true
}, {
  "key": "golf_us_open_winner",
  "group": "Golf",
  "title": "US Open Winner",
  "description": "2022 Winner",
  "active": true,
  "has_outrights": true
}, {
  "key": "icehockey_nhl",
  "group": "Ice Hockey",
  "title": "NHL",
  "description": "US Ice Hockey",
  "active": true,
  "has_outrights": false
}, {
  "key": "icehockey_nhl_championship_winner",
  "group": "Ice Hockey",
  "title": "NHL Championship Winner",
  "description": "Stanley Cup Winner 2021/2022",
  "active": true,
  "has_outrights": true
}, {
  "key": "icehockey_sweden_allsvenskan",
  "group": "Ice Hockey",
  "title": "HockeyAllsvenskan",
  "description": "Swedish Hockey Allsvenskan",
  "active": true,
  "has_outrights": false
}, {
  "key": "icehockey_sweden_hockey_league",
  "group": "Ice Hockey",
  "title": "SHL",
  "description": "Swedish Hockey League",
  "active": true,
  "has_outrights": false
}, {
  "key": "mma_mixed_martial_arts",
  "group": "Mixed Martial Arts",
  "title": "MMA",
  "description": "Mixed Martial Arts",
  "active": true,
  "has_outrights": false
}, {
  "key": "rugbyleague_nrl",
  "group": "Rugby League",
  "title": "NRL",
  "description": "Aussie Rugby League",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_argentina_primera_division",
  "group": "Soccer",
  "title": "Primera División - Argentina",
  "description": "Argentine Primera División",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_australia_aleague",
  "group": "Soccer",
  "title": "A-League",
  "description": "Aussie Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_belgium_first_div",
  "group": "Soccer",
  "title": "Belgium First Div",
  "description": "Belgian First Division A",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_brazil_campeonato",
  "group": "Soccer",
  "title": "Brazil Série A",
  "description": "Brasileirão Série A",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_denmark_superliga",
  "group": "Soccer",
  "title": "Denmark Superliga",
  "description": "",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_efl_champ",
  "group": "Soccer",
  "title": "Championship",
  "description": "EFL Championship",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_england_league1",
  "group": "Soccer",
  "title": "League 1",
  "description": "EFL League 1",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_england_league2",
  "group": "Soccer",
  "title": "League 2",
  "description": "EFL League 2 ",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_epl",
  "group": "Soccer",
  "title": "EPL",
  "description": "English Premier League",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_fa_cup",
  "group": "Soccer",
  "title": "FA Cup",
  "description": "Football Association Challenge Cup",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_fifa_world_cup_winner",
  "group": "Soccer",
  "title": "FIFA World Cup Winner",
  "description": "FIFA World Cup Winner 2022",
  "active": true,
  "has_outrights": true
}, {
  "key": "soccer_finland_veikkausliiga",
  "group": "Soccer",
  "title": "Veikkausliiga - Finland",
  "description": "",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_france_ligue_one",
  "group": "Soccer",
  "title": "Ligue 1 - France",
  "description": "",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_france_ligue_two",
  "group": "Soccer",
  "title": "Ligue 2 - France",
  "description": "French Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_germany_bundesliga",
  "group": "Soccer",
  "title": "Bundesliga - Germany",
  "description": "German Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_germany_bundesliga2",
  "group": "Soccer",
  "title": "Bundesliga 2 - Germany",
  "description": "German Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_italy_serie_a",
  "group": "Soccer",
  "title": "Serie A - Italy",
  "description": "Italian Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_italy_serie_b",
  "group": "Soccer",
  "title": "Serie B - Italy",
  "description": "Italian Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_japan_j_league",
  "group": "Soccer",
  "title": "J League",
  "description": "Japan Soccer League",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_korea_kleague1",
  "group": "Soccer",
  "title": "K League 1",
  "description": "Korean Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_league_of_ireland",
  "group": "Soccer",
  "title": "League of Ireland",
  "description": "Airtricity League Premier Division",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_mexico_ligamx",
  "group": "Soccer",
  "title": "Liga MX",
  "description": "Mexican Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_netherlands_eredivisie",
  "group": "Soccer",
  "title": "Dutch Eredivisie",
  "description": "Dutch Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_norway_eliteserien",
  "group": "Soccer",
  "title": "Eliteserien - Norway",
  "description": "Norwegian Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_portugal_primeira_liga",
  "group": "Soccer",
  "title": "Primeira Liga - Portugal",
  "description": "Portugese Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_spain_la_liga",
  "group": "Soccer",
  "title": "La Liga - Spain",
  "description": "Spanish Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_spain_segunda_division",
  "group": "Soccer",
  "title": "La Liga 2 - Spain",
  "description": "Spanish Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_spl",
  "group": "Soccer",
  "title": "Premiership - Scotland",
  "description": "Scottish Premiership",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_sweden_allsvenskan",
  "group": "Soccer",
  "title": "Allsvenskan - Sweden",
  "description": "Swedish Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_sweden_superettan",
  "group": "Soccer",
  "title": "Superettan - Sweden",
  "description": "Swedish Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_switzerland_superleague",
  "group": "Soccer",
  "title": "Swiss Superleague",
  "description": "Swiss Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_turkey_super_league",
  "group": "Soccer",
  "title": "Turkey Super League",
  "description": "Turkish Soccer",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_uefa_champs_league",
  "group": "Soccer",
  "title": "UEFA Champions",
  "description": "European Champions League",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_uefa_europa_league",
  "group": "Soccer",
  "title": "UEFA Europa",
  "description": "European Europa League",
  "active": true,
  "has_outrights": false
}, {
  "key": "soccer_usa_mls",
  "group": "Soccer",
  "title": "MLS",
  "description": "Major League Soccer",
  "active": true,
  "has_outrights": false
}]);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {
  const {
    attributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Saved block will appear here using the attributes ", JSON.stringify(attributes), " "));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkodds_table"] = self["webpackChunkodds_table"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map