<template>
  <!--<CardTemplate />
  <p class="description pt-8 text-sm">{{ firstMovieName }}</p>-->
  <div class="max-w-5xl flex items-center h-auto lg:flex-grow flex-wrap mx-auto lg:my-0">
    <!--Main Col-->
    <div id="profile"
      class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100 mx-6 lg:mx-0">
      <div class="p-4 md:p-12 text-center lg:text-left">
        <!-- Image for mobile view -->
        <div class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          :style="{ 'background-image': 'url(' + image + ')' }"></div>
        <div class="form-inline flex flex-wrap content-between">

          <!--
          <span v-if="searching">
            Buscando ....
          </span>
          -->
        </div>

        <div class="form-inline flex flex-wrap content-between">
          <span class="w-2/4 pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg> Bibliografia
          </span>
          <!--
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold mt-2 py-2 px-4 border border-gray-400 rounded shadow w-2/4" @click="showModal">Ver Letra</button>
                    <Lyrics v-show="isModalVisible" @close="closeModal" :name="querry" ref="Lyrics" :songs="songs" />-->
        </div>
        <p class="description pt-8 text-sm"> {{ description | formateo }}</p>
      </div>
    </div>

    <!--Img Col-->


  </div>
</template>

<script>

//import CardTemplate from '@/components/CardTemplate.vue';
import { API_KEY, API_URL, IMAGE_BASE_URL, POSTER_SIZE} from '../configMovies';

export default {
  name: 'MoviesPage',

  components: {
    //CardTemplate,
  },

  data() {

    return {
      querry: '',
      searching: false,
      firstMovieName: '',
      image: '',
      description: '',
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
          console.log(movieResults)
          if (movieResults) {
            this.image = IMAGE_BASE_URL + POSTER_SIZE + movieResults.results[0].backdrop_path
            if (movieResults.results[0].overview) {
              this.description = movieResults.results[0].overview
            } else {
              this.description = "ERROR"
            }
            this.$parent.Url = movieResults.results[0].strArtistFanart
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
    formateo(value) {
      return value.substring(0, 700) + '...'
    }
  },

  mounted() {
    this.newSearch()
  }
}

</script>