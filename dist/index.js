"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pause = function (duration) {
    return new Promise(function (res) {
        setTimeout(res, duration);
    });
};
var food = function (_a) {
    var energyCondition = _a.energyCondition, foodFill = _a.foodFill;
    return __awaiter(void 0, void 0, void 0, function () {
        var currentEnergy, currentFish, foodInputCount, foodsToAdd, i;
        var _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    currentEnergy = parseInt(document.querySelectorAll('.resource-number div')[3].innerText, 10);
                    currentFish = parseInt(document.querySelectorAll('.resource-number')[2].innerText, 10);
                    if (!(currentEnergy <= energyCondition && currentFish >= foodFill)) return [3 /*break*/, 7];
                    (_b = document.querySelector('.resource-energy img')) === null || _b === void 0 ? void 0 : _b.click();
                    return [4 /*yield*/, pause(1000)];
                case 1:
                    _e.sent();
                    foodInputCount = parseInt((_c = document.querySelector('input.modal-input')) === null || _c === void 0 ? void 0 : _c.value, 10);
                    foodsToAdd = (foodFill * 5 - foodInputCount) / 5;
                    i = 0;
                    _e.label = 2;
                case 2:
                    if (!(i < foodsToAdd)) return [3 /*break*/, 5];
                    console.log('energy click');
                    (_d = document.querySelector("img.image-button[alt='Plus Icon']")) === null || _d === void 0 ? void 0 : _d.click();
                    return [4 /*yield*/, pause(200)];
                case 3:
                    _e.sent();
                    _e.label = 4;
                case 4:
                    i += 1;
                    return [3 /*break*/, 2];
                case 5:
                    document.querySelector('.modal-wrapper .plain-button').click();
                    return [4 /*yield*/, pause(2e4)];
                case 6:
                    _e.sent();
                    _e.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
};
var repair = function (_a) {
    var repairItem = _a.repairItem;
    return __awaiter(void 0, void 0, void 0, function () {
        var buttonRepair, qualityBar, quality;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    buttonRepair = (_b = document.querySelectorAll('.info-section .plain-button')) === null || _b === void 0 ? void 0 : _b[1];
                    qualityBar = (_c = document.querySelector('.card-number')) === null || _c === void 0 ? void 0 : _c.innerText.split('/ ');
                    quality = (Number(qualityBar === null || qualityBar === void 0 ? void 0 : qualityBar[0]) || 1) / (Number(qualityBar === null || qualityBar === void 0 ? void 0 : qualityBar[1]) || 1);
                    if (!(quality &&
                        buttonRepair &&
                        !__spreadArray([], Array.from(buttonRepair.classList), true).includes('disabled') &&
                        quality <= repairItem / 100)) return [3 /*break*/, 2];
                    buttonRepair.click();
                    return [4 /*yield*/, pause(10000)];
                case 1:
                    _d.sent();
                    _d.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
};
var mine = function (isMine) {
    if (isMine === void 0) { isMine = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var buttonMine, store, d;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    buttonMine = document.querySelector('.info-section .plain-button');
                    if (!(!__spreadArray([], Array.from((buttonMine === null || buttonMine === void 0 ? void 0 : buttonMine.classList) || []), true).includes('disabled') ||
                        ['mine', 'claim', 'feed', 'water', 'hatch'].includes(buttonMine === null || buttonMine === void 0 ? void 0 : buttonMine.innerHTML.toLocaleLowerCase()))) return [3 /*break*/, 2];
                    store = document.querySelector('.info-title-level');
                    if (!
                    // Stacked mining
                    (((_a = store === null || store === void 0 ? void 0 : store.textContent) === null || _a === void 0 ? void 0 : _a.charAt(2)) === ((_b = store === null || store === void 0 ? void 0 : store.textContent) === null || _b === void 0 ? void 0 : _b.charAt(0)) ||
                        (
                        // Plant watering
                        (_c = store === null || store === void 0 ? void 0 : store.textContent) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes('missed')) ||
                        // Chicken & Cow feeding
                        !isMine)) 
                    // Stacked mining
                    return [3 /*break*/, 2];
                    buttonMine.click();
                    d = new Date();
                    console.log("Mine at ".concat(d.getHours(), ":").concat(d.getMinutes()));
                    return [4 /*yield*/, pause(10000)];
                case 1:
                    _e.sent();
                    (_d = (document.querySelector('.modal__button-group .plain-button') ||
                        document.querySelector('.modal-stake .modal-stake-close img'))) === null || _d === void 0 ? void 0 : _d.click();
                    _e.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
};
function farmersWorldBot(isMine) {
    if (isMine === void 0) { isMine = true; }
    return __awaiter(this, void 0, void 0, function () {
        var config, autoFillEnergy, autoRepair, repairItem, energyCondition, foodFill, _i, _a, item, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    config = getConfig();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 12, , 14]);
                    autoFillEnergy = config.autoFillEnergy;
                    autoRepair = config.autoRepair;
                    repairItem = config.repairItem;
                    energyCondition = config.energyCondition;
                    foodFill = config.foodFill;
                    _i = 0, _a = Array.from(document.querySelectorAll('.vertical-carousel-container img'));
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 10];
                    item = _a[_i];
                    if (!autoFillEnergy) return [3 /*break*/, 4];
                    return [4 /*yield*/, food({ energyCondition: energyCondition, foodFill: foodFill })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    item.click();
                    return [4 /*yield*/, pause(3e3)];
                case 5:
                    _b.sent();
                    if (!(autoRepair && isMine)) return [3 /*break*/, 7];
                    return [4 /*yield*/, repair({ repairItem: repairItem })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [4 /*yield*/, mine(isMine)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9:
                    _i++;
                    return [3 /*break*/, 2];
                case 10: return [4 /*yield*/, pause(1e3)];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 12:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [4 /*yield*/, pause(1e3)];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    });
}
var mapIndex = {
    mine: 0,
    chicken: 1,
    plant: 2,
    cow: 3,
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, _b, mapItem, enabled, mapBtn;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!true) return [3 /*break*/, 8];
                _i = 0, _a = Object.entries(getConfig().maps);
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 7];
                _b = _a[_i], mapItem = _b[0], enabled = _b[1];
                if (!enabled)
                    return [2 /*return*/];
                mapBtn = (document.getElementsByClassName('navbar-container')[0].childNodes[4]);
                mapBtn.click();
                return [4 /*yield*/, pause(3e3)];
            case 2:
                _c.sent();
                (document.getElementsByClassName('modal-map-content')[0].childNodes[mapIndex[mapItem]]
                    .childNodes[0]).click();
                return [4 /*yield*/, pause(3e3)];
            case 3:
                _c.sent();
                return [4 /*yield*/, farmersWorldBot(mapIndex[mapItem] === 0)];
            case 4:
                _c.sent();
                return [4 /*yield*/, pause(3e3)];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 1];
            case 7: return [3 /*break*/, 0];
            case 8: return [2 /*return*/];
        }
    });
}); })();
/**
 * README: To config edit these values
 *
 * autoFillEnergy: Turn on/off auto evergy fill
 * autoRepair: Turn on/off auto tools repair
 * repairItem: Condition to start repair (out of 100)
 * energyCondition: Condition of current energy to fill
 * foodFill: Amount of food to fill
 */
function getConfig() {
    return {
        maps: {
            mine: true,
            chicken: true,
            plant: true,
            cow: true,
        },
        autoFillEnergy: true,
        autoRepair: true,
        repairItem: 50,
        energyCondition: 200,
        foodFill: 40,
    };
}
