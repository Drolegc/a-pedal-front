<template>
    <div class="puntoDetails">
        <div class="card">
            <img :src="img" alt="punto-detail-img" class="card-img">
            <div class="card-body">
                <p class="card-text">{{descripcion}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'puntoDetails',
    props:['img','descripcion']
}

</script>

<style>


</style>