# VueDialog

Dialog windows for Vue 2.x (like confirm or alert), based on Vuedals.

These dialogs will return a _Promise_ when called that will resolve when confirmed and rejects when denied

It provides 3 types of dialogs:

- Alert
- Confirm
- Hard Confirm

More info about the types, below

## DEMO

Live demo on jsFiddle: https://jsfiddle.net/041r81r0/

## Example

```js
import VueDialog from 'vuedialog';
import { Bus, Component as  Vuedals } from 'vuedals';

VueDialog.setBus(Bus);

var vm = new Vue({
	el: '#app',
	
	components: {
        VueDialog,
        Vuedals
    },

    methods: {
        continue() {
            VueDialog.confirm('Are you sure of this?')
                .then(_ => alert('You are sure'))
                .catch(_ => alert('Phew..'));
        }
    },
	
	template: `<div>
        To continue, <span @click="continue()">click here</span>

        <vuedals></vuedals>
    </div>`
});
```

## Dependencies
This plugin depends on `Vuedals` so you need to have Vuedals as a component dependency if you don't:

```
$ npm install vuedals --save
```

```js
import { Component as Vuedals } from 'vuedals';

Vue.component('my-component', {
    components: {
        Vuedals
    },

    template: `
        <div>
            <vuedals></vuedals>
        </div>
    `
});
```

For more info on how to setup Vuedals, check the repo: https://github.com/javisperez/vuedals/

## Install

**Be sure that you have Vuedals install, as is a dependency**

Install with npm:
```
$ npm install vuedialog --save
```

After that you need to pass the Vuedal's Event Bus instance to trigger the open and close methods, example:

```js
import { Bus } from 'vuedals';
import VueDialog from 'vue-dialog';

VueDialog.setBus(Bus);
```

## Usage 
```js
import { VueDialog } from 'vuedialog';

Vue.component('my-component', {
    methods: {
        myMethod() {
            VueDialog.alert('Watch me!', 'Ok, done!');
        }
    }
});
```

## Dialog types

This plugin has 3 methods you can call:

### alert

```js
VueDialog.alert(message[, buttonLabel])
```

Will open an alert window with the given message.

##### arguments
| Argument           | Type         | Default     | Description                         |
|--------------------|--------------|-------------|-------------------------------------|
| **message**        | String       | ""          | The mesage to show                  |
| **buttonLabel**    | String       | "Ok"        | The label of the button             |

### confirm

```js
VueDialog.confirm(message[, options])
```

Will open a confirm window with the message and the given options.

##### arguments
| Argument            | Type         | Default          | Description                         |
|---------------------|--------------|------------------|-------------------------------------|
| **message**         | String       | "Are you sure?"  | The mesage to show                  |
| **options**         | Object       | *see below*      | Options for this confirm            |

###### options
| Option    | Type   | Default                      | Description                                 |
|-----------|--------|------------------------------|---------------------------------------------|
| **title** | String | "Please confirm"             | The title of the window                     |
| **labels**| Object | {ok: *"Ok"*, cancel: *"Cancel"*} | The labels of the \<ok\> and \<cancel\> buttons |
| **payload**| Object | {}                          | The payload that can be usefull for determing/identifying vuedals instances |
| **template**| String | "just contains the options title"| The tempalte that can be passed to show the content |

### hardConfirm

```js
VueDialog.hardConfirm(message[, confirmationMessage[, options]])
```

Opens a "hard confirm" window dialog, this is a confirm in which the user has to type a given *confirmation message* and press the "im sure" button for a given amount of seconds. This is intended for really sensitive actions.

##### arguments
| Argument                 | Type         | Default                       | Description                            |
|--------------------------|--------------|-------------------------------|----------------------------------------|
| **message**              | String       | "Are you sure?"               | The mesage to show                     |
| **confirmationMessage**  | String       | "I really want to do it"      | The message the user will need to type  |
| **options**              | Object       | *see below*                   | The custom options                     |
| **payload**              | Object       | {}                            | The payload that can be usefull for determing/identifying vuedals instances |
| **template**| String | "just contains the options title"| The tempalte that can be passed to show the content |

###### options
| Option       | Type    | Default                                                                                                                | Description                                                                                         |
|--------------|---------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| **duration** | Integer | 5                                                                                                                      | How many seconds the user will need to press the confirmation button                                |
| **labels**   | Object  | {ok: *"Yes, i'm sure"*, cancel: *"Cancel"*, pressing: *"Keep pressing..."*, confirmed: *"Confirmed, please wait..."*} | The labels of the \<ok\> and \<cancel\> buttons, and \<pressing\>, \<confirmed\> states for the \<ok\> button |

