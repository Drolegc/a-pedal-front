<template>
    <div class="sesion">
        <div>
            <Login v-if="mostrarLogin"></Login>
            <Registro v-else></Registro>
        </div>
    </div>
</template>
<script>
import Login from '@/components/Login.vue';
import Registro from '@/components/Registro.vue';

export default {
    name:'sesion',
    data(){
        return{
            mostrarLogin: true,
        }
    },
    components:{
        Login,
        Registro,
    },
}
</script>