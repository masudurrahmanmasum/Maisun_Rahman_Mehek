setTimeout(() =>{
    document.querySelector(".text_video").style.display="none"; 
    document.querySelector(".heart").style.display="block";
}, 7000)

const to_left = document.querySelector(".to-back");
to_left.addEventListener("click", ()=>{
window.location="cover.html";
})
