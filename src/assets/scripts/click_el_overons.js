

let addListeners = () => {
    let images = document.querySelectorAll("#over_ons .h__r");
    images.forEach(img => {
        img.addEventListener("click",() =>{
            let tl = new gsap.timeline();
            tl.to(window, {
                duration: .5,
                scrollTo: {
                    y: document.querySelector("section#gallery"),
                    offsetY: 70
                }
               
            });
            tl.add(() =>{
                document.querySelector("section#gallery").classList.add("active");
            });
        });
    });
};
addListeners();