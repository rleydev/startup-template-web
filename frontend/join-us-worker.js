let userEvents = [];

function send5Events(data) {
    self.postMessage(data)
}

let eventObj = {
    type: '',
    event: ''
}


self.onmessage = (e) => {
    let message = e.data
    if (message.type === 'userEvent') {
        eventObj.type = message.type
        eventObj.event = message.event
        
        userEvents.push(eventObj)
    }

    if (userEvents.length === 5 ) {
        send5Events(userEvents)
        userEvents = []
    } 
}