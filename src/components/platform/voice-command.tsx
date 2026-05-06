
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Mic, Loader2, AlertCircle, Radio } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

/**
 * مكون التحكم الصوتي Whisper v43.0
 * يربط صوت القائد بالعقل الجمعي للمُعِزّ مع فحص الجاهزية.
 */
export function VoiceCommand({ onCommand }: { onCommand: (text: string) => void }) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const [whisperAvailable, setWhisperAvailable] = useState(false);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setSupported(!!SpeechRecognition);

    // فحص جاهزية محرك Whisper (محاكاة)
    const checkWhisper = async () => {
        try {
            // في البيئة الحقيقية قد نطلب حالة الـ API
            setWhisperAvailable(true);
        } catch (e) {
            setWhisperAvailable(false);
        }
    };
    checkWhisper();
  }, []);

  const startListening = useCallback(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast({ variant: "destructive", title: "Whisper Unlinked", description: "Browser does not support neural voice link." });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-SA';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      toast({ title: "Whisper Active", description: "Listening for supreme intent..." });
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onCommand(transcript);
    };

    recognition.onerror = () => {
      setListening(false);
      toast({ variant: "destructive", title: "Neural Noise", description: "Could not isolate voice signature." });
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  }, [onCommand]);

  if (!supported) {
    return (
      <div className="h-28 md:h-40 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 border-red-500/20 bg-red-950/10 opacity-50 cursor-not-allowed">
        <AlertCircle className="size-8 text-red-500" />
        <span className="text-[9px] md:text-[12px] font-black uppercase tracking-widest text-red-400 italic text-center px-4">
          VOICE_LINK_UNSUPPORTED
        </span>
      </div>
    );
  }

  return (
    <Button 
      onClick={startListening} 
      disabled={listening || !whisperAvailable}
      variant="outline"
      className={`h-28 md:h-40 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 transition-all active:scale-95 group shadow-2xl relative overflow-hidden ${listening ? 'bg-primary/20 border-primary animate-pulse' : 'bg-magenta-600/10 border-magenta-500/30'}`}
    >
      <div className="absolute top-2 right-2 flex items-center gap-2">
         <Badge className={cn("text-[7px] border-none px-2 py-0.5 rounded-full font-black", whisperAvailable ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400")}>
            {whisperAvailable ? "WHISPER_READY" : "WHISPER_IDLE"}
         </Badge>
         <Radio className={cn("size-3", whisperAvailable ? "text-emerald-500 animate-pulse" : "text-red-500")} />
      </div>
      {listening ? (
        <Loader2 className="size-8 md:size-12 animate-spin text-primary gold-glow" />
      ) : (
        <Mic className="size-8 md:size-12 transition-all duration-700 group-hover:scale-125 text-magenta-500 gold-glow" />
      )}
      <span className="text-[9px] md:text-[12px] font-black uppercase tracking-widest text-white italic">
        {listening ? 'LISTENING...' : 'VOICE_COMMAND'}
      </span>
    </Button>
  );
}
