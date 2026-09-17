import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  lineId: z.string().optional(),
  placement: z.string().min(3),
  size: z.string().min(2),
  budget: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = bookingSchema.parse(body);

    // TODO: Integrate with email service (Resend/SendGrid)
    // For now, just log and return success
    console.log('Booking inquiry received:', validatedData);

    // Example Resend integration (uncomment when ready):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'bookings@chikami.com',
      to: process.env.ARTIST_EMAIL,
      subject: `New Booking Inquiry from ${validatedData.name}`,
      html: `
        <h2>New Booking Inquiry</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${validatedData.lineId ? `<p><strong>LINE ID:</strong> ${validatedData.lineId}</p>` : ''}
        <p><strong>Placement:</strong> ${validatedData.placement}</p>
        <p><strong>Size:</strong> ${validatedData.size}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    // Send confirmation to client
    await resend.emails.send({
      from: 'bookings@chikami.com',
      to: validatedData.email,
      subject: 'Booking Inquiry Received - Chikami',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${validatedData.name},</p>
        <p>I've received your booking inquiry and will get back to you within 2-3 business days.</p>
        <p>Best regards,<br>Chikami</p>
      `,
    });
    */

    return NextResponse.json(
      { success: true, message: 'Booking inquiry received' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Booking API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
