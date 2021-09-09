const Map = () => {
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.15, 61.38],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 11
        })

        var myPlacemark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.18, 61.38]
            }
        })
    
        myMap.geoObjects.add(myPlacemark);
    }
    
}

export default Map