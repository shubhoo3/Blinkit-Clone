import jwt from 'jsonwebtoken'

const auth = (request, response, next) => {
    try {
        const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1]

        if (!token) {
            return response.status(401).json({
                message: "Provide token"
            })
        }

        const decode =  jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN)

        if (!decode) {
            return response.status(401).json({
                message: "unauthorized token access",
                error: true,
                success: false
            })
        }

        request.userId = decode.id

        next()

    }
    catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export default auth