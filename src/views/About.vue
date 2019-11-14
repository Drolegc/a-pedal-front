<template>
  <div class="about">
    <!-- Modales -->
    <loading v-show="cargando"></loading>
    <plan-details v-if="detailsModal.status" :plan="detailsModal.info"></plan-details>
    <!-- /Modales -->
    <Header></Header>
    <GoogleMaps :puntos="puntos" @mapaListo="mapaListo"></GoogleMaps>
    <planes-managment :planes="planes" @details="planDetails"></planes-managment>
  </div>
</template>

<script>
//Components
import GoogleMaps from '@/components/GoogleMaps.vue';
import Header from '@/components/header.vue';
import loading from '@/components/loading.vue';
import planesManagment from '@/components/PlanesManagment.vue';
import planDetails from '@/components/planDetails.vue';

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
      detailsModal:{
        status:false,
        info:Object
      },
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
    planDetails,
  },
  methods:{

    mapaListo(){
      this.cargando = !this.cargando;
    },
    planDetails(key){
      for(var plan of this.planes){
        if(plan['id'] == key){
          this.detailsModal['info'] = plan;
          this.detailsModal['status'] = !this.detailsModal['status'];
        }
      }

    }
  }
}
</script>

<style>

</style>
