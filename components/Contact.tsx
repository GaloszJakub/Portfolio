import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact: ${formState.projectType}`;
    const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0AProject: ${formState.projectType}%0D%0A%0D%0A`;
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 md:px-12 flex flex-col justify-between max-w-7xl mx-auto relative">

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-mono text-rose mb-8 uppercase tracking-widest">{t.contact.section}</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold mb-8">{t.contact.title} <br />{t.contact.titleLine2}</h3>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-xl">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail className="w-5 h-5 text-rose" />
              </div>
              <a href={`mailto:${t.contact.email}`} className="hover:text-rose transition-colors">{t.contact.email}</a>
            </div>
            <div className="flex items-center gap-4 text-xl">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin className="w-5 h-5 text-rose" />
              </div>
              <span>{t.contact.location}</span>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="text-2xl md:text-3xl font-display font-medium leading-relaxed flex flex-col md:block gap-6 md:gap-0">
            <span className="hidden md:inline text-white/60">{t.contact.formIntro} </span>
            <Input
              placeholder={t.contact.namePlaceholder}
              value={formState.name}
              onChange={v => handleChange('name', v)}
              ariaLabel={t.contact.namePlaceholder}
            />
            <span className="hidden md:inline text-white/60">{t.contact.formLooking} </span>
            <Input
              placeholder={t.contact.projectPlaceholder}
              value={formState.projectType}
              onChange={v => handleChange('projectType', v)}
              ariaLabel={t.contact.projectPlaceholder}
            />
            <span className="hidden md:inline text-white/60">{t.contact.formReach} </span>
            <Input
              placeholder={t.contact.emailPlaceholder}
              type="email"
              value={formState.email}
              onChange={v => handleChange('email', v)}
              ariaLabel={t.contact.emailPlaceholder}
            />
            <span className="hidden md:inline text-white/60"> {t.contact.formEnd}</span>

            <div className="mt-12">
              <button
                type="submit"
                className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-rose hover:text-white transition-all duration-300 text-lg font-bold"
              >
                {t.contact.send}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  ariaLabel: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, type = "text", ariaLabel }) => (
  <span className="relative block md:inline-block mx-0 md:mx-1 w-full md:w-auto">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="bg-transparent border-b-2 border-white/20 focus:border-rose outline-none text-rose placeholder:text-white/40 w-full min-w-[200px] md:min-w-[250px] transition-colors py-1"
    />
  </span>
);

const Footer = () => {
  const { t } = useLanguage();
  return (
    <div className="mt-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      <div>
        <h4 className="font-display font-bold text-2xl mb-2">Kuba.</h4>
        <p className="text-white/40 text-sm">{t.contact.footer}</p>
      </div>

      <div className="flex gap-8">
        {['LinkedIn', 'GitHub'].map(social => (
          <a
            key={social}
            href="#"
            aria-label={`${social} Profile`}
            className="text-sm font-mono hover:text-rose transition-colors uppercase tracking-wider"
          >
            {social}
          </a>
        ))}
      </div>
    </div>
  );
};