
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
        inputContent,
        postAt: new Date(),
        updateAt: new Date(),
    };

    dataBlog.push(blog)

    console.log(dataBlog);
    renderBlog()
    
}

// menampilkan ke web (innerhtml)
function renderBlog() {
    document.getElementById("contents").innerHTML= "";

    for (let i = 0; i < dataBlog.length; i++) {
        document.getElementById("contents").innerHTML += `<div class="mainblog">
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
                <div style="text-align: right;">
                     ${getFullDate(dataBlog[i].postAt)}
                     <p>${getDistanceTime(dataBlog[i].postAt)}</p>
                </div>
                <div class="blog-button">
                    <button><a href="./Contohproject.html">Edit</a></button>
                    <button><a href="">Delete</a></button>
                </div>
            </div>
        </div> `
    }
}

// Mengambil waktu pembuatan dan memberi created at post

function getFullDate(time) {
    let nameOfMonth = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
  
    let date = time.getDate();
    let month = nameOfMonth[time.getMonth()];
    let year = time.getFullYear();
  
    let hour = time.getHours();
    let minute = time.getMinutes();
  
    return `${date} ${month} ${year} - ${hour}:${minute} WIB`;
  }
  
  function getDistanceTime(time) {
    let postTime = time;
    let currentTime = new Date();
  
    let distanceTime = currentTime - postTime; //4000
  
    let miliSecond = 1000;
    let secondInHour = 3600;
    let hourInDay = 24;
  
    let distanceTimeInSecond = Math.floor(distanceTime / miliSecond);
    let distanceTimeInMinute = Math.floor(distanceTime / (miliSecond * 60));
    let distanceTimeInHour = Math.floor(
      distanceTime / (miliSecond * secondInHour)
    );
    let distanceTimeInDay = Math.floor(
      distanceTime / (miliSecond * secondInHour * hourInDay)
    );
  
    if (distanceTimeInDay > 0) {
      return `${distanceTimeInDay} days ago`;
    } else if (distanceTimeInHour > 0) {
      return `${distanceTimeInHour} hours ago`;
    } else if (distanceTimeInMinute > 0) {
      return `${distanceTimeInMinute} minutes ago`;
    } else {
      return `${distanceTimeInSecond} seconds ago`;
    }
  }

  // menu bar
  function menuBar() {
    let element = document.getElementById("bars-menu");
    element.classList.toggle("bars-menu");
}