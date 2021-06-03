const globalPath =  './assets/images/gallery/';
let images = [
    'f_1.jpeg',
    'f_2.png',
    'f_3.jpeg',
    'f_4.jpeg',
    'f_5.jpeg',
    'f_6.jpeg',
    'g_1.jpeg',
    'g_2.jpeg',
    'g_3.png',
    'g_4.jpeg',
    'g_5.jpeg',
    'g_6.jpeg',
    'g_7.jpeg',
    'g_8.jpeg',
    'g_9.jpeg',
    'g_10.jpeg',
    'h_1.jpeg',
    'h_2.png',
    'h_3.jpeg',
    'h_4.png',
    'h_5.jpeg',
    'h_6.jpeg',
    'h_7.jpeg',
    'h_8.jpeg',
    'h_9.jpeg',

]

let append_images = () => {
    let container = document.getElementById("gallery__container");
images.forEach(img => {
    container.innerHTML += `
    <li>
              <img class="lozad" data-src="${globalPath}${img}" alt="Images ${img}">
          </li>
          `;
});
};

append_images();