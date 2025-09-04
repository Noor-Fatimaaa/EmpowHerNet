"use client";

import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; text: string }>>([]);

  function send() {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: "user", text: input }]);
    setInput("");
    // Placeholder: integrate with API later
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", text: "Thanks! I will help you find schemes." }]);
    }, 300);
  }

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-semibold mb-4">Chat</h1>
      <div className="border rounded-lg h-[60vh] p-3 overflow-y-auto bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-blue-600 text-white" : "bg-white border"}`}>
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type or speak your question..."
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <button onClick={send} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Send</button>
      </div>
    </main>
  );
}

