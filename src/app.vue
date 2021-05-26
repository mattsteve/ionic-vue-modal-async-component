<template>
    <ion-app id="app">
        <ion-button @click="onOpenModal()">
            Open Modal
        </ion-button>
    </ion-app>
</template>

<script lang="ts">
import { Options, Vue, Watch, mixins } from 'vue-property-decorator';
import { openModal } from './open-modal';

export default class App extends Vue {
    public onOpenModal() {
        openModal();
    }
}
</script>
