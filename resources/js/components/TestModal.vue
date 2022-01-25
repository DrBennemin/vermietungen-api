<template>
    <div>
        <button class="btn-primary" @click="toggleModal">Show Modal</button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="toggleModal"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus
                    laudantium voluptatum nobis sed nesciunt neque possimus molestiae?
                </p>
                <button class="btn-primary" @click="toggleModal">Close Modal</button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            showModal: true,
        }
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal
        },
    },
}
</script>
