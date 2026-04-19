const LEAD_API_URL =
  'https://script.google.com/macros/s/AKfycbxJRgt75-MJ9LcTOIcqK-AzdzZyXS-yIdyc5DA79rn9cydI3AuvJ2GA3mVrKtXG4aYU/exec'

export async function sendLead(formData) {
  const response = await fetch(LEAD_API_URL, {
    method: 'POST',
    body: new URLSearchParams({
      ...formData,
      source: 'OdilWeb Landing',
      createdAt: new Date().toISOString(),
    }),
  })

  const data = await response.json()

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Не удалось отправить заявку.')
  }

  return data
}
