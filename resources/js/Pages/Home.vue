<template>
    <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center my-32">
            <p class="text-8xl text-primary">
                {{ count }} 
            </p>
            <p class="text-primary text-2xl">
                mal Knöpje gedrucket
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "home",
    computed: {
        ...mapState({
            count: (state) => state.count,
        }),
    },
};
</script>
