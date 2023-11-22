<template>
  <div class="flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-200 hover:duration-200 m-4">
    
    <img class="rounded-t-lg shadow" :src="imgPath" alt="Movie Poster" />
    
    <div class="p-5 flex flex-col flex-grow">

      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ movie.title || movie.name}}</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ movie.overview | formateo }}</p>

      <!-- RATING EN ESTRELLAS-->
      <div class="flex flex-grow justify-center items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <svg class="w-4 h-4 " :class="{ 'star-active': averageStarsActive[0], 'star-inactive': !averageStarsActive[0] }"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4" :class="{ 'star-active': averageStarsActive[1], 'star-inactive': !averageStarsActive[1] }"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4" :class="{ 'star-active': averageStarsActive[2], 'star-inactive': !averageStarsActive[2] }"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4" :class="{ 'star-active': averageStarsActive[3], 'star-inactive': !averageStarsActive[3] }"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg class="w-4 h-4" :class="{ 'star-active': averageStarsActive[4], 'star-inactive': !averageStarsActive[4] }"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span
          class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{{ totalStars }}
          out of 10</span>
      </div>

      <!--BOTON PARA ENVIAR LA ID DE LA PELICULA/SERIE AL COMPONENTE PADRE-->
      <div>
        <a href="" @click="sendDataToFather"
          class="w-32 inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import { IMAGE_BASE_URL, IMAGE_SIZE } from '@/configMovies'

export default {

  name: 'CardTemplate',

  props: {
    movie: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      imgPath: '',
      averageStars: 0,
      totalStars: 0,
      movieId: 0,
      averageStarsActive: [
        this.star1 = false,
        this.star2 = false,
        this.star3 = false,
        this.star4 = false,
        this.star5 = false
      ],
    }
  },

  methods: {

    //METODO PARA DEVOLVER INFORMACIÓN DE LA PELICULA AL COMPONENTE PADRE
    sendDataToFather(){
      this.$emit('cardSearchQuerry', {cardQuerry: this.movieId});
    },
    
    //METODO PARA ACTUALIZAR LA INFORMACIÓN DE LAS ESTRELLAS RATING Y ASIGNACIÓN A VARIAS VARIABLES
    updateComponent() {
      this.imgPath = IMAGE_BASE_URL + IMAGE_SIZE + this.movie.backdrop_path
      this.movieId = this.movie.id
      this.averageStars = Math.round(this.movie.vote_average / 2)
      this.totalStars = parseFloat(this.movie.vote_average).toFixed(1)
      this.totalStars = parseFloat(this.totalStars)
      let i = 0
      for (i = 0; i <= this.averageStarsActive.length; i++) {
        if (this.averageStars > [i]) {
          this.averageStarsActive[i] = true
        }
      }
    }
  },

  filters: {

    //FUNCIÓN PARA QUE NOS DEVUELVA SOLO LOS PRIMEROS 100 CARACTERES DE LA STING DE DESCRIPCIÓN DE LA PELÍCULA
    formateo(value) {
      if (value) {
        return value.substring(0, 100) + '...'
      }

    }
  },

  mounted() {
    //LLAMAMOS AL METODO "updateComponent()" PARA ACTUALIZAR LA CARD CADA VEZ QUE SE RENDERIZA
    this.updateComponent()
  }

}


</script>

<style scoped>

/*DISEÑO ESPECIFICO PARA EL COLOR DE LAS ESTRELLAS DE RATING*/
.star-active {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}

.star-inactive {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

</style>