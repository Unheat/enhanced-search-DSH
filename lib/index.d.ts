//#region src/host/index.d.ts
/**
 * Host apply — Node half of the dual-face plugin.
 *
 * Universal Palette is a browser-side capability; the host half is
 * empty (no host-side services, no events, no tools). It exists so
 * the package's `lib/index.js` and the `dsh.bundle` field in
 * `cordis.patch.yml` are well-formed.
 */
declare const name = "dsh-universal-palette";
declare function apply(ctx: unknown): void;
declare const _default: {
  name: string;
  apply: typeof apply;
};
//#endregion
export { apply, _default as default, name };
//# sourceMappingURL=index.d.ts.map