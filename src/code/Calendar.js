import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import MyCalendar from './MyCalendar';


export default function Calendar(additionalItems) {
  const [isOpen, setIsOpen] = useState(false)
      console.log(additionalItems,'VKUFUYFYUFV')

  const templateParams = {
    name: additionalItems.name,
    phoneNumber: additionalItems.phoneNumber,
    stylist: additionalItems.items.stylist,
    title: additionalItems.items.title,
    total: additionalItems.items.total,
    additionalStyling: additionalItems.items.additionalStyling.map(item =>{return item}),
    additionalDetails: additionalItems.items.additionalDetails
  }
  const runBothFunctions = () => {
    setIsOpen(true) 
    window.alert('Booking successful!');
    
  }

    return (
      <div className='bg-gray-500 w-fit'>
        <Button
          onClick={() => runBothFunctions()}>
          Book
        </Button>
        <MyCalendar
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById("root")}
        />
    </div>   
  )
}
