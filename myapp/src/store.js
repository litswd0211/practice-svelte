import { writable, derived } from 'svelte/store';

export const derCount = writable(2);
export const derDoubled = derived(derCount, ($derCount) => $derCount * 2);
