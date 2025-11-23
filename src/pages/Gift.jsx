import React from 'react'

const Gift = () => {
    const data = 
   [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1762000801074-5311c802686d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVjb3JhdGl2ZSUyMEdpZnQlMjBCb3h8ZW58MHx8MHx8fDA%3D",
    name: "Decorative Gift Box",
    price: "299",
    strikeOffPrice: "599",
    discount: "50% Off"
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/528059270/photo/mirror-in-heart-shape.webp?a=1&b=1&s=612x612&w=0&k=20&c=UuEnS73FqL5AzWQ1rSXKB5I28D9U6XpzzOQzPG3Cdeo=",
    name: "Heart Shaped Photo Frame",
    price: "399",
    strikeOffPrice: "899",
    discount: "56% Off"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1744912684384-0732bf94653d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rmxvd2VyJTIwQm91cXVldCUyMEdpZnQlMjBTZXR8ZW58MHx8MHx8fDA%3D",
    name: "Flower Bouquet Gift Set",
    price: "499",
    strikeOffPrice: "1099",
    discount: "55% Off"
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1437829492/photo/luxury-lump-as-ceiling-decoration.webp?a=1&b=1&s=612x612&w=0&k=20&c=aCyWb5cglEDmQITL-2RKaHA6zYmj8DU4X5tdAf0F8xM=",
    name: "LED Crystal Lamp Gift",
    price: "699",
    strikeOffPrice: "1499",
    discount: "53% Off"
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/909772478/photo/brown-teddy-bear-isolated-in-front-of-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=c3gKwUiULgRzy7gwSnZU6SXr76-ccbTKkD_91gym3iY=",
    name: "Cute Teddy Bear",
    price: "349",
    strikeOffPrice: "799",
    discount: "56% Off"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1638797557761-60d0ba2ec632?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3VzdG9taXplZCUyMENvZmZlZSUyME11Z3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Customized Coffee Mug",
    price: "249",
    strikeOffPrice: "599",
    discount: "58% Off"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1701685809731-40194912cc2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZhbGVudGluZSUyMEdpZnQlMjBDb21ib3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Valentine Gift Combo",
    price: "799",
    strikeOffPrice: "1699",
    discount: "53% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1576603009048-c25adc3d62e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWluaSUyMEdyZWV0aW5nJTIwQ2FyZCUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Mini Greeting Card Set",
    price: "149",
    strikeOffPrice: "349",
    discount: "57% Off"
  },
  {
    id: 9,
    img: "https://media.istockphoto.com/id/508707361/photo/prayer-and-celebrations-isolated-over-black.webp?a=1&b=1&s=612x612&w=0&k=20&c=wdVKxkFqKZKr0cKNKRPOfyrLLTrAEk4nm35edCjxfPE=",
    name: "Handmade Art Candle",
    price: "199",
    strikeOffPrice: "499",
    discount: "60% Off"
  },
  {
    id: 10,
    img: "https://media.istockphoto.com/id/1339399950/photo/heart-shaped-box.webp?a=1&b=1&s=612x612&w=0&k=20&c=g2TMsPqsOKmbdtbTTc1RupvQKIGg5-eLzPobyTDUHGg=",
    name: "Chocolate Gift Pack",
    price: "299",
    strikeOffPrice: "699",
    discount: "57% Off"
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1715617030131-933ee9dc095f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VGFibGUlMjBTaG93cGllY2UlMjBHaWZ0fGVufDB8fDB8fHww",
    name: "Table Showpiece Gift",
    price: "499",
    strikeOffPrice: "1199",
    discount: "58% Off"
  },
  {
    id: 12,
    img: "https://plus.unsplash.com/premium_photo-1683133649075-ea2b3685e0f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWluaSUyMFNub3clMjBHbG9iZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Mini Snow Globe",
    price: "349",
    strikeOffPrice: "799",
    discount: "56% Off"
  },
  {
    id: 13,
    img: "https://media.istockphoto.com/id/959241200/photo/a-pencil-case-for-a-ballpoint-pen-made-from-old-oak-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=JsGgiQeANMIcGMtRXve38YZap5jwanrCgq_vcY2I428=",
    name: "Birthday Gift Combo",
    price: "699",
    strikeOffPrice: "1599",
    discount: "56% Off"
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1607629155006-2391d17b940f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1eHVyeSUyMEdpZnQlMjBCYXNrZXR8ZW58MHx8MHx8fDA%3D",
    name: "Luxury Gift Basket",
    price: "999",
    strikeOffPrice: "2199",
    discount: "55% Off"
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1759493946930-150aee20977c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVyc29uYWxpemVkJTIwS2V5Y2hhaW58ZW58MHx8MHx8fDA%3D",
    name: "Personalized Keychain",
    price: "149",
    strikeOffPrice: "299",
    discount: "50% Off"
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1617268074119-a10738b8d33e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TG92ZSUyME1lc3NhZ2UlMjBCb3R0bGUlMjBHaWZ0fGVufDB8fDB8fHww",
    name: "Love Message Bottle Gift",
    price: "199",
    strikeOffPrice: "499",
    discount: "60% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1737575212792-c0c06dd4e12a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvbWUlMjBEZWNvciUyMFdvb2RlbiUyMFNob3dwaWVjZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Home Decor Wooden Showpiece",
    price: "599",
    strikeOffPrice: "1299",
    discount: "54% Off"
  },
  {
    id: 18,
    img: "https://media.istockphoto.com/id/183025164/photo/isolated-presents-gifts-collection-assortment.webp?a=1&b=1&s=612x612&w=0&k=20&c=L1YXbHyyAlIpWssYHDp9EbB9yPaBoWGwXtAHkDXyfNA=",
    name: "Colorful Gift Ribbon Pack",
    price: "99",
    strikeOffPrice: "199",
    discount: "50% Off"
  },
  {
    id: 19,
    img: "https://media.istockphoto.com/id/654259232/photo/perfume-bottles.webp?a=1&b=1&s=612x612&w=0&k=20&c=OY7MpYlmUDbaNlIN6i4CDkGJWba07CJUTvrKfxf3V-k=",
    name: "Premium Perfume Gift",
    price: "799",
    strikeOffPrice: "1599",
    discount: "50% Off"
  },
  {
    id: 20,
    img: "https://media.istockphoto.com/id/1435417741/photo/circle-of-crystal-lines.webp?a=1&b=1&s=612x612&w=0&k=20&c=cm3K5Cw5tx7shfsAqGZ7RVpKlznuKPK5OrMKsABv1A0=",
    name: "Crystal Photo Frame",
    price: "449",
    strikeOffPrice: "999",
    discount: "55% Off"
  }
]


  return (
    <div className='hello'>
      <div className='products-container'>
        {data.map((item) => (
          <div className='product-card' key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <div className='price-section'>
              <span className='price'>₹{item.price}</span>
              <span className='strike-price'>₹{item.strikeOffPrice}</span>
              <span className='discount'>{item.discount}</span>
            </div>
            <button className='add-to-cart'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gift