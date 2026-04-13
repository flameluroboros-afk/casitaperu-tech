"use client";

import React from "react";
import { Cpu, ShieldCheck, Truck, Headphones, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TechFooter() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                <Cpu size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-brand-dark">CASITA</span>
                <span className="text-[10px] font-black text-brand-primary tracking-[0.3em] leading-none">PERÚ TECH</span>
              </div>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              La casa de la tecnología en Perú. Conectando hogares con lo último en gadgets, 
              laptops y smart home con garantía oficial y envíos rápidos.
            </p>
            <div className="flex gap-4">
              {/* social links placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-200" />
              <div className="w-8 h-8 rounded-full bg-slate-200" />
              <div className="w-8 h-8 rounded-full bg-slate-200" />
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-slate-700 uppercase tracking-widest text-xs mb-6">Categorías</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Laptops Pro</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Smartphones</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Smart Home</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Gaming Gear</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-slate-700 uppercase tracking-widest text-xs mb-6">Soporte</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Estado de Pedido</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Garantía Casita</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Devoluciones</Link></li>
              <li><Link href="#" className="text-sm text-slate-500 hover:text-brand-primary transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-slate-700 uppercase tracking-widest text-xs mb-6">Contacto Directo</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="block font-bold">WhatsApp Ventas</span>
                  <span>+51 987 654 321</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Headphones size={20} />
                </div>
                <div>
                  <span className="block font-bold">Soporte Tech</span>
                  <span>soporte@casitaperu.pe</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            © 2026 CASITAPERU TECH. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 opacity-30 grayscale italic font-black text-slate-500">
              <Truck size={16} />
              <span>ENVÍOS PRO</span>
            </div>
            <div className="flex items-center gap-2 opacity-30 grayscale italic font-black text-slate-500">
              <ShieldCheck size={16} />
              <span>PAGO SEGURO</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
