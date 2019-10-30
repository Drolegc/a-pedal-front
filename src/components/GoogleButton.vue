<template>
    <div class="GoogleButton">
        <div ref="signinBtn"><font-awesome-icon id="loginGoogle" :icon="['fab', 'google']" size="2x" class="icon" ></font-awesome-icon></div>
    </div>
</template>

<script>

export default {
    name:'GoogleButton',
    mounted () {
    window.gapi.load('auth2', () => {
      const auth2 = window.gapi.auth2.init({
        client_id: '430138518252-qf9umclf0ha6do6aflcvhcrc3sng0k96.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      })
      auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
        this.$emit('done', googleUser)
      }, error => console.log(error))
    })
    },
}
</script>

<style>

</style>