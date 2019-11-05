<template>
    <div class="googlemap">
        <div id="map"></div>
    </div>
</template>

<script>

    export default {
        nombre: 'googlemap',
        mounted() {
            var self = this;
            function initMap() {
                // The location of Uluru
                var uluru = { lat: -34.9000015, lng: -54.9500008 };
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById('map'), {
                        zoom: 15,
                        center: uluru,
                        disableDefaultUI: true
                    });
                // The marker, positioned at Uluru
                var marker = new google.maps.Marker({ position: uluru, map: map });

                self.$emit('mapaListo');
            };
            initMap();

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