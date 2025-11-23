import React from 'react'

const MensWear = () => {

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
    id: 2,
    img: "https://images.unsplash.com/photo-1557684387-08927d28c72a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "White Cotton Casual Shirt",
    price: "699",
    strikeOffPrice: "1699",
    discount: "58% Off"
  },
  {
    id: 3,
     img: "https://picsum.photos/id/1005/400/400",
    name: "Black Oversized Shirt",
    price: "899",
    strikeOffPrice: "2299",
    discount: "61% Off"
  },
  {
    id: 4,
    img: "https://picsum.photos/id/1001/400/400",
    name: "Blue Denim Shirt",
    price: "999",
    strikeOffPrice: "2499",
    discount: "60% Off"
  },
  {
    id: 5,
    img: "https://picsum.photos/id/1012/400/400",
    name: "Green Check Shirt",
    price: "749",
    strikeOffPrice: "1899",
    discount: "61% Off"
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
    id: 7,
     img: "https://plus.unsplash.com/premium_photo-1664391776081-9ca987930d28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "White Oversized T-Shirt",
    price: "549",
    strikeOffPrice: "1299",
    discount: "57% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1602346733051-b660c8747610?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Red Solid T-Shirt",
    price: "399",
    strikeOffPrice: "999",
    discount: "60% Off"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1628343920868-03222517c2d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Blue Round Neck T-Shirt",
    price: "449",
    strikeOffPrice: "1199",
    discount: "62% Off"
  },
  {
    id: 10,
    img: " https://images.unsplash.com/photo-1566070143658-523a24797109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Olive Green Solid T-Shirt",
    price: "429",
    strikeOffPrice: "1099",
    discount: "61% Off"
  },

  {
    id: 11,
     img: " https://plus.unsplash.com/premium_photo-1661433163910-1800f7bca560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Blue Straight Fit Jeans",
    price: "1299",
    strikeOffPrice: "2799",
    discount: "54% Off"
  },
  {
    id: 12,
    img: " https://plus.unsplash.com/premium_photo-1661326303279-19a9595f10a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Black Slim Fit Jeans",
    price: "1499",
    strikeOffPrice: "2999",
    discount: "50% Off"
  },
  {
    id: 13,
    img: " https://media.istockphoto.com/id/692909922/photo/hes-off-on-an-adventure.webp?a=1&b=1&s=612x612&w=0&k=20&c=d-bqdMaEQakXXATRVAAy9EhXDm0zSsiAKevpLlkuKBE=",
    name: "Grey Tapered Jeans",
    price: "1399",
    strikeOffPrice: "2899",
    discount: "52% Off"
  },
  {
    id: 14,
     img: "https://media.istockphoto.com/id/2183219028/photo/a-stylish-young-man-showcases-autumn-fashion-in-a-modern-studio-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=I49LCSk2VdwEP3HChbENfOoOoubwx2_XySmorK7nfe0=",
    name: "Classic Khaki Chinos",
    price: "999",
    strikeOffPrice: "2199",
    discount: "55% Off"
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1552252059-9d77e4059ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Brown Cargo Pants",
    price: "1599",
    strikeOffPrice: "3299",
    discount: "51% Off"
  },

  {
    id: 16,
     img: " https://plus.unsplash.com/premium_photo-1727942413448-2f06f240e743?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbnMlMjB3ZWFyfGVufDB8fDB8fHww",
    name: "Black Check Oversized Shirt",
    price: "879",
    strikeOffPrice: "1999",
    discount: "56% Off"
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
    id: 18,
    img: " https://images.unsplash.com/photo-1667284152861-36e03571486a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Black Cargo Pants",
    price: "1699",
    strikeOffPrice: "3499",
    discount: "51% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1761637928325-058cddf06ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    name: "Green Polo T-Shirt",
    price: "699",
    strikeOffPrice: "1599",
    discount: "56% Off"
  },
   {
    id: 20,
    img: "https://images.unsplash.com/photo-1621335829175-95f437384d7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHdlYXJ8ZW58MHx8MHx8fDA%3D",
    name: "White Linen Pants",
    price: "1199",
    strikeOffPrice: "2599",
    discount: "54% Off"
  }
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

export default MensWear