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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RHFCountrySelect = RHFCountrySelect;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_hook_form_1 = require("react-hook-form");
var country_select_1 = require("lib/components/country-select");
// ----------------------------------------------------------------------
function RHFCountrySelect(_a) {
    var name = _a.name, helperText = _a.helperText, other = __rest(_a, ["name", "helperText"]);
    var _b = (0, react_hook_form_1.useFormContext)(), control = _b.control, setValue = _b.setValue;
    return ((0, jsx_runtime_1.jsx)(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var _b;
            var field = _a.field, error = _a.fieldState.error;
            return ((0, jsx_runtime_1.jsx)(country_select_1.CountrySelect, __assign({ id: "rhf-country-select-".concat(name), value: field.value, onChange: function (event, newValue) { return setValue(name, newValue, { shouldValidate: true }); }, error: !!error, helperText: (_b = error === null || error === void 0 ? void 0 : error.message) !== null && _b !== void 0 ? _b : helperText }, other)));
        } }));
}
