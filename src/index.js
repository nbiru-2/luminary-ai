class ChatMessage extends HTMLElement {
  connectedCallback() {
    const sender = this.getAttribute("sender") || "ai";
    const text = this.innerHTML.trim();
    const isUser = sender === "user";

    this.innerHTML = `
      <div class="flex ${isUser ? "justify-end" : "justify-start"}">
        <div class="${
          isUser
            ? "bg-indigo-500 text-white"
            : "bg-slate-200 text-slate-900"
        } max-w-md rounded-2xl px-4 py-3 shadow-sm">
          ${text}
        </div>
      </div>
    `;
  }
}

customElements.define("chat-message", ChatMessage);
