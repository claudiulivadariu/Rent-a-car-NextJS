import { CarCardProps } from '@/components/car-card/card';
import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';

export async function fetchCars() {
    noStore();
  
    try {
      console.log('Fetching revenue data...');
      const data = await sql<CarCardProps>`SELECT * FROM cars`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }

export async function fetchFilteredCars(filters:) {
    noStore();
  
    try {
      console.log('Fetching revenue data...');
      const data = await sql<CarCardProps>`SELECT * FROM cars WHERE price < 100`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
}
  