import React from 'react';

export default function Login()
{
    return <div>
        <form style={{ textAlign: "center", padding: 100 }}>
            <label>
                Username:<br />
                <input type="text" name="name" />
                <br />
                Password:<br />
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}