import { calc } from '@jsonschema-tools/ast'
import React from 'react'

const App: React.FC = () => {
    return (
        <div className='App'>
            <h1>Hello world demo!</h1>
            <p>1+1 = {calc(1, 1)}</p>
        </div>
    )
}

export default App
