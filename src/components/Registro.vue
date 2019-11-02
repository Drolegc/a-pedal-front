<template>
    <div class="registro">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->
                <h2 class="inactive underlineHover"> Sign In </h2>
                <h2 class="active">Sign Up </h2>
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
        name: 'registro',
        components: {
            GoogleButton,
        }
    }
</script>

<style>
    .registro h1 {
        color: violet;
    }
</style>