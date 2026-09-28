// Escenario fijo 1600x900 escalado para caber en cualquier pantalla (sin scroll)
const stage=$('#stage');
function fit(){const b=62,w=innerWidth,h=innerHeight-b,k=Math.min(w/1600,h/900);
stage.style.transform=`translate(${(w-1600*k)/2}px,${(h-900*k)/2}px) scale(${k})`}
addEventListener('resize',fit);fit();
