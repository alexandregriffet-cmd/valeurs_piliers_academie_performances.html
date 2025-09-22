/* Test des Valeurs 12–25 — v1.2 (logo officiel + valeurs phares) */
(() => {
  const questions = [
    { q: "1) Quand tu fais un devoir ou un match, ce qui compte le plus pour toi, c’est…", opts: [
      { t:"Avoir la meilleure note / gagner", k:"REUSSITE" },
      { t:"Avoir appris quelque chose", k:"LIBERTE" },
      { t:"Passer du temps avec ton équipe / tes amis", k:"APPARTENANCE" },
      { t:"Avoir été régulier et concentré", k:"STABILITE" },
    ]},
    { q: "2) Dans le sport ou les études, tu préfères qu’on dise de toi…", opts: [
      { t:"« Champion(ne) » / « très doué(e) »", k:"REUSSITE" },
      { t:"« Créatif(ve), original(e) »", k:"LIBERTE" },
      { t:"« Sympa, fiable pour l’équipe »", k:"APPARTENANCE" },
      { t:"« Sérieux(se), régulier(ère) »", k:"STABILITE" },
    ]},
    { q: "3) Quand tu rates quelque chose, ce qui te gêne le plus…", opts: [
      { t:"Ne pas être le/la meilleur(e)", k:"REUSSITE" },
      { t:"Manquer de liberté", k:"LIBERTE" },
      { t:"Décevoir tes proches", k:"APPARTENANCE" },
      { t:"Perdre en régularité", k:"STABILITE" },
    ]},
    { q: "4) Tu te fixes des objectifs surtout pour…", opts: [
      { t:"Te dépasser et réussir", k:"REUSSITE" },
      { t:"Explorer de nouvelles idées", k:"LIBERTE" },
      { t:"Partager avec d’autres", k:"APPARTENANCE" },
      { t:"Avancer avec méthode", k:"STABILITE" },
    ]},
    { q: "5) En compétition, tu veux surtout…", opts: [
      { t:"Gagner et être reconnu", k:"REUSSITE" },
      { t:"Faire à ta manière", k:"LIBERTE" },
      { t:"Créer une belle ambiance d’équipe", k:"APPARTENANCE" },
      { t:"Tenir ton rythme et ton plan", k:"STABILITE" },
    ]},
    { q: "6) Ce qui t’apporte la plus grande fierté…", opts: [
      { t:"Tes résultats et réussites", k:"REUSSITE" },
      { t:"Ton indépendance", k:"LIBERTE" },
      { t:"Tes relations", k:"APPARTENANCE" },
      { t:"Ta constance", k:"STABILITE" },
    ]},
    { q: "7) Si tu avais une journée libre, tu choisirais plutôt…", opts: [
      { t:"Un nouveau défi", k:"REUSSITE" },
      { t:"Explorer, voyager, créer", k:"LIBERTE" },
      { t:"Passer du temps avec tes proches", k:"APPARTENANCE" },
      { t:"Te reposer, garder tes habitudes", k:"STABILITE" },
    ]},
    { q: "8) Ce qui te motive à apprendre…", opts: [
      { t:"Les bonnes notes / la compétition", k:"REUSSITE" },
      { t:"Découvrir et expérimenter", k:"LIBERTE" },
      { t:"Travailler avec les autres", k:"APPARTENANCE" },
      { t:"Être organisé et régulier", k:"STABILITE" },
    ]},
    { q: "9) Quand on t’impose une règle stricte, tu as tendance à…", opts: [
      { t:"La suivre et bien faire", k:"REUSSITE" },
      { t:"Chercher une autre manière", k:"LIBERTE" },
      { t:"Voir l’impact sur les autres", k:"APPARTENANCE" },
      { t:"T’adapter et rester discipliné", k:"STABILITE" },
    ]},
    { q: "10) Tu te sens le/la plus heureux(se) quand…", opts: [
      { t:"Tu réussis un projet", k:"REUSSITE" },
      { t:"Tu choisis librement", k:"LIBERTE" },
      { t:"Tu es entouré(e) de tes proches", k:"APPARTENANCE" },
      { t:"Tu suis une routine rassurante", k:"STABILITE" },
    ]},
    { q: "11) Tu préfères un projet…", opts: [
      { t:"Avec un objectif clair", k:"REUSSITE" },
      { t:"Qui permet d’innover", k:"LIBERTE" },
      { t:"Avec une équipe soudée", k:"APPARTENANCE" },
      { t:"Avec un plan précis", k:"STABILITE" },
    ]},
    { q: "12) Ton idéal de vie serait…", opts: [
      { t:"Réussir dans tes passions", k:"REUSSITE" },
      { t:"Liberté totale", k:"LIBERTE" },
      { t:"Liens solides", k:"APPARTENANCE" },
      { t:"Sérénité et cadre sûr", k:"STABILITE" },
    ]},
    { q: "13) Ton souvenir idéal serait…", opts: [
      { t:"Ton plus grand succès", k:"REUSSITE" },
      { t:"Une aventure créative", k:"LIBERTE" },
      { t:"Une soirée avec proches", k:"APPARTENANCE" },
      { t:"Un moment calme", k:"STABILITE" },
    ]},
    { q: "14) Tu te sens le/la plus fort(e) quand…", opts: [
      { t:"Tu réussis un challenge", k:"REUSSITE" },
      { t:"Tu fais un choix personnel", k:"LIBERTE" },
      { t:"Tu reçois du soutien", k:"APPARTENANCE" },
      { t:"Tu respectes ton rythme", k:"STABILITE" },
    ]},
    { q: "15) Dans une équipe, ton rôle naturel est…", opts: [
      { t:"Le/la compétiteur(trice)", k:"REUSSITE" },
      { t:"L’inventif(ve)", k:"LIBERTE" },
      { t:"Le lien / soutien", k:"APPARTENANCE" },
      { t:"L’organisateur(trice)", k:"STABILITE" },
    ]},
    { q: "16) Ce que tu crains le plus…", opts: [
      { t:"Ne pas réussir", k:"REUSSITE" },
      { t:"Être limité(e)", k:"LIBERTE" },
      { t:"Être seul(e)", k:"APPARTENANCE" },
      { t:"Être déstabilisé(e)", k:"STABILITE" },
    ]},
    { q: "17) Tu recherches dans tes activités…", opts: [
      { t:"L’exploit", k:"REUSSITE" },
      { t:"La nouveauté", k:"LIBERTE" },
      { t:"Le partage", k:"APPARTENANCE" },
      { t:"La constance", k:"STABILITE" },
    ]},
    { q: "18) Quand tu penses à l’avenir, tu veux…", opts: [
      { t:"Réussite & reconnaissance", k:"REUSSITE" },
      { t:"Liberté & épanouissement", k:"LIBERTE" },
      { t:"Être bien entouré(e)", k:"APPARTENANCE" },
      { t:"Être serein(e), stable", k:"STABILITE" },
    ]},
    { q: "19) Quand tu commences une activité, tu aimes…", opts: [
      { t:"Voir des résultats rapides", k:"REUSSITE" },
      { t:"Essayer différentes façons", k:"LIBERTE" },
      { t:"Être guidé(e) par les autres", k:"APPARTENANCE" },
      { t:"Avoir un plan clair", k:"STABILITE" },
    ]},
    { q: "20) En période de stress, tu cherches surtout…", opts: [
      { t:"Garder ta performance", k:"REUSSITE" },
      { t:"Retrouver ta liberté", k:"LIBERTE" },
      { t:"Parler avec tes proches", k:"APPARTENANCE" },
      { t:"Garder ta routine", k:"STABILITE" },
    ]},
    { q: "21) Tu te sens en confiance quand…", opts: [
      { t:"Tu es bien entraîné(e)", k:"REUSSITE" },
      { t:"Tu peux improviser", k:"LIBERTE" },
      { t:"Tu es soutenu(e)", k:"APPARTENANCE" },
      { t:"Tu as un cadre clair", k:"STABILITE" },
    ]},
    { q: "22) Tu gères mieux les échecs quand…", opts: [
      { t:"Tu rebondis et progresses", k:"REUSSITE" },
      { t:"Tu tires une leçon perso", k:"LIBERTE" },
      { t:"Tu en parles autour de toi", k:"APPARTENANCE" },
      { t:"Tu reviens à tes habitudes", k:"STABILITE" },
    ]},
    { q: "23) Ce qui t’apporte le plus de sérénité…", opts: [
      { t:"Bien performer", k:"REUSSITE" },
      { t:"Rester libre", k:"LIBERTE" },
      { t:"Être entouré(e) de confiance", k:"APPARTENANCE" },
      { t:"Être dans ta zone de confort", k:"STABILITE" },
    ]},
    { q: "24) Pour toi, la réussite c’est surtout…", opts: [
      { t:"Atteindre tes objectifs", k:"REUSSITE" },
      { t:"Être libre et heureux(se)", k:"LIBERTE" },
      { t:"Être bien entouré(e)", k:"APPARTENANCE" },
      { t:"Être équilibré(e) et en paix", k:"STABILITE" },
    ]},
  ];

  const state = { idx: 0, answers: Array(questions.length).fill(null), name: "" };

  const el = (id) => document.getElementById(id);
  const introSection = el("introSection");
  const quizSection = el("quizSection");
  const resultSection = el("resultSection");
  const progressBar = el("progressBar");
  const progressText = el("progressText");
  const questionText = el("questionText");
  const optionsWrap = el("optionsWrap");
  const startBtn = el("startBtn");
  const prevBtn = el("prevBtn");
  const nextBtn = el("nextBtn");
  const restartBtn = el("restartBtn");
  const pdfBtn = el("pdfBtn");

  const helloUser = el("helloUser");
  const summaryText = el("summaryText");
  const pR = el("pREUSSITE");
  const pL = el("pLIBERTE");
  const pA = el("pAPPARTENANCE");
  const pS = el("pSTABILITE");
  const chartCanvas = el("valuesChart");
  const valeursPharesBlock = el("valeursPharesBlock");
  const valeursPharesList = el("valeursPharesList");

  function updateProgress(){ const pct = (state.idx / questions.length) * 100; progressBar.style.width = pct + "%"; progressText.textContent = state.idx + " / " + questions.length; }

  function renderQuestion(){
    const q = questions[state.idx];
    questionText.textContent = q.q;
    optionsWrap.innerHTML = "";
    q.opts.forEach((opt, i) => {
      const wrap = document.createElement("div"); wrap.className = "option";
      const input = document.createElement("input"); input.type = "radio"; input.name = "answer"; input.id = "opt"+i; input.value = opt.k;
      const label = document.createElement("label"); label.htmlFor = "opt"+i; label.textContent = opt.t;
      const current = state.answers[state.idx]; if(current && current.k === opt.k){ input.checked = true; }
      wrap.addEventListener("click", () => { input.checked = true; });
      wrap.appendChild(input); wrap.appendChild(label); optionsWrap.appendChild(wrap);
    });
    prevBtn.disabled = (state.idx === 0);
    nextBtn.textContent = (state.idx === questions.length-1) ? "Voir le résultat →" : "Suivant →";
    updateProgress();
  }

  function collectSelection(){
    const selected = optionsWrap.querySelector("input[name='answer']:checked");
    if(!selected) return null;
    const k = selected.value;
    const t = questions[state.idx].opts.find(o => o.k===k).t;
    return { k, t };
  }

  function computePercentages(){
    const counts = { REUSSITE:0, LIBERTE:0, APPARTENANCE:0, STABILITE:0 };
    state.answers.forEach(a => { if(a && a.k) counts[a.k] += 1; });
    const total = state.answers.filter(Boolean).length || 1;
    return Object.fromEntries(Object.entries(counts).map(([k,v]) => [k, Math.round((v/total)*100)]));
  }

  // --- Matrice "valeurs phares" (dominant|secondaire) ---
  const mapVals = {
    "REUSSITE|LIBERTE": ["Courage","Ambition","Créativité","Autonomie"],
    "REUSSITE|APPARTENANCE": ["Dépassement","Fiabilité","Loyauté","Responsabilité"],
    "REUSSITE|STABILITE": ["Discipline","Constance","Persévérance","Volonté"],
    "LIBERTE|REUSSITE": ["Créativité","Curiosité","Ambition","Indépendance"],
    "LIBERTE|APPARTENANCE": ["Authenticité","Ouverture d’esprit","Coopération","Enthousiasme"],
    "LIBERTE|STABILITE": ["Authenticité","Ouverture d’esprit","Patience","Sérénité"],
    "APPARTENANCE|REUSSITE": ["Coopération","Loyauté","Fiabilité","Reconnaissance"],
    "APPARTENANCE|LIBERTE": ["Bienveillance","Curiosité","Enthousiasme","Authenticité"],
    "APPARTENANCE|STABILITE": ["Respect","Responsabilité","Tolérance","Solidarité"],
    "STABILITE|REUSSITE": ["Discipline","Constance","Persévérance","Excellence"],
    "STABILITE|LIBERTE": ["Patience","Sérénité","Autonomie","Équilibre"],
    "STABILITE|APPARTENANCE": ["Loyauté","Fiabilité","Respect","Solidarité"],
  };
  function valeursPhares(domK, secK){ return mapVals[domK + "|" + secK] || ["Respect","Responsabilité","Curiosité","Patience"]; }

  let chartInstance = null;
  function renderChart(pct){
    if(chartInstance){ chartInstance.destroy(); }
    chartInstance = new Chart(chartCanvas, {
      type: "bar",
      data: { labels: ["Réussite","Liberté","Appartenance","Stabilité"], datasets: [{ label: "Profil de valeurs (%)", data: [pct.REUSSITE, pct.LIBERTE, pct.APPARTENANCE, pct.STABILITE] }] },
      options: { responsive: true, plugins: { legend: { display: false }, tooltip: { enabled: true } }, scales: { y: { min:0, max:100, ticks:{ stepSize:20 } } } }
    });
  }

  function profileNarrative(pct){
    const entries = Object.entries(pct).sort((a,b) => b[1]-a[1]);
    const [domK, domV] = entries[0]; const [secK, secV] = entries[1];
    const label = (k) => ({ REUSSITE:"Réussite & Performance", LIBERTE:"Liberté & Autonomie", APPARTENANCE:"Appartenance & Relations", STABILITE:"Stabilité & Équilibre" }[k]);
    const shortTip = (k) => ({
      REUSSITE: "Fixe des objectifs clairs, mesure tes progrès et célèbre tes étapes.",
      LIBERTE: "Choisis des méthodes d’apprentissage variées et des projets qui te laissent initier.",
      APPARTENANCE: "Travaille en binôme/équipe, ritualise les temps de feedback et de soutien.",
      STABILITE: "Installe une routine (sommeil, entraînements, révisions) et protège tes créneaux."
    }[k]);
    const school = (k) => ({
      REUSSITE: "Révisions par objectifs, planning hebdo, techniques d’examens (fiches chrono, QCM blancs).",
      LIBERTE: "Projets créatifs, mindmaps, exposés choisis, méthodes actives (Feynman, flashcards).",
      APPARTENANCE: "Groupes d’étude, tutorat, explications mutuelles, accountability partner.",
      STABILITE: "Routine stable, checklists, environnement calme, pause 5 min/25 min (Pomodoro)."
    }[k]);
    const sport = (k) => ({
      REUSSITE: "Objectifs SMART compétition, stats d’entraînement, imagerie de performance.",
      LIBERTE: "Variété des exercices, jeux libres, choix de stratégies, exploration technique.",
      APPARTENANCE: "Rituels d’équipe, rôle clair, communication positive, cohésion.",
      STABILITE: "Échauffement standardisé, sommeil/récup, suivi charge & nutrition."
    }[k]);
    const life = (k) => ({
      REUSSITE: "Entoure-toi de modèles inspirants, tiens un carnet de réussites.",
      LIBERTE: "Garde des espaces perso (créa, musique, voyage), fixe des limites saines.",
      APPARTENANCE: "Entretiens tes amitiés, propose des projets collectifs, gratitude régulière.",
      STABILITE: "Hygiène de vie, gestion du stress par respiration, routines matin/soir."
    }[k]);
    const domLabel = label(domK); const secLabel = label(secK);
    const p1 = `Ton système de valeurs est dominé par <strong>${domLabel}</strong> (${domV}%).`;
    const p2 = `En second, tu valorises <strong>${secLabel}</strong> (${secV}%).`;
    const p3 = `Conseil express : ${shortTip(domK)}`;
    const html = `<div class="narrative"><p>${p1} ${p2}</p><p>${p3}</p>
      <div class="narrGrid"><div><h4>Études</h4><p>${school(domK)}</p></div>
      <div><h4>Sport</h4><p>${sport(domK)}</p></div>
      <div><h4>Vie perso</h4><p>${life(domK)}</p></div></div></div>`;
    return { html, domK, secK };
  }

  function renderValeursPhares(list){
    valeursPharesList.innerHTML = ""; list.forEach(v => { const li = document.createElement("li"); li.textContent = v; valeursPharesList.appendChild(li); });
    valeursPharesBlock.classList.remove("hidden");
  }

  function showResults(){
    const pct = computePercentages();
    const name = state.name ? `Bonjour ${state.name} — ` : "";
    helloUser.textContent = name + "voici ton résultat :";
    pR.textContent = pct.REUSSITE + "%"; pL.textContent = pct.LIBERTE + "%"; pA.textContent = pct.APPARTENANCE + "%"; pS.textContent = pct.STABILITE + "%";
    const { html, domK, secK } = profileNarrative(pct);
    summaryText.innerHTML = html; renderChart(pct);
    const vals = valeursPhares(domK, secK); renderValeursPhares(vals);
  }

  // --- PDF (logo centré toutes pages + valeurs phares) ---
  async function generatePDF(){
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const W = pdf.internal.pageSize.getWidth(); const M = 42;
    const logoImg = document.getElementById("brandLogo").src;
    const pct = computePercentages(); const entries = Object.entries(pct).sort((a,b)=>b[1]-a[1]);
    const [domK, domV] = entries[0]; const [secK, secV] = entries[1];
    const labels = { REUSSITE:"Réussite & Performance", LIBERTE:"Liberté & Autonomie", APPARTENANCE:"Appartenance & Relations", STABILITE:"Stabilité & Équilibre" };
    const vals = valeursPhares(domK, secK);

    // Page 1
    try { pdf.addImage(logoImg, "JPEG", (W-120)/2, 24, 120, 48); } catch(e){}
    pdf.setFont("helvetica","bold"); pdf.setFontSize(18);
    pdf.text("Test des Valeurs (12–25 ans)", W/2, 100, { align:"center" });
    pdf.setFont("helvetica","",12); pdf.text("Les 4 pôles de valeurs", W/2, 120, { align:"center" });
    pdf.setFontSize(11);
    const lines1 = [
      "Réussite & Performance : motivation à exceller, atteindre des objectifs et être reconnu(e).",
      "Liberté & Autonomie : besoin d’indépendance, de découverte et d’innovation.",
      "Appartenance & Relations : importance des liens, de l’équipe, de la famille et du soutien.",
      "Stabilité & Équilibre : recherche de sécurité, de cadre et d’habitudes saines."
    ];
    let y = 150; lines1.forEach(L => { pdf.text(L, M, y); y += 18; });
    pdf.setTextColor(150); pdf.setFontSize(9); pdf.text("© Académie de Performances — Rapport personnalisé", W/2, 820, { align:"center" }); pdf.setTextColor(0);

    // Page 2
    pdf.addPage();
    try { pdf.addImage(logoImg, "JPEG", (W-120)/2, 24, 120, 48); } catch(e){}
    pdf.setFont("helvetica","bold"); pdf.setFontSize(16); pdf.text("Analyse personnalisée", W/2, 100, { align:"center" });
    pdf.setFont("helvetica","",12);
    pdf.text(`Dominante : ${labels[domK]} (${domV}%)`, M, 130);
    pdf.text(`Secondaire : ${labels[secK]} (${secV}%)`, M, 150);
    pdf.text("Tes 4 valeurs phares :", M, 180);
    const vText = "⭐ " + vals.join("   ⭐ ");
    pdf.text(vText, M, 200);
    pdf.setTextColor(150); pdf.setFontSize(9); pdf.text("© Académie de Performances — Rapport personnalisé", W/2, 820, { align:"center" }); pdf.setTextColor(0);

    // Page 3
    pdf.addPage();
    try { pdf.addImage(logoImg, "JPEG", (W-120)/2, 24, 120, 48); } catch(e){}
    pdf.setFont("helvetica","bold"); pdf.setFontSize(16); pdf.text("Résultats visuels", W/2, 100, { align:"center" });
    const dataUrl = document.getElementById("valuesChart").toDataURL("image/png");
    pdf.addImage(dataUrl, "PNG", (W-460)/2, 120, 460, 230);
    pdf.setFont("helvetica","",12);
    pdf.text(`Réussite: ${pct.REUSSITE}%   |   Liberté: ${pct.LIBERTE}%   |   Appartenance: ${pct.APPARTENANCE}%   |   Stabilité: ${pct.STABILITE}%`, W/2, 370, { align:"center" });
    pdf.text("Valeurs phares :", W/2, 400, { align:"center" });
    pdf.text(vText, W/2, 420, { align:"center" });
    pdf.setTextColor(150); pdf.setFontSize(9); pdf.text("© Académie de Performances — Rapport personnalisé", W/2, 820, { align:"center" }); pdf.setTextColor(0);

    pdf.save("Test_Valeurs_12_25.pdf");
  }

  function goToResults(){ introSection.classList.add("hidden"); quizSection.classList.add("hidden"); resultSection.classList.remove("hidden"); showResults(); }

  // Events
  startBtn.addEventListener("click", () => { state.name = (document.getElementById("userName").value || "").trim(); introSection.classList.add("hidden"); quizSection.classList.remove("hidden"); state.idx = 0; renderQuestion(); });
  nextBtn.addEventListener("click", () => { const sel = collectSelection(); if(!sel){ alert("Choisis une option pour continuer."); return; } state.answers[state.idx] = sel; if(state.idx < questions.length - 1){ state.idx += 1; renderQuestion(); } else { goToResults(); } });
  prevBtn.addEventListener("click", () => { if(state.idx === 0) return; state.idx -= 1; renderQuestion(); });
  restartBtn.addEventListener("click", () => { state.idx = 0; state.answers = Array(questions.length).fill(null); resultSection.classList.add("hidden"); introSection.classList.remove("hidden"); });
  pdfBtn.addEventListener("click", () => generatePDF());
})();