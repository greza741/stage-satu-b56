const testimonials = [
    {
        image : "./Assets/man1.jpeg",
        content : "Mantabb bang !",
        author : "Yadi Kurnia",
        rating : 5

    },
    {
        image : "./Assets/man2.jpeg",
        content : "Boljug bangg !",
        author : "Bewok Master",
        rating : 3
        
    },
    {
        image : "./Assets/man3.jpeg",
        content : "Ashhhhhhh",
        author : "Sleve Champion",
        rating : 1
        
    }
];

function allTestimonial() {
    const testimonialHTML = testimonials.map(testimonial => {
        return `<div class="divtesti">
            <div class="boxtesti">
                <div>
                    <img src="${testimonial.image}" alt="">
                    <p>${testimonial.content}</p>
                    <h3>- ${testimonial.author}</h3>
                    <h4>${testimonial.rating}<i class="fa-solid fa-star"></i></h4>
                </div>
            </div>
        </div>`
    })
     document.getElementById("testimonials").innerHTML = testimonialHTML
}

function filterTestimonial(rating) {
    const filteredTestimonialByRating = testimonials.filter(testimonial => {
        return testimonial.rating == rating
    })

    const testimonialHTML = filteredTestimonialByRating.map(testimonial => {
        return `<div class="divtesti">
            <div class="boxtesti">
                <div>
                    <img src="${testimonial.image}" alt="">
                    <p>${testimonial.content}</p>
                    <h3>- ${testimonial.author}</h3>
                    <h4>${testimonial.rating}<i class="fa-solid fa-star"></i></h4>
                </div>
            </div>
        </div>`
    });
    document.getElementById("testimonials").innerHTML = testimonialHTML
}
