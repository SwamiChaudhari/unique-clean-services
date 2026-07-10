"use client";

import { FileText } from "lucide-react";
import { caseStudies } from "@/config/caseStudies";

export default function DashboardCaseStudies() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Case Studies &amp; Projects
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {caseStudies.length} projects · managed in{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">
            src/config/caseStudies.ts
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cs.title}</h3>
                  <p className="text-xs text-gray-500">
                    {cs.clientType} · {cs.location}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded bg-gray-100 px-2 py-1 text-[11px] text-gray-600">
                {cs.service}
              </span>
            </div>
            <div className="mb-3 grid grid-cols-3 gap-2">
              {cs.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-gray-100 py-2 text-center"
                >
                  <div className="text-sm font-bold text-teal-600">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-gray-500">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">{cs.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
