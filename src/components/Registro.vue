<template>
    <div class="registro">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->
                <h2 class="inactive underlineHover" @click="login"> Sign In </h2>
                <h2 class="active">Sign Up </h2>
                <GoogleButton :mensaje="mensaje" @done="registro"></GoogleButton>
                <!-- Login Form -->
                <form @submit.prevent="onSubmit">
                    <input v-model="usuario" type="text" id="usuario" class="fadeIn second" name="login" placeholder="Usuario">
                    <input v-model="password" type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña">
                    <input v-model="password_conf" type="password" id="password_confirmation" class="fadeIn fourth" name="login" placeholder="Confirmacion">
                    <input v-model="email" type="email" id="email" class="fadeIn five" name="login" placeholder="Email">
                    <input type="submit" class="fadeIn six" value="Confirmar">
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    import GoogleButton from '@/components/GoogleButton.vue';

    export default {

        name: 'registro',
        data(){
            return{
                mensaje:"Google",
                usuario:"",
                password:"",
                password_conf:"",
                email:""
            }
        },
        components: {
            GoogleButton,
        },
        methods:{

            login(){
                console.log("login function");
                this.$store.dispatch('Change');
            },
            onSubmit(){
                var url = 'http://localhost:8000/signup/';
                var data = {
                    username:this.usuario,
                    password:this.password,
                    password_conf:this.password_conf,
                    email:this.email
                }
                var paquete = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                fetch(url,paquete).then(res => res.json()
                ).then(function(data){
                    console.log(data)
                }).catch(
                    function(data){
                        alert("Error");
                    }
                )

            },
            registro(obj){
                var id_token = obj['Zi']['id_token'];
                var url = "http://localhost:8000/sign_up_google/";
                var data = {
                    'token':id_token
                }
                var paquete = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }

                var self = this

                fetch(url,paquete).then(function(res){
                    self.$emit('submit');
                    return res.json();
                }).then(function(data){
                    console.log("Usuario registrado y logueado");
                    localStorage.setItem("token",data['token']);
                    self.$router.push('about');
                }).catch(function(data){
                    console.error(data);
                    alert("Error");
                })

            }
        },
    }
</script>

<style>

</style>