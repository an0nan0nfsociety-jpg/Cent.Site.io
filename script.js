
document.getElementById('langBtn').addEventListener('click',()=>{
  const list = document.getElementById('langList');
  list.style.display = list.style.display==='block'?'none':'block';
});
document.querySelectorAll('#langList button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.getElementById('langBtn').textContent = btn.textContent.split(' ')[0];
    document.getElementById('langList').style.display='none';
    alert('Мова зміниться (у реальному сайті можна додати переклади для цього)');
  });
});
