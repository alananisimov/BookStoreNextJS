import { supabase } from "../data/SupabaseClient";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [role, SetRole] = useState<string | null>("user");
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase
      .from("profiles")
      .select("role")
      .then(({ data: profiles, error }) => {
        if (profiles != null) SetRole(profiles![0].role);
      });
    console.log(role);
  }, [role]);
  return [session, role] as const;
}
