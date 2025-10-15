import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useBackendData<T>(functionName: string) {
  return useQuery({
    queryKey: [functionName],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke<T>(functionName);
      
      if (error) throw error;
      return data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 20000, // Consider data stale after 20 seconds
  });
}