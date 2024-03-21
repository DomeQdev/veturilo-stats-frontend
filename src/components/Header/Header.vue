<template>
    <div class="container">
        <div class="logo"><span class="v">V</span><span v-if="innerWidth > 450">eturilo</span></div>
        <div>
            <RouterLink to="/">
                <md-text-button><v-icon name="md-barchart" /> Statystyki</md-text-button>
            </RouterLink>
            <RouterLink to="/map">
                <md-text-button><v-icon name="md-map-round" /> Mapa</md-text-button>
            </RouterLink>
            <RouterLink to="/getBike">
                <md-icon-button><v-icon name="md-qrcode-round" /></md-icon-button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #2e1b18;
    color: #ffb4a9;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
}

.v {
    transform: rotate(-30deg);
    display: inline-block;
}
</style>

<script lang="ts">
import "@material/web/button/text-button";
import "@material/web/iconbutton/icon-button";
import { RouterLink } from "vue-router";

export default {
    setup() {
        return {
            innerWidth: window.innerWidth,
        };
    },
    components: {
        RouterLink,
    },
};
</script>
