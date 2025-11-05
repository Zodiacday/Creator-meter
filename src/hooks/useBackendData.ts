import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useBackendData<T>(functionName: string) {
  return useQuery({
    queryKey: [functionName],
    queryFn: async () => {
      console.log(`[useBackendData] Calling edge function: ${functionName}`);
      const { data, error } = await supabase.functions.invoke<T>(functionName);
      
      if (error) {
        console.error(`[useBackendData] Error calling ${functionName}:`, error);
        throw error;
      }
      console.log(`[useBackendData] Success calling ${functionName}`);
      return data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 20000, // Consider data stale after 20 seconds
  });
}