"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  X, 
  Minus, 
  Square, 
  Terminal, 
  Cpu, 
  Skull, 
  Zap, 
  Search, 
  Target, 
  Database, 
  FolderOpen, 
  Save, 
  Play, 
  Settings, 
  HelpCircle,
  Smartphone,
  Network,
  Hammer,
  Radio,
  Gamepad2,
  MousePointer2,
  Monitor,
  Flame,
  Fingerprint
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

/**
 * @fileOverview المحراب الكلاسيكي v76.5 - THE RETRO COMMANDER: VB6 EDITION
 * واجهة تحاكي تصميم الفيجوال بيسك الكلاسيكي لعام 2026.
 * المالك الوحيد: المعتصم بالله ادريس الغزالي
 */
export default function ClassicHubPage() {
  const [mounted, setMounted] = React.useState(false)
  const [status, setStatus] = React.useState("Ready.")
  const [output, setOutput] = React.useState<string[]>([])
  const [target, setTarget] = React.useState("")

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const appendLog = (msg: string) => {
    setOutput(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev])
  }

  const handleExecute = async (action: string) => {
    if (!target && action !== 'system_audit') {
        toast({ variant: "destructive", title: "Missing Argument", description: "Target coordinate required." })
        return
    }
    setStatus("Executing...")
    appendLog(`Initiating ${action} on ${target || 'LOCAL_HIVE'}...`)
    
    try {
        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'smart_route', command: `${action} ${target}`, target: target })
        })
        const data = await response.json()
        if (data.success) {
            appendLog(`Consensus achieved: ${typeof data.output === 'string' ? data.output : 'Directive Finalized.'}`)
            setStatus("Success.")
        }
    } catch (e) {
        appendLog("Neural Link Interrupted.")
        setStatus("Error.")
    }
  }

  if (!mounted) return null

  return (
    <div className="flex min-h-screen bg-[#008080] text-black font-sans selection:bg-[#000080] selection:text-white">
      <SidebarNav />
      
      <main className="flex-1 lg:mr-72 p-4 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Main VB Window */}
        <div className="w-full max-w-6xl retro-outset flex flex-col shadow-[10px_10px_0px_rgba(0,0,0,0.5)]">
           <div className="retro-title-bar">
              <div className="flex items-center gap-2">
                 <Gamepad2 className="size-4" />
                 <span>Al-Mu'izz Sovereign Commander - [v76.5.0-Classic]</span>
              </div>
              <div className="flex gap-1">
                 <button className="retro-outset size-5 flex items-center justify-center hover:bg-[#d0d0d0] text-xs font-bold"><Minus className="size-3"/></button>
                 <button className="retro-outset size-5 flex items-center justify-center hover:bg-[#d0d0d0] text-xs font-bold"><Square className="size-3"/></button>
                 <button className="retro-outset size-5 flex items-center justify-center bg-[#c0c0c0] hover:bg-red-600 hover:text-white text-xs font-bold"><X className="size-3"/></button>
              </div>
           </div>

           {/* Toolbar */}
           <div className="p-1 border-b border-[#808080] flex gap-1 bg-[#c0c0c0]">
              <button onClick={() => handleExecute('system_audit')} className="retro-outset px-4 py-1 flex items-center gap-2 text-xs hover:bg-[#d0d0d0] active:retro-inset"><Save className="size-3"/> Audit</button>
              <button className="retro-outset px-4 py-1 flex items-center gap-2 text-xs hover:bg-[#d0d0d0] active:retro-inset"><FolderOpen className="size-3"/> Project</button>
              <div className="w-[1px] bg-[#808080] mx-1 h-6 self-center" />
              <button onClick={() => handleExecute('strike')} className="retro-outset px-4 py-1 flex items-center gap-2 text-xs hover:bg-[#d0d0d0] active:retro-inset"><Play className="size-3 text-green-700"/> Run</button>
              <button className="retro-outset px-4 py-1 flex items-center gap-2 text-xs hover:bg-[#d0d0d0] active:retro-inset text-red-700"><Skull className="size-3"/> Terminate</button>
           </div>

           <div className="flex-1 flex min-h-[600px]">
              {/* Toolbox - Left */}
              <div className="w-16 bg-[#c0c0c0] border-r border-[#808080] p-2 flex flex-col gap-2">
                 <div className="text-[9px] font-bold text-center mb-1 uppercase">Tools</div>
                 {[
                   { id: 'pointer', icon: MousePointer2 },
                   { id: 'network', icon: Network },
                   { id: 'terminal', icon: Terminal },
                   { id: 'phone', icon: Smartphone },
                   { id: 'radio', icon: Radio },
                   { id: 'database', icon: Database },
                   { id: 'search', icon: Search },
                   { id: 'flame', icon: Flame }
                 ].map(t => (
                   <button key={t.id} className="retro-outset size-10 flex items-center justify-center hover:bg-[#d0d0d0] active:retro-inset">
                      <t.icon className="size-5" />
                   </button>
                 ))}
              </div>

              {/* Form Workspace */}
              <div className="flex-1 bg-[#808080] p-10 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                 
                 {/* Internal Form Window */}
                 <div className="w-full max-w-2xl retro-outset flex flex-col shadow-2xl relative z-10">
                    <div className="bg-[#c0c0c0] p-1 border-b border-[#808080] flex justify-between items-center px-4">
                       <span className="text-xs font-bold">frmMainStrike</span>
                       <X className="size-3 cursor-pointer" />
                    </div>
                    <div className="p-8 space-y-8 bg-[#c0c0c0]">
                       <div className="space-y-2">
                          <label className="text-xs font-bold">Project Target (Coordinate):</label>
                          <Input 
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            className="retro-inset h-10 rounded-none border-2 text-blue-900 font-bold" 
                            placeholder="Enter IP / URL / @Identity"
                          />
                       </div>

                       <div className="grid grid-cols-2 gap-4">
                          <div className="retro-outset p-4 space-y-4">
                             <span className="text-[10px] font-bold block border-b border-[#808080] mb-2 uppercase">Siphon Vectors</span>
                             <button onClick={() => handleExecute('scrape')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">Social Siphon</button>
                             <button onClick={() => handleExecute('xlogger')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">Ocular Hub</button>
                             <button onClick={() => handleExecute('seeker')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">GPS Seeker</button>
                          </div>
                          <div className="retro-outset p-4 space-y-4">
                             <span className="text-[10px] font-bold block border-b border-[#808080] mb-2 uppercase">Material Control</span>
                             <button onClick={() => handleExecute('voice_hijack')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">Voice Hijack</button>
                             <button onClick={() => handleExecute('automation')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">Desktop Sync</button>
                             <button onClick={() => handleExecute('openbullet')} className="w-full retro-outset py-2 text-xs font-bold hover:bg-[#d0d0d0]">LoliCode Runner</button>
                          </div>
                       </div>

                       <div className="flex justify-end gap-2 pt-4">
                          <button onClick={() => setTarget("")} className="retro-outset px-8 py-2 text-xs font-bold hover:bg-[#d0d0d0] active:retro-inset">Clear</button>
                          <button onClick={() => handleExecute('ignite')} className="retro-outset px-12 py-2 text-xs font-bold hover:bg-[#d0d0d0] active:retro-inset border-2 border-blue-900 bg-primary/20">EXECUTE</button>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Property Grid - Right */}
              <div className="w-64 bg-[#c0c0c0] border-l border-[#808080] flex flex-col">
                 <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 px-3 text-[10px] font-bold uppercase">Properties - frmMain</div>
                 <div className="flex-1 overflow-y-auto bg-white border-b border-[#808080]">
                    <table className="w-full text-[10px]">
                       <tbody className="divide-y divide-[#f0f0f0]">
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold w-24">Version</td><td className="p-1">76.5.0</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Owner</td><td className="p-1">Al-Ghazali</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Status</td><td className="p-1">{status}</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Resonance</td><td className="p-1">100.000%</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Nodes</td><td className="p-1">24 knots</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Arsenal</td><td className="p-1">2865 tools</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">Stealth</td><td className="p-1">GHOST_V6</td></tr>
                          <tr><td className="bg-[#f0f0f0] p-1 font-bold">OS</td><td className="p-1">Kali Al-Mu'izz</td></tr>
                       </tbody>
                    </table>
                 </div>
                 {/* Project Explorer */}
                 <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 px-3 text-[10px] font-bold uppercase">Project Explorer</div>
                 <div className="flex-1 bg-white p-2 overflow-y-auto font-sans text-xs">
                    <div className="flex items-center gap-2"><FolderOpen className="size-3 text-yellow-600"/> Al-Mu'izz.vbp</div>
                    <div className="ml-4 flex items-center gap-2"><Monitor className="size-3 text-blue-600"/> Forms</div>
                    <div className="ml-8 flex items-center gap-2"><FileCodeIcon className="size-3"/> frmMainStrike</div>
                    <div className="ml-4 flex items-center gap-2"><Settings className="size-3 text-gray-600"/> Modules</div>
                    <div className="ml-8 flex items-center gap-2"><FileCodeIcon className="size-3"/> modSiphon</div>
                    <div className="ml-8 flex items-center gap-2"><FileCodeIcon className="size-3"/> modMaterial</div>
                 </div>
              </div>
           </div>

           {/* Debug Output - Bottom */}
           <div className="h-48 bg-[#c0c0c0] border-t border-[#808080] flex flex-col">
              <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 px-3 text-[10px] font-bold uppercase flex justify-between">
                 <span>Immediate / Debug Window</span>
                 <Terminal className="size-3" />
              </div>
              <div className="flex-1 bg-white m-1 retro-inset p-4 overflow-y-auto scrollbar-hide font-mono text-[11px] leading-tight">
                 {output.map((line, i) => (
                    <div key={i} className="mb-1">{line}</div>
                 ))}
                 {output.length === 0 && <div className="text-gray-400 italic">Awaiting execution trace...</div>}
              </div>
           </div>

           {/* Status Bar */}
           <div className="h-6 bg-[#c0c0c0] border-t border-[#ffffff] flex items-center px-4 text-[10px] gap-10">
              <div className="flex-1 border-r border-[#808080] pr-4">Status: {status}</div>
              <div className="w-32 border-r border-[#808080] pr-4">CPU: 0.01%</div>
              <div className="w-32">RAM: 142MB</div>
           </div>
        </div>

        {/* Global Banner Overlay */}
        <div className="mt-10 flex items-center gap-10 opacity-30 text-[10px] font-bold uppercase tracking-[1em] text-black">
           <Fingerprint className="size-4" /> GHAZALI_ROOT // CLASSIC_HUB_v76
        </div>

        <div className="absolute -bottom-20 -right-20 p-40 opacity-10 pointer-events-none scale-150 rotate-12">
           <Skull className="size-96 text-black" />
        </div>
      </main>
    </div>
  )
}

function FileCodeIcon({className}: {className?: string}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 12.5 8 15l2 2.5"/><path d="m14 12.5 2 2.5-2 2.5"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/></svg>
    )
}
