import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name:'susheel',
            email:'sunil@gmail.com',
            password:bcrypt.hashSync('12345', 8),
            isAdmin:true
        },
        {
            name:'susheel',
            email:'deepak@gmail.com',
            password:bcrypt.hashSync('12345', 8),
            isAdmin:true
        },        
    ],
    products: [
        {
            name: 'Nike slim Shirt',
            category:'Shirts',
            image: '/images/p1.jpg',
            countInStock:10,
            price:120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name: 'Adidash Shirt',
            category:'Shirts',
            image: '/images/p2.jpg',
            countInStock:20,
            price:1201,
            brand:'Nike',
            rating:4,
            numReviews:30,
            description:'high quality product'
        },        
        {
            name: 'Lacoste free Shirt',
            category:'Shirts',
            image: '/images/p3.jpg',
            countInStock:30,
            price:1220,
            brand:'Nike',
            rating:2.5,
            numReviews:30,
            description:'high quality product'
        },
        {
            name: 'Jhone player Shirt',
            category:'Shirts',
            image: '/images/p4.jpg',
            countInStock:4,
            price:120,
            brand:'Jhone player',
            rating:2.5,
            numReviews:8,
            description:'high quality product'
        },
        {
            name: 'Adidsh Shirt',
            category:'shirts',
            image: '/images/p5.jpg',
            countInStock:4,
            price:120,
            brand:'Adidash player',
            rating:1.5,
            numReviews:8,
            description:'high quality product'
        },  
        {
            name: 'puma Shirt',
            category:'puma',
            image: '/images/p5.jpg',
            countInStock:1,
            price:120,
            brand:'Adidash player',
            rating:2.5,
            numReviews:20,
            description:'high quality product'
        },               
    ],
};

export default data;

