// Importação de Clientes Via CSV (Excel)

// POST /upload import.csv 

// Readable Streams (lendos aos poucos)
//  Writable Streams (enviando aos poucos)

// process.stdin
//     .pipe(process.stdout)

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {

    index = 1

    _read() {
        const i = this.index++
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {

                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }

}

new OneToHundredStream()
    .pipe(process.stdout)