const animateAll = () => {
    let subsection = document.querySelectorAll("#over_ons > .subsection img");

            let images = document.querySelector("#over_ons > .subsection").querySelectorAll("img");
            images.forEach(img => {
                img.style.opacity = 0;
            });
        let sectionsObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let tl = gsap.timeline()
                        .add(() => {
                                    tl.to(entry.target, .8, {
                                        opacity: 1,
                                    })
                           
                          
                            
                        })
                    
                }
            });
        }, {
            rootMargin: "-10% 0% -10% 0%"
        });
      
        subsection.forEach(sec => {
            sectionsObserver.observe(sec)
        });
    
}
animateAll();