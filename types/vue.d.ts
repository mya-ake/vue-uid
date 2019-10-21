import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $_uid: number;
  }
}
