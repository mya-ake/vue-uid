<template>
  <span><slot /></span>
</template>

<script>
import { vueUidMixin } from '@/index';

export default {
  mixins: [vueUidMixin],
};
</script>
