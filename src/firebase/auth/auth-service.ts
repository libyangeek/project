'use client';
/**
 * @fileOverview وحدة مصادقة Firebase السيادية.
 * تدعم تسجيل الدخول، الخروج، وإدارة جلسات المستخدمين.
 */

import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User
} from 'firebase/auth';

/**
 * تسجيل دخول مستخدم موجود بالبريد وكلمة المرور.
 */
export async function loginUser(auth: Auth, email: string, pass: string): Promise<User> {
  const credential = await signInWithEmailAndPassword(auth, email, pass);
  return credential.user;
}

/**
 * إنشاء حساب مستخدم جديد.
 */
export async function registerUser(auth: Auth, email: string, pass: string): Promise<User> {
  const credential = await createUserWithEmailAndPassword(auth, email, pass);
  return credential.user;
}

/**
 * تسجيل الخروج من النظام.
 */
export async function logoutUser(auth: Auth): Promise<void> {
  await signOut(auth);
}

/**
 * مراقب حالة الجلسة.
 */
export function watchAuthState(auth: Auth, callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
