'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Reveal } from '../../components/Reveal';
import Marquee from '../../components/Marquee';

const interests = ['72-Hour Free Funnel Audit','Performance Marketing','Influence & Content','Branding & Identity','CRM & Tech Stack','Full-Service Partnership'];
const tags = ['Project Launches','Brand Positioning','Lead Generation','Influence Campaigns','CRM & Automation','Funnel Audits','Performance Media','Real Estate Only'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', interest: interests[0], project: '', spend: '', cpl: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.company) {
      setStatus({ state: 'error', msg: 'Please fill required fields.' }); return;
    }
    setStatus({ state: 'loading', msg: '' });
    try {
      await new Promise(r => setTimeout(r, 700));
      setStatus({ state: 'success', msg: 'Thanks. We\'ll respond within 2 business hours.' });
      setForm({ name: '', phone: '', email: '', company: '', interest: interests[0], project: '', spend: '', cpl: '', message: '' });
    } catch {
      setStatus({ state: 'error', msg: 'Something went wrong. Please WhatsApp us directly.' });
    }
  };
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <div data-testid="contact-page" className="bg-ink">
      <section className="pt-32 md:pt-40 pb-12 border-b border-line">
        <Marquee items={tags} outline speed="slow" />
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Get in Touch</p>
              <h1 className="font-display text-5xl md:text-7xl tracking-tightest leading-[0.96]">
                Ready to Stop <em className="text-accent not-italic">Leaking Budget?</em>
              </h1>
              <p className="mt-6 text-bone/80 max-w-2xl">Share your project — we'll show you exactly where the funnel is breaking in 72 hours. No agency jargon. Just the math.</p>
            </Reveal>
            <form onSubmit={onSubmit} data-testid="contact-form" className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { k: 'name', l: 'Full Name *', t: 'text', span: 1 },
                { k: 'phone', l: 'Phone *', t: 'tel', span: 1 },
                { k: 'email', l: 'Email *', t: 'email', span: 1 },
                { k: 'company', l: 'Developer / Company *', t: 'text', span: 1 },
              ].map(f => (
                <label key={f.k} className={`block ${f.span === 2 ? 'md:col-span-2' : ''}`}>
                  <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">{f.l}</span>
                  <input data-testid={`input-${f.k}`} required type={f.t} value={form[f.k]} onChange={upd(f.k)} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent transition-colors" />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">What are you looking for?</span>
                <select data-testid="input-interest" value={form.interest} onChange={upd('interest')} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent">
                  {interests.map(o => <option key={o} className="bg-ink">{o}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">Project Name</span>
                <input data-testid="input-project" type="text" value={form.project} onChange={upd('project')} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent" />
              </label>
              <label className="block">
                <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">Monthly Ad Spend (₹)</span>
                <input data-testid="input-spend" type="text" value={form.spend} onChange={upd('spend')} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent" />
              </label>
              <label className="block md:col-span-2">
                <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">Current CPL / CPB</span>
                <input data-testid="input-cpl" type="text" value={form.cpl} onChange={upd('cpl')} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent" />
              </label>
              <label className="block md:col-span-2">
                <span className="font-tech text-[11px] uppercase tracking-wider2 text-muted">Tell us about your challenge</span>
                <textarea data-testid="input-message" rows="4" value={form.message} onChange={upd('message')} className="block w-full bg-transparent border-b border-line py-3 text-bone focus:outline-none focus:border-accent resize-none" />
              </label>
              <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 pt-4">
                <button data-testid="submit-button" type="submit" disabled={status.state === 'loading'} className="btn-primary disabled:opacity-50">
                  {status.state === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
                <p className="text-xs text-muted">We respond within 2 business hours.</p>
              </div>
              {status.state === 'success' && <p data-testid="form-success" className="md:col-span-2 text-accent font-tech text-sm uppercase tracking-wider2">{status.msg}</p>}
              {status.state === 'error' && <p data-testid="form-error" className="md:col-span-2 text-accent font-tech text-sm uppercase tracking-wider2">{status.msg}</p>}
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-8">
            <div className="border border-line p-8 bg-surface/40">
              <p className="eyebrow mb-4">Email</p>
              <a href="mailto:hello@propertyedge.com" className="font-display text-2xl link-underline">hello@propertyedge.com</a>
              <p className="eyebrow mt-8 mb-4">WhatsApp / Phone</p>
              <a href="https://wa.me/919876543210" className="font-display text-2xl link-underline">+91 98765 43210</a>
              <p className="eyebrow mt-8 mb-4">Office</p>
              <p className="text-bone">Mumbai, India — available globally</p>
              <p className="eyebrow mt-8 mb-4">Response Guarantee</p>
              <p className="text-bone">Mon–Fri 9am–7pm IST · Sat by appointment</p>
            </div>
            <div className="border border-line p-8">
              <p className="font-display text-3xl leading-snug">No obligation. No lock-in. <em className="text-accent not-italic">No agency fluff.</em></p>
              <p className="mt-4 text-bone/80">We review every enquiry personally and respond within 2 business hours with a specific, actionable observation about your funnel — not a generic proposal deck. If we can't help you, we'll tell you exactly who can.</p>
              <a data-testid="schedule-call-cta" href="https://calendly.com/propertyedge/72hr-audit" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">Schedule a Strategy Call →</a>
              <div className="mt-6 flex gap-5 font-tech uppercase tracking-wider2 text-xs text-muted">
                <a className="link-underline" href="https://linkedin.com/company/propertyedge">LinkedIn</a>
                <a className="link-underline" href="https://instagram.com/propertyedge">Instagram</a>
                <a className="link-underline" href="https://wa.me/919876543210">WhatsApp</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line py-20 bg-surface/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-6">What We Build Together</p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tightest max-w-3xl leading-[1]">From launch strategies to live pipelines — every brief starts with a 72-hour funnel audit.</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Project Launch', img: 'https://backend.realatte.com/uploads/Dosti_Sales_Video_1_1_ce02681275.png', t: 'Bring us your project brief and we will map the highest-impact growth path' },
              { tag: 'Campaign Energy', img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900', t: 'A contact page that feels like the start of a launch, not a dead end form' },
              { tag: 'Strategy Call', img: 'https://backend.realatte.com/uploads/i_stay_thum_b9eadfd2a4.png', t: 'Context-rich visuals that make the enquiry experience feel more premium' },
            ].map((c,i) => (
              <article key={i} className="border border-line bg-ink card-hover">
                <div className="img-zoom h-56 overflow-hidden"><img src={c.img} alt="" className="w-full h-full object-cover grayscale" /></div>
                <div className="p-6">
                  <p className="font-tech text-xs uppercase tracking-wider2 text-accent">{c.tag}</p>
                  <h3 className="font-display text-2xl mt-3 leading-[1.1]">{c.t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
