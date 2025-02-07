import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      isJoining,
      isPlusOne,
      isTransportNeeded,
      contactNumber,
      allergy,
      message,
    } = await req.json();

    const telegramMessage = `
      RSVP:
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Joining: ${isJoining ? 'Yes' : 'No'}
      Plus One: ${isPlusOne ? 'Yes' : 'No'}
      Is Transport Needed: ${isTransportNeeded ? 'Yes' : 'No'}
      Contact Number: ${contactNumber}
      Allergy: ${allergy || 'None'}
      Message: ${message || 'None'}
    `;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        message: 'Telegram message sent successfully',
      });
    } else {
      const errorResponse = await response.json();
      return NextResponse.json(
        { message: 'Failed to send Telegram message', error: errorResponse },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: 'An error occurred while processing the request', error },
      { status: 500 }
    );
  }
}
