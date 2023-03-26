function extractMails(string) {

    // let regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g
    let pattern = /(?<=\s|^)[A-Za-z0-9]+[.\-_]*[A-Za-z0-9]*@[A-Za-z]+[-]*[A-Za-z]*\.[A-Za-z]+[-]*[\.]*[A-Za-z]+/g
    let match = string.match(pattern)
    match.forEach(element => {
        console.log(element)
    });
}
extractMails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`)