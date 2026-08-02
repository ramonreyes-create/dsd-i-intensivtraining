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
    .result{font-weight:800;margin-left:10px}.ok{color:var(--green)}.bad{color:var(--red)}.materials{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.material{background:#fff;border:1px solid var(--line);border-radius:14px;padding:17px}.material-top{display:flex;justify-content:space-between;gap:10px}.badge{padding:4px 8px;border-radius:99px;background:var(--sky);color:var(--blue);font-size:12px;font-weight:800}.area-materials{display:grid;gap:9px;margin-top:14px}.area-materials:empty{display:none}.area-materials .material{background:#f7f9fc;padding:13px}.area-materials .material h3{font-size:16px;margin:9px 0 4px}.area-materials .material p{font-size:13px;margin-bottom:10px}.area-materials .material .btn{font-size:13px;padding:8px 11px}
    .empty{padding:25px;text-align:center;border:2px dashed var(--line);border-radius:15px;color:var(--muted);grid-column:1/-1}.oral-banner{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;background:var(--mint);border:1px solid #8ccdaf;border-radius:18px;padding:22px}.oral-banner h3{margin:0;color:#104c38;font-size:23px}
    .admin{display:none;margin-top:22px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:23px}.admin.show{display:block}.admin-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.admin .full{grid-column:1/-1}.upload-note{padding:11px;background:var(--cream);border-radius:10px;color:#74551a;font-size:13px}.admin-materials{display:grid;gap:10px;margin-top:20px}.admin-material{display:grid;grid-template-columns:minmax(160px,1fr) 160px auto minmax(250px,auto);gap:10px;align-items:center;padding:12px;border:1px solid var(--line);border-radius:12px;background:#f7f9fc}.admin-material strong{color:var(--navy)}.role-actions{display:flex;flex-wrap:wrap;gap:7px}.role-active{background:var(--green)!important;color:#fff!important}.focus-picker{margin:20px 0;padding:17px;border:2px solid #b9d5c7;border-radius:14px;background:#f1faf5}.focus-picker-row,.report-tools{display:flex;align-items:center;gap:9px;flex-wrap:wrap}.focus-picker select{min-width:min(100%,420px);flex:1}.report-filter{padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:#fff}
    .toast{position:fixed;right:20px;bottom:20px;max-width:380px;padding:13px 16px;border-radius:12px;background:var(--navy);color:#fff;box-shadow:0 12px 30px #0003;display:none;z-index:50}.toast.show{display:block}.login-gate,.detail-overlay,.edit-overlay{position:fixed;inset:0;background:#0b2745e8;z-index:100;display:grid;place-items:center;padding:20px}.login-gate.hidden,.detail-overlay.hidden,.edit-overlay.hidden{display:none}.login-card,.detail-card,.edit-card{width:min(760px,100%);max-height:90vh;overflow:auto;background:#fff;border-radius:20px;padding:28px;box-shadow:0 24px 70px #0006}.login-card{width:min(460px,100%)}.login-card h2,.detail-card h2,.edit-card h2{color:var(--navy);margin-top:0}.login-card input{width:100%;margin:7px 0;border:1.5px solid #b9c8da;border-radius:10px;padding:12px}.edit-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.edit-grid input,.edit-grid select,.edit-grid textarea{width:100%;border:1.5px solid #b9c8da;border-radius:10px;padding:10px 12px;font:inherit}.edit-grid .full{grid-column:1/-1}.report-table{width:100%;border-collapse:collapse;font-size:13px;margin-top:12px}.report-table th,.report-table td{padding:9px;border-bottom:1px solid var(--line);text-align:left}.report-wrap{overflow:auto;margin-top:18px}.detail-text{white-space:pre-wrap;background:#f7f9fc;border:1px solid var(--line);border-radius:12px;padding:15px}.detail-list{padding-left:22px}.detail-list li{margin:8px 0}
    footer{background:var(--navy);color:#cbd8e6;padding:26px 5vw}.footer-in{max-width:1180px;margin:auto;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap}
    .teacher-mode .login-gate,.teacher-mode .hero,.teacher-mode main>section:not(#admin),.teacher-mode nav{display:none}.teacher-mode #admin{display:block;margin-top:0}.teacher-mode main{padding-top:35px}.teacher-mode .brand span:last-child::after{content:" · Lehrkraft"}
    @media(max-width:850px){.hero-grid,.intro-grid{grid-template-columns:1fr}.cards{grid-template-columns:1fr 1fr}.student-form,.admin-material{grid-template-columns:1fr}.admin-grid{grid-template-columns:1fr}.admin .full{grid-column:auto}}
    @media(max-width:580px){nav button:not(.teacher){display:none}.cards,.materials,.admin-material{grid-template-columns:1fr}.oral-banner{grid-template-columns:1fr}.hero{padding-top:40px}main{padding-left:15px;padding-right:15px}}
  </style>
</head>
<body class="__BODY_CLASS__">
  <div class="login-gate" id="loginGate">
    <div class="login-card"><span class="badge">DSD I · Schülerzugang</span><h2>Willkommen!</h2><p class="muted">Bitte trage deinen Namen und deine Klasse ein. Dein Zugang und deine abgeschlossenen Übungen werden gespeichert.</p><input id="gateName" autocomplete="name" placeholder="Vor- und Nachname"><input id="gateCourse" placeholder="Klasse / Kurs"><button class="btn" style="width:100%;margin-top:10px" onclick="enterPortal()">Portal betreten</button><p class="small muted">Mit dem Betreten stimmst du der schulischen Speicherung deiner Lernaktivitäten zu.</p></div>
  </div>
  <div class="detail-overlay hidden" id="detailOverlay"><div class="detail-card"><div class="section-head"><h2>Arbeit der Schülerin</h2><button class="btn soft" onclick="closeSubmission()">Schließen</button></div><div id="detailContent"></div></div></div>
  <div class="edit-overlay hidden" id="editOverlay"><div class="edit-card"><div class="section-head"><h2>Material bearbeiten</h2><button class="btn soft" onclick="closeMaterialEditor()">Schließen</button></div><input type="hidden" id="editId"><div class="edit-grid"><input id="editTitle" placeholder="Titel"><select id="editArea"><option>Lesen</option><option>Hören</option><option>Grammatik</option><option>Wortschatz</option><option>Schreiben</option><option>Sprechen</option><option>Komplett</option></select><input id="editTime" type="number" min="1" max="240" placeholder="Zeit in Minuten"><input id="editUrl" type="url" placeholder="Material-Link"><textarea class="full" id="editDescription" placeholder="Beschreibung"></textarea><button class="btn full" onclick="saveMaterialEdit()">Änderungen speichern</button></div></div></div>
  <header class="topbar">
    <div class="brand"><span class="brand-mark">D1</span><span>DSD I Intensivtraining</span></div>
    <nav>
      <button onclick="go('training')">Training</button>
      <button onclick="go('simulationen')">Simulationen</button>
      <button onclick="go('sprechen')">Sprechen</button>
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
        <h3 id="focusTitle">Schreiben: Argumentieren</h3>
        <p id="focusDescription">Meinung formulieren, Argument begründen und ein konkretes Beispiel ergänzen.</p>
        <button class="btn" onclick="startToday()">Training öffnen</button>
      </div>
    </section>

    <section class="section" id="training">
      <div class="section-head"><div><h2>Intensivtraining</h2><p>Fünf Bereiche, kurze Einheiten, direktes Feedback.</p></div><span class="badge">B1 → DSD I</span></div>
      <div class="cards">
        <article class="card"><span class="icon">L</span><h3>Leseverstehen</h3><p>Informationen finden, Aussagen prüfen und Textabschnitte zuordnen.</p><div class="meta-line"><span>8–10 Min.</span><span>3 Aufgaben</span></div><button class="btn soft" onclick="openExercise('lesen')">Üben</button><div id="materials-lesen" class="area-materials"></div></article>
        <article class="card"><span class="icon">H</span><h3>Hörverstehen</h3><p>Hörstrategien vorbereiten und Schlüsselinformationen erkennen.</p><div class="meta-line"><span>7 Min.</span><span>Strategietraining</span></div><button class="btn soft" onclick="openExercise('hoeren')">Üben</button><div id="materials-hoeren" class="area-materials"></div></article>
        <article class="card"><span class="icon">G</span><h3>Grammatik</h3><p>Verbposition, Konnektoren und Satzverbindungen für die Prüfung.</p><div class="meta-line"><span>8 Min.</span><span>4 Aufgaben</span></div><button class="btn soft" onclick="openExercise('grammatik')">Üben</button><div id="materials-grammatik" class="area-materials"></div></article>
        <article class="card"><span class="icon">W</span><h3>Wortschatz</h3><p>Prüfungswortschatz zu Schule, Umwelt, Gesundheit und Medien.</p><div class="meta-line"><span>6 Min.</span><span>4 Aufgaben</span></div><button class="btn soft" onclick="openExercise('wortschatz')">Üben</button><div id="materials-wortschatz" class="area-materials"></div></article>
        <article class="card"><span class="icon">S</span><h3>Schreiben</h3><p>Einleitung, Meinung, Argumente, Beispiele und Schluss trainieren.</p><div class="meta-line"><span>15 Min.</span><span>Schreibbaustein</span></div><button class="btn soft" onclick="openExercise('schreiben')">Üben</button><div id="materials-schreiben" class="area-materials"></div></article>
      </div>
      <div id="exerciseBox" class="exercise"></div>
    </section>

    <section class="section" id="simulationen">
      <div class="section-head"><div><h2>Prüfungssimulationen</h2><p>Von der Lehrkraft veröffentlichte PDFs, Audios und Aufgaben.</p></div><button class="btn soft" onclick="loadMaterials()">Aktualisieren</button></div>
      <div id="materials" class="materials"><div class="empty">Noch keine Simulationen veröffentlicht.</div></div>
    </section>

    <section class="section" id="sprechen">
      <div class="oral-banner">
        <div><h3 id="oralTitle">Mündliche Prüfung · ab 19. August im Fokus</h3><p id="oralDescription">Übe spontane Antworten, eine klare Präsentationsstruktur und Rückfragen. Die mündliche Prüfung ist am 1. September.</p></div>
        <button class="btn" onclick="openOral()">Sprechimpuls starten</button>
      </div>
      <div id="materials-sprechen" class="materials area-materials"></div>
      <div id="oralExercise" class="exercise"></div>
    </section>

    <section class="admin" id="admin">
      <div class="section-head"><div><h2>Lehrkraftbereich</h2><p>Prüfungsmaterial verwalten und Schüleraktivitäten auswerten.</p></div><a class="btn danger" style="text-decoration:none" href="/">Zum Schülerportal</a></div>
      <div class="admin-grid">
        <input id="teacherCode" type="password" placeholder="Lehrkraft-Schlüssel">
        <select id="materialArea"><option>Lesen</option><option>Hören</option><option>Grammatik</option><option>Wortschatz</option><option>Schreiben</option><option>Sprechen</option><option>Komplett</option></select>
        <input id="materialTitle" placeholder="Titel, z. B. Modellprüfung 1">
        <input id="materialTime" type="number" min="1" max="240" value="60" placeholder="Zeit in Minuten">
        <textarea class="full" id="materialDescription" placeholder="Kurze Beschreibung"></textarea>
        <input class="full" id="materialUrl" type="url" placeholder="Freigegebener Google-Drive-Link (https://...)">
        <div class="upload-note full">Der Drive-Link muss für „Jede Person mit dem Link“ als Leser freigegeben sein. Bitte nur offizielle oder schulisch autorisierte Prüfungsmaterialien veröffentlichen.</div>
        <button class="btn full" onclick="publishMaterial()">Link speichern und veröffentlichen</button>
      </div>
      <div class="focus-picker"><h3>Heutiger Fokus auswählen</h3><p class="muted">Wähle hier genau das Material, das der große Fokus-Button im Schülerportal öffnen soll.</p><div class="focus-picker-row"><select id="focusMaterialSelect"><option value="">Material wählen …</option></select><button class="btn" onclick="saveFocusSelection()">Als heutigen Fokus speichern</button></div><p class="small" id="currentFocusLabel">Noch kein Material ausgewählt.</p></div>
      <div class="admin-materials" id="adminMaterials"></div>
      <div class="report-wrap"><div class="section-head"><div><h3>Schüleraktivitäten</h3><p class="muted">Standardmäßig werden nur abgegebene Arbeiten angezeigt. Reine Zugänge können getrennt geprüft und gelöscht werden.</p></div><div class="report-tools"><select class="report-filter" id="reportFilter" onchange="renderReport()"><option value="submission">Nur abgegebene Arbeiten</option><option value="access">Nur Zugänge</option><option value="all">Alle Einträge</option></select><button class="btn soft" onclick="loadReport()">Aktualisieren</button><button class="btn soft" onclick="downloadReport()">CSV herunterladen</button><button class="btn danger" onclick="deleteAccessLogs()">Nur Zugänge löschen</button></div></div><div id="reportBox" class="empty">Lehrkraft-Schlüssel eingeben und „Aktualisieren“ wählen.</div></div>
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
    async function registerStudent(name,course){const res=await fetch('/api/session',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({name,course})});const data=await res.json();if(!res.ok)throw new Error(data.error||'Anmeldung nicht möglich.');localStorage.setItem('dsd-student',JSON.stringify({name,course,session:data.session}));document.getElementById('studentName').value=name;document.getElementById('studentCourse').value=course;return data}
    async function enterPortal(){const n=document.getElementById('gateName').value.trim(),c=document.getElementById('gateCourse').value.trim();if(!n||!c)return toast('Bitte Name und Kurs eintragen.');try{await registerStudent(n,c);document.getElementById('loginGate').classList.add('hidden');toast('Willkommen, '+n+'! Dein Zugang wurde registriert.')}catch(e){toast(e.message)}}
    async function saveStudent(){const n=document.getElementById('studentName').value.trim(),c=document.getElementById('studentCourse').value.trim();if(!n||!c)return toast('Bitte Name und Kurs eintragen.');try{await registerStudent(n,c);toast('Deine Angaben wurden gespeichert.')}catch(e){toast(e.message)}}
    function getStudent(){try{return JSON.parse(localStorage.getItem('dsd-student')||'{}')}catch{return {}}}
    const st=getStudent();document.getElementById('studentName').value=st.name||'';document.getElementById('studentCourse').value=st.course||'';document.getElementById('gateName').value=st.name||'';document.getElementById('gateCourse').value=st.course||'';
    function updateProgress(){document.getElementById('completedCount').textContent=state.completed.size;document.getElementById('progressBar').style.width=(state.completed.size/5*100)+'%'}updateProgress();
    let featured={},publishedMaterials=[];
    function startToday(){if(featured.focus)return openMaterial(featured.focus.id);toast('Der heutige Fokus wurde noch nicht ausgewählt oder konnte nicht geladen werden.')}
    function openExercise(key){const ex=exercises[key],box=document.getElementById('exerciseBox');box.innerHTML='<div class="section-head"><h3>'+ex.title+'</h3><button class="btn soft" onclick="closeExercise()">Schließen</button></div>'+ex.html+'<button class="btn" onclick="finishExercise(\''+key+'\')">Auswerten und speichern</button><span id="exerciseResult" class="result"></span>';box.classList.add('active');box.scrollIntoView({behavior:'smooth',block:'start'});const wt=document.getElementById('writingText');if(wt)wt.addEventListener('input',()=>{document.getElementById('wordCounter').textContent=(wt.value.trim()?wt.value.trim().split(/\\s+/).length:0)+' Wörter'})}
    function closeExercise(){document.getElementById('exerciseBox').classList.remove('active')}
    async function finishExercise(key){const box=document.getElementById('exerciseBox'),qs=[...box.querySelectorAll('[data-q]')];let score=0;qs.forEach(q=>{const radio=q.querySelector('input:checked'),sel=q.querySelector('select');const v=radio?radio.value:(sel?sel.value:'');if(v===q.dataset.answer)score++});const text=document.getElementById('writingText')?.value.trim()||'';if(key==='schreiben'&&text.split(/\\s+/).filter(Boolean).length>=60)score=1;const total=key==='schreiben'?1:qs.length;const r=document.getElementById('exerciseResult');r.textContent=score+' / '+total;r.className='result '+(score===total?'ok':'bad');state.completed.add(key);localStorage.setItem('dsd-completed',JSON.stringify([...state.completed]));updateProgress();const s=getStudent();if(s.session){try{await fetch('/api/progress',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({session:s.session,area:key,score,total,payload:{text}})})}catch{}}}
    function openOral(){if(featured.oral)return openMaterial(featured.oral.id);const prompts=['Sollten Handys im Unterricht erlaubt sein?','Welche Rolle spielt Umweltschutz in deinem Alltag?','Was macht eine gute Schule aus?','Sind soziale Netzwerke eher hilfreich oder problematisch?'];const p=prompts[Math.floor(Math.random()*prompts.length)];const box=document.getElementById('oralExercise');box.innerHTML='<h3>Dein Sprechimpuls</h3><p style="font-size:22px"><b>'+p+'</b></p><p>Du hast 60 Sekunden Vorbereitungszeit. Sprich danach zwei Minuten: Meinung · zwei Gründe · Beispiel · Schluss.</p>';box.classList.add('active');box.scrollIntoView({behavior:'smooth'})}
    function materialCard(m){return '<article class="material"><div class="material-top"><span class="badge">'+escapeHtml(m.area)+'</span><span class="small muted">'+m.time_minutes+' Min.</span></div><h3>'+escapeHtml(m.title)+'</h3><p class="muted">'+escapeHtml(m.description||'Übungsmaterial')+'</p><button class="btn" onclick="openMaterial('+m.id+')">Material öffnen</button></article>'}
    function openMaterial(id){const s=getStudent();if(!s.session){document.getElementById('loginGate').classList.remove('hidden');return}window.open('/api/material/'+id+'?session='+encodeURIComponent(s.session),'_blank','noopener')}
    const materialAreas=['Lesen','Hören','Grammatik','Wortschatz','Schreiben','Sprechen','Komplett'];
    function applyFeatured(){if(featured.focus){document.getElementById('focusTitle').textContent=featured.focus.title;document.getElementById('focusDescription').textContent=featured.focus.description||'Ausgewähltes Material der Lehrkraft.'}if(featured.oral){document.getElementById('oralTitle').textContent=featured.oral.title;document.getElementById('oralDescription').textContent=featured.oral.description||'Ausgewählter Sprechimpuls der Lehrkraft.'}const label=document.getElementById('currentFocusLabel');if(label)label.textContent=featured.focus?'Aktuell: '+featured.focus.title:'Noch kein Material ausgewählt.'}
    function adminMaterialRow(m){const options=materialAreas.map(a=>'<option'+(a===m.area?' selected':'')+'>'+a+'</option>').join(''),isFocus=featured.focus?.id===m.id,isOral=featured.oral?.id===m.id;return '<div class="admin-material"><strong>'+escapeHtml(m.title)+'</strong><select id="area-'+m.id+'">'+options+'</select><button class="btn soft" onclick="changeMaterialArea('+m.id+')">Bereich ändern</button><div class="role-actions"><button class="btn soft '+(isFocus?'role-active':'')+'" onclick="setMaterialRole('+m.id+',\'focus\')">Heutiger Fokus</button><button class="btn soft '+(isOral?'role-active':'')+'" onclick="setMaterialRole('+m.id+',\'oral\')">Sprechimpuls</button><button class="btn soft" onclick="openMaterialEditor('+m.id+')">Bearbeiten</button><button class="btn danger" onclick="deleteMaterial('+m.id+')">Löschen</button></div></div>'}
    async function loadMaterials(){const boxes={Lesen:document.getElementById('materials-lesen'),'Hören':document.getElementById('materials-hoeren'),Grammatik:document.getElementById('materials-grammatik'),Wortschatz:document.getElementById('materials-wortschatz'),Schreiben:document.getElementById('materials-schreiben'),Sprechen:document.getElementById('materials-sprechen'),Komplett:document.getElementById('materials')},adminBox=document.getElementById('adminMaterials');Object.values(boxes).forEach(box=>box.innerHTML='');try{const [res,featuredRes]=await Promise.all([fetch('/api/materials'),fetch('/api/featured')]),data=await res.json(),featuredData=await featuredRes.json();if(!res.ok)throw new Error(data.error||'Fehler');featured=featuredData||{};applyFeatured();const items=data.items||[];publishedMaterials=items;items.forEach(m=>{const box=boxes[m.area]||boxes.Komplett;box.insertAdjacentHTML('beforeend',materialCard(m))});const focusSelect=document.getElementById('focusMaterialSelect');if(focusSelect)focusSelect.innerHTML='<option value="">Material wählen …</option>'+items.map(m=>'<option value="'+m.id+'"'+(featured.focus?.id===m.id?' selected':'')+'>'+escapeHtml(m.area+' · '+m.title)+'</option>').join('');adminBox.innerHTML=items.length?'<h3>Veröffentlichte Materialien verwalten</h3>'+items.map(adminMaterialRow).join(''):'<p class="muted">Noch keine Materialien veröffentlicht.</p>';if(!boxes.Komplett.children.length)boxes.Komplett.innerHTML='<div class="empty">Noch keine kompletten Prüfungssimulationen veröffentlicht.</div>'}catch{boxes.Komplett.innerHTML='<div class="empty">Materialien konnten gerade nicht geladen werden.</div>';adminBox.innerHTML=''}}
    function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
    function toggleAdmin(){document.getElementById('admin').classList.toggle('show');if(document.getElementById('admin').classList.contains('show'))go('admin')}
    async function publishMaterial(){const code=document.getElementById('teacherCode').value,title=document.getElementById('materialTitle').value.trim(),materialUrl=document.getElementById('materialUrl').value.trim();if(!code||!title||!materialUrl)return toast('Bitte Schlüssel, Titel und Drive-Link angeben.');try{const res=await fetch('/api/admin/materials',{method:'POST',headers:{'content-type':'application/json','x-teacher-code':code},body:JSON.stringify({title,materialUrl,area:document.getElementById('materialArea').value,description:document.getElementById('materialDescription').value,time:document.getElementById('materialTime').value})});const data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast('Material wurde veröffentlicht.');document.getElementById('materialUrl').value='';loadMaterials()}catch(e){toast(e.message||'Veröffentlichung nicht möglich.')}}
    async function changeMaterialArea(id){const code=document.getElementById('teacherCode').value,area=document.getElementById('area-'+id).value;if(!code)return toast('Bitte zuerst den Lehrkraft-Schlüssel eingeben.');try{const res=await fetch('/api/admin/materials/'+id,{method:'PATCH',headers:{'content-type':'application/json','x-teacher-code':code},body:JSON.stringify({area})});const data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast('Der Bereich wurde geändert.');loadMaterials()}catch(e){toast(e.message||'Änderung nicht möglich.')}}
    async function setMaterialRole(id,role){const code=document.getElementById('teacherCode').value;if(!code)return toast('Bitte zuerst den Lehrkraft-Schlüssel eingeben.');try{const res=await fetch('/api/admin/role',{method:'POST',headers:{'content-type':'application/json','x-teacher-code':code},body:JSON.stringify({materialId:id,role})}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast(role==='focus'?'Heutiger Fokus wurde geändert.':'Sprechimpuls wurde geändert.');loadMaterials()}catch(e){toast(e.message||'Auswahl nicht möglich.')}}
    function saveFocusSelection(){const id=Number(document.getElementById('focusMaterialSelect').value);if(!id)return toast('Bitte ein Material auswählen.');setMaterialRole(id,'focus')}
    function openMaterialEditor(id){const m=publishedMaterials.find(x=>x.id===id);if(!m)return;document.getElementById('editId').value=id;document.getElementById('editTitle').value=m.title||'';document.getElementById('editDescription').value=m.description||'';document.getElementById('editTime').value=m.time_minutes||60;document.getElementById('editArea').value=m.area||'Komplett';document.getElementById('editUrl').value=m.material_url||'';document.getElementById('editOverlay').classList.remove('hidden')}
    function closeMaterialEditor(){document.getElementById('editOverlay').classList.add('hidden')}
    async function saveMaterialEdit(){const code=document.getElementById('teacherCode').value,id=Number(document.getElementById('editId').value),body={title:document.getElementById('editTitle').value.trim(),description:document.getElementById('editDescription').value,area:document.getElementById('editArea').value,time:document.getElementById('editTime').value,materialUrl:document.getElementById('editUrl').value.trim()};if(!code||!body.title||!body.materialUrl)return toast('Bitte Schlüssel, Titel und Link angeben.');try{const res=await fetch('/api/admin/materials/'+id,{method:'PATCH',headers:{'content-type':'application/json','x-teacher-code':code},body:JSON.stringify(body)}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');closeMaterialEditor();toast('Material wurde aktualisiert.');loadMaterials()}catch(e){toast(e.message||'Änderung nicht möglich.')}}
    async function deleteMaterial(id){const code=document.getElementById('teacherCode').value,m=publishedMaterials.find(x=>x.id===id);if(!code)return toast('Bitte zuerst den Lehrkraft-Schlüssel eingeben.');if(!confirm('Material „'+(m?.title||id)+'“ wirklich löschen?'))return;try{const res=await fetch('/api/admin/materials/'+id,{method:'DELETE',headers:{'x-teacher-code':code}}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast('Material wurde gelöscht.');loadMaterials()}catch(e){toast(e.message||'Löschen nicht möglich.')}}
    let reportRows=[];
    function parsePayload(row){try{return row.payload?JSON.parse(row.payload):{}}catch{return {}}}
    function chileDate(value){if(!value)return '—';const raw=String(value),normalized=/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(raw)?raw.replace(' ','T')+'Z':raw,date=new Date(normalized);if(Number.isNaN(date.getTime()))return raw;return new Intl.DateTimeFormat('de-DE',{timeZone:'America/Santiago',dateStyle:'short',timeStyle:'medium'}).format(date)+' (Santiago)'}
    async function loadReport(){const code=document.getElementById('teacherCode').value;if(!code)return toast('Bitte Lehrkraft-Schlüssel eingeben.');try{const res=await fetch('/api/admin/report',{headers:{'x-teacher-code':code}}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');reportRows=data.items||[];renderReport()}catch(e){toast(e.message||'Bericht nicht verfügbar.')}}
    function filteredReportRows(){const filter=document.getElementById('reportFilter')?.value||'submission';return filter==='all'?reportRows:reportRows.filter(r=>r.kind===filter)}
    function renderReport(){const rows=filteredReportRows(),box=document.getElementById('reportBox');if(!box)return;box.className='';box.innerHTML=rows.length?'<table class="report-table"><thead><tr><th>Datum</th><th>Name</th><th>Kurs</th><th>Aktivität</th><th>Ergebnis</th><th>Aktionen</th></tr></thead><tbody>'+rows.map(r=>{const i=reportRows.indexOf(r);return '<tr><td>'+escapeHtml(chileDate(r.created_at))+'</td><td>'+escapeHtml(r.name)+'</td><td>'+escapeHtml(r.course)+'</td><td>'+escapeHtml(r.activity)+'</td><td>'+escapeHtml(r.result||'—')+'</td><td>'+(r.kind==='submission'?'<button class="btn soft" onclick="openSubmission('+i+')">Arbeit ansehen</button> ':'')+'<button class="btn danger" onclick="deleteReportRow('+i+')">Löschen</button></td></tr>'}).join('')+'</tbody></table>':'<div class="empty">Für diese Auswahl gibt es keine Einträge.</div>'}
    async function deleteReportRow(index){const row=reportRows[index],code=document.getElementById('teacherCode').value;if(!row||!confirm('Diesen Eintrag wirklich dauerhaft löschen?'))return;try{const res=await fetch('/api/admin/records/'+row.kind+'/'+row.id,{method:'DELETE',headers:{'x-teacher-code':code}}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast('Eintrag wurde gelöscht.');loadReport()}catch(e){toast(e.message||'Eintrag konnte nicht gelöscht werden.')}}
    async function deleteAccessLogs(){const code=document.getElementById('teacherCode').value;if(!code)return toast('Bitte Lehrkraft-Schlüssel eingeben.');if(!confirm('Alle reinen Zugangsprotokolle löschen? Abgegebene Arbeiten bleiben erhalten.'))return;try{const res=await fetch('/api/admin/access-logs',{method:'DELETE',headers:{'x-teacher-code':code}}),data=await res.json();if(!res.ok)throw new Error(data.error||'Fehler');toast((data.deleted||0)+' Zugangsprotokolle wurden gelöscht.');loadReport()}catch(e){toast(e.message||'Zugänge konnten nicht gelöscht werden.')}}
    function openSubmission(index){const row=reportRows[index],payload=parsePayload(row),details=payload.answers||payload,items=Array.isArray(details.items)?details.items:[],text=details.letter||payload.text||'',duration=payload.duration_seconds||details.duration_seconds||0;let html='<p><b>'+escapeHtml(row.name)+'</b> · '+escapeHtml(row.course)+' · '+escapeHtml(chileDate(row.created_at))+'</p><p><b>'+escapeHtml(row.activity)+'</b> · '+escapeHtml(row.result||'')+'</p>';if(text)html+='<h3>Schriftlicher Text</h3><div class="detail-text">'+escapeHtml(text)+'</div>';if(details.wordCount!=null)html+='<p><b>Wörter:</b> '+Number(details.wordCount)+'</p>';if(items.length)html+='<h3>Antworten</h3><ol class="detail-list">'+items.map(a=>'<li>'+escapeHtml(a.answer||'—')+' <b class="'+(a.correct?'ok':'no')+'">'+(a.correct?'✓':'✗')+'</b></li>').join('')+'</ol>';html+='<h3>Arbeitsprotokoll</h3><p><b>Zeit:</b> '+(duration?Math.round(duration/60)+' Min.':'—')+' · <b>Vollbild verlassen:</b> '+Number(details.fullscreenExits||0)+' · <b>Registerkartenwechsel:</b> '+Number(details.tabExits||0)+'</p>';document.getElementById('detailContent').innerHTML=html;document.getElementById('detailOverlay').classList.remove('hidden')}
    function closeSubmission(){document.getElementById('detailOverlay').classList.add('hidden')}
    function reportDetail(row){const p=parsePayload(row),d=p.answers||p;return d.letter||p.text||''}
    function downloadReport(){const rows=filteredReportRows();if(!rows.length)return toast('Für diese Auswahl gibt es keine Daten.');const csv=['Datum;Name;Kurs;Aktivität;Ergebnis;Text',...rows.map(r=>[chileDate(r.created_at),r.name,r.course,r.activity,r.result||'',reportDetail(r)].map(v=>'"'+String(v).replaceAll('"','""')+'"').join(';'))].join('\n'),a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv'}));a.download='DSD-I-Schueleraktivitaeten.csv';a.click();URL.revokeObjectURL(a.href)}
    loadMaterials();
  </script>
</body>
</html>`;

const CONNECTOR = String.raw`(()=>{const q=new URLSearchParams(location.search),session=q.get('dsd_session'),material=q.get('dsd_material'),api=q.get('dsd_api');window.DSDTraining={connected:Boolean(session&&api),async submit(result={}){if(!session||!api)throw new Error('Bitte öffne diese Übung über das DSD-I-Portal.');const response=await fetch(api,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({...result,session,material_id:material})});const data=await response.json();if(!response.ok)throw new Error(data.error||'Ergebnis konnte nicht gespeichert werden.');return data}};window.dispatchEvent(new CustomEvent('dsd-training-ready',{detail:window.DSDTraining}))})();`;

const JSON_HEADERS = {"content-type":"application/json; charset=utf-8","cache-control":"no-store"};

function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:JSON_HEADERS})}
function corsJson(data,status=200){return new Response(JSON.stringify(data),{status,headers:{...JSON_HEADERS,"access-control-allow-origin":"*","access-control-allow-headers":"content-type","access-control-allow-methods":"POST,OPTIONS"}})}
function text(value,status=200,type="text/plain; charset=utf-8"){return new Response(value,{status,headers:{"content-type":type}})}
function safeFileName(name){return String(name||"material").replace(/[^a-zA-Z0-9._-]+/g,"-").slice(0,120)}
function timingSafeEqual(a,b){a=String(a||"");b=String(b||"");if(a.length!==b.length)return false;let out=0;for(let i=0;i<a.length;i++)out|=a.charCodeAt(i)^b.charCodeAt(i);return out===0}
function renderPortal(origin,teacher=false){return HTML.replaceAll("__ORIGIN__",origin).replace("__BODY_CLASS__",teacher?"teacher-mode":"")}

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
    db.prepare(`CREATE TABLE IF NOT EXISTS student_sessions (
      session_id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      course TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      last_seen TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS access_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT NOT NULL,
      activity TEXT NOT NULL,
      material_id INTEGER,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare(`CREATE TABLE IF NOT EXISTS material_roles (
      role TEXT PRIMARY KEY,
      material_id INTEGER NOT NULL,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )`),
    db.prepare("CREATE INDEX IF NOT EXISTS materials_published_idx ON materials(published, created_at)"),
    db.prepare("CREATE INDEX IF NOT EXISTS submissions_student_idx ON submissions(name, course, created_at)"),
    db.prepare("CREATE INDEX IF NOT EXISTS access_session_idx ON access_logs(session_id, created_at)")
  ]);
}

async function handleRequest(request,env){
  const url=new URL(request.url);
  if(request.method==="OPTIONS"&&url.pathname==="/api/external-result")return new Response(null,{status:204,headers:{"access-control-allow-origin":"*","access-control-allow-headers":"content-type","access-control-allow-methods":"POST,OPTIONS"}});
  if(url.pathname==="/"&&request.method==="GET")return text(renderPortal(url.origin),200,"text/html; charset=utf-8");
  if(url.pathname==="/lehrkraft"&&request.method==="GET")return text(renderPortal(url.origin,true),200,"text/html; charset=utf-8");
  if(url.pathname==="/dsd-connector.js"&&request.method==="GET")return text(CONNECTOR,200,"application/javascript; charset=utf-8");
  if(url.pathname==="/og.png"&&request.method==="GET"&&env.ASSETS)return env.ASSETS.fetch(request);
  if(url.pathname==="/api/materials"&&request.method==="GET"){
    await ensureSchema(env.DB);
    const result=await env.DB.prepare("SELECT id,title,area,description,time_minutes,created_at,file_key AS material_url FROM materials WHERE published=1 ORDER BY id DESC").all();
    return json({items:result.results||[]});
  }
  if(url.pathname==="/api/featured"&&request.method==="GET"){
    await ensureSchema(env.DB);
    const result=await env.DB.prepare("SELECT r.role,m.id,m.title,m.description,m.area,m.time_minutes FROM material_roles r JOIN materials m ON m.id=r.material_id WHERE m.published=1").all(),out={};
    for(const row of result.results||[])out[row.role]={id:row.id,title:row.title,description:row.description,area:row.area,time_minutes:row.time_minutes};
    return json(out);
  }
  if(url.pathname==="/api/session"&&request.method==="POST"){
    await ensureSchema(env.DB);
    const body=await request.json(),name=String(body.name||"").trim().slice(0,120),course=String(body.course||"").trim().slice(0,80);
    if(!name||!course)return json({error:"Name und Kurs fehlen."},400);
    const session=crypto.randomUUID();
    await env.DB.batch([env.DB.prepare("INSERT INTO student_sessions(session_id,name,course) VALUES(?,?,?)").bind(session,name,course),env.DB.prepare("INSERT INTO access_logs(session_id,activity) VALUES(?,?)").bind(session,"Portalzugang")]);
    return json({ok:true,session});
  }
  if(url.pathname.startsWith("/api/material/")&&request.method==="GET"){
    await ensureSchema(env.DB);
    const id=Number(url.pathname.split("/").pop()),session=String(url.searchParams.get("session")||"");
    const student=session?await env.DB.prepare("SELECT session_id FROM student_sessions WHERE session_id=?").bind(session).first():null;
    if(!student)return text("Bitte das Material über das Lernportal öffnen.",401);
    const row=await env.DB.prepare("SELECT file_key FROM materials WHERE id=? AND published=1").bind(id).first();
    if(!row)return text("Material nicht gefunden.",404);
    let target;try{target=new URL(row.file_key)}catch{return text("Material-Link ist ungültig.",500)}
    if(target.protocol!=="https:")return text("Material-Link ist nicht sicher.",400);
    await env.DB.prepare("INSERT INTO access_logs(session_id,activity,material_id) VALUES(?,?,?)").bind(session,"Material geöffnet",id).run();
    target.searchParams.set("dsd_session",session);target.searchParams.set("dsd_material",String(id));target.searchParams.set("dsd_api",url.origin+"/api/external-result");
    return Response.redirect(target.toString(),302);
  }
  if(url.pathname==="/api/progress"&&request.method==="POST"){
    await ensureSchema(env.DB);
    const body=await request.json();
    const student=await env.DB.prepare("SELECT name,course FROM student_sessions WHERE session_id=?").bind(String(body.session||"")).first();
    if(!student||!body.area)return json({error:"Sitzung oder Bereich fehlt."},400);
    await env.DB.prepare("INSERT INTO submissions(name,course,area,score,total,payload) VALUES(?,?,?,?,?,?)").bind(student.name,student.course,String(body.area).slice(0,80),Number(body.score)||0,Number(body.total)||0,JSON.stringify(body.payload||{}).slice(0,50000)).run();
    return json({ok:true});
  }
  if(url.pathname==="/api/external-result"&&request.method==="POST"){
    await ensureSchema(env.DB);
    const body=await request.json(),student=await env.DB.prepare("SELECT name,course FROM student_sessions WHERE session_id=?").bind(String(body.session||"")).first();
    if(!student)return corsJson({error:"Sitzung ist ungültig."},401);
    const area=String(body.exercise||body.area||"Externes HTML").slice(0,80),payload={answers:body.answers||{},duration_seconds:Number(body.duration_seconds)||0,material_id:Number(body.material_id)||null};
    await env.DB.prepare("INSERT INTO submissions(name,course,area,score,total,payload) VALUES(?,?,?,?,?,?)").bind(student.name,student.course,area,Number(body.score)||0,Number(body.total)||0,JSON.stringify(payload).slice(0,50000)).run();
    return corsJson({ok:true});
  }
  if(url.pathname==="/api/admin/report"&&request.method==="GET"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const result=await env.DB.prepare(`SELECT created_at,name,course,activity,result,kind,payload,id FROM (
      SELECT a.created_at,s.name,s.course,a.activity,CASE WHEN a.material_id IS NULL THEN '' ELSE 'Material '||a.material_id END result,'access' kind,NULL payload,a.id id FROM access_logs a JOIN student_sessions s ON s.session_id=a.session_id
      UNION ALL
      SELECT created_at,name,course,'Übung: '||area activity,CAST(score AS TEXT)||' / '||CAST(total AS TEXT) result,'submission' kind,payload,id FROM submissions
    ) ORDER BY created_at DESC LIMIT 1000`).all();
    return json({items:result.results||[]});
  }
  if(url.pathname.startsWith("/api/admin/records/")&&request.method==="DELETE"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const parts=url.pathname.split("/"),kind=parts[4],id=Number(parts[5]);
    if(!["submission","access"].includes(kind)||!Number.isInteger(id)||id<1)return json({error:"Eintrag ist ungültig."},400);
    const table=kind==="submission"?"submissions":"access_logs";
    const deleted=await env.DB.prepare(`DELETE FROM ${table} WHERE id=?`).bind(id).run();
    if(!deleted.meta?.changes)return json({error:"Eintrag nicht gefunden."},404);
    return json({ok:true});
  }
  if(url.pathname==="/api/admin/access-logs"&&request.method==="DELETE"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const deleted=await env.DB.prepare("DELETE FROM access_logs").run();
    return json({ok:true,deleted:Number(deleted.meta?.changes)||0});
  }
  if(url.pathname==="/api/admin/role"&&request.method==="POST"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const body=await request.json(),role=String(body.role||""),materialId=Number(body.materialId);
    if(!["focus","oral"].includes(role)||!Number.isInteger(materialId)||materialId<1)return json({error:"Auswahl ist ungültig."},400);
    const material=await env.DB.prepare("SELECT id FROM materials WHERE id=? AND published=1").bind(materialId).first();
    if(!material)return json({error:"Material nicht gefunden."},404);
    await env.DB.prepare("INSERT INTO material_roles(role,material_id,updated_at) VALUES(?,?,CURRENT_TIMESTAMP) ON CONFLICT(role) DO UPDATE SET material_id=excluded.material_id,updated_at=CURRENT_TIMESTAMP").bind(role,materialId).run();
    return json({ok:true});
  }
  if(url.pathname==="/api/admin/materials"&&request.method==="POST"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const body=await request.json();const title=String(body.title||"").trim();const materialUrl=String(body.materialUrl||"").trim();
    let parsed;try{parsed=new URL(materialUrl)}catch{return json({error:"Der Material-Link ist ungültig."},400)}
    if(!title||parsed.protocol!=="https:")return json({error:"Titel oder sicherer HTTPS-Link fehlt."},400);
    const inserted=await env.DB.prepare("INSERT INTO materials(title,area,description,file_key,file_name,content_type,time_minutes,published) VALUES(?,?,?,?,?,?,?,1)").bind(title.slice(0,160),String(body.area||"Komplett").slice(0,40),String(body.description||"").slice(0,1000),parsed.toString().slice(0,2000),"Externer Link","text/uri-list",Math.max(1,Math.min(240,Number(body.time)||60))).run();
    return json({ok:true,id:inserted.meta?.last_row_id});
  }
  if(url.pathname.startsWith("/api/admin/materials/")&&request.method==="PATCH"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const id=Number(url.pathname.split("/").pop()),body=await request.json();
    const allowed=["Lesen","Hören","Grammatik","Wortschatz","Schreiben","Sprechen","Komplett"];
    if(!Number.isInteger(id)||id<1)return json({error:"Material ist ungültig."},400);
    const current=await env.DB.prepare("SELECT title,area,description,file_key,time_minutes FROM materials WHERE id=? AND published=1").bind(id).first();
    if(!current)return json({error:"Material nicht gefunden."},404);
    const area=String(body.area??current.area),title=String(body.title??current.title).trim(),description=String(body.description??current.description??""),materialUrl=String(body.materialUrl??current.file_key).trim(),time=Math.max(1,Math.min(240,Number(body.time??current.time_minutes)||60));
    let parsed;try{parsed=new URL(materialUrl)}catch{return json({error:"Der Material-Link ist ungültig."},400)}
    if(!title||!allowed.includes(area)||parsed.protocol!=="https:")return json({error:"Titel, Bereich oder Link ist ungültig."},400);
    const updated=await env.DB.prepare("UPDATE materials SET title=?,area=?,description=?,file_key=?,time_minutes=? WHERE id=? AND published=1").bind(title.slice(0,160),area,description.slice(0,1000),parsed.toString().slice(0,2000),time,id).run();
    if(!updated.meta?.changes)return json({error:"Material nicht gefunden."},404);
    return json({ok:true});
  }
  if(url.pathname.startsWith("/api/admin/materials/")&&request.method==="DELETE"){
    if(!env.TEACHER_CODE||!timingSafeEqual(request.headers.get("x-teacher-code"),env.TEACHER_CODE))return json({error:"Lehrkraft-Schlüssel ist nicht korrekt."},401);
    await ensureSchema(env.DB);
    const id=Number(url.pathname.split("/").pop());
    if(!Number.isInteger(id)||id<1)return json({error:"Material ist ungültig."},400);
    const deleted=await env.DB.prepare("UPDATE materials SET published=0 WHERE id=? AND published=1").bind(id).run();
    if(!deleted.meta?.changes)return json({error:"Material nicht gefunden."},404);
    await env.DB.prepare("DELETE FROM material_roles WHERE material_id=?").bind(id).run();
    return json({ok:true});
  }
  if(request.method==="GET"&&env.ASSETS)return env.ASSETS.fetch(request);
  return text("Nicht gefunden.",404);
}

export default {
  async fetch(request,env){
    try{return await handleRequest(request,env)}
    catch(error){return json({error:"Serverfehler",detail:String(error?.message||error)},500)}
  }
};
