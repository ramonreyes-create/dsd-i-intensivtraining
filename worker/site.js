const HTML = String.raw`<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="DSD I Intensivtraining für die 10. Klasse: Lesen, Hören, Schreiben, Sprechen und Prüfungssimulationen.">
  <meta property="og:title" content="DSD I Intensivtraining – 10. Klasse">
  <meta property="og:description" content="Jeden Tag ein Schritt näher zum DSD I.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="__ORIGIN__/">
  <meta property="og:image" content="__ORIGIN__/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="DSD I Intensivtraining – 10. Klasse">
  <meta name="twitter:description" content="Jeden Tag ein Schritt näher zum DSD I.">
  <meta name="twitter:image" content="__ORIGIN__/og.png">
  <title>DSD I Intensivtraining – 10. Klasse</title>
  <style>
    :root{--navy:#112a46;--navy2:#193d63;--blue:#3268f0;--sky:#dce8ff;--mint:#bce9d3;--green:#176e51;--cream:#fff8e8;--gold:#e5a72f;--ink:#182434;--muted:#657386;--line:#d9e1ec;--paper:#fff;--bg:#f3f6fa;--red:#b33a3a}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 Inter,Arial,sans-serif}
    button,input,select,textarea{font:inherit}button{cursor:pointer}.topbar{background:var(--navy);color:#fff;padding:13px 5vw;display:flex;align-items:center;justify-content:space-between;gap:18px;position:sticky;top:0;z-index:30}
    .brand{display:flex;align-items:center;gap:11px;font-weight:900}.brand-mark{width:34px;height:34px;border-radius:10px;background:var(--gold);display:grid;place-items:center;color:var(--navy)}
    nav{display:flex;gap:7px;flex-wrap:wrap}nav button,.ghost{border:0;background:transparent;color:inherit;padding:8px 10px;border-radius:9px;font-weight:700}nav button:hover,.ghost:hover{background:#ffffff18}
    .hero{background:linear-gradient(125deg,var(--navy),var(--navy2));color:#fff;padding:58px 5vw 46px;overflow:hidden;position:relative}.hero:after{content:"";position:absolute;width:430px;height:430px;border-radius:50%;right:-130px;top:-210px;border:70px solid #ffffff0a}
    .hero-grid{max-width:1180px;margin:auto;display:grid;grid-template-columns:1.35fr .65fr;gap:45px;position:relative;z-index:1}.eyebrow{font-weight:800;color:#a8c6ff;text-transform:uppercase;letter-spacing:.12em;font-size:13px}
    h1{font-size:clamp(38px,6vw,68px);line-height:1.02;margin:12px 0 18px;letter-spacing:-.045em}.hero p{max-width:700px;color:#dfe9f5;font-size:18px}.cta{display:flex;gap:11px;flex-wrap:wrap;margin-top:26px}
    .btn{border:0;border-radius:11px;padding:11px 16px;background:var(--blue);color:#fff;font-weight:850}.btn:hover{filter:brightness(.96)}.btn.light{background:#fff;color:var(--navy)}.btn.soft{background:#e9eff8;color:var(--navy)}.btn.danger{background:#fce9e9;color:var(--red)}
    .count-card{align-self:center;background:#ffffff10;border:1px solid #ffffff22;border-radius:22px;padding:23px;backdrop-filter:blur(10px)}.count-card h2{margin:0 0 16px;font-size:17px}.count-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-top:1px solid #ffffff1c}.count-row strong{font-size:25px}.count-row span{font-size:13px;color:#c9d7e7}
    main{max-width:1180px;margin:auto;padding:38px 24px 70px}.intro-grid{display:grid;grid-template-columns:1.3fr .7fr;gap:22px;align-items:start}.panel{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:0 8px 22px #18325b0b}
    .panel h2,.section-head h2{margin:0;color:var(--navy);font-size:25px}.student-form{display:grid;grid-template-columns:1fr 1fr auto;gap:10px;margin-top:16px}.student-form input,.admin input,.admin select,.admin textarea{width:100%;border:1.5px solid #b9c8da;border-radius:10px;padding:10px 12px;background:#fff}.student-form button{white-space:nowrap}
    .progress-wrap{height:12px;border-radius:99px;background:#e7edf5;overflow:hidden;margin:16px 0 8px}.progress-bar{height:100%;width:0;background:linear-gradient(90deg,var(--blue),#49ad82);transition:.3s}.muted{color:var(--muted)}.small{font-size:13px}
    .focus{background:var(--cream);border-color:#eed9a6}.focus-tag{display:inline-block;padding:4px 8px;background:#ffebb8;color:#7d5400;border-radius:99px;font-size:12px;font-weight:800}.focus h3{font-size:23px;margin:12px 0 6px;color:var(--navy)}
    .section{margin-top:42px}.section-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:16px}.section-head p{margin:4px 0 0;color:var(--muted)}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:15px}
    .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:19px;display:flex;flex-direction:column;min-height:210px;transition:.2s}.card:hover{transform:translateY(-2px);box-shadow:0 12px 28px #17345e13}.icon{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--sky);color:var(--blue);font-weight:900}
    .card h3{margin:14px 0 6px;color:var(--navy)}.card p{margin:0 0 15px;color:var(--muted);flex:1}.meta-line{display:flex;justify-content:space-between;gap:10px;color:var(--muted);font-size:12px;margin-bottom:13px}
    .exercise{display:none;margin-top:18px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px}.exercise.active{display:block}.exercise h3{color:var(--navy);margin-top:0}.question{padding:14px 0;border-top:1px solid var(--line)}.question:first-of-type{border-top:0}.question label{display:block;margin:7px 0}.question input[type=radio]{margin-right:8px}.question textarea{width:100%;min-height:120px;border:1.5px solid #b9c8da;border-radius:10px;padding:11px}
    .result{font-weight:800;margin-left:10px}.ok{color:var(--green)}.bad{color:var(--red)}.materials{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.material{background:#fff;border:1px solid var(--line);border-radius:14px;padding:17px}.material-top{display:flex;justify-content:space-between;gap:10px}.badge{padding:4px 8px;border-radius:99px;background:var(--sky);color:var(--blue);font-size:12px;font-weight:800}
    .empty{padding:25px;text-align:center;border:2px dashed var(--line);border-radius:15px;color:var(--muted);grid-column:1/-1}.oral-banner{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;background:var(--mint);border:1px solid #8ccdaf;border-radius:18px;padding:22px}.oral-banner h3{margin:0;color:#104c38;font-size:23px}
    .admin{display:none;margin-top:22px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:23px}.admin.show{display:block}.admin-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.admin .full{grid-column:1/-1}.upload-note{padding:11px;background:var(--cream);border-radius:10px;color:#74551a;font-size:13px}
    .toast{position:fixed;right:20px;bottom:20px;max-width:380px;padding:13px 16px;border-radius:12px;background:var(--navy);color:#fff;box-shadow:0 12px 30px #0003;display:none;z-index:50}.toast.show{display:block}
    footer{background:var(--navy);color:#cbd8e6;padding:26px 5vw}.footer-in{max-width:1180px;margin:auto;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
    @media(max-width:850px){.hero-grid,.intro-grid{grid-template-columns:1fr}.cards{grid-template-columns:1fr 1fr}.student-form{grid-template-columns:1fr}.admin-grid{grid-template-columns:1fr}.admin .full{grid-column:auto}}
    @media(max-width:580px){nav button:not(.teacher){display:none}.cards,.materials{grid-template-columns:1fr}.oral-banner{grid-template-columns:1fr}.hero{padding-top:40px}main{padding-left:15px;padding-right:15px}}
  </style>
</head>
<body>
  <header class="topbar">
    <div class="brand"><span class="brand-mark">D1</span><span>DSD I Intensivtraining</span></div>
    <nav>
      <button onclick="go('training')">Training</button>
      <button onclick="go('simulationen')">Simulationen</button>
      <button onclick="go('sprechen')">Sprechen</button>
      <button class="teacher" onclick="toggleAdmin()">Lehrkraft</button>
    </nav>
  </header>
  <section class="hero">
    <div class="hero-grid">
      <div>
        <div class="eyebrow">10. Klasse · Prüfungsvorbereitung 2026</div>
        <h1>Jeden Tag ein Schritt näher zum DSD I.</h1>
        <p>Kurze, gezielte Übungen für Lesen, Hören, Schreiben und Sprechen – mit echtem Prüfungsfokus und klarer Fortschrittsanzeige.</p>
        <div class="cta"><button class="btn light" onclick="startToday()">Heute trainieren</button><button class="ghost" onclick="go('simulationen')">Zu den Simulationen →</button></div>
      </div>
      <aside class="count-card">
        <h2>Dein Prüfungs-Countdown</h2>
        <div class="count-row"><div><b>Schriftliche Prüfung</b><br><span>19. August 2026</span></div><strong id="writtenDays">–</strong></div>
        <div class="count-row"><div><b>Mündliche Prüfung</b><br><span>1. September 2026</span></div><strong id="oralDays">–</strong></div>
      </aside>
    </div>
  </section>
  <main>
    <section class="intro-grid">
      <div class="panel">
        <h2>Mein Training</h2>
        <p class="muted">Trage deinen Namen ein, damit Ergebnisse gespeichert werden können.</p>
        <div class="student-form"><input id="studentName" placeholder="Vor- und Nachname"><input id="studentCourse" placeholder="Klasse / Kurs"><button class="btn" onclick="saveStudent()">Speichern</button></div>
        <div class="progress-wrap"><div class="progress-bar" id="progressBar"></div></div>
        <div class="small"><span id="completedCount">0</span> von 5 Trainingsbereichen abgeschlossen</div>
      </div>
      <div class="panel focus">
        <span class="focus-tag">HEUTIGER FOKUS</span>
        <h3>Schreiben: Argumentieren</h3>
        <p>Meinung formulieren, Argument begründen und ein konkretes Beispiel ergänzen.</p>
        <button class="btn" onclick="openExercise('schreiben')">Training öffnen</button>
      </div>
    </section>

    <section class="section" id="training">
      <div class="section-head"><div><h2>Intensivtraining</h2><p>Fünf Bereiche, kurze Einheiten, direktes Feedback.</p></div><span class="badge">B1 → DSD I</span></div>
      <div class="cards">
        <article class="card"><span class="icon">L</span><h3>Leseverstehen</h3><p>Informationen finden, Aussagen prüfen und Textabschnitte zuordnen.</p><div class="meta-line"><span>8–10 Min.</span><span>3 Aufgaben</span></div><button class="btn soft" onclick="openExercise('lesen')">Üben</button></article>
        <article class="card"><span class="icon">H</span><h3>Hörverstehen</h3><p>Hörstrategien vorbereiten und Schlüsselinformationen erkennen.</p><div class="meta-line"><span>7 Min.</span><span>Strategietraining</span></div><button class="btn soft" onclick="openExercise('hoeren')">Üben</button></article>
        <article class="card"><span class="icon">G</span><h3>Grammatik</h3><p>Verbposition, Konnektoren und Satzverbindungen für die Prüfung.</p><div class="meta-line"><span>8 Min.</span><span>4 Aufgaben</span></div><button class="btn soft" onclick="openExercise('grammatik')">Üben</button></article>
        <article class="card"><span class="icon">W</span><h3>Wortschatz</h3><p>Prüfungswortschatz zu Schule, Umwelt, Gesundheit und Medien.</p><div class="meta-line"><span>6 Min.</span><span>4 Aufgaben</span></div><button class="btn soft" onclick="openExercise('wortschatz')">Üben</button></article>
        <article class="card"><span class="icon">S</span><h3>Schreiben</h3><p>Einleitung, Meinung, Argumente, Beispiele und Schluss trainieren.</p><div class="meta-line"><span>15 Min.</span><span>Schreibbaustein</span></div><button class="btn soft" onclick="openExercise('schreiben')">Üben</button></article>
      </div>
      <div id="exerciseBox" class="exercise"></div>
    </section>

    <section class="section" id="simulationen">
      <div class="section-head"><div><h2>Prüfungssimulationen</h2><p>Von der Lehrkraft veröffentlichte PDFs, Audios und Aufgaben.</p></div><button class="btn soft" onclick="loadMaterials()">Aktualisieren</button></div>
      <div id="materials" class="materials"><div class="empty">Noch keine Simulationen veröffentlicht.</div></div>
    </section>

    <section class="section" id="sprechen">
      <div class="oral-banner">
        <div><h3>Mündliche Prüfung · ab 19. August im Fokus</h3><p>Übe spontane Antworten, eine klare Präsentationsstruktur und Rückfragen. Die mündliche Prüfung ist am 1. September.</p></div>
        <button class="btn" onclick="openOral()">Sprechimpuls starten</button>
      </div>
      <div id="oralExercise" class="exercise"></div>
    </section>

    <section class="admin" id="admin">
      <div class="section-head"><div><h2>Lehrkraftbereich</h2><p>Prüfungsmaterial hochladen und veröffentlichen.</p></div><button class="btn danger" onclick="toggleAdmin()">Schließen</button></div>
      <div class="admin-grid">
        <input id="teacherCode" type="password" placeholder="Lehrkraft-Schlüssel">
        <select id="materialArea"><option>Lesen</option><option>Hören</option><option>Schreiben</option><option>Sprechen</option><option>Komplett</option></select>
        <input id="materialTitle" placeholder="Titel, z. B. Modellprüfung 1">
        <input id="materialTime" type="number" min="1" max="240" value="60" placeholder="Zeit in Minuten">
        <textarea class="full" id="materialDescription" placeholder="Kurze Beschreibung"></textarea>
        <input class="full" id="materialFile" type="file" accept=".pdf,audio/*,image/*,.doc,.docx">
        <div class="upload-note full">Bitte nur offizielle oder schulisch autorisierte Prüfungsmaterialien hochladen. Die Lösungen sollten nicht in derselben Datei für Schülerinnen veröffentlicht werden.</div>
        <button class="btn full" onclick="uploadMaterial()">Material hochladen und veröffentlichen</button>
      </div>
    </section>
  </main>
  <div class="toast" id="toast"></div>
  <footer><div class="footer-in"><strong>DSD I Intensivtraining · 10. Klasse</strong><span>Schriftlich: 19.08.2026 · Mündlich: 01.09.2026</span></div></footer>
  <script>
    const state={completed:new Set(JSON.parse(localStorage.getItem('dsd-completed')||'[]'))};
    const exercises={
      lesen:{title:'Leseverstehen · Schulkantine',html:'<p><b>Text:</b> Ab dem kommenden Monat bietet unsere Schulkantine täglich ein vegetarisches Gericht an. Grund dafür ist eine Umfrage, an der 420 Schülerinnen und Schüler teilgenommen haben. 62 Prozent wünschten sich mehr fleischlose Alternativen. Die Preise bleiben unverändert.</p>'+mc('l1','Warum wird das Angebot verändert?',['Wegen höherer Preise','Wegen einer Umfrage','Wegen weniger Schülerinnen'],1)+mc('l2','Was bleibt gleich?',['Die Preise','Das Personal','Die Öffnungszeiten'],0)+mc('l3','Wie oft gibt es ein vegetarisches Gericht?',['Einmal pro Woche','Täglich','Nur im Sommer'],1)},
      hoeren:{title:'Hörverstehen · Strategie',html:'<p>Vor dem Hören: Lies die Aufgaben und markiere Schlüsselwörter. Während des Hörens: Notiere nur Namen, Zahlen, Orte und Meinungen.</p>'+mc('h1','Was solltest du vor dem ersten Hören tun?',['Den ganzen Text schreiben','Schlüsselwörter markieren','Die Lösungen suchen'],1)+mc('h2','Welche Informationen sind besonders wichtig?',['Farben und Schriftarten','Namen, Zahlen und Orte','Nur einzelne Verben'],1)+'<p class="muted small">Audiodateien können von der Lehrkraft unter „Prüfungssimulationen“ bereitgestellt werden.</p>'},
      grammatik:{title:'Grammatik · Konnektoren',html:selectQ('g1','Ich lerne regelmäßig, ___ ich die Prüfung bestehen möchte.',['obwohl','weil','deshalb'],'weil')+selectQ('g2','___ der Text schwierig ist, verstehe ich die Hauptaussage.',['Obwohl','Weil','Dass'],'Obwohl')+selectQ('g3','Viele üben täglich. ___ machen sie schnelle Fortschritte.',['Wenn','Deshalb','Dass'],'Deshalb')+selectQ('g4','Ich glaube, ___ gute Vorbereitung Sicherheit gibt.',['weil','dass','obwohl'],'dass')},
      wortschatz:{title:'Wortschatz · Prüfung',html:selectQ('w1','eine Meinung mit Gründen erklären =',['begründen','vermeiden','vergleichen'],'begründen')+selectQ('w2','eine Aufgabe vollständig machen =',['abschließen','ablehnen','ausfallen'],'abschließen')+selectQ('w3','wichtige Informationen kurz wiedergeben =',['zusammenfassen','widersprechen','übertreiben'],'zusammenfassen')+selectQ('w4','einen Unterschied deutlich machen =',['vergleichen','erwähnen','bestehen'],'vergleichen')},
      schreiben:{title:'Schreiben · Argumentationsbaustein',html:'<p><b>Thema:</b> Sollten Schülerinnen und Schüler jeden Tag Hausaufgaben bekommen?</p><p>Schreibe 80–100 Wörter. Nutze: <i>Meiner Meinung nach · Ein wichtiger Grund ist · Zum Beispiel · Deshalb · Abschließend</i>.</p><div class="question"><textarea id="writingText" placeholder="Meiner Meinung nach …"></textarea><div id="wordCounter" class="small muted">0 Wörter</div></div>'}
    };
    function mc(id,q,opts,answer){return '<div class="question" data-q="'+id+'" data-answer="'+answer+'"><b>'+q+'</b>'+opts.map((o,i)=>'<label><input type="radio" name="'+id+'" value="'+i+'">'+o+'</label>').join('')+'</div>'}
    function selectQ(id,q,opts,answer){return '<div class="question" data-q="'+id+'" data-answer="'+answer+'"><b>'+q+'</b><select><option value="">Bitte wählen</option>'+opts.map(o=>'<option>'+o+'</option>').join('')+'</select></div>'}
    function daysTo(date){return Math.max(0,Math.ceil((new Date(date+'T12:00:00-04:00')-new Date())/86400000))}
    document.getElementById('writtenDays').textContent=daysTo('2026-08-19')+' Tage';
    document.getElementById('oralDays').textContent=daysTo('2026-09-01')+' Tage';
    function go(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
    function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3200)}
    function saveStudent(){const n=document.getElementById('studentName').value.trim(),c=document.getElementById('studentCourse').value.trim();if(!n||!c)return toast('Bitte Name und Kurs eintragen.');localStorage.setItem('dsd-student',JSON.stringify({name:n,course:c}));toast('Deine Angaben wurden gespeichert.')}
    function getStudent(){try{return JSON.parse(localStorage.getItem('dsd-student')||'{}')}catch{return {}}}
    const st=getStudent();document.getElementById('studentName').value=st.name||'';document.getElementById('studentCourse').value=st.course||'';
    function updateProgress(){document.getElementById('completedCount').textContent=state.completed.size;document.getElementById('progressBar').style.width=(state.completed.size/5*100)+'%'}updateProgress();
    function startToday(){openExercise('schreiben');go('training')}
    function openExercise(key){const ex=exercises[key],box=document.getElementById('exerciseBox');box.innerHTML='<div class="section-head"><h3>'+ex.title+'</h3><button class="btn soft" onclick="closeExercise()">Schließen</button></div>'+ex.html+'<button class="btn" onclick="finishExercise(\\''+key+'\\')">Auswerten und speichern</button><span id="exerciseResult" class="result"></span>';box.classList.add('active');box.scrollIntoView({behavior:'smooth',block:'start'});const wt=document.getElementById('writingText');if(wt)wt.addEventListener('input',()=>{document.getElementById('wordCounter').textContent=(wt.value.trim()?wt.value.trim().split(/\\s+/).length:0)+' Wörter'})}
    function closeExercise(){document.getElementById('exerciseBox').classList.remove('active')}
    async function finishExercise(key){const box=document.getElementById('exerciseBox'),qs=[...box.querySelectorAll('[data-q]')];let score=0;qs.forEach(q=>{const radio=q.querySelector('input:checked'),sel=q.querySelector('select');const v=radio?radio.value:(sel?sel.value:'');if(v===q.dataset.answer)score++});const text=document.getElementById('writingText')?.value.trim()||'';if(key==='schreiben'&&text.split(/\\s+/).filter(Boolean).length>=60)score=1;const total=key==='schreiben'?1:qs.length;const r=document.getElementById('exerciseResult');r.textContent=score+' / '+total;r.className='result '+(score===total?'ok':'bad');state.completed.add(key);localStorage.setItem('dsd-completed',JSON.stringify([...state.completed]));updateProgress();const s=getStudent();if(s.name&&s.course){try{await fetch('/api/progress',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name:s.name,course:s.course,area:key,score,total,payload:{text}})})}catch{}}}
    function openOral(){const prompts=['Sollten Handys im Unterricht erlaubt sein?','Welche Rolle spielt Umweltschutz in deinem Alltag?','Was macht eine gute Schule aus?','Sind soziale Netzwerke eher hilfreich oder problematisch?'];const p=prompts[Math.floor(Math.random()*prompts.length)];const box=document.getElementById('oralExercise');box.innerHTML='<h3>Dein Sprechimpuls</h3><p style="font-size:22px"><b>'+p+'</b></p><p>Du hast 60 Sekunden Vorbereitungszeit. Sprich danach zwei Minuten: Meinung · zwei Gründe · Beispiel · Schluss.</p>';box.classList.add('active');box.scrollIntoView({behavior:'smooth'})}
    async function loadMaterials(){const box=document.getElementById('materials');try{const res=await fetch('/api/materials');const data=await res.json();if(!data.items?.length){box.innerHTML='<div class="empty">Noch keine Simulationen veröffentlicht. Die Lehrkraft kann hier PDF-, Audio- oder Bilddateien bereitstellen.</div>';return}box.innerHTML=data.items.map(m=>'<article class="material"><div class="material-top"><span class="badge">'+escapeHtml(m.area)+'</span><span class="small muted">'+m.time_minutes+' Min.</span></div><h3>'+escapeHtml(m.title)+'</h3><p class="muted">'+escapeHtml(m.description||'Prüfungsmaterial')+'</p><a class="btn" style="display:inline-block;text-decoration:none" href="/api/material/'+m.id+'" target="_blank">Material öffnen</a></article>').join('')}catch{box.innerHTML='<div class="empty">Materialien konnten gerade nicht geladen werden.</div>'}}
    function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
    function toggleAdmin(){document.getElementById('admin').classList.toggle('show');if(document.getElementById('admin').classList.contains('show'))go('admin')}
    async function uploadMaterial(){const file=document.getElementById('materialFile').files[0],code=document.getElementById('teacherCode').value,title=document.getElementById('materialTitle').value.trim();if(!code||!title||!file)return toast('Bitte Schlüssel, Titel und Datei angeben.');const fd=new FormData();fd.append('file',file);fd.append('title',title);fd.append('area',document.getElementById('materialArea').value);fd.append('description',document.getElementById('materialDescription').value);fd.append('time',document.getElementById('materialTime').value);try{const res=await fetch('/api/admin/materials',{method:'POST',headers:{'x-teacher-code':code},body:fd});const data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast('Material wurde veröffentlicht.');document.getElementById('materialFile').value='';loadMaterials()}catch(e){toast(e.message||'Upload nicht möglich.')}}
    loadMaterials();
  </script>
</body>
</html>`;

