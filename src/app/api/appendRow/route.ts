import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;
const SHEET_ID = Number(process.env.NEXT_PUBLIC_SHEET_ID);
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL!;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, '\n');

export async function POST(req: Request) {
  try {
    const auth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_SERVICE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const body = await req.json();

    await sheet.addRow(body);

    return NextResponse.json(
      { message: 'Row added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to append data' },
      { status: 500 }
    );
  }
}
