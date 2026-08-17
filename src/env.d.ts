/// <reference path="../.astro/types.d.ts" />

declare module '*cannibal-redirects.json' {
	const redirects: Record<string, string>;
	export default redirects;
}
