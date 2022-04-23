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
var utils = {
    pause: function (duration) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res) {
                        setTimeout(res, duration);
                    })];
            });
        });
    },
};
function farmersWorldBot() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __awaiter(this, void 0, void 0, function () {
        var autoFillEnergy, autoRepair, repairItem, energyCondition, foodFill, currentEnergy, currentFish, foodInputCount, foodsToAdd, i, _i, _j, item, buttonRepair, qualityBar, quality, buttonMine, store, d, error_1;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 16, , 18]);
                    autoFillEnergy = true;
                    autoRepair = true;
                    repairItem = 50;
                    energyCondition = 200;
                    foodFill = 40;
                    if (!autoFillEnergy) return [3 /*break*/, 7];
                    currentEnergy = parseInt(document.querySelectorAll('.resource-number div')[3].innerText, 10);
                    currentFish = parseInt(document.querySelectorAll('.resource-number')[2].innerText, 10);
                    if (!(currentEnergy <= energyCondition && currentFish >= foodFill)) return [3 /*break*/, 7];
                    (_a = document.querySelector('.resource-energy img')) === null || _a === void 0 ? void 0 : _a.click();
                    return [4 /*yield*/, utils.pause(1000)];
                case 1:
                    _k.sent();
                    foodInputCount = parseInt((_b = document.querySelector('input.modal-input')) === null || _b === void 0 ? void 0 : _b.value, 10);
                    foodsToAdd = (foodFill * 5 - foodInputCount) / 5;
                    i = 0;
                    _k.label = 2;
                case 2:
                    if (!(i < foodsToAdd)) return [3 /*break*/, 5];
                    console.log('energy click');
                    (_c = document.querySelector("img.image-button[alt='Plus Icon']")) === null || _c === void 0 ? void 0 : _c.click();
                    return [4 /*yield*/, utils.pause(200)];
                case 3:
                    _k.sent();
                    _k.label = 4;
                case 4:
                    i += 1;
                    return [3 /*break*/, 2];
                case 5:
                    console.log('modal-wrapper click');
                    document.querySelector('.modal-wrapper .plain-button').click();
                    return [4 /*yield*/, utils.pause(2e4)];
                case 6:
                    _k.sent();
                    _k.label = 7;
                case 7:
                    _i = 0, _j = Array.from(document.querySelectorAll('.vertical-carousel-container img'));
                    _k.label = 8;
                case 8:
                    if (!(_i < _j.length)) return [3 /*break*/, 14];
                    item = _j[_i];
                    item.click();
                    return [4 /*yield*/, utils.pause(3e3)];
                case 9:
                    _k.sent();
                    if (!autoRepair) return [3 /*break*/, 11];
                    buttonRepair = ((_d = document.querySelectorAll('.info-section .plain-button')) === null || _d === void 0 ? void 0 : _d[1]);
                    qualityBar = (_e = document.querySelector('.card-number')) === null || _e === void 0 ? void 0 : _e.innerText.split('/ ');
                    quality = (Number(qualityBar === null || qualityBar === void 0 ? void 0 : qualityBar[0]) || 1) / (Number(qualityBar === null || qualityBar === void 0 ? void 0 : qualityBar[1]) || 1);
                    if (!(quality &&
                        buttonRepair &&
                        !__spreadArray([], Array.from(buttonRepair.classList), true).includes('disabled') &&
                        quality <= repairItem / 100)) return [3 /*break*/, 11];
                    buttonRepair.click();
                    return [4 /*yield*/, utils.pause(10000)];
                case 10:
                    _k.sent();
                    _k.label = 11;
                case 11:
                    buttonMine = document.querySelector('.info-section .plain-button');
                    if (!(!__spreadArray([], Array.from((buttonMine === null || buttonMine === void 0 ? void 0 : buttonMine.classList) || []), true).includes('disabled') ||
                        ['mine', 'claim', 'feed', 'water'].includes(buttonMine === null || buttonMine === void 0 ? void 0 : buttonMine.innerHTML.toLocaleLowerCase()))) return [3 /*break*/, 13];
                    store = document.querySelector('.info-title-level');
                    if (!(((_f = store === null || store === void 0 ? void 0 : store.textContent) === null || _f === void 0 ? void 0 : _f.charAt(2)) === ((_g = store === null || store === void 0 ? void 0 : store.textContent) === null || _g === void 0 ? void 0 : _g.charAt(0)))) return [3 /*break*/, 13];
                    console.log('buttonMine.click()');
                    buttonMine.click();
                    d = new Date();
                    console.log("Mine at ".concat(d.getHours(), ":").concat(d.getMinutes()));
                    return [4 /*yield*/, utils.pause(10000)];
                case 12:
                    _k.sent();
                    (_h = (document.querySelector('.modal__button-group .plain-button') ||
                        document.querySelector('.modal-stake .modal-stake-close img'))) === null || _h === void 0 ? void 0 : _h.click();
                    _k.label = 13;
                case 13:
                    _i++;
                    return [3 /*break*/, 8];
                case 14: return [4 /*yield*/, utils.pause(1e3)];
                case 15:
                    _k.sent();
                    return [3 /*break*/, 18];
                case 16:
                    error_1 = _k.sent();
                    console.error(error_1);
                    return [4 /*yield*/, utils.pause(1e3)];
                case 17:
                    _k.sent();
                    return [3 /*break*/, 18];
                case 18: return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, farmersWorldBot()];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}); })();
