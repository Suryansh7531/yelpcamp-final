//also updating model then adding images to seeds
//reseeded our database to add images earlier it was basic 
//use node seeds.js

const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

main().catch((err) => {
    console.log("CONNECTION ERROR!!");
    console.log(err);
  });
  async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");
    console.log("DATABASE CONNECTED");
  }

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    // for (let i = 0; i < 50; i++) {
      for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '653262a12a92f677286b595e',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            // image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: { type: 'Point',
            coordinates: [
              cities[random1000].longitude,
              cities[random1000].latitude,
          ]
      },
            images: [
                {
                  url: 'https://res.cloudinary.com/dpwkniic6/image/upload/v1698005373/YelpCamp12/u1j9pegodmuvwljey9vx.jpg',
                  filename: 'YelpCamp12/u1j9pegodmuvwljey9vx',
                },
                {
                  url: 'https://res.cloudinary.com/dpwkniic6/image/upload/v1698005373/YelpCamp12/eaiuhyuvq4pawh4rtudf.avif',
                  filename: 'YelpCamp12/eaiuhyuvq4pawh4rtudf',
                },
                {
                  url: 'https://res.cloudinary.com/dpwkniic6/image/upload/v1698005375/YelpCamp12/knziprgqydhjj7tvan34.jpg',
                  filename: 'YelpCamp12/knziprgqydhjj7tvan34',
                }
              ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})


// const mongoose = require('mongoose');
// const cities = require('./cities');
// const { places, descriptors } = require('./seedHelpers');
// const Campground = require('../models/campground');

// main().catch((err) => {
//     console.log("CONNECTION ERROR!!");
//     console.log(err);
//   });
//   async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");
//     console.log("DATABASE CONNECTED");
//   }

// const sample = array => array[Math.floor(Math.random() * array.length)];


// const seedDB = async () => {
//     await Campground.deleteMany({});
//     for (let i = 0; i < 50; i++) {
//         const random1000 = Math.floor(Math.random() * 1000);
//         const camp = new Campground({
//             location: `${cities[random1000].city}, ${cities[random1000].state}`,
//             title: `${sample(descriptors)} ${sample(places)}`
//         })
//         await camp.save();
//     }
// }

// seedDB().then(() => {
//     mongoose.connection.close();
// })