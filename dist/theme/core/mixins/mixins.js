import { borderGradient } from './border';
import { maxLine, textGradient } from './text';
import { bgBlur, bgGradient } from './background';
import { paperStyles, menuItemStyles } from './global-styles-components';
/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../../extend-theme-types.d.ts}
 */
export const mixins = {
    hideScrollX: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowX: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
    },
    hideScrollY: {
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
    },
    borderGradient,
    bgGradient,
    bgBlur,
    textGradient,
    paperStyles,
    menuItemStyles,
    maxLine,
};
