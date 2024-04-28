<template>
    <div id="app">
        <Header />
        <RouterView />
    </div>
    <p><a href="https://zbiorkom.live/warsaw" target="_blank">&copy; zbiorkom.live</a></p>
</template>

<script lang="ts">
import Header from "./components/Header/Header.vue";
import { RouterView } from "vue-router";

export default {
    components: { RouterView, Header },
};
</script>

<style scoped>
p {
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    position: fixed;
    color: #ffb4a9;
    a {
        color: #ffb4a9;
        text-decoration: none;
    }
}
</style>
