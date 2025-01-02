'use client';
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { varContainer, MotionViewport } from '../../../../components/animate';
import { getVariant } from '../get-variant';
export function ContainerView({ selectVariant, sx, ...other }) {
    const scrollRef = useRef(null);
    return (_jsx(Stack, { ref: scrollRef, component: m.div, variants: varContainer(), sx: {
            py: 5,
            gap: 3,
            borderRadius: 2,
            flex: '1 1 auto',
            overflowX: 'auto',
            bgcolor: 'background.neutral',
            ...sx,
        }, ...other, children: _jsx(_Fragment, { children: [...Array(40)].map((_, index) => (_jsx(Box, { component: MotionViewport, variants: getVariant(selectVariant), viewport: { root: scrollRef, once: true, amount: 0.1 }, sx: {
                    py: 4,
                    width: 1,
                    mx: 'auto',
                    maxWidth: 480,
                    flexShrink: 0,
                    borderRadius: 1,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    boxShadow: (theme) => theme.shadows[8],
                }, children: _jsxs(Typography, { variant: "body2", children: ["Item ", index + 1] }) }, index))) }) }));
}
