# Lexpand: Lexogon expanded

Expanded clues to accommodate a range of Lexogon players.

Want more games? Visit [SECT Games](https://skedwards88.github.io/).

Do you have feedback or ideas for improvement? [Open an issue](https://github.com/skedwards88/lexpand/issues/new).

## Development

To build, run `npm run build`.

To run locally with live reloading and no service worker, run `npm run dev`. (If a service worker was previously registered, you can unregister it in chrome developer tools: `Application` > `Service workers` > `Unregister`.)

To run locally and register the service worker, run `npm start`.

To deploy, push to `main` or manually trigger the `.github/workflows/deploy.yml` workflow.

Since this app doesn't have a custom domain, asset links for the Google Play Store are stored at https://github.com/skedwards88/.well-known (https://skedwards88.github.io/.well-known/assetlinks.json).

![Status](https://github.com/skedwards88/lexpand/actions/workflows/deploy.yaml/badge.svg)
