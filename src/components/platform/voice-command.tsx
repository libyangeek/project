
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Mic, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

/**
 * مكون التحكم الصوتي Whisper v43.0
 * يربط صوت القائد بالعقل الجمعي للمُعِزّ.
 */
export function VoiceCommand({ onCommand }: { onCommand: (text: string) => void }) {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    setSupported(!!SpeechRecognition);
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
      <div className="flex items-center gap-2 text-red-500 opacity-50 px-4 py-2 border border-red-500/20 rounded-xl">
        <AlertCircle className="size-4" />
        <span className="text-[10px] font-black uppercase italic">Voice_Link_Unsupported</span>
      </div>
    );
  }

  return (
    <Button 
      onClick={startListening} 
      disabled={listening}
      variant="outline"
      className={`h-28 md:h-40 rounded-2xl flex flex-col items-center justify-center gap-3 border-2 transition-all active:scale-95 group shadow-2xl relative overflow-hidden ${listening ? 'bg-primary/20 border-primary animate-pulse' : 'bg-magenta-600/10 border-magenta-500/30'}`}
    >
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
