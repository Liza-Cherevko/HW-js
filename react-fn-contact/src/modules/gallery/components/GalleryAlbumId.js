import React from 'react'
import { useParams } from 'react-router-dom'
import usePhotos from '../hooks/usePhotos'
import PhotosList from './PhotosList'

function GalleryAlbumId() {
    const { albumId} = useParams()

const photos = usePhotos(albumId)
     
    return (<PhotosList list={ photos} />)
}

export default GalleryAlbumId