<template>
    <div id="app">
        <Header />
        <RouterView />
    </div>
</template>

<script lang="ts">
import Header from "./components/Header/Header.vue";
import { RouterView } from "vue-router";

export default {
    components: { RouterView, Header },
};
</script>
