
//Show the popup
var showPopup = function(event) {


//content for popup
  var titleText = event.srcElement.attributes['data-title'].value;
  var paragraphText1 = event.srcElement.attributes['data-paragraph'].value;
  var paragraphText2 = event.srcElement.attributes['data-paragraph-2'].value;
  var jointsParagraphText = event.srcElement.attributes['data-joints'].value;
  var imageSource = event.srcElement.attributes['data-image'].value;



//popup and prePopup
  var popup = document.getElementById('popup');
  var prePopup = document.getElementById('pre-popup')


//change popup content to data values
  var title = document.querySelector('#popup h3');
  title.innerHTML = '<span>' + titleText + '</span>';//concatenate to add underline to header

  var paragraph1 = document.querySelector('#popup p.text');
  paragraph1.innerHTML = paragraphText1;

  var paragraph2 = document.querySelector('#popup p.text-2');
  paragraph2.innerHTML = paragraphText2;

  var jointsParagraph = document.querySelector('#popup p.text-3');
  jointsParagraph.innerHTML = jointsParagraphText;

  var image = document.querySelector('#popup img');
  image.setAttribute('src', imageSource);

  popup.setAttribute('class', 'visible');
  prePopup.setAttribute('class', 'hidden');

  event.preventDefault();

}

//call the element from the DOM
var clickMapPoint = document.querySelectorAll('.region');

//two event listeners: mouseover and out
for (var i = 0; i < clickMapPoint.length; i++) {
  clickMapPoint[i].addEventListener('click', showPopup, false);
}

//Hide the popup
var hidePopup = function(event) {

  var popup = document.getElementById('popup');
  popup.removeAttribute('class');

  var prePopup = document.getElementById('pre-popup');
  prePopup.setAttribute('class', 'back');

  event.preventDefault();

}

//call the element from the DOM
var clearPopup = document.querySelectorAll('.clear');

//two event listeners: mouseover and out
for (var i = 0; i < clearPopup.length; i++) {
  clearPopup[i].addEventListener('click', hidePopup, false);
}

//scroll popup up

//write the function

var movePopupUp = function(event) {
  var popup = document.getElementById('popup');
  popup.setAttribute('class', 'visible-moved')
}

//call the element from the document
var scrollDivUp = document.getElementById('move-up');

//add addEventListener
scrollDivUp.addEventListener('click', movePopupUp, false);

//scroll popup down

//write the function

var movePopupDown = function(event) {
  var popup = document.getElementById('popup');
  popup.setAttribute('class', 'visible')
}

//call the element from the document
var scrollDivDown = document.getElementById('move-down');

//add addEventListener
scrollDivDown.addEventListener('click', movePopupDown, false);

/*********************** page load animation ***************************/

//write function to move mask
var landingMaskAnimate = function(event) {
  var landingMask = document.getElementById('heading-mask');
  landingMask.setAttribute('class', 'reveal')
  var subhead = document.getElementById('landing-subhead');
  subhead.setAttribute('class', 'reveal');
  var landingImage = document.getElementById('landing-image');
  landingImage.setAttribute('class', 'reveal');
  var downArrow = document.getElementById('down-arrow');
  downArrow.setAttribute('class', 'reveal');

  setTimeout(clearMask, 1000);
}

var clearMask = function(event) {
  var landingMask2 = document.getElementById('heading-mask');
  landingMask2.setAttribute('class', 'clearMask')
}
//add event listeners
window.addEventListener('load', landingMaskAnimate, false);

//scroll removes down downArrow

//function
var removeDownArrow = function(event) {
  var downArrow = document.getElementById('down-arrow');
  downArrow.setAttribute('class', 'hide');
}

//event listener
window.addEventListener('scroll', removeDownArrow, false,);

//second down arrow remove

var removeDownArrow2 = function(event) {
  var downArrow2 = document.getElementById('down-arrow2');
  downArrow2.setAttribute('class', 'hide');
}

var secondArrowScroll = document.getElementById('map');

//event listener
secondArrowScroll.addEventListener('mouseover', removeDownArrow2, false,);
