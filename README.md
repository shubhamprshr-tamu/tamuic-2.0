# tamuic-2.0

## Introduction
This repository contains code for the migration of TamuIC app from DotNet to a complete Typescript powered application. 

## Initial setup 
0. Clone this repo, and you should have `NodeJs> 18 and NPM >=8`.
1. Run `npm install`, this needs to be done in both client and root folders.
2. Please refer to the `template.env.txt`, this will give idea about all the necessary dotnet config for this app to startup. Please reach out to j-oswald@tamu.edu for information regarding these variables.
3. Next run `npm run build` in the root folder, do the same in `\client` folder.
4. After this has been done, run the app by `npm run start`, visit localhost:9000, the app should be functioning now.

## How to run in development mode.
1. In order to run in development mode, one needs to start the server from the root folder, this can be simply done by running `npm run dev`.
2. For any changes made to ReactJS code, one needs to run `npm run build` from the client folder.
