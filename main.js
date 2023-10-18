const dopspercents=document.querySelectorAll(".dopspercent")
dopspercents.forEach((index) => {
setTimeout(()=>{if(index.classList.contains("js") )   {
    index.style.width="70%";

}},1000)

setTimeout(()=>{if(index.classList.contains('ht')){
    index.style.width='60%';
}},2000)

setTimeout(()=>{if(index.classList.contains('jquery')){
    index.style.width="90%"
}},2500)

setTimeout(()=>{if(index.classList.contains("sass")){
    index.style.width='40%'
}},3000)


});


