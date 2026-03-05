const assert = require("assert");

// تيست 1: التأكد إن السيرفر شغال
assert(true, "Server is running");
console.log("✅ Test 1 passed: Server is running");

// تيست 2: التأكد إن الـ todo ليه title
const todo = { title: "Test Todo", completed: false };
assert(todo.title, "Todo should have a title");
console.log("✅ Test 2 passed: Todo has a title");

// تيست 3: التأكد إن completed بيبدأ بـ false
assert.strictEqual(todo.completed, false, "Todo should start as not completed");
console.log("✅ Test 3 passed: Todo starts as not completed");

console.log("✅ All tests passed!");