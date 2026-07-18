import { useState } from 'react'
import { submitToKlaviyo } from '../utils/klaviyo.js'

export function useKlaviyo() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const submit = async (formData) => {
    setStatus('submitting')
    try {
      const ok = await submitToKlaviyo(formData)
      setStatus(ok ? 'success' : 'error')
      return ok
    } catch (err) {
      setStatus('error')
      return false
    }
  }

  const reset = () => setStatus('idle')

  return { status, submit, reset }
}
