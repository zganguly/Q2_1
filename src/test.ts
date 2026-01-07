import { createApiResponse } from "./apiResponse";

// SUCCESS CASE
const success = createApiResponse({
  id: 1,
  name: "Gang"
});

if (success.success) {
  console.log("User name:", success.data.name);
}

// ERROR CASE
const failure = createApiResponse(
  null,
  "User not found"
);

if (!failure.success) {
  console.error("Error:", failure.error);
}
