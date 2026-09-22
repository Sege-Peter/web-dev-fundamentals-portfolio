# Web Dev Fundamentals: Module 1 - How the Web Works & Developer Tools

Before writing code, understanding how the web transports data between computers and how browser rendering engines turn markup into interactive pixels is essential.

---

## 1. The Client-Server Architecture

The web is an architectural ecosystem of **Clients** (web browsers, mobile devices) and **Servers** (computers listening on the internet to serve files, APIs, and databases).

```text
┌─────────────────────────┐               HTTP Request                ┌─────────────────────────┐
│         CLIENT          │ ────────────────────────────────────────> │         SERVER          │
│   (Browser / Device)    │ <──────────────────────────────────────── │      (Nginx / Node)     │
└─────────────────────────┘        HTTP Response (HTML/CSS/JS)        └─────────────────────────┘
```

---

## 2. The Lifecycle of a Web Request

When you type `https://example.com/courses` in your browser address bar and press Enter:

### Step 1: URL Breakdown
A Uniform Resource Locator (URL) consists of:
```text
https://  subdomain.example.com :443  /courses/web-dev ?level=beginner #intro
└─────┘   └───────────────────┘ └──┘  └──────────────┘ └─────────────┘ └────┘
Protocol        Domain          Port        Path         Query Params   Hash
```

### Step 2: DNS Resolution (Domain Name System)
Computers communicate using IP addresses (e.g., `93.184.216.34`), not human-readable domain names.
1. Browser checks its local cache.
2. Checks Operating System cache (hosts file).
3. Queries your configured Recursive DNS Resolver (ISP or `8.8.8.8`).
4. Traverses Root Nameservers (`.`), TLD Nameservers (`.com`), and Authoritative Nameservers to retrieve the corresponding IP address.

### Step 3: Establishing the Connection (TCP & TLS)
- **TCP 3-Way Handshake**: Reliable connection setup: `SYN` ➔ `SYN-ACK` ➔ `ACK`.
- **TLS Handshake (HTTPS)**: Asymmetric cryptography generates a shared symmetric session key, ensuring encrypted data transmission.

### Step 4: HTTP Request & Response Cycle
The browser transmits an HTTP Request:
```http
GET /courses/web-dev HTTP/2
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
```
The server responds with an HTTP status code and payload:
```http
HTTP/2 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 4096

<!DOCTYPE html>
<html>...</html>
```

### Crucial HTTP Status Codes:
- **`2xx Success`**: `200 OK`, `201 Created`
- **`3xx Redirection`**: `301 Moved Permanently`, `304 Not Modified` (Cache hit)
- **`4xx Client Errors`**: `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`
- **`5xx Server Errors`**: `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`

---

## 3. How Browsers Render a Web Page

The critical rendering path converts raw bytes into rendered pixels:

1. **HTML Parsing ➔ DOM (Document Object Model)**: Converts HTML characters into tokens, then nodes, building the DOM tree.
2. **CSS Parsing ➔ CSSOM (CSS Object Model)**: Parses external CSS files and `<style>` blocks into rules attached to matching selectors.
3. **Render Tree Construction**: Combines DOM and CSSOM, filtering out invisible elements (e.g. `display: none` or `<head>`).
4. **Layout (Reflow)**: Calculates the exact geometric position, width, and height of every visible box relative to the viewport.
5. **Paint**: Fills in pixels (colors, borders, text, shadows).
6. **Compositing**: Flattens layers onto the screen via the GPU.

---

## 4. Modern Developer Tools (DevTools) Mastery

Press `F12` or `Ctrl + Shift + I` in Chrome / Edge / Firefox:

### 1. Elements Tab
- Inspect and modify live DOM nodes without reloading.
- Edit CSS rules in real time in the **Styles** pane.
- View computed box model dimensions (Margin, Border, Padding, Content).
- Inspect CSS Flexbox and Grid badges directly on layouts.

### 2. Console Tab
- Execute arbitrary JavaScript code interactively.
- Inspect errors, warnings (`console.warn`), and standard outputs (`console.log`, `console.table`).

### 3. Network Tab
- View all HTTP network requests made by the page (HTML, CSS, JS, images, API calls).
- Check HTTP status codes, headers, response payloads, and load times.
- Simulate slow mobile networks (Fast 3G / Slow 3G throttling) and toggle **Disable Cache**.

### 4. Application Tab
- Inspect and clear client-side storage:
  - `localStorage` (persistent key-value pairs).
  - `sessionStorage` (tab-scoped key-value pairs).
  - `Cookies` (credentials & tracking tokens).
