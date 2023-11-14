
<template>
  <div v-if="!searching" class="grid md:grid-cols-3 gap-4 sm:gird sm:grid-cols-2 sm:gap-2 pt-10">
      <CardTemplate v-for="(movieData, id) in movieResultsData" :key="id" :movie="movieData"/>
      <h1 v-if="searching">LOAGING....</h1>
  </div>
</template>

<script>
import CardTemplate from '@/components/CardTemplate.vue';
import { API_KEY, API_URL } from '../configMovies';

export default {
  name: 'MoviesPage',
  components: {
      CardTemplate

  },


  data() {

      return {
          searching: false,
          movieData: {},
          movieResultsData: [{}],
      }

  },

  methods: {

      //FETCH DE PELICULAS POPULARES
      newSearch() {

          this.searching = true
          const options = {
              method: 'GET',
              headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer ' + API_KEY
              }
          };
          fetch(API_URL + 'movie/popular?language=en-US&page=1', options)
              .then(response => response.json())
              .then(movieResults => {
                  this.searching = false
                  if (movieResults) {
                      console.log("fetchRealizado")
                      this.movieResultsData = movieResults.results
                      console.log(this.movieResultsData)
                  } else {
                      this.image = 'http://4.bp.blogspot.com/-CuZOfJdrDKY/UYmig8q88yI/AAAAAAAAEZM/bzVtIKPhXVA/s1600/Satoshi-nakamoto.gif'
                      this.description = 'Descripción no disponible'
                      this.$parent.Url = 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1617148800'
                  }
              })

              .catch(err => console.error(err));
      }
  },

  filters: {
  },

  mounted() {
      this.newSearch()
  }
}
</script>
