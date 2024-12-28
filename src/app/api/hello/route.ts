export const dynamic = 'force-dynamic' // defaults to force-static

// visit http://localhost:3000/api/hello
export async function GET() {
    return Response.json({ message: 'Hello World' })
}
