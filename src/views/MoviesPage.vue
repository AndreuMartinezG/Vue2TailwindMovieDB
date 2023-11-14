
<template>
  <div>

    <!--TITULO -->
    <h1 class="font-bold pt-8 text-3xl text-gray-800">{{searchTitle}} MOVIES</h1>

    <!-- APARTADO SELECT PARA BUSQUEDA-->
    <div class="flex px-4 pt-8 xs:justify-center sm:justify-center md:justify-end lg:justify-end">
      <select v-model="querry" @change="newSearch" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option disabled selected>Choose an option</option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="now_playing">Now Playing</option>
      </select>
    </div>

    <!-- USO DEL COMPONENTE CardTemplate PARA MOSTRAR PELICULAS-->
    <div v-if="!searching" class="grid md:grid-cols-3 gap-4 sm:gird sm:grid-cols-2 sm:gap-2 pt-10 pb-10">
      <CardTemplate v-for="(movieData, id) in movieResultsData" :key="id" :movie="movieData" />
    </div>

    <!--PEQUEÑO COMPONENTE DE LOADING MIENTRAS TERMINA EL LLAMADO A LA API-->
    <div v-if="searching" class="w-screen h-auto flex justify-center items-center">
      <h1 class="text-7xl font-bold pt-10">LOADING....</h1>
    </div>
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
      querry: 'popular',
      searchTitle: '',
      searching: false,
      movieData: {},
      movieResultsData: [{}],
    }

  },

  methods: {

    convertToUpperCase(inputString) {
      return inputString.toUpperCase().replace('_', ' ');
    },

    //FETCH DE PELICULAS DINAMICO 
    newSearch() {
      this.searching = true
      this.searchTitle = this.convertToUpperCase(this.querry)
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + API_KEY
        }
      };
      console.log(this.querry)
      fetch(API_URL + 'movie/' + this.querry + '?language=en-US&page=1', options)
        .then(response => response.json())
        .then(movieResults => {
          this.searching = false
          if (movieResults) {
            this.movieResultsData = movieResults.results
          } else {
            this.image = 'http://4.bp.blogspot.com/-CuZOfJdrDKY/UYmig8q88yI/AAAAAAAAEZM/bzVtIKPhXVA/s1600/Satoshi-nakamoto.gif'
            this.description = 'Descripción no disponible'
            this.$parent.Url = 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1617148800'
          }
        })
      .catch(err => console.error(err));
    },
  },

  filters: {
  },

  mounted() {
    this.newSearch()
  }
}
</script>
