function lanzarConfeti() {
    const confetti = document.getElementById('confetti');
    confetti.innerHTML = ''; // limpiar antes
  
    for (let i = 0; i < 100; i++) {
      const span = document.createElement('span');
      span.style.left = Math.random() * 100 + 'vw';
      span.style.animationDelay = Math.random() * 3 + 's';
      span.style.setProperty('--i', Math.random());
      confetti.appendChild(span);
    }
  
    setTimeout(() => {
      confetti.innerHTML = '';
    }, 4000);
  }
  