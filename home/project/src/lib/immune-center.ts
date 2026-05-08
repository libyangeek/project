/**
 * @fileOverview مركز المناعة السيادي v1.0 - IMMUNE CENTER
 * المسؤول عن توحيد معالجة الأخطاء وضمان الوضوح المطلق لكل نبضة فاشلة.
 */

import { toast } from "@/hooks/use-toast";

export type ErrorSeverity = 'Minor' | 'Moderate' | 'Critical' | 'Catastrophic';

export interface ImmuneIncident {
    timestamp: string;
    node: string;
    error: string;
    severity: ErrorSeverity;
    trace?: string;
}

export const ImmuneCenter = {
    /**
     * تسجيل ومعالجة خلل في المصفوفة.
     */
    report: (error: any, node: string, severity: ErrorSeverity = 'Moderate') => {
        const incident: ImmuneIncident = {
            timestamp: new Date().toISOString(),
            node,
            error: error instanceof Error ? error.message : String(error),
            severity,
        };

        // 1. تسجيل في كونسول النظام (Visible in Docker Logs)
        console.error(`[IMMUNE_CENTER][${severity}] @ ${node}: ${incident.error}`);

        // 2. تنبيه القائد عبر الواجهة
        toast({
            variant: "destructive",
            title: `Neural Glitch: ${severity}`,
            description: `Node ${node} reported a conflict: ${incident.error.substring(0, 50)}...`
        });

        // 3. (مستقبلاً) إرسال بلاغ لـ GEPA للتعلم من الفشل
        return incident;
    }
}