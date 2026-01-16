/*
Assignment Details: 
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 */

function launchBrowser(browsername){
if (browsername==='Chrome') {console.log('This is Chrome browser')}
else if (browsername==='Firefox'){console.log('This is Firefox browser')}
else if (browsername==='Edge'){console.log('This is Edge browser')}
else {console.log('Unsupported Browser')}
}

function runTests(testtype){
switch (testtype){
    case "sanity":
        console.log('Launch ', browsername, 'and perform ', testtype );
        break
    case "regression":
        console.log('Launch ', browsername, 'and perform ', testtype );
        break
    default:
        console.log('Launch ', browsername, 'and perform smoke');
        break
}
}

let browsername = 'Chrome'
let testtype = 'regression'
launchBrowser(browsername)
runTests(testtype)
launchBrowser('IExplorer')
runTests()

