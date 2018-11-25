# vue-uid

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
  <input v-bind:id="`input-${$_uid}`" />
</template>

<script>
export default {
  mounted() {
    const uid = this.$_uid;
    console.log(uid); // 1 (Number)
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

## Option

### name

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
  <input v-bind:id="`input-${uid}`" />
</template>

<script>
export default {
  mounted() {
    const uid = this.uid; // changed
  },
};
</script>
```

## Public API

### Reset UID

```JavaScript
import { uid } from 'vue-uid';

uid.reset();
```

### setName for mixin

```JavaScript
import { uid } from 'vue-uid';

uid.setName('uid');
```

## For Nuxt.js

[nuxt-uid-module](https://github.com/mya-ake/nuxt-uid-module)
