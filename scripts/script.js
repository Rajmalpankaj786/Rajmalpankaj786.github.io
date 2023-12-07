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

function resume(){
    window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view",`_blank`)
  }
document.querySelector("#resume-button-1").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/uc?export=download&id=1aSlQv8e7n5QJFbPWbZdTum3oGNQZPmLP";
    window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view","_blank") ;
 })
 // https://drive.google.com/drive/folders/1U-XyAI4s6kDasVSQlzrcVnFwuLU13gIG?usp=sharing
 document.querySelector("#resume-button-2").addEventListener("click",()=>{
    window.location.href="https://drive.google.com/uc?export=download&id=1aSlQv8e7n5QJFbPWbZdTum3oGNQZPmLP";
   window.open("https://drive.google.com/file/d/1-jii6oNpfVp_Ssqd_N5FNt5GmZvHDsKE/view","_blank") ;
 })

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