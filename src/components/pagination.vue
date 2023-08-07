<template>
    <div class="pagination">
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ 'active': currentPage === page }">
            {{ page }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        totalEntries: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        totalPages: {
            type: Number,
            required: true,
        },
    },
    methods: {
        goToPage(page) {
            this.$emit('page-change', page);
        },
    },
};
</script>
