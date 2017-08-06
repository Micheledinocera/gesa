/**
 * Created by cicci on 29/07/2017.
 */
var sliderInterval;
var photos=[];
var labels=[];

function startSlider() {
    var dots=$("#dots-container");
    retrievePhotosFromDir(photos);

    for(var i=0;i<photos.length;i++){
        var dot=document.createElement("div");
        dot.classList.add("dot");
        dot.onclick=function(e){
            clickDot(Array.prototype.indexOf.call(e.target.parentElement.children, e.target));
        };
        dots.append(dot);
    }
    return photos;
}

function retrievePhotosFromDir(){
    var folder = "resources/PhotoSlider/";
    photos=photos.concat("url("+folder+"Pitturazione.jpg");
    photos=photos.concat("url("+folder+"Sabbiatura.jpg");
    photos=photos.concat("url("+folder+"Impianti.jpg");
    photos=photos.concat("url("+folder+"Rifiuti.jpg");
    retrieveLabels();
}

function retrieveLabels() {
    labels=labels.concat("Pitturazione e sabbiatura");
    labels=labels.concat("Pitturazione e sabbiatura 2");
    labels=labels.concat("Impianti ed edizilizia");
    labels=labels.concat("Trasporto materiali e rifiuti");
}

function setPhotoByIndex(index){
    var photoContainer=$("#cover");
    photoContainer.css("background-image",photos[index]);
    selectDotByIndex(index);
}

function selectDotByIndex(index){
    var dots=$("#dots-container");
    for(var i=0;i<photos.length;i++){
        dots.children()[i].classList.remove("selected");
    };
    dots.children()[index].classList.add("selected");
    var sliderLabel=$("#slider_label");
    sliderLabel.fadeTo(500,0,
        function(){
            sliderLabel.fadeTo(500,1);
            sliderLabel.html(labels[index]);
        }
    );


}

function setSliderInterval(index) {
    currentPosition=index;
    clearInterval(sliderInterval);
    sliderInterval = setInterval(function () {
        setPhotoByIndex(currentPosition);
        currentPosition++;
        currentPosition = currentPosition % photos.length;
    }, 5000);
    return currentPosition;
}

function clickDot(index){
    selectDotByIndex(index);
    setPhotoByIndex(index);
    index++;
    index = index % photos.length;
    setSliderInterval(index);
}