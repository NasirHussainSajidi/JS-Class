
function get_random_image(){
    // const image = document.getElementById("image_shower")
    const image_array = [     
        'car1.webp',
        'car2.png',
        'car3.png',
        'car4.avif',
        'car5.avif',
        'bmw1.jpg',
        'bmw2.webp',
        'bmw3.jpg',
        'ferrari1.avif',
        'ferrari2.jpg',
        'img6.jpg'
        

    ]
    const array_index = Math.floor(Math.random() * image_array.length)
    const arrayIndex = array_index * Math.floor(Math.random() * image_array.length)
    const random_index = image_array[arrayIndex];
    var indexItem = array_index
    if(array_index == indexItem){
        // array_index++

        const array_index = Math.floor(Math.random() * image_array.length)
        const random_index = image_array[array_index];
        var indexItem = array_index

        document.getElementById('image_shower').src =` ${random_index}`
    }else{
        document.getElementById('image_shower').src =` ${random_index}`
    }

    // const selected_image = image_array[random_index]


    
}