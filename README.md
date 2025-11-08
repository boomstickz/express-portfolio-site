# express portfolio site

this project is my express.js + ejs portfolio assignment.  
it keeps the same maroon helvetica aesthetic from my original static site but now runs with express, ejs templates, and bootstrap.

## features
- built with express.js using ejs templating  
- four routes: `/`, `/about`, `/projects`, `/contact`  
- shared header/footer partials across all pages  
- public folder for css, images, and scripts  
- responsive bootstrap layout + font-awesome icons  
- deployed to render (live link below)

## express generator
the site structure was made using express-generator --view=ejs, 
which created the following structure:

- app.js – sets up express, middleware, routes, and view engine
- bin/www – starts the HTTP server and listens on the configured port
- package.json – project metadata, dependencies, and start script
- /routes – contains route controllers
- /views – EJS templates for each page and partials for layout
- /public – static assets served to the browser
- /node_modules – auto-generated folder for dependencies (ignored by git)

## live site
https://express-portfolio-site-szlx.onrender.com/

## repo
https://github.com/boomstickz/express-portfolio-site
