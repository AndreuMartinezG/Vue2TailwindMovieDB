
<template>
  <div :class="{ 'animate-slide-in': !searching, 'hidden': searching }">

    <!--TITULO -->
    <h1 class="font-bold pt-8 text-5xl text-gray-700" >{{searchTitle}} MOVIES</h1>

    <!-- APARTADO SELECT PARA BUSQUEDA-->
    <CustomSearch @customSearchQuerry="saveDataSearchQuerry" />

    <!-- USO DEL COMPONENTE CardTemplate PARA MOSTRAR PELICULAS-->
    <div v-if="!searching" class="grid md:grid-cols-3 gap-4 sm:gird sm:grid-cols-2 sm:gap-2 pt-10 pb-10">
      <CardTemplate v-for="(movieData, id) in movieResultsData" :key="id" :movie="movieData" :class="{ 'animate-slide-in': !searching}"/>
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
      pageCounter: 1,
      searchTitle: '',
      searching: false,
      movieData: {},
      movieResultsData: [{}],
    }
  },

  methods: {

    //GUARDAR DATOS RECIBIDOS DEL COMPONENTE HIJO "CustomSearch.vue" Y LLAMADO A LA FUNCION "newSearch()"
    saveDataSearchQuerry(data){
      this.querry = data.querry
      this.newSearch();
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

<style>

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 1.75s ease-out;
}

</style>