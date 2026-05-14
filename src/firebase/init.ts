'use client';

import { firebaseConfig } from './config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

/**
 * دالة جلب خدمات Firebase الأساسية.
 */
export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}

/**
 * المحرك السيادي لتهيئة Firebase.
 * مصمم ليعمل بذكاء في البيئات السحابية والمحلية.
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      // سيدي القائد، نستخدم إعدادات الميثاق المادي مباشرة لضمان الاستقرار في بيئة AlStudio
      firebaseApp = initializeApp(firebaseConfig);
    } catch (e) {
      console.error('Sovereign Firebase Initialization Failure:', e);
      // محاولة أخيرة للإنقاذ عبر التهيئة التلقائية في حال وجود سياق سحابي
      firebaseApp = initializeApp();
    }

    return getSdks(firebaseApp);
  }

  // إذا تم التهيئة مسبقاً، جلب الخدمات للتطبيق الحالي
  return getSdks(getApp());
}
