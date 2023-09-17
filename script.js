    const card1 = document.querySelector(".crd1");
    const div1 = document.querySelector(".div1");

    var countClick1=0;
    card1.addEventListener("click", () => {
        card1.classList.toggle("flipCard");

        card1.onclick = function(){
            countClick1++;

            if(countClick1 == 1)
            {
                setTimeout(()=>{
                    card1.style.display = "none";
                    card1.style.transition = "step-end"
                    div1.style.border = "none"
                },400)
            }
        } 
    })

    const card2 = document.querySelector(".crd2");
    const div2 = document.querySelector(".div2");

    var countClick2=0;

    card2.addEventListener("click", () => {
        card2.classList.toggle("flipCard");

        card2.onclick = function(){
            countClick2++;

            if(countClick2 == 1)
            {
                setTimeout(()=>{
                    card2.style.display = "none";
                    card2.style.transition = "step-end"
                    div2.style.border = "none"
                },400)
            }
        } 
    })

    const card3 = document.querySelector(".crd3");
    const div3 = document.querySelector(".div3");

    var countClick3=0;

    card3.addEventListener("click", () => {
        card3.classList.toggle("flipCard");

        card3.onclick = function(){
            countClick3++;

            if(countClick3 == 1)
            {
                setTimeout(()=>{
                    card3.style.display = "none";
                    card3.style.transition = "step-end"
                    div3.style.border = "none"
                },400)
            }
        } 
    })

    const card4 = document.querySelector(".crd4");
    const div4 = document.querySelector(".div4");

    var countClick4=0;

    card4.addEventListener("click", () => {
        card4.classList.toggle("flipCard");

        card4.onclick = function(){
            countClick4++;

            if(countClick4 == 1)
            {
                setTimeout(()=>{
                    card4.style.display = "none";
                    card4.style.transition = "step-end"
                    div4.style.border = "none"
                },400)
            }
        } 
    })

    const card5 = document.querySelector(".crd5");
    const div5 = document.querySelector(".div5");

    var countClick5=0;

    card5.addEventListener("click", () => {
        card5.classList.toggle("flipCard");

        card5.onclick = function(){
            countClick5++;

            if(countClick5 == 1)
            {
                setTimeout(()=>{
                    card5.style.display = "none";
                    card5.style.transition = "step-end"
                    div5.style.border = "none"
                },400)
            }
        } 
    })

    const card6 = document.querySelector(".crd6");
    const div6 = document.querySelector(".div6");

    var countClick6=0;

    card6.addEventListener("click", () => {
        card6.classList.toggle("flipCard");

        card6.onclick = function(){
            countClick6++;

            if(countClick6 == 1)
            {
                setTimeout(()=>{
                    card6.style.display = "none";
                    card6.style.transition = "step-end"
                    div6.style.border = "none"
                },400)
            }
        } 
    })