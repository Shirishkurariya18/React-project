import React from 'react'

const Stationary = () => {

    const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1725758262622-8e4454bd350c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlbWl1bSUyMGJhbGwlMjBwZW58ZW58MHx8MHx8fDA%3D",
    name: "Premium Ball Pen",
    price: "49",
    strikeOffPrice: "99",
    discount: "50% Off"
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/864166064/photo/pen-refill.webp?a=1&b=1&s=612x612&w=0&k=20&c=N0feFZEktkTYwZvzxLxfJIdxQapYWOOccFjIDTgWKWw=",
    name: "Blue Gel Pen Pack of 3",
    price: "79",
    strikeOffPrice: "149",
    discount: "47% Off"
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
    id: 4,
    img: "https://images.unsplash.com/photo-1568639152391-61b4303bead7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGFyZCUyMENvdmVyJTIwRGlhcnl8ZW58MHx8MHx8fDA%3D",
    name: "Hard Cover Diary",
    price: "199",
    strikeOffPrice: "399",
    discount: "50% Off"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1635713926737-a55bbbef104e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVsdGktQ29sb3IlMjBIaWdobGlnaHRlciUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Multi-Color Highlighter Set",
    price: "149",
    strikeOffPrice: "299",
    discount: "50% Off"
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/523617609/photo/three-kind-of-scales.webp?a=1&b=1&s=612x612&w=0&k=20&c=nvp19TCKIkv-WdZ9wAQ4nqMp9-k3pmFg6QTk9EWrHcA=",
    name: "Metal Scale 30cm",
    price: "39",
    strikeOffPrice: "89",
    discount: "56% Off"
  },
  {
    id: 7,
    img: "https://media.istockphoto.com/id/487980648/photo/pencil-case-with-school-supplies.webp?a=1&b=1&s=612x612&w=0&k=20&c=NqsDD2dM9o9U6qO0q6DXFVjo0SHbpnmZah38y-QTn1c=",
    name: "Geometry Box",
    price: "199",
    strikeOffPrice: "399",
    discount: "50% Off"
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1667532447990-51c6704ef358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RXJhc2VyJTIwUGFjayUyMG9mJTIwNXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Eraser Pack of 5",
    price: "29",
    strikeOffPrice: "59",
    discount: "51% Off"
  },
  {
    id: 9,
    img: "https://media.istockphoto.com/id/1201607668/photo/black-used-pencil-sharpener.webp?a=1&b=1&s=612x612&w=0&k=20&c=VQ80ZaSQDgXpahWj01QIeoluDOPely7ZPJGCCRyegr8=",
    name: "Sharpener Double Blade",
    price: "19",
    strikeOffPrice: "39",
    discount: "51% Off"
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1554103210-26d928978fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RpY2t5JTIwTm90ZXMlMjAoUGFjayUyMG9mJTIwMyl8ZW58MHx8MHx8fDA%3D",
    name: "Sticky Notes (Pack of 3)",
    price: "69",
    strikeOffPrice: "149",
    discount: "54% Off"
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1572045188875-61013d06e517?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb3JlZCUyMFBlbmNpbCUyMFNldCUyMC0lMjAxMiUyMFNoYWRlc3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Colored Pencil Set - 12 Shades",
    price: "129",
    strikeOffPrice: "259",
    discount: "50% Off"
  },
  {
    id: 12,
    img: "https://plus.unsplash.com/premium_photo-1724153088296-f2c46f792ce1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNrZXRjaCUyMFBlbiUyMFNldCUyMC0lMjAyNCUyMENvbG9yc3xlbnwwfHwwfHx8MA%3D%3D",
    name: "Sketch Pen Set - 24 Colors",
    price: "199",
    strikeOffPrice: "399",
    discount: "50% Off"
  },
  {
    id: 13,
    img: "https://media.istockphoto.com/id/137154040/photo/marker-pens-and-eraser.webp?a=1&b=1&s=612x612&w=0&k=20&c=tIW43_3UPDrgm2r-1el7lFKsTPtFP90GC6SDEENb0dk=",
    name: "Whiteboard Marker Set",
    price: "99",
    strikeOffPrice: "199",
    discount: "50% Off"
  },
  {
    id: 14,
    img: "https://media.istockphoto.com/id/832065222/photo/four-colorful-ribbon-bookmarks-in-a-row.webp?a=1&b=1&s=612x612&w=0&k=20&c=lFp76nRzh9uLSr0UI6_sKlCAb9FCwaonV1nQ0GhplLo=",
    name: "Project File Pack of 10",
    price: "149",
    strikeOffPrice: "299",
    discount: "50% Off"
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1592121998877-e28f92ef1c13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3RhcGxlciUyMHdpdGglMjBQaW5zfGVufDB8fDB8fHww",
    name: "Stapler with Pins",
    price: "79",
    strikeOffPrice: "159",
    discount: "50% Off"
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1587145717234-bc7fae25ed38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2x1ZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Glue Stick (Large)",
    price: "49",
    strikeOffPrice: "99",
    discount: "50% Off"
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1727812100173-b33044cd3071?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERyYXdpbmclMjBCb29rJTIwLSUyMEEzJTIwU2l6ZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Drawing Book - A3 Size",
    price: "119",
    strikeOffPrice: "249",
    discount: "52% Off"
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1687863919809-2aabf0e1eb83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFBhcGVyJTIwQ3V0dGVyJTIwS25pZmV8ZW58MHx8MHx8fDA%3D",
    name: "Paper Cutter Knife",
    price: "39",
    strikeOffPrice: "89",
    discount: "56% Off"
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1750935578389-6e1445f5fd8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2ZmaWNlJTIwRmlsZSUyMEZvbGRlcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Office File Folder",
    price: "59",
    strikeOffPrice: "129",
    discount: "54% Off"
  },
  {
    id: 20,
    img: "https://media.istockphoto.com/id/1158692984/photo/colored-oil-paints-for-children-of-different-colors-with-12-shades-in-a-black-stand-top-view-n.webp?a=1&b=1&s=612x612&w=0&k=20&c=wyJpIh5ykaohj_BrXvUiI3f0KpY9_yESCcSYp0S3qH4=",
    name: "Watercolor Set (12 Shades)",
    price: "149",
    strikeOffPrice: "299",
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

export default Stationary