import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zwjeuzwwedyhtxzpdyqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3amV1end3ZWR5aHR4enBkeXF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzOTc2MjEsImV4cCI6MjAyOTk3MzYyMX0.aGsdKIWQ3v3julbgFxvJ6s7J28aPgGJ1yQX-FlJy31A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
