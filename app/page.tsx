import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Agent
      </h1>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🔐️"
      titleText="KeepKey Chat"
      placeholder="I'm an LLM interface to your KeepKey!"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
