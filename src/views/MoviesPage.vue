
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
          <li >
            <a href="#" @click="sendDataToFather(0)" :class="{'hidden' : minPage}"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
              <span  class="sr-only">Previous</span>
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />
              </svg>
            </a>
          </li>

          <!--BOTÓN CON NUMBER PAGE-->
          <li>
            <a href="#" @click="sendDataToFather(1)"
              class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              :class=" {
                'dark:bg-gray-700 ms-0 border border-e-0 rounded-s-lg' : activePage.page1,
                'dark:bg-gray-800': !activePage.page1
              }">1
            </a>
          </li>
          <li>
            <a href="#" @click="sendDataToFather(2)"
            class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              :class=" {
                'dark:bg-gray-700' : activePage.page2,
                'dark:bg-gray-800': !activePage.page2
              }">2
            </a>
          </li>
          <li>
            <a href="#" @click="sendDataToFather(3)"
            class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              :class=" {
                'dark:bg-gray-700' : activePage.page3,
                'dark:bg-gray-800': !activePage.page3
              }">3
            </a>
          </li>
          <li>
            <a href="#" @click="sendDataToFather(4)"
            class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              :class=" {
                'dark:bg-gray-700' : activePage.page4,
                'dark:bg-gray-800': !activePage.page4
              }">4</a>
          </li>
          <li>
            <a href="#" @click="sendDataToFather(5)"
            class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              :class=" {
                'dark:bg-gray-700 ms-0 border border-s-0 rounded-e-lg' : activePage.page5,
                'dark:bg-gray-800': !activePage.page5
              }">5</a>
          </li>

          <!--BOTÓN NEXT PAGE-->
          <li>
            <a href="#" @click="sendDataToFather(6)" :class="{'hidden' : maxPage}"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
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
      maxPage: false,
      minPage: false,
      activePage: [
        this.page1 = false,
        this.page2 = false,
        this.page3 = false,
        this.page4 = false,
        this.page5 = false
      ],

      searchTitle: '',
      searching: false,
      movieData: {},
      movieResultsData: [{}],
    }
  },

  methods: {

    sendDataToFather(pageNumber){

      this.paginationProcess(pageNumber)

    },

    //METODO PARA FILTRAR Y SELECCIONAR LA PAGINACIÓN SELECCIONADA
    paginationProcess(pageNumberSelected){
      switch (pageNumberSelected) {
        case 0:
          console.log(this.pageCounter + " PAGE COUNTER")
          if (this.pageCounter <= 1) {
            this.pageCounter = 1
            this.minPage = true
          }else{
            this.pageCounter = this.pageCounter - 1
            this.minPage = false
          }
          break;

        case 6:
          if (this.pageCounter >= 5) {
            this.pageCounter = 5
            this.maxPage = true
          }else{
            this.pageCounter = this.pageCounter + 1
            this.maxPage = false
          }
          break;

        default:
          this.pageCounter = pageNumberSelected

      }
      this.newSearch()
    },

    //PEQUEÑA FUNCION PARA ACTUALIZAR LA VARIABLES DE PAGINATION BAR
    pageCounterUpdate(pageCounter){
      
      //ESTAMOS EN LA PAGINA 1 ?
      if (pageCounter <= 1){
        this.minPage = true
        this.activePage.page1 = true
      }else {
        this.minPage = false
        this.activePage.page1 = false
      }

      //ESTAMOS EN LA PAGINA 2 ?
      if (pageCounter == 2){
        this.activePage.page2 = true
      }else {
        this.activePage.page2 = false
      }

      //ESTAMOS EN LA PAGINA 3 ?
      if (pageCounter == 3){
        this.activePage.page3 = true
      }else {
        this.activePage.page3 = false
      }

      //ESTAMOS EN LA PAGINA 4 ?
      if (pageCounter == 4){
        this.activePage.page4 = true
      }else {
        this.activePage.page4 = false
      }


      //ESTAMOS EN LA PAGINA 5 ?
      if (pageCounter >= 5){
        this.maxPage = true
        this.activePage.page5 = true
      }else {
        this.maxPage = false
        this.activePage.page5 = false
      }
    },

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
          this.pageCounterUpdate(this.pageCounter)
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