<template>
  <div class="about">
    <sideBar></sideBar>
    <GoogleMaps></GoogleMaps>
    <!--
    <login></login>
    -->
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import GoogleMaps from '@/components/GoogleMaps.vue';
import sideBar from '@/components/sideBar.vue';

export default {
  name:'about',
  components:{
    Login,
    GoogleMaps,
    sideBar,
  },
}
</script>

<style>

</style>
