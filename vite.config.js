import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables from .env
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load the environment variables for the respective mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      // Define environment variables
      'process.env': env,
    },
    server: {
      port: env.VITE_PORT || 3000,
    },
  };
});
