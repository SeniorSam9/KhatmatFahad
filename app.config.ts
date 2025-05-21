import dotenv from "dotenv";
dotenv.config();

export default {
  expo: {
    name: "KhatmatFahad",
    slug: "KhatmatFahad",
    extra: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
};
