function unlock(){
if(document.getElementById("password").value==="MadamJi❤️"){
document.getElementById("lockScreen").style.display="none";
document.getElementById("main").style.display="block";
}else{
document.getElementById("error").innerText="Wrong password Madam Ji 💔";
}
}

let slides=[
{
title:"❤️ I Love You Madam Ji ❤️",
text:"Every heartbeat of mine whispers your name 🥰",
extra:"💖"
},
{
title:"💫 My Feelings",
text:"You are not a chapter, you are my whole story 🌸",
extra:"✨"
},
{
title:"💍 My Promise",
text:"I want to marry you and spend my entire life with you 👰🤵",
extra:"💑"
},
{
title:"🥺 Will You Marry Me?",
text:"Say YES Madam Ji ❤️",
extra:`<button onclick="yes()">YES ❤️</button>
<button onclick="yes()">Always YES 😌</button>`
}
];

let i=0;

function nextSlide(){
i=(i+1)%slides.length;
document.getElementById("content").innerHTML=
`<h1 class="glow">${slides[i].title}</h1>
<p>${slides[i].text}</p>
<div style="font-size:30px">${slides[i].extra}</div>`;
}

function yes(){
document.getElementById("content").innerHTML=
"<h1 class='glow'>😍 Forever Yours 😍</h1><p>You made me the happiest person alive ❤️</p><div style='font-size:40px'>💖💍💑</div>";
}
