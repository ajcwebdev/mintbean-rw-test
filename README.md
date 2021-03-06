# Redwood

> **WARNING:** RedwoodJS software has not reached a stable version 1.0 and should not be considered suitable for production use. In the "make it work; make it right; make it fast" paradigm, Redwood is in the later stages of the "make it work" phase.

## Getting Started
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`. 

# Mintbean Commands

## Create project, enter directory, open editor

```
yarn create redwood-app ./mintbean-rw
cd mintbean-rw
code .
```

# Turn on development server

```
yarn rw dev
```

# Initiatial and commit project to GitHub

```
git init
git add .
git commit -m 'First commit'
git push --set-upstream https://github.com/ajcwebdev/mintbean-rw master
```

# Deploy to Netlify

```
yarn rw g deploy netlify
```

# Deploy to Vercel

```
yarn rw generate deploy vercel
```

# Deploy to Serverless

```
npm install -g serverless
yarn rw generate deploy aws_serverless
yarn rw deploy api aws_serverless
```
