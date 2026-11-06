# PS4 Phoenix Host — GitHub Pages starter v0.2.0

Static, dependency-free UI scaffold for a PS4 browser host. Target profile: PS4 Pro / firmware 11.00.

## Scope and safety

This repository is an interface, deployment workflow, and diagnostics shell. It does **not** include an exploit implementation, kernel exploit, GoldHEN binary, or payload. The exploit launch path is intentionally not wired up. A static website alone does not jailbreak a console.

BD-JB is deliberately excluded and should remain untouched.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository named `ps4-phoenix-host` (GitHub Pages is available for public repositories on GitHub Free).
2. Extract this ZIP and upload its contents to the repository root. Ensure `.github/workflows/pages.yml` is included.
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages**. Set the publishing source to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy Phoenix Host to GitHub Pages** to finish successfully.
6. The published URL will be shown in the workflow deployment summary. For a repository named `ps4-phoenix-host`, it normally follows `https://YOUR-USERNAME.github.io/ps4-phoenix-host/`.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Local preview

Run a static server from this directory:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` on the computer, or `http://COMPUTER-LAN-IP:8080/` from another device on the same network.

## Files

- `index.html` — page structure
- `style.css` — dark PS4-inspired theme
- `app.js` — basic JS, storage, and network diagnostics
- `.github/workflows/pages.yml` — automatic GitHub Pages deployment on pushes to `main`

## Exploit-chain integration

For firmware 11.00, upstream WebKitty currently lists Slopkit + Lapse as a supported chain; it also lists CSSFontFace + Lapse as an alternative for a wider firmware range. Verify the exact upstream release, commit, license, and hardware-testing notes before any integration.

Upstream project: https://github.com/ArabPixel/WebKitty

A separate PS4 WebKit exploit project documents 11.00 support for Lapse and notes that the chain is non-deterministic: https://github.com/evosasori/ps4_webkit_jb

Do not copy binary assets or exploit code into this project without preserving the upstream license, notices, and attribution. Keep each exploit chain in a separate, auditable module and test it independently. No claim of improved exploit reliability is made by this starter.

## Browser compatibility

The interface avoids modern frameworks and external runtime dependencies. Offline caching is not enabled in this starter: PS4 browser support for legacy AppCache and modern Service Worker APIs differs, so a cache strategy must be validated on the actual console before it is relied on.
