"use client";
import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// TRIVAR – Sección Proyectos Productivos
// Concepto: "El Sistema Invisible"
// Paleta: #7909d4 · #8c0ae3 · #ad22fa
// Tipografía: Space Grotesk
// ─────────────────────────────────────────────

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');`;

const styles = `
  ${FONT_IMPORT}

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --v1: #7909d4;
    --v2: #8c0ae3;
    --v3: #ad22fa;
    --bg: #06030d;
    --bg2: #0c0618;
    --surface: #120920;
    --border: rgba(173,34,250,0.18);
    --border-soft: rgba(173,34,250,0.08);
    --text: #f0eaf8;
    --text-muted: rgba(240,234,248,0.52);
    --text-dim: rgba(240,234,248,0.28);
    --glow: rgba(173,34,250,0.22);
    --glass-bg: rgba(173,34,250,0.06);
    --glass-border: rgba(173,34,250,0.28);
    --shadow-card: 0 4px 32px rgba(121,9,212,0.18), 0 1px 0 rgba(173,34,250,0.12) inset;
    --shadow-glass: 0 8px 48px rgba(121,9,212,0.28), 0 0 0 1px rgba(173,34,250,0.22), 0 1px 0 rgba(255,255,255,0.06) inset;
    --radius: 16px;
    --radius-sm: 10px;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: var(--bg);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  /* ── GRID NOISE BACKGROUND ── */
  .trivar-root {
    position: relative;
    overflow: hidden;
    background: var(--bg);
  }

  .trivar-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(173,34,250,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(173,34,250,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
    z-index: 0;
  }

  /* ── AMBIENT BLOBS ── */
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }

  .blob-1 {
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(121,9,212,0.18) 0%, transparent 70%);
    top: -200px; right: -100px;
  }

  .blob-2 {
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(173,34,250,0.12) 0%, transparent 70%);
    bottom: 10%; left: -80px;
  }

  /* ── SECTION WRAPPER ── */
  .section {
    position: relative;
    z-index: 1;
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ── HERO BLOCK ── */
  .hero-block {
    padding: 120px 0 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .hero-block { grid-template-columns: 1fr; gap: 40px; padding: 80px 0 48px; }
    .section { padding: 0 20px; }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--v3);
    margin-bottom: 20px;
  }

  .eyebrow-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--v3);
    box-shadow: 0 0 8px var(--v3);
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }

  .hero-title {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--text);
    margin-bottom: 20px;
  }

  .hero-title span {
    background: linear-gradient(135deg, var(--v3) 0%, #d670ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-body {
    font-size: 17px;
    line-height: 1.7;
    color: var(--text-muted);
    margin-bottom: 36px;
    max-width: 480px;
  }

  .cta-group {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--v1) 0%, var(--v3) 100%);
    color: #fff;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.01em;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 24px rgba(121,9,212,0.4), 0 1px 0 rgba(255,255,255,0.12) inset;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 36px rgba(173,34,250,0.5), 0 1px 0 rgba(255,255,255,0.16) inset;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 24px;
    border-radius: 10px;
    background: transparent;
    color: var(--text-muted);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .btn-secondary:hover {
    color: var(--text);
    border-color: var(--v3);
    background: var(--glass-bg);
  }

  /* ── METRIC CLUSTER (hero right) ── */
  .metric-cluster {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .metric-card {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    padding: 28px 24px;
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: default;
  }

  .metric-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(173,34,250,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .metric-card:hover {
    border-color: var(--border);
    box-shadow: 0 8px 40px rgba(121,9,212,0.24), 0 1px 0 rgba(173,34,250,0.16) inset;
    transform: translateY(-3px);
  }

  .metric-card:hover::before { opacity: 1; }

  .metric-card.glass {
    background: var(--glass-bg);
    border-color: var(--glass-border);
    box-shadow: var(--shadow-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .metric-card.glass::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  }

  .metric-val {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #fff 40%, var(--v3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 6px;
    display: block;
  }

  .metric-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.4;
  }

  .metric-delta {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 10px;
    font-size: 11px;
    font-weight: 600;
    color: #6ee7b7;
    background: rgba(110,231,183,0.1);
    padding: 3px 8px;
    border-radius: 20px;
  }

  /* ── DIVIDER ── */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 0;
  }

  /* ── PROBLEM BLOCK ── */
  .problem-block {
    padding: 96px 0;
  }

  .block-header {
    max-width: 620px;
    margin-bottom: 56px;
  }

  .section-title {
    font-size: clamp(26px, 3vw, 38px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .section-sub {
    font-size: 16px;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .problem-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 900px) {
    .problem-grid { grid-template-columns: 1fr; }
    .axes-grid { grid-template-columns: 1fr !important; }
    .case-grid { grid-template-columns: 1fr !important; }
    .stages-grid { grid-template-columns: 1fr !important; }
    .metric-cluster { grid-template-columns: 1fr 1fr; }
  }

  .problem-card {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    padding: 32px 28px;
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .problem-card:hover {
    border-color: rgba(173,34,250,0.3);
    box-shadow: 0 8px 40px rgba(121,9,212,0.2), 0 1px 0 rgba(173,34,250,0.14) inset;
    transform: translateY(-2px);
  }

  .problem-icon {
    width: 44px; height: 44px;
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(121,9,212,0.2) 0%, rgba(173,34,250,0.1) 100%);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .problem-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text);
  }

  .problem-desc {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.65;
  }

  /* ── AXES BLOCK ── */
  .axes-block {
    padding: 96px 0;
    background: linear-gradient(180deg, transparent 0%, rgba(121,9,212,0.04) 50%, transparent 100%);
  }

  .axes-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 56px;
  }

  .axis-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius);
    padding: 40px 32px;
    text-align: center;
    box-shadow: var(--shadow-glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .axis-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
  }

  .axis-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 56px rgba(121,9,212,0.32), 0 0 0 1px rgba(173,34,250,0.3), 0 1px 0 rgba(255,255,255,0.1) inset;
    border-color: rgba(173,34,250,0.4);
  }

  .axis-number {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--v3);
    margin-bottom: 20px;
    display: block;
  }

  .axis-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 14px;
    background: linear-gradient(135deg, #fff 50%, var(--v3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .axis-desc {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
  }

  /* ── CASE STUDY ── */
  .case-block {
    padding: 96px 0;
  }

  .case-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 56px;
  }

  .case-context {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    padding: 40px 36px;
    box-shadow: var(--shadow-card);
  }

  .case-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--v3);
    background: rgba(173,34,250,0.1);
    border: 1px solid rgba(173,34,250,0.2);
    padding: 6px 14px;
    border-radius: 20px;
    margin-bottom: 28px;
  }

  .case-title {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }

  .case-intro {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 28px;
  }

  .before-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .before-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    color: var(--text-muted);
    padding: 12px 16px;
    border-radius: var(--radius-sm);
    background: rgba(255,80,80,0.04);
    border: 1px solid rgba(255,80,80,0.1);
  }

  .before-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #f87171;
    margin-top: 5px;
    flex-shrink: 0;
    box-shadow: 0 0 8px rgba(248,113,113,0.5);
  }

  /* Results panel */
  .case-results {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .result-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius);
    padding: 28px 22px;
    box-shadow: var(--shadow-glass);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .result-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  }

  .result-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 48px rgba(121,9,212,0.28), 0 0 0 1px rgba(173,34,250,0.28), 0 1px 0 rgba(255,255,255,0.08) inset;
  }

  .result-val {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #fff 30%, var(--v3) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 8px;
    display: block;
  }

  .result-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-dim);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.4;
  }

  /* ── PROCESS STAGES ── */
  .stages-block {
    padding: 96px 0;
  }

  .stages-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    margin-top: 56px;
  }

  @media (max-width: 1100px) {
    .stages-grid { grid-template-columns: repeat(3, 1fr) !important; }
    .hero-block { grid-template-columns: 1fr; gap: 48px; }
  }

  .stage-card {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    padding: 28px 22px;
    box-shadow: var(--shadow-card);
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .stage-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--v1), var(--v3));
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
  }

  .stage-card:hover {
    border-color: rgba(173,34,250,0.25);
    box-shadow: 0 8px 40px rgba(121,9,212,0.2), 0 1px 0 rgba(173,34,250,0.14) inset;
    transform: translateY(-3px);
  }

  .stage-card:hover::before { transform: scaleX(1); }

  .stage-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--v3);
    opacity: 0.7;
    margin-bottom: 16px;
    display: block;
  }

  .stage-title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--text);
    line-height: 1.3;
  }

  .stage-desc {
    font-size: 13px;
    color: var(--text-dim);
    line-height: 1.6;
  }

  /* ── FINAL CTA ── */
  .cta-block {
    padding: 80px 0 120px;
  }

  .cta-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 72px 64px;
    text-align: center;
    box-shadow: var(--shadow-glass);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    position: relative;
    overflow: hidden;
  }

  .cta-panel::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  }

  .cta-panel::after {
    content: '';
    position: absolute;
    top: -200px; left: 50%;
    transform: translateX(-50%);
    width: 600px; height: 400px;
    background: radial-gradient(ellipse, rgba(121,9,212,0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  .cta-title {
    font-size: clamp(26px, 3vw, 40px);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
  }

  .cta-sub {
    font-size: 16px;
    color: var(--text-muted);
    max-width: 520px;
    margin: 0 auto 40px;
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }

  .cta-actions {
    display: flex;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  /* ── COUNTER ANIMATION ── */
  .counter-anim {
    display: inline-block;
  }

  /* ── FAQ STRIP ── */
  .faq-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    padding: 0 0 96px;
  }

  @media (max-width: 768px) {
    .faq-strip { grid-template-columns: 1fr; }
    .cta-panel { padding: 48px 28px; }
    .case-results { grid-template-columns: 1fr 1fr; }
  }

  .faq-card {
    background: var(--surface);
    border: 1px solid var(--border-soft);
    border-radius: var(--radius);
    padding: 28px 24px;
    box-shadow: var(--shadow-card);
    transition: all 0.3s ease;
  }

  .faq-card:hover {
    border-color: var(--border);
    box-shadow: 0 6px 32px rgba(121,9,212,0.18), 0 1px 0 rgba(173,34,250,0.12) inset;
    transform: translateY(-1px);
  }

  .faq-q {
    font-size: 14px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .faq-a {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.65;
  }

  /* ── SCROLL REVEAL ── */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }
`;

