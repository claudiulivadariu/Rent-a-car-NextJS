const cars = [
    {
        image: "https://m.atcdn.co.uk/a/media/w375/a1cf0fc710e040a2893418c67edd9a9b.jpg",
        seats: 5,
        fuelType: "petrol",
        transmissionType: "automatic",
        price: 250,
        carType: "SUV",
        isOnSale: false,
    },
    {
        image: "https://e7.pngegg.com/pngimages/840/310/png-clipart-mercedes-benz-cls-class-car-luxury-vehicle-mercedes-car-vehicle-rim.png",
        seats: 5,
        fuelType: "petrol",
        transmissionType: "manual",
        price: 250,
        isOnSale: true,
        oldPrice: 300,
        carType: "SUV",
        newPrice: 200,
    },
    {
        image: "https://cdn.imgbin.com/23/15/8/imgbin-mercedes-amg-c-63-mercedes-benz-cls-class-mercedes-benz-a-class-car-mercedes-benz-0T8t9Y1rajasCMVhxFngn0Thb.jpg",
        seats: 7,
        fuelType: "diesel",
        transmissionType: "automatic",
        price: 250,
        isOnSale: true,
        oldPrice: 200,
        carType: "Race",
        newPrice: 100,
    },
];

module.exports = {
    cars,
};
