"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type MenuItem = {
  name: string;
  description: string;
  badge?: { icon: string; text: string; };
};

type Category = {
  id: string;
  title: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: "carnes",
    title: "Carnes a la Brasa",
    items: [
      {
        name: "Churrasco de Ternera",
        description: "Costilla de ternera gallega asada lentamente a la brasa de roble. Servida con patatas fritas caseras y ensalada.",
        badge: { icon: "star", text: "La más pedida" }
      },
      {
        name: "Churrasco de Cerdo",
        description: "Tiras de costilla de cerdo marinadas con la receta tradicional de la abuela, doradas al fuego vivo."
      },
      {
        name: "Chuletón de Vaca Rubia",
        description: "Corte noble de vaca madurada (aprox 1kg), marcado en parrilla con sal en escamas. Ideal para compartir."
      },
      {
        name: "Criollo Artesano",
        description: "Chorizo criollo de elaboración propia, jugoso y ligeramente especiado."
      }
    ]
  },
  {
    id: "marisco",
    title: "Marisco & Pescado",
    items: [
      {
        name: "Pulpo a la Brasa",
        description: "Pulpo gallego pasado por la parrilla, con pimentón y aceite de oliva.",
        badge: { icon: "star", text: "El más pedido" }
      },
      {
        name: "Berberechos",
        description: "Berberechos gallegos al vapor, en su propio jugo."
      },
      {
        name: "Zamburiñas a la Plancha",
        description: "Vieiras pequeñas gallegas con ajada. Llegan en su punto."
      },
      {
        name: "Navajas a la Plancha",
        description: "Navajas gallegas con aceite y limón. Producto de temporada."
      },
      {
        name: "Bacalao a la Brasa",
        description: "Lomo de bacalao en su punto, con patatas panaderas.",
        badge: { icon: "emoji_events", text: "Especial" }
      }
    ]
  },
  {
    id: "entrantes",
    title: "Entrantes",
    items: [
      { name: "Ensalada de la Casa", description: "Fresca, con aliño casero." },
      { name: "Queso Frito", description: "Queso gallego rebozado, dorado por fuera y fundente por dentro." },
      { name: "Pimientos de Padrón", description: "A la plancha con sal gruesa." },
      { name: "Patatas Fritas", description: "Recogen todo el jugo de la carne." },
      { name: "Tortilla de Patata", description: "Tortilla casera, jugosa y de tamaño generoso." },
      { name: "Croquetas Caseras", description: "Relleno de la casa. Crujientes y cremosas." }
    ]
  },
  {
    id: "menus",
    title: "Menús",
    items: [
      { name: "Menú Churrasco", description: "Churrasco mixto · Ensalada · Patatas fritas · Bebida." },
      { name: "Menú Completo", description: "Churrasco mixto · Ensalada · Patatas · Bebida · Postre · Café · Chupito.", badge: { icon: "star", text: "El más completo" } },
      { name: "Menú Libre", description: "Come todo lo que quieras. Se repone hasta que no puedas más.", badge: { icon: "local_fire_department", text: "Para valientes" } }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas & Postres",
    items: [
      { name: "Vino Blanco Gallego", description: "De la tierra. Botella o jarra." },
      { name: "Vino Tinto", description: "Vino de la casa. Botella o jarra." },
      { name: "Cerveza", description: "Caña o botellín bien frío." },
      { name: "Refrescos & Agua", description: "Coca-Cola, Fanta, agua con y sin gas." },
      { name: "Postre del Día", description: "Varía según el día. Pregunta al camarero." },
      { name: "Café", description: "Solo o con leche." },
      { name: "Chupito de la Casa", description: "Para terminar como se merece." }
    ]
  }
];

const tabTitles = [
  { id: "carnes", label: "Carnes" },
  { id: "marisco", label: "Marisco & Pescado" },
  { id: "entrantes", label: "Entrantes" },
  { id: "menus", label: "Menús" },
  { id: "bebidas", label: "Bebidas & Postres" }
];

export default function MenuTabs() {
  const [activeTab, setActiveTab] = useState("carnes");
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const mainRef = useRef<HTMLDivElement>(null);
  const navBgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find(c => c.id === activeTab) || categories[0];

  useGSAP(() => {
    // 5. NAV Transparente a Sólido
    gsap.fromTo(navBgRef.current, 
      { opacity: 0 },
      { 
        opacity: 1, 
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top -50px",
          end: "top -150px",
          scrub: true
        }
      }
    );
  }, { scope: mainRef });

  useGSAP(() => {
    // Entrada animada tras cambio de tab (o render inicial)
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", clearProps: "all" }
    );

    // Y animamos los items con stagger y scrolltrigger
    const items = gsap.utils.toArray('.menu-item');
    if (items.length > 0) {
      gsap.from(items, {
        opacity: 0,
        y: 24,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
  }, { scope: contentRef, dependencies: [activeCategory] });

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);

    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        setActiveTab(newTabId);
        setIsTransitioning(false);
      }
    });
  };

  return (
    <div ref={mainRef} className="flex flex-col w-full relative" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
      <nav className="w-full sticky top-0 z-30">
        <div 
          ref={navBgRef}
          className="absolute inset-0 bg-inverse-surface/95 backdrop-blur-sm border-b border-outline/30 z-0"
        />
        <div className="relative w-full overflow-x-auto hide-scrollbar z-10 pt-md pb-sm px-margin-mobile md:px-margin-desktop">
          <div className="w-full md:max-w-2xl lg:max-w-3xl mx-auto flex space-x-md md:space-x-lg min-w-max md:min-w-full md:justify-center">
          {tabTitles.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`font-label-md text-label-md whitespace-nowrap transition-opacity pb-xs ${
                activeTab === tab.id
                  ? "text-primary-container border-b-2 border-primary-container"
                  : "text-surface-variant opacity-60 hover:opacity-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
          </div>
        </div>
      </nav>

      <div ref={contentRef} className="flex flex-col w-full md:max-w-2xl lg:max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-md space-y-md">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-surface-container-lowest mb-sm border-b border-outline/20 pb-xs">
          {activeCategory.title}
        </h2>

        {activeCategory.items.map((item, index) => (
          <article key={index} className="menu-item flex justify-between items-start border-b border-outline/10 pb-sm last:border-0">
            <div className="pr-sm flex-1">
              <div className="flex items-center gap-xs mb-xs flex-wrap">
                <h3 className="font-headline-md text-[20px] md:text-[24px] text-surface-container-lowest leading-tight">
                  {item.name}
                </h3>
                {item.badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-container/10 text-primary-container text-[10px] font-bold tracking-wider uppercase">
                    <span
                      className="material-symbols-outlined text-[12px] mr-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.badge.icon}
                    </span>
                    {item.badge.text}
                  </span>
                )}
              </div>
              <p className="font-body-md text-[11px] md:text-[13px] text-surface-variant/80">
                {item.description}
              </p>
            </div>
            <div className="shrink-0 pt-1">
              <div className="px-3 py-1 rounded-full border border-dashed border-secondary-container bg-transparent">
                <span className="font-label-md text-[12px] text-secondary-container">Consultar</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-auto p-md md:px-margin-desktop bg-primary-container/5 mt-md border-t border-primary-container/10">
        <div className="w-full md:max-w-2xl lg:max-w-3xl mx-auto text-center">
          <p className="font-body-md text-[13px] md:text-[15px] text-surface-container-highest/70 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Precios y disponibilidad detallada en el local.
          </p>
        </div>
      </div>
    </div>
  );
}
