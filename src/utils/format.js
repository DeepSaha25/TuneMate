export const decodeHtml = (text) => {
    if (!text) return "";
    return new DOMParser().parseFromString(text, "text/html").body.textContent || "";
};
