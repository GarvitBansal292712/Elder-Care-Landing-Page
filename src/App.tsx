import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, Phone, ShieldCheck, Bell, ChevronDown, CheckCircle2, ArrowRight,
  MapPin, Clock, User, Users, Activity, AlertCircle, HeartPulse, 
  Lock, Server, WifiOff, Smartphone, FileText, HelpCircle, Check, X,
  BrainCircuit, LineChart, Shield
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory brutal-border-b">
    <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4 brutal-border-r h-full pr-8">
        <div className="w-6 h-6 bg-teal-deep flex items-center justify-center">
          <Mic className="text-ivory w-4 h-4" />
        </div>
        <span className="font-serif text-lg font-bold tracking-tight uppercase">ElderCare AI</span>
      </div>
      <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal/60">
        <a href="#problem" className="hover:text-teal-deep transition-colors">Problem</a>
        <a href="#solution" className="hover:text-teal-deep transition-colors">Solution</a>
        <a href="#features" className="hover:text-teal-deep transition-colors">Features</a>
        <a href="#security" className="hover:text-teal-deep transition-colors">Security</a>
        <a href="#pricing" className="hover:text-teal-deep transition-colors">Pricing</a>
        <a href="#faq" className="hover:text-teal-deep transition-colors">FAQ</a>
      </div>
      <div className="h-full flex items-center pl-8 brutal-border-l">
        <a href="#waitlist" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-copper transition-colors">
          Get Access
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-16 min-h-screen flex flex-col">
    <div className="flex-1 flex flex-col lg:flex-row">
      {/* Left Rail */}
      <div className="hidden lg:flex w-16 brutal-border-r flex-col items-center justify-center py-12 bg-ivory">
        <span className="vertical-text text-[10px] font-bold uppercase tracking-[0.4em] text-charcoal/30 rotate-180">
          ENTERPRISE GRADE CARE
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center brutal-border-r bg-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-deep/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-copper"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-copper">
              NOW IN PRIVATE BETA
            </span>
          </div>
          
          <h1 className="text-[12vw] lg:text-[6.5vw] leading-[0.85] mb-8">
            THE FIRST AI CAREGIVER THAT <br />
            <span className="editorial-heading text-teal-deep">ACTUALLY LISTENS.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-charcoal/70 mb-12 max-w-2xl leading-relaxed font-light">
            We replaced confusing touchscreens and intrusive cameras with a secure, voice-first AI. It detects emergencies, monitors health trends, and keeps families connected—all through natural conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#waitlist" className="btn-brutal text-lg flex items-center gap-3">
              REQUEST DEMO <ArrowRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full brutal-border bg-ivory overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Trusted by 500+</span>
                <span className="text-[10px] uppercase tracking-widest text-charcoal/50">Families & Clinics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Visual / Dashboard Preview */}
      <div className="lg:w-[45%] bg-charcoal relative overflow-hidden flex flex-col">
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="brutal-border border-white/20 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-8 pb-8 brutal-border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-deep flex items-center justify-center">
                  <Activity className="text-ivory w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-ivory font-serif text-2xl">Eleanor's Hub</h3>
                  <p className="text-copper font-mono text-xs uppercase tracking-widest">Live Telemetry</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-ivory/50 text-xs uppercase tracking-widest block mb-1">Status</span>
                <span className="text-teal-400 font-mono text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" /> SECURE
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/20 p-4 brutal-border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-ivory/60 text-xs uppercase tracking-widest">Latest Interaction</span>
                  <span className="text-ivory/40 font-mono text-[10px]">2 MINS AGO</span>
                </div>
                <p className="text-ivory font-light italic">"I'm feeling a bit dizzy today, but I took my medication."</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 brutal-border border-white/5">
                  <span className="text-ivory/60 text-xs uppercase tracking-widest block mb-2">Vocal Biomarkers</span>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-ivory font-serif">Normal</span>
                    <HeartPulse className="w-4 h-4 text-teal-400 mb-1" />
                  </div>
                </div>
                <div className="bg-black/20 p-4 brutal-border border-white/5">
                  <span className="text-ivory/60 text-xs uppercase tracking-widest block mb-2">Action Taken</span>
                  <span className="text-copper text-sm font-medium">Notified Daughter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>
    </div>

    {/* Logos Strip */}
    <div className="h-24 bg-teal-deep brutal-border-t border-charcoal flex items-center overflow-hidden">
      <div className="flex gap-16 px-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap items-center opacity-70">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-ivory font-serif text-2xl italic">Stanford Medicine</span>
            <span className="text-ivory font-mono text-sm tracking-widest">•</span>
            <span className="text-ivory font-serif text-2xl italic">Mayo Clinic Alumni</span>
            <span className="text-ivory font-mono text-sm tracking-widest">•</span>
            <span className="text-ivory font-serif text-2xl italic">AARP Innovation Labs</span>
            <span className="text-ivory font-mono text-sm tracking-widest">•</span>
            <span className="text-ivory font-serif text-2xl italic">HIPAA Compliant</span>
            <span className="text-ivory font-mono text-sm tracking-widest">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="problem" className="py-32 bg-ivory brutal-border-t relative">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-copper mb-8 block">
            [ THE BROKEN PARADIGM ]
          </span>
          <h2 className="text-5xl md:text-7xl mb-8 leading-[0.9]">
            TECHNOLOGY LEFT THEM <span className="editorial-heading text-teal-deep">BEHIND.</span>
          </h2>
          <p className="text-xl text-charcoal/70 leading-relaxed mb-12">
            We force 85-year-olds to navigate complex apps, remember to charge wearables, and live under the constant surveillance of cameras. It strips them of their dignity and creates false alarms for families.
          </p>
          <div className="p-8 bg-charcoal text-ivory brutal-shadow">
            <h4 className="font-serif text-2xl italic mb-4">"I just wanted to call my son, but I couldn't find the app."</h4>
            <p className="text-sm text-ivory/60 font-mono uppercase tracking-widest">— Margaret, 82 (Former Teacher)</p>
          </div>
        </div>
        
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
          {[
            {
              icon: <Smartphone className="w-8 h-8" />,
              title: "The Smartphone Tax",
              desc: "Apps require precise motor skills, perfect vision, and cognitive load. They fail when needed most during a panic."
            },
            {
              icon: <WifiOff className="w-8 h-8" />,
              title: "The Wearable Flaw",
              desc: "Pendants and watches sit on nightstands uncharged. You can't press a button if you forgot to wear it."
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "The Privacy Invasion",
              desc: "Cameras strip away dignity. Seniors cover them up or unplug them, defeating the purpose entirely."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "The Caregiver Burnout",
              desc: "Families are overwhelmed with raw data and false alarms, leading to alert fatigue and constant anxiety."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 brutal-border bg-white hover:bg-teal-deep hover:text-ivory transition-colors group">
              <div className="mb-6 text-copper group-hover:text-ivory transition-colors">{item.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-charcoal/60 group-hover:text-ivory/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="solution" className="py-32 bg-charcoal text-ivory brutal-border-t">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-copper mb-8 block">
          [ THE ELEGANT SOLUTION ]
        </span>
        <h2 className="text-5xl md:text-7xl mb-8 leading-[0.9]">
          COMPLEX AI.<br />
          <span className="editorial-heading">INVISIBLE INTERFACE.</span>
        </h2>
        <p className="text-xl text-ivory/60 leading-relaxed">
          We engineered an enterprise-grade health monitoring system that operates entirely through natural conversation. No screens, no buttons, no charging.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10" />
        
        {[
          {
            step: "01",
            title: "Plug & Play",
            desc: "Plug the Smart Hub into any wall outlet. It connects via built-in cellular (no Wi-Fi needed) and is ready instantly.",
            icon: <Server className="w-6 h-6" />
          },
          {
            step: "02",
            title: "AI Baselines",
            desc: "Over 7 days, the AI learns their voice patterns, daily routines, and baseline cognitive markers through casual daily check-ins.",
            icon: <BrainCircuit className="w-6 h-6" />
          },
          {
            step: "03",
            title: "Proactive Care",
            desc: "It detects anomalies—like slurred speech, missed routines, or calls for help—and intelligently escalates to family or 911.",
            icon: <ShieldCheck className="w-6 h-6" />
          }
        ].map((item, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-charcoal brutal-border border-white/20 flex items-center justify-center mb-8 relative group">
              <div className="absolute inset-0 rounded-full bg-teal-deep/20 scale-0 group-hover:scale-100 transition-transform duration-500" />
              <span className="text-copper">{item.icon}</span>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-copper text-ivory text-xs font-bold flex items-center justify-center rounded-full">
                {item.step}
              </div>
            </div>
            <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
            <p className="text-ivory/60 leading-relaxed max-w-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesBento = () => (
  <section id="features" className="py-32 bg-ivory brutal-border-t">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl leading-[0.9]">
          ENTERPRISE CAPABILITIES.<br />
          <span className="editorial-heading text-teal-deep">CONSUMER SIMPLICITY.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        {/* Large Feature 1 */}
        <div className="md:col-span-2 lg:col-span-2 row-span-2 brutal-border bg-white p-10 flex flex-col justify-between group hover:bg-charcoal hover:text-ivory transition-colors duration-500">
          <div>
            <Mic className="w-10 h-10 text-copper mb-8" />
            <h3 className="text-4xl font-serif mb-4">Ambient Voice Intelligence</h3>
            <p className="text-lg opacity-70 leading-relaxed max-w-md">
              Powered by advanced LLMs, the system understands context, accents, and cognitive decline. It can distinguish between a TV playing in the background and a genuine cry for help.
            </p>
          </div>
          <div className="p-6 bg-gray-50 group-hover:bg-white/5 brutal-border border-charcoal/10 group-hover:border-white/10 mt-8">
            <p className="font-mono text-sm">
              <span className="text-copper">User:</span> "I can't get up."<br/>
              <span className="text-teal-deep group-hover:text-teal-400">AI:</span> "I'm calling your daughter Sarah right now. Stay calm, I'm right here with you."
            </p>
          </div>
        </div>

        {/* Small Feature 1 */}
        <div className="md:col-span-1 lg:col-span-2 brutal-border bg-teal-deep text-ivory p-10 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <LineChart className="w-8 h-8 text-copper" />
            <span className="text-[10px] uppercase tracking-widest opacity-50">Analytics</span>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-3">Vocal Biomarker Tracking</h3>
            <p className="opacity-80 text-sm leading-relaxed">
              Analyzes speech cadence, vocabulary, and tone daily to detect early signs of cognitive decline or depression.
            </p>
          </div>
        </div>

        {/* Small Feature 2 */}
        <div className="md:col-span-1 lg:col-span-1 brutal-border bg-white p-10 flex flex-col justify-between">
          <Bell className="w-8 h-8 text-charcoal" />
          <div>
            <h3 className="text-xl font-serif mb-3">Smart Escalation</h3>
            <p className="text-charcoal/60 text-sm leading-relaxed">
              Routes non-emergencies to family, and critical events to 24/7 dispatch.
            </p>
          </div>
        </div>

        {/* Small Feature 3 */}
        <div className="md:col-span-1 lg:col-span-1 brutal-border bg-copper text-ivory p-10 flex flex-col justify-between">
          <FileText className="w-8 h-8" />
          <div>
            <h3 className="text-xl font-serif mb-3">Medication Adherence</h3>
            <p className="opacity-90 text-sm leading-relaxed">
              Conversational reminders that actually verify if the pill was taken.
            </p>
          </div>
        </div>

        {/* Wide Feature */}
        <div className="md:col-span-3 lg:col-span-4 brutal-border bg-charcoal text-ivory p-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-copper mb-4 block">
              THE FAMILY DASHBOARD
            </span>
            <h3 className="text-4xl font-serif mb-4">Total Visibility from Anywhere.</h3>
            <p className="text-lg opacity-70 leading-relaxed max-w-2xl">
              Access real-time health scores, daily summaries, and historical trends through our secure mobile app. Stop wondering, start knowing.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <div className="w-full max-w-xs aspect-[9/16] brutal-border border-white/20 bg-black/50 p-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-black flex items-center px-4">
                <span className="text-[8px] font-mono text-white/50">SECURE CONNECTION</span>
              </div>
              <div className="mt-8 space-y-4">
                <div className="h-20 bg-white/10 brutal-border border-white/5 p-3">
                  <span className="text-[10px] uppercase text-copper block mb-1">Daily Score</span>
                  <span className="text-2xl font-serif">94/100</span>
                </div>
                <div className="h-12 bg-white/5 brutal-border border-white/5" />
                <div className="h-12 bg-white/5 brutal-border border-white/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section id="security" className="py-24 bg-teal-deep text-ivory brutal-border-t border-charcoal">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Lock className="w-16 h-16 text-copper mb-8" />
          <h2 className="text-5xl md:text-6xl mb-8 leading-[0.9]">
            MILITARY-GRADE SECURITY.<br />
            <span className="editorial-heading">HIPAA COMPLIANT.</span>
          </h2>
          <p className="text-xl opacity-80 leading-relaxed mb-8">
            We are dealing with the most sensitive data imaginable: the health and privacy of your loved ones inside their own home. We treat it with absolute paranoia.
          </p>
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex items-center gap-3"><Check className="text-copper w-5 h-5" /> End-to-End Encryption (AES-256)</li>
            <li className="flex items-center gap-3"><Check className="text-copper w-5 h-5" /> No Audio Recordings Stored Permanently</li>
            <li className="flex items-center gap-3"><Check className="text-copper w-5 h-5" /> SOC2 Type II Certified Infrastructure</li>
            <li className="flex items-center gap-3"><Check className="text-copper w-5 h-5" /> Strict Role-Based Access Control</li>
          </ul>
        </div>
        <div className="bg-charcoal p-12 brutal-shadow brutal-border border-charcoal">
          <h3 className="text-2xl font-serif mb-6">Our Privacy Promise</h3>
          <p className="opacity-70 leading-relaxed mb-8">
            Unlike smart speakers from big tech companies, ElderCare AI does not sell your data, does not serve ads, and does not use your private conversations to train public models. You are the customer, not the product.
          </p>
          <div className="pt-8 brutal-border-t border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-copper" />
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest text-xs">Data Sovereignty</p>
              <p className="text-xs opacity-50 font-mono">You own your data. Delete anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-32 bg-ivory brutal-border-t">
    <div className="max-w-[1440px] mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl mb-6 leading-[0.9]">
          TRANSPARENT <span className="editorial-heading text-teal-deep">PRICING.</span>
        </h2>
        <p className="text-xl text-charcoal/60">No hidden fees. Hardware included. Cancel anytime.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="brutal-border bg-white p-12 flex flex-col">
          <h3 className="text-3xl font-serif mb-2">Family Monitoring</h3>
          <p className="text-charcoal/60 mb-8 h-12">Perfect for independent seniors who just need a safety net.</p>
          <div className="mb-8">
            <span className="text-5xl font-bold tracking-tight">$49</span>
            <span className="text-charcoal/50">/month</span>
          </div>
          <ul className="space-y-4 mb-12 flex-1">
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-deep shrink-0" /> <span>Smart Hub Hardware Included</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-deep shrink-0" /> <span>24/7 Voice Monitoring</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-deep shrink-0" /> <span>Family App Access (Up to 3 users)</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-deep shrink-0" /> <span>Automated SMS Alerts</span></li>
            <li className="flex items-start gap-3 text-charcoal/40"><X className="w-5 h-5 shrink-0" /> <span>Professional 911 Dispatch</span></li>
          </ul>
          <a href="#waitlist" className="btn-brutal text-center w-full bg-white text-charcoal hover:bg-charcoal hover:text-ivory">
            SELECT PLAN
          </a>
        </div>

        {/* Premium Plan */}
        <div className="brutal-border bg-charcoal text-ivory p-12 flex flex-col relative brutal-shadow transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-copper text-ivory text-[10px] font-bold uppercase tracking-widest px-4 py-2">
            MOST POPULAR
          </div>
          <h3 className="text-3xl font-serif mb-2">24/7 Response</h3>
          <p className="text-ivory/60 mb-8 h-12">Complete peace of mind with human-in-the-loop emergency dispatch.</p>
          <div className="mb-8">
            <span className="text-5xl font-bold tracking-tight">$99</span>
            <span className="text-ivory/50">/month</span>
          </div>
          <ul className="space-y-4 mb-12 flex-1">
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-copper shrink-0" /> <span>Everything in Family Monitoring</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-copper shrink-0" /> <span>24/7 Professional Dispatch Center</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-copper shrink-0" /> <span>Unlimited Family App Users</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-copper shrink-0" /> <span>Vocal Biomarker Analytics</span></li>
            <li className="flex items-start gap-3"><Check className="w-5 h-5 text-copper shrink-0" /> <span>Priority Hardware Replacement</span></li>
          </ul>
          <a href="#waitlist" className="btn-brutal text-center w-full">
            SELECT PLAN
          </a>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const faqs = [
    {
      q: "Does it require Wi-Fi?",
      a: "No. The Smart Hub comes with a built-in cellular connection that works right out of the box. We don't rely on home Wi-Fi because it can be unreliable during power outages or router resets."
    },
    {
      q: "Is it always recording?",
      a: "The device listens for wake words and distress sounds (like a fall or a cry for help) locally on the device. Audio is only sent to our secure cloud for processing when an event is triggered, and it is never sold or used for advertising."
    },
    {
      q: "What if my parent refuses to use it?",
      a: "Unlike wearables they have to remember to put on, or apps they have to learn, ElderCare AI sits passively in the room. They don't have to 'use' it unless they want to talk to it or need help. It provides ambient safety."
    },
    {
      q: "Can multiple family members get alerts?",
      a: "Yes. You can configure the escalation path in the Family App. For example, it can text the daughter first, call the son if she doesn't answer, and escalate to 911 if neither responds."
    }
  ];

  return (
    <section id="faq" className="py-32 bg-ivory brutal-border-t">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 leading-[0.9]">
            FREQUENTLY ASKED <span className="editorial-heading text-teal-deep">QUESTIONS.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group brutal-border bg-white p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-serif text-2xl list-none">
                {faq.q}
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="w-6 h-6" />
                </span>
              </summary>
              <p className="text-charcoal/70 mt-4 leading-relaxed pr-8">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const WaitlistBlock = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'family' | 'senior' | 'clinic' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name && role) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="bg-teal-deep text-ivory brutal-border-t border-charcoal">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 lg:p-20 brutal-border-r border-charcoal">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-copper mb-8 block">
            [ LIMITED AVAILABILITY ]
          </span>
          <h2 className="text-6xl md:text-8xl mb-8 leading-[0.9]">SECURE YOUR<br /><span className="editorial-heading">ACCESS.</span></h2>
          <p className="text-xl text-ivory/70 leading-relaxed max-w-md mb-12">
            We are currently onboarding new families in batches to ensure the highest quality of service and support. Apply now to secure hardware for the next batch.
          </p>
          
          <div className="space-y-6 font-mono text-sm opacity-60">
            <p className="flex justify-between border-b border-white/10 pb-2">
              <span>Current Batch Status:</span> <span className="text-copper">FILLING FAST</span>
            </p>
            <p className="flex justify-between border-b border-white/10 pb-2">
              <span>Expected Ship Date:</span> <span>Next Month</span>
            </p>
            <p className="flex justify-between border-b border-white/10 pb-2">
              <span>Hardware Cost:</span> <span>$0 (Included in plan)</span>
            </p>
          </div>
        </div>
        
        <div className="flex-1 p-8 lg:p-20 flex flex-col justify-center bg-charcoal">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-12"
              >
                <div className="space-y-8">
                  <div className="group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-ivory/40 group-focus-within:text-copper transition-colors">01. Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent brutal-border-b border-white/10 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-ivory"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  <div className="group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-ivory/40 group-focus-within:text-copper transition-colors">02. Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent brutal-border-b border-white/10 py-4 text-2xl focus:outline-none focus:border-white transition-colors text-ivory"
                      placeholder="ENTER EMAIL"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-ivory/40">03. I am a...</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {[
                      { id: 'family', label: 'Family Member' },
                      { id: 'senior', label: 'Senior User' },
                      { id: 'clinic', label: 'Care Clinic' }
                    ].map((r) => (
                      <button 
                        key={r.id}
                        type="button"
                        onClick={() => setRole(r.id as any)}
                        className={cn(
                          "flex-1 brutal-border p-4 text-[10px] font-bold uppercase tracking-widest transition-all",
                          role === r.id ? "bg-copper text-ivory border-copper" : "bg-transparent text-ivory/40 border-white/20 hover:border-white"
                        )}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-brutal w-full text-lg py-6 bg-white text-charcoal hover:bg-copper hover:text-ivory brutal-shadow">
                  SUBMIT APPLICATION
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 brutal-border border-copper bg-copper/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-copper" />
                </div>
                <h3 className="text-4xl uppercase mb-4 font-serif">APPLICATION RECEIVED</h3>
                <p className="text-ivory/60 leading-relaxed">
                  Thank you, {name}. We have secured your place in the queue.<br />
                  We will contact you at {email} with next steps.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-charcoal text-ivory">
    <div className="max-w-[1440px] mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 bg-teal-deep flex items-center justify-center">
              <Mic className="text-ivory w-5 h-5" />
            </div>
            <span className="font-serif text-2xl font-bold uppercase tracking-tight">ElderCare AI</span>
          </div>
          <p className="text-ivory/40 max-w-sm leading-relaxed font-mono text-xs uppercase tracking-widest mb-8">
            RESTORING INDEPENDENCE. PROVIDING PEACE OF MIND. BUILT WITH CARE IN THE USA.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 brutal-border border-white/20 flex items-center justify-center hover:bg-copper hover:border-copper transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 brutal-border border-white/20 flex items-center justify-center hover:bg-copper hover:border-copper transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-ivory/50">Product</h4>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li><a href="#features" className="hover:text-copper transition-colors">Features</a></li>
            <li><a href="#solution" className="hover:text-copper transition-colors">How it Works</a></li>
            <li><a href="#security" className="hover:text-copper transition-colors">Security & Privacy</a></li>
            <li><a href="#pricing" className="hover:text-copper transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-ivory/50">Company</h4>
          <ul className="space-y-4 text-sm text-ivory/80">
            <li><a href="#" className="hover:text-copper transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-copper transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-copper transition-colors">Press</a></li>
            <li><a href="mailto:hello@eldercare.ai" className="hover:text-copper transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 brutal-border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-[10px] font-mono text-ivory/30 uppercase tracking-[0.5em]">MISSION CRITICAL SYSTEM</span>
        <div className="flex gap-8 text-[10px] font-mono text-ivory/30 uppercase tracking-widest">
          <a href="#" className="hover:text-ivory transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ivory transition-colors">Terms of Service</a>
          <span>© 2026 ELDERCARE AI</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-copper/30">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesBento />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <WaitlistBlock />
      <Footer />
    </div>
  );
}
