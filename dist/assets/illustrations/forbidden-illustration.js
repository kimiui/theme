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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var background_shape_1 = require("./background-shape");
// ----------------------------------------------------------------------
var ViewBox = (0, styles_1.styled)('svg')(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: '100%',
        fill: 'none',
        viewBox: '0 0 480 360',
        xmlns: 'http://www.w3.org/2000/svg',
    });
});
function ForbiddenIllustration(_a) {
    var hideBackground = _a.hideBackground, sx = _a.sx, other = __rest(_a, ["hideBackground", "sx"]);
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_LIGHT = theme.vars.palette.primary.light;
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    var PRIMARY_DARKER = theme.vars.palette.primary.darker;
    return ((0, jsx_runtime_1.jsxs)(ViewBox, { sx: __assign({ width: 320, maxWidth: 1, flexShrink: 0, height: 'auto' }, sx), children: [!hideBackground && (0, jsx_runtime_1.jsx)(background_shape_1.BackgroundShape, {}), (0, jsx_runtime_1.jsx)("image", { href: "/assets/illustrations/characters/character-4.webp", height: "300", x: "220", y: "30" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, d: "M425.545 119.2c0-5-4.6-9-9.6-8.2-2-3.7-6-6-10.2-5.9 4.3-21.4-30-21.4-25.7 0-8.7-.8-15.1 9.4-10.4 16.8 2.1 3.5 5.9 5.6 10 5.5h38.7v-.1c4.1-.4 7.2-3.9 7.2-8.1zm-321.3 81.8c.1-4.2-4.1-7.8-8.2-7-1.7-3.2-5.1-5.1-8.8-5 3.8-18.4-25.8-18.4-22 0-7.4-.7-12.9 8.1-8.9 14.4 1.8 3 5.1 4.8 8.6 4.7h33.2v-.1c3.4-.4 6.1-3.4 6.1-7z", opacity: "0.08" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFAB00", d: "M111.045 142.2c58.7-1 58.6-88.3 0-89.2-58.6 1-58.6 88.3 0 89.2z", opacity: "0.12" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FFD666", d: "M111.045 121c30.8-.5 30.8-46.3 0-46.8-30.8.5-30.8 46.3 0 46.8z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#FBCDBE", d: "M278.045 250.1c-4.6-6.5-14 5.1-18.1 7.2-.6-2.1 1.5-41.3-1.4-41.8-2.8-3-8.1-.7-8 3.3.2-4 .5-11.3-5.6-10.2-4.8.6-3.8 6.9-3.8 10.2.1-6.1-9.5-6.1-9.4 0v5.6c.2-4.2-5.7-6.4-8.3-3-2.6-.2-.4 41.8-1.1 43.3-.2 10 8.7 19 18.8 18.7 6.1.4 12.6-1.2 16.8-5.9l19.7-21c1.7-1.6 1.8-4.5.4-6.4z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#000", fillOpacity: "0.24", fillRule: "evenodd", d: "M248.745 212.3v32.8h1.9v-31.9c.1-2.9-2.8-5.2-5.6-4.6 2 0 3.7 1.7 3.7 3.7zm-9.4 5.6v27.2h1.9v-26.3c.1-2.8-2.8-5.2-5.5-4.6 1.9 0 3.6 1.8 3.6 3.7zm-9.4 27.2v-21.6c.1-2-1.7-3.7-3.7-3.8 2.8-.6 5.6 1.8 5.5 4.6V245h-1.8v.1z", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M244.945 189.8c-67.6 1.3-77 97-11 111.4 81 11.8 92.7-107.3 11-111.4zm-48.5 56.2c-1-40.4 49.8-63.8 79.9-36.9l-68.3 68.3c-7.5-8.7-11.6-19.9-11.6-31.4zm48.5 48.5c-11.5 0-22.7-4.1-31.4-11.6l68.3-68.3c27 30.1 3.5 80.9-36.9 79.9z" }), (0, jsx_runtime_1.jsx)("path", { fill: "url(#paint0_linear_1_129)", d: "M169.245 261h-11.3v-66.6c0-4.5-1.5-5.6-5.6-5.6-5.3.3-13.8-1.4-17.1 4l-55 68.3c-2.7 3.3-1.8 8.8-2 12.8 0 4.1 1.5 5.6 5.6 5.6h54.7v21.7c-.9 7.9 9.1 5.2 13.7 5.6 4.1 0 5.6-1.5 5.6-5.6v-21.7h11.4c4.4 0 5.6-1.5 5.6-5.6-.3-4.8 2-13.8-5.6-12.9zm-30.8 0h-36l36-44.4V261zm263.9 12.1c1.9 44.8-78.7 46-78 1.2h19.3c-.8 15.3 18.3 21.4 30.1 15.5 12.7-6 12.3-29.1-1-34-5.6-2.8-16.6-2-23.1-2.1v-15.1c6.3-.2 17.6.9 22.7-2.3 11.6-5.5 11.9-25.4.9-31.4-10.8-5.9-29 .1-28.2 14.5h-19.4c-.5-28.1 35.4-38.5 57-28.2 23.4 9 24.1 45.5-.2 54.6 12.3 3.9 20.1 14.6 19.9 27.3z" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", { id: "paint0_linear_1_129", x1: "78.245", x2: "78.245", y1: "187.309", y2: "307.306", gradientUnits: "userSpaceOnUse", children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: PRIMARY_LIGHT }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: PRIMARY_DARK })] }) })] }));
}
exports.default = (0, react_1.memo)(ForbiddenIllustration);
