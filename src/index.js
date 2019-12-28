import '@babel/polyfill'
import app from './server'
import {connection} from './database'

async function main(){
   await app.listen(app.get('port'))
   console.log('server on port', app.get('port'))
   connection()
}

main()

