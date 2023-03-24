
### STEP 1

Initialize Project
`npm create vite@latest`

### Troubleshooting for above command 


Got error for above command 
```
SyntaxError: Unexpected token '.'
    at Loader.moduleStrategy (internal/modules/esm/translators.js:133:18)
```
If the version is below 14, then you need to upgrade Node.js to version 14 or above (16 is recommended).

`npm install n -g` then use 
`n stable` or `n latest`

Faced Issue 

```npm ERR! Error: EACCES: permission denied mkdir '/usr/local/lib/node_modules/n' ```

solution - `sudo chown -R $USER /usr/local/lib/node_modules`

Faced Issue

```npm ERR! Error: EACCES: permission denied, symlink '../lib/node_modules/n/bin/n' -> '/usr/local/bin/n'```

solution - 
```
sudo chown -R $USER /usr/local/lib/node_modules/
sudo chown -R $USER /usr/local/bin/
sudo chown -R $USER /usr/local/share/
```

Faced Issue 

``` Error: Cannot find module 'semver' ```   
solution - https://askubuntu.com/questions/1152570/npm-cant-find-module-semver-error-in-ubuntu-19-04

```
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* ~/.npm
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/bin/node*
sudo rm -rf /usr/local/include/node*
sudo apt-get purge nodejs npm
sudo apt autoremove
sudo apt-get install nodejs npm
```

Install nvm
```
sudo apt-get update
sudo apt-get install curl 
sudo curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
source ~/.bashrc   
```

`nvm install node`

### STEP 2
`npm i three gsap` Two package we are gonna use ahead

### Run the project

`npm run dev`


