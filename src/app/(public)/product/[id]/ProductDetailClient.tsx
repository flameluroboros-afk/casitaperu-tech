"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/lib/store";
import { ShoppingCart, Check, ShieldCheck, Truck, ArrowLeft, Star, MessageCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDetailClient({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [added, setAdded] = useState(false);
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappLink = `https://wa.me/51987654321?text=Hola%20CasitaPeru,%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(product.name)}%20(ID:%20${product.id})`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Gallery Section */}
      <div className="relative">
        <div className="sticky top-32">
          <Link href="/catalog" className="flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors mb-8 uppercase text-xs font-black tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al catálogo
          </Link>
          
          <div className="aspect-square bg-slate-50 rounded-[3rem] overflow-hidden p-12 flex items-center justify-center relative border border-slate-100">
             <div className="absolute inset-0 tech-grid opacity-5" />
             <Image 
              src={product.image} 
              alt={product.name}
              width={600}
              height={600}
              className="object-contain relative z-10"
              priority
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 p-2 cursor-pointer hover:border-brand-primary transition-all flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100">
                 <Image src={product.image} alt="thumb" width={80} height={80} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 rounded-full w-fit">
          <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">{product.category}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-brand-dark leading-none italic uppercase tracking-tighter">
          {product.name}
        </h1>

        <div className="flex items-center gap-4">
           <div className="flex gap-1 text-yellow-400 fill-yellow-400">
             {[1,2,3,4,5].map(i => <Star key={i} size={16} fill={i <= 4 ? "currentColor" : "none"} />)}
           </div>
           <span className="text-sm font-bold text-slate-400">(24 Reseñas verificadas)</span>
        </div>

        <div className="flex flex-col py-6 border-y border-slate-100">
          <span className="text-4xl font-black text-brand-primary leading-none">
            {formatCurrency(product.price)}
          </span>
          <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">
            {product.stock > 0 ? `Stock Disponible: ${product.stock} unidades` : "Agotado"}
          </span>
        </div>

        {/* Variants / Sizes */}
        {product.sizes.length > 0 && (
          <div>
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Selecciona Versión/Color</h4>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((s: string) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-6 py-3 rounded-xl border-2 font-bold text-sm transition-all ${
                    selectedSize === s 
                    ? "border-brand-primary bg-brand-primary/5 text-brand-primary" 
                    : "border-slate-100 text-slate-500 hover:border-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button 
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg shadow-xl transition-all ${
              added ? "bg-green-500 text-white" : "bg-brand-primary text-white hover:scale-105 active:scale-95"
            }`}
          >
            {added ? <Check size={24} /> : <ShoppingCart size={24} />}
            {added ? "AÑADIDO" : "AÑADIR AL CARRITO"}
          </button>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 py-5 px-8 bg-green-500 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Trust features */}
        <div className="grid grid-cols-2 gap-4 mt-8">
           <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Truck size={20} className="text-brand-primary" />
              <div>
                <span className="block text-xs font-black uppercase">Envío Veloz</span>
                <span className="text-[10px] text-slate-500">Llega hoy mismo</span>
              </div>
           </div>
           <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck size={20} className="text-green-500" />
              <div>
                <span className="block text-xs font-black uppercase">Garantía Pro</span>
                <span className="text-[10px] text-slate-500">12 meses Casita</span>
              </div>
           </div>
        </div>

        {/* Technical Specs */}
        <div className="mt-10">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Especificaciones Técnicas</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec: any, i: number) => (
              <div key={i} className="flex flex-col pb-3 border-b border-slate-50">
                <span className="text-[10px] text-slate-400 uppercase font-black">{spec.label}</span>
                <span className="text-sm font-bold text-slate-700">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
