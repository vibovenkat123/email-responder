export type Prompt = {
  content: string;
  role: string;
};

export default function generatePrompt(
  numResponses: number,
  email: string
): Prompt[] {
  const instructionPrompt: Prompt = {
    content: `You are now an email
            responder tool. I will give you an email, and must envision you are the user,
            and state the ${numResponses} best responses you could give. Don't include the subject,
            just the body`,
    role: "user",
  };
  const userPrompt = {
    content: email,
    role: "user",
  };
  return [instructionPrompt, userPrompt];
}
