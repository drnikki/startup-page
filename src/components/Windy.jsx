import React from "react";

class Windy extends React.Component {
  render() {
    return (
      <>
        <div className="sticky rounded-xl overflow-hidden h-80 border-0 dark:border-4 dark:border-off-white2">
          <iframe className="overflow-hidden flex bg-blue3 xs:hidden w-full" width="505" height="320"
            src="https://embed.windy.com/embed2.html?lat=35.871&lon=128.123&detailLat=37.548&detailLon=126.903&width=505&height=320&zoom=6&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1">
          </iframe>
        </div>
      </>
    );
  }
}

export default Windy