
const channels = [
{
name:"Sony Sports Ten 1",
stream:"https://cloudplay-sonyliv.pages.dev/ten1.m3u8"
},
{
name:"Sony Sports Ten 1 HD",
stream:"https://cloudplay-sonyliv.pages.dev/ten1hd.m3u8"
},
{
name:"Sony Sports Ten 2",
stream:"https://cloudplay-sonyliv.pages.dev/ten2.m3u8"
},
{
name:"Sony Sports Ten 2 HD",
stream:"https://cloudplay-sonyliv.pages.dev/ten2hd.m3u8"
},
{
name:"Sony Sports Ten 3",
stream:"https://cloudplay-sonyliv.pages.dev/ten3.m3u8"
},
{
name:"Sony Sports Ten 3 HD",
stream:"https://cloudplay-sonyliv.pages.dev/ten3hd.m3u8"
},
{
name:"Sony Sports Ten 4",
stream:"https://cloudplay-sonyliv.pages.dev/ten4.m3u8"
},
{
name:"Sony Sports Ten 4 HD",
stream:"https://cloudplay-sonyliv.pages.dev/ten4hd.m3u8"
},
{
name:"Sony Sports Ten 5",
stream:"https://cloudplay-sonyliv.pages.dev/ten5.m3u8"
},
{
name:"Sony Sports Ten 5 HD",
stream:"https://cloudplay-sonyliv.pages.dev/ten5hd.m3u8"
}
];

const channelsDiv=document.getElementById("channels");
const search=document.getElementById("search");
const modal=document.getElementById("playerModal");
const video=document.getElementById("video");
const closeBtn=document.getElementById("closeBtn");

let player;

display(channels);

function display(list){

channelsDiv.innerHTML="";

list.forEach(channel=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="logos/logo.png" alt="${channel.name}">
<h3>${channel.name}</h3>
`;

card.onclick=()=>play(channel.stream);

channelsDiv.appendChild(card);

});

}

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

const result=channels.filter(c=>
c.name.toLowerCase().includes(value)
);

display(result);

});

async function play(url){

modal.style.display="block";

if(player){

await player.destroy();

}

player=new shaka.Player(video);

player.addEventListener("error",function(e){
console.log(e);
});

try{

await player.load(url);

video.play();

}catch(e){

alert("Unable to play this channel.");

}

}

closeBtn.onclick=async()=>{

if(player){

await player.destroy();

}

video.pause();

modal.style.display="none";

};