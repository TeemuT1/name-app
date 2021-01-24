import React from 'react'

const TotalNames = ({ totalNames }) => {

  const totalNamesStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 3,
    marginBottom: 5,
    borderColor: '#00C0FF',
    textAlign: 'center'
  }

  return (
    <div style={totalNamesStyle}>
      <h3>Total amount of all names: {totalNames.toString()}</h3>
    </div>
  )
}
export default TotalNames