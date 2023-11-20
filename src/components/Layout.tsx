import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl mx-auto p-4">{children}</div>;
}
