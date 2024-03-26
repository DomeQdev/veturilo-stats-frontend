<template>
    <div class="container">
        <div class="title">
            <v-icon :name="icon" scale="1.4" />
            <span>{{ title }}</span>
        </div>
        <div class="value">
            <b>{{ value }}</b>
            <span>{{ unit }}</span>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #2e1b18;
    color: #ffb4a9;
    border-radius: 24px;
    width: 300px;
}

.title {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.4rem;
}

.value b {
    font-size: 3rem;
    margin-right: 0.5rem;
}

.value span {
    font-size: 1.3rem;
}
</style>

<script lang="ts">
export default {
    props: {
        icon: String,
        title: String,
        value: Number,
        unit: String,
    },
};
</script>
