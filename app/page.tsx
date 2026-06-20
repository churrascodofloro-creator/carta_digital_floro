"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MenuTabs from "@/components/MenuTabs";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Forzar carga en iOS Safari
      videoRef.current.load();
      
      // Intentar reproducir y pausar inmediatamente para forzar la descarga del primer fotograma
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (videoRef.current) videoRef.current.pause();
        }).catch(() => {
          // Autoplay bloqueado por el navegador (ej. modo bajo consumo), ignorar
        });
      }
    }
  }, []);

  useGSAP(() => {
    let lastProgress = 0;

    // Crear un único Timeline que controle el Pin, el vídeo y los efectos de Parallax
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        // Pin: el hero se queda anclado en pantalla.
        // end: "+=150%" significa que hay que hacer scroll por una distancia igual al 150% de la altura de la pantalla para terminar.
        end: "+=150%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          if (videoRef.current && !isNaN(videoRef.current.duration)) {
            // Throttle: solo actualiza si el scroll avanzó/retrocedió un 0.003
            if (Math.abs(self.progress - lastProgress) > 0.003 || self.progress === 0 || self.progress === 1) {
              const duration = videoRef.current.duration;
              // Evitamos llegar al 100% exacto de la duración para que el navegador no marque el vídeo como "ended"
              const targetTime = self.progress * (duration - 0.05);

              // Suavizado del scrubbing
              gsap.to(videoRef.current, {
                currentTime: targetTime,
                duration: 0.3,
                ease: "power1.out",
                overwrite: true
              });

              lastProgress = self.progress;
            }
          }
        }
      }
    });

    // 2. Parallax del contenedor de vídeo, sincronizado con el mismo Timeline
    // El "0" al final significa que esta animación empieza en el instante 0 del timeline
    tl.to(videoRef.current, {
      scale: 1.15,
      y: "30%",
      opacity: 0.3,
      ease: "none"
    }, 0);

    // 3. Parallax inverso del texto
    tl.to(textRef.current, {
      y: "-20%",
      opacity: 0,
      ease: "none"
    }, 0);
  }, { scope: heroRef });

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-surface-container-lowest">
      {/* 1. SHORT HERO */}
      <header 
        ref={heroRef}
        // Cambiamos min-h-[60vh] por min-h-[100vh] para dar más rango real de scroll al hero
        className="relative w-full min-h-[100vh] flex flex-col items-center justify-center text-center z-10 overflow-hidden"
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/videos/embers.mp4"
          autoPlay
          muted
          defaultMuted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 origin-center"
        />
        {/* Dark Overlay Gradient (replaces ember-glow for video) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background to-black/40"></div>
        
        {/* Text Content */}
        <div 
          ref={textRef}
          className="relative z-10 w-full md:max-w-2xl lg:max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop"
        >
          <h1
            className="text-headline-xl md:text-[64px] md:leading-[1.1] text-tertiary mb-xs"
            style={{ fontFamily: 'var(--font-cinzel), serif', fontWeight: 700 }}
          >
            O Churrasco do Floro
          </h1>
          <p className="font-label-md text-label-md md:text-lg text-secondary uppercase tracking-widest opacity-80"
             style={{ fontFamily: 'var(--font-cinzel), serif' }}
          >
            Noia · A Coruña · Galicia
          </p>
        </div>
      </header>

      {/* 2. FULL MENU SECTION */}
      <main className="flex-grow w-full bg-inverse-surface rounded-t-3xl text-surface-container-highest flex flex-col relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <MenuTabs />
      </main>
    </div>
  );
}
