import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
        watch: {
            // bind volumes don't get fs events
            // so we need to poll now.
            usePolling: true,
        }
	}
};

export default config;
