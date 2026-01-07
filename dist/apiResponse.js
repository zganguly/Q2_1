"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiResponse = createApiResponse;
function createApiResponse(data, error) {
    if (error) {
        return { success: false, error };
    }
    return { success: true, data };
}
