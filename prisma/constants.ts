// import * as bcrypt from 'bcrypt';

// export const users = [
//   {
//     name: 'User',
//     email: 'user@test.com',
//     password: bcrypt.hashSync('111111', 10),
//   },
//   {
//     name: 'Admin',
//     email: 'admin@test.com',
//     password: bcrypt.hashSync('111111', 10),
//     role: 'ADMIN',
//   },
// ];

export const brands = [
  { name: 'Midea', imageUrl: '/brands/midea.png' },
  { name: 'General Electronics', imageUrl: '/brands/general-electronics.webp' },
  { name: 'DEXP', imageUrl: '/brands/dexp.png' },
  { name: 'Körting', imageUrl: '/brands/koerting.svg' },
  { name: 'Schaub Lorenz', imageUrl: '/brands/schaub-lorenz.png' },
];

export const series = [
  { name: 'BCD345', brandId: 1 },
  { name: 'BCD385', brandId: 1 },
  { name: 'BCD405', brandId: 1 },
  { name: 'BCD445', brandId: 1 },
  { name: 'BCD335', brandId: 1 },
  { name: 'BCD375', brandId: 1 },
];

export const productColor = [
  { name: 'White' },
  { name: 'Beige' },
  { name: 'Black' },
  { name: 'Inox' },
  { name: 'Basalt Gray' },
];
