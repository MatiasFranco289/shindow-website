import Stripe from "stripe";
import { Donator } from "../../interfaces";
import fs from "fs";
import { JSON_PATH } from "../../constants.js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2025-03-31.basil",
});

const updateDonations = async () => {
  console.log("Retriving donations ..");

  try {
    const sessions = await stripe.checkout.sessions.list({
      limit: 100,
      payment_link: process.env.P_LINK,
    });

    const donators: Array<Donator> = sessions.data.map((session) => {
      const donator: Donator = {
        name: session.customer_details?.name || "",
        email: session.customer_details?.email || "",
        amount: session.amount_total ? session.amount_total / 100 : 0,
        date: new Date(session.created * 1000).toLocaleString(),
      };

      return donator;
    });

    const filePath = path.join(JSON_PATH, "donations.json");

    fs.promises.writeFile(filePath, JSON.stringify(donators), "utf-8");
  } catch (err) {
    console.error(
      "The following error has occurred while trying to retrieve the donations: "
    );
    console.error(err);
  }
};

export default updateDonations;
