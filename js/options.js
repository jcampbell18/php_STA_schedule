/***** Buttons *****/
const onCoordinates = () => {
console.log('option selected');
  // get latitude
  let lat = $('input#lat').val(); 
  console.log('lat: ' + lat);

  // get longitude 
  let lon = $('input#lon').val(); 
  console.log('lon: ' + lon);

  // get radius (optional)
  //let radius = $('input#radius').val();

  if (validateLatLong(lat, lon)) {

    var coordinates = {
      "lat" : lat,
      "lon" : lon,
      //"radius" : radius
    };

    console.log('passed lat/long validation');
    $('div.err0').text();
    $('div.err0').remove();

    localStorage.setItem('coordinates', JSON.stringify(coordinates));

    location.reload();
    return;

  }

}

const onCustomize = () => {

    //get the title
    var title = $('#custom-title').val();

    // get the values (to string type)
    let c1 = ($('label[for=color1] div.sp-preview-inner').css('background-color')).toString();
    let c2 = ($('label[for=color2] div.sp-preview-inner').css('background-color')).toString();
    let c3 = ($('label[for=color3] div.sp-preview-inner').css('background-color')).toString();
    let c4 = ($('label[for=color4] div.sp-preview-inner').css('background-color')).toString();

    // strip everything except r, g, b
    let strip_color1 = stripRGB(c1);
    let strip_color2 = stripRGB(c2);
    let strip_color3 = stripRGB(c3);
    let strip_color4 = stripRGB(c4);

    // convert to hexadecimal
    let color1 = RGB2Color(strip_color1[0], strip_color1[1], strip_color1[2]);
    let color2 = RGB2Color(strip_color2[0], strip_color2[1], strip_color2[2]);
    let color3 = RGB2Color(strip_color3[0], strip_color3[1], strip_color3[2]);
    let color4 = RGB2Color(strip_color4[0], strip_color4[1], strip_color4[2]);

    // get the selected stops
    var stops = [];
	  var longStops = [];
    $("input[name='stop[]']:checked").each(function(){
        stops.push($(this).val());
		    longStops.push($(this).attr('data-name'));
    });

    // get the image
    var img = document.querySelector('#customize-logo');
    var logo = img.src;

    if (validateCustomize(title, logo, color1, color2, color3, color4, stops)) {

      var customizations = {
        "title" : title,
        "logo" : logo,
        "colors" : [{
          "color1" : color1,
          "color2" : color2,
          "color3" : color3,
          "color4" : color4
        }],
        "stops" : [{
          "short": stops,
          "long": longStops,
        }]
      };

      console.log('passed validation');
      $('div.validation p').text();
      $('div.validation').remove();

      localStorage.setItem('customizations', JSON.stringify(customizations));

      location.reload();
      return;

    } 

};

const onSelect = () => {

//  var value = $(this).children(':selected').data('loc');
//  console.log('value selected: ' + value);
//  $(this).next('input').focus().val(value);

  var lat;
  var lon;
  var selection = $('#dropdown-sta').val();
  console.log('selection: ' + selection);

  if (selection === 'ewu') {
    lat = '47.492310';
    lon = '-117.583595';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  } else if (selection === 'plaza') {
    lat ='47.6573894';
    lon = '-117.4230522';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  }else if (selection === 'vtc') {
    lat = '47.654125';
    lon = '-117.263028';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  } else if (selection === 'fivemile') {
    lat ='47.7175075';
    lon = '-117.4389782';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  } else if (selection === 'hastings') {
    lat ='47.7686469';
    lon = '-117.4091228';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  } else if (selection === 'westplains') {
    lat ='47.5906749';
    lon = '-117.5642922';
    $('#lat').attr('readonly', 'readonly');
    $('#lon').attr('readonly', 'readonly');
  } else {
    lat ='';
    lon = '';
    $('#lat').attr('readonly', '');
    $('#lon').attr('readonly', '');
  }

  $('#lat').val(lat);
  $('#lon').val(lon);

};

// const onUpdateLocation = () => {
//   console.log('update location requested');
//   $('#selections').hide();
//   $('#customize').hide();
//   $('#coordinate-area').show();
//   $('div#bus-data').hide();
//   $('footer').hide();
//   $('footer button#update-location').unbind('click');
// };

// const onUpdateCustom = () => {
//   console.log('update customization requested');
//   $('#selections').show();
//   $('#customize').show();
//   $('#coordinate-area').hide();
//   $('div#bus-data').hide();
//   $('footer').hide();
//   $('footer button#update-customization').unbind('click');
// };


