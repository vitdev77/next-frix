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

  await prisma.productColor.createMany({
    data: productColor,
  });
}

async function down() {
  // await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "Series" RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "ProductColor" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await up();
    await down();
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
