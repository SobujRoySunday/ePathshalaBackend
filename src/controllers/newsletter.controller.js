import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Newsletter } from "../models/newsletter.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getCurrentTimeString } from "../utils/getCurrentTimeString.js";

const newsletter = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(getCurrentTimeString() + "Request received: Newsletter subscription for " + email);

  if (!email || email === "") {
    console.log(getCurrentTimeString() + "Error: Empty email field provided");
    throw new ApiError(400, "Email field is required");
  }
  
  const existingEmail = await Newsletter.findOne({ email });
  if (existingEmail) {
    console.log(getCurrentTimeString() + "Error: Email already subscribed");
    throw new ApiError(409, "You have already subscribed to our newsletter");
  }

  const createdEmail = await Newsletter.create({ email });
  if (!createdEmail) {
    throw new ApiError(
      500,
      "Something went wrong while subscribing to newsletter"
    );
  }

  console.log(getCurrentTimeString() + "Response sent: Newsletter subscribed for " + email);
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { email },
        "Now you are subscribed to our newsletter"
      )
    );
});

export { newsletter };
