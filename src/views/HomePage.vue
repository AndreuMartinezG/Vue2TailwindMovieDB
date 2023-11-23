
<template>
<div class="flex flex-col justify-center items-center md:mx-10 sm:mx-4 sx:mx-4 mx-4 my-10 opacity-90">
    <HomeTitle />
    <HomeBody />
</div>
</template>

<script>
import HomeTitle from '@/components/Home/HomeTitle.vue'
import HomeBody from '@/components/Home/HomeBody.vue';

export default {
    name: 'HomeView',
    components: {
    HomeTitle,
    HomeBody,
},


    data() {

        return {

        }

    },

    methods: {

        
    },

    filters: {
    },

}
</script>
