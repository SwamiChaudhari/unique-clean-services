"use client";

import { Building2 } from "lucide-react";
import { industries } from "@/config/industries";

export default function DashboardIndustries() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Industries We Serve
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {industries.length} industries · managed in{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">
            src/config/industries.ts
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <div
            key={ind.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <Building2 className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-gray-900">{ind.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{ind.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {ind.examples.map((e) => (
                <span
                  key={e}
                  className="rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
