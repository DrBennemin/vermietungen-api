<template>
    <div class="container mx-auto py-24">
        home

        <p>heute sollte Artikel ... zurückgegeben werden</p>
        <p>heute sollte Artikel ... zurückgegeben werden</p>
        <p>heute sollte Artikel ... zurückgegeben werden</p>
        <p>Artikel ... ist aktuell zur reinigung</p>
        <test-slot></test-slot>
    </div>
</template>

<script>
import TestSlot from '../components/TestSlot.vue'

export default {
    components: { TestSlot },
}
</script>
