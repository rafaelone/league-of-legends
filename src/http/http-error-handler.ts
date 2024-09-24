import { HTTPError } from 'ky'

type HttpErrorHandlerResponse = {
  message: string
  status: number
}

export async function httpErrorHandler(
  error: unknown,
): Promise<HttpErrorHandlerResponse> {
  if (error instanceof HTTPError) {
    const statusCode = error.response.status
    const errorMessage = await error.response.json()

    return { message: errorMessage.message, status: statusCode }
  } else if (error instanceof Error) {
    return { message: error.message, status: 401 }
  } else {
    return { message: 'Try again later!', status: 500 }
  }
}
