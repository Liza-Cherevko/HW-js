// const controller = new GalleryController($('.fotorama'));


const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
// let $fotoramaDiv = $('#fotorama').fotorama({
//     data: preparedData
// });
// let fotorama = $fotoramaDiv.data('fotorama');
// console.log(fotorama);

// function preparedData(){
//     fetch(API_URL).then(response => response.json())
//         .then(data => {
//             data.map(photo => img= photo.url, thumb= photo.thumbnailUrl );
//         });
// }

function init() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                $('.fotorama').append(
                    ` <a data-src="${photo.url}" data-caption="${photo.title}" rel="gallery-1"  class="swipebox">
                    <img src="${photo.thumbnailUrl}" alt="image"/> 
                    </a>`
                );
            });
        });
};



init()
// function init() {
//     fetch(API_URL).then(response => response.json())
//         .then(data => {
//             data.forEach(photo => {
//                 $('.swipebox').append(
//                     ` <a data-src="${photo.url}" data-caption="${photo.title}" rel="gallery-1"  class="swipebox">
//                     <img src="${photo.thumbnailUrl}" alt="image"/> 
//                     </a>`
//                 ).swipebox();
//             });
//         });
// };

