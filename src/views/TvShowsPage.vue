
<template>
    <div>
  
      <!--TÍTULO-->
      <h1 class="font-bold pt-8 text-5xl text-gray-700" :class="{ 'animate-slide-in': !searching, 'hidden': searching }">
        {{ searchTitle }} TV SHOWS</h1>
  
      <!--APARTADO SELECT PARA BUSQUEDA-->
      <CustomSearch @customSearchQuerry="saveDataSearchQuerry" :class="{ 'hidden': searching }"/>
  
      <!--USO DEL COMPONENTE CardTemplate PARA MOSTRAR PELÍCULAS-->
      <div v-if="!searching" class="grid md:grid-cols-3 gap-4 sm:gird sm:grid-cols-2 sm:gap-2 pt-10 pb-10">
        <CardTemplate 
          @cardSearchQuerry="saveCardSearchQuerry" 
          v-for="(movieData, id) in filteredtvshowsResultsData" :key="id"
          :movie="movieData" 
          :class="{ 'animate-fade-in': !searching, 'hidden': searching }" />
      </div>
  
      <!--APARTADO PARA EL SISTEMA DE PAGINACIÓN-->
      <PaginationBar @pageQuerry="savePageQuerry" :class="{ 'hidden': searching }" :page="pageCounterUpdater"/>
  
    </div>
  </template>
  
  <script>
  
  import CardTemplate from '@/components/CardTemplate.vue';
  import { API_KEY, API_URL } from '../configMovies';
  import CustomSearch from '@/components/CustomSearch.vue';
  import PaginationBar from '@/components/PaginationBar.vue';
  
  export default {
    name: 'TvShowPage',
  
    components: {
      CardTemplate,
      CustomSearch,
      PaginationBar
  },
  
    data() {
  
      return {
        querry: 'popular',
        cardtvshowsId: '',
        pageCounter: 1,
        pageCounterUpdater: 1,
        searchTitle: '',
        searching: false,
        tvshowsData: {},
        tvshowsResultsData: [{}],
      }
    },
  
    computed: {
  
      filteredtvshowsResultsData() {
        return this.tvshowsResultsData.filter(tvshow => tvshow.backdrop_path !== null);
      }
  
    },
  
    methods: {
  
      //GUARDAR PAGINA ACTUAL RECIBIDA POR EL COMPONENTE DE PAGINACIÓN
      savePageQuerry(data) {
        this.pageCounter = data.pageQuerry
        this.newSearch();
      },
  
      //GUARDAR DATOS RECIBIDOS DEL COMPONENTE HIJO "CustomSearch.vue" Y LLAMADO A LA FUNCION "newSearch()"
      saveDataSearchQuerry(data) {
        this.querry = data.querry
        this.pageCounterUpdater = 1
  
        
        this.newSearch();
      },
  
      //GUARDAR LA ID DE LA PELICULA RECIBIDA DEL COMPONENTE HIJO "CardTemplate.vue""
      saveCardSearchQuerry(data) {
        this.cardtvshowsId = data.cardQuerry
        this.$ls.set('tvshowID' , data.cardQuerry)
        this.$ls.set('tvshowPage' , this.pageCounter)
        this.$ls.set('tvshowList' , this.querry)
        //this.$router.push({ path: '/', replace: false })
        this.$router.push({ path: `/tvshows/${this.cardtvshowsId}` })
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
        fetch(API_URL + 'tv/' + this.querry + '?language=en-US&page=' + this.pageCounter, options)
          .then(response => response.json())
          .then(tvshowsResults => {
            console.log(this.pageCounter)
            this.searching = false
            this.searchTitle = this.convertToUpperCase(this.querry)
            if (tvshowsResults) {
              this.tvshowsResultsData = tvshowsResults.results
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
      if (this.$ls.get('tvshowbackOption')) {
        this.querry = this.$ls.get('tvshowList')
        this.pageCounter = this.$ls.get('tvshowPage')  
        this.$ls.set('tvshowbackOption', false)
        this.newSearch()
      }else {
        //CUANDO ESTA MONTADO EL COMPONENTE REALIZAMOS UNA PRIMERA BUSQUEDA LLAMANDO A LA FUNCION "newSearch()"
        this.newSearch()
      }
    },
    created() {
        this.$ls.set('tvshowOption' , true)
    },
    updated(){
      
      if(this.pageCounter != this.pageCounterUpdater ){
        this.newSearch()
        this.pageCounterUpdater = this.pageCounter 
      }
      
    }
  }
  </script>