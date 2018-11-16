# vue-uid

Unique ID for Vue.js component.

## Install

```bash
$ yarn add vue-uid
```

```JavaScript
import Vue from 'vue';
import VueUid from 'vue-uid';
 
Vue.use(VueUid);
```

## Usage

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
    const uid = this.uid; // change 
  },
};
</script>
```

## Reset UID

```JavaScript
import { uid } from 'vue-uid';

uid.reset();
```

## For Nuxt.js

[nuxt-uid-module](https://github.com/mya-ake/nuxt-uid-module)
