function EncryptingPassword(array) {
    let numberOfInputs = Number(array.shift());
    let regex = /^(?<group>(.{1,}))(>){1}(?<first>[0-9]{3})([|])(?<second>[a-z]{3})([|])(?<third>[A-Z]{3})([|])(?<four>[^.<>]{3})([<])\k<group>$/g;

    for (let i = 0; i < numberOfInputs; i++) {
        let currPass = array[i];
        let match = currPass.match(regex);
        if (match === null) {
            console.log(`Try another password!`)
        } else if (match !== null) {
            let matchAll = regex.exec(currPass)
            console.log(`Password: ${matchAll.groups.first}${matchAll.groups.second}${matchAll.groups.third}${matchAll.groups.four}`)
        }
    }

}
EncryptingPassword(["3",

    "##>00|no|NO|!!!?<###",

    "##>123|yes|YES|!!!<##",

    "$$<111|noo|NOPE|<<>$$"])

console.log(`-------------------------------`)

EncryptingPassword(["5",

    "aa>111|mqu|BAU|mqu<aa",

    "()>111!aaa!AAA!^&*<()",

    "o>088|abc|AAA|***<o",

    "asd>asd|asd|ASD|asd<asd",

    "*>088|zzzz|ZzZ|123<*",
    "*>088|zzzz|ZzZ|123<*",
    "*>088|zzzz|ZzZ|123<*"])
