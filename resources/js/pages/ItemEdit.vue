<template>
    <div class="container mx-auto py-24">
        <form @submit.prevent="editItem" class="flex flex-col space-y-4">
            <label>Titel</label>
            <input
                type="text"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
                v-model="item.title"
            />
            <label>Beschreibung</label>
            <input
                type="text"
                class="rounded-lg focus:border-primary focus:ring-primary"
                required
            />
            <div class="flex justify-between">
                <div class="flex flex-col space-x-4">
                    <label>Verfügbar</label>
                    <div class="flex space-x-4 items-center">
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            :value="true"
                        />
                        <label for="yes">ja</label>
                        <input
                            type="radio"
                            class="text-primary focus:ring-primary"
                            :value="false"
                        />
                        <label for="no">nein</label>
                    </div>
                </div>

                <div class="w-1/2">
                    <label>Rückgabedatum</label>
                    <input class="w-full rounded-lg" type="date" />
                </div>
            </div>

            <button
                class="
                    py-2
                    px-4
                    rounded-lg
                    hover:bg-secondary
                    bg-primary
                    font-bold
                    text-white
                "
                type="submit"
            >
                speichern
            </button>
        </form>
    </div>
</template>

<script>
export default {
    props: ["id"],
    computed: {
        item: function () {
            return this.$store.getters.get_item(this.id);
        },
    },
};
</script>
