'use client';
/**
 * @fileOverview وحدة بيانات Firestore السيادية.
 * تعالج عمليات حفظ العمليات واسترجاع التقارير والبيانات الاستخباراتية.
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
  serverTimestamp 
} from 'firebase/firestore';

/**
 * حفظ عملية جديدة في سجل العمليات السيادي.
 */
export async function saveOperation(db: Firestore, userId: string, operationData: any) {
  const opId = doc(collection(db, 'temp')).id;
  const opRef = doc(db, `users/${userId}/operations/${opId}`);
  
  await setDoc(opRef, {
    ...operationData,
    id: opId,
    userId: userId,
    startTime: serverTimestamp(),
    status: 'completed'
  });
  
  return opId;
}

/**
 * استرجاع كافة تقارير المستخدم.
 */
export async function getUserReports(db: Firestore, userId: string) {
  const reportsRef = collection(db, `users/${userId}/reports`);
  const snapshot = await getDocs(reportsRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

/**
 * تخزين قطعة معرفية في نظام RAG.
 */
export async function storeKnowledgeItem(db: Firestore, userId: string, content: string, type: string) {
  const kId = doc(collection(db, 'temp')).id;
  const kRef = doc(db, `users/${userId}/knowledgeItems/${kId}`);
  
  await setDoc(kRef, {
    id: kId,
    userId,
    content,
    contentType: type,
    ingestedAt: serverTimestamp(),
    source: 'platform_engine'
  });
}
