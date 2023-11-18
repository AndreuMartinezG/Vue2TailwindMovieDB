<template>
    <div class="w-2/3 m-10">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                <li class="w-full">
                    <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats"
                        aria-selected="false"
                        class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
                </li>
                <li class="w-full">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about"
                        aria-selected="true"
                        class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Services</button>
                </li>
                <li class="w-full">
                    <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq"
                        aria-selected="false"
                        class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
                </li>
            </ul>
            <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
                <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel"
                    aria-labelledby="stats-tab">
                    <dl
                        class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                        <div class="flex flex-col items-center justify-center">
                            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                            <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
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
                    </dl>
                </div>
                <div class="hidden w-auto p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about"
                    role="tabpanel" aria-labelledby="about-tab">
                    <div class="flex items-center justify-center ">
                        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
                    </div>
                </div>
                <div class="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel"
                    aria-labelledby="faq-tab">
                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button"
                                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                aria-controls="accordion-flush-body-1">
                                <span>What is Flowbite?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of
                                    interactive components built on top of Tailwind CSS including buttons, dropdowns,
                                    modals, navbars, and more.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a
                                        href="/docs/getting-started/introduction/"
                                        class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start
                                    developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button type="button"
                                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                                aria-controls="accordion-flush-body-2">
                                <span>Is there a Figma file available?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and
                                    designed using the Figma software so everything you see in the library has a design
                                    equivalent in our Figma file.</p>
                                <p class="text-gray-500 dark:text-gray-400">Check out the <a
                                        href="https://flowbite.com/figma/"
                                        class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a>
                                    based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-3">
                            <button type="button"
                                class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                                data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                                aria-controls="accordion-flush-body-3">
                                <span>What are the differences between Flowbite and Tailwind UI?</span>
                                <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                            <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core
                                    components from Flowbite are open source under the MIT license, whereas Tailwind UI is a
                                    paid product. Another difference is that Flowbite relies on smaller and standalone
                                    components, whereas Tailwind UI offers sections of pages.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both
                                    Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping
                                    you from using the best of two worlds.</p>
                                <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                    <li><a href="https://flowbite.com/pro/"
                                            class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                    <li><a href="https://tailwindui.com/" rel="nofollow"
                                            class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--

    <div v-if="!searching"
        class="w-max bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div>
            <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
        </div>
        <button @click="playVideo">play</button>
        <span
            class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
            Unavailable
        </span>
    </div>
    -->
</template>

<script>

import { API_KEY, API_URL } from '../configMovies';

export default {
    name: 'DetailPage',

    data() {

        return {
            querryID: 0,
            searching: false,
            resultsData: '',
            videoResultsData: [],
            videoId: ''
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