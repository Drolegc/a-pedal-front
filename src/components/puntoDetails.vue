<template>
    <div class="puntoDetails">
        <div class="card">
            <img src="http://localhost:8000/media/planes/dedos_fGtcC5p.jpeg" alt="punto-detail-img" class="card-img">
            <div :id="id_map">
            </div>
            <div class="card-body">
                <p class="card-text">{{descripcion}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        name: 'puntoDetails',
        props: {

            index:Number,
            descripcion:String,
            lat:Number,
            lng:Number,
        },
        data() {

            return {
                id_map: "id_".concat(this.index),
            }
        },
        watch:{

            latitud(){
                this.initMap(self);
            }
        },
        mounted(){
            this.initMap(this);
        },
        methods: {

            initMap(self) {

                var lat = self.latitud;
                console.log(lat);
                var lng = self.longitud;
                var uluru = { lat: -34.960554, lng: -54.942406 };
                // The map, centered at Uluru
                var map = new google.maps.Map(
                    document.getElementById(this.id_map), {
                        zoom: 16,
                        center: uluru,
                        disableDefaultUI: true,
                    });

                // Marcador
                var coords = { lat: -34.960554, lng: -54.942406 };
                var marker = new google.maps.Marker({ position: coords, map: map });

            }
        },
    }

</script>

<style>

#id_0{
    height: 150px;
    width: 100%;
}
</style>