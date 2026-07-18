const KLAVIYO_PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY
const KLAVIYO_LIST_ID = import.meta.env.VITE_KLAVIYO_LIST_ID

export const isKlaviyoConfigured = Boolean(KLAVIYO_PUBLIC_KEY && KLAVIYO_LIST_ID)

// Submits a lead to the Grove Klaviyo list. Silently no-ops (but resolves
// truthy) when Klaviyo isn't configured yet, so forms remain usable in dev.
export async function submitToKlaviyo(formData) {
  if (!isKlaviyoConfigured) {
    console.warn('[klaviyo] VITE_KLAVIYO_PUBLIC_KEY / VITE_KLAVIYO_LIST_ID not set — form submission skipped.', formData)
    return true
  }

  const response = await fetch(
    `https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_PUBLIC_KEY}`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', revision: '2023-12-15' },
      body: JSON.stringify({
        data: {
          type: 'subscription',
          attributes: {
            list_id: KLAVIYO_LIST_ID,
            email: formData.email,
            properties: {
              first_name: formData.firstName,
              last_name: formData.lastName,
              phone: formData.phone,
              membership_interest: formData.membershipInterest,
              training_background: formData.trainingBackground,
              message: formData.message,
              subject: formData.subject,
              source: formData.source || 'Grove Website',
            },
          },
        },
      }),
    },
  )
  return response.ok
}