/* Local Storage */
if (localStorage.getItem('coordinates') && !(localStorage.getItem('customizations')) ) {

  console.log('you have coordinates in localStorage');
  $('#selections').show();
  $('#customize').show();
  $('#coordinate-area').hide();
  $('div#bus-data').hide();
  $('footer').hide();

  var coordinates = localStorage.getItem('coordinates');
  var coord = JSON.parse(coordinates);
  var lat = coord['lat'];
  var lon = coord['lon'];
  //var radius = coord['radius'];

  stopsForLocation(lat, lon);

  $('button#selections').click(onCustomize);

} else if (localStorage.getItem('customizations') && localStorage.getItem('coordinates')) {

  console.log('you have website customizations and coordinates in localStorage');

  //edit meta tag to refresh page every 60 seconds
  $('meta[http-equiv=Refresh]').attr('content', 60);

  $('#selections').hide();
  $('#customize').hide();
  $('#coordinate-area').hide();
  $('div#bus-data').show();
  //$('footer').show();

  var customizations = localStorage.getItem('customizations');
  var cust = JSON.parse(customizations);
  var title = cust['title'];
  var logo = document.getElementById('logo');
  var color1 = ((cust['colors'])[0])['color1'];
  var color2 = ((cust['colors'])[0])['color2'];
  var color3 = ((cust['colors'])[0])['color3'];
  var color4 = ((cust['colors'])[0])['color4'];
  
  var stops = ((cust['stops'])[0])['short'];
  var longStops = ((cust['stops'])[0])['long'];
  displayStops(stops);

  logo.src = cust['logo'];
  $('header img').attr('alt', title);
  $('header img').attr('title', title);
  $('header h1').text(title);

  $(':root').css('--primary-color', color1);
  $(':root').css('--secondary-color', color2);
  $(':root').css('--tertiary-color', color3);
  $(':root').css('--quaternary-color', color4);

} else {
  console.log('localStorage is empty!');
  $('button#coordinate-save').click(onCoordinates);
  $('div#bus-data').hide();
  $('#selections').hide();
  $('div#customize').hide();
  //$('footer').hide();
  $('#coordinate-area').show();

  //$('select#dropdown-sta').change(onSelect());
  $( ".target" ).change(function() {
    onSelect();
    //alert( "Handler for .change() called." );
  });

}

const stripRGB = (str) => {

    if (typeof str === 'string') {
 
    stripout = [ 'rgb(', ')', ' ' ];

    for (let ix = 0; ix < stripout.length; ix++) {
      str = str.replace(stripout[ix] + '', '');
    }

    array = str.split(',');

    array[0] = array[0].replace(' ', '');
    array[1] = array[1].replace(' ', '');
    array[2] = array[2].replace(' ', '');

    return array;

  }

  return;

};



/* Validation */
const validateLatLong = (lat, lon) => {

  console.log("validating data");
  var str = 'The following fields are blank: ';
  var err = [];
  var regexp = new RegExp('^[0-9-.]$');
  var regexp_numOnly = new RegExp('^[0-9]$');

  if (lat == '' || regexp.test(lat)) {
    err.push('latitude');
  } 

  if (lon == '' || regexp.test(lon)) {
    err.push('longitude');
  } 

  // if (radius == '' || regexp_numOnly.test(lat)) {
  //   err.push('radius');
  // } 

  if (err.length > 0) {

    for (let ix = 0; ix < err.length; ix++) {
      
      if (ix == err.length -1 && err.length != 1) {
        str += ' and ';
      }

      str += err[ix];
      
      if (ix != err.length -1) {
        str += ', ';
      }

    }

    $('div.err0').text(str);
    $('div.err0').addClass('valid');

    console.log('failed validation');

    return false;

  } else {

    return true;

  }

};

const validateCustomize = (title, logo, color1, color2, color3, color4, stops) => {

  console.log("validating data");

  var str = 'The following fields are blank: ';
  var err = [];

  if (title == '') {
    err.push('title/company');
  } 

  if (logo == '' || logo === 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D') {
    err.push('image');
  }

  if (color1 == '') {
    err.push('primary color');
  } 

  if (color2 == '') {
    err.push('secondary color');
  } 

  if (color3 == '') {
    err.push('text on primary color');
  } 

  if (color4 == '') {
    err.push('alternate text color');
  }
  
  if (stops.length == 0) {
    err.push('no stops are selected');
  }

  if (err.length > 0) {

    for (let ix = 0; ix < err.length; ix++) {
      
      if (ix == err.length -1 && err.length != 1) {
        str += ' and ';
      }

      str += err[ix];
      
      if (ix != err.length -1) {
        str += ', ';
      }

    }

    $('div.validation').text(str);
    $('div.validation').addClass('valid');

    console.log('failed validation');

    return false;

  } else {

    return true;

  }

};