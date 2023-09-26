/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_API_KEY_V4: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
