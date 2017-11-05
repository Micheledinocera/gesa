/**
 * Created by cicci on 29/07/2017.
 */
var sliderInterval;
var photos=[];
var labels=[];
var preloadPhotos=[];

function startSlider() {
    var dots=$("#dots-container");
    retrievePhotosFromDir(photos);
    preload(preloadPhotos);

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

function preload() {
    $(preloadPhotos).each(function(){
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

function retrievePhotosFromDir(){
    var folder = "resources/PhotoSlider/";
    photos=photos.concat("url("+folder+"Pitturazione.jpg)");
    photos=photos.concat("url("+folder+"Sabbiatura.jpg)");
    photos=photos.concat("url("+folder+"Ponteggio.jpg)");
    photos=photos.concat("url("+folder+"Gru_60_T.jpg)");
    photos=photos.concat("url("+folder+"Lavorazione.jpg)");
    photos=photos.concat("url("+folder+"PhotoSlider-2.jpg");
    photos=photos.concat("url("+folder+"PhotoSlider-3.jpg");
    photos=photos.concat("url("+folder+"PhotoSlider-4.jpg");
    retrievePhotoForPreload();
    retrieveLabels();
}

function retrievePhotoForPreload() {
    var folder = "resources/PhotoSlider/";
    preloadPhotos=preloadPhotos.concat(folder+"Pitturazione.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"Sabbiatura.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"Ponteggio.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"Gru_60_T.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"Lavorazione.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"PhotoSlider-2.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"PhotoSlider-3.jpg");
    preloadPhotos=preloadPhotos.concat(folder+"PhotoSlider-4.jpg");
}

function retrieveLabels() {
    labels=labels.concat("Un passo di rinnovamento è un passo di bellezza");
    labels=labels.concat("La nostra professonalità per le vostre esigenze");
    labels=labels.concat("La sicurezza è il pilastro di ogni nostro lavoro");
    labels=labels.concat("Grandi mezzi per grandi opere");
    labels=labels.concat("Collaborazione per ogni grande lavorazione");
    labels=labels.concat("Per le nostre attrezzature scegliamo solo qualitá");
    labels=labels.concat("Soliditá ed esperienza al vostro servizio");
    labels=labels.concat("Puntiamo solo in alto per il nostro futuro");
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
    sliderLabel.fadeTo(250,0,
        function(){
            sliderLabel.fadeTo(250,1);
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