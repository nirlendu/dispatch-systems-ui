# Web App 

Web App.

## To use

If running for the first time, run
```sh
bash scripts/init.sh
```

Start the server, run start.sh and add the enviroment (currently supporting only development, testing, staging and production) as argument.

For example, to run on development 

```sh
bash start.sh development
```

To only build for development (add appropriate argument for other environments),

```sh
bash scripts/build.sh development
```

Likewise, to deploy,

```sh
bash scripts/deploy.sh development
```

And visit <http://localhost:3000/>.