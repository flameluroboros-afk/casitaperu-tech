"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Eye, BarChart3, Star } from "lucide-react";
import { motion } from "framer-motion";

interface TechProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
  rating: number;
}

export default function TechProductCard({ product }: { product: TechProduct }) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 flex flex-col h-full">
      
      {/* Image & Overlay Area */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden p-6 flex items-center justify-center">
        <Image 
          src={product.image} 
          alt={product.name}
          width={400}
          height={400}
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="px-3 py-1 bg-brand-secondary text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
              - {Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-slate-100 shadow-sm flex items-center gap-1">
            <Star size={10} className="text-yellow-400 fill-yellow-400" />
            {product.rating}
          </span>
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <div className="bg-brand-dark/90 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.2em] mb-2 block">Especificaciones Pro</span>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {product.specs.slice(0, 4).map((spec, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[9px] text-white/40 uppercase font-black">{spec.label}</span>
                  <span className="text-[11px] text-white font-bold leading-none">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block italic">{product.category}</span>
          <h3 className="font-bold text-lg text-slate-700 leading-tight group-hover:text-brand-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-slate-300 line-through text-xs font-bold font-sans">
                S/ {product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-2xl font-black text-brand-dark leading-none">
              <span className="text-sm font-bold text-brand-primary mr-1">S/</span>
              {product.price.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-2">
             <button className="w-10 h-10 rounded-full border border-slate-100 text-slate-400 hover:text-brand-primary hover:bg-brand-primary/5 transition-all flex items-center justify-center">
              <Eye size={18} />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 pointer-events-none group-hover:shimmer opacity-30" />
    </div>
  );
}
