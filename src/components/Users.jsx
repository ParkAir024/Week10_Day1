import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import './users.css';

export default function Users({ user: loggedUser }) {
    console.log(loggedUser, 'from users page')
    const [users, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://weekend-portal.onrender.com/user')
            if (res.ok) {
                const data = await res.json()

                setUser(data)
            } else console.log('error');
        })()
    }, [])

    if (users.length === 0) {
        return <Spinner />
    }

    async function followUser(followerId) {
        const res = await fetch(`https://weekend-portal.onrender.com/user/follow/${followerId}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer '.concat(loggedUser.token)
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
    }

    async function unfollowUser(followerId) {
        const res = await fetch(`https://weekend-portal.onrender.com/user/follow/${followerId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer '.concat(loggedUser.token)
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
    }


return (
    <div className="users-container">
        {users.map(user => {
            if (user.username !== loggedUser.username) {
                return <div key={user.id}>
                    <p>{user.username}</p>
                    <button onClick={() => { followUser(user.id) }}>Follow</button>
                    <button onClick={() => { unfollowUser(user.id) }}>Unfollow</button>
                </div>
            }
        })}
    </div>
)
}

