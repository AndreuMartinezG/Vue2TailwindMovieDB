<template>
    <div class="flex justify-center py-8">
        <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-10 text-base">

                <!--BOTÓN PREVIOUS PAGE-->
                <li>
                    <a href="#" @click="paginationProcess(0)" :class="{ 'hidden': minPage }"
                        class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                        <span class="sr-only">Previous</span>
                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                    </a>
                </li>

                <!--BOTÓN CON NUMBER PAGE-->
                <li>
                    <a href="#" @click="paginationProcess(1)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ms-0 border border-e-0 rounded-s-lg': activePage[1],
                            'dark:bg-gray-800': !activePage[1]
                        }">1
                    </a>
                </li>
                <li>
                    <a href="#" @click="paginationProcess(2)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ': activePage[2],
                            'dark:bg-gray-800': !activePage[2]
                        }">2
                    </a>
                </li>
                <li>
                    <a href="#" @click="paginationProcess(3)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ': activePage[3],
                            'dark:bg-gray-800': !activePage[3]
                        }">3
                    </a>
                </li>
                <li>
                    <a href="#" @click="paginationProcess(4)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ': activePage[4],
                            'dark:bg-gray-800': !activePage[4]
                        }">4</a>
                </li>
                <li>
                    <a href="#" @click="paginationProcess(5)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ms-0 border border-s-0 rounded-e-lg': activePage[5],
                            'dark:bg-gray-800': !activePage[5]
                        }">5</a>
                </li>

                <!--BOTÓN NEXT PAGE-->
                <li>
                    <a href="#" @click="paginationProcess(6)" :class="{ 'hidden': maxPage }"
                        class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white">
                        <span class="sr-only">Next</span>
                        <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>

export default {
    name: 'PaginationBar',

    props: {
        page: {
            type: Number,
            required: true,
        }
    },

    data() {
        return {
            pageCounter: 1,
            pageCounterUpdated: '',
            maxPage: false,
            minPage: false,
            activePage: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false
            }
        }
    },

    computed: {


    },

    methods: {

        //METODO PARA DEVOLVER INFORMACIÓN DE LA PELICULA AL COMPONENTE PADRE
        sendDataToFather() {
            console.log("send data to father pag")
            this.$ls.set('moviePage' , this.pageCounter)
            this.$emit('pageQuerry', { pageQuerry: this.pageCounter });

        },

        //METODO PARA FILTRAR Y SELECCIONAR LA PAGINACIÓN SELECCIONADA
        paginationProcess(pageNumber) {
            switch (pageNumber) {
                case 0:
                    if (this.pageCounter <= 1) {
                        this.pageCounter = 1
                    } else {
                        this.pageCounter = this.pageCounter - 1
                    }
                    break;

                case 6:
                    if (this.pageCounter >= 5) {
                        this.pageCounter = 5
                    } else {
                        this.pageCounter = this.pageCounter + 1
                    }
                    break;

                default:
                    this.pageCounter = pageNumber
            }

            this.sendDataToFather()
            this.pageActiveUpdate(this.pageCounter)
        },

        //METODO PARA ACTUALIZAR EL COMPONENTE Y QUE MUESTRE LA PAGINA CORRECTA CON EL ESTILO CORRECTO
        pageActiveUpdate(pageCounter) {

            // Resetear todas las páginas a falso
            for (let page in this.activePage) {
                this.activePage[page] = false;
            }

            // Establecer la página actual a verdadero
            this.activePage[pageCounter] = true;

            // Establecer maxPage y minPage según sea necesario
            this.maxPage = pageCounter >= 5;
            this.minPage = pageCounter <= 1;

            

        },
    },

    filters: {

    },

    mounted() {
        this.pageCounter = this.page
        this.pageActiveUpdate(this.pageCounter)
        console.log("PAGINATION BAR MOUNTED")
    },

    updated() {
        console.log(this.pageCounter)
        console.log(this.page)
        console.log(this.pageCounterUpdated)
        if (this.page != this.pageCounterUpdated) {
            console.log("UPDATED" + this.pageCounter + "|" + this.page)
            this.pageActiveUpdate(this.pageCounter) 
            this.$ls.set('moviePage', this.pageCounter)
            this.pageCounterUpdated = this.page
            

        }
        
        console.log("UPDATE PAGINATION BAR SIN PASAR POR IF")
    }

}
</script>