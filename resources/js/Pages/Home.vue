<template>
    <div>
        <div>Homebase</div>
        <p>this is my counter:</p>
        <p>
            {{ count }}
        </p>
        <button @click="$store.commit('INCREMENT')">Increment dat count</button>
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
