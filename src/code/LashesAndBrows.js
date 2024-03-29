import React from 'react'
import ProductCard from './ProductCard'
import pinkBg from '../images/background/pinkBgPhoto.jpeg'
import eyeBrowMicroBlading from '../images/lashesAndBrows/eyeBrowMicroBlading.jpeg'
import eyeBrowThreadingPhoto from '../images/lashesAndBrows/eyeBrowThreadingPhoto.jpeg'
import eyebrowWax from '../images/lashesAndBrows/eyebrowWax.jpeg'
import eyeLashInstallPhoto from '../images/lashesAndBrows/eyeLashInstallPhoto.jpeg'

     const cardInfoLashesAndBrows = [
    {
        id: '1',
        photo: eyeLashInstallPhoto,
        title: 'Eye Lash Install' ,
        description: null,
        price: '40'
    },
    {
        id: '2',
        photo: eyeBrowMicroBlading,
        title: 'Eye Brow Micro Blading' ,
        description: null,
        price: '40'
    },
    {
        id: '3',
        photo: eyeBrowThreadingPhoto,
        title: 'Eye Brow Threading' ,
        description: null,
        price: '40'
    },
    {
        id: '4',
        photo: eyebrowWax,
        title: 'Eye Brow Wax' ,
        description: null,
        price: '40'
    },
    
]


function lashesAndBrows() {

    return (
        <div className='grid place-items-center sm:p-10' style={{
            backgroundImage: `url(${pinkBg})`,
            width: '100%',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>
            <div>
                <ProductCard cardData={cardInfoLashesAndBrows}/>
            </div>
            
        </div>
    )
}
export default lashesAndBrows