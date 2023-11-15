<template>
    <div class="flex justify-center py-8">
        <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-10 text-base">

                <!--BOTÓN PREVIOUS PAGE-->
                <li>
                    <a href="#" @click="sendDataToFather(0)" :class="{ 'hidden': minPage }"
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
                    <a href="#" @click="sendDataToFather(1)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ms-0 border border-e-0 rounded-s-lg': activePage.page1,
                            'dark:bg-gray-800': !activePage.page1
                        }">1
                    </a>
                </li>
                <li>
                    <a href="#" @click="sendDataToFather(2)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700': activePage.page2,
                            'dark:bg-gray-800': !activePage.page2
                        }">2
                    </a>
                </li>
                <li>
                    <a href="#" @click="sendDataToFather(3)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700': activePage.page3,
                            'dark:bg-gray-800': !activePage.page3
                        }">3
                    </a>
                </li>
                <li>
                    <a href="#" @click="sendDataToFather(4)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700': activePage.page4,
                            'dark:bg-gray-800': !activePage.page4
                        }">4</a>
                </li>
                <li>
                    <a href="#" @click="sendDataToFather(5)"
                        class="flex items-center border justify-center px-4 h-10 leading-tight text-gray-500 bg-white  border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'dark:bg-gray-700 ms-0 border border-s-0 rounded-e-lg': activePage.page5,
                            'dark:bg-gray-800': !activePage.page5
                        }">5</a>
                </li>

                <!--BOTÓN NEXT PAGE-->
                <li>
                    <a href="#" @click="sendDataToFather(6)" :class="{ 'hidden': maxPage }"
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
        pageCounterFather: {
            type: Number, 
            require: true
        }
    },

    data() {
        return {
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
        }
    },

    methods: {

        //METODO PARA DEVOLVER INFORMACIÓN DE LA PELICULA AL COMPONENTE PADRE

        sendDataToFather(pageNumber) {

            this.paginationProcess(pageNumber)

        },

        //METODO PARA FILTRAR Y SELECCIONAR LA PAGINACIÓN SELECCIONADA
        paginationProcess(pageNumberSelected) {
            switch (pageNumberSelected) {
                case 0:
                    if (this.pageCounter <= 1) {
                        this.pageCounter = 1
                        this.minPage = true
                    } else {
                        this.pageCounter = this.pageCounter - 1
                        this.minPage = false
                    }
                    break;

                case 6:
                    if (this.pageCounter >= 5) {
                        this.pageCounter = 5
                        this.maxPage = true
                    } else {
                        this.pageCounter = this.pageCounter + 1
                        this.maxPage = false
                    }
                    break;

                default:
                    this.pageCounter = pageNumberSelected

            }
            this.pageCounterUpdate(this.pageCounter)
        },
        
        pageCounterUpdate(pageCounter) {

            //ESTAMOS EN LA PAGINA 1 ?
            if (pageCounter <= 1) {
                this.minPage = true
                this.activePage.page1 = true
            } else {
                this.minPage = false
                this.activePage.page1 = false
            }

            //ESTAMOS EN LA PAGINA 2 ?
            if (pageCounter == 2) {
                this.activePage.page2 = true
            } else {
                this.activePage.page2 = false
            }

            //ESTAMOS EN LA PAGINA 3 ?
            if (pageCounter == 3) {
                this.activePage.page3 = true
            } else {
                this.activePage.page3 = false
            }

            //ESTAMOS EN LA PAGINA 4 ?
            if (pageCounter == 4) {
                this.activePage.page4 = true
            } else {
                this.activePage.page4 = false
            }

            //ESTAMOS EN LA PAGINA 5 ?
            if (pageCounter >= 5) {
                this.maxPage = true
                this.activePage.page5 = true
            } else {
                this.maxPage = false
                this.activePage.page5 = false
            }

            this.$emit('pageQuerry', { pageQuerry: this.pageCounter });
        },
    },

    filters: {

    },

    mounted() {
        this.pageCounterUpdate(this.pageCounter)
    }
}
</script>