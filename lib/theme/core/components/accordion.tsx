import { accordionClasses } from '@mui/material/Accordion';
import { typographyClasses } from '@mui/material/Typography';
import type { Theme, Components } from '@mui/material/styles';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

// ----------------------------------------------------------------------

const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }: { theme: any }) => ({
      backgroundColor: 'transparent',
      [`&.${accordionClasses.expanded}`]: {
        boxShadow: theme.shadows[8],
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.vars.palette.background.paper,
      },
      [`&.${accordionClasses.disabled}`]: { backgroundColor: 'transparent' },
    }),
  },
};

// ----------------------------------------------------------------------

const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }: { theme: any }) => ({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      [`&.${accordionSummaryClasses.disabled}`]: {
        opacity: 1,
        color: theme.vars.palette.action.disabled,
        [`& .${typographyClasses.root}`]: { color: 'inherit' },
      },
    }),
    expandIconWrapper: { color: 'inherit' },
  },
};

// ----------------------------------------------------------------------

export const accordion = { MuiAccordion, MuiAccordionSummary };
