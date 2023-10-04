import { StreamingTextResponse } from "ai";

// IMPORTANT! Set the runtime to edge: https://vercel.com/docs/functions/edge-functions/edge-runtime
export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  // Check if the OPENAI_API_KEY is set, if not return 400
  if (!process.env.CYCLOPS_API_KEY || process.env.CYCLOPS_API_KEY === "") {
    return new Response(
      "Missing CYCLOPS_API_KEY – make sure to add it to your .env file.",
      {
        status: 400,
      },
    );
  }

  let { prompt } = await req.json();

  const response = await fetch(
    "https://xgg4923dx7.execute-api.us-west-2.amazonaws.com/prod/agents/call",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.CYCLOPS_API_KEY,
      },
      body: `{"agent": "metabase-agent", "user_input": "${prompt}"}`,
    },
  );

  console.log("============================", response.body);

  // Respond with the stream
  return new StreamingTextResponse(response.body);
}
