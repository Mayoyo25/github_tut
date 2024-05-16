import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createClient = async () => {
  // Invoke cookies within an asynchronous context
  const cookieStore = cookies();

  return createServerComponentClient<any>({
    cookies: () => cookieStore,
  });
};
