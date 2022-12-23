import { useEffect, useState } from "react";
import api from "../../../api";
import logger from "../../common/utils/logger";

export default function usePhotos(albumId) { 
    const [photos, setPhotos] = useState([])

    useEffect(() => { 
        logger(albumId)
        api.get('photos?albumId=' + albumId).then(({data})=>setPhotos(data))
    }, [albumId])
 
    return photos;
}