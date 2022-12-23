import React, { useState, useEffect} from 'react'
import api from '../../../api'

export function useAlbums() { 
    const [albums, setAlbums] = useState([])


useEffect(() => {
    api.get('albums')
       .then(({ data})=>setAlbums(data))
}, [])

    return albums
}