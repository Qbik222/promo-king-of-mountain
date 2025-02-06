document.querySelector(".open-btn").addEventListener("click", () =>{
    document.querySelector(".box").classList.toggle("shake")
    // setTimeout(() =>{
    //
    // }, 1000)
    document.querySelector(".box__cap").classList.toggle('open')
    setTimeout(() =>{
        document.querySelector(".box__cap-front").classList.toggle("hide")
    }, 450)


})