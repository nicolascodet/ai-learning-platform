import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

// Initialize with certificate verification disabled for development
const anthropic = new Anthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || '',
  httpAgent: new (require('https').Agent)({
    rejectUnauthorized: false
  })
})

export async function POST(request: Request) {
  try {
    const { code, prompt } = await request.json()

    const response = await anthropic.messages.create({
      model: "claude-3-opus-20240229",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `I'm learning Python and working on this project: ${prompt}
        
Here's my code:
${code}

Please:
1. Run the code and show the output
2. Provide feedback on my implementation
3. Suggest improvements
4. Share a tip related to the concepts used`
      }]
    })

    const output = response.content[0].type === 'text' ? response.content[0].text : 'No output available'
    
    return NextResponse.json({ output })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process code' },
      { status: 500 }
    )
  }
} 