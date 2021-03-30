

import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    }),
    databaseURL: 'gs://fast-feedback-5b00b.appspot.com/'
  });
}

// firebaseadmin private_key
const auth = admin.auth();
const db = admin.firestore();

export { auth, db };