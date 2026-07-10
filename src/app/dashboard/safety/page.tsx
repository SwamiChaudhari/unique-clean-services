"use client";

import { ShieldCheck } from "lucide-react";
import { safetyProtocols } from "@/config/safety";

export default function DashboardSafety() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Safety &amp; Compliance Protocols
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {safetyProtocols.length} protocols · managed in{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">
            src/config/safety.ts
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {safetyProtocols.map((s) => (
          <div
            key={s.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
