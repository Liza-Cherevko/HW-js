import { useEffect, useState } from "react";
import api from "../../../../api";

export default function usePhotos(albumId) { 
    const [photos, setPhotos] = useState([])

    useEffect(() => { 
        api.get('photos?albumId=' + albumId).then(({data})=>setPhotos(data))
    }, [albumId])
 
    return photos;
}