import React from 'react'


const Furnitures = () => {
  
    const data =
    [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1254646139/photo/comfortable-workplace-with-potted-plants-wall-organizer-pictures-and-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pb7DHIXX1cNCGtFCT-u7LKhgA_FgBeBF9pj3kn16dZ0=",
    name: "Wooden Study Table",
    price: "2499",
    strikeOffPrice: "4999",
    discount: "50% Off"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1750306957820-f778b67c4e13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwT2ZmaWNlJTIwQ2hhaXJ8ZW58MHx8MHx8fDA%3D",
    name: "Modern Office Chair",
    price: "1999",
    strikeOffPrice: "3999",
    discount: "50% Off"
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1684164601662-1a8ee99fa1a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2lkcyUyMFN0dWR5JTIwRGVza3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Kids Study Desk",
    price: "1799",
    strikeOffPrice: "3499",
    discount: "48% Off"
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1470493623/photo/home-library-concept-wooden-bookshelves-filled-with-books.webp?a=1&b=1&s=612x612&w=0&k=20&c=tokS0mw6JCVHCClsar6NULLYHAQNod4fXU1eSMHJxrY=",
    name: "Classic Wooden Wardrobe",
    price: "7999",
    strikeOffPrice: "14999",
    discount: "47% Off"
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1733353309577-ebe815f18392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TW9kZXJuJTIwRG91YmxlJTIwQmVkfGVufDB8fDB8fHww",
    name: "Modern Double Bed",
    price: "12999",
    strikeOffPrice: "24999",
    discount: "48% Off"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1635700698888-a659f411d7c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGluaW5nJTIwVGFibGUlMjBTZXQlMjAoNCUyMENoYWlycyl8ZW58MHx8MHx8fDA%3D",
    name: "Dining Table Set (4 Chairs)",
    price: "6999",
    strikeOffPrice: "14999",
    discount: "53% Off"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1725783521817-3f37e54390a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V29vZGVuJTIwQm9va3NoZWxmfGVufDB8fDB8fHww",
    name: "Wooden Bookshelf",
    price: "2299",
    strikeOffPrice: "4599",
    discount: "50% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1759722665621-7ae933accb69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mYSUyMFNldCUyMCgzJTJCMil8ZW58MHx8MHx8fDA%3D",
    name: "Sofa Set (3+2)",
    price: "14999",
    strikeOffPrice: "29999",
    discount: "50% Off"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1571422065917-030a0f0e6350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENvZmZlZSUyMFRhYmxlfGVufDB8fDB8fHww",
    name: "Coffee Table",
    price: "1299",
    strikeOffPrice: "2499",
    discount: "48% Off"
  },
  {
    id: 10,
    img: "https://media.istockphoto.com/id/2173062247/photo/rubber-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=B0Uq6KNLDCJItEF-aJPGj4Y9oOD0wyOvGgQ9aa5Nl-4=",
    name: "Wooden Shoe Rack",
    price: "1999",
    strikeOffPrice: "3999",
    discount: "50% Off"
  },
  {
    id: 11,
    img: "https://plus.unsplash.com/premium_photo-1661779632194-6cf32a9b5325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2FsbCUyME1vdW50ZWQlMjBUViUyMFVuaXR8ZW58MHx8MHx8fDA%3D",
    name: "Wall Mounted TV Unit",
    price: "2999",
    strikeOffPrice: "5999",
    discount: "50% Off"
  },
  {
    id: 12,
    img: "https://media.istockphoto.com/id/2198972259/photo/discover-stylish-bedside-decor-featuring-beautiful-green-and-blue-accents-for-your-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qspp71ZCGUWhyED1F5orgTsbnf32Z_bqXJmrYcJEW0k=",
    name: "Stylish Bedside Table",
    price: "999",
    strikeOffPrice: "1999",
    discount: "50% Off"
  },
  {
    id: 13,
    img: "https://plus.unsplash.com/premium_photo-1670270312131-02505afe255b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2xhc3MlMjBUb3AlMjBDZW50ZXIlMjBUYWJsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Glass Top Center Table",
    price: "1499",
    strikeOffPrice: "3299",
    discount: "55% Off"
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1757969687802-82493a29047a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVjbGluZXIlMjBDaGFpcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Recliner Chair",
    price: "5999",
    strikeOffPrice: "11999",
    discount: "50% Off"
  },
  {
    id: 15,
    img: "https://media.istockphoto.com/id/1281891721/photo/bogota-colombia-a-cozy-bedroom-with-a-queen-size-bed-in-a-small-apartment-in-a-middle-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=ttmfR81QzBdDQsYTzpA7gkBeD3FSWXItIm9ugKbvOM4=",
    name: "Wooden Dressing Table",
    price: "3499",
    strikeOffPrice: "6999",
    discount: "50% Off"
  },
  {
    id: 16,
    img: "https://media.istockphoto.com/id/1146021022/photo/stylish-and-warm-interior-of-apartment-studio-with-gold-armchair-wooden-mirror-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=92BaIezpGaH9xCfbaJ26TmPw3gTKmITEOdMOowfEH7I=",
    name: "Office Workstation Table",
    price: "2799",
    strikeOffPrice: "5599",
    discount: "50% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1621373660651-081fc7f94fa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGl2aW5nJTIwUm9vbSUyMFNpZGVib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Living Room Sideboard",
    price: "3999",
    strikeOffPrice: "7999",
    discount: "50% Off"
  },
  {
    id: 18,
    img: "https://plus.unsplash.com/premium_photo-1682088544719-ce33c9d9bb99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEtpZHMlMjBTdHVkeSUyMENoYWlyfGVufDB8fDB8fHww",
    name: "Kids Study Chair",
    price: "999",
    strikeOffPrice: "1999",
    discount: "50% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1758565811303-8aeff0e6bbae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFdvb2RlbiUyMFN0b3JhZ2UlMjBDYWJpbmV0fGVufDB8fDB8fHww",
    name: "Wooden Storage Cabinet",
    price: "2499",
    strikeOffPrice: "4999",
    discount: "50% Off"
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1719899779266-ae9427607bf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Um91bmQlMjBXb29kZW4lMjBTdG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Round Wooden Stool",
    price: "699",
    strikeOffPrice: "1499",
    discount: "53% Off"
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

export default Furnitures