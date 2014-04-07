function initialize()
 {
        var myLocation = new google.maps.LatLng(42.64204079, 25.18066406);
        var pliska = new google.maps.LatLng(43.3625303, 27.1255402);

        var mapOptions = {
            center: myLocation,
            zoom: 7,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            streetViewControl: false
        };

        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var image = '../images/marker.png';

        var marker = new google.maps.Marker({
            position: pliska,
            map: map,
            title: "My hometown-Pliska",
            animation: google.maps.Animation.DROP,
            icon: image
        });

        var windowContent = '<div id="e1-info"><h1>IIT Building: E1</h1><p>10 West 32nd Street<br>Chicago, IL 60616<br>Phone: 312.567.3175</p></div>';

        var infowindow = new google.maps.InfoWindow({
            content: windowContent
        });

        google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map, marker);
        })

}

    