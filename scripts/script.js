
// function resume(){
//     window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view",`_blank`)
//   }
// document.querySelector("#resume-button-1").addEventListener("click",()=>{
//     window.location.href="https://drive.google.com/uc?export=download&id=1aSlQv8e7n5QJFbPWbZdTum3oGNQZPmLP";
//     window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view","_blank") ;
//  })
//  // https://drive.google.com/drive/folders/1U-XyAI4s6kDasVSQlzrcVnFwuLU13gIG?usp=sharing
//  document.querySelector("#resume-button-2").addEventListener("click",()=>{
//     window.location.href="https://drive.google.com/uc?export=download&id=1aSlQv8e7n5QJFbPWbZdTum3oGNQZPmLP";
//    window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view","_blank") ;
//  })

 
let menu=document.getElementById("menu-icon");
let navbar=document.querySelector(".navbar");
let m=document.querySelector(".main-body")
let count=0;
menu.addEventListener('click',()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    
    // m.style.marginTop="200px";
    // count++;
    // if(count%2==0){
    //     m.style.marginTop="0px";

    // }

    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

// document.querySelector("#resume-link-2").addEventListener("click", () => {
//     window.open(
//       "https://drive.google.com/file/d/1KzA6rn_akPO2jed7QcsLBoIiddNrLU3b/view",
//       "_blank"
//     );
//   });

function resume(){
    window.open("https://drive.google.com/file/d/1KzA6rn_akPO2jed7QcsLBoIiddNrLU3b/view",`_blank`)
  }
  
// document.getElementById("resume-button-2").onclick = ()=>{
// window.open("https://drive.google.com/file/d/1KzA6rn_akPO2jed7QcsLBoIiddNrLU3b/view",`_blank`)
// }



document.querySelector(".home").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".about").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".skills").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".projects").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});

document.querySelector(".contact").addEventListener("click", ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    if(m.classList.contains("m-t")){
        m.classList.remove("m-t");
    }
    else{
        m.classList.add("m-t");
    }
});


// contact section 

function sendEmail(){
    const mess=
     `Name : ${document.getElementById("name").value}
     <br>
      Email: ${document.getElementById("email").value}
       <br>
      Subject: ${document.getElementById("subject").value}
      <br>
      Message: ${document.getElementById("content").value}
     
     `
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "rajmalpankaj@gmail.com",
      Password : "E83CB5277B62FA935A58C711D5986E68D78F",
      To : 'rajmalpankaj786@gmail.com',
      From : "rajmalpankaj@gmail.com",
      Subject : document.getElementById("subject").value,
      Body : mess
  }).then((message)=>{
    alert("Message sent successfully")
  });
  }

// function sendEmail(){
//     const mess=
//      `Name : ${document.getElementById("name").value}
//      <br>
//       Email: ${document.getElementById("email").value}
//        <br>
//       Subject: ${document.getElementById("subject").value}
//       <br>
//       Message: ${document.getElementById("content").value}
     
//      `
//     Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "chandansharma35781@gmail.com",
//       Password : "35C0B250A52456B4C03D05859A6261EDAFFF",
//       To : 'chandansharma65914@gmail.com',
//       From : "chandansharma35781@gmail.com",
//       Subject : document.getElementById("subject").value,
//       Body : mess
//   }).then((message)=>{
//     alert("Message sent successfully")
//   });
//   }