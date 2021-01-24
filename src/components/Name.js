import React from 'react'

const Name = ({ name }) => {
  return(
    <tr key={name.name}>
      <td>{name.name}</td>
      <td>{name.amount}</td>
    </tr>
  )
}
export default Name