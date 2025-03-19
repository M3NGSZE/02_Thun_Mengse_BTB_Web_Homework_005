export const formatYear = (dt) => {
    const date = new Date(dt);
    const option = {
        year: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", option);
    return formattedDate;
};
