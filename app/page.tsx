"use client";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A11] text-gray-100 font-sans p-6">
      {/* Header Futuriste */}
      <header className="flex justify-between items-center pb-6 border-b border-cyan-900/40">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <h1 className="text-2xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            SUPER CALCULATOR <span className="text-xs text-gray-500 font-normal">v1.0</span>
          </h1>
        </div>
        <div className="flex gap-4 text-xs font-mono">
          <span className="bg-cyan-950/60 border border-cyan-800/50 px-3 py-1.5 rounded-md text-cyan-300">
            SYSTEM: ONLINE
          </span>
          <span className="bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-md text-emerald-300">
            AGENTS: 4/4 ACTIVE
          </span>
        </div>
      </header>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* Colonne Gauche: Statut des 4 Agents IA */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Agents Multi-IA
          </h2>
          
          {[
            { id: 1, name: "Agent Screener", role: "Détection du Momentum", status: "Scanning" },
            { id: 2, name: "Agent Chartiste", role: "Bougies & Patterns", status: "Ready" },
            { id: 3, name: "Agent Risque", role: "Calcul TP (+25%) / SL (-5%)", status: "Ready" },
            { id: 4, name: "Agent Sentinelle", role: "Alerte & Décodage Fr", status: "Listening" },
          ].map((agent) => (
            <div
              key={agent.id}
              className="bg-[#0D1322] border border-gray-800/80 hover:border-cyan-500/50 p-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-950/10"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-cyan-200">{agent.name}</span>
                <span className="text-[10px] bg-cyan-900/40 text-cyan-300 px-2 py-0.5 rounded border border-cyan-700/30">
                  {agent.status}
                </span>
              </div>
              <p className="text-xs text-gray-500">{agent.role}</p>
            </div>
          ))}
        </div>

        {/* Colonne Droite: Zone de Signalisation */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-[#0D1322] border border-emerald-900/40 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-2.5 py-1 rounded-full font-mono">
                  DERNIER SIGNAL DÉTECTÉ
                </span>
                <h3 className="text-xl font-bold text-white mt-2">BTC-USD — Bitcoin</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-400">$85,752.81</div>
                <div className="text-xs text-gray-400">Target: $107,191.01 (+25%)</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 my-4 p-3 bg-[#070A11] rounded-lg border border-gray-800/60 font-mono text-xs">
              <div>
                <span className="text-gray-500 block">STOP LOSS</span>
                <span className="text-rose-400 font-bold">$81,465.17 (-5%)</span>
              </div>
              <div>
                <span className="text-gray-500 block">RATIO R/R</span>
                <span className="text-cyan-400 font-bold">1:5.0</span>
              </div>
              <div>
                <span className="text-gray-500 block">PATTERN</span>
                <span className="text-emerald-400 font-bold">Avalement Haussier</span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed bg-cyan-950/20 p-3 rounded border border-cyan-900/30">
              💬 <strong className="text-cyan-300">Décryptage IA :</strong> Accumulation majeure détectée sur la bougie journalière. Le volume acheteur dépasse la moyenne de 20 jours. Risque contenu.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
