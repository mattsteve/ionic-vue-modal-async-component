<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>
                Test Modal
            </ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        Some content
    </ion-content>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

@Options({
    name: 'test-component',
    components: {
        IonHeader, IonToolbar, IonTitle, IonContent
    }
})
export default class TestComponent extends Vue {}
</script>