// ── DATA ──────────────────────────────────────

const problems = [
  {
    icon: "⚡",
    title: "Crecimiento que no se traduce en ganancia",
    desc: "Más facturación no es más margen. Las ineficiencias ocultas se comen el resultado antes de que lo veas.",
  },
  {
    icon: "🔩",
    title: "Inversiones sin análisis integral",
    desc: "Comprar maquinaria sin modelar el impacto financiero es apostar, no decidir. La diferencia importa.",
  },
  {
    icon: "🔍",
    title: "Costos ocultos que nadie mide",
    desc: "Merma, reprocesos, tiempos muertos. Pérdidas que se normalizan hasta que el margen colapsa.",
  },
];

const axes = [
  {
    n: "01",
    title: "Capacidad",
    desc: "Aumentamos producción sin aumentar desorden. Más output, misma estructura.",
  },
  {
    n: "02",
    title: "Calidad",
    desc: "Reducimos errores, reprocesos y mermas. Cada punto de mejora tiene impacto financiero medible.",
  },
  {
    n: "03",
    title: "Rentabilidad",
    desc: "Cada decisión técnica tiene un escenario económico proyectado antes de ejecutarse.",
  },
];

const caseMetrics = [
  { val: "+38%", label: "Capacidad productiva" },
  { val: "−8pt", label: "Merma mensual" },
  { val: "9m", label: "Recupero de inversión" },
  { val: "+11pt", label: "Margen operativo" },
];

