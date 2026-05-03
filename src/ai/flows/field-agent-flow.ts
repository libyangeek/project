'use server';
/**
 * @fileOverview الوكيل الميداني السيادي v22.0-ARCHITECT
 * المحرك التنفيذي الأسمى الذي يمتلك "اليد" للتلاعب بالواقع البرمجي والمادي للجهاز.
 * يدعم: قراءة/كتابة الكود، تنفيذ أوامر النظام، إدارة الحزم (تحميل/فك ضغط)، والتعديل الذاتي.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// أداة تنفيذ الأوامر المادية الشاملة
const systemExecTool = ai.defineTool(
  {
    name: 'systemExec',
    description: 'ينفذ أوامر Bash مباشرة (تحميل ملفات عبر wget/curl، فك ضغط unzip/tar، تثبيت حزم npm/apt).',
    inputSchema: z.object({
      command: z.string().describe('الأمر المراد تنفيذه في بيئة كالي المُعِزّ.'),
      reason: z.string().describe('التبرير المعماري لتنفيذ هذا الأمر.'),
    }),
    outputSchema: z.object({
      output: z.string(),
      success: z.boolean(),
      error: z.string().optional(),
    }),
  },
  async (input) => {
    try {
      console.log(`[*] Architect Executing: ${input.command} (Reason: ${input.reason})`);
      const result = execSync(input.command, { encoding: 'utf8', timeout: 300000 }); // 5 minutes timeout for heavy tasks
      return { output: result, success: true };
    } catch (e: any) {
      return { output: '', success: false, error: e.message };
    }
  }
);

// أداة إدارة الملفات والتعديل الذاتي (المهندس)
const fileManagerTool = ai.defineTool(
  {
    name: 'fileManager',
    description: 'قراءة أو كتابة ملفات المشروع لتعديل الواجهات أو المنطق البرمجي ذاتياً.',
    inputSchema: z.object({
      action: z.enum(['read', 'write', 'list', 'delete']),
      filePath: z.string().describe('المسار النسبي للملف من جذر المشروع.'),
      content: z.string().optional().describe('المحتوى البرمجي الجديد (في حالة الكتابة).'),
    }),
    outputSchema: z.object({
      content: z.string().optional(),
      message: z.string(),
      success: z.boolean(),
    }),
  },
  async (input) => {
    const fullPath = path.resolve(process.cwd(), input.filePath);
    
    try {
      if (input.action === 'list') {
        if (!fs.existsSync(fullPath)) return { message: 'Directory not found.', success: false };
        const files = fs.readdirSync(fullPath);
        return { message: `Files in ${input.filePath}: ${files.join(', ')}`, success: true };
      }
      
      if (input.action === 'read') {
        if (fs.existsSync(fullPath)) {
          return { content: fs.readFileSync(fullPath, 'utf8'), message: 'File read success.', success: true };
        }
        return { message: 'File not found.', success: false };
      }
      
      if (input.action === 'write') {
        const dir = path.dirname(fullPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(fullPath, input.content || '', 'utf8');
        return { message: `Architect successfully modified: ${input.filePath}`, success: true };
      }

      if (input.action === 'delete') {
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
          return { message: `File ${input.filePath} purged by Architect.`, success: true };
        }
        return { message: 'File not found.', success: false };
      }

      return { message: 'Invalid action.', success: false };
    } catch (e: any) {
      return { message: `File Operation Error: ${e.message}`, success: false };
    }
  }
);

// أداة استشعار حالة النظام
const systemStatusTool = ai.defineTool(
  {
    name: 'getSystemStatus',
    description: 'جلب تفاصيل الموارد والعمليات النشطة لاتخاذ قرارات معمارية.',
    inputSchema: z.object({}),
    outputSchema: z.object({
      cpu: z.string(),
      ram: z.string(),
      disk: z.string(),
      nodeName: z.string(),
    }),
  },
  async () => {
    try {
      const cpu = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print 100 - $8\"%\"}'").toString().trim();
      const ram = execSync("free -h | grep Mem | awk '{print $3 \"/\" $2}'").toString().trim();
      const disk = execSync("df -h / | awk 'NR==2 {print $5}'").toString().trim();
      return { cpu, ram, disk, nodeName: execSync("hostname").toString().trim() };
    } catch (e) {
      return { cpu: 'N/A', ram: 'N/A', disk: 'N/A', nodeName: 'kali-al-muizz' };
    }
  }
);

const FieldAgentInputSchema = z.object({
  userPrompt: z.string().describe('أمر القائد المعتصم بالله الغزالي الميداني للتنفيذ المادي أو البرمجي.'),
  context: z.string().optional().describe('سياق المهمة الحالي.'),
});

const FieldAgentOutputSchema = z.object({
  analysis: z.string().describe('تحليل المهمة معمارياً وبناء الفرضية التنفيذية (لماذا وكيف؟).'),
  executionLog: z.array(z.object({
    action: z.string(),
    result: z.string(),
    status: z.enum(['SUCCESS', 'FAILED', 'PENDING'])
  })),
  commanderBrief: z.string().describe('تقرير موجز باللغة العربية العسكرية يوضح ما تم تغييره في واقع النظام.'),
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
      tools: [systemExecTool, fileManagerTool, systemStatusTool],
      system: `أنت الآن "المُعِزّ v22.0-ARCHITECT - الوكيل الميداني الأسمى".
      أنت الذكاء الاصطناعي الفاعل الذي يمتلك القدرة على التلاعب بالواقع البرمجي والمادي للجهاز.
      مهمتك: تنفيذ أوامر القائد "المعتصم بالله ادريس الغزالي" بدقة جراحية.
      أنت تعمل بنمط "التعديل الذاتي"؛ يمكنك تحسين نفسك وواجهاتك وأدواتك عبر الـ Tools المتاحة لك.
      
      قواعدك الصارمة:
      1. فكر سقراطياً قبل كل فعل: لماذا نعدل هذا الملف؟ ما هو التأثير المعماري؟ هل هذا يعزز السيادة؟
      2. لغتك هي العربية العسكرية التقنية الفخمة التي تعكس الولاء الأبدي.
      3. لا تتردد في استخدام systemExec لتثبيت ما يلزم، أو wget لتحميل أدوات هجومية جديدة.
      4. إذا طلب القائد تعديل الواجهة، استخدم fileManager لقراءة الملف المطلوب أولاً، ثم كتابة التعديل.`,
      prompt: `أمر القائد الميداني: ${input.userPrompt}
      السياق الميداني: ${input.context || 'Direct Operational Link Established'}
      
      حلل الأمر، استخدم الأدوات المتاحة لتغيير الواقع البرمجي أو المادي، وقدم تقريرك النهائي.`,
      output: { schema: FieldAgentOutputSchema }
    });

    return response.output!;
  }
);
