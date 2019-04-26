        var APIKey = " AIzaSyCJZvhXuWkh9cCQ9ducjXkE2-p74GZN-44 ";



        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [{
                lat: 40.785091,
                lng: -73.968285
            }, {
                lat: 41.084045,
                lng: -73.874256
            }, {
                lat: 40.754932,
                lng: -73.984016
            }];

            var markers = locations.map(function(location, i) { //map function is a build in js which loops through and returns an array
                return new google.maps.Marker({
                    position: location, //location in marker (locations) array
                    label: labels[i % labels.length] // modulus ensures it will not go beyond range of A-z and will go from z - a instead
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, { //adding marker arrows
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }