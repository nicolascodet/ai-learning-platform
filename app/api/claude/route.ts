import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY || ''
})

export async function POST(request: Request) {
  try {
    const { code, prompt } = await request.json()

    // Construct the message to Claude
    const systemPrompt = `You are an expert Python programming tutor. Your task is to:
1. Execute the student's Python code safely
2. Provide the output of their code
3. Give constructive feedback
4. Suggest improvements
5. Help debug any errors
6. Provide hints if they're stuck

Current lesson context: ${prompt}

Please analyze the following Python code:`

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      temperature: 0.7,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: code
        }
      ]
    })

    // Extract the assistant's response
    const feedback = response.content[0].text

    // Parse the feedback to separate code output from Claude's comments
    const outputMatch = feedback.match(/Output:(.*?)Feedback:/s)
    const output = outputMatch ? outputMatch[1].trim() : ''
    
    return NextResponse.json({
      output,
      feedback: feedback.replace(output, '').trim()
    })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to process code' },
      { status: 500 }
    )
  }
} 