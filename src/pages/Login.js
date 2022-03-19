import React,{useState} from 'react';
import Header from '../components/Header';

export default function Login(){
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const login= async(evt)=>{
        evt.preventDefault();
        console.log(email,pass);
        await fetch(`http://localhost:8001/readUser?email=${email}&password=${pass}`).then(res=>res.json()).then(async(data)=>{
            console.log(data);
            if(data.success){
                console.log('loggin')
                setEmail("");
                setPass("");
            }else{
                console.log('login failed')
            }
        });
    }
    return <div>
        <Header/>
        <form style={{ textAlign: "center", paddingTop: 100 }} onSubmit={(evt)=>login(evt)}>
            <label>
                Username:<br />
                <input type="text" value={email} onChange={(text)=>setEmail(text.target.value)} />
                <br />
                Password:<br />
                <input type="password" value={pass} onChange={(text)=>setPass(text.target.value)} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}