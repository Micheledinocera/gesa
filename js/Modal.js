// Get the modal
var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");
var languages = $('#caption').children();

var certifications= [
    "resources/img%20certificazioni/ISO_9001_ita.pdf",
    "resources/img%20certificazioni/ISO_9001_eng.pdf",
    "resources/img%20certificazioni/ISO_14001_ita.pdf",
    "resources/img%20certificazioni/ISO_14001_eng.pdf",
    "resources/img%20certificazioni/BS_ita.pdf",
    "resources/img%20certificazioni/BS_eng.pdf"

];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images=$('.clickable');
for(var i=0;i<images.length;i++){
    images[i].onclick = function(){
        var index=($(this).index()-2)*2;
        modalImg.src = certifications[index];
        languages[0].onclick=function(){
            modalImg.src = certifications[index];
        }
        languages[1].onclick=function(){
            modalImg.src = certifications[index+1];
        }
        modal.style.display = "block";
    }
}


// Get the <span> element that closes the modal
var span = $(".close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}