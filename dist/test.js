"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse_1 = require("./apiResponse");
// SUCCESS CASE
const success = (0, apiResponse_1.createApiResponse)({
    id: 1,
    name: "Gang"
});
if (success.success) {
    console.log("User name:", success.data.name);
}
// ERROR CASE
const failure = (0, apiResponse_1.createApiResponse)(null, "User not found");
if (!failure.success) {
    console.error("Error:", failure.error);
}
