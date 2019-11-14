<template>
    <div class="plan rounded" @click="details">
        <div class="card">
            <div class="row">
                <div class="col">
                    <img :src="img" alt="plan imagen" class="card-img">
                </div>
                <div class="col">
                    <div class="card-body p-1">
                        <h5 class="card-title">{{titulo}}</h5>
                        <small class="card-text">Creado por A pedal</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'plan',
    props:['img','titulo'],
    methods: {

        details(){

            var key = this.$vnode.key;
            this.$emit("planDetails",key);
        }
    }
}

</script>

<style>

.plan{
    cursor: pointer;
}

</style>