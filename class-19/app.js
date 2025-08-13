function onSwapPic(){
    const image = document.getElementById("img-swp");
    image.className = "image";


    const randomCars = [
        "bmw1.jpg",
        "bmw2.webp",
        "bmw3.jpg",
        "car1.webp",
        "car2.png",
        "car3.png",
        "car4.avif",
        "car5.vaig",
        "f1.png",
        "f2.jpg",
        "f3.jpg",
        "ferrari1.avif",
        "ferrari2.jpg"
    ]

    const car = randomCars[Math.floor(Math.random() * randomCars.length)];
    // image.src = car;
    // const carName = randomCars(Math.floor(Math.random() * randomCars.length))
    image.src = car;
    if(image.src === car){
        onSwapPic()
    }

    image.className += "big"
    
   
}

