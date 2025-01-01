import type { Theme } from '@mui/material/styles';
export declare const dialog: {
    MuiDialog: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiDialog"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").DialogClasses, "MuiDialog", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").DialogProps> | ((props: Partial<import("@mui/material").DialogProps> & {
                ownerState: Partial<import("@mui/material").DialogProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiDialogTitle: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiDialogTitle"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiDialogTitle", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").DialogTitleProps> | ((props: Partial<import("@mui/material").DialogTitleProps> & {
                ownerState: Partial<import("@mui/material").DialogTitleProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiDialogContent: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiDialogContent"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").DialogContentClasses, "MuiDialogContent", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").DialogContentProps> | ((props: Partial<import("@mui/material").DialogContentProps> & {
                ownerState: Partial<import("@mui/material").DialogContentProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiDialogActions: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiDialogActions"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").DialogActionsClasses, "MuiDialogActions", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").DialogActionsProps> | ((props: Partial<import("@mui/material").DialogActionsProps> & {
                ownerState: Partial<import("@mui/material").DialogActionsProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};