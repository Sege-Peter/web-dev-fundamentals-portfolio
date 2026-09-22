# Practical Lab 05: Async Fetch Developer Quotes

An asynchronous web component demonstrating modern `fetch()`, `async/await`, error boundaries with offline fallback resilience, and modern Clipboard APIs.

---

## 🎯 What Learners Will Master

1. **Async / Await with Fetch API**:
   - Making HTTP GET requests.
   - Checking `response.ok` before parsing JSON.
   - Using `finally {}` blocks to restore UI button states.
2. **Offline Graceful Degradation**:
   - Handling network failures gracefully by falling back to local dataset objects without crashing the app.
3. **Browser Clipboard API**:
   - Using `navigator.clipboard.writeText()` to provide native 1-click copying.
