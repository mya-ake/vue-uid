# vue-uid

[![npm version](https://badge.fury.io/js/vue-uid.svg)](https://badge.fury.io/js/vue-uid)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![CI Status](https://github.com/mya-ake/vue-uid/workflows/Main%20Workflow/badge.svg)

Unique ID for Vue.js component.


## Install

```bash
$ yarn add vue-uid
```

## Usage

[Plugin](#Plugin) or [Mixin](#Mixin).

Plugin all components have uid.

Components with mixin have uid.
Other components don't have uid.

### Plugin

Install plugin

```JavaScript
import Vue from 'vue';
import VueUid from 'vue-uid';
 
Vue.use(VueUid);
```

Use with component

```HTML
<template>
  <div>
    <div>
      <label v-bind:for="`input-${$_uid}`">Name</label>
      <input v-bind:id="`input-${$_uid}`" />
    </div>
    or
    <div>
      <label v-bind:for="id">Name</label>
      <input v-bind:id="id" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return `input-${this.$_uid}`;  // e.g. input-1
    },
  },
};
</script>
```

### Mixin

Use with component

```HTML
<template>
  <input v-bind:id="`input-${$_uid}`" />
</template>

<script>
import { vueUidMixin } from 'vue-uid';

export default {
  mixins: [vueUidMixin],

  mounted() {
    const uid = this.$_uid;
    console.log(uid); // 1 (Number)
  },
};
</script>
```

## Options

### `name` (option)

- type: `String`
- default: `$_uid`

Change property name.

e.g.

```JavaScript
import Vue from 'vue';
import VueUid from 'vue-uid';

Vue.use(VueUid, {
  name: 'uid',
});
```

when

```HTML
<template>
  <div>
    <div>
      <label v-bind:for="`input-${uid}`">Name</label>
      <input v-bind:id="`input-${uid}`" />
    </div>
    or
    <div>
      <label v-bind:for="id">Name</label>
      <input v-bind:id="id" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      // change property name
      return `input-${this.uid}`;  // e.g. input-1
    },
  },
};
```

## Public API

### `reset()`

Rest UID count.

```JavaScript
import { uid } from 'vue-uid';

uid.reset();
```

### `setName(name: String)`

Same as name option.
This method is for mixin.


```JavaScript
import { uid } from 'vue-uid';

uid.setName('uid');
```

## For Nuxt.js

[nuxt-uid-module](https://github.com/mya-ake/nuxt-uid-module)

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/mya-ake/vue-uid/issues) or a [pull request](https://github.com/mya-ake/vue-uid/pulls).

## License

[MIT](https://github.com/mya-ake/vue-uid/blob/master/LICENSE)
