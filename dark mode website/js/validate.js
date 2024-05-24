var ball = document.querySelector('.ball');
 var body = document.querySelector('.body');
 var ballPlate = document.querySelector('.ball-plate');


// ball.addEventListener('click', function(){
//     ball-plate.classList.toggle('night');
//     ball.classList.toggle('move');
 
//     if (body.classList.contains('night')) {
//        ballPlate.style.backgroundColor = 'white'
//        body.style.textContent = 'white'
//     }

//      else{

//     }
// });

// ball.onclick = () => {
//     ball.classList.toggle('night');
//     if (body.classList.contains('night')) {
//         document.body.classList.add('night');
//         ballPlate.style.backgroundColor = 'white'
//         body.style.textColor = 'white'
//     }

//     else{
//         document.body.classList.remove('night');
//     }

    
// }


var ball = document.querySelector('.ball');
 
 function toggle() {
     var  element = document.body;
     element.classList.toggle("night")
     ball.classList.toggle('move')
     ballPlate.style.backgroundColor = 'white'
    
 }


//  menu items
 function openbtn(){
    document.getElementById("menuItems").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-btn").style.display = "block";

}




function closebtn(){
document.getElementById("menuItems").style.display = "none";
document.getElementById("menu-icon").style.display = "block";
document.getElementById("close-btn").style.display = "none";

}





