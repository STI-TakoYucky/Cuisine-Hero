export const generateDescription = async () => {
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
              "Generate a short description of this recipe: Spaghetti with tomato sauce and basil.",
          },
        ],
      }),
    }
  );

  const result = await response.json();
  return result.choices?.[0]?.message?.content || "No response.";
};
