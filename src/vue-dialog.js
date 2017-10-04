import Longpress from 'vue-longpress';
import Merge from 'deepmerge';

class _VueDialog {
    constructor() {
        this.bus = null;
    }

    setBus(bus) {
        this.bus = bus;
    }

    // Confirm dialog
    confirm(message = 'Are you sure?', params = {}) {
        const defaults = {
            title: 'Please confirm',
            labels: {
                ok: 'Ok',
                cancel: 'Cancel'
            },
            payload: {},
            template: `
                        <div class="vue-dialog-content">
                            <header v-if="options.title"{{ options.title }}</header>

                            <p>{{ message }}</p>

                            <div class="actions">
                                <span @click="success()" class="btn btn-primary button-ok">{{ options.labels.ok }}</span>
                                <span @click="cancel()" class="btn btn-default button-cancel">{{ options.labels.cancel }}</span>
                            </div>
                        </div>
                    `
        },

        options = Merge(defaults, params);

        return new Promise((resolve, reject) => {
            const Bus = this.bus;

            Bus.$emit('new', {
                name: 'vue-dialog confirm',

                dismisable: false,

                title: options.title,

                payload: options.payload,

                component: {
                    name: 'vue-dialog-confirm',

                    data() {
                        return {
                            options,
                            message
                        }
                    },

                    methods: {
                        success() {
                            Bus.$emit('close');
                            resolve();
                        },

                        cancel() {
                            Bus.$emit('close');
                            reject();
                        }
                    },

                    template: options.template
                }
            });
        });

    }

    // Hard confirm
    hardConfirm(message = 'To continue please type the text below', confirmationMessage = 'I really want to do it', params = {}) {
        const defaults = {
            duration: 5,
            labels: {
                ok: 'Yes, i\'m sure',
                pressing: 'Keep pressing...',
                action: 'Confirmed, please wait...',
                cancel: 'Cancel'
            },
            payload: {},
            template: `
                        <div>
                            <div class="message">{{ message }}</div>
                            <div class="confirmation-message">{{ confirmationMessage }}</div>
                            <div class="input-container">
                                <input type="text" v-model="typed" autofocus/>
                                <div class="typed-progress-bar">
                                    <span :style="'width:'+(progress * 100)+'%'"></span>
                                </div>
                            </div>
                            <div class="actions">
                                <longpress class="btn btn-danger" :disabled="!confirmed" :onConfirm="confirm" :duration="options.duration" :pressingText="options.labels.pressing" :actionText="options.labels.action">{{ options.labels.ok }}</longpress>
                                <span class="btn btn-default" @click="cancel()">{{ options.labels.cancel }}</span>
                            </div>
                        </div>
                    `
        },

        options = Merge(defaults, params);

        return new Promise((resolve, reject) => {
            const Bus = this.bus;

            Bus.$emit('new', {
                name: 'vue-dialog hard-confirm',

                title: null,

                payload: options.payload,

                component: {
                    name: 'vue-dialog-hard-confirm',

                    components: {
                        Longpress
                    },

                    data() {
                        return {
                            typed: '',
                            options,
                            message,
                            confirmationMessage,
                            confirmed: false,
                            progress: 0
                        };
                    },

                    methods: {
                        confirm() {
                            Bus.$emit('close');
                            resolve();
                        },

                        cancel() {
                            Bus.$emit('close');
                            reject();
                        }
                    },

                    watch: {
                        typed(value) {
                            value = value.trim().toLowerCase();

                            const lowerConfirmationMessage = this.confirmationMessage.trim().toLowerCase();

                            if (lowerConfirmationMessage.substr(0, value.length) === value) {
                                this.progress = value.length / lowerConfirmationMessage.length;
                            }

                            if (value === lowerConfirmationMessage) {
                                this.confirmed = true;
                            } else {
                                this.confirmed = false;
                            }
                        }
                    },

                    template: options.template
                }
            });
        });
    }

    // Alert dialog
    alert(message, buttonLabel='Ok') {

        return new Promise(resolve => {
            const Bus = this.bus;

            Bus.$emit('new', {
                dismisable: false,

                name: 'vue-dialog alert',

                component: {
                    name: 'vue-dialog-alert',

                    data() {
                        return {
                            buttonLabel,
                            message
                        };
                    },

                    methods: {
                        close() {
                            Bus.$emit('close');
                            resolve();
                        }
                    },

                    template: `
                        <div class="vue-dialog-content">
                            <p>{{ message }}</p>

                            <div class="actions">
                                <span @click="close()" class="btn btn-primary button-ok">{{ buttonLabel }}</span>
                            </div>
                        </div>
                    `
                }
            });
        });
    }
}

export default new _VueDialog();