const JSON_HEADERS = {"content-type":"application/json; charset=utf-8","cache-control":"no-store"};

function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:JSON_HEADERS})}
function text(value,status=200,type="text/plain; charset=utf-8"){return new Response(value,{status,headers:{"content-type":type}})}
function safeFileName(name){return String(name||"material").replace(/[^a-zA-Z0-9._-]+/g,"-").slice(0,120)}
function timingSafeEqual(a,b){a=String(a||"");b=String(b||"");if(a.length!==b.length)return false;let out=0;for(let i=0;i<a.length;i++)out|=a.charCodeAt(i)^b.charCodeAt(i);return out===0}

async function ensureSchema(db){
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS materials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      area TEXT NOT NULL,
      description TEXT,
      file_key TEXT NOT NULL,
      file_name TEXT NOT NULL,
      content_type TEXT,
      time_minutes INTEGER DEFAULT 60,
      published INTEGER DEFAULT 1,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      course TEXT NOT NULL,
      area TEXT NOT NULL,
      score INTEGER DEFAULT 0,
      total INTEGER DEFAULT 0,
      payload TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS materials_published_idx ON materials(published, created_at)"),
    db.prepare("CREATE INDEX IF NOT EXISTS submissions_student_idx ON submissions(name, course, created_at)")
  ]);
}

