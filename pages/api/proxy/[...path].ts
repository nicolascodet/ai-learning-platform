import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Remove host from headers to avoid conflicts
    const headers = new Headers(req.headers as HeadersInit)
    headers.delete('host')

    const response = await fetch(`${process.env.API_URL}/${req.query.path}`, {
      method: req.method,
      headers,
      body: req.body ? JSON.stringify(req.body) : undefined,
    })

    // Forward the content type
    const contentType = response.headers.get('content-type')
    if (contentType) {
      res.setHeader('content-type', contentType)
    }

    if (contentType?.includes('application/json')) {
      const data = await response.json()
      return res.status(response.status).json(data)
    } else {
      const text = await response.text()
      return res.status(response.status).send(text)
    }
  } catch (error) {
    console.error('Proxy error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
} 