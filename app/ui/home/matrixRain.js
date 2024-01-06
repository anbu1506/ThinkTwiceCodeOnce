"use client";

import React, { useEffect } from "react";

const MatrixRain = () => {
  useEffect(() => {
    // Get the canvas and its context
    const c = document.getElementById("c");
    const ctx = c.getContext("2d");

    // Making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // Chinese characters - taken from the unicode charset
    let matrix =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    // Converting the string into an array of single characters
    matrix = matrix.split("");

    const font_size = 10;
    const columns = c.width / font_size;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      // Black BG for the canvas
      // Translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, c.width, c.height);

      ctx.fillStyle = "#f4427d"; // Green text
      ctx.font = font_size + "px arial";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 35);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that useEffect runs once on mount

  return <canvas id="c"></canvas>;
};

export default MatrixRain;
