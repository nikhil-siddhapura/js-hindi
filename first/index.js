const bd = document.querySelector('body');
const btn = document.querySelectorAll('.button');

btn.forEach(function (button){
    button.addEventListener('click', function (e){
        // console.log(e)
        // console.log(e.target)
        // if(e.target.id === "red"){
        //     bd.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id === "green"){
        //     bd.style.backgroundColor = e.target.id;
        // } if(e.target.id === "blue"){
        //     bd.style.backgroundColor = e.target.id;
        // } if(e.target.id === "yellow"){
        //     bd.style.backgroundColor = e.target.id;
        // }

        switch (e.target.id) {
            case "red":
                bd.style.backgroundColor = "red";
                break;
            case "green":
                bd.style.backgroundColor = "green";
                break;
            case "blue":
                bd.style.backgroundColor = "blue";
                break;
            case "yellow":
                bd.style.backgroundColor = "yellow";
                break;
            default:
                bd.style.backgroundColor = "white";
                break;
        }
        // bd.style.backgroundColor = e.target.id;
    });
});