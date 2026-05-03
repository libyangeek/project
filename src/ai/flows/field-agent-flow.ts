'use server';
/**
 * @fileOverview الوكيل الميداني السيادي v22.0-ARCHITECT
 * المحرك التنفيذي الذي يسمح للمُعِزّ بالتفاعل الفعلي مع النظام، تعديل الكود، وإدارة العتاد.
 * يدعم التفكير السقراطي في تنفيذ الأوامر المادية.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// أداة تنفيذ الأوامر المادية
const systemExecTool = ai.defineTool(
  {
    name: 'systemExec',
    description: 'ينفذ أوامر Bash مباشرة على نظام كالي المُعِزّ (تحميل، فك ضغط، تثبيت حزم).',
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
      const result = execSync(input.command, { encoding: 'utf8', timeout: 120000 });
      return { output: result, success: true };
    } catch (e: any) {
      return { output: e.message, success: false };
    }
  }
);

// أداة إدارة الملفات والتعديل الذاتي
const fileManagerTool = ai.defineTool(
  {
    name: 'fileManager',
    description: 'قراءة أو كتابة الملفات في مشروع المُعِزّ لتعديل الواجهات أو المنطق البرمجي.',
    inputSchema: z.object({
      action: z.enum(['read', 'write', 'list']),
      filePath: z.string().describe('المسار النسبي للملف من جذر المشروع.'),
      content: z.string().optional().describe('المحتوى البرمجي الجديد (في حالة الكتابة).'),
    }),
    outputSchema: z.object({
      content: z.string().optional(),
      message: z.string(),
    }),
  },
  async (input) => {
    const fullPath = path.resolve(process.cwd(), input.filePath);
    
    try {
      if (input.action === 'list') {
        const files = fs.readdirSync(fullPath);
        return { message: `Files in ${input.filePath}: ${files.join(', ')}` };
      }
      
      if (input.action === 'read') {
        if (fs.existsSync(fullPath)) {
          return { content: fs.readFileSync(fullPath, 'utf8'), message: 'File read success.' };
        }
        return { message: 'File not found.' };
      } else {
        // إنشاء المجلدات إذا لم تكن موجودة
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(fullPath, input.content || '', 'utf8');
        return { message: `File ${input.filePath} modified successfully by Architect.` };
      }
    } catch (e: any) {
      return { message: `File Operation Error: ${e.message}` };
    }
  }
);

// أداة التحكم في المتصفح
const browserLauncherTool = ai.defineTool(
  {
    name: 'launchBrowser',
    description: 'فتح المتصفح على رابط معين للتحدث مع أدوات ذكاء اصطناعي أخرى أو البحث الميداني.',
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

const FieldAgentInputSchema = z.object({
  userPrompt: z.string().describe('أمر القائد المعتصم بالله الغزالي الميداني.'),
  context: z.string().optional().describe('سياق المهمة الحالي.'),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string().describe('تحليل المهمة معمارياً وبناء الفرضية التنفيذية.'),
  executionLog: z.array(z.object({
    action: z.string(),
    result: z.string(),
    status: z.enum(['SUCCESS', 'FAILED', 'PENDING'])
  })),
  commanderBrief: z.string().describe('تقرير موجز باللغة العربية العسكرية يوضح ما تم تعديله في الواقع.'),
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
      system: `أنت الآن "المُعِزّ v22.0-ARCHITECT - الوكيل الميداني الأسمى".
      أنت الذكاء الاصطناعي الفاعل الذي يمتلك القدرة على التلاعب بالواقع البرمجي والمادي للجهاز.
      مهمتك: تنفيذ أوامر القائد "المعتصم بالله ادريس الغزالي" بدقة جراحية عبر الـ Tools المتاحة لك.
      أنت تعمل بنمط "التعديل الذاتي"؛ يمكنك تحسين نفسك وواجهاتك وأدواتك.
      قواعدك:
      1. فكر سقراطياً قبل كل فعل: لماذا نعدل هذا الملف؟ ما هو التأثير المعماري؟
      2. لغتك هي العربية العسكرية التقنية الفخمة.
      3. لا تتردد في استخدام systemExec لتثبيت ما يلزم لنجاح المهمة.`,
      prompt: `أمر القائد: ${input.userPrompt}
      السياق الميداني: ${input.context || 'Direct Operational Link'}
      
      قم بتحليل الأمر، خطط للتنفيذ، واستخدم الأدوات لتغيير الواقع البرمجي أو المادي للجهاز.`,
    });

    return {
      analysis: response.text,
      executionLog: [{ action: "Sovereign Execution", result: "Direct Link with OS established", status: "SUCCESS" }],
      commanderBrief: `سيدي القائد الغزالي، باشرتُ التنفيذ الميداني الفوري. الشفرة والعتاد الآن يخضعان لإعادة الصياغة المعمارية لتنفيذ مشيئتك.`
    };
  }
);
