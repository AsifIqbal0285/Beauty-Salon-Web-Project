import React from 'react'
import ProductCard from '../code/ProductCard'

import pinkBg from '../images/background/pinkBgPhoto.jpeg'
import LongHairStyle from '../images/hair/longHairStyle.jpeg'
import ShortHairStyle from '../images/hair/shortHairStyle.jpeg'
import CasualHairStyle from '../images/hair/casualHairStyle.jpeg'
import BraidHairStyle from '../images/hair/braidHairStyle.jpeg'
import PartyHairStyle from '../images/hair/partyHairStyle.jpeg'
import BridalHairStyle from '../images/hair/bridalHairStyle.jpeg'

const cardInfoHair = [
    {
        id: '1',
        photo: LongHairStyle,
        title: 'Long Hairstyle' ,
        description: null,
        price: '40'
    },
    {
        id: '2',
        photo: ShortHairStyle,
        title: 'Short HairStyle' ,
        description: null,
        price: '80'
    },
    {
        id: '3',
        photo: PartyHairStyle,
        title: 'Party Hairstyle' ,
        description: null,
        price: '40'
    },
    {
        id: '4',
        photo: BridalHairStyle,
        title: 'Bridal Hairstyle' ,
        description: null,
        price: '80'
    },
    {
        id: '5',
        photo: CasualHairStyle,
        title: 'casual Hairstyle' ,
        description: null,
        price: '40'
    },
    {
        id: '6',
        photo: BraidHairStyle,
        title: 'Braid Hairstyle' ,
        description: null,
        price: '40'
    }
]



export default function Hair() {
  return (
    <div className='grid place-items-center sm:p-10' style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
          <div className=''>
               <ProductCard cardData = {cardInfoHair} />
          </div>
       
    </div>
  )
}
