"use client"

import * as React from "react"
import { SidebarNav } from "@/components/platform/sidebar-nav"
import { 
  Network, 
  Database, 
  Zap, 
  Skull, 
  Activity, 
  Loader2, 
  Globe, 
  Binary,
  Crosshair,
  Camera,
  Mic,
  MessageSquare,
  Lock,
  Eye,
  EyeOff,
  Crown,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { manageShadowGrid } from "@/ai/flows/shadow-grid-management-flow"
import { cn } from "@/lib/utils"
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase'
import { collection } from 'firebase/firestore'

export default function ShadowGridPage() {
  const [harvesting, setHarvesting] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const [selectedNodeId, setSelectedNodeId] = React.useState<string | null>(null)
  
  const { user } = useUser()
  const db = useFirestore()
  const { toast } = useToast()

  const sessionsQuery = useMemoFirebase(() => {
    if (!db || !user?.uid) return null;
    return collection(db, 'users', user.uid, 'shadowSessions');
  }, [db, user?.uid]);
  
  const { data: sessions, isLoading } = useCollection(sessionsQuery);

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const handleHarvestAll = async () => {
    setHarvesting(true)
    try {
      const result = await manageShadowGrid({ 
        action: 'pegasus_protocol',
        taskDescription: "Total Digital Footprint Absorption."
      })
      toast({ title: "Grid Sync Complete", description: `Intelligence gained: ${result.neuralGain}` })
    } catch (err) {
      toast({ variant: "destructive", title: "Harvest Failed" })
    } finally {
      setHarvesting(false)
    }
  }

  if (!mounted) return null

  const activeNode = sessions?.find(s => s.id === selectedNodeId);

  return (
    <div className="flex min-h-screen bg-black text-white selection:bg-primary/30 overflow-hidden scanline-effect font-code">
      <SidebarNav />
      <main className="flex-1 lg:mr-80 p-6 md:p-12 relative bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)] overflow-y-auto min-h-screen scrollbar-hide flex flex-col">
        
        <header className="mb-16 flex flex-col xl:flex-row justify-between items-start relative z-10 animate-in fade-in slide-in-from-top-8 duration-1000 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary text-black border-none px-6 py-1.5 text-xs font-bold tracking-[0.4em] shadow-lg italic">SHADOW GRID v42.0</Badge>
              <span className="text-[11px] text-muted-foreground uppercase font-bold tracking-[0.8em] italic flex items-center gap-2">
                 <Crown className="size-4 text-primary" /> Global Infiltration Active
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-headline font-bold text-white mb-4 tracking-tighter italic uppercase gold-glow">Network Command</h2>
          </div>
          <Button onClick={handleHarvestAll} disabled={harvesting} className="bg-primary hover:bg-primary/80 text-black h-20 px-12 rounded-[2.5rem] shadow-3xl font-bold uppercase tracking-[0.6em] text-sm group transition-all duration-700 border-2 border-primary/50 active:scale-95 italic">
            {harvesting ? <Loader2 className="size-6 animate-spin mr-4" /> : <Sparkles className="size-6 mr-4 group-hover:scale-125 transition-transform" />}
            Global Siphon
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10 pb-32">
          <div className="lg:col-span-2 space-y-10">
             <Card className="kali-card border-primary/30 rounded-[3rem] overflow-hidden shadow-2xl border-2 bg-black/40">
                <CardHeader className="bg-primary/5 border-b border-primary/10 p-10">
                   <CardTitle className="text-3xl md:text-5xl text-white italic flex items-center gap-6 uppercase tracking-tighter font-bold">
                        <Binary className="size-10 text-primary animate-pulse" /> Live Nodes
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   {isLoading ? (
                     <div className="p-20 text-center"><Loader2 className="size-12 animate-spin text-primary inline" /></div>
                   ) : (
                     <div className="divide-y-2 divide-white/5">
                        {sessions?.map((session) => (
                          <div 
                            key={session.id} 
                            className={cn(
                              "p-10 hover:bg-primary/5 transition-all duration-700 group flex flex-col md:flex-row items-center justify-between cursor-pointer border-l-4 border-transparent gap-8",
                              selectedNodeId === session.id && "bg-primary/10 border-primary shadow-[inset_0_0_40px_rgba(212,175,55,0.1)]"
                            )}
                            onClick={() => setSelectedNodeId(session.id)}
                          >
                             <div className="flex items-center gap-8">
                                <div className="size-20 rounded-full bg-black border-2 border-white/10 flex items-center justify-center relative group-hover:border-primary transition-all duration-700 shadow-xl">
                                   <Skull className={cn("size-10 transition-all duration-700", session.status === 'ACTIVE' ? 'text-primary animate-pulse' : 'text-muted-foreground group-hover:text-primary')} />
                                </div>
                                <div>
                                   <div className="flex items-center gap-4 mb-2">
                                      <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight italic">{session.targetName}</span>
                                      <Badge variant="outline" className="text-[10px] border-primary/30 uppercase px-4 py-0.5 font-bold tracking-[0.2em] rounded-full">{session.platform}</Badge>
                                   </div>
                                   <div className="flex flex-wrap items-center gap-6 text-[11px] text-muted-foreground font-bold uppercase tracking-[0.2em] italic">
                                      <span className="flex items-center gap-2"><Globe className="size-4 text-primary/60" /> {session.ipAddress}</span>
                                      <span className="flex items-center gap-2 text-primary/80"><Crosshair className="size-4"/> {session.location}</span>
                                   </div>
                                </div>
                             </div>
                             <ChevronRight className="size-8 text-primary/40 group-hover:text-primary transition-all" />
                          </div>
                        ))}
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>

          <div className="space-y-10">
             <Card className="kali-card border-primary/40 bg-black/80 rounded-[4rem] overflow-hidden shadow-3xl border-4 group min-h-[600px]">
                <CardHeader className="p-10 border-b border-primary/20 bg-primary/5">
                   <CardTitle className="text-2xl md:text-4xl text-white flex items-center gap-6 uppercase tracking-[0.4em] italic font-bold gold-glow">
                      <Target className="size-10 text-primary animate-pulse" /> Intelligence
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-10 space-y-12">
                   {activeNode ? (
                     <div className="space-y-10 animate-in fade-in duration-700">
                        <div className="p-8 rounded-[3rem] bg-black border-4 border-primary/20 shadow-inner">
                           <h4 className="text-[12px] font-bold text-primary uppercase tracking-[0.6em] mb-6 border-b border-primary/10 pb-4 italic">Device Assets</h4>
                           <div className="space-y-4 text-lg italic">
                              <p>Contacts: {activeNode.assets?.contactsCount || 0}</p>
                              <p>Messages: {activeNode.assets?.messagesDumped ? "YES" : "NO"}</p>
                              <p>Camera: {activeNode.assets?.cameraAccess}</p>
                              <p>Mic: {activeNode.assets?.micAccess}</p>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-center opacity-20 gap-10 py-20">
                        <EyeOff className="size-20 text-primary" />
                        <span className="text-xl font-bold uppercase tracking-widest italic">Select a Node</span>
                     </div>
                   )}
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
