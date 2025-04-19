export const badRequest = (res, message) => {
    res.status(400).json({
        message,
    });
}

export const sendResponse = (res, status, success, message, data = null) => {
    res.status(status).json({
        success,
        message,
        data,
    });
};

