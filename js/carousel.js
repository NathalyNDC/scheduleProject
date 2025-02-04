//SLIDES PICTURES
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3600); // Change image every 2 seconds
}

//MODAL Suggest Song
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("music-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal Dress Code
var modal2 = document.getElementById("myModal-dressCode");

// Get the button that opens the modal
var btn2 = document.getElementById("btnDressCode");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



// Get the modal Notes
var modal3 = document.getElementById("myModal-notes");

// Get the button that opens the modal
var btn3 = document.getElementById("btnNotes");
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}





// Get the modal Confirmation RSVP
var modal4 = document.getElementById("myModal-Confirm");

// Get the button that opens the modal
var btn4 = document.getElementById("btnConfirm");
// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}


///

var btnSuggestMusic = document.getElementById("send-music-suggest");
btnSuggestMusic.onclick = function() {
  //get field values
  var personMusic = document.getElementById("person-suggest").value;
  var songMusic = document.getElementById("song-suggest").value;
  var authorMusic = document.getElementById("author-suggest").value;
  var linkMusic = document.getElementById("link-suggest").value;
  //send to database
 console.log(personMusic);
 console.log(songMusic);
 console.log(authorMusic);
 console.log(linkMusic);
 if (songMusic) {
  jQuery.ajax({
      url: 'music.php',
      type: 'POST',
      data: { name: personMusic, song:songMusic, artist:authorMusic, link:linkMusic },
      success: function (response) {
          if (response == 'exists') {
            document.getElementById("response-notif").value="success";
          } else {
            document.getElementById("response-notif").value="failure";
          }
      }
  });
} else {
  document.getElementById("response-notif").value="";
}
  //clean fields
  document.getElementById("person-suggest").value="";
  document.getElementById("song-suggest").value="";
  document.getElementById("song-suggest").value="";
  document.getElementById("link-suggest").value="";
  //close modal
  modal.style.display = "none";
}




//RSVP
var btnrsvp = document.getElementById("send-confirm-rsvp");
btnrsvp.onclick = function() {
  //get field values
  var personC = document.getElementById("name-field").value;
  var quantityC = document.getElementById("quantity-field").value;
  var yesR = document.getElementById("yesRadio").checked;
  var confirm=false;
  if(yesR==true){
    confirm=true;
  }
  else{
    confirm=false;
  }
  //send to database
 console.log(personC);
 console.log(quantityC);
 console.log(confirm);
 if (personC) {
  jQuery.ajax({
      url: 'rsvp.php',
      type: 'POST',
      data: { name: personC, quantity:quantityC, confirmation:confirm},
      success: function (response) {
        if (response == 'exists') {
          document.getElementById("response-notif").value="success";
        } else {
          document.getElementById("response-notif").value="failure";
        }
      }
  });
} else {
  document.getElementById("response-notif").value="";
}
  //clean fields
  document.getElementById("name-field").value="";
  document.getElementById("quantity-field").value="";
  document.getElementById("yesRadio").checked=false;
  document.getElementById("noRadio").checked=false;
  //close modal"
  confirm=false;
  modal4.style.display = "none";
}