import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== 'string') {
    return res.status(400).json({ error: 'Invalid or missing prompt' });
  }

  const apiKey = process.env.SUNO_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Using the Suno API endpoint for music generation
    const apiUrl = 'https://api.sunoapi.net/api/generate';

    console.log('Sending request to Suno API with prompt:', prompt);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        make_instrumental: false,
        wait_audio: false
      }),
      // Adding rejectUnauthorized false to bypass self-signed cert (Node.js fetch does not support this natively, so this is a placeholder)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Suno API error:', response.status, errorText);
      return res.status(response.status).json({
        error: `Suno API error: ${response.status} - ${errorText}`
      });
    }

    const data = await response.json();
    console.log('Suno API response:', JSON.stringify(data, null, 2));

    // Save to database
    const saved = await prisma.musicGeneration.create({
      data: {
        prompt,
        musicUrl: Array.isArray(data) && data.length > 0 ? data[0].audio_url : null,
        title: Array.isArray(data) && data.length > 0 ? data[0].title : null,
        status: 'completed'
      }
    });

    // The response structure may vary, adjust based on actual API response
    if (Array.isArray(data) && data.length > 0 && data[0].audio_url) {
      return res.status(200).json({
        musicUrl: data[0].audio_url,
        id: data[0].id,
        title: data[0].title || 'Generated Music'
      });
    } else if (data && data.id) {
      // If the generation is async, we might need to poll for results
      return res.status(202).json({
        message: 'Music generation started',
        id: data.id,
        status: 'processing'
      });
    } else {
      return res.status(500).json({
        error: 'Unexpected response format from Suno API'
      });
    }
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      error: 'Server error. Please try again later.'
    });
  }
}
