// GLOBALS
var timer;
var timeGap = 8 * 1000; //user defined gap between images
var frameSteps = 100; //user defined
var frameTimeGap = 5; //user defined
//NOTE: frameSteps * frameTimeGap = transitionTime

var timeToContinue;

var imageSources = ["IMGP7082_crop.JPG", "1.jpg", "IMGP7004_crop.JPG", "2.jpg", "IMGP6968.JPG", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var imageIndex = 0;

var topImage;
var bottomImage;

function initImgScroll(){
    if(imageSources.length == 1){
        return;
    }

    topImage = document.getElementById("topImage");
    bottomImage = document.getElementById("bottomImage");

    //these are just to do final checks. The first initialization of HTML attributes is in CSS
    topImage.style.backgroundImage = "url('imageAssets/homeSlideshow/" + imageSources[0] + "')";
    topImage.style.opacity = 1;
    bottomImage.style.backgroundImage = "url('imageAssets/homeSlideshow/" + imageSources[1] + "')";

    timeToContinue = new Date().getTime() + timeGap;

    timer = setInterval(function(){
        if(timeToContinue < new Date().getTime()){
            imageProgress();
        }
    }, frameTimeGap);
}

function imageProgress(){
    if(topImage.style.opacity <= 1/frameSteps){
        changeImage();
    } else {
        topImage.style.opacity = topImage.style.opacity - 1/frameSteps;
    }
}

function changeImage(){
    imageIndex++;

    if(imageIndex >= imageSources.length){
        imageIndex = 0;
    }

    topImage.style.backgroundImage = "url('imageAssets/homeSlideshow/" + imageSources[imageIndex] + "')";
    topImage.style.opacity = 1;
    bottomImage.style.backgroundImage = "url('imageAssets/homeSlideshow/" + imageSources[imageIndex + 1 >= imageSources.length ? 0 : imageIndex + 1] + "')";

    timeToContinue = new Date().getTime() + timeGap;
}