async function handleRequest(request,env){
  const url=new URL(request.url);
  if(url.pathname==="/"&&request.method==="GET")return text(HTML.replaceAll("__ORIGIN__",url.origin),200,"text/html; charset=utf-8");
  if(url.pathname==="/og.png"&&request.method==="GET"&&env.ASSETS)return env.ASSETS.fetch(request);
  if(url.pathname==="/api/materials"&&request.method==="GET"){
    await ensureSchema(env.DB);
    const result=await env.DB.prepare("SELECT id,title,area,description,time_minutes,created_at FROM materials WHERE published=1 ORDER BY id DESC").all();
    return json({items:result.results||[]});
  }
  if(url.pathname.startsWith("/api/material/")&&request.method==="GET"){
    await ensureSchema(env.DB);
    const id=Number(url.pathname.split("/").pop());
    const row=await env.DB.prepare("SELECT file_key,file_name,content_type FROM materials WHERE id=? AND published=1").bind(id).first();
    if(!row)return text("Material nicht gefunden.",404);
    const object=await env.MATERIALS.get(row.file_key);
    if(!object)return text("Datei nicht gefunden.",404);
    const headers=new Headers();object.writeHttpMetadata(headers);headers.set("content-type",row.content_type||headers.get("content-type")||"application/octet-stream");headers.set("content-disposition",`inline; filename="${safeFileName(row.file_name)}"`);return new Response(object.body,{headers});
  }
  if(url.pathname==="/api/progress"&&request.method==="POST"){
    await ensureSchema(env.DB);
    const body=await request.json();
    if(!body.name||!body.course||!body.area)return json({error:"Name, Kurs und Bereich fehlen."},400);
    await env.DB.prepare("INSERT INTO submissions(name,course,area,score,total,payload) VALUES(?,?,?,?,?,?)").bind(String(body.name).slice(0,120),String(body.course).slice(0,80),String(body.area).slice(0,40),Number(body.score)||0,Number(body.total)||0,JSON.stringify(body.payload||{}).slice(0,50000)).run();
    return json({ok:true});
  }
  if(url.pathname==="/api/admin/materials"&&request.method==="POST"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const form=await request.formData();const file=form.get("file");const title=String(form.get("title")||"").trim();
    if(!file||typeof file.arrayBuffer!=="function"||!title)return json({error:"Titel oder Datei fehlt."},400);
    if(file.size>25*1024*1024)return json({error:"Die Datei darf maximal 25 MB groß sein."},413);
    const key=`materials/${Date.now()}-${crypto.randomUUID()}-${safeFileName(file.name)}`;
    await env.MATERIALS.put(key,await file.arrayBuffer(),{httpMetadata:{contentType:file.type||"application/octet-stream"}});
    const inserted=await env.DB.prepare("INSERT INTO materials(title,area,description,file_key,file_name,content_type,time_minutes,published) VALUES(?,?,?,?,?,?,?,1)").bind(title.slice(0,160),String(form.get("area")||"Komplett").slice(0,40),String(form.get("description")||"").slice(0,1000),key,safeFileName(file.name),file.type||"application/octet-stream",Math.max(1,Math.min(240,Number(form.get("time"))||60))).run();
    return json({ok:true,id:inserted.meta?.last_row_id});
  }
  return text("Nicht gefunden.",404);
}

export default {
  async fetch(request,env){
    try{return await handleRequest(request,env)}
    catch(error){return json({error:"Serverfehler",detail:String(error?.message||error)},500)}
  }
};
