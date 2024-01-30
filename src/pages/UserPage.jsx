import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import  Spinner  from "react-bootstrap/Spinner";


export default function UserPage() {

    const [ user, setUser ] = useState([])

    const { username } = useParams()
    console.log(username, 'params');

    useEffect(() => {
        (async () => {
            const res = await fetch('http://127.0.0.1:5000/user/'.concat(username), {})
            if (res.ok){
                const data = await res.json()
                console.log(data);
                const { username,posts} = data
                setUser({username, posts})
                }
        })()
    }, [])

    if (!user) return <Spinner />

    return (
        <h2>{user.username}</h2>

    )
}
