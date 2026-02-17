// 4-Asynchronous Javascript Coding
async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans.results);
    console.log(ans.results[0].name); 
}

abcd();