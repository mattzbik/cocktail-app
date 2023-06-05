import { Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';

export const Wrapper: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Grid
      container
      item
      maxWidth={{ xs: '400px', md: '800px' }}
      width="100%"
      mx="auto"
      my={2}
    >
      {children}
    </Grid>
  );
};
