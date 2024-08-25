import React from 'react'
import { useParams } from 'react-router-dom'

function User(props) {
    const {userid} = useParams()
  return (
    <>
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>User: {userid}</div>
    <h1>{props.rock}</h1>
    </>
  )
}

export default User


