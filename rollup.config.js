import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy-assets";
import {config} from 'dotenv';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;
export default {
	input: "src/main.js",
	output: {
		format: "iife",
		sourcemap: true,
		name: "app",
		file: "dist/main.js"
	},

	plugins: [
		svelte({
			dev: !production,
			css: (css) => {
				css.write("components.css");
			}
		}),
		resolve(),
		commonjs(),
		copy({
			assets: ["src/assets"]
		}),
		replace({
			// stringify the object       
			__myapp: JSON.stringify({
				env: {
					isProd: production,
				...config().parsed // attached the .env config
				}
			}),
		}),
		!production && livereload("dist"),
		production && terser()
	]
};
