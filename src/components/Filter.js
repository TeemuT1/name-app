import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Filter = ({ nameFilter, handleNameFilterChange, toggleExactFilter }) => {

  const searchStyle = {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    border: 'solid',
    borderWidth: 3,
    marginBottom: 5,
    borderColor: '#00C0FF',
    textAlign: 'center',
  }

  return(
    <div style={searchStyle}>
      <label>Name search</label>
      <InputGroup className="mb-3">

        <FormControl id='filter-input-field'
          placeholder="Search for a name"
          aria-label="Text input field for searching names"
          value = { nameFilter }
          onChange = { handleNameFilterChange }
        />

        <InputGroup.Append>
          <InputGroup.Text>Exact match</InputGroup.Text>
        </InputGroup.Append>

        <InputGroup.Append>
          <InputGroup.Checkbox id='filter-exact-match-checkbox'
            aria-label="Checkbox for toggling exact match for name search"
            onChange = { toggleExactFilter }
          />
        </InputGroup.Append>

      </InputGroup>
    </div>
  )
}
export default Filter