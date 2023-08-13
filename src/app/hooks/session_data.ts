import { supabase } from "../data/SupabaseClient"
import { Session } from "@supabase/supabase-js"
import { useState, useEffect } from "react"

   
export function useSession(){
        
    const [session, setSession] = useState<Session | null>(null)
    const [role, SetRole] = useState<string | null>()
    useEffect(()=>{
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
          })
          console.log(role)
        supabase
            .from('profiles')
            .select('role')
            .then(({data: profiles, error}) => {
                SetRole(profiles![0].role)
            })

    }, [role])
    return [session,role] as const
}