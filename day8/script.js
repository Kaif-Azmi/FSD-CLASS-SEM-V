// 🌐 1. Scope
function scopeTest() {
  if (true) {
    var x = "var scope";     // function-scoped
    let y = "let scope";     // block-scoped
    const z = "const scope"; // block-scoped
  }
  console.log(x); // ✅ works
  // console.log(y); // ❌ ReferenceError
  // console.log(z); // ❌ ReferenceError
}
scopeTest();


// 🔄 2. Re-declaration
var a = 1;
var a = 2; // ✅ allowed

let b = 3;
// let b = 4; // ❌ not allowed

const c = 5;
// const c = 6; // ❌ not allowed


// ♻️ 3. Re-assignment
var m = "Kaif";
m = "Azmi"; // ✅ allowed

let n = "OpenAI";
n = "ChatGPT"; // ✅ allowed

const o = "Fixed";
// o = "Changed"; // ❌ TypeError


// 🚀 4. Hoisting
console.log(p); // ✅ undefined (hoisted)
var p = 10;

try {
  console.log(q); // ❌ ReferenceError (TDZ)
  let q = 20;
}
catch (e) {
  console.log("let q error:", e.message);
}

try {
  console.log(r); // ❌ ReferenceError (TDZ)
  const r = 30;
}
catch (e) {
  console.log("const r error:", e.message);
}