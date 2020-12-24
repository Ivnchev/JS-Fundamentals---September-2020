function foo(input) {
    const n = Number(input.shift())
    let c = 0;
    input.forEach(x => {
    let z = /U\$(?<u>[A-Z][a-z]{2,})U\$P@\$(?<p>[A-Z]?[a-z]{5,}\d+)P@\$/gm.exec(x);
        if(z) { 
           c++;
           console.log(`Registration was successful
Username: ${z.groups.u}, Password: ${z.groups.p}`);
        }else { console.log('Invalid username or password'); } 
    });
    console.log(`Successful registrations: ${c}`);
}

foo([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
  ]);
// foo([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412']);
// foo([   '3', 'U$myU$-->P@$asdqwe123P@$', 'Sara 1232412', 'U$NameU$P@$Pass234P@$'])