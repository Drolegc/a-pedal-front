<template>
  <div class="about">
    <loading v-show="cargando"></loading>
    <Header></Header>
    <GoogleMaps :puntos="puntos" @mapaListo="mapaListo"></GoogleMaps>
  </div>
</template>

<script>
import GoogleMaps from '@/components/GoogleMaps.vue';
import Header from '@/components/header.vue';
import loading from '@/components/loading.vue';
import getPuntos from '@/utils/getPuntos.js';

export default {
  name:'about',
  data(){
    
    return{
      cargando:true,
      puntos:[]
    }
  },
  created(){
    
    var self = this;
    getPuntos().then(
      function(data){
        self.puntos = data['results'];
        console.log(self.puntos);
      }
    );
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
