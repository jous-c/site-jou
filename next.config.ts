import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// "Site updated" timestamp: commit date of the deployed commit (on Vercel,
// production builds check out the latest commit on main). Falls back to
// build time if git isn't available.
function getLastUpdated(): string {
  try {
    return execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim();
  } catch {
    return new Date().toISOString();
  }
}

const nextConfig: NextConfig = {
  env: {
    SITE_LAST_UPDATED: getLastUpdated(),
  },
};

export default nextConfig;
