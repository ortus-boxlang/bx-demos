# BoxLang Demos - AI Agent Instructions

This is a **BoxLang demonstration repository** showcasing the capabilities of BoxLang, a modern dynamic JVM language. Each directory contains self-contained examples demonstrating specific features.

## BoxLang Language Fundamentals

### File Extensions & Execution
- `.bxs` - BoxLang script files (run with `boxlang script.bxs`)
- `.bx` - BoxLang class files (classes, CLI executables with `main()` method)
- `.bxm` - BoxLang markup/template files (HTML with embedded BoxLang via `<bx:>` tags)
- Shebang scripts: Use `#!/usr/bin/env boxlang` for executable scripts (see `scripting/SheBang.sh`)

### Class Syntax Patterns
```boxlang
class {
    // Script execution entry point
    function main(args) {
        println("Hello from CLI");
    }

    // Web API endpoint (callable via URL: File.bx?method=methodName)
    remote function getData() {
        return { success: true };
    }
}
```

### Tag-Based Markup (`.bxm` files)
Use `<bx:>` prefix for BoxLang tags in markup:
```boxlang
<bx:output>
    <bx:script>
        data = { name: "BoxLang" }
    </bx:script>
    <h1>#data.name#</h1>
    <bx:dump var="#variables#">
</bx:output>
```

### HTTP Requests
BoxLang uses tag-based syntax for HTTP calls (not function syntax):
```boxlang
bx:http url="https://api.example.com" result="result" {
    bx:httpparam type="header" name="Accept" value="application/json";
    bx:httpparam type="body" value=jsonSerialize(data);
}
data = jsonDeserialize(result.fileContent);
```

## Project Structure

### Demo Categories
- **`scripting/`** - CLI scripts and automation (APIs, social media, schedulers)
- **`webapps/`** - Full web applications with `Application.bx` and routing
- **`boxlang_quick_tips/`** - Quick feature demonstrations (AI, mail, PDF, images, etc.)
- **`java-interop/`** - Java integration examples (extending classes, importing packages)
- **`ide/`** - IDE and debugging examples
- **`syntax-samples/`** - Language feature samples (caching, multi-threading, classes)

### Web Application Structure
Web apps follow this pattern:
```
webapp_name/
├── Application.bx       # App config (datasources, ORM, settings)
├── index.bxm            # Entry point
├── classes/             # Service layer classes
├── entities/            # ORM entity classes (if using ORM)
└── components/          # Reusable components
```

## Key Patterns & Conventions

### Application.bx Configuration
Application entry point with this-scoped settings:
```boxlang
class {
    this.name = "myapp";
    this.ormEnabled = true;  // Enable ORM
    this.ormSettings = { entityPaths = "entities", dbCreate: "update" };
    this.datasource = { driver: "mysql", host: "localhost", ... };

    function onApplicationStart() {
        application.myService = new classes.MyService();
    }
}
```

### ORM Entity Classes
```boxlang
class persistent="true" {
    property name="id" fieldtype="id" generator="increment";
    property name="title" type="string";
    property name="tags" fieldtype="many-to-many" class="tag" linktable="posts_tags";

    function preInsert(entity) { entity.setCreated(now()); }
}
```
See `webapps/blogorm/entities/` for complete examples.

### Remote API Methods
Call via URL: `ClassName.bx?method=methodName&param=value`
```boxlang
class {
    remote array function getCats() {
        return [{ name: "Luna", age: 12 }];
    }

    remote array function searchCats(required string name) {
        return getCats().filter(c => c.name == name);
    }
}
```

### Server-Sent Events (SSE)
Use the `sse()` BIF for streaming:
```boxlang
remote function getData() {
    sse(
        callback = (emit) => {
            emit.send(data = {...}, event = "eventName", id = 1);
            emit.close();
        },
        async = false,
        retry = 3000,
        keepAliveInterval = 15000,
        cors = "*"
    );
}
```
See `webapps/sse/` for complete implementation.

### Caching Pattern
```boxlang
myCache = cache();
result = myCache.getOrSet("key", () => {
    // Expensive operation
    return fetchData();
}, timeoutInSeconds);
```

### Modern BoxLang Features
- **Lambda syntax**: `items.filter(x => x.price > 10)`
- **Safe navigation**: `data?.results?.len()`
- **Elvis operator**: `args[1] ?: "default"`
- **Java interop**: `import java.time.Instant` then use `Instant.now()`
- **AI integration**: `aiChat(messages="...", options={provider:"gemini", apiKey:...})`
- **Environment variables**: `getSystemSetting("ENV_VAR")`

### Java Interop
Import and extend Java classes:
```boxlang
import java.time.Instant

class extends="java:java.util.TimerTask" {
    @overrideJava
    void function run() {
        println("Timer executed!");
    }
}
```

## Development Workflows

### Running Examples
- **Scripts**: `boxlang path/to/script.bxs`
- **CLI classes**: `boxlang ClassName.bx arg1 arg2`
- **Web apps**: Serve via web server, access via browser
- **Markup templates**: Serve `.bxm` files through BoxLang web support

### Testing Patterns
Not heavily demonstrated in this repo, but BoxLang supports TestBox BDD framework.

### Common Built-in Functions (BIFs)
- `println()` - Console output
- `dump()` / `<bx:dump>` - Debug output
- `now()`, `dateFormat()`, `currencyFormat()` - Formatting
- `jsonSerialize()`, `jsonDeserialize()` - JSON handling
- `sleep(ms)` - Delay execution
- `sse()` - Server-sent events streaming
- `aiChat()` - AI integration
- `cache()` - Caching interface
- `CLIGetArgs()` - CLI argument parsing

### Environment Setup
Many examples use environment variables accessed via `getSystemSetting()` or `server.system.environment`:
- Database credentials (MySQL: `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USERNAME`, `MYSQL_PWORD`)
- API keys (AI providers, Cloudflare, social media APIs)

## Notable Examples to Reference

- **SSE streaming**: `webapps/sse/` - Modern EventSource pattern with Bootstrap UI
- **ORM application**: `webapps/blogorm/` - Complete blog with entities, relationships, lifecycle events
- **API caching**: `webapps/cachedapi/` - Cache wrapper pattern for external APIs
- **CLI scripts**: `scripting/DadJoke.bx` - Argument parsing, HTTP calls, error handling
- **Java integration**: `java-interop/Timer.bx` - Extending Java classes with `@overrideJava`
- **Tag-based markup**: `miniserver/index.bxm` - Mixing BoxLang script and HTML
- **AI integration**: `boxlang_quick_tips/ai/` - Using aiChat() with various providers

## Documentation Resources

When encountering BoxLang-specific questions, search these documentation sources:
- BoxLang core language features and syntax
- ColdBox HMVC framework patterns (for web applications)
- CommandBox CLI tools (for package management and servers)
- TestBox BDD testing framework
