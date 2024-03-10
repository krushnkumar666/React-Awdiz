import React from 'react'
import Children from './children'

const PropsDrilling = ({ students, counter }) => {
    return (
        <div>
            <Children students={students} counter={counter} />
        </div>
    )
}

export default PropsDrilling