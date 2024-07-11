# Observatory Project Documentation

This repo contains the documentation for [Elite Observatory Core](https://github.com/xjph/ObservatoryCore) and its associated plugins.

All commits to the main branch are automatically published to the documentation site as https://observatory.xjph.net/.

## Contributing

Any modifications to this documention should be submitted as PRs to this repo. Simple modifications to the markdown files do not typically require any special development knowledge or environment.

## Local Development

To locally test and confirm changes you should create a local dev instance of the documentation site.

`pnpm` is recommended over `npm`. The Vercel host will read the `pnpm-lock.yaml` file for installed version information, not `package-lock.json`, so using `npm` will cause failed deployments in the event of any updated packages.

First, if necessary, run `npm i -g pnpm`, then `pnpm i` to install the dependencies.

`pnpm dev` will then start the development server hosted at http://localhost:3000.

## License

This project is licensed under the MIT License.
