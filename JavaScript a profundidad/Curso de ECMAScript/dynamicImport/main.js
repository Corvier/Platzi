const webSystemTemplate = {}
let algo = '';
for (let i=0; i<4; i++) {
    webSystemTemplate[`webSystem${i+1}`] = {
        webSystemName : `NAME${i+2}`,
        webSystemNotes : `NOTE${i+2}`,
        webSystemLink : `LINKS${i+2}`,
    }
}

for (let i=0; i<Object.keys(webSystemTemplate).length; i++) {
    console.log(webSystemTemplate[`webSystem${i+1}`].webSystemName);
    console.log(webSystemTemplate[`webSystem${i+1}`].webSystemNotes);
    console.log(webSystemTemplate[`webSystem${i+1}`].webSystemLink);
}