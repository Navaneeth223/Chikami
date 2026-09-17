import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const { email } = newsletterSchema.parse(body);

    // TODO: Integrate with email service (Resend/ConvertKit/Mailchimp)
    // For now, just log and return success
    console.log('Newsletter subscription:', email);

    // Example Resend integration (uncomment when ready):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'newsletter@chikami.com',
      to: email,
      subject: 'Confirm Your Subscription - Chikami Newsletter',
      html: `
        <h2>Welcome!</h2>
        <p>Thanks for subscribing to updates from Chikami.</p>
        <p>You'll receive notifications about:</p>
        <ul>
          <li>New flash drops</li>
          <li>Commission openings</li>
          <li>Guest spots and travel schedule</li>
          <li>Behind-the-scenes process notes</li>
        </ul>
        <p>Stay tuned!</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
