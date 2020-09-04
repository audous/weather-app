import React from 'react';
import {Box} from '@material-ui/core';

export default function VariableBoxLayout() {
  return (
    <Box width={1} border={1}>
      
      <Box flexDirection="column">
        <h2>BoxA Vertical Box with multiple</h2>
        <Box>BoxA Box1</Box>
        <Box>BoxA Box2</Box>
        <Box>BoxA Box3</Box>
      </Box>
      
      <Box>BoxB</Box>
      <Box>BoxC</Box>
      <Box>BoxD</Box>
      <Box>BoxE</Box>
    </Box>

  )
}
