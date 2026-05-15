# -*- coding: utf-8 -*-
from .base_node import BaseNode
import sys
import os

class LearningNode(BaseNode):
    """
    عقدة التعلم (Nursery): تحويل علم البيانات لأسلحة ذكاء اصطناعي.
    """
    def handle_event(self, event):
        etype = event["type"]
        data = event["data"]

        if etype == "ai_query":
            query = data.get("query")
            print(f"🧠 [LEARNING] Consulting God-Core for: {query}")
            # استدعاء خادم الاستدلال المادي
            from inference.server import call_ai
            response = call_ai(query)
            self.core.emit("ai_response", {"query": query, "response": response})

    def can_handle(self, cmd):
        return cmd in ["ai_query", "train", "evolve"]
