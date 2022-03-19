import React from 'react';

export default function SignUp()
{
    return <div>
        <form style={{ textAlign: "center", padding: 100 }}>
            <label>
                Email:<br />
                <input type="email" name="email" />
                <br />
                Password:<br />
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}