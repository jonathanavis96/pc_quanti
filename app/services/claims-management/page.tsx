'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClaimsManagementRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/services/dispute-resolution');
  }, [router]);
  return null;
}
