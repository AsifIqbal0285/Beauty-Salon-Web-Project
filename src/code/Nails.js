import React from 'react'
import pinkBg from '../images/background/pinkBgPhoto.jpeg'
import ProductCard from './ProductCard'
import almondNails from '../images/nails/almondnails.jpeg'
import roundNails from '../images/nails/roundNails.jpeg'
import stilettoNails from '../images/nails/stilettoNails.jpeg'
import squareNails from '../images/nails/squareNails.jpeg'
import squovalNails from '../images/nails/squovalNails.jpeg'
import coffinNails from '../images/nails/coffinNails.jpeg'
import ovalNails from '../images/nails/ovalNails.jpeg'


    const cardInfoNails = [
    {
        id: '1',
        photo: roundNails,
        title: 'Round Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '2',
        photo: stilettoNails,
        title: 'Stiletto Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '3',
        photo: squareNails,
        title: 'Square Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '4',
        photo: almondNails,
        title: 'Almond Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '5',
        photo: squovalNails,
        title: 'Squoval Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '6',
        photo: coffinNails,
        title: 'Coffin Nails' ,
        description: null,
        price: '40'
    },
    {
        id: '7',
        photo: ovalNails,
        title: 'Oval Nails' ,
        description: null,
        price: '40'
    },
]


function nails() {
    
  return (
    <div className='grid place-items-center sm:p-10' style={{
        backgroundImage: `url(${pinkBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
          <div>
              <ProductCard cardData={cardInfoNails} />
          </div>
          
        
          
    </div>
    
  )
}

export default nails