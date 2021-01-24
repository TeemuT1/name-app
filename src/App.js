import React, { useState, useEffect } from 'react'
import nameService from './services/names'
import NameTable from './components/NameTable'
import Filter from './components/Filter'
import Header from './components/Header'
import TotalNames from './components/TotalNames'

const App = () => {

  const [names, setNames] = useState([])
  const [totalNames, setTotalNames] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [exactFilter, setExactFilter] = useState(false)

  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => {
        setNames(initialNames)
      })
  }, [])

  useEffect(() => {
    nameService
      .getTotal()
      .then(receivedTotalNames => {
        setTotalNames(receivedTotalNames)
      })
  }, [])

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const toggleExactFilter = (event) => {
    setExactFilter(!exactFilter)
  }

  if (names.length === 0) {
    return <div className='container'>no names found</div>
  }

  return (
    <div className='container'>
      <Header/>
      <TotalNames totalNames={totalNames}/>
      <Filter nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
        toggleExactFilter={toggleExactFilter}/>
      <NameTable names={names} nameFilter={nameFilter} exactFilter={exactFilter}/>
    </div>

  )
}

export default App