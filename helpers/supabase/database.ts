import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createServerComponentClient({ cookies });

// export const getSession = async () => {
//   const cookieStore = cookies();
//   const supabase = createServerComponentClient({
//     cookies: () => cookieStore,
//   });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();
//   return session?.user.id;
// };

const currentTime = new Date().toUTCString();

export const selectRecord = async () => {
  try {
    const { data } = await supabase.from('profiles').select('*');
    return data![0];
  } catch (error) {
    console.log(error);
  }
};

export const updateEmail = async (email: string, id: string) => {
  try {
    const { data } = await supabase
      .from('profiles')
      .update({
        email,
        updated_at: currentTime,
      })
      .eq('id', id)
      .select();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const updateLicensedStatus = async (id: string) => {
  try {
    await supabase
      .from('profiles')
      .update({
        is_licensed: true,
      })
      .eq('id', id);
  } catch (error) {
    console.log(error);
  }
};

// export const nullifySession = async (session) => {
//   try {
//     const response = await supabase
//       .from('users')
//       .update({
//         login_session: null,
//       })
//       .eq('id', session.user.id);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const updateLicense = async (session, licenseKey) => {
//   try {
//     const response = await supabase
//       .from('users')
//       .update({
//         license_key: licenseKey,
//       })
//       .eq('id', session.user.id)
//       .select();
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const startSession = async (session, uniqueID) => {
//   try {
//     const response = await supabase
//       .from('users')
//       .update({
//         login_session: uniqueID,
//       })
//       .eq('id', session.user.id)
//       .select();
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
