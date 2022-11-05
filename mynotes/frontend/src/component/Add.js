import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as AddIcon } from '../assets/add.svg'
const Add = () => {
  return (
    <div>
        <Link to="note/new" className='floating-button'>
            <AddIcon></AddIcon>
        </Link>
    </div>
  )
}

export default Add