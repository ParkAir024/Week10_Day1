import { useState, useEffect } from "react"
import './login.css'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Login({ updateUser }) {
    
    const [ isLogging, setIsLogging ] = useState(false)
    const [ user, setUser ] = useState({username:'',password:'',token:''})
    const navigate = useNavigate()

    if( isLogging ){
        loginUser()
    }

    // useEffect(()=>{
    //     if(user.id){
    //         navigate('/')
    //     }
    // },[])

    async function loginUser(){
        const res = await fetch('https://weekend-portal.onrender.com/login',{
            method : "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if (res.ok){
            const data = await res.json()
            console.log(data)
            if(data.token){
                localStorage.setItem('token', data.token);
                updateUser({ token: data.token, username: user.username })
                toast.success(user.username.concat(' logged in!'))
                navigate('/')
                return
            }
        }
        toast.error('Invalid User Info/ Try Again')
        console.error("Login failed")
        setIsLogging(false)
    }

    function handleSubmit(e){
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <div className="login-container">
            <h3>Login</h3>
            <form action="" id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name='username' /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name={'password'} /><br />
                <input type="submit" value={'Login'} className="Button" />
            </form>
        </div>
    )
}