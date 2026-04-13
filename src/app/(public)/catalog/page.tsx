import React from "react";
import prisma from "@/lib/prisma";
import TechHeader from "@/components/TechHeader";
import TechFooter from "@/components/TechFooter";
import TechProductCard from "@/components/TechProductCard";
import { Reveal } from "@/components/Reveal"; // I'll need to create or copy Reveal

export const dynamic = 'force-dynamic';

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: { cat?: string; q?: string };
}) {
  const categorySlug = searchParams.cat;
  const searchQuery = searchParams.q;

  const products = await prisma.product.findMany({
    where: {
      AND: [
        categorySlug ? { category: { slug: categorySlug } } : {},
        searchQuery ? { name: { contains: searchQuery } } : {},
      ],
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const categories = await prisma.category.findMany();

  const formattedProducts = products.map((p: any) => ({
    ...p,
    category: p.category.name,
    specs: p.specs ? JSON.parse(p.specs) : [],
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      <TechHeader />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Categorías</h3>
                <div className="flex flex-col gap-3">
                  <a href="/catalog" className={`text-sm font-bold uppercase tracking-tight ${!categorySlug ? 'text-brand-primary' : 'text-slate-500 hover:text-brand-primary'}`}>
                    Todos los Productos
                  </a>
                  {categories.map((cat: any) => (
                    <a 
                      key={cat.id}
                      href={`/catalog?cat=${cat.slug}`}
                      className={`text-sm font-bold uppercase tracking-tight ${categorySlug === cat.slug ? 'text-brand-primary' : 'text-slate-500 hover:text-brand-primary'}`}
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-brand-primary rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <h4 className="font-black italic text-xl mb-2 relative z-10">SOPORTE EXPERTO</h4>
                <p className="text-xs opacity-70 mb-4 relative z-10">¿No sabes qué elegir? Chatea con un asesor tech.</p>
                <button className="bg-white text-brand-primary font-bold py-2 px-4 rounded-xl text-xs hover:scale-105 transition-transform relative z-10">
                  WHATSAPP
                </button>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-8">
              <div>
                <h1 className="text-4xl font-black text-brand-dark italic uppercase tracking-tighter">
                  {categorySlug ? categories.find((c: any) => c.slug === categorySlug)?.name : "Catálogo Completo"}
                </h1>
                <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-widest">{products.length} Resultados encontrados</p>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-slate-500 font-bold italic text-xl">No se encontraron productos en esta categoría.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {formattedProducts.map((p) => (
                  <TechProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      <TechFooter />
    </main>
  );
}
