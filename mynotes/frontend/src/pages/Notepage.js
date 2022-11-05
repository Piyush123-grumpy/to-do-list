import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const Notepage = () => {
    let { id } = useParams()
    const navigate = useNavigate()
    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [id])

    async function getNote() {
        if (id!=="new"){
            let response = await fetch(`/api/notes/${id}`)
            const data = await response.json()
            setNote(data)
            
        }
        
    }

    async function updateNote() {
        fetch(`/api/notes/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(()=>{
            navigate('/')
        })
        
    }


    async function createNote() {
        fetch(`/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(()=>{
            navigate('/')
        })
    }

    const HandleSubmit = () => {
        if (id!=="new" && note.body===""){
            deleteNote()
        }else if(id!=="new"){
            updateNote()
        }
        else if(id==="new" && note===null){
            navigate('/')
            return
        }
        else if(id==="new" && note.body!==""){
            createNote()
        }
        

    }

    async function deleteNote() {
        fetch(`/api/notes/${id}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(()=>{
            navigate('/')
        })
        
    }
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={HandleSubmit}></ArrowLeft>
                    
                </h3>
                {id!=="new"?<button onClick={deleteNote}>Delete</button>:<button onClick={HandleSubmit}>Add</button>}
                
            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} value={note?note.body:""}></textarea>
        </div>
    )
}

export default Notepage