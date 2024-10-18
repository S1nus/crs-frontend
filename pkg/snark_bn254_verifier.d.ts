/* tslint:disable */
/* eslint-disable */
/**
* WASM to verify a proof using the specified method
* @param {string} proof_json
* @param {ProofMode} method
* @returns {boolean}
*/
export function verify_proof(proof_json: string, method: ProofMode): boolean;
/**
* WASM to verify a proof using SP1 to read proof and public inputs
* @param {Uint8Array} contents
* @param {ProofMode} method
* @returns {boolean}
*/
export function verify_proof_sp1(contents: Uint8Array, method: ProofMode): boolean;
/**
*/
export enum ProofMode {
  Groth16 = 0,
  Plonk = 1,
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly verify_proof: (a: number, b: number, c: number, d: number) => void;
  readonly verify_proof_sp1: (a: number, b: number, c: number, d: number) => void;
  readonly babybearextinv: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly babybearinv: (a: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
