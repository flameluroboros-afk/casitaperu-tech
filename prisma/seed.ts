const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clean database
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // Categories
  const categories = await Promise.all([
    prisma.category.create({ data: { name: 'Laptops Pro', slug: 'laptops-pro' } }),
    prisma.category.create({ data: { name: 'Smartphones', slug: 'smartphones' } }),
    prisma.category.create({ data: { name: 'Audio Pro', slug: 'audio' } }),
    prisma.category.create({ data: { name: 'Smart Home', slug: 'smart-home' } }),
    prisma.category.create({ data: { name: 'Gaming Gear', slug: 'gaming' } }),
  ]);

  // Products
  const products = [
    {
      name: 'MacBook Pro M3 Max - 16" Space Black',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      onSale: true,
      stock: 5,
      sizes: '16",14"',
      specs: JSON.stringify([
        { label: "Chip", value: "M3 Max" },
        { label: "RAM", value: "36GB" },
        { label: "SSD", value: "1TB" },
        { label: "Pantalla", value: "Liquid Retina XDR" }
      ]),
      categoryId: categories[0].id
    },
    {
      name: 'iPhone 15 Pro Max Titanium Blue',
      price: 5499,
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?q=80&w=800&auto=format&fit=crop',
      onSale: false,
      stock: 12,
      sizes: '256GB,512GB,1TB',
      specs: JSON.stringify([
        { label: "Cámara", value: "48MP Pro" },
        { label: "Pantalla", value: "ProMotion 120Hz" },
        { label: "Batería", value: "24h Video" },
        { label: "Material", value: "Titania Aero" }
      ]),
      categoryId: categories[1].id
    },
    {
      name: 'Sony WH-1000XM5 Noise Cancelling',
      price: 1290,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      onSale: true,
      stock: 20,
      sizes: 'Black,Silver',
      specs: JSON.stringify([
        { label: "ANC", value: "Líder en clase" },
        { label: "Batería", value: "30 horas" },
        { label: "Carga", value: "3m = 3h" },
        { label: "Sensor", value: "V1 Processor" }
      ]),
      categoryId: categories[2].id
    },
    {
      name: 'Logitech MX Master 3S Wireless Mouse',
      price: 399,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800&auto=format&fit=crop',
      onSale: false,
      stock: 50,
      sizes: 'Gris,Blanco',
      specs: JSON.stringify([
        { label: "Sensor", value: "8K DPI" },
        { label: "Click", value: "Ultra-silencioso" },
        { label: "Scroll", value: "MagSpeed" },
        { label: "Flow", value: "Multi-dispositivo" }
      ]),
      categoryId: categories[4].id
    },
    {
      name: 'Asus ROG Zephyrus G14 Gaming Laptop',
      price: 7890,
      image: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?q=80&w=800&auto=format&fit=crop',
      onSale: true,
      stock: 3,
      sizes: 'White,Eclipse Gray',
      specs: JSON.stringify([
        { label: "GPU", value: "RTX 4060" },
        { label: "CPU", value: "Ryzen 9" },
        { label: "RAM", value: "16GB DDR5" },
        { label: "Pantalla", value: "144Hz ROG Nebula" }
      ]),
      categoryId: categories[0].id
    }
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  console.log('Seed finished successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
