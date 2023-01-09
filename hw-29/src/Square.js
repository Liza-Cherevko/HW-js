import React from "react"
export default function Square({ x,y}) { 
    
    return <div style={{
        width: '100px',
        height: '100px', 
        backgroundColor: 'blue',
        position: 'absolute',
        top: y ,
        left: x  

    }}></div>
}

// const [position, setPosition]= useState({
//     x: 50,
//     y: 50
// })
// useEffect(() => { 
//     const listener = ({ x,y}) => { 
//         setPosition({x, y})
//     }
//     document.addEventListener( 'mousemove', listener)
//     return () => {document.removeEventListener('mousemove', listener)}
// }, [])
