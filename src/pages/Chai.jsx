import React from 'react'

const Chai = () => {
    const data = 
    [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFzYWxhJTIwQ2hhaXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Masala Chai",
    price: "20",
    strikeOffPrice: "30",
    discount: "33% Off"
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1670954418690-37e178110999?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2luZ2VyJTIwVGVhfGVufDB8fDB8fHww",
    name: "Ginger Tea",
    price: "25",
    strikeOffPrice: "40",
    discount: "38% Off"
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1730833406948-4568aaaa869b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVsYWljaGklMjBUZWF8ZW58MHx8MHx8fDA%3D",
    name: "Elaichi Tea",
    price: "30",
    strikeOffPrice: "50",
    discount: "40% Off"
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/502690151/photo/punjabi-samosa-45.webp?a=1&b=1&s=612x612&w=0&k=20&c=6a1dhTCzl0lak86Ep1_LzLcdtwozkSNdXv36uehoBZ4=",
    name: "Samosa (2 pcs)",
    price: "25",
    strikeOffPrice: "40",
    discount: "38% Off"
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/2235590451/photo/traditional-indian-kachori-with-aloo-sabzi-and-chole.webp?a=1&b=1&s=612x612&w=0&k=20&c=6Sut3Bie70Tl6AAOg6sfrrDZpQujXiJStq0SKQvl50c=",
    name: "Kachori (2 pcs)",
    price: "30",
    strikeOffPrice: "50",
    discount: "40% Off"
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1402788524/photo/bread-pakora.webp?a=1&b=1&s=612x612&w=0&k=20&c=rCMZLSfj2DSK9Y2mzCmNBdlhSrUMqv_FNe699fhmfIA=",
    name: "Bread Pakoda",
    price: "20",
    strikeOffPrice: "30",
    discount: "33% Off"
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/2184015566/photo/puff-aloo-patties.webp?a=1&b=1&s=612x612&w=0&k=20&c=uUdRFqMXZhEQ_IfIykhmBdNJJyNVisZy6nemwR-WLXM=",
    name: "Aloo Patties",
    price: "25",
    strikeOffPrice: "40",
    discount: "38% Off"
  },
  {
    id: 8,
    img: "https://media.istockphoto.com/id/2201502652/photo/poha-jalebi-a-perfect-sweet-savory-duo.webp?a=1&b=1&s=612x612&w=0&k=20&c=5D0rrymNyO2a0Vkl4K6egzWkv_F1IcYnZuXMoh_N9Po=",
    name: "Poha Plate",
    price: "35",
    strikeOffPrice: "60",
    discount: "42% Off"
  },
  {
    id: 9,
    img: "https://media.istockphoto.com/id/1279134709/photo/image-of-metal-tray-with-aloo-paratha-pile-topped-with-red-onion-rings-and-sprinkle-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=BqI3olbZz2Ljg3LaEiLWYq2vQ8wfORCYdPrwKmJ2WbU=",
    name: "Aloo Paratha (1 pc)",
    price: "40",
    strikeOffPrice: "70",
    discount: "42% Off"
  },
  {
    id: 10,
    img: "https://media.istockphoto.com/id/1407550450/photo/crispy-onion-bhajis.webp?a=1&b=1&s=612x612&w=0&k=20&c=o0ORPPFjL3GCAmUmPm0AceNzpChtSO-sn6Hzpi4ezW4=",
    name: "Onion Pakoda",
    price: "30",
    strikeOffPrice: "50",
    discount: "40% Off"
  },
  {
    id: 11,
    img: "https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnJTIwU2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
    name: "Veg Sandwich",
    price: "40",
    strikeOffPrice: "70",
    discount: "42% Off"
  },
  {
    id: 12,
    img: "https://plus.unsplash.com/premium_photo-1739906393226-9978e7943b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlZXNlJTIwU2FuZHdpY2h8ZW58MHx8MHx8fDA%3D",
    name: "Cheese Sandwich",
    price: "60",
    strikeOffPrice: "100",
    discount: "40% Off"
  },
  {
    id: 13,
    img: "https://media.istockphoto.com/id/1442771728/photo/freshly-made-bun-maska-with-stuffed-aloo-tikki.webp?a=1&b=1&s=612x612&w=0&k=20&c=U-6E3SEB5VpiLLYMfZtgTrYSOqkfnchiEjAfCtHw690=",
    name: "Bun Maskaa",
    price: "25",
    strikeOffPrice: "40",
    discount: "38% Off"
  },
  {
    id: 14,
    img: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFSSNL37Rtl6brmMOMiBfaZy0itNgBEO2dnK5I1FlGU=",
    name: "Vada Pav",
    price: "30",
    strikeOffPrice: "50",
    discount: "40% Off"
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1619193099598-6856ec4e2a87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWlzYWwlMjBQYXZ8ZW58MHx8MHx8fDA%3D",
    name: "Misal Pav",
    price: "60",
    strikeOffPrice: "100",
    discount: "40% Off"
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SWRsaXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Idli (2 pcs)",
    price: "40",
    strikeOffPrice: "70",
    discount: "42% Off"
  },
  {
    id: 17,
    img: "https://media.istockphoto.com/id/1481104987/photo/indian-chana-dal-dhokla-khaman-dhokla-is-a-famous-dish-of-gujarat-made-using-rice-a-healthy.webp?a=1&b=1&s=612x612&w=0&k=20&c=xxUVogEtGT4uPkzlXxFzx_d3Pl5cf-ycoT6OHO7WgSk=",
    name: "Dhokla Plate",
    price: "45",
    strikeOffPrice: "80",
    discount: "44% Off"
  },
  {
    id: 18,
    img: "https://media.istockphoto.com/id/2091627558/photo/famous-south-indian-healthy-breakfast-suji-upma.webp?a=1&b=1&s=612x612&w=0&k=20&c=pdrDi5IwnsOOnFl9n966GQwdCz-015PClvrk1Xwld9E=",
    name: "Upma Bowl",
    price: "35",
    strikeOffPrice: "60",
    discount: "42% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwY29mZmVlfGVufDB8fDB8fHww",
    name: "Hot coffee",
    price: "35",
    strikeOffPrice: "60",
    discount: "42% Off"
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1530373239216-42518e6b4063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Cold Coffee",
    price: "60",
    strikeOffPrice: "120",
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

export default Chai