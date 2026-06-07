'use client';

import React, { useState, useEffect } from 'react';
import { Github, X, Mail, MessageCircle, Users, ExternalLink, Check, Copy, Terminal } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedQR, setCopiedQR] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialAccounts = [
    { name: 'GitHub (Main)', icon: Github, url: 'https://github.com/shoplion766-design', username: 'shoplion766-design' },
    { name: 'GitHub (lionj4)', icon: Github, url: 'https://github.com/lionj4', username: 'lionj4' },
    { name: 'X / Twitter', icon: X, url: 'https://x.com/Jores1301Jores', username: '@Jores1301Jores' },
    { name: 'Telegram', icon: MessageCircle, url: 'https://t.me/lioneljores', username: '@lioneljores' },
    { name: 'Discord', icon: Users, url: 'https://discord.com/users/lionj4_84235', username: 'lionj4_84235' },
    { name: 'YouTube - VoidSec', icon: ExternalLink, url: 'https://youtube.com/@VoidSec', username: 'Web3 Security IA' },
    { name: 'Email', icon: Mail, url: 'mailto:lioneljores4@gmail.com', username: 'lioneljores4@gmail.com' },
  ];

  const projects = [
    { title: "MultiFlashArb v2", desc: "Arbitrageur flash loan haute performance sur Base Mainnet (Uniswap V3).", tags: ["Solidity", "Flash Loan"], color: "from-cyan-400 to-blue-500" },
    { title: "OpenMythos", desc: "Recurrent-Depth Transformer avec MoE et stabilité LTI.", tags: ["PyTorch", "MoE", "AI"], color: "from-purple-400 to-pink-500" },
    { title: "Birdeye Alert Bot", desc: "Bot de surveillance temps réel des tokens Solana avec alertes Telegram.", tags: ["Python", "Solana"], color: "from-emerald-400 to-cyan-400" }
  ];

  const generateQRUrl = (url) => `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}`;

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedQR(id);
    setTimeout(() => setCopiedQR(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-white font-mono overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050a]/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">LJ</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#socials" className="hover:text-cyan-400">Hub</a>
            <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-2xl">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-950/50">
            🛡️ <span className="uppercase tracking-widest text-sm">WEB3 SECURITY ENGINEER</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Lionel Jores Nyangon<br/>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">I build • I break • I secure</span>
          </h1>
          <p className="text-2xl text-gray-400">Solana & EVM Developer • Smart Contract Auditor</p>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-black/60 border-t border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Projets Phares</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-zinc-950/80 border border-cyan-500/20 hover:border-cyan-400 rounded-3xl p-8 transition-all hover:-translate-y-2">
                <div className={`h-1.5 w-12 bg-gradient-to-r ${p.color} rounded mb-6`} />
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-gray-400 mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 bg-cyan-900/50 text-cyan-400 rounded-full">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="socials" className="py-20 px-6 border-t border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-3">Central Hub</h2>
          <p className="text-center text-gray-400 mb-12">Scan • Click • Connect</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialAccounts.map((account, i) => {
              const Icon = account.icon;
              const qrUrl = generateQRUrl(account.url);
              return (
                <div key={i} className="group bg-zinc-950/80 border border-cyan-500/20 hover:border-cyan-400 rounded-3xl p-8 text-center transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-2xl">
                      <img src={qrUrl} alt={account.name} className="w-48 h-48 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="font-bold">{account.name}</p>
                      <p className="text-cyan-400 text-sm">{account.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={account.url} target="_blank" className="flex-1 py-4 bg-zinc-900 hover:bg-cyan-950 border border-cyan-500/30 rounded-2xl text-sm">Ouvrir</a>
                    <button onClick={() => copyToClipboard(account.url, i)} className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-cyan-500/30 rounded-2xl">
                      {copiedQR === i ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="text-center py-12 text-gray-500 border-t border-cyan-500/20">
        © 2026 Lionel Jores Nyangon • Web3 Security Engineer
      </footer>
    </div>
  );
}
