let svg = document.querySelectorAll('.svg-icon');


let isMoon = true;

svg.forEach((e)=>{
    e.addEventListener('click',()=>{

        if(isMoon){
            isMoon = false;
    
            e.src = "img/sun-svgrepo-com.svg";

            document.body.classList.toggle('dark');
        }else{
            isMoon = true;
    
            e.src = "img/moon-svgrepo-com.svg"

            document.body.classList.toggle('dark');
        }
    });
})


