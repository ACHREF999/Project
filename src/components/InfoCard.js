import React from 'react'

function InfoCard({title , img , description, star, location}) {
  return (
      <>
    <div>{title}</div>
    {/* <div>{img}</div> */}
    <div>{description}</div>
    {/* <div>{star}</div> */}
    <div>{location}</div>
    </>
  )
}

export default InfoCard