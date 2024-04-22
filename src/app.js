import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { DATA_LIMIT } from "./constants.js";

const app = express();
const corsConfig = { origin: process.env.CORS_ORIGIN, credentials: true };
const jsonConfig = { limit: DATA_LIMIT };
const urlEncodingConfig = { limit: DATA_LIMIT, extended: true };

app.use(cors(corsConfig));
app.use(express.json(jsonConfig));
app.use(express.urlencoded(urlEncodingConfig));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import healthCheckRouter from "./routes/healthcheck.routes.js";
import newsletterRouter from "./routes/newsletter.routes.js";
import userRouter from "./routes/user.routes.js";
// import tweetRouter from "./routes/tweet.routes.js";
// import subscriptionRouter from "./routes/follow.routes.js";
// import videoRouter from "./routes/video.routes.js";
// import commentRouter from "./routes/comment.routes.js";
// import likeRouter from "./routes/like.routes.js";
// import playlistRouter from "./routes/playlist.routes.js";
// import dashboardRouter from "./routes/dashboard.routes.js";

// routes declaration
app.use("/api/v1/health-check", healthCheckRouter);
app.use("/api/v1/news-letter", newsletterRouter);
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/tweets", tweetRouter);
// app.use("/api/v1/subscriptions", subscriptionRouter);
// app.use("/api/v1/videos", videoRouter);
// app.use("/api/v1/comments", commentRouter);
// app.use("/api/v1/likes", likeRouter);
// app.use("/api/v1/playlist", playlistRouter);
// app.use("/api/v1/dashboard", dashboardRouter);

export { app };
