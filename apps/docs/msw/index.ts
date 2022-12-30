async function initMocks() {
    if (typeof window === 'undefined') {
        const {server} = await import('./server')
        server.listen()
    } else {
        console.log('call')

        const {worker} = await import('./browser')
        worker.start()
    }
}

initMocks()

export {}
