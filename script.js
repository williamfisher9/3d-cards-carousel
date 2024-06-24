const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const allImages = document.querySelectorAll(".card-img");
const containerCenter = document.querySelector(".container-center");
const containerLeft1 = document.querySelector(".container-left-1");
const containerLeft2 = document.querySelector(".container-left-2");
const containerRight1 = document.querySelector(".container-right-1");
const containerRight2 = document.querySelector(".container-right-2");

nextBtn.addEventListener("click", () => {
    console.log("nextBtn");

    

    if(containerCenter.getBoundingClientRect().width == 220) {
        console.log("1")
        containerCenter.style.transform = `translateX(230px)`;
        containerCenter.style.scale = "1";

        containerRight1.style.transform = `translateX(490px)`;
        containerRight1.style.scale = "0.9";

        containerRight2.style.transform = `translateX(-490px)`;
        containerRight2.style.scale = "0.9";

        containerLeft2.style.transform = `translateX(-230px)`;
        containerLeft2.style.scale = "1";

        containerLeft1.style.transform = `translateX(0px)`;
        containerLeft1.style.scale = "1.1";

        //containerRight1.style.left = `${945}px`;
        //containerRight1.style.scale = "0.9";

        

    } else if (containerCenter.getBoundingClientRect().width == 200 && containerCenter.getBoundingClientRect().left > window.innerWidth/2) {
        console.log("2")
        //containerCenter.style.left = `${containerCenter.getBoundingClientRect().left + (containerCenter.getBoundingClientRect().width - containerCenter.offsetWidth)/2 + 210}px`;
        

        containerRight2.style.transform = `translateX(-230px)`;
        containerRight2.style.scale = "1";

        containerRight1.style.transform = `translateX(-490px)`;
        containerRight1.style.scale = "0.9";

        

        containerCenter.style.transform = `translateX(490px)`;
        containerCenter.style.scale = "0.9";

        

        containerLeft1.style.transform = `translateX(230px)`;
        containerLeft1.style.scale = "1";

        containerLeft2.style.transform = `translateX(0px)`;
        containerLeft2.style.scale = "1.1";


    } else if (containerCenter.getBoundingClientRect().width == 180 && containerCenter.getBoundingClientRect().left > window.innerWidth/2) {
        console.log("3")

        containerRight2.style.transform = `translateX(0px)`;
        containerRight2.style.scale = "1.1";

        containerRight1.style.transform = `translateX(-230px)`;
        containerRight1.style.scale = "1";

        

        containerCenter.style.transform = `translateX(-490px)`;
        containerCenter.style.scale = "0.9";

        

        containerLeft1.style.transform = `translateX(490px)`;
        containerLeft1.style.scale = "0.9";

        containerLeft2.style.transform = `translateX(230px)`;
        containerLeft2.style.scale = "1";
    }    
    else if (containerCenter.getBoundingClientRect().width == 180 && containerCenter.getBoundingClientRect().left < window.innerWidth/2) {
        console.log("4")
        
        containerRight2.style.transform = `translateX(230px)`;
        containerRight2.style.scale = "1";

        containerRight1.style.transform = `translateX(0px)`;
        containerRight1.style.scale = "1.1";

        

        containerCenter.style.transform = `translateX(-230px)`;
        containerCenter.style.scale = "1";

        

        containerLeft1.style.transform = `translateX(-490px)`;
        containerLeft1.style.scale = "0.9";

        containerLeft2.style.transform = `translateX(490px)`;
        containerLeft2.style.scale = "0.9";

    } else if (containerCenter.getBoundingClientRect().width == 200 && containerCenter.getBoundingClientRect().left < window.innerWidth/2) {
        console.log("5")
        
        containerRight2.style.transform = `translateX(490px)`;
        containerRight2.style.scale = "0.9";

        containerRight1.style.transform = `translateX(230px)`;
        containerRight1.style.scale = "1";

        

        containerCenter.style.transform = `translateX(0px)`;
        containerCenter.style.scale = "1.1";

        

        containerLeft1.style.transform = `translateX(-230px)`;
        containerLeft1.style.scale = "1";

        containerLeft2.style.transform = `translateX(-490px)`;
        containerLeft2.style.scale = "0.9";
    }

    


    

    /*

    containerLeft1.style.transform = "translate(0px)";
    containerLeft1.style.scale = "1.1";

    containerLeft2.style.transform = "translate(-230px)";
    containerLeft2.style.scale = "1";

    containerRight1.style.transform = "translate(490px)";
    containerRight1.style.scale = "0.9";

    containerRight2.style.transform = "translate(-490px)";
    containerRight2.style.scale = "0.9";
    
    */
})






