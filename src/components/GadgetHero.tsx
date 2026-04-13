"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export default function GadgetHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full border border-brand-primary/20 mb-6 transition-all hover:bg-brand-primary/20">
              <Sparkles size={14} className="text-brand-primary" />
              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">Inauguración CasitaPeru: 20% OFF</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter mb-8 italic">
              LA MEJOR <br />
              <span className="text-brand-primary">TECNOLOGÍA</span> <br />
              DENTRO DE TU <br />
              <span className="relative">
                CASITA
                <motion.div 
                  className="absolute -bottom-1 left-0 h-2 bg-brand-secondary/30 w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="max-w-lg text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
              Descubre los gadgets que transformarán tu día a día. De la oficina al hogar, 
              conectamos tu vida con lo último del mundo tech en todo el Perú.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-xl shadow-brand-primary/20 hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                EXPLORAR GADGETS
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors">
                VER OFERTAS
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-500" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Garantía Real</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-brand-primary" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lo más top</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Gadget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-full scale-75 animate-pulse" />
            <motion.div className="animate-float-tech relative z-10 w-full max-w-lg">
               <Image 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop"
                alt="Tech Gadget"
                width={700}
                height={700}
                className="rounded-[3rem] shadow-2xl border-4 border-white object-cover aspect-square"
                priority
              />
              {/* Product Info Floater */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[180px] hover:scale-105 transition-transform cursor-pointer">
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1 block">DESTACADO</span>
                <span className="block font-bold text-sm text-slate-700 leading-tight">MacBook M3 Pro Silver Edition</span>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-black text-brand-primary italic">S/ 8,499</span>
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] font-bold text-slate-700">Stock en Lima</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute -right-20 top-1/2 -rotate-90 hidden xl:block select-none pointer-events-none">
        <span className="text-[12vw] font-black text-slate-50 uppercase tracking-tighter opacity-10">GADGETS</span>
      </div>
    </section>
  );
}
