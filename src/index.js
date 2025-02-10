const cars = [
    {
        year: 2020,
        name: 'Tesla Model 3',
        color: 'червоний',
        maxSpeed: 225,
        mileage: 15000,
        rating: 8
    },
    {
        year: 2018,
        name: 'BMW X5',
        color: 'чорний',
        maxSpeed: 250,
        mileage: 30000,
        rating: 7
    },
    {
        year: 2019,
        name: 'Audi A6',
        color: 'сірий',
        maxSpeed: 240,
        mileage: 20000,
        rating: 7.5
    },
    {
        year: 2021,
        name: 'Mercedes-Benz C-Class',
        color: 'білий',
        maxSpeed: 235,
        mileage: 10000,
        rating: 8.5
    },
    {
        year: 2022,
        name: 'Toyota Camry',
        color: 'синій',
        maxSpeed: 210,
        mileage: 5000,
        rating: 7.5
    },
    {
        year: 2023,
        name: 'Ford Mustang',
        color: 'червоний',
        maxSpeed: 260,
        mileage: 2000,
        rating: 9
    },
    {
        year: 2017,
        name: 'Volkswagen Golf',
        color: 'зелений',
        maxSpeed: 220,
        mileage: 35000,
        rating: 7
    },
    {
        year: 2021,
        name: 'Chevrolet Camaro',
        color: 'жовтий',
        maxSpeed: 245,
        mileage: 8000,
        rating: 8
    },
    {
        year: 2020,
        name: 'Lexus RX',
        color: 'чорний',
        maxSpeed: 230,
        mileage: 18000,
        rating: 7.5
    },
    {
        year: 2022,
        name: 'Honda Accord',
        color: 'сріблястий',
        maxSpeed: 215,
        mileage: 6000,
        rating: 7.8
    },
    {
        year: 2023,
        name: 'Mazda CX-5',
        color: 'білий',
        maxSpeed: 225,
        mileage: 3000,
        rating: 7.7
    },
    {
        year: 2019,
        name: 'Nissan Altima',
        color: 'синій',
        maxSpeed: 210,
        mileage: 22000,
        rating: 7.4
    }
]


document.addEventListener('DOMContentLoaded', () =>{
    const template = document.getElementById('carsTemplate').innerHTML.trim();

    const compile = Handlebars.compile(template);

    const carContainer = document.getElementById('carContainer');

    cars.forEach((car) => {
        const html = compile(car);
        carContainer.innerHTML += html;
    });
});