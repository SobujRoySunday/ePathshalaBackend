import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {getCurrentTimeString} from "../utils/getCurrentTimeString.js"

const healthCheck = asyncHandler(async (req, res) => {
  console.log(getCurrentTimeString() + "Request received: HEALTHCHECK");
  console.log(getCurrentTimeString() + "Response sent: HEALTHCHECK OK");
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "ePathshala express is responsive"));
});

export { healthCheck };
