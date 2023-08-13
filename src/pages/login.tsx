/* eslint-disable @next/next/no-img-element */
import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import "../app/globals.css";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "@/app/data/SupabaseClient";
export default function Login() {
  // Create a single supabase client for interacting with your database

  const [user_email, setuserEmail] = useState(String || undefined);

  async function Google_login() {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      //options: {
      //  redirectTo: 'http://localhost:3000'
      //}
    });
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ring-1 rounded-lg items-center text-center shadow-xl ring-black/10 h-full">
          <img
            className="mx-auto h-20 w-auto"
            src="/book.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <button
            onClick={Google_login}
            type="button"
            className="mt-16 mb-16 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-10 py-5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2"
          >
            <svg
              className="w-4 h-4 sm:mr-2 sm:-ml-1 ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            <p className="text-white form-medium text-sm hidden sm:flex">
              Войти через Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
