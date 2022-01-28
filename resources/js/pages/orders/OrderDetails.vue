<template>
    <div class="max-w-5xl mx-auto py-32">
        <!-- <div class="grid grid-cols-4 gap-4">
            <div class="col-span-2">
                <img
                    src="https://via.placeholder.com/350x250"
                    alt="bild"
                    class="my-12 p-1 border rounded-lg shadow-xl" />
                <div class="flex space-x-1">
                    <img
                        src="https://via.placeholder.com/150x150"
                        alt="bild"
                        class="w-1/4 p-1 border rounded-lg shadow-xl" />
                    <img
                        src="https://via.placeholder.com/150x150"
                        alt="bild"
                        class="w-1/4 p-1 border rounded-lg shadow-xl" />
                    <img
                        src="https://via.placeholder.com/150x150"
                        alt="bild"
                        class="w-1/4 p-1 border rounded-lg shadow-xl" />
                    <img
                        src="https://via.placeholder.com/150x150"
                        alt="bild"
                        class="w-1/4 p-1 border rounded-lg shadow-xl" />
                </div>
            </div>

            <div class="col-span-2 space-y-4" :item="item">
                <div class="flex space-x-4 items-center">
                    <div v-if="item.available" class="rounded-full bg-tertiary w-4 h-4"></div>
                    <div v-else class="rounded-full bg-primary w-4 h-4"></div>
                    <h2 class="text-4xl font-bold">
                        {{ item.title }}
                    </h2>
                </div>
                <p>
                    {{ item.description }}
                </p>
                <div class="flex">
                    <div class="mr-24">
                        <p class="font-bold">Kosten pro Tag</p>
                        <p class="text-xl">€ 25,00</p>
                    </div>
                    <div>
                        <p class="font-bold">Zustand</p>
                        <p class="text-xl">6/10</p>
                    </div>
                </div>
                <router-link :to="{ name: 'OrderAdd', params: { id: item.id } }" class="primary-btn my-4"
                    >jetzt verleihen</router-link
                >
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            order: {},
        }
    },
    created() {
        this.loadOrders()
    },
    methods: {
        loadOrders() {
            axios
                .get('/orders/' + this.id)
                .then((response) => {
                    this.order = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
