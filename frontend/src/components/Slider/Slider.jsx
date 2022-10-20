import style from './Slider.css';
import {useState, useEffect} from "react";
import slide_1 from "../Main/Location/img/slide_1.jpg";
import slide_2 from "../Main/Location/img/slide_2.jpg";
import slide_3 from "../Main/Location/img/slide_3.jpg";
import slide_4 from "../Main/Location/img/slide_4.jpg";

const img = [
  <img key={1} src={slide_1} />,
  <img key={2} src={slide_2} />,
  <img key={3} src={slide_3} />,
  <img key={4} src={slide_4} />,
  <img key={5} src={slide_1} />,
  <img key={6} src={slide_2} />,
  <img key={7} src={slide_3} />,
  <img key={8} src={slide_4} />,
];

export const Slider = () => {
const [activeIndex, setActiveIndex] = useState(0);
 
useEffect(() => {
    setInterval(() => {
        setActiveIndex((current) => {
            const res = current === img.length - 1 ? 0 : current + 1;
            return res;
        });
    }, 3000);
    return () => clearInterval()
}, []);
 
const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
  <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
  );
};