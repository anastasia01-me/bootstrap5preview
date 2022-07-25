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

function modifyAttributes(id, type){
    switch (id){
        //Offcanvas
        case "offcanvas":
            //var element = document.querySelector('[id^="offcanvas-id"]');
            //var button = document.getElementById("offcanvasBtn");
            var wrap = document.getElementById("offcanvas-wrap");
            var wrapHTML = wrap.innerHTML;
            wrap.innerHTML = "";
            wrap.innerHTML = wrapHTML;
            var element = document.getElementById(id);

            switch (type){

                case "nobackdrop-nobodyscroll":
                    element.setAttribute("data-bs-backdrop",false);
                    element.setAttribute("data-bs-scroll",false);
                    //element.id = "offcanvas-id-nbnbs";
                    //button.setAttribute("data-bs-target","#offcanvas-id-nbnbs");
                    break;
                case "backdrop-nobodyscroll":
                    element.setAttribute("data-bs-backdrop",true);
                    element.setAttribute("data-bs-scroll",false);
                    //element.id = "offcanvas-id-bnbs";
                    //button.setAttribute("data-bs-target","#offcanvas-id-bnbs");
                    break;
                case "nobackdrop-bodyscroll":
                    element.setAttribute("data-bs-backdrop",false);
                    element.setAttribute("data-bs-scroll",true);
                    //element.id = "offcanvas-id-nbbs";
                    //button.setAttribute("data-bs-target","#offcanvas-id-nbbs");
                    break;
                case "backdrop-bodyscroll":
                    element.setAttribute("data-bs-backdrop",true);
                    element.setAttribute("data-bs-scroll",true);
                    //element.id = "offcanvas-id-bbs";
                    //button.setAttribute("data-bs-target","#offcanvas-id-bbs");
                    break;
            }
            break;

        //Navs and Tabs
        case "navs-tabs":

            var homeTab = document.getElementById("nav-home-tab");
            var profileTab = document.getElementById("nav-profile-tab");
            var contactTab = document.getElementById("nav-contact-tab");

            homeTab.setAttribute("data-bs-toggle",type);
            profileTab.setAttribute("data-bs-toggle",type);
            contactTab.setAttribute("data-bs-toggle",type);
            break;
        
        //Breadcrumbs
        case "breadcrumb":
            if(type == "svg"){
                //document.getElementById('breadcrumb').setAttribute("style","--bs-breadcrumb-divider: url(\x22data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-arrow-right-short' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'/></svg>\x22);");
                document.getElementById('breadcrumb').setAttribute("style","--bs-breadcrumb-divider: url(\x22data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='black' viewBox='0 0 20 20'><path d='M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10'/></svg>\x22);");
            } else {
                document.getElementById('breadcrumb').setAttribute("style","--bs-breadcrumb-divider: '"+type+"';");
            }
            break;
    }
}