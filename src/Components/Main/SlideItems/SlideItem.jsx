import React, { useState, useEffect } from "react";
import Carousel from "../../UI/Carousel/Carousel";
import slides from "../../../Other/ItemData/ItemData";

const SlideItem = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    // Use internal `active` state only: auto-advance every 5s
    const iv = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(iv);
  }, []);

  return (
    <>
      <Carousel>
        {slides.map((item, i) => {
          const prevIndex = (i - 1 + slides.length) % slides.length;
          const nextIndex = (i + 1) % slides.length;

          return (
            <div
              key={item.id}
              id={item.id}
              className={`carousel-item relative w-full ${active === i ? "" : "hidden"}`}
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-110 object-cover object-center"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button
                  type="button"
                  onClick={() => setActive(prevIndex)}
                  className="btn btn-circle transi
                  on-all duration-200 hover:bg-[#e0e0e0] hover:scale-[1.1]"
                >
                  ❮
                </button>
                <button
                  type="button"
                  onClick={() => setActive(nextIndex)}
                  className="btn btn-circle transi
                  on-all duration-200 hover:bg-[#e0e0e0] hover:scale-[1.1]"
                >
                  ❯
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default SlideItem;
