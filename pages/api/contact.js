// Simple contact API endpoint
// In production, integrate with SendGrid, Mailgun, or similar service

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, company, projectType, message } = req.body

    // Validation
    if (!name || !email || !company || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    try {
      // TODO: Implement actual email sending
      // For now, just log to console (in production, use SendGrid/Mailgun API)
      console.log('Contact form received:', {
        name,
        email,
        phone,
        company,
        projectType,
        message,
        timestamp: new Date().toISOString()
      })

      // Example: Configure SendGrid or similar service here
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // await sgMail.send({
      //   to: 'hello@propertyedge.com',
      //   from: 'noreply@propertyedge.com',
      //   subject: `New Contact: ${name} from ${company}`,
      //   html: `...`
      // });

      return res.status(200).json({ success: true, message: 'Message received' })
    } catch (error) {
      console.error('Contact API error:', error)
      return res.status(500).json({ error: 'Failed to process message' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }
}
