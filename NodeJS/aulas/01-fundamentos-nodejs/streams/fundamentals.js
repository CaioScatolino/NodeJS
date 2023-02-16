// Importação de Clientes Via CSV (Excel)

// POST /upload import.csv 

// Readable Streams (lendos aos poucos)
//  Writable Streams (enviando aos poucos)

// process.stdin
//     .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

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

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed =  Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed))) //
        // Teve que usar o buffer para não dar erro, usou buffer para transicionar entre streams 
    }
}

class MultiplyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}


new OneToHundredStream()
    .pipe(new InverseNumberStream())
    .pipe(new MultiplyByTenStream())