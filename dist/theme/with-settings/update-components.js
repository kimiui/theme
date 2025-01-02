function getSlotStyles(slot, props) {
    const slotStyles = typeof slot === 'function' && props ? slot(props) : (slot ?? {});
    return slotStyles;
}
// ----------------------------------------------------------------------
export function updateComponentsWithSettings(components, settingsState) {
    const MuiCard = {
        styleOverrides: {
            root: (props) => {
                const { theme } = props;
                const rootStyles = getSlotStyles(components?.MuiCard?.styleOverrides?.root, props);
                return {
                    ...rootStyles,
                    ...(settingsState?.contrast === 'high' && {
                        boxShadow: theme.vars.shadows[1],
                    }),
                };
            },
        },
    };
    const MuiCssBaseline = {
        styleOverrides: {
            html: {
                fontSize: settingsState?.fontSize,
            },
        },
    };
    return {
        components: {
            MuiCard,
            MuiCssBaseline,
        },
    };
}
