import { useRef } from "react"
import './post.css'

export default function Post({ user }) {

    const postInputRef = useRef(null)

    async function sendPost(postData){
        const res = await fetch('https://weekend-portal.onrender.com/anime/',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${user.token}`
            },
            body: JSON.stringify({body: postData})
        })
        if (res.ok){
            const data = await res.json()
            console.log(data);
            return
        }
        console.error('Post failed')
    }

    function handleSubmit(e){
        e.preventDefault()
        const postData = postInputRef.current.value
        sendPost(postData)
    }

    return (
        <div className="post-container">
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="post">Post</label>
            <input type="text" name='post' ref={postInputRef} />
            <input type="submit" value='post' className="post-button"/>
        </form>
        </div>
    )
}
