'use client'

import { useState } from 'react'

export default function ServiceAreaHeroForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const name = form.elements['name'].value.trim()
    const phone = form.elements['phone'].value.trim()
    const email = form.elements['email'].value.trim()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email }),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
    } catch {
      setErrorMsg('Unable to send. Please call us at 763-292-1191.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="hero-form-success">
        <p className="hero-form-success-heading">Got it — we&apos;ll be in touch shortly.</p>
        <p className="hero-form-success-body">
          Prefer to talk now? Call us at{' '}
          <a href="tel:7632921191">763-292-1191</a>.
        </p>
      </div>
    )
  }

  return (
    <form className="hero-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        <input
          type="text"
          name="name"
          placeholder="First &amp; Last name *"
          required
          disabled={status === 'loading'}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number *"
          required
          disabled={status === 'loading'}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
        disabled={status === 'loading'}
      />
      {errorMsg && <p className="hero-form-error">{errorMsg}</p>}
      <button type="submit" className="btn-orange-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'SENDING…' : 'NEXT'}
      </button>
    </form>
  )
}
