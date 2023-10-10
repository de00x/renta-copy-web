export const decodeFileBase64 = (base64String: string) => decodeURIComponent(
    atob(base64String)
        .split('')
        .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join(''),
);
