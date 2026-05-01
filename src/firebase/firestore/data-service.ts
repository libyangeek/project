'use client';
/**
 * @fileOverview وحدة بيانات Firestore السيادية.
 * تعالج عمليات حفظ العمليات واسترجاع التقارير والبيانات الاستخباراتية برمجياً.
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
export async function saveOperation(db: Firestore, userId: string, operationData: any) {
  const opId = doc(collection(db, 'temp')).id;
  const opRef = doc(db, `users/${userId}/operations/${opId}`);
  
  await setDoc(opRef, {
    ...operationData,
    id: opId,
    userId: userId,
    startTime: serverTimestamp(),
    status: operationData.status || 'pending'
  });
  
  return opId;
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
export async function storeKnowledgeItem(db: Firestore, userId: string, content: string, type: string, source: string) {
  const kId = doc(collection(db, 'temp')).id;
  const kRef = doc(db, `users/${userId}/knowledgeItems/${kId}`);
  
  await setDoc(kRef, {
    id: kId,
    userId,
    content,
    contentType: type,
    ingestedAt: serverTimestamp(),
    source: source || 'system_engine',
    embeddingVectorId: `vec_${kId}` // معرف تجريبي لمتجه الاستدعاء
  });
}

/**
 * حذف تقرير أو عملية من السجلات السيادية.
 */
export async function deleteSovereignRecord(db: Firestore, path: string) {
  const docRef = doc(db, path);
  await deleteDoc(docRef);
}
