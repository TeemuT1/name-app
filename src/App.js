import React from 'react'
import nameService from './services/names'

const App = () => {
    console.log('hello from react')

    const getAllNames = async () => {
        const allNames = await nameService.getAll()
        return allNames
    }
    const allNames = await getAllNames().then((response) => {
        console.log('all names', response.data)
    })
    console.log('came?', allNames)
   
    return (
        <>
            <div>hello from react</div>
        </>
    )
}

export default App