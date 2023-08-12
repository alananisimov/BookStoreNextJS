/* eslint-disable @next/next/no-img-element */
import AdminProducts from "@/app/data/AdminProducts";
import UpdateModal from "@/components/UpdateModal";
import Layout from "@/components/Layout";
import { Session, User, createClient, RealtimeClient } from '@supabase/supabase-js'
import { useEffect, useState } from "react";
import { supabase } from "@/app/data/SupabaseClient";
import Router from "next/router";

export default function AdminPage(){
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
    return(
        <>

        <Layout>
        {session?.user && role !== 'user' || undefined ? <div className="p-16 md:p-0">
        <AdminProducts/>
        </div>: <div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512"><circle cx="255.107" cy="256" r="254.106" fill="#FF473E"/><path fill="#D32A2A" d="M256 487.106C119.516 487.106 8.18 379.5 2.165 244.5c-.17 3.813-.271 7.645-.271 11.5c0 140.339 113.767 254.106 254.106 254.106S510.106 396.339 510.106 256c0-3.855-.101-7.687-.271-11.5C503.82 379.5 392.484 487.106 256 487.106z"/><path fill="#FFF" d="M415.997 311.61H94.216c-9.262 0-16.771-7.509-16.771-16.771v-82.431c0-9.262 7.509-16.771 16.771-16.771h321.781c9.262 0 16.771 7.509 16.771 16.771v82.431c0 9.262-7.508 16.771-16.771 16.771z"/></svg>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">У вас нет прав для доступа к этой странице!</h2>
    <p>Попробуйте получить войти в аккаунт или получить права для доступа</p>
    <div className="card-actions py-5">
      <button className="btn btn-primary" onClick={()=>{Router.push('/login')}}>Войти в аккаунт</button>
    </div>
  </div>
</div>
    }
        </Layout>
        </>
    )
}