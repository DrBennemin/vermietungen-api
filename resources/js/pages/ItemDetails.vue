<template>
    <div class="max-w-5xl mx-auto py-32">
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-2">
                <img
                    src="https://m.media-amazon.com/images/I/61Kl33srABS._AC_SL1204_.jpg"
                    alt="bild"
                    class="w-1/2 my-12"
                />
                <div class="flex space-x-4">
                    <img
                        src="https://m.media-amazon.com/images/I/61Kl33srABS._AC_SL1204_.jpg"
                        alt="bild"
                        class="w-1/4 p-4 border rounded-lg shadow-xl"
                    />
                    <img
                        src="https://m.media-amazon.com/images/I/61Kl33srABS._AC_SL1204_.jpg"
                        alt="bild"
                        class="w-1/4 p-4 border rounded-lg shadow-xl"
                    />
                    <img
                        src="https://m.media-amazon.com/images/I/61Kl33srABS._AC_SL1204_.jpg"
                        alt="bild"
                        class="w-1/4 p-4 border rounded-lg shadow-xl"
                    />
                </div>
            </div>

            <div class="col-span-2 space-y-4">
                <div class="flex space-x-4 items-center">
                    <div
                        v-if="item.available"
                        class="rounded-full bg-tertiary w-4 h-4"
                    ></div>
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
                <button class="primary-btn">jetzt verleihen</button>
            </div>
        </div>
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
