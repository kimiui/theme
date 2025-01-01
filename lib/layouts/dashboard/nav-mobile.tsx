'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { usePathname } from 'routes-react';
import Drawer, { drawerClasses } from '@mui/material/Drawer';

import { Logo } from 'lib/components/logo';
import { Scrollbar } from 'lib/components/scrollbar';
import { NavSectionVertical } from 'lib/components/nav-section';
import type { NavSectionProps } from 'lib/components/nav-section';

import { NavHelper } from '../components/nav-helper';

// ----------------------------------------------------------------------

type NavMobileProps = NavSectionProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx, ...other }: NavMobileProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{
        [`& .${drawerClasses.paper}`]: {
          overflow: 'unset',
          bgcolor: 'var(--layout-nav-bg)',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box sx={{ pl: 3.5, pt: 2.5, pb: 1 }}>
          <Logo />
        </Box>
      )}

      <Scrollbar fillContent>
        <NavSectionVertical data={data} sx={{ px: 2, flex: '1 1 auto' }} {...other} />
        <NavHelper />
      </Scrollbar>

      {slots?.bottomArea}
    </Drawer>
  );
}