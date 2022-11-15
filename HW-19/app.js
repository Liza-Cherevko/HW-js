


const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';



function preparedData() {
    fetch(API_URL)
        .then(response => response.json())
        .then(photos => {
            $('.fotorama').fotorama({
                data: photos.map(photo => ({ img: photo.url, thumb: photo.thumbnailUrl }))
            })
        })
}
preparedData()





