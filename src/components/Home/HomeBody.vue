<template>
    <div class="flex justify-center items-center md:mx-8 sm:mx-4 sx:mx-4 mx-4 rounded-lg">
        <section class=" bg-white dark:bg-gray-900 rounded-ee-lg rounded-es-lg">
            <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28">
                <h3 class="text-4xl lg:text-5xl font-bold lg:tracking-tight dark:text-white">
                    Everything i learn from this proyect
                </h3>
                <p class="text-lg mt-4  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    This was 10 day journey where i learn a bit from Vue2 Framework and Tailwind Css.
                </p>

                <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
                    <div v-for="item in features" :key="item.title" class="flex gap-4 items-start">

                        <div>
                            <h3 class="font-semibold text-lg dark:text-gray-400">{{ item.title }}</h3>
                            <p class="text-slate-500 mt-2 leading-relaxed">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>

export default {

    name: 'HomeBody',
    data() {
        return {
            features: [
                {
                    title: "Vue2, New Framework for me",
                    description:
                        "I build some apps using React, but this was an oportunity to see things out of the box and try something new.",
                    icon: "bx:bxs-briefcase",
                },
                {
                    title: "Style with Tailwind",
                    description:
                        "This is my first time using Tailwind. I feel it a bit messi at the start, but later was very easy to use and play with styles",
                    icon: "bx:bxs-window-alt",
                },
                {
                    title: "Vue2 Lifecycle HOOKS",
                    description:
                        "Need to work bit more to get comfortable with this way to HOOKS, in the end is more interesting as you get use to it, isn't very hard",
                    icon: "bx:bxs-data",
                },
                {
                    title: "How to use Components",
                    description:
                        "Vue2 has a similar way to 'React' about components, the only things that changes is the way you send props to Child component",
                    icon: "bx:bxs-bot",
                },
                {
                    title: "App Router",
                    description:
                        "The way Vue2 manage router tree its very intuitive and easy as other frameworks uses similar things for this purpose",
                    icon: "bx:bxs-file-find",
                },
                {
                    title: "Vue2 Directives",
                    description:
                        "This is the thing i liked most, 'Directives' v-for, v-bind, v-if... very usefull and original ",
                    icon: "bx:bxs-user",
                },
            ],
        };
    },
};
</script>
  
<style scoped>
/* Tu estilo aquí, si es necesario */
</style>
  