import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContextProvider = createContext();

const ContextApi = ({ children }) => {
    const [color1, setColor1] = useState("")
    const [data, setData] = useState([])
    const [addNoteColor, setAddNoteColor] = useState('teal')
    const getData = () => {
        axios.get('http://localhost:8080/themeColor').then((res) => {
            // setData(res.data);
            // console.log(res.data[0].bgThemeColor);
            setColor1(res.data[0].bgThemeColor);
        })
    }

    useEffect(() => {
        getData()
    }, []);


    const handleThemeChange = (color, id) => {
        axios.put(`http://localhost:8080/themeColor/${id}`, { bgThemeColor: color }).then((res) => {
            setColor1(res.data.bgThemeColor);
            //console.log(res.data.bgThemeColor);
        })
    }
    const handleAddNoteColor = (color) => {
        setAddNoteColor(color)
    }
    const handleGetData = (data1) => {
        setData(data1)
    }
    return (
        <AuthContextProvider.Provider value={{ handleAddNoteColor, addNoteColor, handleThemeChange, color1, handleGetData, data }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default ContextApi