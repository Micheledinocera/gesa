/**
 * Created by cicci on 29/07/2017.
 */
var sliderInterval;
var photos=[];

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
    photos=photos.concat("url("+folder+"PhotoSlider-1.jpg");
    photos=photos.concat("url("+folder+"PhotoSlider-2.jpg");
    photos=photos.concat("url("+folder+"PhotoSlider-3.jpg");
    photos=photos.concat("url("+folder+"PhotoSlider-4.jpg");
}

function setPhotoByIndex(index){
    var photoContainer=$("#cover");

    // photoContainer.fadeTo("slow", 0.1,function(){
        photoContainer.css("background-image",photos[index]);
    // });
    // photoContainer.fadeTo(1000, 0.6);
    selectDotByIndex(index);
}

function selectDotByIndex(index){
    var dots=$("#dots-container");
    for(var i=0;i<photos.length;i++){
        dots.children()[i].classList.remove("selected");
    };
    dots.children()[index].classList.add("selected");
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
    setSliderInterval(index);
}