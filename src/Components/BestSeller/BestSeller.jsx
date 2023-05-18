import React, { useState } from 'react'
import './BestSeller.scss';
import Card from '../Card/Card';

function BestSeller() {
    const data = [
        {
            id: 0,
            title: "Kinship",
            img: "https://i.imgur.com/p5xskvw.jpg",
            price: 16,
            notes: "notes of citrus, fig and cola, with pronounced, sweet acidity and full body",
            size: "350g",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            bestSeller: true,
            tags: ["Best Seller", "Light Roast", "Fair Trade - Organic"]
        },
        {
            id: 1,
            title: "Quin",
            img: "https://i.imgur.com/BRk9jpq.jpg",
            price: 22,
            notes: "flavors of molasses, licorice and chocolate",
            size: "350g",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            bestSeller: true,
            tags: ["Dark Roast", "Fair Trade - Organic"]
        },
        {
            id: 2,
            title: "Opal Lift",
            img: "https://i.imgur.com/vAJ73mz.jpg",
            price: 18,
            notes: "floral, earthy aroma with a full body and a spicy, smoky flavor",
            size: "350g",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            bestSeller: true,
            tags: ["Medium Roast", "Fair Trade - Organic"]
        },        
        {
            id: 3,
            title: "Royalty",
            img: "https://i.imgur.com/SdJkWvs.jpg",
            price: 16,
            notes: "notes of blueberry, dark chocolate and grapefruit peel",
            size: "350g",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            bestSeller: false,
            tags: ["Best Seller", "Light Roast", "Fair Trade - Organic"]
        },
        {
            id: 4,
            title: "Proper Tusla",
            img: "https://i.imgur.com/szg1FNJ.jpg",
            price: 25,
            notes: "smoky, full-bodied blend with flavors of dark chocolate and licorice",
            size: "350g",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            bestSeller: false,
            tags: ["Best Seller", "Dark Roast", "Fair Trade - Organic"]
        },
    ]

  return (
    <div className='bestseller'>
        <div className="top">
            <h1>Best Sellers!</h1>
        </div>
        <div className="bottom">
            {data.filter(seller => seller.bestSeller === true).map((item) => <Card item={item} key={item.id} /> )}
        </div>
    </div>
  )
}

export default BestSeller