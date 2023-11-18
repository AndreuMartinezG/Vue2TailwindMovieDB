<template>
    <div v-if="!searching">
        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
        <button @click="playVideo">play</button>
        <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                Unavailable
            </span>
    </div>
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