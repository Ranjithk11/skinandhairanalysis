module.exports = {
    apps : [
      {
        name: "skinska-frontend", // Choose a unique name for your app
        script: "node_modules/next/dist/bin/next", // Path to Next.js executable
        args: "start -p 4005", // Command to start Next.js server
        watch: true // Set to true if you want PM2 to watch for file changes and restart the app
      }
    ]
  };
