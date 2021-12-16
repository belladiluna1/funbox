ymaps.ready(init);


function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7
  });

  document.getElementById('map').addEventListener('mouseup', () => {
    const center = myMap.getCenter();
    document.getElementById('geometryLat').value = center[0];
    document.getElementById('geometryLong').value = center[1];
  });

  let objects = {};

  document.getElementById('placemarks-ymaps').addEventListener('DOMNodeInserted', onAdd);
  document.getElementById('placemarks-ymaps').addEventListener('DOMNodeRemoved', onRemove);

  function onAdd(e) {
    const object = JSON.parse(e.target.dataset.placemark);
    const placemark = new ymaps.Placemark(object.geometry, {
      balloonContent: object.properties.balloonContentHeader,
      iconContent: object.properties.iconContent
    },{
      draggable: true
    });
  
    objects[object.properties.iconContent] = placemark;
    myMap.geoObjects.add(objects[object.properties.iconContent]);
    myMap.setCenter(object.geometry);
  }
  
  function onRemove(e) {
    const object = JSON.parse(e.target.dataset.placemark);
    console.log(object);
    myMap.setCenter(object.geometry);
    myMap.geoObjects.remove(objects[object.properties.iconContent]);
  }
}
