"use client";

import React from "react";
import TechHeader from "@/components/TechHeader";
import GadgetHero from "@/components/GadgetHero";
import TechProductCard from "@/components/TechProductCard";
import TechFooter from "@/components/TechFooter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, ShieldCheck , Truck} from "lucide-react";
import Link from "next/link";
const sampleProducts = [
  {
    id: "1",
    name: "MacBook Pro M3 Max - 16\" Space Black",
    price: 12500,
    originalPrice: 13999,
    category: "Laptops Pro",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    specs: [
      { label: "Chip", value: "M3 Max" },
      { label: "RAM", value: "36GB" },
      { label: "SSD", value: "1TB" },
      { label: "Pantalla", value: "Liquid Retina XDR" }
    ]
  },
  {
    id: "2",
    name: "iPhone 15 Pro Max Titanium Blue",
    price: 5499,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    specs: [
      { label: "Cámara", value: "48MP Pro" },
      { label: "Pantalla", value: "ProMotion 120Hz" },
      { label: "Batería", value: "24h Video" },
      { label: "Material", value: "Titania Aero" }
    ]
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Noise Cancelling",
    price: 1290,
    originalPrice: 1599,
    category: "Audio Pro",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    specs: [
      { label: "ANC", value: "Líder en clase" },
      { label: "Batería", value: "30 horas" },
      { label: "Carga", value: "3m = 3h" },
      { label: "Sensor", value: "V1 Processor" }
    ]
  },
  {
    id: "4",
    name: "Logitech MX Master 3S Wireless Mouse",
    price: 399,
    category: "Accesorios Pro",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    specs: [
      { label: "Sensor", value: "8K DPI" },
      { label: "Click", value: "Ultra-silencioso" },
      { label: "Scroll", value: "MagSpeed" },
      { label: "Flow", value: "Multi-dispositivo" }
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TechHeader />
      
      <GadgetHero />

      {/* Trust Banner */}
      <section className="bg-brand-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Garantía Casita</h4>
                <p className="text-sm opacity-70">12 meses en todos los equipos</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Truck size={28} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Envío Relámpago</h4>
                <p className="text-sm opacity-70">Llega hoy mismo en Lima o Provincias</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Soporte Tech</h4>
                <p className="text-sm opacity-70">Expertos listos para ayudarte</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full mb-4">
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Favoritos de la Capital</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-dark italic tracking-tighter uppercase leading-none">
              LO MÁS <span className="text-brand-primary">PEDIDO</span>
            </h2>
          </div>
          <Link href="#" className="flex items-center gap-2 text-brand-primary font-bold hover:gap-3 transition-all mt-4 md:mt-0">
            VER TODO EL CATÁLOGO <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sampleProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TechProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo Banner Tech */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative h-[400px] rounded-[3rem] overflow-hidden bg-brand-dark group cursor-pointer">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />

          <div className="relative z-20 h-full flex flex-col justify-center px-12 md:px-20 max-w-2xl">
            <span className="text-brand-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">ZONA GAMER</span>
            <h3 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none mb-8">
              SUBE DE <br /> NIVEL
            </h3>
            <p className="text-white/60 mb-8 font-medium">
              Todo lo que necesitas para tu setup definitivo. Periféricos, monitores y más con descuentos exclusivos para pro-gamers.
            </p>
            <button className="w-fit px-10 py-4 bg-white text-brand-dark font-bold rounded-2xl hover:bg-brand-primary hover:text-white transition-all shadow-xl">
              EXPLORAR SETUP
            </button>
          </div>
        </div>
      </section>

      <TechFooter />
    </main>
  );
}
