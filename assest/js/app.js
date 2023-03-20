let links = document.querySelectorAll("header .nav-item a.nav-link")
// console.log(links)


links.forEach(element => {
    element.onclick = _ => {
        links.forEach(element => {

            element.classList.remove("active");
        });
        element.classList.add("active");
    }
    
});

let head = document.querySelector("header");

onscroll = _ => {
    if(scrollY > 100){
        navTop.classList.add("fixed-top" ,  "bg-white" , "shadow-sm")
    }else{
        navTop.classList.remove("fixed-top" ,  "bg-white" , "shadow-sm")
}
}
