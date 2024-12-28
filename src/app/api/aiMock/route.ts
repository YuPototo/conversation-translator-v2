// visit localhost:3000/api/aiMock
export async function POST(request: Request) {
    const requestBody = await request.json()
    console.log(requestBody)

    // console.log(requestBody)

    // await for 1 second to simulate the delay of the real API
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    // const result = {
    //     isCorrect: true,
    // }

    // return new Response('A simulated error', {
    //     status: 400,
    // })

    const result = {
        isCorrect: false,
    }

    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' },
    })
}
