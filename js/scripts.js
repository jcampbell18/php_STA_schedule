const start= () => {
    //stopsForLocation(47.492310, -117.583595);
    //registerServiceWorker();
    formatDate($.now());
    formatTime($.now());

    // if (localStorage.getItem('customizations') && localStorage.getItem('coordinates')) {
        

    //     // $('button#update-location').click(onUpdateLocation());
    //     // $('button#update-customization').click(onUpdateCustom());
    // }

};

// register service worker ///
// const registerServiceWorker = () => {
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('./service-worker.js').then(function(reg) {
      
//           if(reg.installing) {
//             console.log('Service worker installing');
//           }
          
//           if(reg.waiting) {
//             console.log('Service worker installed');
//           } 
          
//           if(reg.active) {
//             console.log('Service worker active');
//           }
      
//         }).catch(function(error) {
//           console.log('Registration failed with ' + error);
//         });
//       }
// };

const displayStops = (selectedStops) => {

    //console.log(window.selectedStops);
    console.log("selected stops: " + selectedStops);

    for(ix=0; ix<selectedStops.length; ix++) {
        let stop = selectedStops[ix];
        console.log("stop: " + stop);
        
        //setTimeout(displayStop(stop),10000);        
        arrivalsAndDeparturesForStop(stop, 5, 270)    
    }

}

const formatTime = (unixDate) => {
    let t = new Date(unixDate).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    let d = new Date(unixDate).toDateString();
    return t;
}

const formatDate = (unixDate) => {

    let t = new Date(unixDate).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
    let d = new Date(unixDate).toDateString();

    console.log(t);
    console.log(d);

    $('.current-time').text(t);
    $('.current-date').text(d);
}

function previewFile() {

  var preview = document.querySelector('#customize-logo');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
      preview.src = reader.result;
  }, false);

  if (file) {
      reader.readAsDataURL(file);
  }

}

// Page Loaded
$(document).ready(start);