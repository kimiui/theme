'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = AuthProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hooks_1 = require("lib/hooks");
var axios_1 = __importStar(require("lib/utils/axios"));
var constant_1 = require("./constant");
var auth_context_1 = require("./auth-context");
var utils_1 = require("./utils");
function AuthProvider(_a) {
    var _this = this;
    var children = _a.children;
    var _b = (0, hooks_1.useSetState)({
        user: null,
        loading: true,
    }), state = _b.state, setState = _b.setState;
    var checkUserSession = (0, react_1.useCallback)(function () { return __awaiter(_this, void 0, void 0, function () {
        var accessToken, res, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    accessToken = sessionStorage.getItem(constant_1.STORAGE_KEY);
                    if (!(accessToken && (0, utils_1.isValidToken)(accessToken))) return [3 /*break*/, 2];
                    (0, utils_1.setSession)(accessToken);
                    return [4 /*yield*/, axios_1.default.get(axios_1.endpoints.auth.me)];
                case 1:
                    res = _a.sent();
                    user = res.data.user;
                    setState({ user: __assign(__assign({}, user), { accessToken: accessToken }), loading: false });
                    return [3 /*break*/, 3];
                case 2:
                    setState({ user: null, loading: false });
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    setState({ user: null, loading: false });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [setState]);
    (0, react_1.useEffect)(function () {
        checkUserSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // ----------------------------------------------------------------------
    var checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';
    var status = state.loading ? 'loading' : checkAuthenticated;
    var memoizedValue = (0, react_1.useMemo)(function () {
        var _a, _b;
        return ({
            user: state.user
                ? __assign(__assign({}, state.user), { role: (_b = (_a = state.user) === null || _a === void 0 ? void 0 : _a.role) !== null && _b !== void 0 ? _b : 'admin' }) : null,
            checkUserSession: checkUserSession,
            loading: status === 'loading',
            authenticated: status === 'authenticated',
            unauthenticated: status === 'unauthenticated',
        });
    }, [checkUserSession, state.user, status]);
    return (0, jsx_runtime_1.jsx)(auth_context_1.AuthContext.Provider, { value: memoizedValue, children: children });
}