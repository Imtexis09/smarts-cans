// Navegación, contadores animados, teclado, táctil, tema y pantalla completa
function cnt(e){const n=+e.dataset.n,t0=performance.now();(function f(t){const k=Math.min(1,(t-t0)/1400),v=Math.round(n*(1-Math.pow(1-k,3)));e.textContent=(e.dataset.p||'')+v+(e.dataset.s||'');if(k<1)requestAnimationFrame(f)})(t0)}
function go(n){i=Math.max(0,Math.min(S.length-1,n));S.forEach((s,k)=>{s.classList.toggle('on',k==i);if(k==i){s.querySelectorAll('.r').forEach((e,j)=>e.style.setProperty('--i',j));s.querySelectorAll('.n').forEach(cnt);s.scrollTop=0}});
$('#ct').textContent=(i+1)+' / '+S.length;$('#pg').style.width=((i+1)/S.length*100)+'%';$('#pv').disabled=i==0;$('#nx').disabled=i==S.length-1;try{history.replaceState(null,'','#'+(i+1))}catch(e){}}
$('#pv').onclick=()=>go(i-1);$('#nx').onclick=()=>go(i+1);
$('#fs').onclick=()=>{try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch(e){}};
$('#th').onclick=()=>{const r=document.documentElement,d=!matchMedia('(prefers-color-scheme:light)').matches;r.dataset.theme=(r.dataset.theme||(d?'dark':'light'))=='dark'?'light':'dark'};
addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();go(i+1)}if(['ArrowLeft','PageUp'].includes(e.key))go(i-1);if(e.key=='f')$('#fs').click()});
let x0;addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>70)go(i+(d<0?1:-1))});