const stages = [
  {
    n: "01",
    title: "Diagnóstico estratégico",
    desc: "Analizamos proceso, costos y capacidad real.",
  },
  {
    n: "02",
    title: "Modelado económico",
    desc: "Simulamos escenarios financieros del proyecto.",
  },
  {
    n: "03",
    title: "Diseño técnico",
    desc: "Desarrollamos el plan operativo detallado.",
  },
  {
    n: "04",
    title: "Ejecución acompañada",
    desc: "Supervisamos implementación y ajustes.",
  },
  {
    n: "05",
    title: "Medición de impacto",
    desc: "Validamos resultados operativos y financieros.",
  },
];

const faqs = [
  {
    q: "¿Trabajan con industrias específicas?",
    a: "Tenemos experiencia en alimentos, manufactura ligera y procesos industriales regionales.",
  },
  {
    q: "¿Cuánto dura un proyecto?",
    a: "Depende del alcance. La mayoría se desarrolla entre 3 y 6 meses.",
  },
  {
    q: "¿Cómo se define el retorno?",
    a: "Antes de ejecutar, modelamos el impacto financiero esperado. Sin suposiciones.",
  },
  {
    q: "¿Supervisan la implementación?",
    a: "Sí, acompañamos la ejecución hasta validar los resultados con datos reales.",
  },
];

