import HyperExpress from "hyper-express"
const webserver = new HyperExpress.Server();

// Create GET route to serve 'Hello World'
webserver.get('/', (request, response) => {
    response.send('Hello World');
})

await webserver.listen(8090)