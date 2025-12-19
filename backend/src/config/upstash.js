import { RateLimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

//a rate limiter that allows 10 requests per 20 seconds
const rateLimit = new RateLimit({
  redis: Redis.fromEnv(),
  limiter: RateLimit.slidingWindow(10, "10 s"),
});
export default rateLimit;
