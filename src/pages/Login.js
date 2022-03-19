import React,{useState} from 'react';

export default function Login(){
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const login=(evt)=>{
        evt.preventDefault();
        console.log(email,pass);
    }
    return <div>
        <form style={{ textAlign: "center", padding: 100 }} method="GET" onSubmit={(evt)=>login(evt)}>
            <label>
                Username:<br />
                <input type="text" value={email} onChange={(text)=>setEmail(text)} />
                <br />
                Password:<br />
                <input type="password" value={pass} onChange={(text)=>setPass(text)} />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}