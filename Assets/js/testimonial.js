function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.open("GET", url, true);
        xhr.onerror = () => {
            reject("Network Error !");
        };
        xhr.onload = () => {
            resolve(JSON.parse(xhr.responseText));
        };
        xhr.send();

    });
}

async function allTestimonial() {

    const testimonials = await fetchUrl(
        "https://api.npoint.io/279903f4730b08b28a87"
    );

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

async function filterTestimonial(rating) {
    const testimonials = await fetchUrl(
        "https://api.npoint.io/279903f4730b08b28a87"
    );

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
