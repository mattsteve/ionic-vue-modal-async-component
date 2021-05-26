import { defineAsyncComponent } from 'vue';
import { modalController } from '@ionic/vue';

export async function openModal() {
    const modal = await modalController.create({
        component: defineAsyncComponent(() => import('@/components/component.vue'))
    });
    await modal.present();
}
