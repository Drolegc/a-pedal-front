<template>
    <div class="planDetails">
        <punto-details v-for="punto in plan.puntos" :img="punto.imagen" :descripcion="punto.descripcion"></punto-details>
    </div>
</template>

<script>
import puntoDetails from '@/components/puntoDetails.vue';

export default {

    name:'planDetails',
    props:['plan'],
    components:{

        puntoDetails,
    }
}
</script>

<style>

.planDetails {

    background-color: #00000052;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
}
</style>