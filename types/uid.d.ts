import { PluginObject } from 'vue';

export interface VueUidOption {
  name?: string;
}

interface VueUidPublicAPI {
  reset(): void;
  setName(name: string): void;
}

export declare const VueUidPlugin: PluginObject<VueUidOption>;

export declare const uid: VueUidPublicAPI;

export declare const vueUidMixin: {
  beforeCreate(): void;
};
