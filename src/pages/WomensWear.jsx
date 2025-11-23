import React from 'react'

const WomensWear = () => {

    const data = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1661351421471-b288544c3dda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Floral Print Top",
    price: "599",
    strikeOffPrice: "1299",
    discount: "54% Off"
  },
  {
    id: 2,
    img: " https://images.unsplash.com/photo-1591338459467-bd36100b07c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Pink Casual Kurti",
    price: "799",
    strikeOffPrice: "1699",
    discount: "53% Off"
  },
  {
    id: 3,
    img: " https://images.unsplash.com/photo-1751158723290-4d5b90e374aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Women Blue Denim Jacket",
    price: "1299",
    strikeOffPrice: "2499",
    discount: "48% Off"
  },
  {
    id: 4,
    img: " https://plus.unsplash.com/premium_photo-1690034978688-dbdd03eab792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Black Maxi Dress",
    price: "999",
    strikeOffPrice: "2199",
    discount: "55% Off"
  },
  {
    id: 5,
    img: " https://images.unsplash.com/photo-1747049559461-560c02b192b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Printed A-Line Dress",
    price: "899",
    strikeOffPrice: "1899",
    discount: "52% Off"
  },
  {
    id: 6,
    img: " https://images.unsplash.com/photo-1685538540414-9248617bec83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Red Crop Top",
    price: "499",
    strikeOffPrice: "999",
    discount: "50% Off"
  },
  {
    id: 7,
    img: " https://plus.unsplash.com/premium_photo-1693242804203-e8de4e41f7b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW5zJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Women Oversized T-Shirt",
    price: "449",
    strikeOffPrice: "999",
    discount: "55% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1685538636736-ffcf9b783c27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Blue Skinny Jeans",
    price: "1199",
    strikeOffPrice: "2699",
    discount: "56% Off"
  },
  {
    id: 9,
    img: "https://plus.unsplash.com/premium_photo-1693242804586-bd22957fb3ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Black Straight Jeans",
    price: "1299",
    strikeOffPrice: "2799",
    discount: "54% Off"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1685538758593-27e86bcaebe9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "High Waist Jeggings",
    price: "899",
    strikeOffPrice: "1999",
    discount: "55% Off"
  },
  {
    id: 11,
    img: "https://plus.unsplash.com/premium_photo-1733902551357-e7fcbbba32a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Pink Party Wear Dress",
    price: "1599",
    strikeOffPrice: "3499",
    discount: "54% Off"
  },
  {
    id: 12,
    img: " https://images.unsplash.com/photo-1761117228880-df2425bd70da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Women Printed Kurta Set",
    price: "1499",
    strikeOffPrice: "3299",
    discount: "54% Off"
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1762154057377-cc9d3dd6900c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Women Palazzo Pants",
    price: "699",
    strikeOffPrice: "1499",
    discount: "53% Off"
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1614098097306-c67b8020c04e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Solid Black Skirt",
    price: "599",
    strikeOffPrice: "1299",
    discount: "54% Off"
  },
  {
    id: 15,
    img: "https://plus.unsplash.com/premium_photo-1682096132266-3ddc18dd5c0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Blue Flared Skirt",
    price: "749",
    strikeOffPrice: "1699",
    discount: "56% Off"
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1762777777735-ac508da6fffe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Women Cotton Saree",
    price: "1199",
    strikeOffPrice: "2499",
    discount: "52% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1762777777705-5e5e0ac1027d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Designer Embroidered Suit",
    price: "1699",
    strikeOffPrice: "3599",
    discount: "53% Off"
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1704775985599-3518cbc459bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Women Yoga Leggings",
    price: "599",
    strikeOffPrice: "1299",
    discount: "54% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1756483510802-0acac24ab4e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Women Hoodie Sweatshirt",
    price: "899",
    strikeOffPrice: "1999",
    discount: "55% Off"
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1760287363878-1a09af715b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHdvbWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Blue Western Top",
    price: "549",
    strikeOffPrice: "1299",
    discount: "58% Off"
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

export default WomensWear