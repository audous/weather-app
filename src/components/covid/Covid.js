import React from 'react'

export default function Covid() {
  return (
    <div>
      <iframe src="https://ourworldindata.org/coronavirus-data-explorer?yScale=log&zoomToSelection=true&minPopulationFilter=1000000&year=latest&country=USA~CHN&region=World&deathsMetric=true&interval=smoothed&aligned=true&hideControls=true&smoothing=7&pickerMetric=location&pickerSort=asc" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}}></iframe>
    </div>
  )
}
