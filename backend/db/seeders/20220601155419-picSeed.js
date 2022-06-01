'use strict';

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f917000010000017d59fd0c04434076ad80b7facf694e4e');
// const pictures = []
// client.photos.curated({ per_page: 80 }).then(photos => {
//   // console.log(photos.photos[0].src.original, photos.photos[0].alt)
//   photos.photos.forEach(photo => {
//     pictures.push({
//       userId: 1,
//       imageLink: photo.src.original,
//       title: photo.alt,

//     })
//   });
//   console.log(pictures)
// });


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Pictures', [
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg',
        title: 'Brown and Black Maple Leaf'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12172012/pexels-photo-12172012.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12168833/pexels-photo-12168833.jpeg',
        title: 'Woman in Blue Denim Jacket Standing Near Brown Wooden Fence'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12167579/pexels-photo-12167579.jpeg',
        title: 'Woman in Blue Sleeveless Top and Black Skirt Standing Near Black Metal Fence'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12258266/pexels-photo-12258266.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12240136/pexels-photo-12240136.jpeg',
        title: 'Emeral Isle'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12237096/pexels-photo-12237096.jpeg',
        title: 'Yellow and Pink Flowers on Gray Concrete Pot'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12226848/pexels-photo-12226848.jpeg',
        title: 'Snow Covered Mountain Under Blue Sky'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12222587/pexels-photo-12222587.jpeg',
        title: "You're Like a Melody."
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12151767/pexels-photo-12151767.jpeg',
        title: 'People Walking on Street'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12146278/pexels-photo-12146278.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12133748/pexels-photo-12133748.jpeg',
        title: 'Girl in White T-shirt Lying on Bed'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12128687/pexels-photo-12128687.jpeg',
        title: 'Man and Woman Kissing on Green Grass Field'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/10731972/pexels-photo-10731972.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12108913/pexels-photo-12108913.jpeg',
        title: 'Woman in Red Sleeveless Dress Standing on Green Grass Field'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12190111/pexels-photo-12190111.jpeg',
        title: 'Woman in Brown and Beige Camouflage Jacket Lying on Green Grass'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12190113/pexels-photo-12190113.jpeg',
        title: 'Grayscale Photo of Woman in White Dress Standing on Grass Field'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/1544776/pexels-photo-1544776.jpeg',
        title: 'Free stock photo of church, steeple'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12155886/pexels-photo-12155886.jpeg',
        title: 'Free stock photo of aesthetic, aesthetic background, aesthetic desktop background'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12142950/pexels-photo-12142950.jpeg',
        title: 'Green and Yellow Plant Leaves'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12132204/pexels-photo-12132204.jpeg',
        title: 'Gray Spiral Staircase With Black Metal Railings'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12132208/pexels-photo-12132208.jpeg',
        title: 'Black and White Wooden House on Brown Grass Field Under White Sky'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12136490/pexels-photo-12136490.jpeg',
        title: 'Woman in Brown Coat Standing Near Green Trees'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12128696/pexels-photo-12128696.jpeg',
        title: 'Woman in Gray Dress Standing on Green Grass Field'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12143040/pexels-photo-12143040.jpeg',
        title: 'Green Leaves on Brown Wooden Window Frame'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12125084/pexels-photo-12125084.jpeg',
        title: 'Henningsvaer Football field by drone'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12099014/pexels-photo-12099014.jpeg',
        title: 'White Window Curtain on Window'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12099017/pexels-photo-12099017.jpeg',
        title: 'Green Grass in Close Up Photography'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12089012/pexels-photo-12089012.jpeg',
        title: 'Concrete Building by Stream in Mountain Valley'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg',
        title: 'Teenage Boy in Casual Outfit Standing in Street'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12046302/pexels-photo-12046302.jpeg',
        title: 'Man Looking at Lonely Mountain and River in Light of Rising Sun'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12118291/pexels-photo-12118291.jpeg',
        title: 'Brown Wooden Boat on Lake Near Mountain'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/10519162/pexels-photo-10519162.jpeg',
        title: 'Man in Black Jacket and Black Pants Standing on Gray Rock Formation'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/9271052/pexels-photo-9271052.jpeg',
        title: 'Free stock photo of color, dark, dawn'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11889632/pexels-photo-11889632.jpeg',
        title: 'Yellow Rose'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/2481552/pexels-photo-2481552.jpeg',
        title: 'Free stock photo of boat, hand, summer'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12106929/pexels-photo-12106929.jpeg',
        title: 'contemplar.'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12091806/pexels-photo-12091806.jpeg',
        title: 'Man in Black Jacket Reading Book'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12099566/pexels-photo-12099566.jpeg',
        title: 'Grayscale Photo of People Walking on Street'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12043861/pexels-photo-12043861.jpeg',
        title: 'Magnifying Glass Lying on Stamp Album '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12098194/pexels-photo-12098194.jpeg',
        title: 'Free stock photo of adult, anatolian woman, cappadocia'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12072057/pexels-photo-12072057.jpeg',
        title: 'Person in Beige Coat Holding Umbrella Walking on Street'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12053051/pexels-photo-12053051.jpeg',
        title: 'Bare Trees on Snow Covered Ground Under Blue Sky'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12070097/pexels-photo-12070097.jpeg',
        title: 'Love Between the trees'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12059750/pexels-photo-12059750.jpeg',
        title: 'Woman in White Coat Walking on Beach'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12003394/pexels-photo-12003394.jpeg',
        title: 'Floors of Library'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12001749/pexels-photo-12001749.jpeg',
        title: 'Black and White Photo of Man Standing on Corner of Building'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12070041/pexels-photo-12070041.jpeg',
        title: 'Man in White Shirt Riding on White and Red Boat on Body of Water'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11829347/pexels-photo-11829347.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11991550/pexels-photo-11991550.jpeg',
        title: 'Person with High Heels and Wine Bottle'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11990076/pexels-photo-11990076.jpeg',
        title: 'Low Angle Shot of Rollerskating Woman'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12046627/pexels-photo-12046627.jpeg',
        title: ''
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11955978/pexels-photo-11955978.jpeg',
        title: 'Women in the ocean'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11954484/pexels-photo-11954484.jpeg',
        title: 'Lighthouse Under a Blue Sky '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11950172/pexels-photo-11950172.jpeg',
        title: 'Tourists Walking Towards a Lighthouse '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11950176/pexels-photo-11950176.jpeg',
        title: 'Lighthouse in Peggys Cove, Canada'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12032121/pexels-photo-12032121.jpeg',
        title: '-'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12015338/pexels-photo-12015338.jpeg',
        title: 'Cinque Terre'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12003586/pexels-photo-12003586.jpeg',
        title: 'Green Leaves Plant'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12008109/pexels-photo-12008109.jpeg',
        title: 'Brown Concrete Building Under Blue Sky'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12003167/pexels-photo-12003167.jpeg',
        title: 'The silence '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/12001703/pexels-photo-12001703.jpeg',
        title: "A Grayscale Photo of Woman's Face"
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11995419/pexels-photo-11995419.jpeg',
        title: 'Cascada El Chuveje'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11990061/pexels-photo-11990061.jpeg',
        title: 'Brown Wooden Chopping Board on Gray Marble Table'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11939705/pexels-photo-11939705.jpeg',
        title: 'Unrecognizable Woman in Red Summer Dress Walking Barefoot in Meadow'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11977074/pexels-photo-11977074.jpeg',
        title: 'Black Red and Blue Light'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11890911/pexels-photo-11890911.jpeg',
        title: 'A Sand Dune in the Desert'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11964687/pexels-photo-11964687.jpeg',
        title: 'Green and Red Plant on Brown Ceramic Pot'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11959102/pexels-photo-11959102.jpeg',
        title: 'Persons Hand on White Textile'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11946376/pexels-photo-11946376.jpeg',
        title: 'Free stock photo of adult, architecture, art'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11900639/pexels-photo-11900639.jpeg',
        title: 'Blurred Image of Ballerinas Dancing '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11943236/pexels-photo-11943236.jpeg',
        title: 'Torii Path'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11940225/pexels-photo-11940225.jpeg',
        title: 'White Fog on Body of Water'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11932919/pexels-photo-11932919.jpeg',
        title: 'Free stock photo of architecture, building, business'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/1535972/pexels-photo-1535972.jpeg',
        title: 'Silhouette of Palm Trees Near Body of Water'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11932917/pexels-photo-11932917.jpeg',
        title: 'Grayscale Photo of Glass Building'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11931001/pexels-photo-11931001.jpeg',
        title: 'Grayscale Photo of Tulip Flowers in a Glass Jar '
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11920150/pexels-photo-11920150.jpeg',
        title: 'Silhouette of a Person Standing on Shore'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11918512/pexels-photo-11918512.jpeg',
        title: 'Topless Woman Standing Near Pink Wall'
      },
      {
        userId: 1,
        imageLink: 'https://images.pexels.com/photos/11869159/pexels-photo-11869159.jpeg',
        title: 'Woman Reaching Out to Touch Surface of Water'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Pictures', null, {})
  }
};
