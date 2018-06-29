var dns = require('dns');
const { promisify } = require('util');

var mum = dns.resolve4('www.mum.edu', function (err, addresses, family) {
  if(err) throw err;
  console.log(addresses);
});
promisify(dns.resolve4)('www.mum.edu').then(res => console.log("output using promise :", res));

var asyncAndWait = promisify(dns.resolve4);
async function DnsAsyncAwait() {
   try {
        var result = await asyncAndWait('www.mum.edu');
        console.log("async And Wait :", result);
    } catch (err) {
        console.log("Error", err);
    }
} 
DnsAsyncAwait();