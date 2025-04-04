export const generateMapURL = (address: string) => {
    if (!address) return "";
    const baseURL = "https://maps.google.com/maps";
    const params = new URLSearchParams({
        width: "100%",
        height: "600",
        hl: "pt",
        q: address,
        t: "",
        z: "18",
        ie: "UTF8",
        iwloc: "B",
        output: "embed",
    });
    return `${baseURL}?${params.toString()}`;
};
