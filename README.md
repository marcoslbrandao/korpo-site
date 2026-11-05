# korpo.church

Site da Korpo (Astro, estático). Página inicial e lista de espera em PT, EN, ES e FR.

- Textos: `src/i18n/textos.ts` (os 4 idiomas lado a lado).
- Visual: `src/styles/global.css` (tokens do Korpo Design System).
- Lista de espera: o formulário chama o RPC `entrar_lista_espera` do Supabase do Korpo
  (migration `0015_lista_espera.sql` no repositório AllChurchApp). Ver os inscritos:
  Supabase → Table Editor → `lista_espera`.

## Rodar no computador
    npm install
    npm run dev        # http://localhost:4321

## Publicar
Push na `main` → GitHub Actions publica no GitHub Pages (`.github/workflows/deploy.yml`).
Domínio: `public/CNAME` = korpo.church.
