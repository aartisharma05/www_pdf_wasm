importScripts('/assets/pdf_export_wasm.js');

var pdf_parser;

onmessage = async function (e) {
    if (e.data.type === 1) { //On File Select
        let f = e.data.f;
        let hashHex = "tmppdf";
        if (crypto.subtle) {
            const hashBuffer = await crypto.subtle.digest("SHA-256", f);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        }
        const fName = hashHex.slice(0, hashHex.length / 2)
        const fRandom = hashHex.slice(hashHex.length / 2, hashHex.length)
        let filename = fName + '.pdf';
        let stream = FS.open(filename, 'w+');
        FS.write(stream, f, 0, f.length, 0);
        FS.close(stream);
        if (pdf_parser) {
            //Call dealloc
        }
        pdf_parser = new Module.PDFParser(filename, fRandom);
        let result = pdf_parser.str_pdf_images();
        let files = result.split(",")
        let blobs = [];
        files.forEach(file => {
            if (file) {
                var arrayBufferView = new Uint8Array(FS.readFile(file));
                var blob = new Blob([arrayBufferView], { type: "image/png" });
                blobs.push(blob);
            }
        });
        let payload = { type: 1, data: blobs }
        postMessage(payload); //Post images
    } else if (e.data.type === 2) { // When Process 
        let pages = e.data.pages;
        let result = pdf_parser.str_parse_pdf(pages);
        let payload = { type: 2}
        postMessage(payload); //trigger show table

        let payload_table = { type: 3, data: result }
        postMessage(payload_table); //Table Data
    }
}

Module['onRuntimeInitialized'] = function () {
    let payload = { type: 0, data: null }
    postMessage(payload); // When wasm initilized
}