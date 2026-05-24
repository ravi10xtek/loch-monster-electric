'use client'

import { useState } from 'react'

export default function ContactPageForm({ submitLabel = 'SUBMIT' }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success-card" role="status">
        <div className="form-success-text">
          <strong>Message received!</strong>
          We&rsquo;ll be in touch soon. If it&rsquo;s urgent, call us at{' '}
          <a href="tel:7632921191">763-292-1191</a>.
        </div>
        <div className="form-success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5 13 9 17 19 7" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <form className="hero-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        <input name="name" type="text" placeholder="First &amp; Last name *" required disabled={status === 'loading'} />
        <input name="phone" type="tel" placeholder="Phone number *" required disabled={status === 'loading'} />
      </div>
      <input name="email" type="email" placeholder="Email *" required disabled={status === 'loading'} />
      <textarea name="message" placeholder="Write your message.." rows="5" disabled={status === 'loading'} />
      {status === 'error' && (
        <p style={{ color: '#f97316', fontSize: '0.875rem', margin: '-0.5rem 0 0' }}>{errorMsg}</p>
      )}
      <button type="submit" className="btn-orange-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'SENDING…' : submitLabel}
      </button>
    </form>
  )
}
