<template>
    <div class="planDetails">
        <punto-details 
            :descripcion="punto.descripcion"
            :lat="punto.latitud" 
            :lng="punto.longitud" 
            :index="index" 
            @menosIndex="menosIndex" 
            @masIndex="masIndex">
        </punto-details>
    </div>
</template>

<script>
import puntoDetails from '@/components/puntoDetails.vue';

export default {

    name:'planDetails',
    props:['plan'],
    data(){

        return {

            index:0,
            punto:Object,
        }
    },
    created() {

        this.punto = this.plan['puntos'][this.index];
    },
    watch:{

        index(){

            this.punto = this.plan['puntos'][this.index];
        }
    },
    components:{

        puntoDetails,
    },
    methods: {
        
        menosIndex(){
            this.index--;
        },
        masIndex(){
            this.index++;
        }
    },
}
</script>

<style>

.planDetails {

    background-color: #00000052;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    padding:5%;
}
</style>