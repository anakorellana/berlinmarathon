const fiveK = [
  [13.346143288943722, 52.52496242002357],   
  [13.409714834361097, 52.528737171607474],
  [13.418607573000685,52.49920138500366],
  [13.37844028255779,52.49208668085106],
  [13.335082239010461,52.4713287448937],
  [13.287649275929738,52.48089184059887],  
  [13.33782233345974,52.50368196777836],
  [13.396534737601343,52.510864867691424],
  [13.380996252658974,52.5165768467983],

  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5ha29yZWxsYW5hIiwiYSI6ImNsNjJxbzR0cDBobmIzanFrc3c3MWtwaDgifQ.NomCBcgw5zkeA-Nwz6Rr4w';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [13.38336999693854,52.51655856199653],
    zoom: 12,
  });
  
   var marker = new mapboxgl.Marker()
      .setLngLat([13.380996252658974,52.5165768467983])
      .addTo(map);
     
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {

    setTimeout(() => {
      if(counter >= fiveK.length) return;
      marker.setLngLat(fiveK[counter]);
      counter ++;
      move();
    }, 6000);
    //setTimeout(move, 3000);
   
    }  
  
  
    // move()