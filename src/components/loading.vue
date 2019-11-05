<template>
    <div class="loading">
        <div class="load-wrapp">
            <div class="load-3">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'loading',
    }
</script>

<style>
    .loading {
        position: absolute;
        width: 100%;
        height: 100vh;
        z-index: 1;
        padding-top: 14.5%;
        padding-left: 49%;
        background-color: #00000052;
    }

    .line {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 15px;
        background-color: #e0f1ff;
    }

    .load-3 .line:nth-last-child(1) {
        animation: loadingC .6s .1s linear infinite;
    }

    .load-3 .line:nth-last-child(2) {
        animation: loadingC .6s .2s linear infinite;
    }

    .load-3 .line:nth-last-child(3) {
        animation: loadingC .6s .3s linear infinite;
    }

    @keyframes loadingC {
        
        0 {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(0, 15px);
        }

        100% {
            transform: translate(0, 0);
        }
    }
</style>