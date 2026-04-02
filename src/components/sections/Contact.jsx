import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import contactData from '../../data/contact.json';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Add your form handling logic here)');
  };

  const getIcon = (iconName) => {
    const icons = { Mail, Github, Linkedin };
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-4">{contactData.title}</h2>
      <p className="mb-8 leading-relaxed text-[17px]" style={{color: 'var(--text-secondary)'}}>
        {contactData.description}
      </p>
      <div className="space-y-4 mb-8">
        {contactData.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center gap-3 transition-colors"
            style={{color: 'var(--text-primary)'}}
            target={link.platform !== 'email' ? '_blank' : undefined}
            rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
          >
            {getIcon(link.icon)}
            <span>{link.display}</span>
          </a>
        ))}
      </div>
      <div className="p-6 rounded" style={{backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)'}}>
        <h3 className="font-medium mb-4 text-[15px]">{contactData.contactForm.title}</h3>
        <div className="space-y-4">
          {contactData.contactForm.fields.map((field, index) => (
            <div key={index}>
              <label className="block text-xs font-medium mb-1.5 uppercase tracking-wide" style={{color: 'var(--text-secondary)'}}>
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  rows={field.rows}
                  required={field.required}
                  className="w-full px-3 py-2 focus:outline-none transition-colors resize-none text-sm rounded"
                  style={{
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text-primary)'
                  }}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="w-full px-3 py-2 focus:outline-none transition-colors text-sm rounded"
                  style={{
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg)',
                    color: 'var(--text-primary)'
                  }}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-6 py-2.5 text-sm transition-colors rounded"
            style={{backgroundColor: 'var(--text-primary)', color: 'var(--bg)'}}
          >
            {contactData.contactForm.submitButton}
          </button>
        </div>
      </div>
    </div>
  );
}