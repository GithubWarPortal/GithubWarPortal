import express from "express";
import cors from "cors";

//Import routes
import cardValidatorRouter from "./routes/cardValidator.js";
import storeSubmissionRouter from "./routes/CardCreator/storeSubmission.js";
import creatorSubmissionRouter from "./routes/CardCreator/creatorSubmission.js";
import creatorSignInRouter from "./routes/SignIn/creator.js";
import storeSignInRouter from "./routes/SignIn/store.js";
import adminSignInRouter from "./routes/Admin/admin.js"
import getSubmissionsRouter from "./routes/Admin/getSubmissions.js"
import creatorCheckoutRouter from "./routes/Stripe/creatorCheckout.js";
import creatorPortalRouter from "./routes/Stripe/creatorPortal.js";
import creatorWebhookRouter from "./routes/Stripe/creatorWebhook.js";
import createCreatorRouter from "./routes/SignUp/creator.js";
import createStoreRouter from "./routes/SignUp/store.js";
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//Router for card validator 
app.use("/CardValidator", cardValidatorRouter);

//Router for card submissions
app.use("/StoreSubmission", storeSubmissionRouter);
app.use("/CreatorSubmission", creatorSubmissionRouter);
app.use("/submissions", getSubmissionsRouter)

//Sign in
app.use("/CreatorSignIn", creatorSignInRouter);
app.use("/StoreSignIn", storeSignInRouter);
app.use("/AdminSignIn", adminSignInRouter);

//Router for creator subscriptions
app.use("/create-creator-checkout-session", creatorCheckoutRouter);
app.use("/create-creator-portal-session", creatorPortalRouter);
app.use("/webhook-creator", creatorWebhookRouter);

//Router for store subscriptions
//app.use("/create-creator-checkout-session", stripeStoreRouter);
//app.use("/create-creator-portal-session", stripeStoreRouter);
//app.use("/webhook-creator", stripeStoreRouter);

//Routes for sign up
app.use("/CreateCreator", createCreatorRouter)
app.use("/CreateStore", createStoreRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`));