"use client"
import { signIn } from "next-auth/react";

export default async  function signin(){
    await signIn();
}