import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const appendSpreadsheet = async (row) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

const submitForm = (e) => {
  e.preventDefault();

  if (
    form.name !== '' &&
    form.email !== '' &&
    form.topic !== '' &&
    form.description !== ''
  ) {
    const newRow = {
      FirstName: form.firstName,
      LastName: form.lastName,
      Topic: form.topic,
      Description: form.description,
    };

    appendSpreadsheet(newRow);
  }
};
