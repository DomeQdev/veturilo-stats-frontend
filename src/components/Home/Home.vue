<template>
    <div class="title">
        <h2>Statystyki</h2>
        <div>
            <md-icon-button :disabled="refreshDisabled" @click="refetch"><v-icon name="md-autorenew" /></md-icon-button>
            <md-outlined-select class="select" :value="time" @change="onChange">
                <md-select-option value="30min">
                    <div slot="headline">Ostatnie 30 minut</div>
                </md-select-option>
                <md-select-option value="1h">
                    <div slot="headline">Ostatnia godzina</div>
                </md-select-option>
                <md-select-option value="1d">
                    <div slot="headline">Ostatnie 24 godziny</div>
                </md-select-option>
                <md-select-option value="7d">
                    <div slot="headline">Ostatni tydzień</div>
                </md-select-option>
                <md-select-option value="30d">
                    <div slot="headline">Ostatni miesiąc</div>
                </md-select-option>
                <md-select-option value="y">
                    <div slot="headline">Cały sezon</div>
                </md-select-option>
            </md-outlined-select>
        </div>
    </div>
    <div class="container">
        <Statistic icon="io-speedometer" title="Przejechane kilometry" unit="km" :value="distance" />
        <Statistic icon="md-bikescooter" title="Liczba wypożyczeń" :value="rentals" />
        <Statistic icon="md-directionsbike-twotone" title="Aktywne przejazdy" :value="activeRentals" />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
}

.title div {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>

<script lang="ts">
import Statistic from "./Statistic.vue";
import "@material/web/button/text-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import "@material/web/iconbutton/icon-button";

export default {
    components: { Statistic },
    data() {
        return {
            time: "1d",
            refreshDisabled: false,
            activeRentals: 0,
            distance: 0,
            rentals: 0,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        refetch() {
            this.fetchData();

            this.refreshDisabled = true;
            setTimeout(() => {
                this.refreshDisabled = false;
            }, 2500);
        },
        onChange(e: any) {
            this.time = e.target.value;
            this.fetchData();
        },
        async fetchData() {
            const data = await fetch(`${import.meta.env.VITE_BASE}/?time=${this.time}`).then((res) => res.json());

            this.activeRentals = data.activeRentals;
            this.distance = data.distance;
            this.rentals = data.rentals;
        },
    },
};
</script>
