import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kmdxpccclvazdidvtckr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttZHhwY2NjbHZhemRpZHZ0Y2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDAwMjcsImV4cCI6MjAwNjcxNjAyN30.hvzOvB242NhDMvezKoUnZODRiC8NYGBTpLbAbh0tVws"
);
