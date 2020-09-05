import React from 'react';
import Nasa from '../nasa/Nasa';
import {Box} from '@material-ui/core';

export default function NasaView() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Nasa />
    </Box>
  )
}
