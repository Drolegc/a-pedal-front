<template>
  <div class="about">
    <loading v-show="cargando"></loading>
    <Header></Header>
    <GoogleMaps @mapaListo="mapaListo"></GoogleMaps>
  </div>
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue';
import Header from '@/components/header.vue';
import loading from '@/components/loading.vue';

export default {
  name:'about',
  data(){
    
    return{
      cargando:true
    }
  },
  components:{

    loading,
    GoogleMaps,
    Header,
  },
  methods:{

    mapaListo(){
      this.cargando = !this.cargando;
    }
  }
}
</script>

<style>

</style>
