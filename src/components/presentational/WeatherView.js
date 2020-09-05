import React from 'react'
import {Box} from '@material-ui/core';
import Weather from '../weather/Weather';

export default function WeatherView() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Weather />
    </Box>
  )
}
