export const getHour = (): string => {
    const date = new Date();
    return date.getHours().toString();
}