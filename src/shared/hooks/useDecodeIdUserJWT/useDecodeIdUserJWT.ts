import jwt_decode from "jwt-decode";

interface DecodedToken {
    sub: string;
}

export const useDecodeIdUserJWT = (token: string) => {
    try {
        const decodedToken = jwt_decode<DecodedToken>(token);

        if (typeof decodedToken.sub !== 'string') {
            return 'Invalid token format';
        }

        return decodedToken.sub;
    } catch (error) {
        return 'Invalid token format';
    }
};
