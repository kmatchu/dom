var $ = function(sel){
    var elem = document.querySelectorAll(sel);

    var text = function(texted){
        for(var i = 0; i < elem.length; i++){
            elem[i].innerText = texted;
        }}
    
    var addClass = function(classes){
        for(var i = 0; i < elem.length; i++){
        elem[i].classList.add(classes);
        }}

    var removeClass = function(classes2){
        for(var i = 0; i < elem.length; i++){        
        elem[i].classList.remove(classes2);
        }}
    
    var on = function(action,cb){
        for (i = 0; i < elem.length; i++){
        elem[i].addEventListener(action,cb);
        }}
    
    var toggleClass = function(classes3){
        for(var i = 0; i < elem.length; i++){
            if (elem[i].classList.contains(classes3))
                {elem[i].classList.remove(classes3);}
            else
                {elem[i].classList.add(classes);}
        }}

    var html = function(newHTML){
        for(var i = 0; i < elem.length; i++){
        elem[i].innerHTML = newHTML;
        }}


    var publicAPI = {
        text: text,
        element: elem,
        addClass: addClass,
        removeClass: removeClass,
        on: on,
        html: html,
        toggleClass: toggleClass
    }

    return publicAPI;
}