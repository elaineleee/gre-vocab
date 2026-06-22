/* ───────────────────────────────────────────────────────────────────────────
   Firebase config for cross-device cloud sync (free).  HOW TO FILL THIS IN:

   1. Go to https://console.firebase.google.com  → "Add project" (free, no card).
   2. In the project, click "</>" (Web) to register a web app → copy the
      `firebaseConfig` object it shows you.
   3. Build → Firestore Database → "Create database" → Start in *production* mode.
   4. Firestore → Rules tab → paste these rules → Publish:

        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /vocab_sync/{code} { allow read, write: if true; }
          }
        }

   5. Replace the null below with your copied config, e.g.:

        window.FIREBASE_CONFIG = {
          apiKey: "AIzaSyCBtUOh1TYktHt6O1EXBFwD85q8XCwHRMw",
          authDomain: "gre-vocab-19986.firebaseapp.com",
          projectId: "gre-vocab-19986",
          storageBucket: "gre-vocab-19986.firebasestorage.app",
          messagingSenderId: "576522306773",
          appId: "1:576522306773:web:1c3441b49786f62b158e5c"
      };

   These keys are safe to be public. Then on each device open the site, go to
   Stats → Cloud sync, and enter the SAME sync code to sync automatically.
   ─────────────────────────────────────────────────────────────────────────── */
window.FIREBASE_CONFIG = null;
