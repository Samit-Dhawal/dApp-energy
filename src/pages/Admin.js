import React, { useState, useEffect } from 'react';
import Header from '../components/Header';


export default function Admin()
{

    return <div>
        <Header />
        <div style={styles.alertTran}>
            <div style={styles.pendApp}>Pending</div>
            <div>Approved</div>

        </div>
    </div>
}


const styles = {
    alertTran: {
        display: "flex"
    },
}