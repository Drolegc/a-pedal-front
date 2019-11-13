<template>
    <div class="planesManagment scroll" ref="planesScroll">
        <plan v-for="plan in planes" :img="plan.imagen" :titulo="plan.titulo" :key="plan.id"></plan>
    </div>
</template>

<script>
    import Plan from '@/components/Plan.vue';

    export default {
        name: 'planesManagement',
        props: ['planes'],
        components: {

            Plan,
        },
        mounted() {
            var item = this.$refs.planesScroll;

            window.addEventListener('wheel', function (e) {

                if (e.deltaY > 0) item.scrollLeft += 100;
                else item.scrollLeft -= 100;
            });
        }
    }
</script>

<style>
    .planesManagment {
        position: absolute;
        width: 100%;
        bottom: 4%;
        height: 25%;

        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;

    }


    ::-webkit-scrollbar {
        display: unset;
    }
/*
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }
*/
    .planesManagment .plan {
        width: 40%;
        height: 100%;
        margin: 1%;
        vertical-align: top;
        display: inline-block;
    }

    /* *********Mobile********** */
    @media only screen and (max-width: 480px) {

        .planesManagment::-webkit-scrollbar {
            display: none;
        }

        /* width de los planes*/

        .planesManagment .plan{
            width: 70%;
        }
    }
</style>