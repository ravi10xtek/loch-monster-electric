'use client'

import { useState } from 'react'

export default function HeroForm() {
  // stage: 'step1' (name/phone/email)  → 'step2' (message)
  // status: 'idle' | 'loading' | 'success' | 'error'
  const [stage, setStage] = useState('step1')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '' })

  function update(name) {
    return (e) => setFields((f) => ({ ...f, [name]: e.target.value }))
  }

  function isValidEmail(v) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
  }

  function handleNext(e) {
    e.preventDefault()
    setErrorMsg('')
    const name = fields.name.trim()
    const phone = fields.phone.trim()
    const email = fields.email.trim()
    if (!name || !phone || !email) {
      setErrorMsg('Please fill in your name, phone, and email.')
      return
    }
    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.')
      return
    }
    setStage('step2')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.trim(),
          phone: fields.phone.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      })
      const json = await res.json()
      if (json.ok) {
        setStatus('success')
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
      <div style={{ padding: '2rem', background: '#1a2a1a', border: '1px solid #2a5a2a', color: '#7ecb7e', borderRadius: '4px', lineHeight: 1.6 }}>
        <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Message received!</strong>
        We&rsquo;ll be in touch soon. If it&rsquo;s urgent, call us at{' '}
        <a href="tel:7632921191" style={{ color: '#f97316' }}>763-292-1191</a>.
      </div>
    )
  }

  const isStep2 = stage === 'step2'
  const isLoading = status === 'loading'

  return (
    <form
      className="hero-form"
      onSubmit={isStep2 ? handleSubmit : handleNext}
      noValidate
    >
      <div className="form-row-2">
        <input
          name="name" type="text" placeholder="First &amp; Last name *"
          value={fields.name} onChange={update('name')}
          required disabled={isLoading}
        />
        <input
          name="phone" type="tel" placeholder="Phone number *"
          value={fields.phone} onChange={update('phone')}
          required disabled={isLoading}
        />
      </div>
      <input
        name="email" type="email" placeholder="Email *"
        value={fields.email} onChange={update('email')}
        required disabled={isLoading}
      />
      {isStep2 && (
        <textarea
          name="message" placeholder="Anything we should know? (optional)"
          rows={4}
          value={fields.message} onChange={update('message')}
          disabled={isLoading}
        />
      )}
      {errorMsg && (
        <p style={{ color: '#f97316', fontSize: '0.875rem', margin: '-0.5rem 0 0' }}>{errorMsg}</p>
      )}
      <button type="submit" className="btn-orange-full" disabled={isLoading}>
        {isLoading ? 'SENDING…' : isStep2 ? 'SUBMIT' : 'NEXT'}
      </button>
    </form>
  )
}
