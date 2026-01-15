import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";

// Even though this is largely a static site, we'll implement the hook for the inquiry form
// in case it's connected to a backend notification system.

export function useCreateInquiry() {
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
  });
}
