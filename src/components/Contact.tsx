import { useState } from 'react';
import { Mail, Check, Copy, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Catalogue Website',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'aihsannew@gmail.com';

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a short message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="down">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </div>

              <div className="font-signature text-3xl text-cyan-300 mb-2 select-none">
                Start a project
              </div>

              <h2 className="font-unbounded text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                Have an idea? <br />
                <span className="font-editorial italic font-normal text-cyan-400">
                  Let’s build it.
                </span>
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-8 font-outfit">
                Ready to elevate your business with an ultra-fast digital product catalogue or modern e-commerce website? Send a message and let&apos;s discuss.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl glass-panel border border-white/[0.1] mb-6 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400">Direct Email</div>
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-syne font-semibold text-white hover:text-cyan-400 text-base sm:text-lg transition-colors"
                  >
                    {directEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-white transition-colors border border-white/10"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                >
                  Start a Project
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 bg-white/[0.06] hover:bg-white/[0.12] text-neutral-300 hover:text-white rounded-xl border border-white/10 text-xs font-semibold transition-all"
                >
                  View My Work
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.1] backdrop-blur-xl shadow-2xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-unbounded text-xl font-bold text-white">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-sm mx-auto font-outfit">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. AIHSAN will get back to you at <span className="text-cyan-300">{formData.email}</span> within 12 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', projectType: 'Catalogue Website', message: '' });
                      }}
                      className="px-5 py-2 bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium rounded-xl transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                        />
                        {errors.name && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Your email address"
                          className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                        />
                        {errors.email && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Catalogue Website">Product Catalogue Website</option>
                        <option value="E-Commerce Store">E-Commerce Store</option>
                        <option value="Fashion Lookbook">Fashion / Luxury Lookbook</option>
                        <option value="Custom Web App">Custom Website / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a bit about what you want to build..."
                        className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                      />
                      {errors.message && <p className="text-[11px] text-red-400 mt-1 font-mono">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
