import React, { createContext, useState } from 'react'

export const AuthContextProvider = createContext();

const ContextApi = ({ children }) => {
    const [color1, setColor1] = useState('aqua')
    const [addNoteColor, setAddNoteColor] = useState('teal')

    const handleThemeChange = (color) => {
        setColor1(color)
    }
    const handleAddNoteColor = (color) => {
        setAddNoteColor(color)
    }
    return (
        <AuthContextProvider.Provider value={{ handleAddNoteColor, addNoteColor, handleThemeChange, color1 }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default ContextApi