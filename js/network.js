// Fondo animado: red molecular en canvas
const cv=$('#cv'),g=cv.getContext('2d');let W,H,N=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;N=Array.from({length:Math.min(70,W/18|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))}
function dw(){g.clearRect(0,0,W,H);const c=getComputedStyle(document.documentElement).getPropertyValue('--t').trim()||'#2DD4BF';g.strokeStyle=c;g.fillStyle=c;
N.forEach((a,k)=>{a.x=(a.x+a.vx+W)%W;a.y=(a.y+a.vy+H)%H;g.beginPath();g.arc(a.x,a.y,2.2,0,7);g.fill();for(let m=k+1;m<N.length;m++){const b=N[m],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<150){g.globalAlpha=(1-d/150)*.5;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke();g.globalAlpha=1}}});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)requestAnimationFrame(dw)}
addEventListener('resize',rs);rs();dw();
