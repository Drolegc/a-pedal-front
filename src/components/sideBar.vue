<template>
    <div class="sideBar">
        <div class="">
            <a>
                <div @click="open" class="hamburger" id="hamburger-9">

                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>

                </div>
            </a>
        </div>

        <div class="collapse list-components" id="nav">
            <ul>
                <li>
                    <div class="btn btn-light">
                        <router-link to="/"><label class="options">Home</label></router-link>
                    </div>
                </li>
                <li>
                    <div class="btn btn-light">
                        <router-link to="/about"><label class="options">About</label></router-link>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

    export default {
        name: 'sideBar',
        methods: {
            action() {
                console.log("Here!");
            },
            open(obj) {
                console.log(obj.target);
                obj.target.classList.toggle('is-active');
            }
        }
    }

</script>

<style>
    .sideBar {
        position: absolute;
    }

    .sideBar div {
        margin: 5%;
    }

    .options {
        padding: 1%;
    }

    #nav {
        position: relative;
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #050505;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    /* Hamburgesa menu */

    .hamburger {
        position: relative;
        padding: 10px;
    }

    .hamburger .line {
        width: 40px;
        height: 4px;
        background-color: #ecf0f1;
        display: block;
        margin: 8px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .hamburger:hover {
        cursor: pointer;
    }

    /* NINE */

    #hamburger-9 {
        position: relative;
        padding: 2%;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #hamburger-9.is-active {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    #hamburger-9:before {
        content: "";
        position: absolute;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 70px;
        height: 70px;
        border: 5px solid transparent;
        top: calc(50% - 35px);
        left: calc(50% - 35px);
        border-radius: 100%;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    #hamburger-9.is-active:before {
        border: 5px solid #ecf0f1;
    }

    #hamburger-9.is-active .line {
        width: 35px;
    }

    #hamburger-9.is-active .line:nth-child(2) {
        opacity: 0;
    }

    #hamburger-9.is-active .line:nth-child(1) {
        -webkit-transform: translateY(13px);
        -ms-transform: translateY(13px);
        -o-transform: translateY(13px);
        transform: translateY(13px);
    }

    #hamburger-9.is-active .line:nth-child(3) {
        -webkit-transform: translateY(-13px) rotate(90deg);
        -ms-transform: translateY(-13px) rotate(90deg);
        -o-transform: translateY(-13px) rotate(90deg);
        transform: translateY(-13px) rotate(90deg);
    }
</style>