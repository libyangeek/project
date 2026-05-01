'use client';
/**
 * @fileOverview وحدة مصادقة Firebase السيادية.
 * تدعم تسجيل الدخول، الخروج، وإدارة جلسات المستخدمين بأمان عالٍ.
 * (c) 2025 Sovereign Systems - Al-Mu'izz
 */

import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';

/**
 * تهيئة الثبات للجلسة وتسجيل دخول مستخدم موجود بالبريد وكلمة المرور.
 * @param auth كائن المصادقة
 * @param email البريد الإلكتروني
 * @param pass كلمة المرور
 */
export async function loginUser(auth: Auth, email: string, pass: string): Promise<User> {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const credential = await signInWithEmailAndPassword(auth, email, pass);
    return credential.user;
  } catch (error: any) {
    throw new Error(`خطأ في تسجيل الدخول: ${error.message}`);
  }
}

/**
 * إنشاء حساب مستخدم سيادي جديد.
 * @param auth كائن المصادقة
 * @param email البريد الإلكتروني
 * @param pass كلمة المرور
 */
export async function registerUser(auth: Auth, email: string, pass: string): Promise<User> {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, pass);
    return credential.user;
  } catch (error: any) {
    throw new Error(`خطأ في إنشاء الحساب: ${error.message}`);
  }
}

/**
 * تسجيل الخروج الآمن من النظام.
 * @param auth كائن المصادقة
 */
export async function logoutUser(auth: Auth): Promise<void> {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(`خطأ في تسجيل الخروج: ${error.message}`);
  }
}

/**
 * مراقب حالة الجلسة لتتبع المستخدمين النشطين.
 * @param auth كائن المصادقة
 * @param callback دالة الاستدعاء عند تغيير الحالة
 */
export function watchAuthState(auth: Auth, callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
