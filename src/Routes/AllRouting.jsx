import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNotes from '../pages/AddNotes'
import Dashboard from '../pages/Dashboard'
import NoteDetails from '../pages/NoteDetails'
import UpdateNote from '../pages/UpdateNote'
import LikeImage from '../Data/LikeImage'

const AllRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/addnote' element={<AddNotes />} />
            <Route path='/notedetails' element={<NoteDetails />} />
            <Route path='/updateNote' element={<UpdateNote />} />
            <Route path='/likeimage' element={<LikeImage />} />
        </Routes>
    )
}

export default AllRouting