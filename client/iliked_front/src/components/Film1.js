import React from 'react'
import Film from './Film'

import {useParams} from 'react-router-dom'

const Film1 = () => {

    let { title } = useParams()
    
    return (
        <>
            <Film path = ":title" />
        </>
    )

}
export default Film1