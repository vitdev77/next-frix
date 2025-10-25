import { prisma } from './prisma-client';
import { brands, productColor, series } from './constants';
import * as bcrypt from 'bcrypt';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        name: 'User',
        email: 'user@test.com',
        password: bcrypt.hashSync('111111', 10),
      },
      {
        name: 'Admin',
        email: 'admin@test.com',
        password: bcrypt.hashSync('111111', 10),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.brand.createMany({
    data: brands,
  });

  await prisma.series.createMany({
    data: series,
  });

  await prisma.product.createMany({
    data: [
      {
        name: 'MDRB471MGF01O',
        imageUrl: '/products/mdrb471mgf01O.jpg',
        seriesId: 1,
        productColorId: 1,
      },
      {
        name: 'MDRB471MGF33O',
        imageUrl: '/products/mdrb471mgf33O.jpg',
        seriesId: 1,
        productColorId: 3,
      },
      {
        name: 'MDRB471MGF46O',
        imageUrl: '/products/mdrb471mgf46O.jpg',
        seriesId: 1,
        productColorId: 4,
      },
    ],
  });

  await prisma.productColor.createMany({
    data: productColor,
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Series" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductColor" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (err) {
    console.error(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
