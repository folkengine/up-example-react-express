# An example React & Express app deployable with Apex Up

The main purpose is to demonstrate a React client & Express server, that are integrated together
and able to be deployed to AWS Lambda with Apex Up.

## Benefits

- Deploys in seconds
- Deploy a new project in under a minute
- Low infrastructure overhead
- Very low cost
- AWS

## Tradeoffs

- AWS ;)
- AWS Lambda currently supports up to Node.js 8.10
- AWS Lambda adds some request latency when it has to cold-start
- API Gateway complicates the PUBLIC_URL, see notes below

## Notes

- The client code is stripped down from [create-react-app](https://github.com/facebook/create-react-app)
- There are three Node.js projects in this repo:
  - /package.json - container that provides CLI commands and configuration of Apex Up
  - /client/package.json - React client
  - /server/package.json - Express server
- Be aware that there is an unusual integration happening:
  - In production, the server serves the client build (/client/build and /client/build/index.html)
  - In development, the client server also runs, it proxies API requests to the Express server
  - This is convenient in a small project, but for a larger projects it may make sense to split
    the client and server further.
- There is special handling of PUBLIC_URL so that static assets are served correctly on API Gateway
  where the app is mounted on /staging and /production URL prefixes. If a custom DNS is used,
  it will require updating `up.json` accordingly.

## Common tasks

### Start a new project from this example

- Clone this repo to a new repo
- Change the name of the project in:
  - up.json
  - package.json
- Acquire AWS credentials
- Update this README

### Install dependencies

```
# Install JS dependencies
yarn install

# Install Apex Up, see: https://up.docs.apex.sh/#installation
curl -sf https://up.apex.sh/install | sh
```

### Start the development server

```
yarn start
# Launch http://localhost:3000/ in a browser
```

### Run the build

```
yarn build
```

### Deploy to staging

```
up
# View the staging URL by running 'up url'
```

### Deploy to production

```
up deploy production
# View the production URL by running 'up url --stage production'
```

### View logs on staging

```
up logs staging
```
