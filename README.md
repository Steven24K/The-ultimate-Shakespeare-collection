# The ultimate Shakespeare collection

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Motivation 

I set this project up to play and experiment with Docusaurus, the standard for Facebook to maintain their open source documentation. 
It is a usefull tool tool quickly set up a documentation website, a wiki, portfolio, or blog. It requires little technical logic and most of the work is 
in configurating the site. You don't have to worry about setting up databases and server side processes. You can just focus on writing good content. 

**I dedicated this one to my man William Shakespeare, the greatest and still most influential writer who ever lived!**

Because the layout is completly standardized people will recognize the documentation website with others and that will help them quickly find the right information when tey need it. 

## Installation

```console
yarn install
```

## Local Development

> Look just one command tp start the whole project, that is nice. 

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

> Just one command to deploy to GitHub pages, deployment was never so easy.  

```console
GIT_USER=Steven24K USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Side effects 

One side effect of using Docusaurus is that you don't have a backend. So it does not supply with your needs when you need things like authorization, payement transactions, CMS integration etc. But it does do the job to maintain your documentation in one GitHub repository and present it on a nice standardized website. 