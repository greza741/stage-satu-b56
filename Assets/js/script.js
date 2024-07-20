function getData() {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("inputEmail").value;
  let number = document.getElementById("inputNumber").value;
  let subject = document.getElementById("Subject").value;
  let massage = document.getElementById("Massage").value;
  
  if (name == "") {
    return alert("Tolong diisikan nama kamu");
  } if (email == "") {
    return alert("Tolong diisikan email kamu");
  } if (number == "") {
    return alert("Tolong diisikan nomor kamu");
  } if (subject == "") {
    return alert("Tolong diisikan kebutuhanmu kamu");
  } if (massage == "") {
    return alert("Tolong diisikan pesan kamu");
  } 
  
  console.log(name);
  console.log(email);
  console.log(number);
  console.log(subject);
  console.log(massage);

  document.getElementById("nameInput").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputNumber").value = "";
  document.getElementById("Subject").value = "Give me Reason";
  document.getElementById("Massage").value = "";

}
