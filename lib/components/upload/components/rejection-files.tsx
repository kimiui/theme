import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import type { FileRejection } from 'react-dropzone';

import { varAlpha } from 'lib/theme/styles';
import { fData } from 'lib/utils/format-number';

import { fileData } from '../../file-thumbnail';

// ----------------------------------------------------------------------

type Props = {
  files: readonly FileRejection[];
};

export function RejectionFiles({ files }: Readonly<Props>) {
  if (!files.length) {
    return null;
  }

  return (
    <Paper
      variant="outlined"
      sx={{
        py: 1,
        px: 2,
        mt: 3,
        textAlign: 'left',
        borderStyle: 'dashed',
        borderColor: 'error.main',
        bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
      }}
    >
      {files.map(({ file, errors }) => {
        const { path, size } = fileData(file);

        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {size ? fData(size) : ''}
            </Typography>

            {errors.map((error) => (
              <Box key={error.code} component="span" sx={{ typography: 'caption' }}>
                - {error.message}
              </Box>
            ))}
          </Box>
        );
      })}
    </Paper>
  );
}
