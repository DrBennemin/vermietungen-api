<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="updateItem" class="flex flex-col space-y-4">
            <label>Titel</label>
            <input
                type="text"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
                v-model="item.title" />
            <label>Beschreibung</label>
            <input
                type="text"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
                v-model="item.description" />
            <div class="flex justify-between">
                <div class="flex flex-col space-x-4">
                    <label>Verfügbar</label>
                    <div class="flex space-x-4 items-center">
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            :value="true"
                            v-model="item.available" />
                        <label for="yes">ja</label>
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            :value="false"
                            v-model="item.available" />
                        <label for="no">nein</label>
                    </div>
                </div>

                <div class="w-1/2" v-if="!item.available">
                    <label>Rückgabedatum</label>
                    <input class="w-full rounded-lg" type="date" v-model="item.date_return" />
                </div>
            </div>

            <button class="py-2 px-4 rounded-lg hover:bg-secondary bg-primary font-bold text-white" type="submit">
                speichern
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data: function () {
        return {
            item: {},
        }
    },
    // computed: {
    //     item: function () {
    //         return this.$store.getters.get_item(this.id);
    //     },
    // },
    created() {
        axios
            .get('/items/' + this.id)
            .then((response) => {
                this.item = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        updateItem() {
            axios
                .put('items/' + this.id, {
                    title: this.item.title,
                    description: this.item.description,
                    available: this.item.available,
                    date_return: this.item.date_return,
                })
                .then(() => {
                    this.$store.dispatch('item_updated', this.item)
                    this.$router.push({ name: 'Inventory' })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
