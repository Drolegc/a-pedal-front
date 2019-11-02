<template>
    <div class="login">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->
                <h2 class="active"> Sign In </h2>
                <h2 class="inactive underlineHover">Sign Up </h2>
                <GoogleButton mensaje="Logueate rapido"></GoogleButton>
                <!-- Login Form -->
                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario">
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña">
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
        methods: {
            onSuccess(obj) {
                console.log(obj.getAuthResponse());
                console.log(obj.getAuthResponse().id_token);
                var usuario = obj.getBasicProfile()
                console.log("TEsting login" + usuario.getName());
                var email = usuario.getEmail();
                var data = {
                    'email': email,
                    'password': '********',
                }
                var url = 'http://localhost:8000/login/';
                var paquete = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                fetch(url, paquete).then(
                    res => res.json()
                ).catch(
                    error => console.error('Error:', error)
                ).then(function (res) {
                    console.log(res);
                });
            }
        },
        components: {
            GoogleButton,
        }
    }
</script>

<style>
   
</style>