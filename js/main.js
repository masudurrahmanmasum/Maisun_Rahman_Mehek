// loader section function
const loader = document.querySelector(".preeloader");
const bdy = document.querySelector(".page_body");
window.addEventListener("load", function(){
    loader.style.display = "none";
    bdy.style.borderWidth ="2px";
    bdy.style.borderColor ="tomato";
    bdy.style.borderStyle = "solid";

})

// dissmissable message function
// const rmv_msg = document.querySelector(".rmv");
// const rmv_div = document.querySelector(".dismiss_msg");
// rmv_msg.addEventListener("click", function(){
//     rmv_div.classList.add("message_out");
//     rmv_div.addEventListener("animationend",function(){
//         rmv_div.remove();
//         rmv_div = null;
//     });
// });

// dissmissable message function

const rmv_div = document.querySelector(".dismiss_msg");
const click_msg = document.querySelector(".toast_msg");
click_msg.addEventListener("click", function(){
    rmv_div.classList.add("message_out");
    rmv_div.addEventListener("animationend",function(){
        rmv_div.remove();
        rmv_div = null;
    });
});

