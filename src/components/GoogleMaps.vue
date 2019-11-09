<template>
    <div class="googlemap">
        <div id="map"></div>
    </div>
</template>

<script>

    export default {
        nombre: 'googlemap',
        props:['puntos'],
        watch: {
            puntos(){
                this.initMap(this);
            }
        },
        methods:{
            initMap(self) {
                // The location of Uluru
                var uluru = { lat: -34.960554, lng: -54.942406 };
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById('map'), {
                        zoom: 14,
                        center: uluru,
                        disableDefaultUI: true,
                    });
                 
                //Agregar marcadores
                for(var punto of self.puntos){
                    console.log('en puntos');
                    var lat = punto['latitud'];
                    var long = punto['longitud'];
                    var coords = { lat: lat, lng: long};
                    var marker = new google.maps.Marker({ position: coords, map:map });
                };

                self.$emit('mapaListo');
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style>
    .googlemap{
        position:absolute;
        width: 100%;
        height: 100%;
        z-index: -1;

    }

    #map {
        height: 100%;
        width: 100%;
    }
</style>