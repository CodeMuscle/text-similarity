import { ReactNode } from "react";

export default function Layout({
  children
}: {
  children: React.ReactNode
}){
  return <section className="py-20">{children}</section>
}