
// Re-export from a single source to avoid circular dependencies
import { toast as shadcnToast, useToast as useShadcnToast } from "@/components/ui/toast";

export const useToast = useShadcnToast;
export const toast = shadcnToast;
