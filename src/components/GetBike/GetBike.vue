<template>
    <div class="container">
        <div class="value">
            <qrcode-stream @detect="onDetect"></qrcode-stream>
        </div>
    </div>
</template>

<style scoped>

</style>

<script lang="ts">
import { QrcodeStream } from 'vue-qrcode-reader';
import "@material/web/button/text-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/select/outlined-select";
import "@material/web/select/select-option";
import "@material/web/iconbutton/icon-button";

export default {
    components: {
        QrcodeStream
    },
    data() {
        return {
            time: "1d",
            refreshDisabled: false,
            activeRentals: 0,
            distance: 0,
            rentals: 0,
        };
    },
    methods: {
        onDetect: (detectedCodes: { rawValue: string }[]) => {
            prompt("Bike ID", detectedCodes[0].rawValue);
            console.log(detectedCodes[0].rawValue);
        }
    },
};
</script>
