export async function GET(req: Request) {
    console.log("Hello World API REQUEST");
    return Response.json({ message: 'Hello World' });
}