# demo_repo
creating a demo repository

# below are steps to deploy on live 
- make sure you not using href for routes, use routerLink instead.
- set the base name on your index.html to your /repo name/
- on your angular.json create route for your output path "outputPath": "/dist"   
- "index": "src/index.html" define index.html file
- build your application to create a dist folder on your root folder of your application.
command = ng build --output-path=dist --base-href /repo name/
- move all files from browser folder inside dist folder andpaste them straight on dist folder
- create 404.html, .nojekyll pages on your dist folder and push the dist folder as ghpages (new panch to be deployed). this is the command you'll use: npx angular-cli-ghpages --dir=dist
- 404.html and indext.html should be the same
- go to settings of the repo and navigate to pages 
- deploy your code to prod by selecting ghpages branch and select /root and save
- after some time on that page tab you get a link to your website
