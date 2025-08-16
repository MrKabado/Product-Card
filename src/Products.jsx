import React from 'react'
import ProductCard from './components/ProductCard'
import Aulaf3621 from '../public/f3621.jpg'
import Aulaf75 from '../public/f75.jpg'
import AttackSharkX11 from '../public/attacksharkx11.jpg'
import RedDragon from '../public/RedDragon.jpg'
import RoyalKludge from '../public/RoyalKludge.jpg'
import RazerMouse from '../public/Razer DeathAdder Essential.jpg'

function Products() {
  const Product = [
    {
      imageSource: Aulaf3621,
      imageAlt: "Aulaf3621",
      title: "Aula F3621",
      price: "₱869",
      description: "Compact 61-key wired mechanical keyboard with RGB lighting and hot-swappable switches—ideal for minimalist setups.",
    }, 
    {
      imageSource: Aulaf75,
      imageAlt: "Aula F75 Tri-mode",
      title: "AULA F75",
      price: "₱2,939",
      description: "75 % layout keyboard with tri-mode connectivity (wired, Bluetooth, 2.4 GHz) and hot-swappable functionality—great for flexible, stylish usage.",
    },
    {
      imageSource: AttackSharkX11,
      imageAlt: "AttackSharkX11",
      title: "Attack Shark X11",
      price: "₱1,000",
      description: "Lightweight wireless gaming keyboard; RGB charging dock; tri-mode connection; durable.",
    },
    {
      imageSource: RedDragon,
      imageAlt: "RedDragon Kumara K552",
      title: "Redragon Kumara K552",
      price: "₱1,800",
      description: "Tenkeyless mechanical keyboard with Outemu switches, durable build, and red LED backlight.",
    },
    {
      imageSource: RazerMouse,
      imageAlt: "Razer DeathAdder",
      title: "Razer DeathAdder Essential",
      price: "₱1,500",
      description: "Ergonomic wired gaming mouse with 6,400 DPI optical sensor and classic Razer durability.",
    },
    {
      imageSource: RoyalKludge,
      imageAlt: "RoyalKludge RK84",
      title: "Royal Kludge RK84",
      price: "₱2,700",
      description: "75 % wireless mechanical keyboard with tri-mode connection, hot-swappable switches, and customizable RGB.",
    }
  ]
  return (
    <div className='grid grid-cols-3 border gap-5 p-10'>
      {Product.map((item, index) => (
        <ProductCard key={index} product={item}/>
      ))}
    </div>
  )
}

export default Products
