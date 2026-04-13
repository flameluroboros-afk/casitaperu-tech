import React from "react";
import prisma from "@/lib/prisma";
import TechHeader from "@/components/TechHeader";
import TechFooter from "@/components/TechFooter";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true }
  });

  if (!product) notFound();

  const formattedProduct = {
    ...product,
    category: product.category.name,
    sizes: product.sizes?.split(',') || [],
    specs: product.specs ? JSON.parse(product.specs) : []
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <TechHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDetailClient product={formattedProduct} />
      </div>
      <TechFooter />
    </main>
  );
}
