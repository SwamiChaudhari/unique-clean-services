"use client";

import { Award } from "lucide-react";
import { certifications } from "@/config/certifications";

export default function DashboardCertifications() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Certifications &amp; Compliance
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {certifications.length} certifications · managed in{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">
            src/config/certifications.ts
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Award className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-gray-900">{c.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
