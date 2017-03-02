import Vue from 'vue/dist/vue';
import { Bus, Component as Vuedals } from 'vuedals';
import VueDialog from '../dist/vue-dialog.js';

VueDialog.setBus(Bus);

describe('Dialogs', () => {
    it ('should open', done => {
        const vm = new Vue({
            components: {
                Vuedals
            },

            mounted() {
                setTimeout(_ => {
                    this.showDialogs();

                    Vue.nextTick(next);
                }, 1000);
            },

            methods: {
                showDialogs() {
                    VueDialog.alert('This is an alert');
                    VueDialog.confirm('This is a confirm');
                    VueDialog.hardConfirm('This is a hard confirm');
                }
            },

            template: `<div>
                <vuedals></vuedals>
            </div>`
        }).$mount();

        expect(vm.$el.querySelectorAll('.vue-dialog.alert').length).toBe(0);
        expect(vm.$el.querySelectorAll('.vue-dialog.confirm').length).toBe(0);
        expect(vm.$el.querySelectorAll('.vue-dialog.hard-confirm').length).toBe(0);

        function next () {
            expect(vm.$el.querySelectorAll('.vue-dialog.alert').length).toBe(1);
            expect(vm.$el.querySelectorAll('.vue-dialog.confirm').length).toBe(1);
            expect(vm.$el.querySelectorAll('.vue-dialog.hard-confirm').length).toBe(1);
            done()
        }
    });
});