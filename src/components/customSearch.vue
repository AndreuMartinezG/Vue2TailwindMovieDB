<template>
    <div>
        <div v-if="!tvshowoption" class="flex px-4 pt-8 xs:justify-center sm:justify-center md:justify-end lg:justify-end">
            <select v-model="querry" @change="sendDataToFather" id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Choose an option</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="upcoming">Upcoming</option>
                <option value="now_playing">Now Playing</option>
            </select>
        </div>
        <div v-if="tvshowoption" class="flex px-4 pt-8 xs:justify-center sm:justify-center md:justify-end lg:justify-end">
            <select v-model="querry" @change="sendDataToFather" id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option disabled selected>Choose an option</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="on_the_air">On The Air</option>
                <option value="airing_today">Airing Todat </option>
            </select>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CustomSeach',

    data() {
        return {
            querry: 'Choose an option',
            tvshowoption: false
        }
    },

    methods: {
        sendDataToFather() {
            this.$emit('customSearchQuerry', { querry: this.querry });
        }
    },

    created() {
        this.tvshowoption = this.$ls.get('tvshowOption')
    },
    mounted() {

    }
}

</script>