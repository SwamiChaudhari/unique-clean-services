"use client";

import { Wrench } from "lucide-react";
import { equipment } from "@/config/equipment";

const categoryColor: Record<string, string> = {
  Machines: "bg-blue-50 text-blue-600",
  Sanitation: "bg-teal-50 text-teal-600",
  Access: "bg-orange-50 text-orange-600",
  Tools: "bg-amber-50 text-amber-600",
};

export default function DashboardEquipment() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h2
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Professional Equipment
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          {equipment.length} items · managed in{" "}
          <code className="text-xs bg-gray-100 px-1 rounded">
            src/config/equipment.ts
          </code>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equipment.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                  <Wrench className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                  categoryColor[item.category] || "bg-gray-100 text-gray-600"
                }`}
              >
                {item.category}
              </span>
            </div>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
