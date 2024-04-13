import React from "react";
import ProductOverview from "./ProductOverview";
import Detail from "./Detail";
import Quality from "./Quality";
import About from "./About";
import Work from "./Work";
import HowWeWork from "./HowWeWork";

import socks1 from "../img/socks1.jpg";
import socks2 from "../img/socks2.jpg";
import socks3 from "../img/socks3.jpg";
import socks4 from "../img/socks4.jpg";
import socks5 from "../img/socks5.jpg";

const Content = function () {
  const images = [socks1, socks2, socks3, socks4, socks5];
  return (
    <div className="content">
      <main className="hotel-view">
        <ProductOverview images={images} />
        <Detail />
        <Quality />
        <About />
        <Work />
        <HowWeWork />
      </main>
    </div>
  );
};

export default Content;
