(function () {
  var btnDescargar = document.getElementById('btn-descargar');
  var btnTop = document.getElementById('btn-top');

  function generarDoc() {
    var contenido = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office'
      xmlns:w='urn:schemas-microsoft-com:office:word'
      xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="UTF-8">
<title>Manejo del Estrés — Guía Informativa</title>
<style>
  body { font-family: 'Calibri', 'Segoe UI', sans-serif; font-size: 12pt; line-height: 1.6; color: #2c3e4f; margin: 40px; }
  h1 { color: #1a7c6b; font-size: 26pt; border-bottom: 3px solid #1a7c6b; padding-bottom: 8px; }
  h2 { color: #1a7c6b; font-size: 18pt; margin-top: 24px; }
  h3 { color: #2b9c8a; font-size: 14pt; }
  p { margin-bottom: 10px; }
  ul, ol { margin: 8px 0 16px; padding-left: 24px; }
  li { margin-bottom: 6px; }
  .nota { background: #e8f5f0; padding: 12px; border-left: 4px solid #1a7c6b; margin: 16px 0; }
  .footer-text { margin-top: 36px; font-size: 10pt; color: #5a6b7a; border-top: 1px solid #ccc; padding-top: 12px; }
</style>
</head>
<body>

<h1>Manejo del Estrés — Guía Informativa</h1>

<h2>¿Qué es el estrés?</h2>
<p>El estrés es una respuesta natural del cuerpo ante situaciones que percibe como amenazantes o desafiantes. Cuando enfrentamos una presión —física, emocional o mental— el organismo activa la respuesta de lucha o huida, liberando hormonas como el cortisol y la adrenalina.</p>
<p>En dosis moderadas, el estrés puede ser útil para rendir mejor; pero cuando se vuelve crónico, afecta negativamente la salud física y mental.</p>

<h2>Los dos tipos de estrés</h2>

<h3>Estrés agudo</h3>
<p>Forma más común y de corta duración. Aparece ante situaciones puntuales (exámenes, presentaciones, imprevistos). Puede ser positivo (eustrés) porque ayuda a concentrarse. Síntomas: tensión muscular, ansiedad leve, palpitaciones. Duración: minutos u horas.</p>

<h3>Estrés crónico</h3>
<p>Ocurre cuando las situaciones estresantes se mantienen durante semanas, meses o años. Es el tipo más dañino. Surge de problemas continuos como dificultades económicas, entornos laborales tóxicos o enfermedades prolongadas. Síntomas: agotamiento, insomnio, irritabilidad. Impacto: riesgo de depresión, hipertensión y enfermedades cardíacas.</p>

<h2>Cómo manejar el estrés</h2>
<ol>
  <li><strong>Ejercicio físico regular:</strong> Caminar 30 minutos al día reduce los niveles de cortisol.</li>
  <li><strong>Técnicas de respiración:</strong> Respiración diafragmática (4 s inhalar, 4 retener, 6 exhalar).</li>
  <li><strong>Mindfulness y meditación:</strong> Ayuda a romper el ciclo de pensamientos repetitivos.</li>
  <li><strong>Sueño de calidad:</strong> 7–9 horas regula las hormonas del estrés.</li>
  <li><strong>Alimentación balanceada:</strong> Reducir cafeína y azúcar; aumentar omega-3, magnesio y vitaminas B.</li>
  <li><strong>Conexión social:</strong> Hablar con amigos, familiares o un profesional de la salud mental.</li>
  <li><strong>Gestión del tiempo:</strong> Priorizar tareas, establecer límites y delegar.</li>
</ol>

<div class="nota">
  <p><strong>Nota importante:</strong> Si el estrés interfiere con tu vida diaria, busca ayuda profesional. Un psicólogo o psiquiatra puede ofrecer herramientas personalizadas.</p>
</div>

<h2>Recursos adicionales</h2>
<ul>
  <li>OMS — Estrés: https://www.who.int/es/health-topics/stress</li>
  <li>American Psychological Association: https://www.apa.org/topics/stress</li>
  <li>Mayo Clinic — Manejo del estrés: https://www.mayoclinic.org/es/healthy-lifestyle/stress-management</li>
</ul>

<div class="footer-text">
  <p>Documento generado desde el Blog Manejo del Estrés — Octubre 2026</p>
  <p>Creadores: Ana María López, Carlos Eduardo Ramírez, María Fernanda Torres, Juan Pablo Mendoza</p>
  <p>Este contenido es educativo y no sustituye la consulta profesional.</p>
</div>

</body></html>`;
    return contenido;
  }

  function descargarDoc() {
    var html = generarDoc();
    var blob = new Blob([html], { type: 'application/msword' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Guia_Manejo_Estres.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (btnDescargar) {
    btnDescargar.addEventListener('click', descargarDoc);
  }

  window.addEventListener('scroll', function () {
    if (btnTop) {
      if (window.scrollY > 400) {
        btnTop.classList.add('visible');
      } else {
        btnTop.classList.remove('visible');
      }
    }
  });

  if (btnTop) {
    btnTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

(function() {
  function iniciarMariposarioUltraBordes() {
    if (!document.body) return setTimeout(iniciarMariposarioUltraBordes, 50);

    const estilo = document.createElement('style');
    estilo.innerHTML = `
      .mariposario-box {
        position: fixed !important;
        pointer-events: none !important;
        z-index: 999999 !important;
        user-select: none !important;
        will-change: transform, left, top, opacity;
      }

      .mariposario-ala {
        display: inline-block;
        will-change: transform;
      }

      /* Aleteos */
      @keyframes aleteoNormal {
        0% { transform: scaleX(1) rotate(-10deg); }
        100% { transform: scaleX(0.25) rotate(15deg); }
      }
      @keyframes aleteoInvertido {
        0% { transform: scaleX(-1) rotate(10deg); }
        100% { transform: scaleX(-0.25) rotate(-15deg); }
      }

      /* Trayectorias */
      @keyframes vueloIzquierdaDerecha {
        0% { left: -50px; opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { left: 103vw; opacity: 0; }
      }

      @keyframes vueloDerechaIzquierda {
        0% { left: 103vw; opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { left: -50px; opacity: 0; }
      }

      @keyframes vueloAbajoArriba {
        0% { top: 103vh; opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { top: -50px; opacity: 0; }
      }
    `;
    document.head.appendChild(estilo);

    const colores = [
      'none',                                    // Azul / Monarca
      'hue-rotate(120deg)',                      // Verde Esmeralda
      'hue-rotate(200deg)',                      // Violeta Mística
      'hue-rotate(280deg) saturate(1.5)',        // Rosa Fucsia
      'hue-rotate(45deg) brightness(1.2)',       // Dorada / Ámbar
      'hue-rotate(160deg) brightness(1.1)',      // Turquesa / Celeste
      'hue-rotate(320deg) saturate(1.8)'         // Roja / Carmín
    ];

    let esRafagaInicial = true;

    function crearMariposa(tipo = 'margen') {
      const box = document.createElement('div');
      box.className = 'mariposario-box';

      const ala = document.createElement('span');
      ala.className = 'mariposario-ala';
      ala.innerText = '🦋';

      ala.style.filter = colores[Math.floor(Math.random() * colores.length)];

      let tamano, duracion, aleteoVel;

      if (tipo === 'rafaga') {
        // 1. RÁFAGA DE ENTRADA: Cruzan veloces toda la pantalla al abrir la página
        tamano = 22 + Math.floor(Math.random() * 18);
        duracion = 3 + (Math.random() * 2);
        aleteoVel = 0.09 + (Math.random() * 0.1);

        const dir = Math.floor(Math.random() * 3);
        if (dir === 0) {
          box.style.top = (Math.random() * 80 + 10) + 'vh';
          box.style.animation = `vueloIzquierdaDerecha ${duracion}s linear forwards`;
          ala.style.animation = `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out`;
        } else if (dir === 1) {
          box.style.top = (Math.random() * 80 + 10) + 'vh';
          box.style.animation = `vueloDerechaIzquierda ${duracion}s linear forwards`;
          ala.style.animation = `aleteoInvertido ${aleteoVel}s infinite alternate ease-in-out`;
        } else {
          box.style.left = (Math.random() * 80 + 10) + 'vw';
          box.style.animation = `vueloAbajoArriba ${duracion}s linear forwards`;
          ala.style.animation = `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out`;
        }

      } else if (tipo === 'cruce') {
        // 2. CRUCE MUY ESPORÁDICO: Solo 1 mariposa raras veces atraviesa el centro
        tamano = 18 + Math.floor(Math.random() * 6);
        duracion = 12 + (Math.random() * 4); // Vuelo lento y suave
        aleteoVel = 0.22 + (Math.random() * 0.15);
        box.style.opacity = '0.65'; // Semitransparente para no estorbar la vista

        const dir = Math.random() > 0.5 ? 'vueloIzquierdaDerecha' : 'vueloDerechaIzquierda';
        box.style.top = (Math.random() * 40 + 30) + 'vh';
        box.style.animation = `${dir} ${duracion}s linear forwards`;
        ala.style.animation = dir === 'vueloIzquierdaDerecha'
          ? `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out`
          : `aleteoInvertido ${aleteoVel}s infinite alternate ease-in-out`;

      } else {
        // 3. MODO LECTURA: Pegadas estrictamente al marco exterior
        tamano = 14 + Math.floor(Math.random() * 10);
        duracion = 10 + (Math.random() * 6);
        aleteoVel = 0.20 + (Math.random() * 0.2);

        const zona = Math.floor(Math.random() * 4);
        if (zona === 0) {
          // Borde Izquierdo Extremo (primeros 4% de la pantalla)
          box.style.left = (Math.random() * 3 + 1) + 'vw';
          box.style.animation = `vueloAbajoArriba ${duracion}s linear forwards`;
          ala.style.animation = `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out`;
        } else if (zona === 1) {
          // Borde Derecho Extremo (últimos 4% de la pantalla)
          box.style.left = (Math.random() * 3 + 95) + 'vw';
          box.style.animation = `vueloAbajoArriba ${duracion}s linear forwards`;
          ala.style.animation = `aleteoInvertido ${aleteoVel}s infinite alternate ease-in-out`;
        } else if (zona === 2) {
          // Borde Superior Extremo (primeros 4% de altura)
          box.style.top = (Math.random() * 3 + 1) + 'vh';
          const dir = Math.random() > 0.5 ? 'vueloIzquierdaDerecha' : 'vueloDerechaIzquierda';
          box.style.animation = `${dir} ${duracion}s linear forwards`;
          ala.style.animation = dir === 'vueloIzquierdaDerecha' 
            ? `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out` 
            : `aleteoInvertido ${aleteoVel}s infinite alternate ease-in-out`;
        } else {
          // Borde Inferior Extremo (últimos 4% de altura)
          box.style.top = (Math.random() * 3 + 95) + 'vh';
          const dir = Math.random() > 0.5 ? 'vueloIzquierdaDerecha' : 'vueloDerechaIzquierda';
          box.style.animation = `${dir} ${duracion}s linear forwards`;
          ala.style.animation = dir === 'vueloIzquierdaDerecha' 
            ? `aleteoNormal ${aleteoVel}s infinite alternate ease-in-out` 
            : `aleteoInvertido ${aleteoVel}s infinite alternate ease-in-out`;
        }
      }

      ala.style.fontSize = tamano + 'px';
      box.appendChild(ala);
      document.body.appendChild(box);

      setTimeout(() => { box.remove(); }, duracion * 1000);
    }

    // 1. Ráfaga inicial al abrir la ventana (16 mariposas veloces)
    for (let i = 0; i < 16; i++) {
      setTimeout(() => crearMariposa('rafaga'), i * 80);
    }

    // Cierra la ráfaga de entrada tras 3.2 segundos
    setTimeout(() => { esRafagaInicial = false; }, 3200);

    // 2. Mantener la presencia constante en las esquinas/marcos exteriores (cada 2.8s)
    setInterval(() => {
      if (!esRafagaInicial) {
        crearMariposa('margen');
      }
    }, 2800);

    // 3. Cruce del centro MUY RARO: solo ocurre 1 vez cada 35 segundos
    setInterval(() => {
      if (!esRafagaInicial) {
        crearMariposa('cruce');
      }
    }, 35000);
  }

  iniciarMariposarioUltraBordes();
})();