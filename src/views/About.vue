<template>
  <div class="about">
    <loading v-show="cargando"></loading>
    <Header></Header>
    <GoogleMaps :puntos="puntos" @mapaListo="mapaListo"></GoogleMaps>
    <planes-managment :planes="planes"></planes-managment>
  </div>
</template>

<script>
//Components
import GoogleMaps from '@/components/GoogleMaps.vue';
import Header from '@/components/header.vue';
import loading from '@/components/loading.vue';
import planesManagment from '@/components/PlanesManagment.vue';

//Utils
import getPuntos from '@/utils/getPuntos.js';
import getPlanes from '@/utils/getPlanes.js';


export default {
  name:'about',
  data(){
    
    return{
      cargando:true,
      puntos:[],
      planes:[],
    }
  },
  created(){
    
    var self = this;
    getPuntos().then(
      function(data){
        self.puntos = data['results'];
      }
    );

    getPlanes().then(
      function(data){
        self.planes = data['results'];
      }
    );
  },
  components:{

    loading,
    GoogleMaps,
    Header,
    planesManagment,
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
