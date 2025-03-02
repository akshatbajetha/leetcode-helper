import { generateResponse } from "@/utils/actions";

export async function POST(req: Request) {
  return generateResponse(req);
}
