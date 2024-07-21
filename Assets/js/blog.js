let dataBlog = [];

function addBlog(event) {
    event.preventDefault();

    let projectName = document.getElementById("projectInput").value;
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let inputContent = document.getElementById("inputContent").value;
    
    if (projectName == "") {
        return alert("Tolong diisikan nama project kamu");
    }
    if (startDate == "") {
        return alert("Tolong diisikan start date");
    }
    if (endDate == "") {
        return alert("Tolong diisikan end date");
    }
    if (inputContent == "") {
        return alert("Tolong diisikan content kamu");
    }

    let blog = {
        projectName,
        startDate,
        endDate,
        inputContent
    };

    dataBlog.push(blog)

    console.log(dataBlog);
    renderBlog()
    
}

function renderBlog() {
    document.getElementById("contents").innerHTML= "";

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById("contents").innerHTML += ` <div class="mainblog">
            <div class="inputblog">
                <div style="margin: 5px 5px;">
                    <img style="border-radius: 10px;" src="./Assets/blogsample.jpeg">
                </div>
                <div style="margin: 5px;">
                    <h1>${dataBlog[i].projectName}</h1>
                    <h5>${dataBlog[i].startDate} - ${dataBlog[i].endDate}</h5> <br>
                    <p>${dataBlog[i].inputContent}</p>
                </div>
                <div class="icon-blog">
                    <a href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google-play fa-lg"></i></a>
                    <a href="https://www.google.com/" target="_blank"><i class="fa-brands fa-android fa-lg"></i></a>
                    <a href="https://www.google.com/" target="_blank"><i class="fa-brands fa-java fa-lg"></i></a>
                </div>
                <div class="blog-button">
                    <button><a href="./Contohproject.html">Edit</a></button>
                    <button><a href="">Delete</a></button>
                </div>
            </div>
        </div>`
    }
}