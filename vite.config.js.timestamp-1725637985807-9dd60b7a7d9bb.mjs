// vite.config.js
import { defineConfig } from "file:///C:/Users/jesus/Dropbox/CURSO%20THE%20POWER/PROYECTOS/Proyecto11_React_Basics/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jesus/Dropbox/CURSO%20THE%20POWER/PROYECTOS/Proyecto11_React_Basics/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqZXN1c1xcXFxEcm9wYm94XFxcXENVUlNPIFRIRSBQT1dFUlxcXFxQUk9ZRUNUT1NcXFxcUHJveWVjdG8xMV9SZWFjdF9CYXNpY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGplc3VzXFxcXERyb3Bib3hcXFxcQ1VSU08gVEhFIFBPV0VSXFxcXFBST1lFQ1RPU1xcXFxQcm95ZWN0bzExX1JlYWN0X0Jhc2ljc1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvamVzdXMvRHJvcGJveC9DVVJTTyUyMFRIRSUyMFBPV0VSL1BST1lFQ1RPUy9Qcm95ZWN0bzExX1JlYWN0X0Jhc2ljcy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFtcImpzLWJpZy1kZWNpbWFsXCJdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRaLFNBQVMsb0JBQW9CO0FBQ3piLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGdCQUFnQjtBQUFBLEVBQzVCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K