
const os = require('os')


// info about current user


const user = os.userInfo()
console.log(user)

// method returns system uptime ( in seconds)


console.log('The system uptime is', os.uptime());


console.log(os.type())
console.log(os.freemem())
console.log(os.totalmem())