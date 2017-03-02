const Dialog = VueDialog.default;

Dialog.setBus(Vuedals.Bus);

new Vue({
    name: 'vuedialog-example',

    el: '#app',

    components: {
        Vuedals: Vuedals.Component
    },

    methods: {
        showAlert(index) {
            Dialog.alert('This is an alert window', 'Ok, got it!');
        },

        showConfirm() {
            Dialog.confirm('This is a confirm window, nice, isn\'t?', {
                title: 'Do you like this?',
                labels: {
                    ok: 'Yeah!',
                    cancel: 'Nah...'
                }
            })
            .then(_ => console.log('I know you would love it :)'))
            .catch(_ => console.log('Why dont you like it? :('));
        },

        showHardConfirm() {
            Dialog.hardConfirm('Now this, is another thing, please type the text below to confirm.',
                'I\'m pretty sure i want to do this', {
                    duration: 6,
                    labels: {
                        ok: 'Yeah, do it!',
                        pressing: 'Keep pressing for {$rcounter} seconds',
                        confirmed: 'Done!'
                    }
                });
        }
    },

    template: `<div>
        <span class="btn btn-primary" @click="showAlert()">Show Alert window</span>
        <span class="btn btn-primary" @click="showConfirm()">Show Confirm</span>
        <span class="btn btn-primary" @click="showHardConfirm()">Show Hard Confirm</span>

        <vuedals></vuedals>
    </div>`
});