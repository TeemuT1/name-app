import React from 'react'

const Name = (props) => {
  const { name } = props

  return(
    <tr key={name.name}>
      <td>{name.name}</td>
      <td>{name.amount}</td>
    </tr>
  )
}
export default Name