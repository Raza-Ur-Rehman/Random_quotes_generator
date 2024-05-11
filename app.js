function randomQuotesGenerator() {
  let quotes = [
    "Dil ki baat chhupana aasan nahi hota,Har koi khushnaseeb nahi hota,Pyar to sabko milta hai zindagi mein,Magar har koi aap jaisa dost nahi hota.",
    "Mohabbat mein har khushi aam nahi hoti,Har muskurahat pyaar ki shaan nahi hoti,Kuch log samajh paate hain ishq ko,Magar har dilwala asaan nahi hota.",
    "Dard ki gehraaiyon se guzarna hai mujhe,Muskurana seekha hai, rona nahi seekha,Zindagi ke safar mein saathi chahiye,Dosti ka asli matlab samjha nahi seekha.",
    "Raat guzri phir mahekti subah aayi,Dil dhadka phir se yaad teri aayi,Zindagi haseen hai, phir bhi tanhai hai,Kyunki teri dosti ki kami har pal mehsoos aayi.",
    "Mohabbat karke dekho, dil ko aaraam milega,Pyar karne se dil ko sukoon milega,Mushkil hai pyar ko bhulana,Kyunki har kadam par tera hi saath chahiye.",
    "Khushbu teri yaadon ki mere dil ko behlaati hai,Tere saath bita har lamha yaadgaar hota hai,Mohabbat mein teri hamesha mere dil mein rahegi,Kyunki tere bina meri zindagi adhoori hoti hai.",
    "Dil ki baat dil mein na rakhna,Aankhon se aankhon ki baat kehna,Dost toh har koi bana sakta hai,Magar dosti nibhana mushkil hota hai.",
    "Dil ki duniya mein koi gham na ho,Khuda kare zindagi mein koi kami na ho,Har pal pyar ka ehsaas ho tumhe,Dosti ka saath ho aur yaadon ka sahara ho tumhe.",
    "Tanhaiyon mein bhi tera saath chahiye,Muskurahaton mein bhi tera saath chahiye,Zindagi mein har kadam par yaad aaye tu,Kyunki teri dosti hi meri zindagi ka asli maqsad hai.",
    "Dosti ka rishta anokha hai,Na gham ke liye na rone ke liye,Zindagi mein har pal dosti ka ehsaas ho,Kyunki dosti hi sabse khoobsurat rishta hai."];
  
    let randomQuotes = Math.random() * quotes.length;
    let roundQuotes = Math.floor(randomQuotes);
    let quotesGen = quotes[roundQuotes];
    
    let random_Quotes =document.querySelector('#quotes');
    quotes.innertext = `" ${quotesGen} " `;
  }