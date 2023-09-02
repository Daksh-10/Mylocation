function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&key=YOUR_KEY`;


  document.getElementById("mapholder").innerHTML = "<img src="+img_url+">";
}

 navigator.geolocation.getCurrentPosition(showPosition);