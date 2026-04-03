import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import contactData from '../../data/contact.json';

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        // Formspree returns error details in data.errors
        console.error('Formspree error:', data.errors);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
    }
  };

  const getIcon = (iconName) => {
    const icons = { Mail, Github, Linkedin };
    const Icon = icons[iconName];
    return Icon ? <Icon size={18} /> : null;
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-light mb-4">{contactData.title}</h2>
      <p className="mb-8 leading-relaxed text-[17px]" style={{ color: 'var(--text-secondary)' }}>
        {contactData.description}
      </p>

      <div className="space-y-4 mb-8">
        {contactData.socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center gap-3 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            target={link.platform !== 'email' ? '_blank' : undefined}
            rel={link.platform !== 'email' ? 'noopener noreferrer' : undefined}
          >
            {getIcon(link.icon)}
            <span>{link.display}</span>
          </a>
        ))}
      </div>

      <div
        className="p-6 rounded"
        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
      >
        <h3 className="font-medium mb-4 text-[15px]">{contactData.contactForm.title}</h3>

        {status === 'success' && (
          <div
            className="mb-4 p-4 rounded text-sm"
            style={{ backgroundColor: '#f0fdf4', color: '#166534', border: '1px solid #bbf7d0' }}
          >
            Message sent successfully — I'll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div
            className="mb-4 p-4 rounded text-sm"
            style={{ backgroundColor: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca' }}
          >
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        <div className="space-y-4">
          {contactData.contactForm.fields.map((field, index) => (
            <div key={index}>
              <label
                className="block text-xs font-medium mb-1.5 uppercase tracking-wide"
                style={{ color: 'var(--text-secondary)' }}
              >
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  rows={field.rows}
                  required={field.required}
                  value={formState[field.name] || ''}
                  onChange={handleChange}
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
                  value={formState[field.name] || ''}
                  onChange={handleChange}
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
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="px-6 py-2.5 text-sm transition-colors rounded"
            style={{
              backgroundColor: status === 'loading' ? 'var(--text-secondary)' : 'var(--text-primary)',
              color: 'var(--bg)',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Sending...' : contactData.contactForm.submitButton}
          </button>
        </div>
      </div>
    </div>
  );
}