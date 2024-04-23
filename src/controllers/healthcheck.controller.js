import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  console.log("Request: HEALTHCHECK");
  console.log("Response: HEALTHCHECK OK!");
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "ePathshala express is responsive"));
});

export { healthCheck };
