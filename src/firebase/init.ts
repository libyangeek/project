
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
          console.error('Sovereign Error: firebase-applet-config.json is missing or corrupted.');
          // Fallback to empty init to prevent hard crash if possible, but real config is required.
          firebaseApp = initializeApp({});
      } else {
          firebaseApp = initializeApp(firebaseConfig);
      }
    } catch (e) {
      console.error('Sovereign Firebase Initialization Failure:', e);
      // محاولة استرداد يائسة
      firebaseApp = initializeApp(firebaseConfig);
    }
    return getSdks(firebaseApp);
  }
  return getSdks(getApp());
}
