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
  const [filterExact, setFilterExact] = useState(false)

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
        console.log('totalnames', receivedTotalNames)
        console.log('totalNames', totalNames)
      })
  }, [])

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const toggleFilterExact = (event) => {
    setFilterExact(!filterExact)
  }



  if (names.length === 0) {
    return <div className='container'>no names</div>
  }

  return (
    <div className='container'>
      <Header/>
      <TotalNames totalNames={totalNames}/>
      <Filter nameFilter={nameFilter}
        handleNameFilterChange={handleNameFilterChange}
        toggleFilterExact={toggleFilterExact}/>
      <NameTable names={names} nameFilter={nameFilter} filterExact={filterExact}/>
    </div>

  )
}

export default App