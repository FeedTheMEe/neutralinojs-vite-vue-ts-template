# Neutralino + Vite + Vue + Typescript Template
A preconfigured, quick start template for making very [light and fast](https://github.com/Elanis/web-to-desktop-framework-comparison) desktop applications with the [Neutralinojs](https://neutralino.js.org/) framework. There's also:
- [Vite](https://vitejs.dev/) - Code bundler for JavaScript related languages. It's known for it's lightning bundling speed, easy setup with any of the SPA frameworks and much more.

- [Vue.js](https://vuejs.org/) - One of the 3 most used SPA frameworks (along with React and Angular), Vue strives for performance as well as keeping a stable and easy to understand API.

- [Typescript](https://www.typescriptlang.org/) - Strict superset of JavaScript. Gives developers the ability to create their own types and interfaces with many more settings, resulting in much less errors as projects grow larger in size.


## Installation And Setup
1. Get the necessary tools: `yarn global add @neutralinojs/neu`

2. Clone this repository and `cd` into it: `git clone https://github.com/FeedTheMEe/neutralinojs-vite-vue-ts-template.git && cd neutralinojs-vite-vue-ts-template`

3. Setup the "backend" part: `neu update`

4. Move into the `frontend` folder: `cd frontend`

5. Setup the frontend part: `yarn && yarn run build`

6. Create a temporary folder in the main project folder called `.tmp` and into it create an empty `auth_info.json`

7. !IMPORTANT! Create a symlink for auth_info (necessary for the backend to work): `cd src && rm ./auth_info.json && ln -s /home/yourusername/path/to/your/project/.tmp/auth_info.json ./auth_info.json`

And you're done with the setup! Yes, it was that easy.


## Usage
For us to have hot-reload enabled, we need to run both the neutralino process and frontend separately.

1. Make sure you're in the `frontend` folder and run: `yarn run serve`
2. Then create another terminal window instance, cd into the project's base folder and then run `yarn run serve:neu`

Now you should have a fully working Neutralino app with live updates from the frontend components.
