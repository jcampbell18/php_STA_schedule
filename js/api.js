// get details for a specific route
function route(r) {
    let route = r; 
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/route/' + route + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotRoute,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

function gotRoute(response) {
    // details for route
    console.log(response.data);
}

// get a list of all routes for an agency
function routesForAgency(r) {
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/routes-for-agency/STA.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotRoutesForAgency,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

function gotRoutesForAgency(response) {
    // array of routes
    console.log(response.data.list);
}

// get a list of all route ids for an agency
function routeIdsForAgency() {

    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/route-ids-for-agency/STA.json?key=TEST',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotRouteIdsForAgency,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

function gotRouteIdsForAgency(response) {
    // array of route ids
    console.log(response.data.list);
}



// get active trips for a route
function tripsForRoute(r) {
    let route = r;  
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/trips-for-route/' + route + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotTripsForRoute,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get active trips for a route
function gotTripsForRoute(response) {
    // list has serviceDate, tripId
    console.log(response.data.list);
}


// get active trips for a route
function stopsForRoute(r) {
    let route = r;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/stops-for-route/' + route + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotStopsForRoute,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get active trips for a route
function gotStopsForRoute(response) {
    // stopIds is an array
    console.log(response.data.entry.stopIds);
}



// get a list of all stops for an agency
function stopIdsForAgency() {

    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/stop-ids-for-agency/STA.json?key=TEST',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        contentType: "false",
        success: gotStopIdsForAgency,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

function gotStopIdsForAgency(response) {
    // list of 1600+ stop ids
    //console.log(response.data.list);
    let stops = response.data.list;

    for (ix = 0; ix < stops.length; ix++) {
        let stop = stops[ix];
        console.log(stop);
        // $("#available-stops").append("<li id='stop" + ix + "' class='stops'>" + stop + "</li>");

    }

}


// get the full schedule for a stop on a particular day
function scheduleForStop(s) {
    let stop = s; 
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/schedule-for-stop/' + stop + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotScheduleForStop,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get the full schedule for a stop on a particular day
function gotScheduleForStop(response) {
    console.log(response.data.entry.stopRouteSchedules);
}


// retrieve the current system time
function currentTime() {

    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/current-time/STA.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "json",
        success: gotCurrentTime,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

function gotCurrentTime(response) {
    // retrieve the current system time
    console.log(response.currentTime); // error
    return response.currentTime;
}


// cancel a registered alarm
function cancelAlarm(a) {
    let alarm = a;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/cancel-alarm/' + alarm + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotCancelAlarm,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// cancel a registered alarm
function gotCancelAlarm(response) {

    console.log(response);
    console.log(response.data.entry.stopRouteSchedules);
}


// search for routes near a location, optionally by route name
function routesForLocation(lat, lon) {

    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/routes-for-location.json?key=TEST&lat=' + lat + '&lon=' + lon,
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotRoutesForLocation,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// search for routes near a location, optionally by route name
// could create another version of call with route name
function gotRoutesForLocation(response) {
    console.log(response.data.list);
}


// get details for a specific stop
function stop(s) {
    let stop = s;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/stop/' + stop + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotStop,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get details for a specific stop
function gotStop(response) {
    // the routeIds have the routes for this stop
    console.log(response.data.entry);
}


// search for stops near a location, with lat, lonoptionally by stop code
function stopsForLocation(lat, lon) {
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/stops-for-location.json?key=TEST&lat=' + lat + '&lon=' + lon,
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotStopsForLocation,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// search for routes near a location
function gotStopsForLocation(response) {
    formatDate(response.currentTime);
    // an array of stops
    let stops = response.data.list;

    for (ix = 0; ix < stops.length; ix++) {
        let stop = stops[ix];
        $("#available-stops").append("<label for='" + stop.id + "' class='stops'><input id='" + stop.id + "' data-name='" + stop.name + " \(" + stop.direction + "\) - " + stop.code + "' type='checkbox' name=\"" + "stop[]" + "\" value=\"" + stop.id + "\" />" + stop.name + " (" + stop.direction + ")" + "</label><br/>");
    }
}


// get details for a specific stop
function trip(t) {
    let trip_id = t;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/trip/' + trip_id + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotTrip,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get details for a specific stop
function gotTrip(response) {
    console.log(response.data.entry);
}


// get extended details for a specific stop
function tripDetails(t) {
    let trip_id = t;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/trip/' + trip_id + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotTripDetails,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get extended details for a specific stop
function gotTripDetails(response) {
    console.log(response.data.entry);
}


// get extended trip details for current trip of a specific transit vehicle
function tripForVehicle(v) {
    let vehicle_id = v;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/trip-for-vehicle/' + vehicle_id + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotTripForVehicle,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get details for a specific stop
function gotTripForVehicle(response) {
    console.log(response.data.entry); // error, loading failed
}


// details about a specific arrival/departure at a stop
function arrivalAndDepartureForStop(sid, tid, sdate, vid, ss) {

    let stop_id = sid;
    var req = {
        key: 'TEST'
    };

    $.ajax({

        url: 'http://52.88.188.196:8080/api/api/where/arrival-and-departure-for-stop/' + stop_id + '.json' + '?key=TEST&serviceDate=' + sdate + '&tripId=' + tid + '&vehicleId=' + vid + '&stopSequence=' + ss,
        //url: 'http://52.88.188.196:8080/api/api/where/arrival-and-departure-for-stop/' + stop_id + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotArrivalAndDepartureForStop,
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// details about a specific arrival/departure at a stop
function gotArrivalAndDepartureForStop(response) {
    let ad = response.data.entry;
    $('#arrDep').append("<p id='" + ad.tripId + "' class='add'>" + "detail: " + ad.stopId + " " + ad.routeShortName + " " + ad.routeLongName + " " + status + " " + formatTime(ad.predictedArrivalTime) + "</p>");
}


// get current arrivals and departures for a stop
function arrivalsAndDeparturesForStop(sid, mb, ma) {
    let stop_id = sid;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/arrivals-and-departures-for-stop/' + stop_id + '.json' + '?minutesBefore=' + mb + '&minutesAfter=' + ma,
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: gotArrivalsAndDeparturesForStop,
        error: function (xhr, status) {
            alert("error");
        }
    });

}


function getStopName(stopId) {
    let stop = stopId;
    var req = {
        key: 'TEST'
    };

    $.ajax({
        url: 'http://52.88.188.196:8080/api/api/where/stop/' + stop + '.json',
        type: "GET",
        crossDomain: true,
        data: req,
        dataType: "jsonp",
        success: function (response) {
            // Run the code here that needs
            //    to access the data returned
            console.log("foo: " + response.data.entry.name);
            //   window.gname = response.data.entry.name;
            //   console.log("window: " + window.gname);
            return response;
        },
        error: function (xhr, status) {
            alert("error");
        }
    });

}

// get current arrivals and departures for a stop
function gotArrivalsAndDeparturesForStop(response) {

//get data from storage
var customizations = localStorage.getItem('customizations');
var stops = ((cust['stops'])[0])['short'];
var longStops = ((cust['stops'])[0])['long'];


    console.log("initialize arrivals and departures arrays");
    let arrivals = [];
    let departures = [];

    let arrDep = response.data.entry.arrivalsAndDepartures;
    let stop_id = response.data.entry.stopId;

    let name = null;

    for (ix = 0; ix < longStops.length; ix++) {
        if (stop_id === stops[ix]) name = longStops[ix];
    }

    // for (ix = 0; ix < window.selectedStops.length; ix += 2) {
    //     if (stop_id === window.selectedStops[ix]) name = window.selectedStops[ix + 1];
    // }

    if (arrDep.length > 0) {
        for (ix = 0; ix < arrDep.length; ix++) {
            let ad = arrDep[ix];

            if (ad.arrivalEnabled) {
                arrivals.push(ad);
            }
            if (ad.departureEnabled) {
                departures.push(ad);
            }
        }

        let timeDisplay = null;
        console.log(arrivals);
        console.log(departures);

        arrivals = checkArrivals(arrivals);
        departures = checkDepartures(departures);

        if (arrivals.length > 0) {
            // print arrivals to screen
            console.log("arrivals: " + arrivals);

            $('.arrivals').prepend("<div id='" + stop_id + "' class='arr'><h5>" + name + "</h5><ul></ul>");

            // check all arrivals for late arrival time - display number of minutes behind schedule
            for (ix = 0; ix < arrivals.length; ix++) {
                let a = arrivals[ix];
                let late = checkForLateAlert(a);
                timeDisplay = a.predictedArrivalTime == 0 ? formatTime(a.scheduledArrivalTime) : formatTime(a.predictedArrivalTime);
                if (a.predictedArrivalTime > 0 && ix < 9 && late != 0)
                    $(".arrivals " + "#" + stop_id + " ul").append("<li id='" + a.stopId + ix + "' class='arrive-info'>" + a.routeShortName + " " + a.routeLongName + " <span class='route-time'>" + timeDisplay + "</span>" + "<span class='arriving-late-time'>" + " " + late + "m late" + "</span></li>");
                else if (a.predictedArrivalTime > 0 && ix < 9)
                    $(".arrivals " + "#" + stop_id + " ul").append("<li id='" + a.stopId + ix + "' class='arrive-info'>" + a.routeShortName + " " + a.routeLongName + " <span class='route-time'>" + timeDisplay + "</span></li>");
                    
            } 

            // check data-latearrival and display it if exists - with color or something
            $('.arriving-late-time').css('color', 'red');
            $('.arrivals ul').css('list-style', 'none');
            $('.arrivals ul').css('margin', '0');
            $('.arrivals ul').css('padding', '0');
            $('.arrivals').append('</div>');
        }

        if (departures.length > 0) {
            // print departures to screen
            console.log("departures: " + departures);
            //$("#arrDep").append("<h5>Departures</h5>");

            $(".departures").prepend("<div id='" + stop_id + "' class='arr'><h5>" + name + "</h5><ul></ul>");

            // check all departures for departing soon - within 10 min - show 10 - 1 min left
            for (ix = 0; ix < departures.length; ix++) {
                let d = departures[ix];
                let soon = checkForDepartingSoonAlert(d);
                console.log(soon);
                timeDisplay = d.predictedDepartureTime == 0 ? formatTime(d.scheduledDepartureTime) : formatTime(d.predictedDepartureTime);
                //if (d.predictedDepartureTime > 0 && ix < 9 && soon != 0) {
                if (d.predictedDepartureTime > 0 && soon != 0) {
                    $(".departures " + "#" + stop_id + " ul").append("<li id='" + d.stopId + ix + "' class='depart-info'>" + d.routeShortName + " " + d.routeLongName + " <span class='route-time'>" + timeDisplay + "</span>"  + "<span class='departing-soon'>" + " " + soon + "m until dep" +  "</span></li>");
                    
                    let str = '';
                    let short_location = (name).split(' - ');
                    let short_route_num = (d.routeShortName).split(' ');
                    str += '<ul>';
                    str += '<li class="alerts-location">' + short_location[0] + '</li>';
                    str += '<li class="alerts-route-num custom1">' + short_route_num[0] +'</li>';
					str += '<li class="alerts-time-left">departs in ' + soon + 'min</li>';
                    str += '</ul>';
                    $('div#alerts').append(str);

                //} else if (d.predictedDepartureTime > 0 && ix < 9) {
                } else if (d.predictedDepartureTime > 0) {
                    $(".departures " + "#" + stop_id + " ul").append("<li id='" + d.stopId + ix + "' class='depart-info'>" + d.routeShortName + " " + d.routeLongName + " <span class='route-time'>" + timeDisplay + "</span></li>");
                }
            }

            // check data-latearrival and display it if exists - with color or something
            //$('.departures').css('text-overflow', 'clip');
            $('.departing-soon').css('color', 'red');
            $('.departures ul').css('list-style', 'none');
            $('.departures ul').css('margin', '0');
            $('.departures ul').css('padding', '0');
            $('.departures').append('</div>');
        }

    }
}

function checkArrivals(arrivals) {
    for (ix = 0; ix < arrivals.length; ix++) {
        let d = arrivals[ix];
        if (d.predictedArrivalTime > 0)
            return arrivals;
    }
    arrivals = [];
    return arrivals;
}

function checkDepartures(departures) {
    for (ix = 0; ix < departures.length; ix++) {
        let d = departures[ix];
        if (d.predictedDepartureTime > 0)
            return departures;
    }
    departures = [];
    return departures;
}

function checkForLateAlert(arr) {
    let late = arr.predictedArrivalTime - arr.scheduledArrivalTime
    let min = Math.floor(late/60000);
    if (min > 0) return min;  // data-arrivinglate
    else return 0;    
  }
  
  function checkForDepartingSoonAlert(dep) {
    let soon = dep.predictedDepartureTime - $.now();  // change to api currentTime
    //let soon = dep.predictedDepartureTime - currentTime();  // change to api currentTime

    let min = Math.round(soon/60000);
    console.log(min);
    if (min <= 10 && min > 0) return min; // data-departingsoon
    else return 0;
  }


// add  function registerAlarmForArrivalAndDepartureAtStop() 