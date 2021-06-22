import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = (props) => {
  return (
    <div className="relative bg-amazon_blue-light">
      <div className="w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20">
        {props.banner === "1" ? (
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            width={250}
          >
            <div>
              <img src="1.png" loading="lazy" placeholder="1" />
            </div>
            <div>
              <img src="2.png" loading="lazy" placeholder="2" />
            </div>
            <div>
              <img src="3.png" loading="lazy" placeholder="3" />
            </div>
          </Carousel>
        ) : (
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            width={300}
          >
            <div>
              <img src="4.png" loading="lazy" placeholder="4" />
            </div>
            <div>
              <img src="5.png" loading="lazy" placeholder="5" />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Banner;
