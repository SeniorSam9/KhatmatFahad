import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

const SUPABASE_URL = Constants.manifest2.extra.supabaseUrl;
const SUPABASE_ANON_KEY = Constants.manifest2.extra.supabaseAnonKey;
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
