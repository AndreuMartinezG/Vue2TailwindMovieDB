<template>
    <div class="flex flex-col w-2/3 justify-center items-center">
        <div class="flex w-full pt-4 justify-start">
            <a href="/movies" @click="backOption"
                class="w-24 inline-flex justify-center items-center px-1 py-2 text-sm font-medium text-center focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-400 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800">

                <svg class="w-2 h-2 mr-1 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                </svg> Go back
            </a>
        </div>
        <div class="flex flex-grow w-full pt-1 justify-center">

            <h1 class="font-bold text-5xl text-gray-700 w-2/3" :class="{ 'animate-slide-in': !searching }">
                {{ resultsData.title }}</h1>
        </div>
        <div :style="{ backgroundImage: `url(${backgroundUrl})` }"
            class="bg-cover bg-no-repeat bg-center flex flex-col flex-grow w-full h-full my-8 rounded-lg border  shadow  dark:border-gray-700">

            <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200   sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full">
                    <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats"
                        aria-selected="false"
                        class="inline-block w-full p-4 rounded-ss-md hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
                </li>
                <li class="w-full">
                    <button id="trailer-tab" data-tabs-target="#trailer" type="button" role="tab" aria-controls="trailer"
                        aria-selected="false"
                        class="inline-block w-full p-4 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Trailer</button>
                </li>
                <li class="w-full">
                    <button id="overview-tab" data-tabs-target="#overview" type="button" role="tab" aria-controls="overview"
                        aria-selected="true"
                        class="inline-block w-full p-4 rounded-se-md hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Overview</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="  border-gray-200 dark:border-gray-600">
                <div class="hidden p-4 md:p-8 bg-gray-800 bg-opacity-70 rounded-es-lg rounded-ee-lg" id="stats"
                    role="tabpanel" aria-labelledby="stats-tab">
                    <dl
                        class="max-w-screen-xl p-4 mx-auto divide-y divide-gray-200 dark:divide-gray-700 text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                        <div class="flex flex-col items-center justify-center">

                            <dt class="mb-2 text-3xl font-extrabold">Developers</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                            <span
                                class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                                Unavailable
                            </span>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                        </div>
                    </dl>
                </div>
                <div class="hidden " id="trailer" role="tabpanel" aria-labelledby="trailer-tab">
                    <div class="flex items-center justify-center pt-10">
                        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
                    </div>
                </div>
                <div class="hidden " id="overview" role="tabpanel" aria-labelledby="overview-tab">
                    <div class="flex flex-col items-center justify-center pt-10 h-full bg-gray-800 bg-opacity-70">

                        <h4 class="animate-fade-in text-2xl cursi p-10 dark:text-white italic">
                            "{{ resultsData.tagline }}"
                        </h4>
                        <span class="text-white italic m-5">{{ resultsData.overview }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { IMAGE_BASE_URL, IMAGE_SIZE } from '@/configMovies'
import { API_KEY, API_URL } from '../configMovies';

export default {
    name: 'DetailPage',

    data() {

        return {
            querryID: 0,
            searching: false,
            resultsData: '',
            videoResultsData: [],
            videoId: '',
            backgroundUrl: ''
        }
    },

    components: {

    },

    created() {
        this.querryID = this.$ls.get('movieID')
    },

    mounted() {

        this.movieDetailSearch()
    },

    computed: {
        player() {
            return this.$refs.youtube.player
        }
    },

    methods: {
        backOption() {

            this.$ls.set('backOption' , true)
        },

        playVideo() {
            this.player.playVideo()
        },
        playing() {
            console.log('o/ we are watching!!!')
        },

        movieDetailSearch() {
            this.searching = true

            //DEFINICIÓN DEL HEADER PARA LA LLAMADA A LA API
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + API_KEY
                }
            };

            //FETCH PARA TRAER LOS DETALLES DE LA PELICULA
            fetch(API_URL + 'movie/' + this.querryID + '?language=en-US', options)
                .then(response => response.json())
                .then(detailResult => {
                    if (detailResult) {
                        this.resultsData = detailResult
                        this.backgroundUrl = IMAGE_BASE_URL + IMAGE_SIZE + this.resultsData.backdrop_path
                        console.log(this.resultsData)
                    } else {
                        this.image = 'http://4.bp.blogspot.com/-CuZOfJdrDKY/UYmig8q88yI/AAAAAAAAEZM/bzVtIKPhXVA/s1600/Satoshi-nakamoto.gif'
                        this.description = 'Descripción no disponible'
                        this.$parent.Url = 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1617148800'
                    }
                })
                //TRATAMIENTO DE ERRORES DEL FETCH
                .catch(err => console.error(err));


            //FETCH AL ENDPOINT DE LA API DE MOVIE DB PARA TRAER LOS VIDEOS RELACIONADOS CON LA PELÍCULA
            fetch(API_URL + 'movie/' + this.querryID + '/videos?language=en-US', options)
                .then(response => response.json())
                .then(videoDetailResult => {
                    if (videoDetailResult) {

                        this.videoResultsData = videoDetailResult.results.filter(video => video.type === "Trailer");
                        this.videoId = this.videoResultsData[0].key
                        console.log(this.videoResultsData)
                    } else {
                        this.image = 'http://4.bp.blogspot.com/-CuZOfJdrDKY/UYmig8q88yI/AAAAAAAAEZM/bzVtIKPhXVA/s1600/Satoshi-nakamoto.gif'
                        this.description = 'Descripción no disponible'
                        this.$parent.Url = 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1617148800'
                    }
                })
                //TRATAMIENTO DE ERRORES DEL FETCH
                .catch(err => console.error(err));
            this.searching = false
        }


    },
}
</script>