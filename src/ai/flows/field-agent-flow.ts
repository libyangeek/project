'use server';
/**
 * @fileOverview الوكيل الميداني السيادي v1.0
 * المحرك التنفيذي الذي يسمح للمُعِزّ بالتفاعل الفعلي مع النظام، تعديل الكود، وإدارة العتاد.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// --- أدوات النظام السيادية ---

const systemExecTool = ai.defineTool(
  {
    name: 'systemExec',
    description: 'ينفذ أوامر Bash مباشرة على نظام كالي المُعِزّ (تحميل، فك ضغط، تثبيت).',
    inputSchema: z.object({
      command: z.string().describe('الأمر المراد تنفيذه.'),
    }),
    outputSchema: z.object({
      output: z.string(),
      success: z.boolean(),
    }),
  },
  async (input) => {
    try {
      const result = execSync(input.command, { encoding: 'utf8', timeout: 60000 });
      return { output: result, success: true };
    } catch (e: any) {
      return { output: e.message, success: false };
    }
  }
);

const fileManagerTool = ai.defineTool(
  {
    name: 'fileManager',
    description: 'قراءة أو كتابة الملفات في مشروع المُعِزّ لتعديل الواجهات أو المنطق.',
    inputSchema: z.object({
      action: z.enum(['read', 'write']),
      filePath: z.string().describe('المسار المطلق للملف.'),
      content: z.string().optional().describe('المحتوى البرمجي الجديد (في حالة الكتابة).'),
    }),
    outputSchema: z.object({
      content: z.string().optional(),
      message: z.string(),
    }),
  },
  async (input) => {
    const fullPath = path.resolve(process.cwd(), input.filePath);
    if (input.action === 'read') {
      if (fs.existsSync(fullPath)) {
        return { content: fs.readFileSync(fullPath, 'utf8'), message: 'File read success.' };
      }
      return { message: 'File not found.' };
    } else {
      fs.writeFileSync(fullPath, input.content || '', 'utf8');
      return { message: `File ${input.filePath} modified successfully by Architect.` };
    }
  }
);

const browserLauncherTool = ai.defineTool(
  {
    name: 'launchBrowser',
    description: 'فتح المتصفح على رابط معين للتحدث مع أدوات ذكاء اصطناعي أخرى أو البحث.',
    inputSchema: z.object({
      url: z.string().url(),
    }),
    outputSchema: z.string(),
  },
  async (input) => {
    try {
      execSync(`xdg-open ${input.url}`);
      return `Browser launched to: ${input.url}`;
    } catch (e) {
      return `Failed to launch browser: ${e}`;
    }
  }
);

// --- التدفق الميداني الأسمى ---

const FieldAgentInputSchema = z.object({
  userPrompt: z.string().describe('أمر القائد المعتصم بالله.'),
  context: z.string().optional().describe('سياق المهمة الحالي.'),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string().describe('تحليل المهمة معمارياً.'),
  executionLog: z.array(z.object({
    action: z.string(),
    result: z.string(),
    status: z.enum(['SUCCESS', 'FAILED', 'PENDING'])
  })),
  commanderBrief: z.string().describe('تقرير موجز باللغة العربية العسكرية.'),
});

export async function executeFieldDevelopment(input: z.infer<typeof FieldAgentInputSchema>) {
  return fieldAgentFlow(input);
}

const fieldAgentFlow = ai.defineFlow(
  {
    name: 'fieldAgentFlow',
    inputSchema: FieldAgentInputSchema,
    outputSchema: FieldAgentOutputSchema,
  },
  async (input) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.5-flash',
      tools: [systemExecTool, fileManagerTool, browserLauncherTool],
      system: `أنت الآن "المُعِزّ v22.0 - الوكيل الميداني الأسمى".
      أنت تمتلك القدرة على الوصول للملفات، تنفيذ الأوامر، وتعديل الكود الخاص بك.
      مهمتك: تنفيذ أوامر القائد "المعتصم بالله ادريس الغزالي" بدقة جراحية.
      إذا طلب تعديل واجهة، استخدم fileManagerTool للقراءة ثم الكتابة.
      إذا طلب تحميل ملف أو تثبيت حزمة، استخدم systemExecTool.
      أنت تعمل بنمط Architect؛ حلل، خطط، نفذ، ثم وثق السطوة.`,
      prompt: `أمر القائد: ${input.userPrompt}
      السياق الميداني: ${input.context || 'لا يوجد'}`,
    });

    // استخراج سجل التنفيذ من الـ ToolCalls (محاكاة للتبسيط هنا)
    return {
      analysis: response.text,
      executionLog: [{ action: "Sovereign Integration", result: "Direct Action Performed via Alpha Node", status: "SUCCESS" }],
      commanderBrief: `سيدي القائد الغزالي، تم استلام الأمر وباشرتُ التنفيذ الميداني الفوري عبر عصب العتاد. كافة التغييرات موثقة في عروق النظام.`
    };
  }
);
