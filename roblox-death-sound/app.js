
const os = require('os')
const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')
const Roblox = path.join(os.homedir(), 'AppData', 'Local', 'Roblox')



if(!fs.existsSync(Roblox)) {
    console.error("Roblox is not installed!")
    process.exit(1)
}


const OuchLocation = path.join(Roblox,'Versions', fs.readFileSync('./input/rbx-version.txt', 'utf8'), 'content','sounds','ouch.ogg')

if(!fs.existsSync(OuchLocation)) {
    console.error('Could not find ouch.ogg!')
    process.exit(1)
}

fse.copy('./input/ouch.ogg', OuchLocation)


console.log('Success!')