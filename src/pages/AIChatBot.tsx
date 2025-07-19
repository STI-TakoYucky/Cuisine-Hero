import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MessageList,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import type { MessageProps } from "@/types";
import { chatAI } from "@/api/AIPrompts";
import { marked } from "marked";
import { useSearchParams } from "react-router";

export default function AIChatBot() {
  const [singleMessage, setSingleMessage] = useState<string>("")  
  const [isTyping, setTyping] = useState(false)
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      message: "How can I help you? 🍴",
      direction: "incoming",
      position: "single",
    },
  ]);

    const [searchQuery] = useSearchParams()
    const queryParams = searchQuery.get("q");
    
    useEffect(() => {
        const sendMessagePrompt = async () => {
            if(!queryParams) return 

            setMessages((prev) => [
                ...prev,
                {
                message: queryParams,
                direction: "outgoing",
                position: "single",
                },
            ])
            
            setTyping(true)
            const response = await chatAI(singleMessage || queryParams)

        
            if (response != "No Message") {
                setMessages((prev) => [
                ...prev,
                {
                message: response,
                direction: "incoming",
                position: "single",
                },
             ]);
             setTyping(false)
            } else if (response == "No Message") {
                setMessages((prev) => [
                ...prev,
                {
                message: "This feature is currently not available at the moment due to high traffic. Please try again later.",
                direction: "incoming",
                position: "single",
                },
             ]);
             setTyping(false)
            }
        }

        sendMessagePrompt()
    }, [])

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        setSingleMessage("")
        if (singleMessage?.trim()) {
            setMessages((prev) => [
                ...prev,
                {
                message: singleMessage,
                direction: "outgoing",
                position: "single",
                },
            ]);

            setTyping(true)
            const response = await chatAI(singleMessage)

        
            if (response != "No Message") {
                setMessages((prev) => [
                ...prev,
                {
                message: response,
                direction: "incoming",
                position: "single",
                },
             ]);
             setTyping(false)
            } else if (response == "No Message") {
                setMessages((prev) => [
                ...prev,
                {
                message: "This feature is currently not available at the moment due to high traffic. Please try again later.",
                direction: "incoming",
                position: "single",
                },
             ]);
             setTyping(false)
            }
        }
      }
    };

  return (
    <main>
      <Header></Header>
      <div className="w-full max-w-5xl h-screen mx-auto global-responsive-margin flex flex-col pt-[5rem] sm:pt-[8rem] pb-[1rem]">
        {/* Chat messages */}
        <div className="flex-1 overflow-hidden">
          <MessageList className="h-">
            {
                messages.map((mess: MessageProps, index: number) => {
                    return (
                        <Message
                            key={index}
                            model={{
                                direction: mess.direction as "incoming" | "outgoing",
                                position: mess.position as "single" | "first" | "normal" | "last",
                            }}
                            >
                            <Message.CustomContent>
                               <div className="text-sm leading-tight m-0 p-0 whitespace-pre-line">
                                    <p
                                        className="m-0 p-0 text-base/7 font-body-font text-dark"
                                        dangerouslySetInnerHTML={{ __html: marked.parseInline(mess.message.trim()) }}
                                    />
                                </div>

                            </Message.CustomContent>
                        </Message>
                    )
                })
            }
          </MessageList>

        </div>

        <div className="px-3 py-5">
          <div className="flex gap-2 flex-col items-start">
            { isTyping && <TypingIndicator content="CuisineHeroAI is typing" />}
            <input
              type="text"
              value={singleMessage}
              placeholder="What's on your mind?"
              className="flex-1 w-full px-4 py-2 border text-dark rounded-full border-dark focus:outline-none focus:ring-2 focus:ring-dark"
              onChange={(e) => setSingleMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
