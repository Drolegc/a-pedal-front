<template>
    <div class="login">
        <google-button @done="onSuccess"></google-button>
    </div>
</template>

<script>
import GoogleButton from '@/components/GoogleButton.vue'

export default {
    name:'login',
    methods:{
        onSuccess(obj){
            var usuario = obj.getBasicProfile()
            console.log("TEsting login" + usuario.getName());
            var email = usuario.getEmail();
            var data = {
                'email':email,
                'password':'********',
            }
            var url = 'http://localhost:8000/login/';
            var paquete = {
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
            }
            fetch(url,paquete).then(
                res => res.json()
                ).catch(
                    error => console.error('Error:', error)
                ).then(function(res){
                    console.log(res);
                });
        }
    },
    components:{
        GoogleButton,
    }
}
</script>

<style>

</style>