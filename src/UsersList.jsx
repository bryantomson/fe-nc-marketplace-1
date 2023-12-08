import { useState, useEffect, useContext } from "react"
import { getUsers } from "./api";
import { patchUser } from "./api";
import { UserContext } from "./UserContext";
export default function UsersList(){
    const [users, setUsers] = useState([])
    const {user, setUser} = useContext(UserContext)
    useEffect(() => {
        getUsers().then((res) => {
            setUsers(res);
        });
    }, []);
    const handleLogin = (user) => {
        console.log(user);
        setUser(user.username)
    }
    const upVote = (username) => {
        patchUser(username).catch((err)=>{
            setUsers((currUsers) => {
                console.log(currUsers, '<---currusers');
                const updatedKudos = [...currUsers].map((user) => {
                    if (user.username === username) {
                        console.log(user, '<---user');
                        return { ...user, kudos: user.kudos - 1 }
                    }
                    return user
                })
                return updatedKudos
            })
        })
        console.log(username, '<----username');

    setUsers((currUsers) => {
        console.log(currUsers, '<---currusers');
        const updatedKudos = [...currUsers].map((user) => {
            if(user.username === username) {
                console.log(user, '<---user');
                return {...user, kudos : user.kudos + 1}
            }
            return user
        })
        return updatedKudos
    })

    }
    return (
        <>
        <h2>Here is list of users</h2>
        {users.map((user)=>{
            
            return (
                <>
            <p>Username: {user.username}</p>
            <img className='avatar-img' onClick={()=> {handleLogin(user)}}src={user.avatar_url}/>

            <button onClick={()=> upVote(user.username)}>+ Kudos: {user.kudos}</button>
            </>
            )
            
        })}
    </>
    )
    
}