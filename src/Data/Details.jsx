import React, { useEffect, useState } from 'react'
import axios from "axios"
const initialData = {
    name: "",
    address: "",
    salary: "",
    image: ""
}
const Details = () => {
    const [pdata, setPdata] = useState([]);
    const [postData, setPostData] = useState(initialData);
    console.log(postData);

    useEffect(() => {
        axios.get("http://localhost:8080/data").then((res) => {
            setPdata(res.data)
        })
    }, [])
    const handleDelete = () => {
        axios.delete("http://localhost:8080/data")
    }


    const handleSubmit = () => {
        // event.preventDefault();
        console.log(postData);
        axios.post(`http://localhost:8080/data`, postData).then(res => {
            alert("Data posted")
            console.log("keya huwa");
            setPostData(initialData)
            setPdata([...pdata, res.data])
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setPostData({ ...postData, [name]: value })
    }
    return (
        <div style={{ marginTop: "110px" }}>
            <div>
                <label>Name:
                    <input name="name" value={postData.name} onChange={(e) => { handleChange(e) }} />
                </label>
                <label>Address:
                    <input name="address" value={postData.address} onChange={(e) => { handleChange(e) }} />
                </label>
                <label>Salary:
                    <input name="salary" value={postData.salary} onChange={(e) => { handleChange(e) }} />
                </label>
                <label>Image:
                    <input name="image" value={postData.image} onChange={(e) => { handleChange(e) }} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <p>details page</p>
            {
                pdata.map((elem) => (
                    <div key={elem.id} style={{ border: "1px solid gold", justifyContent: "space-between" }}>
                        <p>{elem.name}</p>
                        <p>{elem.address}</p>
                        <p>{elem.salary}</p>
                        <img style={{ width: "50px" }} src={elem.image}></img>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Details