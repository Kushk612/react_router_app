import React, { useEffect } from 'react'

function Item() {

const [data, setData] = React.useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then( (response) => response.json())
    .then(data =>{
        setData(data);
    })

  }, [])

  return (
    <div>
      {data.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
        <h2>{product.title}</h2>
        <img src={product.image} width={150} alt={product.title} className="border-2 border-gray-300 rounded-md p-1" />
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
      </div>
      ))}
    </div>
  )
}

export default Item
