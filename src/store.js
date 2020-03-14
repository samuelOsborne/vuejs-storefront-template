import Vue from "vue";

export const store = Vue.observable({
    isOverlayOpen: false
});

export const mutations = {
    toggleOverlay() {
        store.isOverlayOpen = !store.isOverlayOpen
    }
};