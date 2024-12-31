'use client';

import type { PaperProps } from '@mui/material/Paper';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { paths } from 'src/docs/routes/paths';

import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const boxProps = {
  gap: 3,
  display: 'grid',
  gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
};

// ----------------------------------------------------------------------

export function ShadowsView() {
  const theme = useTheme();

  const shadows = Object.values(theme.shadows);

  const SYSTEM = shadows.slice(1, shadows.length);
  console.log(SYSTEM);

  const DEMO = [
    {
      name: 'System',
      component: (
        <Box {...boxProps}>
          {SYSTEM.map((shadow, index) => (
            <ShadowCard key={shadow} title={`z${index + 1}`} sx={{ boxShadow: shadow }} />
          ))}
        </Box>
      ),
    },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Shadows"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Shadows' }]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}

// ----------------------------------------------------------------------

function ShadowCard({ sx, title }: PaperProps) {
  return (
    <Paper
      sx={{
        p: 3,
        minHeight: 120,
        display: 'flex',
        alignItems: 'center',
        typography: 'subtitle2',
        justifyContent: 'center',
        textTransform: 'capitalize',
        ...sx,
      }}
    >
      {title}
    </Paper>
  );
}
