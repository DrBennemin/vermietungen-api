<template>
    <div>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="toggleModal"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h1>{{ title }}</h1>
                <p>
                    {{ text }}
                </p>
                <div class="flex justify-between py-2">
                    <button class="btn-primary" @click="toggleModal">{{ submitButtonTitle }}</button>
                    <button class="btn-secondary" @click="toggleModal">{{ cancelButtonTitle }}</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
        }
    },
    props: {
        title: {
            // required: true,
            type: String,
        },
        text: {
            // required: true,
            type: String,
        },
        submitButtonTitle: {
            default: 'Speichern',
        },
        cancelButtonTitle: {
            default: 'Abbrechen',
        },
    },
    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        },
    },
}
</script>
