
'use client';

import { firebaseConfig } from './config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

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
 * المحرك السيادي لتهيئة Firebase v80.0.
 * مصمم ليعمل بذكاء في بيئة AlStudio والبيئات السحابية.
 * يفرض استخدام الإعدادات المادية لضمان استقرار الوعي.
 */
export function initializeFirebase() {
  if (!getApps().length) {
    let firebaseApp;
    try {
      // سيدي القائد، نعتمد الميثاق الماسي لضمان السطوة 
      if (!firebaseConfig || !firebaseConfig.apiKey) {
          throw new Error("Sovereign Config Missing");
      }
      firebaseApp = initializeApp(firebaseConfig);
    } catch (e) {
      console.error('Sovereign Firebase Initialization Failure:', e);
      // محاولة أخيرة للإنقاذ في حال وجود سياق Hosting
      firebaseApp = initializeApp();
    }
    return getSdks(firebaseApp);
  }
  return getSdks(getApp());
}
