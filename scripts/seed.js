const { db } = require("@vercel/postgres");
const {
    // users,
    cars,
} = require("../lib/placholder-data");
// const bcrypt = require('bcrypt');

// async function seedUsers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//     // Create the "users" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;

//     console.log(`Created "users" table`);

//     // Insert data into the "users" table
//     const insertedUsers = await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.sql`
//         INSERT INTO users (id, name, email, password)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//       }),
//     );

//     console.log(`Seeded ${insertedUsers.length} users`);

//     return {
//       createTable,
//       users: insertedUsers,
//     };
//   } catch (error) {
//     console.error('Error seeding users:', error);
//     throw error;
//   }
// }

async function seedCars(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const deleteTable = await client.sql`
    DROP TABLE IF EXISTS cars;
  `;

        // Create the "cars" table if it doesn't exist
        const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS cars (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    seats INT NOT NULL,
    fuelType VARCHAR(255) NOT NULL,
    transmissionType VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    carType VARCHAR(255) NOT NULL,
    isOnSale BOOLEAN NOT NULL,
    oldPrice INT,
    newPrice INT
  );
`;

        console.log(`Created "cars" table`);

        // Insert data into the "cars" table
        const insertedCars = await Promise.all(
            cars.map(
                (car) => client.sql`
        INSERT INTO cars (image, seats, fuelType, transmissionType, price, carType, isOnSale, oldPrice, newPrice)
        VALUES (${car.image}, ${car.seats}, ${car.fuelType}, ${car.transmissionType}, ${car.price}, ${car.carType}, ${car.isOnSale}, ${car.oldPrice}, ${car.newPrice})
        ON CONFLICT (id) DO NOTHING;
      `
            )
        );

        console.log(`Seeded ${insertedCars.length} cars`);

        return {
            createTable,
            cars: insertedCars,
        };
    } catch (error) {
        console.error("Error seeding cars:", error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedCars(client);

    await client.end();
}

main().catch((err) => {
    console.error("An error occurred while attempting to seed the database:", err);
});
