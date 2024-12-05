import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Gallerydetails.css"

const Gallerydetails = () => {
    const {id} = useParams()
    const [img,setimg] = useState({})


    async function details(){
        const response = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        setimg({
            id: response.photos.id,
            url: response.photos.url,
            description : response.photos.description
        })
    }

    useEffect(()=>{
        details()
    },[])

  return (
    <div className="card">
      <div className="card-image">
        <img src={img.img} alt="Card Image" />
      </div>
      <div className="card-info">
        <h3>ID: {img.id}</h3>
        <p>{img.description}</p>
      </div>
    </div>
  )




}

export default Gallerydetails
