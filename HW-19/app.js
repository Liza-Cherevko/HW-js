// const controller = new GalleryController($('.fotorama'));



const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
init();
function init() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                $('.fotorama').append(
                    ` <div class = "fotorama-item" data-src="${photo.url}" data-caption="${photo.title}">
                    <img src="${photo.thumbnailUrl}"/> </div>`
                );
            });
        });
};
