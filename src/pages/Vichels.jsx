import React from 'react'

const Vichels = () => {
    const data = 
    [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1722088354375-3c64b4d994b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VkYW4lMjBDYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Sedan Car",
    price: "699000",
    strikeOffPrice: "899000",
    discount: "22% Off"
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1737444757250-e5a8837d9173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhhdGNoYmFjayUyMENhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Hatchback Car",
    price: "499000",
    strikeOffPrice: "649000",
    discount: "23% Off"
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
    id: 4,
    img: "https://images.unsplash.com/photo-1597260491619-bab87197869f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWxlY3RyaWMlMjBTY29vdGVyfGVufDB8fDB8fHww",
    name: "Electric Scooter",
    price: "84999",
    strikeOffPrice: "109999",
    discount: "23% Off"
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/1662538828/photo/an-asian-girl-riding-a-motorcycle-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=89vYA3vnTOTK5EClfFphxoktJoBa_FMNsaDnLGRAkXs=",
    name: "Cruiser Bike 350cc",
    price: "229000",
    strikeOffPrice: "279000",
    discount: "18% Off"
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1700884520248-92092bd21e63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJ5JTIwU1VWfGVufDB8fDB8fHww",
    name: "Luxury SUV",
    price: "1299000",
    strikeOffPrice: "1599000",
    discount: "19% Off"
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1601252300554-4ad551483bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGlja3VwJTIwVHJ1Y2t8ZW58MHx8MHx8fDA%3D",
    name: "Pickup Truck",
    price: "999000",
    strikeOffPrice: "1199000",
    discount: "17% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1666005337392-a3e7b3b9e175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEVsZWN0cmljJTIwQ2FyJTIwQ29tcGFjdHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Electric Car Compact",
    price: "999000",
    strikeOffPrice: "1299000",
    discount: "23% Off"
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1720536358229-18cac8932475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2Nvb3RlciUyMDEyNWNjfGVufDB8fDB8fHww",
    name: "Scooter 125cc",
    price: "78000",
    strikeOffPrice: "95000",
    discount: "18% Off"
  },
  {
    id: 10,
    img: "https://plus.unsplash.com/premium_photo-1661884049104-9d79c968a64c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRvdXJpbmclMjBNb3RvcmN5Y2xlfGVufDB8fDB8fHww",
    name: "Touring Motorcycle",
    price: "279000",
    strikeOffPrice: "329000",
    discount: "15% Off"
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1615383690110-62acb993993e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SHlicmlkJTIwQ2FyfGVufDB8fDB8fHww",
    name: "Hybrid Car",
    price: "1199000",
    strikeOffPrice: "1499000",
    discount: "20% Off"
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3BvcnRzJTIwQ2FyfGVufDB8fDB8fHww",
    name: "Sports Car",
    price: "2399000",
    strikeOffPrice: "2999000",
    discount: "20% Off"
  },
  {
    id: 13,
    img: "https://media.istockphoto.com/id/1269462424/photo/a-picture-of-bike.webp?a=1&b=1&s=612x612&w=0&k=20&c=ecbKNK2PYgtxO6_FpjWTdwk0xQ_YiJeCW-_DuppjGqo=",
    name: "Budget Bike 100cc",
    price: "62000",
    strikeOffPrice: "72000",
    discount: "13% Off"
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1627807822483-a463d58cf922?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9wZWR8ZW58MHx8MHx8fDA%3D",
    name: "Moped",
    price: "45000",
    strikeOffPrice: "55000",
    discount: "18% Off"
  },
  {
    id: 15,
    img: "https://media.istockphoto.com/id/170107357/photo/light-silver-spacious-car-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=yKEZY9HRwt_oholrLnHX2TNu4sOwwHpCt4BI37jtta4=",
    name: "7-Seater Family Car",
    price: "899000",
    strikeOffPrice: "1099000",
    discount: "18% Off"
  },
  {
    id: 16,
    img: "https://media.istockphoto.com/id/1409897251/photo/new-electric-scooters-are-parked-in-order-on-a-fresh-lawn-with-a-view-of-the-backside-part.webp?a=1&b=1&s=612x612&w=0&k=20&c=wy9weI7GVUJF68rgmalpO6EIErXKtXap5soUM7JUSWE=",
    name: "Electric Bike",
    price: "119000",
    strikeOffPrice: "159000",
    discount: "25% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1760688192126-ceda9e1dd0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2ZmLVJvYWQlMjBTVVZ8ZW58MHx8MHx8fDA%3D",
    name: "Off-Road SUV",
    price: "1599000",
    strikeOffPrice: "1999000",
    discount: "20% Off"
  },
  {
    id: 18,
    img: "https://media.istockphoto.com/id/1189930256/photo/scooter-boy.webp?a=1&b=1&s=612x612&w=0&k=20&c=M4Lw1WtD8l7pXTXYCwbqTu_oK5GNLQPmlj2-gJ63rdY=",
    name: "Sports Scooter",
    price: "94000",
    strikeOffPrice: "119000",
    discount: "21% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1611182150972-4094e06cba79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmludGFnZSUyME1vdG9yY3ljbGV8ZW58MHx8MHx8fDA%3D",
    name: "Vintage Motorcycle",
    price: "189000",
    strikeOffPrice: "239000",
    discount: "21% Off"
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1694183127547-5616bab246ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29udmVydGlibGUlMjBDYXJ8ZW58MHx8MHx8fDA%3D",
    name: "Convertible Car",
    price: "1999000",
    strikeOffPrice: "2499000",
    discount: "20% Off"
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

export default Vichels