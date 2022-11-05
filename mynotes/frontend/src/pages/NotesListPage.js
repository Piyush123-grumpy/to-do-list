import React, { useState, useEffect } from 'react'
import ListItem from '../component/ListItem'
import Add from '../component/Add'

const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
        console.log("make me happy");
    }, [])

    let getNotes = async () => {
        fetch("/api/notes/").then(res => {
            return res.json()

        }).then((data) => {
            console.log(data)
            setNotes(data)
        }

        )

    }
    return (
        <div className='notes'>
            <div className="notes-header">
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>

            </div>
            <div className="notes-list">
                {notes.map((note, index) => {
                    return (
                        <ListItem key={index} note={note}></ListItem>
                    )
                })}

            </div>
            <Add></Add>
        </div>
    )
}

export default NotesListPage