# it.omranisystems.com

One page listing every app and service I'm working on. It uses the omranisystems.com mark and the portfolio's dark navy look.

- Stack: Vite + React (same as the portfolio). `src/server.js` is a zero-dependency static server for `dist/`. PM2 runs it as `it` on port 13000.
- **Access code:** handled by the omranisystems.com gate (`CODE_IT` in `/projects/omranisystems/.env`). Nginx asks the gate before every request, so this app has no login of its own. The server listens only on 127.0.0.1.
- **Add or edit an entry:** `src/client/apps.js`.

```bash
npm install
npm run dev      # local preview
npm run build    # dist/
npm start        # serve dist/ on 127.0.0.1:13000
# deploy: /projects/deploy.sh it it
```
