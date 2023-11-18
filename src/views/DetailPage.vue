<template>
    <div>
        <p>HOLA DESDE DETAILPAGE</p>
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
            videoResultsData: []
        }
    },

    components: {

    },

    created() {

    },

    mounted() {

        this.querryID = this.$ls.get('movieID')

        this.movieDetailSearch()
    },

    computed: {

    },

    methods: {

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