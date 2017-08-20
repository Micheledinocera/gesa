// var APIKEY="AIzaSyDzT4oQlcKY-ZhebzE5Pu8cML35uS_XSVE";
function myMap() {
    var GESAPosition = {lat: 40.710524, lng: 14.488495};
        var mapProp= {
            center:GESAPosition,
            zoom:15,
        };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: GESAPosition,
        map: map
    });
}