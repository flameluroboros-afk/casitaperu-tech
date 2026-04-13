"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default function CartSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCart();

  const whatsappMessage = `Hola CasitaPeru, quiero realizar el siguiente pedido:%0A%0A${items.map(item => `- ${item.name} (${item.selectedSize}) x${item.quantity} = ${formatCurrency(item.price * item.quantity)}`).join('%0A')}%0A%0ATotal: ${formatCurrency(getTotal())}`;
  
  const whatsappLink = `https://wa.me/51987654321?text=${whatsappMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[200]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[450px] bg-white z-[201] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-brand-primary" size={24} />
                <h2 className="font-black italic text-xl text-brand-dark uppercase tracking-tighter">Mi Carrito</h2>
                <span className="bg-brand-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full">{getItemCount()}</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 tech-grid opacity-20">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 mb-4">
                    <ShoppingCart size={40} />
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Tu carrito está vacío</p>
                  <button onClick={onClose} className="mt-4 text-brand-primary font-black italic uppercase text-xs hover:underline tracking-widest">
                    Seguir explorando tech
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                    <div className="w-24 h-24 bg-slate-50 rounded-2xl border border-slate-100 p-2 flex items-center justify-center shrink-0">
                      <Image src={item.image || ""} alt={item.name} width={80} height={80} className="object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-bold text-slate-700 leading-tight uppercase line-clamp-2">{item.name}</h4>
                          <button onClick={() => removeItem(item.id, item.selectedSize)} className="text-slate-300 hover:text-red-500 transition-colors ml-2">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest mt-1 block">
                          Versión: {item.selectedSize}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-100">
                           <button 
                             onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                             className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-brand-primary"
                           >
                             <Minus size={14} />
                           </button>
                           <span className="text-xs font-black text-slate-700 w-4 text-center">{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                             className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-brand-primary"
                           >
                             <Plus size={14} />
                           </button>
                         </div>
                         <span className="font-black text-brand-dark text-sm">
                           {formatCurrency(item.price * item.quantity)}
                         </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-8 bg-slate-50 border-t border-slate-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-slate-400 font-black uppercase tracking-widest text-xs">Total estimado</span>
                  <span className="text-3xl font-black text-brand-primary leading-none">
                    {formatCurrency(getTotal())}
                  </span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-5 bg-green-500 text-white rounded-2xl font-black text-lg shadow-xl shadow-green-500/20 hover:scale-[1.02] transition-transform"
                  >
                    <MessageCircle size={24} />
                    FINALIZAR POR WHATSAPP
                  </a>
                  <button className="w-full py-4 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-brand-primary transition-colors">
                    Seguir Comprando
                  </button>
                </div>

                <div className="mt-8 flex items-center gap-3 justify-center text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1"><ArrowRight size={10} className="text-brand-primary" /> Envío Gratuito</div>
                  <div className="flex items-center gap-1"><ArrowRight size={10} className="text-brand-primary" /> Pago Seguro</div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
