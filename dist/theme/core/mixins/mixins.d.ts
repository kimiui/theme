import { borderGradient } from './border';
import { maxLine, textGradient } from './text';
import { bgBlur, bgGradient } from './background';
import { paperStyles, menuItemStyles } from './global-styles-components';
export type * from './text';
export type * from './border';
export type * from './background';
export type * from './global-styles-components';
export type BgBlurMixin = typeof bgBlur;
export type MaxLineMixin = typeof maxLine;
export type BgGradientMixin = typeof bgGradient;
export type PaperStylesMixin = typeof paperStyles;
export type TextGradientMixin = typeof textGradient;
export type MenuItemStylesMixin = typeof menuItemStyles;
export type BorderGradientProps = typeof borderGradient;
/**
 * TypeScript (type definition and extension)
 * @to {@link file://./../../extend-theme-types.d.ts}
 */
export declare const mixins: {
    hideScrollX: {
        msOverflowStyle: any;
        scrollbarWidth: any;
        overflowX: any;
        '&::-webkit-scrollbar': {
            display: string;
        };
    };
    hideScrollY: {
        msOverflowStyle: any;
        scrollbarWidth: any;
        overflowY: any;
        '&::-webkit-scrollbar': {
            display: string;
        };
    };
    borderGradient: typeof borderGradient;
    bgGradient: typeof bgGradient;
    bgBlur: typeof bgBlur;
    textGradient: typeof textGradient;
    paperStyles: typeof paperStyles;
    menuItemStyles: typeof menuItemStyles;
    maxLine: typeof maxLine;
};
