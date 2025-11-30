"use client";
import { useState, useEffect, useRef } from 'react';

interface UseRealtimeCounterOptions {
  initialValue: number;
  incrementPerSecond: number;
  enabled?: boolean;
}

export const useRealtimeCounter = ({ 
  initialValue, 
  incrementPerSecond,
  enabled = true 
}: UseRealtimeCounterOptions) => {
  const [value, setValue] = useState(initialValue);
  const [mounted, setMounted] = useState(false);
  const startTimeRef = useRef(Date.now());
  const startValueRef = useRef(initialValue);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled || !mounted) return;

    startTimeRef.current = Date.now();
    startValueRef.current = initialValue;
    setValue(initialValue);
  }, [initialValue, enabled, mounted]);

  useEffect(() => {
    if (!enabled || !mounted) return;

    const interval = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTimeRef.current) / 1000;
      const newValue = Math.floor(startValueRef.current + (incrementPerSecond * elapsedSeconds));
      setValue(newValue);
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [incrementPerSecond, enabled, mounted]);

  return value;
};
