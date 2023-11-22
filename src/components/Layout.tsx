import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
}
