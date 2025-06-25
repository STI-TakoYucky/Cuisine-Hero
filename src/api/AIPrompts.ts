export const generateDescription = async (name: string) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_AI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-small-3.2-24b-instruct:free",
        messages: [
          {
            role: "user",
            content:
              `Generate a short description of ${name}. Only generate the description with no title`,
          },
        ],
      }),
    }
  );

  const result = await response.json();
  return result.choices?.[0]?.message?.content || `The classic ${name}`;
};

export const chatAI = async (message: string) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: import.meta.env.VITE_AI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-small-3.2-24b-instruct:free",
        messages: [
          {
            role: "user",
            content:
              `You are a recipe AI chat bot and the website is named CuisineHero. You are tasked to answer messages from users. 
              If the user says anything unrelated to food, apologize and explain why you can not. The user says: ${message}`,
          },
        ],
      }),
    }
  );

  const result = await response.json();
  return result.choices?.[0]?.message?.content || `No Message`;
};