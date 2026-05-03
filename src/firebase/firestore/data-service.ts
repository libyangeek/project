'use client';
/**
 * @fileOverview وحدة بيانات Firestore السيادية.
 * تعالج عمليات حفظ العمليات واسترجاع التقارير والبيانات الاستخباراتية برمجياً.
 * تدعم تسجيل عمليات الوكيل الميداني لحظياً.
 * (c) 2025 Sovereign Systems - Al-Mu'izz
 */

import { 
  Firestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where,
  orderBy,
  serverTimestamp,
  deleteDoc
} from 'firebase/firestore';

/**
 * حفظ عملية جديدة في سجل العمليات السيادي مع تتبع الحالة.
 */
export function saveOperation(db: Firestore, userId: string, operationData: any) {
  const opId = doc(collection(db, 'temp')).id;
  const opRef = doc(db, `users/${userId}/operations/${opId}`);
  
  setDoc(opRef, {
    ...operationData,
    id: opId,
    userId: userId,
    startTime: serverTimestamp(),
    status: operationData.status || 'pending'
  });
  
  return opId;
}

/**
 * تسجيل تنفيذ ميداني قام به الوكيل الميداني.
 */
export function logFieldAction(db: Firestore, userId: string, actionData: any) {
  const logId = doc(collection(db, 'temp')).id;
  const logRef = doc(db, `users/${userId}/fieldLogs/${logId}`);
  
  setDoc(logRef, {
    ...actionData,
    id: logId,
    userId,
    timestamp: serverTimestamp(),
    status: 'EXECUTED'
  });
  
  return logId;
}

/**
 * استرجاع كافة تقارير المستخدم مرتبة تنازلياً حسب وقت التوليد.
 */
export async function getUserReports(db: Firestore, userId: string) {
  const reportsRef = collection(db, `users/${userId}/reports`);
  const q = query(reportsRef, orderBy('generationTime', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * تخزين قطعة معرفية في نظام RAG السيادي.
 */
export function storeKnowledgeItem(db: Firestore, userId: string, content: string, type: string, source: string) {
  const kId = doc(collection(db, 'temp')).id;
  const kRef = doc(db, `users/${userId}/knowledgeItems/${kId}`);
  
  setDoc(kRef, {
    id: kId,
    userId,
    content,
    contentType: type,
    ingestedAt: serverTimestamp(),
    source: source || 'system_engine',
    embeddingVectorId: `vec_${kId}` 
  });
}

/**
 * حذف تقرير أو عملية من السجلات السيادية.
 */
export function deleteSovereignRecord(db: Firestore, path: string) {
  const docRef = doc(db, path);
  deleteDoc(docRef);
}
