"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Cpu, Smartphone, Laptop, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Laptops", icon: <Laptop size={20} />, sub: ["Pro", "Gaming", "Estudio"] },
  { name: "Celulares", icon: <Smartphone size={20} />, sub: ["Android", "iPhone", "Accesorios"] },
  { name: "Smart Home", icon: <Home size={20} />, sub: ["Seguridad", "Iluminación", "TVs"] },
  { name: "Componentes", icon: <Cpu size={20} />, sub: ["Procesadores", "RAM", "GPU"] },
];

export default function TechHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] tech-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
              <Cpu size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight leading-none text-brand-dark">CASITA</span>
              <span className="text-[10px] font-black text-brand-primary tracking-[0.3em] leading-none">PERÚ TECH</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Busca gadgets, laptops..."
                className="w-full bg-brand-light border border-slate-200 rounded-full py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {categories.map((cat) => (
              <div 
                key={cat.name}
                onMouseEnter={() => setActiveCategory(cat.name)}
                onMouseLeave={() => setActiveCategory(null)}
                className="relative cursor-pointer py-2 group"
              >
                <span className="text-sm font-semibold text-slate-600 group-hover:text-brand-primary transition-colors flex items-center gap-1.5 uppercase tracking-wide">
                  {cat.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                
                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {activeCategory === cat.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 border border-slate-100"
                    >
                      <div className="flex flex-col gap-2">
                        {cat.sub.map(s => (
                          <Link key={s} href="#" className="text-sm text-slate-500 hover:text-brand-primary hover:translate-x-1 transition-all">
                            {s}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-600 hover:text-brand-primary transition-colors lg:hidden">
              <Search size={22} />
            </button>
            <button className="p-2 text-slate-600 hover:text-brand-primary transition-colors">
              <User size={22} />
            </button>
            <button className="p-2 text-slate-600 hover:text-brand-primary transition-colors relative">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            <button 
              className="p-2 text-slate-600 hover:text-brand-primary transition-colors lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {categories.map(cat => (
                <div key={cat.name}>
                  <div className="flex items-center gap-3 text-brand-dark font-bold uppercase tracking-widest text-xs mb-2">
                    {cat.icon}
                    {cat.name}
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-8">
                    {cat.sub.map(s => (
                      <Link key={s} href="#" className="text-sm text-slate-500 py-1">
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