// ── HOOKS ──────────────────────────────────────

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target, duration = 1800, trigger = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [trigger, target, duration]);
  return val;
}

// ── COMPONENTS ────────────────────────────────

function AnimatedMetricCard({ val, label, glass = false, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const numMatch = val.match(/[\d.]+/);
  const numericVal = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix2 = val.replace(/[\d.]+.*/, "");
  const suffix2 = val.replace(/.*[\d.]+/, "");

  const count = useCounter(numericVal, 1600, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`metric-card${glass ? " glass" : ""}`}>
      <span className="metric-val">
        {prefix2}{numericVal % 1 !== 0 ? count.toFixed(1) : count}{suffix2}
      </span>
      <div className="metric-label">{label}</div>
      <div className="metric-delta">↑ Meta cumplida</div>
    </div>
  );
}

// ── MAIN COMPONENT ──────────────────────────────

export default function TrivarSection() {
  useReveal();

  return (
    <>
      <style>{styles}</style>
      <div className="trivar-root">
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* HERO */}
        <div className="section">
          <div className="hero-block">
            <div>
              <div className="eyebrow reveal">
                <span className="eyebrow-dot" />
                Ingeniería industrial aplicada al negocio
              </div>
              <h1 className="hero-title reveal reveal-delay-1">
                Diseñamos proyectos que<br />
                <span>impactan directamente</span><br />
                en tu rentabilidad
              </h1>
              <p className="hero-body reveal reveal-delay-2">
                Optimizamos procesos, ampliamos capacidad instalada y aseguramos operaciones
                con foco en retorno de inversión. Cada peso invertido tiene una visión detrás.
              </p>
              <div className="cta-group reveal reveal-delay-3">
                <button className="btn-primary">
                  Agendar evaluación productiva →
                </button>
                <button className="btn-secondary">
                  Ver metodología
                </button>
              </div>
            </div>
            <div className="metric-cluster reveal reveal-delay-2">
              <AnimatedMetricCard val="38" suffix="%" label="Capacidad productiva promedio" glass />
              <AnimatedMetricCard val="9" suffix="m" label="Recupero de inversión" />
              <AnimatedMetricCard val="11" suffix="pt" label="Mejora en margen operativo" />
              <AnimatedMetricCard val="3" suffix="–6m" label="Duración promedio de proyecto" glass />
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* PROBLEMA */}
        <div className="section">
          <div className="problem-block">
            <div className="block-header reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                El problema real
              </div>
              <h2 className="section-title">
                El crecimiento desordenado es<br />el mayor enemigo de la rentabilidad
              </h2>
              <p className="section-sub">
                Muchas PyMEs crecen en ventas, pero no en eficiencia. El resultado financiero no
                mejora, porque el sistema operativo nunca fue diseñado para escalar.
              </p>
            </div>
            <div className="problem-grid">
              {problems.map((p, i) => (
                <div key={i} className={`problem-card reveal reveal-delay-${i + 1}`}>
                  <div className="problem-icon">{p.icon}</div>
                  <div className="problem-title">{p.title}</div>
                  <div className="problem-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* EJES */}
        <div className="axes-block">
          <div className="section">
            <div className="block-header reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Ingeniería aplicada al negocio
              </div>
              <h2 className="section-title">Tres ejes. Un objetivo:<br />resultado financiero.</h2>
            </div>
            <div className="axes-grid">
              {axes.map((a, i) => (
                <div key={i} className={`axis-card reveal reveal-delay-${i + 1}`}>
                  <span className="axis-number">{a.n}</span>
                  <div className="axis-title">{a.title}</div>
                  <div className="axis-desc">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* CASO LA MAGA */}
        <div className="section">
          <div className="case-block">
            <div className="block-header reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Caso de estudio
              </div>
              <h2 className="section-title">Resultados reales.<br />No proyecciones vacías.</h2>
            </div>
            <div className="case-grid">
              <div className="case-context reveal">
                <div className="case-badge">⚙️ Industria alimentaria – La Maga</div>
                <h3 className="case-title">De la saturación al escale</h3>
                <p className="case-intro">
                  Una planta con demanda no cubierta, cuello de botella en envasado y merma
                  crónica del 12%. En 6 meses, el sistema cambió.
                </p>
                <div className="before-list">
                  {[
                    "12% de merma mensual sostenida",
                    "Cuello de botella en el área de envasado",
                    "Saturación operativa sin margen de escala",
                    "Demanda real no cubierta",
                  ].map((item, i) => (
                    <div key={i} className="before-item">
                      <span className="before-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-results reveal reveal-delay-1">
                {caseMetrics.map((m, i) => (
                  <AnimatedMetricCard key={i} val={m.val} label={m.label} glass={i % 2 === 0} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* PROCESO */}
        <div className="section">
          <div className="stages-block">
            <div className="block-header reveal">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Metodología de trabajo
              </div>
              <h2 className="section-title">Un proceso claro.<br />Sin improvisación.</h2>
              <p className="section-sub">
                No trabajamos con suposiciones. Trabajamos con datos.
              </p>
            </div>
            <div className="stages-grid">
              {stages.map((s, i) => (
                <div key={i} className={`stage-card reveal reveal-delay-${(i % 4) + 1}`}>
                  <span className="stage-num">Etapa {s.n}</span>
                  <div className="stage-title">{s.title}</div>
                  <div className="stage-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* FAQ */}
        <div className="section">
          <div className="faq-strip" style={{ marginTop: "80px" }}>
            {faqs.map((f, i) => (
              <div key={i} className={`faq-card reveal reveal-delay-${(i % 2) + 1}`}>
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="section">
          <div className="cta-block">
            <div className="cta-panel reveal">
              <h2 className="cta-title">
                Tu planta puede producir más.<br />
                <span style={{ background: "linear-gradient(135deg, #fff 40%, #ad22fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  ¿Tu sistema está preparado?
                </span>
              </h2>
              <p className="cta-sub">
                Si estás evaluando ampliar capacidad, reducir costos o profesionalizar
                tu operación, el momento de ordenar el sistema es ahora.
              </p>
              <div className="cta-actions">
                <button className="btn-primary" style={{ padding: "16px 36px", fontSize: "15px" }}>
                  Agendar evaluación productiva →
                </button>
                <button className="btn-secondary">
                  Descargar metodología
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
