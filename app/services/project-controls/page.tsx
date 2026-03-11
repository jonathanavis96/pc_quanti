'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectControlsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/services/planning');
  }, [router]);
  return null;
}
