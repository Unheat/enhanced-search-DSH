//#region src/host/index.ts
/**
* Host apply — Node half of the dual-face plugin.
*
* Universal Palette is a browser-side capability; the host half is
* empty (no host-side services, no events, no tools). It exists so
* the package's `lib/index.js` and the `dsh.bundle` field in
* `cordis.patch.yml` are well-formed.
*/
const name = "dsh-universal-palette";
function apply(ctx) {}
var host_default = {
	name,
	apply
};
//#endregion
export { apply, host_default as default, name };

//# sourceMappingURL=index.js.map