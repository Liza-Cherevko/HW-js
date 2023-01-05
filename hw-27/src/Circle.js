import React from "react"

export default function Circle({x,y}) { 

    return <div style={{
    
        width: '100px',
        height: '100px',
        borderRadius: '50%', 
        backgroundColor: 'red',
        position: 'absolute', 
        top: y,
        left: x
    }}></div>
}