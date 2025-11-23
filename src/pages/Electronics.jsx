import React from 'react'

const Electronics = () => {
    const data = 
    [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBCbHVldG9vdGglMjBFYXJidWRzfGVufDB8fDB8fHww",
    name: "Wireless Bluetooth Earbuds",
    price: "1299",
    strikeOffPrice: "2499",
    discount: "48% Off"
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/2154032562/photo/mobile-smartphones-with-blank-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=7uiXFempqrH21FPGrOspvyeQOlm8GVMSrEfi4goay74=",
    name: "Smartphone 6.5 inch Display",
    price: "9999",
    strikeOffPrice: "14999",
    discount: "33% Off"
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1661662915728-1432a75022dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2lyZWxlc3MlMjBLZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Wireless Keyboard",
    price: "799",
    strikeOffPrice: "1499",
    discount: "47% Off"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBNb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Wireless Mouse",
    price: "399",
    strikeOffPrice: "799",
    discount: "50% Off"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Bluetooth Speaker",
    price: "899",
    strikeOffPrice: "1999",
    discount: "55% Off"
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1215074546/photo/controlling-light-bulb-with-mobile-device.webp?a=1&b=1&s=612x612&w=0&k=20&c=n-PD48Q5qUJKY8dVCSU-7OVBiquG557pf7iCwMNGa7M=",
    name: "Smart LED Bulb",
    price: "299",
    strikeOffPrice: "699",
    discount: "57% Off"
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/2175271521/photo/close-up-of-male-hands-using-laptop-standing-on-cooling-stand.webp?a=1&b=1&s=612x612&w=0&k=20&c=qewtKelHf1c8kvSHjOSuRuGW_fCVHgCliwft-59QIiE=",
    name: "Laptop Cooling Pad",
    price: "499",
    strikeOffPrice: "999",
    discount: "50% Off"
  },
  {
    id: 8,
    img: "https://plus.unsplash.com/premium_photo-1679177183750-0eda63444b24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2FtaW5nJTIwSGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Gaming Headset",
    price: "1599",
    strikeOffPrice: "2999",
    discount: "47% Off"
  },
  {
    id: 9,
    img: "https://media.istockphoto.com/id/1348076655/photo/closeup-shot-of-c-type-pin-of-mobile-phone-charger-cable-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=aYpQ1pWqBM6J8gx2CMQXH9NDs77OwBPoeaWhYMtIBm4=",
    name: "Type-C Fast Charger",
    price: "349",
    strikeOffPrice: "799",
    discount: "56% Off"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1758348844348-acaf8d854665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBGaXRuZXNzJTIwQmFuZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Smart Fitness Band",
    price: "1499",
    strikeOffPrice: "2999",
    discount: "50% Off"
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
    id: 14,
    img: "https://plus.unsplash.com/premium_photo-1760331485703-f979bfbe257b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VVNCJTIwRGF0YSUyMENhYmxlfGVufDB8fDB8fHww",
    name: "USB Data Cable",
    price: "149",
    strikeOffPrice: "299",
    discount: "50% Off"
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    name: "laptop",
    price: "44349",
    strikeOffPrice: "66699",
    discount: "50% Off"
  },
  {
    id: 16,
    img: "https://media.istockphoto.com/id/495606247/photo/lowering-and-turning-off-air-conditioning-to-conserve-eletricity-energy.webp?a=1&b=1&s=612x612&w=0&k=20&c=Kq29a-7P5ohlIQlwLpiSbDqiM52jYo4VA5qXk65fR3A=",
    name: "Ac",
    price: "77799",
    strikeOffPrice: "111699",
    discount: "53% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "fridge",
    price: "1599",
    strikeOffPrice: "23399",
    discount: "50% Off"
  },
  {
    id: 18,
    img: "https://media.istockphoto.com/id/844385510/photo/close-up-of-woman-adjusting-temperature-of-halogen-hob-in-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=DBN_5w5DDHZZ7-8GoaQwtxt1y188ghoQ6IYaEqIcNnk=",
    name: "induction",
    price: "5549",
    strikeOffPrice: "5799",
    discount: "56% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZXIlMjBncmluZGVyfGVufDB8fDB8fHww",
    name: "mixer grinder",
    price: "2499",
    strikeOffPrice: "4999",
    discount: "50% Off"
  },
  {
    id: 20,
    img: "https://media.istockphoto.com/id/1316053435/photo/air-cooler.webp?a=1&b=1&s=612x612&w=0&k=20&c=J_sJwBjqe0HU7DrUwpapFf2jYxFV-KATHCzd9N2RwvU=",
    name: "cooler",
    price: "5299",
    strikeOffPrice: "7599",
    discount: "50% Off"
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

export default Electronics