prev.addEventListener("click", () => {
    console.log("prevBtn");

    

    if(containerCenter.getBoundingClientRect().width == 220) {
        console.log("1")

        containerRight2.style.transform = `translateX(230px)`;
        containerRight2.style.scale = "1";

        containerRight1.style.transform = `translateX(0px)`;
        containerRight1.style.scale = "1.1";

        containerCenter.style.transform = `translateX(-230px)`;
        containerCenter.style.scale = "1";

        containerLeft1.style.transform = `translateX(-490px)`;
        containerLeft1.style.scale = "0.9";

        containerLeft2.style.transform = `translateX(490px)`;
        containerLeft2.style.scale = "0.9";       

    } else if (containerCenter.getBoundingClientRect().width == 200 && containerCenter.getBoundingClientRect().left < window.innerWidth/2) {
        console.log("2")      

        containerRight2.style.transform = `translateX(0px)`;
        containerRight2.style.scale = "1.1";

        containerRight1.style.transform = `translateX(-230px)`;
        containerRight1.style.scale = "1";

        containerCenter.style.transform = `translateX(-490px)`;
        containerCenter.style.scale = "0.9";

        containerLeft1.style.transform = `translateX(490px)`;
        containerLeft1.style.scale = "0.9";

        containerLeft2.style.transform = `translateX(230px)`;
        containerLeft2.style.scale = "1";   


    } else if (containerCenter.getBoundingClientRect().width == 180 && containerCenter.getBoundingClientRect().left < window.innerWidth/2) {
        console.log("3")

        containerRight2.style.transform = `translateX(-230px)`;
        containerRight2.style.scale = "1";

        containerRight1.style.transform = `translateX(-490px)`;
        containerRight1.style.scale = "0.9";

        containerCenter.style.transform = `translateX(490px)`;
        containerCenter.style.scale = "0.9";

        containerLeft1.style.transform = `translateX(230px)`;
        containerLeft1.style.scale = "1";

        containerLeft2.style.transform = `translateX(0px)`;
        containerLeft2.style.scale = "1.1"; 
    }    
    else if (containerCenter.getBoundingClientRect().width == 180 && containerCenter.getBoundingClientRect().left > window.innerWidth/2) {
        console.log("4")
        
        containerRight2.style.transform = `translateX(-490px)`;
        containerRight2.style.scale = "0.9";

        containerRight1.style.transform = `translateX(490px)`;
        containerRight1.style.scale = "0.9";

        containerCenter.style.transform = `translateX(230px)`;
        containerCenter.style.scale = "1";

        containerLeft1.style.transform = `translateX(0px)`;
        containerLeft1.style.scale = "1.1";

        containerLeft2.style.transform = `translateX(-230px)`;
        containerLeft2.style.scale = "1"; 

    } else if (containerCenter.getBoundingClientRect().width == 200 && containerCenter.getBoundingClientRect().left > window.innerWidth/2) {
        console.log("5")
        
        containerRight2.style.transform = `translateX(490px)`;
        containerRight2.style.scale = "0.9";

        containerRight1.style.transform = `translateX(230px)`;
        containerRight1.style.scale = "1";

        containerCenter.style.transform = `translateX(0px)`;
        containerCenter.style.scale = "1.1";

        containerLeft1.style.transform = `translateX(-230px)`;
        containerLeft1.style.scale = "1";

        containerLeft2.style.transform = `translateX(-490px)`;
        containerLeft2.style.scale = "0.9";
    }


})