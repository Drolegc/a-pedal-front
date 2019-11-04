<template>
    <div class="registro">
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <!-- Tabs Titles -->
                <h2 class="inactive underlineHover" @click="login"> Sign In </h2>
                <h2 class="active">Sign Up </h2>
                <GoogleButton :mensaje="mensaje"></GoogleButton>
                <!-- Login Form -->
                <form>
                    <input type="text" id="usuario" class="fadeIn second" name="login" placeholder="Usuario">
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña">
                    <input type="text" id="password_confirmation" class="fadeIn fourth" name="login" placeholder="Confirmacion">
                    <input type="email" id="email" class="fadeIn five" name="login" placeholder="Email">
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
                mensaje:"Google"
            }
        },
        components: {
            GoogleButton,
        },
        methods:{

            login(){
                console.log("login function");
                this.$store.dispatch('Change');
            }
        },
    }
</script>

<style>

</style>