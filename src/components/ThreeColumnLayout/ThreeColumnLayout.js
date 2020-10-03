import React from 'react'
import FullWidthGrid from '../FullWidthGrid/FullWidthGrid';

export default function ThreeColumnLayout() {
  return (
    <div style={{display:"flex", width:"100%", height:"300px"}}>
      <div></div>
      <div><FullWidthGrid/></div>
      <div></div>
    </div>
  )
}
