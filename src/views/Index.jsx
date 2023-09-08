/*eslint-disable*/
import React from "react";

// import config file
import config from "../config/"

// components
import Clock from "../components/Clock";
import Unsplash from "../components/Unsplash";
import SearchBox from "../components/Search";
import SolarGraph from "../components/SolarGraph";
import WeatherBox from "../components/Weather";
import TDMarketData from "../components/TDMarketData";
import Toggle from "../components/ThemeToggle";
import ThemeProvider from "../components/ThemeContext";
import News from "../components/News";
import Windy from "../components/Windy";
import Bookmark from "../components/Bookmark";

// assets
import desert from "../assets/img/desert.mp4"

export default function Index() {
  return (
    <>
      <section className="bg-off-white1 dark:bg-blue3 min-h-screen flex items-center justify-center pt-10 pb-10 font-helvetica">
        <div className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 gap-y-6 gap-x-6 grid-flow-row-dense content-center">

          {/* row 1 */}
          <div className="overflow-hidden rounded-xl col-span-1 row-span-2 h-80 w-36 shadow-4xl dark:shadow-none">
            <div className="sticky rounded-xl overflow-hidden h-80 w-36 border-0 dark:border-4 dark:border-off-white2">
              <video className="relative object-cover min-h-full max-w-xl -left-12" src={desert} type="video/mp4" autoPlay muted loop />
            </div>
          </div>
          <div className="rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none">
            <div className="sticky rounded-xl overflow-hidden h-36 w-36 border-0 dark:border-4 dark:border-off-white2">
              <video className="relative object-cover min-h-full max-w-sm right-48" src={desert} type="video/mp4" autoPlay muted loop />
            </div>
          </div>
          <div className="bg-blue3 text-black rounded-xl col-span-2 h-36 w-80 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2"><SearchBox /></div>
          <Bookmark title={config.bookmark[0].title} content={config.bookmark[0].content} />
          <div className="bg-off-white1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none"><Unsplash search={config.unsplash.box1} /></div>
          <div className="bg-green2 dark:bg-green1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2"><WeatherBox /></div>

          {/* row 2 */}
          <div className="bg-off-white1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none"><Unsplash search={config.unsplash.box2} /></div>
          <Bookmark title={config.bookmark[1].title} content={config.bookmark[1].content} />
          <div className="overflow-hidden rounded-xl col-span-3 row-span-2 h-80 shadow-4xl dark:shadow-none "><Windy /></div>
          <div className="bg-off-white1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none"><Unsplash search={config.unsplash.box3} /></div>

          {/* row 3 */}
          <Bookmark title={config.bookmark[2].title} content={config.bookmark[2].content} />
          <div className="bg-[#000000] rounded-xl col-span-2 row-span-2 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2"><SolarGraph /></div>
          <Bookmark title={config.bookmark[3].title} content={config.bookmark[3].content} />

          {/* row 4 */}
          <Bookmark title={config.bookmark[4].title} content={config.bookmark[4].content} />
          <div className="bg-off-white1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none"><Unsplash search={config.unsplash.box4} /></div>
          <div className="flex items-center justify-center bg-blue3 text-white rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2">
            <ThemeProvider>
              <Toggle />
            </ThemeProvider>
          </div>
          <div className="text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none"><Unsplash search={config.unsplash.box5} /></div>
          <div className="bg-red2 dark:bg-red1 text-black rounded-xl col-span-1 h-36 w-36 shadow-4xl dark:shadow-none border-0 dark:border-4 dark:border-off-white2"><Clock /></div>

        </div>
      </section>
    </>
  );
}