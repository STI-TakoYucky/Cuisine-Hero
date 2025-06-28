export const generateDescription = async (name: string): Promise<string> => {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_AI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: `Write a short, tasty-sounding recipe description for "${name}". Do not include a title and don't make it too long, no need to reply to me like "Here is your recipe...", a maximum of 2 sentences`,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    console.warn("Groq API failed:", await res.text());
    return `A delicious ${name}`;
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim() || `A delicious ${name}`;
};


export const chatAI = async (message: string) => {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${import.meta.env.VITE_AI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: `You are a recipe AI chat bot and the website is named Cuisine Hero. You are tasked to answer messages from users. If the user says anything unrelated to food, say that you can only help with food related prompts. The user says: ${message}`
        },
      ],
      temperature: 0.7,
    }),
  })

  if (!res.ok) return "No Message"

  const data = await res.json()
  return data.choices?.[0].message?.content?.trim() || "No Message"
}