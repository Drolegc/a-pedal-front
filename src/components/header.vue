<template>
    <div class="header">
        <div class="child rounded-lg shadow-sm">
            <header>
            <sideBar class="ml-0"></sideBar>
            <h3 class="m-auto">Some header</h3>
        </header>
    </div>
    </div>
</template>

<script>

import sideBar from '@/components/sideBar.vue';

export default {
    name:'Header',
    components:{
        sideBar,
    }
}
</script>

<style>

.header{
    position:absolute;
    width: 100%;
    padding:1%;
}

.header .child{
    /*background-color: -webkit-linear-gradient(left,transparent 0%,#fff 50%,transparent 100%);*/
    background: linear-gradient(90deg, #2C8DFE 0.53%, #3997FB 36.09%, #9DD6FF 74.3%, #B2F6FF 101.9%);
}

.header .child header{
    display: flex;
    flex-direction: row;
}

.header h3{
    color: whitesmoke;
}

</style>