import React from 'react'

const Product = () => {


  const data = [
   
  {
    id: 1,
     img: "https://images.unsplash.com/photo-1761839258623-e232e15f7ff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    name: "Brown Solid Oversized Shirt",
    price: "799",
    strikeOffPrice: "1999",
    discount: "60% Off"
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1725758262622-8e4454bd350c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlbWl1bSUyMGJhbGwlMjBwZW58ZW58MHx8MHx8fDA%3D",
    name: "Premium Ball Pen",
    price: "49",
    strikeOffPrice: "99",
    discount: "50% Off"
  },
 
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1581431886211-6b932f8367f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QTQlMjBzaXplJTIwbm90ZSUyMGJvb2t8ZW58MHx8MHx8fDA%3D",
    name: "A4 Size Notebook - 200 Pages",
    price: "129",
    strikeOffPrice: "249",
    discount: "48% Off"
  },
  
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1759567066672-4b9f48000096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Black Graphic T-Shirt",
    price: "499",
    strikeOffPrice: "1099",
    discount: "54% Off"
  },
  
  {
    id: 3,
    img: "https://media.istockphoto.com/id/179063799/photo/motorbike-harbourside.webp?a=1&b=1&s=612x612&w=0&k=20&c=wgqRnsMSHkIqro2NzRJmzq8IJwC7708b1uhIbP1rjQk=",
    name: "Sports Bike 250cc",
    price: "159000",
    strikeOffPrice: "199000",
    discount: "20% Off"
  },
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
    id: 11,
    img: "https://media.istockphoto.com/id/1198444825/photo/charging-of-smart-phone-from-power-bank.webp?a=1&b=1&s=612x612&w=0&k=20&c=sabk_liEDE6heaeaRSoq2keBColzXWEJ4IC25fc4b_k=",
    name: "Portable Power Bank",
    price: "1199",
    strikeOffPrice: "2499",
    discount: "52% Off"
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1592222376988-92af20d4d06c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNtYXJ0dHYlMjA0MiUyMGluY2h8ZW58MHx8MHx8fDA%3D",
    name: "Smarttv 42 inch",
    price: "19999",
    strikeOffPrice: "44499",
    discount: "55% Off"
  },
  {
    id: 13,
    img: "https://media.istockphoto.com/id/1200998021/photo/black-cctv-outside-building-home-security-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=jhsGHPQz5hDCzfzTtIr2Qbs6jfKlK6hltsaV5SD5upU=",
    name: "Home CCTV Camera",
    price: "1499",
    strikeOffPrice: "2999",
    discount: "50% Off"
  },
  {
    id: 17,
    img: " https://images.unsplash.com/photo-1724245190409-97f3415a7d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Striped Blue T-Shirt",
    price: "499",
    strikeOffPrice: "1199",
    discount: "58% Off"
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
];


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

export default Product