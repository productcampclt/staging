      function initialize() {
        var styles = [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]}];
        var map_canvas = document.getElementById('map_canvas');
        var myLatlng = new google.maps.LatLng(35.226,-80.8441622);
        var myLatlng2 = new google.maps.LatLng(35.24,-80.8441622);
        var map_options = {
          center: myLatlng,
          zoom: 11,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles:styles,
          scrollwheel: false
        }
        var styles = {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            { visibility: 'off' }
          ]
        }
        var map = new google.maps.Map(map_canvas, map_options)
        var marker = new google.maps.Marker({
          position: myLatlng,
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          map: map,
          title:"Skookum Digital Works",
          animation: google.maps.Animation.DROP
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
