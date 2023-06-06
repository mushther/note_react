import React, { useEffect, useState } from 'react'

const UseEffectHooks = () => {

    const initialState = {
        firstName: "Joe",
        lastName: "Smith",
        address: {
            home: "123 street"
        }
    };
    const [user, setUser] = useState(initialState);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("triggered");
    }, [user]);

    return (
        <div style={{ marginTop: "100px" }}>
            <p>useEffect - Practice with different deps</p>
            {JSON.stringify(user)}
            <label>Firstname:</label>

            <input
                type="text"
                onChange={e => setUser({ ...user, firstName: e.target.value })}
            />
            <br />
            <label>Lastname:</label>
            <input
                type="text"
                onChange={e => setUser({ ...user, lastName: e.target.value })}
            />
            <button onClick={() => setCount(count + 1)}>Button</button>
        </div>
    );
}

export default UseEffectHooks
