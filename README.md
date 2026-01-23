## DEV

To start the dev server for developement

`npm start`

## AZURE

Deploys automatically to Azure when committing to master, pushing and passing all the tests.

(see azure-static-web...yml in github workflows.)


UPDATE!!!

Because of problems with oliverwatkins account, the project deploys to felixzacat-stack

https://github.com/felixzacat-stack/frontangle4/

everything compiles and woprks, and the azure pipeline works.








## DEPLOY

To deploy, first create a build distribution

`npm run build`

Then deploy to netlify :

`netlify deploy cranky-jennings-0d3e2f.netlify.app`

(make sure to select directory : 'build')

Check URL. If everything looks OK, then deploy with prod flag.

`netlify deploy --prod`

(enter 'build')



Note : installed "react-app-rewired" to override certain parts of the webpack config for CRA so that we can use 
html-loader. See config-overrides.js