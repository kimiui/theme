import { useCallback } from 'react';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import type { Theme, SxProps } from '@mui/material/styles';

import { toast } from 'lib/components/snackbar';

// ----------------------------------------------------------------------

type Props = ButtonProps & {
  sx?: SxProps<Theme>;
  onClose?: () => void;
  onSignOut?: VoidFunction;
};

export function SignOutButton({ onClose, onSignOut, ...other }: Props) {
  const handleLogout = useCallback(async () => {
    try {
      onSignOut?.();
      onClose?.();
    } catch (error) {
      console.error(error);
      toast.error('Unable to logout!');
    }
  }, [onClose, onSignOut]);

  return (
    <Button fullWidth variant="soft" size="large" color="error" onClick={handleLogout} {...other}>
      Logout
    </Button>
  );
}
