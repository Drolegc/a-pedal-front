<template>
    <div class="login">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->
                <h2 class="active" > Sign In </h2>
                <h2 class="inactive underlineHover" @click="registro" >Sign Up </h2>
                <GoogleButton :mensaje="mensaje" @done="onSuccess"></GoogleButton>
                <!-- Login Form -->
                <form @submit.prevent="onSubmit">
                    <input v-model="email" type="text" id="login" class="fadeIn second" name="login" placeholder="Email" required>
                    <input v-model="password" type="password" id="password" class="fadeIn third" name="login" placeholder="Contraseña" required>
                    <input type="submit" class="fadeIn fourth" value="Iniciar sesión">
                </form>

                <!-- Remind Passowrd -->
                <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import GoogleButton from '@/components/GoogleButton.vue';

    export default {

        name: 'login',
        data(){
            return{
                mensaje:"Google",
                email:"",
                password:""
            }
        },
        methods: {
            onSuccess(obj) {
                var data = {
                    'token':obj['Zi']['id_token']
                }
                var url = 'http://localhost:8000/authenticate_google/';
                var paquete = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }

                var self = this

                fetch(url, paquete).then(
                    res => res.json()
                ).then(function (res) {
                    console.log("Logueo correcto");
                    localStorage.setItem("token",data['token']);
                    self.$router.push('about');
                }).catch(
                    error => console.error('Error:', error)
                );
            },
            login(obj){
                console.log("Google Object: ");
                
            },
            registro(){
                this.$store.dispatch('Change');
            },
            onSubmit(){
                this.$emit('submit');
                var url = "http://localhost:8000/login/";
                var data = {
                    email:this.email,
                    password:this.password
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
                    console.log("Usuario logueado");
                    localStorage.setItem("token",data['token']);
                    self.$router.push('about');
                }).catch(function(data){
                    console.error(data);
                    alert("Error");
                })
            }
        },
        components: {
            GoogleButton,
        }
    }
</script>

<style>
   
</style>