import React, { useEffect, useState } from 'react'

const url = 'https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1'



const ScrollComp = () => {
    
    const [Textdata , setdata] = useState([])

    async function fetchApi(){
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        setdata(data.texts)
    }

    useEffect(()=>{
      fetchApi()
    },[])
   

  return (
    <div className='ScrollComponent'>

      {
        Textdata.map((Text,index) =>{
          const {heading , description , subHeading} = Text
          return (
            <div className='Box' id={index}>
            <h4>{heading}</h4>
            <h2>{subHeading}</h2>
            <p>{description}</p>
            
        </div>
          )
        })
      }
        
    </div>
  )
}

export default ScrollComp
