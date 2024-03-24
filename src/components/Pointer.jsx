import React, { useRef, useEffect } from "react";
import { useThemeColor } from "../hooks/useThemeColor";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.mjs";

export default function Pointer() {
  const canvasRef = useRef(null);
  const twConfig = resolveConfig(tailwindConfig);
  const themeColor = useThemeColor([
    twConfig.theme.colors["dk-secondary"],
    twConfig.theme.colors["secondary"],
  ]);

  useEffect(() => {
    console.log(themeColor);
  }, [themeColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const mouse = {
      x: undefined,
      y: undefined,
    };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        if (particle.isDead()) {
          particles.splice(index, 1);
        } else {
          particle.update();
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    const particlesConfig = {
      radius_in: [1, 10],
      vx_in: [-1, 1],
      vy_in: [-1, 1],
      life: 100,
      interval: 16,
    };

    const random = (min, max) => Math.random() * (max - min) + min;

    function createParticle() {
      const radius = random(...particlesConfig.radius_in);
      const x = mouse.x;
      const y = mouse.y;
      const vx = random(...particlesConfig.vx_in);
      const vy = random(...particlesConfig.vy_in);
      const color = themeColor;
      const life = 100;
      particles.push(new Particle(x, y, vx, vy, radius, color, life, ctx));

      // Call createParticle again after interval
      setTimeout(createParticle, particlesConfig.interval);
    }

    // Initial call to start creating particles
    createParticle();

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      window.removeEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      window.removeEventListener("touchmove", (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      });

      // Clear particles when unmounting
      particles = [];
    };
  }, [themeColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    ></canvas>
  );
}

function Particle(x, y, vx, vy, radius, color, life, ctx) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = color;
  this.life = life;
  this.ctx = ctx;

  this.draw = function () {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  };

  this.update = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    this.draw();
  };

  this.isDead = function () {
    return this.life <= 0;
  };
}
