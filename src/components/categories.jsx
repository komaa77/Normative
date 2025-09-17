import React, { useState } from "react";
import camera from '../assets/Category-Camera.svg'
import phone from '../assets/Category-CellPhone.svg'
import computer from '../assets/Category-Computer.svg'
import gamepad from '../assets/Category-Gamepad.svg'
import headphones from '../assets/Category-Headphone.svg'
import smartwatch from '../assets/Category-SmartWatch.svg'
import arrow from '../assets/icons arrow-right (2).svg';
import arrow2 from '../assets/icons_arrow-left.svg';


const categories = [
    { id: 1, name: "Phones", img: phone },
    { id: 2, name: "Computers", img: computer },
    { id: 3, name: "SmartWatch", img: smartwatch },
    { id: 4, name: "Camera", img: camera },
    { id: 5, name: "Headphones", img: headphones },
    { id: 6, name: "Gaming", img: gamepad },
    { id: 7, name: "Gaming", img: computer },
    { id: 8, name: "Gaming", img: smartwatch },
  ];
  
  const Categories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const visibleItems = 6;
  
    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? categories.length - visibleItems : prev - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) =>
        prev === categories.length - visibleItems ? 0 : prev + 1
      );
    };
  
    return (
      <section className="catigories">
        <div className="container">
          <div className="catigories__top">
            <div className="catigories__title">
              <div className="border"></div>
              <div className="section__titles">
                <div className="red__icon2"></div>
                <p className="section__text">Categories</p>
              </div>
              <div className="categories__main">
                <div className="categories__text">
                <h3>Browse By Category</h3>
                </div>
                <div className="naviigation__buttons">
                  <div className="left__button">
                    <button onClick={prevSlide}>
                      <span>
                        <img src={arrow2} alt="Prev" />
                      </span>
                    </button>
                  </div>
                  <div className="right__button">
                    <button onClick={nextSlide}>
                      <span>
                        <img src={arrow} alt="Next" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="catigorie__items">
            {categories
              .slice(currentIndex, currentIndex + visibleItems)
              .map((cat) => (
                <div className="catigorie__item" key={cat.id}>
                  <img src={cat.img} alt={cat.name} />
                  <p className="categorie__item-text">{cat.name}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;