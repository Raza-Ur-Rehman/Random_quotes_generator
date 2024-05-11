function randomQuotesGenerator() {
  let random_quotes = [
    "zindagi hai ya koi toofan hai",
    "zindagi jabre musalsal ki tarah kaati hai jaane kis jurm ki paayi hai saza yaad nahi. (Saghar Siddiqui)",
    "zindagi riyazi ka sawal nahi jis ka jawab maloom ho sake.(Wasif Ali Wasif)",
    "zindagi khud raaste banati hai, raaste zindagi nahi banate. (Saadat Hasan Manto)",
    "zara num ho to yeh matti bari zarkhez hai saqi.(Allama Iqbal)",
    "badhi manzilon ke musafir chota dil nahi rakhte. (Wasif Ali Wasif)",
    "insaan ke liye wohi kuch hai jis ke liye wo koshish kare. (Al-Quraan)",
    "Aqal mand apne aib ko khud dekhta hai aur bewaqoof ka aaeb dunya dekhti hai. (Sheikh Saadi)",
    "museebat agar insaan ko dolatmand nahi to aqal mand zaroor bana deti hai.",
    "hum taleem khareed sakte hain lekin aqal khuda ka ata karda tohfa hai. (Saadat Hasan Manto)",
    "Aqal mand hai woh shakhs jo anjaam soch kar kaam kare. (Hazrat Ali).",
    "waqt acha bhi aaye gaa nasir gham na kar zindagi parhi hai abhi. (Nasir Kazmi)",
    "waqt to waqt per badalta hai lekin insaan kisi bhi waqt badal sakta hai.",
    "mushkil waqt sabhi per aata hai koi bikhar jaata hai koi nikhar jaata hai",
    "sitaron se aagey jahan aur bhi hain abhi ishq ke imtihaan aur bhi hain. (Allama Iqbal)",
    "mangi hui mohabbat ka maza bigdhi hui sharaab jaisa hota hai. (Bano Qudsia)"
  ];

  let randomQuotes = Math.random() * random_quotes.length;
  let roundQuotes = Math.floor(randomQuotes);
  let quotesGen = random_quotes[roundQuotes];

  let quote = document.querySelector("#quotes");
  quote.innerText = `" ${quotesGen} "`;
}
