<template>
    <div class="sideBar">
        <div class="">
            <a class="toggler-navbar" @click="open">
                <div class="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
        </div>

        <div class="sidebar rounded">
            <ul>
                <li class="shadow-sm active rounded"><a href="">Home</a></li>
                <li class="shadow-sm rounded"><router-link to='/iniciar'>Login</router-link></li>
                <li class="shadow-sm rounded"><a href="">About</a></li>
                <li class="shadow-sm rounded"><a href="">Blog</a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    import Login from '@/components/Login.vue';

    export default {
        name: 'sideBar',
        methods: {
            action() {
                console.log("Here!");
            },
            open() {
                document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open');
                document.getElementsByClassName("sidebar")[0].classList.toggle('open');
            }
        },
        components:{
            Login,
        },
    }

</script>

<style>
    .sidebar {
        position: fixed;
        top: 60px;
        text-align: left;
        font-size: 20px;
        transform: rotate3d(0, 1, 0, 90deg);
        transform-origin: left center;
        transition: .5s;
    }

    .sidebar.open {
        transform: rotate3d(0, 0, 1, 0deg);
    }

    .sidebar ul {
        list-style: none;
    }

    .sidebar li:hover,
    .sidebar li.active {
        background: #0000003f;
    }

    .sidebar li a:hover,
    .sidebar li.active a {
        color:whitesmoke;
    }

    .sidebar li{
        background: #FBFBFA;
        margin-top:5%;
    }

    .sidebar ul{
        padding:unset;
    }

    .sidebar li a {
        color: #445261;
        text-decoration: none;
        padding: 10px 15px;
        display: block
    }

    .hamburger-menu {
        width: 30px;
        height: 30px;
        position: relative;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    .hamburger-menu span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: white;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .hamburger-menu span:nth-child(1) {
        top: 2.5px;
    }

    .hamburger-menu span:nth-child(2) {
        top: 11px;
    }

    .hamburger-menu span:nth-child(3) {
        top: 21px;
    }

    .hamburger-menu.open span:nth-child(1) {
        top: 15px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    .hamburger-menu.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    .hamburger-menu.open span:nth-child(3) {
        top: 14px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }
</style>