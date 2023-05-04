const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// At Subscription: Add new subscriber to Mailerlite
exports.addSubscriberToMailerlite = functions.auth
  .user()
  .onCreate(async (user) => {
    try {
      const subscriber = {
        email: user.email,
        fields: {
          name: user.displayName || "N/A",
        },
      };
    } catch (error) {
      console.log(
        `Error adding subscriber ${user.id} to Mailerlite: ${error.message}`
      );
    }
  });
