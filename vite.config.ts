import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 중요: 현재 위치를 기본으로 설정
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {} // 에러 방지용 안전장치
  }
});
