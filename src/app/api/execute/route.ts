
import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execPromise = promisify(exec);

/**
 * المحرك التنفيذي للسيادة v64.0 - تمكين السيطرة المادية الشاملة
 * يدعم العمليات المباشرة على الملفات والأنظمة في الوقت الحالي.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
        command, target, type, path: targetPath, content, batchPaths 
    } = body;

    const BASE_PROJECT_PATH = "/home/project";
    const SCRIPTS_PATH = '/opt/sovereign-ai-platform';

    switch (type) {
      case 'list_dir': {
        const dirToRead = targetPath || BASE_PROJECT_PATH;
        if (!fs.existsSync(dirToRead)) {
            return NextResponse.json({ success: false, error: `القطاع [${dirToRead}] غير موجود في المصفوفة المادية.` });
        }
        const stats = fs.statSync(dirToRead);
        if (!stats.isDirectory()) {
            return NextResponse.json({ success: false, error: "الهدف ليس مجلداً." });
        }
        const items = fs.readdirSync(dirToRead, { withFileTypes: true });
        const result = items.map(item => {
            const fullPath = path.join(dirToRead, item.name);
            let size = 0;
            try { size = fs.statSync(fullPath).size; } catch(e){}
            return {
                name: item.name,
                isDirectory: item.isDirectory(),
                path: fullPath,
                size: size
            };
        });
        return NextResponse.json({ success: true, output: result, currentPath: dirToRead });
      }

      case 'read_file': {
        if (!targetPath || !fs.existsSync(targetPath)) {
            return NextResponse.json({ success: false, error: "المِلَفّ غير موجود في هذا القطاع." });
        }
        const content = fs.readFileSync(targetPath, 'utf8');
        return NextResponse.json({ success: true, output: content });
      }

      case 'write_file': {
        if (!targetPath || content === undefined) {
            return NextResponse.json({ success: false, error: "بيانات الحقن الجيني ناقصة (Path/Content)." });
        }
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        
        fs.writeFileSync(targetPath, content, 'utf8');
        return NextResponse.json({ success: true, message: "تم تثبيت الـ DNA الجديد بنجاح في العتاد." });
      }

      case 'read_batch': {
        if (!batchPaths || !Array.isArray(batchPaths)) {
            return NextResponse.json({ success: false, error: "Missing batch paths." });
        }
        const results = batchPaths.map(p => ({
            path: p,
            content: fs.existsSync(p) ? fs.readFileSync(p, 'utf8').substring(0, 10000) : "FILE_NOT_FOUND"
        }));
        return NextResponse.json({ success: true, output: results });
      }

      case 'smart_route':
      case 'terminal': {
        try {
            const { stdout, stderr } = await execPromise(command || `python3 ${SCRIPTS_PATH}/ai-engine/smart_router.py "${target}"`);
            return NextResponse.json({ success: true, output: stdout || stderr });
        } catch (e: any) {
            return NextResponse.json({ success: false, error: e.message });
        }
      }

      default:
        return NextResponse.json({ success: true, output: "تم استقبال التوجيه في العصب المركزي." });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: "انهيار في النبض التنفيذي: " + error.message }, { status: 500 });
  }
}
