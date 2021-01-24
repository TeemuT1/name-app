import React from 'react'
import { useSortableData } from '../hooks'
import Name from './Name'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const NameTable = ({ names, nameFilter, filterExact }) => {

  if (names.length === 0) {
    return null
  }

  let filteredNames

  if (filterExact && nameFilter !== '') {
    filteredNames = names.filter(name => name.name.toLowerCase() === nameFilter.toLowerCase())
  }
  else {
    filteredNames = names.filter(name => name.name.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1 )
  }

  const { items: sortedNames, requestSortBy } = useSortableData(
    filteredNames, { key:'amount', order:'descending' }
  )

  const countTotalNames = () => {
    return filteredNames.reduce((sum, name) => { return (sum + name.amount) }, 0)
  }

  return (
    <Table bordered hover striped size='sm' id='name-table'>
      <thead>
        <tr>
          <th>
            <Button id='name-header-button' onClick={ () => requestSortBy('name') }>
            Name
            </Button>
          </th>
          <th>
            <Button id='amount-header-button' onClick={ () => requestSortBy('amount') }>
            Amount
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedNames.map(name =>
          <Name key={ name.name } name={ name } nameFilter={ nameFilter }/>) }
      </tbody>
      <tfoot>
        <tr>
          <td><strong>Total</strong></td><td><strong>{ countTotalNames() }</strong></td>
        </tr>
      </tfoot>
    </Table>
  )

}
export default NameTable