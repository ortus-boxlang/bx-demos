# 🚀 BoxLang Demos

Welcome to the BoxLang demos repository! Here you can find a collection of demos that showcase the capabilities of **BoxLang** - a modern dynamic JVM language. Each demo is self-contained and demonstrates specific features or use cases.

## 📖 Table of Contents

- [🎬 Getting Started](#-getting-started)
- [📜 Scripting & CLI Tools](#-scripting--cli-tools)
- [🌐 Web Applications](#-web-applications)
- [⚡ Quick Tips & Features](#-quick-tips--features)
- [☕ Java Interop](#-java-interop)
- [💡 Syntax Samples](#-syntax-samples)
- [🎯 IDE & Debugging](#-ide--debugging)
- [🔧 Miscellaneous](#-miscellaneous)

## 🎬 Getting Started

### File Extensions

- **`.bxs`** - BoxLang script files (run with `boxlang script.bxs`)
- **`.bx`** - BoxLang class files (CLI executables with `main()` method)
- **`.bxm`** - BoxLang markup/template files (HTML with embedded BoxLang)

### Running Examples

```bash
# Run a script
boxlang path/to/script.bxs

# Run a CLI class
boxlang ClassName.bx arg1 arg2

# Serve web apps
box server start  # or use boxlang-miniserver
```

## 📜 Scripting & CLI Tools

Located in `scripting/` - Command-line scripts and automation tools.

### 🤣 Dad Joke Fetcher (`DadJoke.bx`, `dadjoke.bxs`)

Fetches dad jokes from icanhazdadjoke.com API with search capability.

```bash
boxlang DadJoke.bx              # Random joke
boxlang DadJoke.bx programming  # Search for jokes
```

**Features**: HTTP requests, CLI argument parsing, JSON handling, error handling

### 🌤️ Weather Task (`weathertask.bx`)

Retrieves weather forecasts from Open-Meteo API.

**Features**: External API integration, scheduled tasks support

### 📱 Social Media Integration

- **BlueSky** (`bluesky.bx`, `test_bluesky*.bxs`) - Post to BlueSky with images
- **Mastodon** (`mastodon.bx`, `test_mastodon*.bxs`) - Post to Mastodon with media

**Features**: OAuth/JWT authentication, multipart form data, image uploads

### 📊 JIRA Integration (`jira.bx`)

Fetch and manage JIRA issues via REST API.

**Features**: Basic auth, API pagination, JSON parsing

### 📸 URL to PNG (`urlToPNG.bx`)

Convert URLs to PNG screenshots using Cloudflare's browser rendering API.

**Features**: Cloudflare API, base64 image handling, file I/O

### 🌙 Moon Phase (`moon.bxs`)

Calculate and display current moon phase information.

**Features**: Date calculations, astronomical algorithms

### 🔢 Roman Numerals (`romanToInt.bxs`, `romanSort.bxs`)

Convert and sort Roman numerals.

**Features**: String manipulation, custom sorting algorithms

### ⚙️ Task Scheduler (`Scheduler.bx`)

Enterprise-grade task scheduling with cron expressions, life-cycle events, and distributed locking.

**Features**: Cron scheduling, async execution, interceptors, error handling

### 📝 Query of Queries (`query-of-queries.bxs`)

Demonstrates SQL-like queries on in-memory datasets.

**Features**: QoQ, data manipulation

### 🔨 Shebang Script (`SheBang.sh`)

Executable BoxLang script using shebang.

```bash
#!/usr/bin/env boxlang
```

**Features**: Unix executable scripts, CLI integration

## 🌐 Web Applications

Located in `webapps/` - Full-featured web applications.

### 📝 Blog with ORM (`blogorm/`)

Complete blog application with database persistence using BoxLang ORM.

**Features**:

- MySQL database integration
- ORM entities with relationships (many-to-many)
- Lifecycle events (`preInsert`, `preUpdate`)
- URL rewriting
- Tag and post management
- CRUD operations

**Setup**:

```bash
cd webapps/blogorm
cp .env.example .env  # Configure MySQL credentials
box server start
```

### 📡 Server-Sent Events Demo (`sse/`)

Real-time streaming demo using Server-Sent Events (SSE).

**Features**:

- `sse()` BIF for streaming
- EventSource JavaScript API
- Bootstrap 5 UI with live progress tracking
- Event log with animations
- Start/Stop/Clear controls

### 💾 Cached API (`cachedapi/`)

Weather API with intelligent caching layer.

**Features**:

- `cache().getOrSet()` pattern
- 30-minute cache timeout
- External API integration
- Cache invalidation

### 📚 Comic Reader (`comicreader/`)

Web-based comic book reader.

**Features**: File system operations, image serving, navigation

### 😾 Grumpy Cat (`grumpycat/`)

Simple web app demonstrating basic BoxLang web features.

**Features**: Template rendering, static assets

### 📋 Log Viewer (`logviewer/`)

Real-time log file viewer for BoxLang applications.

**Features**: File watching, streaming, log parsing

### 🔐 OAuth Example (`oauth_example/`)

OAuth 2.0 authentication flow demonstration.

**Features**: OAuth integration, session management, secure tokens

### 🔄 URL Rewrite Demo (`rewritedemo/`)

Demonstrates URL rewriting and routing.

**Features**: Custom routing, SEO-friendly URLs

### 📰 Simple Blog (`simple_blog_1/`)

Minimalist blog implementation.

**Features**: Basic CRUD, file-based storage

### 🌍 CORS Demo (`corsdemo/`)

Cross-Origin Resource Sharing (CORS) examples.

**Features**: CORS headers, preflight requests

## ⚡ Quick Tips & Features

Located in `boxlang_quick_tips/` - Bite-sized feature demonstrations.

### 🤖 AI Integration (`ai/`)

ChatGPT, Gemini, and other AI provider integrations using `aiChat()` BIF.

```boxlang
answer = aiChat(
    messages="why are cats better than dogs?",
    options={
        provider:"gemini",
        apiKey:server.system.environment.GEMINI_API_KEY
    }
);
```

**Files**: `aiChat.bxs`, `aiChat_openai.bxs`, `aiChat2.bxs`, `aiService.bxs`

### 🌐 API via Class (`api_via_class/`)

Create RESTful APIs using BoxLang classes with `remote` functions.

```boxlang
remote array function getCats() {
    return [{ name: "Luna", age: 12 }];
}
```

**Access**: `api.bx?method=getCats`

### 🗄️ Database Queries (`database_query/`)

Database connectivity, queries, and ORM examples.

**Features**: JDBC connections, query execution, result handling

### 🖼️ Image Processing (`images/`)

Comprehensive image manipulation demos.

**Features**:

- Reading/writing images
- Resizing and cropping
- Watermarking
- Format conversion
- Thumbnail generation
- Image metadata extraction

**Files**: `image1.bxs`, `image2.bxs`, `image3.bxs`, `image_locate.bxs`

### 📄 JSON Operations (`json/`)

JSON parsing, serialization, and manipulation.

```boxlang
data = jsonDeserialize(jsonString);
jsonString = jsonSerialize(data);
```

**Files**: `test1.bxs` through `test4.bxs`

### 📧 Email Sending (`mail/`)

Send emails with HTML content, attachments, and templates.

**Features**:

- HTML email formatting
- Dynamic content generation
- SMTP configuration
- Multiple recipients

**Files**: `sendemail.bxs`, `sendemail2.bxs`, `sendemail3.bxs`, `sendemail4.bxs`

### 📝 Markdown Processing (`markdown/`)

Convert Markdown to HTML using BoxLang.

**Features**: Markdown parsing, HTML generation, template rendering

**Files**: `test.bxs`, `test2.bxs`, `test3.bxm`

### 📄 PDF Generation (`pdf/`)

Create PDFs from BoxLang templates.

**Features**:

- HTML to PDF conversion
- Dynamic content
- Styling and formatting
- Headers and footers

**Files**: `test1.bxm`, `test2.bxm`, `test3.bxm`

### 🗜️ ZIP Operations (`zip/`)

Create and extract ZIP archives.

**Features**:

- Create ZIP files from directories
- Extract ZIP archives
- File compression
- Archive manipulation

**Files**: `createZip.bxs`, `extractZip.bxs`, `extractZip2.bxs`, `zip.bxs`

## ☕ Java Interop

Located in `java-interop/` - Java integration examples.

### ⏰ Java Timer (`Timer.bx`)

Extend Java's `TimerTask` class in BoxLang.

```boxlang
class extends="java:java.util.TimerTask" {
    @overrideJava
    void function run() {
        println("Timer executed!");
    }
}
```

**Features**: Java class extension, `@overrideJava` annotation

### 🏃 Runnable (`Runnable.bx`)

Implement Java's `Runnable` interface.

**Features**: Interface implementation, threading

### 📑 Flexmark (`flexmark.bxs`, `flexmark2.bxs`)

Use Java's Flexmark library for advanced Markdown processing.

**Features**: External JAR usage, Java library integration

## 💡 Syntax Samples

Located in `syntax-samples/` - Language feature demonstrations.

### 💾 Caching (`cache1.bxs`, `cache2.bxs`, `cache4.bxs`)

BoxLang caching mechanisms and patterns.

```boxlang
myCache = cache();
result = myCache.getOrSet("key", () => {
    return expensiveOperation();
}, timeoutInSeconds);
```

### 🔀 Multi-threading (`multi_array.bxs`, `multi_http.bxs`)

Parallel execution and async operations.

**Features**: Thread pools, parallel HTTP requests, async/await patterns

### 🏗️ Classes (`MyClass.bx`, `MyStaticClass.bx`, `testStaticClass.bxs`)

OOP patterns, static methods, and class usage.

**Features**: Class definitions, static methods, instantiation

## 🎯 IDE & Debugging

Located in `ide/` - Development environment examples.

### 🐛 Debugging (`03.hello-debugger.bxs`)

Debug BoxLang applications.

**Features**: Breakpoints, variable inspection, step debugging

### 🔍 Diagnostics (`02.Diagnostics.bx`)

Runtime diagnostics and introspection.

**Features**: System info, runtime metadata

### 🎓 Main Class (`01.MainClass.bx`)

Basic CLI application structure.

```boxlang
function main(args) {
    println("Hello from CLI");
}
```

### 📦 Models (`models/Person.bx`)

Example domain models and data classes.

## 🔧 Miscellaneous

Located in `misc/` - Experimental and specialized demos.

### 🕷️ AgentQL (`agentql/`)

Web scraping using AgentQL - AI-powered web automation.

**Features**: HTML parsing, AI-driven scraping, data extraction

**Files**: `firsttest.bxs`, `blogtolistofarticles.bxs`

### 🔍 Algolia (`algolia/`)

Algolia search integration examples.

**Features**: Search API, indexing, full-text search

### 📅 Calendar (`calendar/`)

FullCalendar integration with BoxLang.

**Features**: Event management, calendar rendering, JSON API

**Files**: `events.bx`, `fullcalendar.html`, various `.bxm` files

### 📊 Charting Demos (`charting_demos/`)

Data visualization using charting libraries.

**Features**: Chart generation, dynamic data, multiple chart types

**Files**: `simple.bxm`, `simpler.bxm`, `datasource.bx`

### 👤 Gravatar (`gravatar.bxm`)

Display Gravatar images based on email addresses.

**Features**: MD5 hashing, external service integration

### 📖 Markdown to PDF (`md_to_pdf/`)

Convert Markdown files to PDF documents.

**Features**: Markdown processing, PDF generation, batch conversion

**Files**: `createBook.bxs`

### 🔌 Telnet (`telnet.bx`)

Telnet client implementation.

**Features**: Network sockets, TCP communication

### 🔢 Special Numbers (`specialnumbers.bxs`)

Mathematical number sequences and operations.

**Features**: Algorithms, number theory

## 🎓 Learning Resources

### Best Practices Demonstrated

- ✅ Modern lambda syntax: `items.filter(x => x.price > 10)`
- ✅ Safe navigation: `data?.results?.len()`
- ✅ Elvis operator: `args[1] ?: "default"`
- ✅ Environment variables: `getSystemSetting("ENV_VAR")`
- ✅ Tag-based HTTP: `bx:http` with `bx:httpparam`
- ✅ Proper error handling with try/catch
- ✅ ORM lifecycle events
- ✅ Caching patterns for performance

### Common BIFs Used

- `println()` - Console output
- `dump()` / `<bx:dump>` - Debug output
- `now()`, `dateFormat()`, `currencyFormat()` - Formatting
- `jsonSerialize()`, `jsonDeserialize()` - JSON handling
- `sleep()` - Delay execution
- `sse()` - Server-sent events
- `aiChat()` - AI integration
- `cache()` - Caching
- `CLIGetArgs()` - CLI arguments
- `imageRead()`, `imageWrite()` - Image processing

## 🤝 Contributing

Feel free to add your own demos! Each demo should:

1. Be self-contained in its directory
2. Include comments explaining key concepts
3. Have minimal external dependencies
4. Demonstrate a specific feature or pattern

## 📚 Documentation

- [BoxLang Documentation](https://boxlang.ortusbooks.com)
- [ColdBox Framework](https://coldbox.ortusbooks.com/)
- [CommandBox CLI](https://commandbox.ortusbooks.com/)
- [TestBox Testing](https://testbox.ortusbooks.com/)

## 📝 License

These demos are provided as educational examples for the BoxLang community.

---

Happy Coding with BoxLang! 🎉
