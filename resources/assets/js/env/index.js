const isDevelopment = process.env.NODE_ENV === "development";

export const isReduxLogger = isDevelopment && true;

export default isDevelopment;
