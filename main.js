//Event Listeners
document.getElementById("contentMenuBtn").addEventListener("click", function(){
    var checkClass = document.getElementsByClassName("modal-backdrop");
    var btnIcon = document.getElementById("contentMenuBtn");
    if (checkClass.length > 0){
        checkClass[0].style.display = "none";
        btnIcon.innerHTML = '<img src="assets/dotpict_20201219_214919.png" alt="" width="50px" height="auto">'
    } else {
        btnIcon.innerHTML = '<img src="assets/dotpict_20201219_215008.png" alt="" width="50px" height="auto">'
    }
    document.body.style.overflow = "scroll";
    return true;
})

//Functions
//Toggle for Class Name change
function toggleClass(id, position, name){
    //const radio = document.getElementById(radioId);
    //const check = radio.checked;
    //console.log(check);

    //get all of the class names from the id
    var classNames = document.getElementById(id).className;
    //console.log(classNames);

    //Split the classe names and place in array
    var array = classNames.split(" ");
    //console.log(array);

    //Replace prev class name with new name based on position
    array[position] = name;
    //console.log(array);

    //Put back the array into a string again
    classNames = array.join(" ");
    //console.log(classNames);

    //Replace element class name
    document.getElementById(id).className = classNames;
}

function modifyInnerHTML(id, type){
    var html = "";

    switch (type){
        //Navbar Brand
        case "navbar-brand-text":
            html = "Brand";
            break;
        case "navbar-brand-image":
            html = '<img src="assets/dotpict_20201219_215041.png" alt="" width="40" height="40">';
            break;
        case "navbar-brand-imageText":
            html = '<img src="assets/dotpict_20201219_215041.png" alt="" width="40" height="40"  class="d-inline-block align-text-center"> Brand';
            break;
    }

    document.getElementById(id).innerHTML = html;
}