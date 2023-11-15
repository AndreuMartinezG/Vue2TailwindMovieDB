
<template>
  <div>

    <!--TÍTULO-->
    <h1 class="font-bold pt-8 text-5xl text-gray-700" :class="{ 'animate-slide-in': !searching, 'hidden': searching }">
      {{ searchTitle }} MOVIES</h1>

    <!--APARTADO SELECT PARA BUSQUEDA-->
    <CustomSearch @customSearchQuerry="saveDataSearchQuerry" :class="{ 'hidden': searching }"/>

    <!--USO DEL COMPONENTE CardTemplate PARA MOSTRAR PELÍCULAS-->
    <div v-if="!searching" class="grid md:grid-cols-3 gap-4 sm:gird sm:grid-cols-2 sm:gap-2 pt-10 pb-10">
      <CardTemplate @cardSearchQuerry="saveCardSearchQuerry" v-for="(movieData, id) in movieResultsData" :key="id"
        :movie="movieData" :class="{ 'animate-fade-in': !searching, 'hidden': searching }" />
    </div>

    <!--APARTADO PARA EL SISTEMA DE PAGINACIÓN-->
    <div class="flex justify-center py-8" :class="{ 'hidden': searching }">
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-10 text-base">

          <!--BOTÓN PREVIOUS PAGE-->
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Previous</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>

          <!--BOTÓN CON NUMBER PAGE-->
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page"
              class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>

          <!--BOTÓN NEXT PAGE-->
          <li>
            <a href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span class="sr-only">Next</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>

import CardTemplate from '@/components/CardTemplate.vue';
import { API_KEY, API_URL } from '../configMovies';
import CustomSearch from '@/components/CustomSearch.vue';

export default {
  name: 'MoviesPage',

  components: {
    CardTemplate,
    CustomSearch
  },

  data() {

    return {
      querry: 'popular',
      cardMovieId: '',
      pageCounter: 1,
      searchTitle: '',
      searching: false,
      movieData: {},
      movieResultsData: [{}],
    }
  },

  methods: {

    //GUARDAR DATOS RECIBIDOS DEL COMPONENTE HIJO "CustomSearch.vue" Y LLAMADO A LA FUNCION "newSearch()"
    saveDataSearchQuerry(data) {
      this.querry = data.querry
      this.newSearch();
    },

    ////GUARDAR DATOS RECIBIDOS DEL COMPONENTE HIJO "CardTemplate.vue" Y LLAMADO A LA FUNCION "customSearch()"
    saveCardSearchQuerry(data) {
      this.cardMovieId = data.cardQuerry
      console.log(this.cardMovieId)
    },

    //FUNCION PARA LIMPIAR UNA STRING PARA EL TITULO
    convertToUpperCase(inputString) {
      return inputString.toUpperCase().replace('_', ' ');
    },

    //FETCH DE PELICULAS DINAMICO A LA API DE MOVIE DB
    newSearch() {
      this.searching = true

      //DEFINICIÓN DEL HEADER PARA LA LLAMADA A LA API
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + API_KEY
        }
      };

      //FETCH AL ENDPOINT DE LA API DE MOVIE DB
      fetch(API_URL + 'movie/' + this.querry + '?language=en-US&page=' + this.pageCounter, options)
        .then(response => response.json())
        .then(movieResults => {
          this.searching = false
          this.searchTitle = this.convertToUpperCase(this.querry)
          if (movieResults) {
            this.movieResultsData = movieResults.results
          } else {
            this.image = 'http://4.bp.blogspot.com/-CuZOfJdrDKY/UYmig8q88yI/AAAAAAAAEZM/bzVtIKPhXVA/s1600/Satoshi-nakamoto.gif'
            this.description = 'Descripción no disponible'
            this.$parent.Url = 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1617148800'
          }
        })
        //TRATAMIENTO DE ERRORES DEL FETCH
        .catch(err => console.error(err));
    },
  },

  filters: {
  },

  mounted() {

    //CUANDO ESTA MONTADO EL COMPONENTE REALIZAMOS UNA PRIMERA BUSQUEDA LLAMANDO A LA FUNCION "newSearch()"
    this.newSearch()
  }
}
</script>