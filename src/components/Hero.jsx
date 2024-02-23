import React from 'react';
 // Importing the image
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from '../assets/images/logo/Capture.png';
import heroImage1 from '../assets/images/hero/godfather-image.jpeg';
import heroImage2 from '../assets/images/hero/htf.jpeg';
import heroImage3 from '../assets/images/hero/boyhood.jpg';
import heroImage4 from '../assets/images/hero/legally-blonde.jpg';
import heroImage5 from '../assets/images/hero/la-haine.jpeg';
import heroImage6 from '../assets/images/hero/gladiator.jpeg';
import heroImage7 from '../assets/images/hero/perks-wallflower.jpg';
import heroImage8 from '../assets/images/hero/titanic.jpg';
import heroImage9 from '../assets/images/hero/past-lives.jpeg';

function Hero () {
    return (
      <section className=" hero w-full  md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto">
        <div>
        <img src= {logo} alt="Logo Image" 
        className="hero-image mb-4 md:mb-6 mx-auto px-3" />

          {/* <h3 className="hero-title text-4xl md:text-6xl font-semibold">
            Movie Rayders
          </h3> */}
          <p className=" hero-para text-base md:text-lg my-4 md:my-6">
          Discover movies effortlessly by title or category
          </p>
          
        </div>
        <ShuffleGrid />
      </section>
    );
  };
  
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  };
  
  const squareData = [
    {
      id: 1,
      src: heroImage1,
    },
    {
      id: 2,
      src: heroImage2,
    },
    {
      id: 3,
      src: heroImage3,
    },
    {
      id: 4,
      src: heroImage4,
    },
    {
      id: 5,
      src: heroImage5,
    },
    {
      id: 6,
      src: heroImage6,
    },
    {
      id: 7,
      src: heroImage7,
    },
    {
      id: 8,
      src: heroImage8,
    },
    {
      id: 9,
      src: heroImage9,
    },
  
  ];
  
  const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
        }}
      ></motion.div>
    ));
  };
  
  const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());
  
    useEffect(() => {
      shuffleSquares();
  
      return () => clearTimeout(timeoutRef.current);
    }, []);
  
    const shuffleSquares = () => {
      setSquares(generateSquares());
  
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
  
    return (
      <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
        {squares.map((sq) => sq)}
      </div>
    );
  };
  
  export default Hero;
  
  