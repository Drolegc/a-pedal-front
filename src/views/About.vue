<template>
  <div class="about">
    <Header></Header>
    <GoogleMaps></GoogleMaps>
  </div>
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue';
import Header from '@/components/header.vue';

export default {
  name:'about',
  components:{
    GoogleMaps,
    Header,
  },
}
</script>

<style>

</style>
