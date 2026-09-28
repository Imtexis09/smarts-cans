// Datos y render de contenido dinámico (productos, hoja de ruta, redes)
$('#rs').innerHTML=['HDPE','PP','PVC','PET','PS'].map((t,k)=>`<rect x="${6+k*78}" y="18" width="68" height="74" rx="10" fill="none" stroke="var(--a)" stroke-width="3"/><text x="${40+k*78}" y="62">${t}</text>`).join('');
const P=[['Disco de vinilo','<0.02%','deformación · plastificante biobasado','<circle cx="50" cy="50" r="40" class="st"/><circle cx="50" cy="50" r="25" class="st" opacity=".5"/><circle cx="50" cy="50" r="7" class="da"/>'],
['Pala','>3.5 GPa','flexión · 20% microfibra de basalto','<path d="M50 8V48" class="st"/><path d="M27 48H73L64 92H36Z" class="st"/>'],
['Tapa de plumón','>5,000','ciclos snap-fit · resistente a solventes','<rect x="28" y="16" width="44" height="68" rx="9" class="st"/><rect x="28" y="16" width="44" height="24" rx="7" class="st" fill="var(--t)" fill-opacity=".3"/>'],
['Lápiz','= cedro','maquinabilidad · 30% lignina y espuma','<path d="M18 84L27 62L72 16L85 29L40 74Z" class="st"/><path d="M18 84L27 62L40 74Z" class="da"/>'],
['Pantalón','>4.5','cN/dtex · estirado en frío','<path d="M28 8H72L77 92H55L50 42L45 92H23Z" class="st"/>']];
$('#pr').innerHTML=P.map(p=>`<div class="c r"><svg viewBox="0 0 100 100" style="max-width:110px" aria-hidden="true">${p[3]}</svg><b class="l">${p[0]}</b><b class="big" style="font-size:34px;white-space:nowrap">${p[1].replace('<','&lt;').replace('>','&gt;')}</b><p>${p[2]}</p></div>`).join('');
const F=[['1–6','Síntesis','Formulaciones vitriméricas'],['7–12','Piloto','Smart-REX y sensores FTIR'],['13–18','Productos','Moldeo, hilado y ajuste de IA'],['19–24','Escalado','Certificación de resina reciclada']];
$('#tl').innerHTML=F.map(f=>`<div class="c r"><b class="big" style="font-size:48px">${f[0]}</b><b class="l">${f[1]}</b><p>${f[2]}</p></div>`).join('');
$('#tk').innerHTML=F.map((f,k)=>`<circle cx="${30+k*313}" cy="30" r="11" class="da"/><text x="${30+k*313}" y="80" font-size="20" font-weight="700" text-anchor="${k?'middle':'start'}">Mes ${f[0].split('–')[0]}</text>`).join('');
function lat(id,m){let h='';const c=6,r=4,dx=240/7,dy=150/5;
if(m==0)for(let k=0;k<5;k++){let p='M10 '+(20+k*28);for(let x=10;x<=230;x+=10)p+=' L'+x+' '+(20+k*28+Math.sin(x/14+k*2)*9).toFixed(1);h+=`<path d="${p}" class="st" opacity=".8"/>`}
else{for(let a=1;a<=c;a++)for(let b=1;b<=r;b++){if(a<c)h+=`<line x1="${a*dx}" y1="${b*dy}" x2="${(a+1)*dx}" y2="${b*dy}" class="st"/>`;if(b<r)h+=`<line x1="${a*dx}" y1="${b*dy}" x2="${a*dx}" y2="${(b+1)*dy}" class="st"/>`}
for(let a=1;a<=c;a++)for(let b=1;b<=r;b++){const v=m==2&&(a*b)%4==0;h+=`<circle cx="${a*dx}" cy="${b*dy}" r="${v?7:5}" class="${v?'da pu':'dt'}"/>`}}
$(id).innerHTML=h}
lat('#n0',0);lat('#n1',1);lat('#n2',2);
