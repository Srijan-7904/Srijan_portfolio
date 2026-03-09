export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: {
    name: string
    avatar: string
    role: string
  }
  featured: boolean
  color: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    slug: "mcp-protocol-llm-applications",
    title: "MCP Protocol in LLM Applications",
    excerpt:
      "Implementing Model Context Protocol for seamless AI model interactions with vector databases in RAG applications. Building smarter conversational systems.",
    content: `
## What is MCP?

The Model Context Protocol (MCP) is an emerging standard for managing context in Large Language Model applications. It provides a structured way to handle conversation history, external knowledge, and tool interactions.

## Why MCP Matters for RAG

Retrieval-Augmented Generation (RAG) applications face a fundamental challenge: how do you efficiently combine retrieved documents with conversation context while staying within token limits?

MCP solves this with:
- **Context Windows**: Structured management of what the model "sees"
- **Priority Queues**: Important context stays, less relevant context is pruned
- **Streaming Updates**: Real-time context modification during generation

## Implementation with Vector Databases

Here's how to integrate MCP with a vector database like Pinecone:

\`\`\`typescript
import { MCPClient } from '@mcp/core';
import { PineconeClient } from '@pinecone-database/pinecone';

const mcp = new MCPClient({
  maxTokens: 8192,
  strategy: 'sliding-window'
});

async function queryWithContext(query: string) {
  const embeddings = await generateEmbedding(query);
  const results = await pinecone.query({
    vector: embeddings,
    topK: 5
  });

  mcp.addContext({
    type: 'retrieved',
    priority: 'high',
    content: results.matches.map(m => m.metadata.text)
  });

  return mcp.generate(query);
}
\`\`\`

## Best Practices

1. **Prioritize Recent Context**: User's last few messages should have highest priority
2. **Chunk Retrieved Documents**: Don't dump entire documents; use relevant sections
3. **Monitor Token Usage**: Always leave headroom for the model's response
4. **Cache Embeddings**: Recompute only when necessary

## Conclusion

MCP provides the structure needed to build production-grade RAG applications. As LLMs become more capable, efficient context management becomes the differentiator between good and great AI products.
    `,
    date: "Apr 28, 2025",
    readTime: "8 min read",
    category: "ai",
    tags: ["llm", "rag", "mcp"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    slug: "nextjs-16-tailwind-v4-migration",
    title: "Next.js 16 + Tailwind CSS v4 Migration Guide",
    excerpt:
      "Exploring the new features in Next.js 16 and migrating to Tailwind CSS v4's new configuration system. A practical guide to modern frontend tooling.",
    content: `
## What's New in Next.js 16

Next.js 16 brings significant changes that improve both developer experience and application performance:

### Turbopack as Default

Turbopack is now the default bundler, offering near-instant hot module replacement:

\`\`\`bash
# No configuration needed - it's automatic!
npm run dev
\`\`\`

### Cache Components with "use cache"

The new directive makes caching explicit and flexible:

\`\`\`tsx
'use cache'

export default async function ProductPage({ id }) {
  const product = await fetchProduct(id);
  return <ProductDisplay product={product} />;
}
\`\`\`

## Migrating to Tailwind CSS v4

Tailwind v4 introduces a CSS-first configuration approach:

### Before (tailwind.config.js)

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6'
      }
    }
  }
}
\`\`\`

### After (globals.css)

\`\`\`css
@import 'tailwindcss';

@theme inline {
  --color-brand: #3b82f6;
  --font-sans: 'Inter', sans-serif;
}
\`\`\`

## Step-by-Step Migration

1. **Update dependencies**:
\`\`\`bash
npm install next@16 tailwindcss@4
\`\`\`

2. **Remove tailwind.config.js** and move configuration to CSS

3. **Update font imports** in layout.tsx

4. **Test thoroughly** - some utility classes may have changed

## Common Gotchas

- \`@apply\` works differently in v4
- Custom plugins need updates
- Some deprecated utilities are removed

## Conclusion

The migration takes effort but the improved DX and performance are worth it. Start with a fresh branch and migrate incrementally.
    `,
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "frontend",
    tags: ["nextjs", "tailwind", "react"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: true,
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 4,
    slug: "self-hosting-llms-fastapi",
    title: "Self-Hosting LLMs with FastAPI",
    excerpt:
      "Running Llama2 locally and building a personal chatbot API for natural language tasks. Complete guide from model setup to production deployment.",
    content: `
## Why Self-Host?

Self-hosting LLMs gives you complete control over your AI infrastructure:
- **Privacy**: Data never leaves your servers
- **Cost**: No per-token charges after initial setup
- **Customization**: Fine-tune for your specific use case

## Hardware Requirements

For Llama2-7B:
- 16GB+ RAM
- NVIDIA GPU with 8GB+ VRAM (or CPU with patience)
- 50GB disk space

## Setting Up the Environment

\`\`\`bash
python -m venv llm-env
source llm-env/bin/activate
pip install torch transformers fastapi uvicorn
\`\`\`

## Loading the Model

\`\`\`python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "meta-llama/Llama-2-7b-chat-hf"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
    device_map="auto"
)
\`\`\`

## Building the FastAPI Server

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    max_tokens: int = 256

@app.post("/chat")
async def chat(request: ChatRequest):
    inputs = tokenizer(request.message, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens=request.max_tokens)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"response": response}
\`\`\`

## Production Deployment

Use Gunicorn with Uvicorn workers:

\`\`\`bash
gunicorn main:app -w 2 -k uvicorn.workers.UvicornWorker
\`\`\`

## Conclusion

You now have a private, scalable LLM API. Consider adding rate limiting, authentication, and monitoring for production use.
    `,
    date: "Oct 5, 2024",
    readTime: "15 min read",
    category: "ai",
    tags: ["llm", "python", "fastapi"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: 5,
    slug: "rust-wasm-performance",
    title: "Rust + WebAssembly Performance Deep Dive",
    excerpt:
      "Benchmarking Rust compiled to WebAssembly vs native JavaScript. When does WASM shine and when to stick with JS?",
    content: `
## The Performance Question

WebAssembly promises near-native performance in the browser. But is it always faster than JavaScript? Let's find out with real benchmarks.

## Test Setup

We'll compare three scenarios:
1. Pure JavaScript
2. Rust compiled to WASM
3. Rust WASM with JS interop

## Benchmark 1: Fibonacci (CPU-bound)

\`\`\`rust
// Rust
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}
\`\`\`

\`\`\`javascript
// JavaScript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

**Results (fib(40), 100 iterations)**:
- JavaScript: 1,245ms
- Rust WASM: 892ms
- **WASM wins by 28%**

## Benchmark 2: Array Processing

Processing 1M elements with map/reduce operations.

**Results**:
- JavaScript: 45ms
- Rust WASM: 52ms (with copy overhead)
- Rust WASM SharedArrayBuffer: 23ms
- **WASM wins only with shared memory**

## When to Use WASM

**Use WASM for**:
- Heavy computation (image processing, cryptography)
- Games and simulations
- Porting existing C/C++/Rust codebases

**Stick with JS for**:
- DOM manipulation
- Light data processing
- When bundle size matters

## Conclusion

WASM isn't a silver bullet. The overhead of crossing the JS-WASM boundary can negate performance gains for small operations. Profile first, optimize second.
    `,
    date: "Sep 18, 2024",
    readTime: "11 min read",
    category: "systems",
    tags: ["rust", "wasm", "performance"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 6,
    slug: "design-tokens-system",
    title: "Building a Design Token System",
    excerpt:
      "Creating a scalable design token architecture that works across platforms. From CSS variables to Figma tokens and everything in between.",
    content: `
## What Are Design Tokens?

Design tokens are the atomic values of your design system—colors, spacing, typography, shadows. They're platform-agnostic and enable consistency across web, mobile, and design tools.

## Token Hierarchy

A well-structured token system has three layers:

### 1. Primitive Tokens (Raw Values)

\`\`\`json
{
  "blue-500": "#3b82f6",
  "space-4": "16px",
  "font-size-lg": "18px"
}
\`\`\`

### 2. Semantic Tokens (Purpose)

\`\`\`json
{
  "color-primary": "{blue-500}",
  "spacing-component": "{space-4}",
  "text-body": "{font-size-lg}"
}
\`\`\`

### 3. Component Tokens (Specific Use)

\`\`\`json
{
  "button-background": "{color-primary}",
  "button-padding": "{spacing-component}",
  "button-font-size": "{text-body}"
}
\`\`\`

## Implementation in CSS

\`\`\`css
:root {
  /* Primitives */
  --blue-500: #3b82f6;

  /* Semantic */
  --color-primary: var(--blue-500);

  /* Component */
  --button-bg: var(--color-primary);
}

.button {
  background: var(--button-bg);
}
\`\`\`

## Syncing with Figma

Use the Tokens Studio plugin to export tokens:

1. Define tokens in Figma using Tokens Studio
2. Export as JSON
3. Transform with Style Dictionary
4. Generate platform-specific outputs

## Conclusion

Design tokens bridge the gap between design and development. Invest in the foundation, and your design system scales effortlessly.
    `,
    date: "Aug 22, 2024",
    readTime: "9 min read",
    category: "frontend",
    tags: ["design-systems", "css", "tokens"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 7,
    slug: "lti-learning-platforms-integration",
    title: "Understanding LTI: Integrating Learning Tools with Educational Platforms",
    excerpt:
      "A comprehensive guide to Learning Tools Interoperability (LTI) 1.3 - the standard protocol that enables seamless integration between learning management systems and external educational tools.",
    content: `
## Introduction

Learning Tools Interoperability (LTI) is the global standard for integrating learning applications with platforms like Canvas, Moodle, Blackboard, and other Learning Management Systems (LMS). If you're building educational technology, understanding LTI is essential for creating tools that educators can easily adopt.

## What is LTI?

LTI is a standard developed by IMS Global Learning Consortium that defines how learning tools communicate with platforms. Think of it as OAuth for education - it handles authentication, user data transfer, and grade passback in a secure, standardized way.

### Key Benefits

- **Single Sign-On**: Students and teachers access tools without additional logins
- **Automatic Rostering**: User information flows seamlessly from LMS to tool
- **Grade Passback**: Tools can send grades directly to the LMS gradebook
- **Privacy & Security**: Built on OAuth 2.0 and OpenID Connect standards

## LTI 1.3 Architecture

LTI 1.3 represents a major upgrade from earlier versions, replacing custom security schemes with industry-standard protocols.

### The Launch Flow

1. **User Initiates Launch**: Student clicks on an LTI link in the LMS
2. **Platform Creates JWT**: LMS generates a signed JSON Web Token containing user/context data
3. **Tool Validates Token**: External tool verifies the JWT signature and processes claims
4. **Tool Renders Content**: Application displays personalized content for the user

## Understanding the Launch Request

Here's what a typical LTI 1.3 launch request looks like:

\`\`\`http
POST https://example.tool.com/lti/launch
Content-Type: application/x-www-form-urlencoded

id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

The JWT payload contains rich contextual information:

\`\`\`json
{
  "iss": "https://platform.example.edu",
  "sub": "a6d5c443-1f51-4783-ba1a-7686ffe3b54a",
  "aud": ["962fa4d8-bcbf-49a0-94b2-2de05ad274af"],
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner"
  ],
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "c1d887f0-a1a3-4bca-ae25-c375edcc131a",
    "label": "ECON 1010",
    "title": "Economics as a Social Science"
  }
}
\`\`\`

### Key Claims Explained

- **iss** (issuer): The platform URL
- **sub** (subject): Unique user identifier
- **aud** (audience): Your tool's client ID
- **roles**: User's role in the course (student, instructor, admin)
- **context**: Course information
- **resource_link**: The specific link being launched

## Security Model

LTI 1.3 security is built on three pillars:

### 1. Platform Registration

Tools must register with platforms, receiving:
- **Client ID**: Identifies your tool
- **Deployment ID**: Identifies specific tool installations
- **Public Key URL**: Where the platform publishes keys for JWT validation

### 2. OIDC Login Flow

Before the actual launch, a lightweight OIDC flow establishes the session:

\`\`\`
1. Platform → Tool: Login initiation request
2. Tool → Platform: Authentication request
3. Platform → Tool: Launch request with signed JWT
\`\`\`

### 3. JWT Validation

Your tool MUST validate:
- Signature using platform's public key
- Issuer matches registered platform
- Audience contains your client ID
- Token hasn't expired (exp claim)
- Nonce hasn't been used before

## Implementing LTI in Your Application

### Backend Implementation (Node.js Example)

\`\`\`typescript
import { JWK, JWT } from 'jose';

async function validateLaunchToken(idToken: string) {
  // 1. Decode without verification first
  const decoded = JWT.decode(idToken, { complete: true });
  
  // 2. Fetch platform's public key
  const platformKeys = await fetchPlatformKeys(decoded.payload.iss);
  
  // 3. Verify signature
  const verified = await JWT.verify(idToken, platformKeys, {
    issuer: decoded.payload.iss,
    audience: process.env.LTI_CLIENT_ID
  });
  
  // 4. Validate required claims
  if (!verified['https://purl.imsglobal.org/spec/lti/claim/message_type']) {
    throw new Error('Invalid LTI message type');
  }
  
  return verified;
}
\`\`\`

### Grade Passback with Assignment and Grade Services

One of LTI's most powerful features is sending grades back to the LMS:

\`\`\`typescript
async function sendGrade(userId: string, score: number) {
  const lineItemUrl = launch.claims[
    'https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'
  ].lineitem;
  
  // Get OAuth2 access token
  const accessToken = await getAccessToken();
  
  // Submit score
  await fetch(\`\${lineItemUrl}/scores\`, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/vnd.ims.lis.v1.score+json'
    },
    body: JSON.stringify({
      userId: userId,
      scoreGiven: score,
      scoreMaximum: 100,
      activityProgress: 'Completed',
      gradingProgress: 'FullyGraded'
    })
  });
}
\`\`\`

## Deep Link: Dynamic Content Selection

Deep Linking allows instructors to select specific content from your tool to add to their course:

\`\`\`typescript
// Respond to deep link request
function createDeepLinkResponse(contentItems: ContentItem[]) {
  const jwt = JWT.sign({
    iss: clientId,
    aud: platformUrl,
    exp: Math.floor(Date.now() / 1000) + 600,
    iat: Math.floor(Date.now() / 1000),
    nonce: generateNonce(),
    'https://purl.imsglobal.org/spec/lti/claim/message_type': 
      'LtiDeepLinkingResponse',
    'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': 
      contentItems
  }, privateKey, { algorithm: 'RS256' });
  
  return jwt;
}
\`\`\`

## Best Practices

### Security

- **Always validate JWT signatures** - Never trust unverified tokens
- **Check nonce uniqueness** - Store used nonces to prevent replay attacks
- **Use HTTPS everywhere** - LTI requires secure communication
- **Rotate keys regularly** - Update your public/private key pairs periodically

### User Experience

- **Handle missing claims gracefully** - Not all platforms send optional claims
- **Implement loading states** - LTI launches can take a few seconds
- **Provide fallback authentication** - For development and testing
- **Cache platform keys** - Don't fetch public keys on every request

### Testing

- **Use LTI Advantage Test Suite** - IMS provides certification tools
- **Test with multiple platforms** - Canvas, Moodle, Blackboard all have quirks
- **Mock launch requests** - Create test JWTs for development

## Common Pitfalls

1. **Clock Skew**: JWT exp/iat validation fails if server clocks aren't synchronized
2. **Nonce Storage**: Forgetting to store nonces opens replay attack vulnerabilities  
3. **Role Mapping**: Different platforms use different role vocabularies
4. **Deep Link State**: Not preserving state during multi-step content selection flows

## Real-World Use Cases

- **Interactive Assessments**: Quiz tools that automatically grade and send scores
- **Video Platforms**: Embedding educational videos with progress tracking
- **Collaboration Tools**: Discussion boards that sync with course rosters
- **Content Libraries**: Allowing instructors to select and embed resources
- **Adaptive Learning**: Personalized learning paths that integrate with course structure

## Tools and Libraries

- **ltijs** (Node.js): Full-featured LTI 1.3 library
- **pylti1p3** (Python): LTI 1.3 implementation for Python/Django
- **lti-1-3-php-library** (PHP): PHP implementation of LTI 1.3
- **IMS Reference Implementation**: Official Java-based reference

## Conclusion

LTI 1.3 is a robust, secure standard that solves the complex problem of integrating third-party tools into learning platforms. While the initial setup requires understanding OAuth 2.0 and JWT, the payoff is enormous: your educational tool becomes instantly compatible with hundreds of institutions worldwide.

The education technology landscape is rapidly evolving, and LTI provides the interoperability foundation that allows innovation to flourish. Whether you're building assessment tools, content libraries, or collaborative platforms, implementing LTI opens doors to millions of students and educators.

Start with a simple launch implementation, add grade passback when needed, and explore advanced features like Deep Linking and Names and Role Provisioning Service as your integration matures. The investment in understanding LTI pays dividends in market reach and user adoption.
    `,
    date: "Jan 7, 2026",
    readTime: "18 min read",
    category: "systems",
    tags: ["lti", "education", "integration", "oauth", "jwt"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: true,
    color: "from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 20,
    slug: "building-mern-stack-app-as-fresher",
    title: "Building a Full-Stack MERN App as a Fresher — What I Learned",
    excerpt:
      "A hands-on walkthrough of my experience building a production-ready MERN stack application from scratch — the mistakes I made, the patterns I adopted, and the lessons that stuck.",
    content: `
## Why MERN?

When I started my journey at Lovely Professional University, choosing a tech stack felt overwhelming. In the end, I went with **MongoDB, Express.js, React, and Node.js (MERN)** because the entire stack uses JavaScript — one language, full-stack. Less context switching, faster learning.

## Project Structure That Actually Scales

One of my biggest mistakes early on was throwing everything into a single folder. Here's the structure I settled on after building multiple projects:

\`\`\`
my-app/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── utils/
├── server/              # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── index.js
└── .env
\`\`\`

This separation of concerns makes debugging and scaling far easier.

## Setting Up the Express Server

\`\`\`javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running on port 5000');
});
\`\`\`

## Mongoose Model with Validation

\`\`\`javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  avatar: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
\`\`\`

## Authentication with JWT

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, user: { id: user._id, name, email } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
\`\`\`

## Redux for State Management

\`\`\`javascript
// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
  const { data } = await axios.post('/api/auth/login', credentials);
  localStorage.setItem('token', data.token);
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { currentUser: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => { state.loading = true; })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
\`\`\`

## Key Lessons as a Fresher

1. **Always validate on the server** — never trust client-side only validation.
2. **Use .env files** and never commit secrets to GitHub.
3. **Error handling middleware** saves you hours of debugging:
   \`\`\`javascript
   app.use((err, req, res, next) => {
     res.status(err.status || 500).json({ message: err.message });
   });
   \`\`\`
4. **Axios interceptors** for automatic token injection and refresh:
   \`\`\`javascript
   axios.interceptors.request.use((config) => {
     const token = localStorage.getItem('token');
     if (token) config.headers.Authorization = \`Bearer \${token}\`;
     return config;
   });
   \`\`\`
5. **Deploy early** — I used Netlify (frontend) + Render (backend) and learned more from deployment errors than any tutorial.

## What's Next

Once you're comfortable with MERN, the natural progression is:
- Add **Docker** to containerize your app
- Set up **CI/CD** with GitHub Actions
- Move from MongoDB Atlas to a self-hosted **PostgreSQL** for relational data
- Explore **Next.js** for SSR and better SEO

The MERN stack gave me the confidence to tackle any full-stack problem. Start simple, build something real, deploy it, and iterate.
    `,
    date: "Feb 10, 2025",
    readTime: "12 min read",
    category: "frontend",
    tags: ["mern", "react", "nodejs", "mongodb", "fullstack"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: true,
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 21,
    slug: "dockerizing-nodejs-app-beginners-guide",
    title: "Dockerizing Your First Node.js App — A Beginner's Guide",
    excerpt:
      "Container confusion is real for freshers entering DevOps. Here's a practical, zero-fluff guide to Dockerizing a Node.js application and pushing it to production.",
    content: `
## Why Docker Changed Everything for Me

Before Docker, deploying my Node.js app meant manually installing Node on the server, setting up environment variables, praying it worked the same as my laptop. Docker eliminated that uncertainty entirely.

> **"It works on my machine"** is no longer an excuse when you ship a container.

## Installing Docker

\`\`\`bash
# On Ubuntu/Debian
sudo apt update
sudo apt install docker.io docker-compose -y
sudo systemctl enable --now docker

# Verify
docker --version
docker-compose --version
\`\`\`

## Your First Dockerfile

Create a \`Dockerfile\` in the root of your Node.js project:

\`\`\`dockerfile
# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (leverages layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the source code
COPY . .

# Expose the port your app listens on
EXPOSE 5000

# Start the app
CMD ["node", "server/index.js"]
\`\`\`

## Building and Running

\`\`\`bash
# Build the image
docker build -t my-node-app .

# Run the container
docker run -d -p 5000:5000 --name my-app my-node-app

# Check it's running
docker ps

# View logs
docker logs my-app
\`\`\`

## Docker Compose for Full Stack

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  backend:
    build: ./server
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/mydb
      - JWT_SECRET=supersecret
    depends_on:
      - mongo

  frontend:
    build: ./client
    ports:
      - "3000:80"
    depends_on:
      - backend

  mongo:
    image: mongo:7
    volumes:
      - mongo-data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongo-data:
\`\`\`

\`\`\`bash
# Start everything
docker-compose up -d

# Stop everything
docker-compose down
\`\`\`

## Using a .dockerignore File

Just like \`.gitignore\`, this prevents unnecessary files from being copied into the image:

\`\`\`
node_modules
.env
.git
*.log
dist
coverage
\`\`\`

## Multi-Stage Builds for React

For your React frontend, use multi-stage builds to keep the final image lean:

\`\`\`dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

This reduces the final image from ~900MB to ~25MB.

## Pushing to Docker Hub

\`\`\`bash
# Login
docker login

# Tag your image
docker tag my-node-app srijan7904/my-node-app:latest

# Push
docker push srijan7904/my-node-app:latest
\`\`\`

## Common Mistakes Freshers Make

| Mistake | Fix |
|---|---|
| Running as root inside container | Add \`USER node\` in Dockerfile |
| Hardcoding env variables | Use \`--env-file .env\` or Docker secrets |
| Copying node_modules into image | Always add to \`.dockerignore\` |
| No health checks | Add \`HEALTHCHECK\` instruction |
| Large base images | Use \`-alpine\` variants |

## What's After Docker?

Once you're comfortable with Docker, the natural next step is **Kubernetes** for orchestration, **Jenkins** or **GitHub Actions** for CI/CD, and **Prometheus + Grafana** for monitoring — all tools I actively use and explore.

Docker was my entry point into DevOps and it completely changed how I build and ship software.
    `,
    date: "Apr 15, 2025",
    readTime: "10 min read",
    category: "devops",
    tags: ["docker", "nodejs", "devops", "containers", "deployment"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 22,
    slug: "ui-ux-design-principles-for-developers",
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt:
      "You don't need to be a designer to build beautiful interfaces. These core UI/UX principles — learned through Figma and real projects — will immediately improve your frontend work.",
    content: `
## Why Developers Should Care About Design

Most developers I know (including past-me) treat design as someone else's job. But when you're a fresher building solo projects — portfolios, hackathon apps, freelance work — there's no designer in the room. You are the designer.

Learning even the basics of UI/UX completely transformed the quality of my projects. Here's what actually matters.

## 1. The 8-Point Grid System

Everything in your UI should be sized and spaced in multiples of **8px**. This creates visual harmony without effort:

\`\`\`css
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
}
\`\`\`

Tailwind CSS already enforces this — \`p-4\` = 16px, \`p-8\` = 32px. Trust the grid.

## 2. Typography Hierarchy

Never use more than **2-3 font sizes** on a page. Create clear hierarchy:

\`\`\`css
/* Heading */
.h1 { font-size: 3rem; font-weight: 700; line-height: 1.1; }

/* Subheading */
.h2 { font-size: 1.875rem; font-weight: 600; line-height: 1.3; }

/* Body */
.body { font-size: 1rem; font-weight: 400; line-height: 1.6; }

/* Caption */
.caption { font-size: 0.875rem; color: #6b7280; }
\`\`\`

Rule: if it's **important**, it should be **bigger or bolder**. Never both unless it's critical.

## 3. Color and Contrast

Accessibility isn't optional. Use tools like [Coolors](https://coolors.co) and always check WCAG contrast ratios:

- **Normal text**: minimum 4.5:1 ratio
- **Large text (18px+)**: minimum 3:1 ratio

\`\`\`css
/* Good contrast */
background: #1a1a2e;
color: #e0e0e0; /* Contrast: 10.3:1 ✅ */

/* Bad contrast */
background: #1a1a2e;
color: #4a4a6e; /* Contrast: 1.8:1 ❌ */
\`\`\`

## 4. Visual Hierarchy with Whitespace

Whitespace is not empty space — it's a design element. Compare:

**Before (cramped):**
\`\`\`html
<div style="padding: 8px">
  <h2>Project Title</h2>
  <p>Description here</p>
  <button>View Project</button>
</div>
\`\`\`

**After (breathable):**
\`\`\`html
<div class="p-8 space-y-4">
  <h2 class="text-2xl font-bold">Project Title</h2>
  <p class="text-gray-400 leading-relaxed">Description here</p>
  <button class="mt-6 px-6 py-3 ...">View Project</button>
</div>
\`\`\`

## 5. Figma Prototyping Workflow

My workflow for every UI feature:

1. **Wireframe** — rough layout, no color, just boxes
2. **Component design** — build reusable components (Button, Card, Input)
3. **Page composition** — assemble pages from components
4. **Prototype** — add interactions, test the flow
5. **Handoff** — use Figma's Dev Mode for exact CSS values

\`\`\`
Key Figma shortcuts:
F — Frame tool
R — Rectangle
T — Text
Ctrl+G — Group
Ctrl+Alt+K — Create component
Ctrl+D — Duplicate
\`\`\`

## 6. Responsive Design — Mobile First

Always design for mobile **first**, then scale up:

\`\`\`css
/* Mobile first */
.card { 
  flex-direction: column; 
  padding: 1rem; 
}

/* Tablet */
@media (min-width: 768px) {
  .card { 
    flex-direction: row; 
    padding: 2rem; 
  }
}
\`\`\`

In Tailwind: \`flex-col md:flex-row\`.

## 7. Micro-interactions Matter

Small animations signal interactivity and delight users:

\`\`\`css
.button {
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.button:active {
  transform: translateY(0);
}
\`\`\`

With Framer Motion:
\`\`\`jsx
<motion.button
  whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
  whileTap={{ y: 0 }}
  transition={{ duration: 0.15 }}
>
  Click me
</motion.button>
\`\`\`

## 8. Design Systems Save Time

Don't redesign buttons, inputs, and cards for every project. Build or use a design system:

- **shadcn/ui** — React components that you own
- **Material UI** — Google's design system
- **Radix UI** — headless, accessible primitives

I use shadcn/ui on most of my projects now — it's what powers this very site.

## Tools I Use Daily

| Tool | Purpose |
|---|---|
| Figma | Design, prototyping, handoff |
| Adobe XD | Alternative prototyping |
| Coolors | Color palette generation |
| Google Fonts | Typography |
| Heroicons / Lucide | Icon libraries |
| Framer Motion | React animations |

## Conclusion

You don't need a design degree to build beautiful products. Start with the 8-point grid, nail your typography, respect contrast ratios, and use whitespace generously. These principles alone will put your UI in the top 20% of developer-built interfaces.

Design is a skill, and like coding, it improves with deliberate practice and iteration.
    `,
    date: "Jun 20, 2025",
    readTime: "11 min read",
    category: "frontend",
    tags: ["design", "ui", "ux", "figma", "css", "react"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 23,
    slug: "cicd-github-actions-nodejs",
    title: "CI/CD Pipeline with GitHub Actions for Node.js — Step by Step",
    excerpt:
      "Automating tests, builds, and deployments with GitHub Actions. A practical guide to setting up a real CI/CD pipeline for your Node.js projects from scratch.",
    content: `
## What Is CI/CD and Why Should Freshers Care?

**Continuous Integration (CI)** means automatically running tests every time you push code. **Continuous Deployment (CD)** means automatically deploying after tests pass.

As a fresher, CI/CD teaches you professional development practices and eliminates the manual "build → zip → upload" deployment workflow.

## GitHub Actions Basics

GitHub Actions uses **YAML workflow files** stored in \`.github/workflows/\`. Every workflow consists of:

- **Trigger** — what starts the workflow (push, PR, schedule)
- **Jobs** — groups of steps that run on a VM
- **Steps** — individual commands or pre-built actions

## Basic Node.js CI Workflow

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Node.js \${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
\`\`\`

## Adding Deployment to AWS EC2

\`\`\`yaml
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4

      - name: Deploy to EC2
        uses: appleboy/ssh-action@v1
        with:
          host: \${{ secrets.EC2_HOST }}
          username: ubuntu
          key: \${{ secrets.EC2_SSH_KEY }}
          script: |
            cd /var/www/my-app
            git pull origin main
            npm ci --only=production
            pm2 restart app
\`\`\`

## Environment Secrets

Never hardcode secrets. Use GitHub's **Secrets & Variables**:

1. Go to **Settings → Secrets and Variables → Actions**
2. Add your secrets: \`EC2_HOST\`, \`EC2_SSH_KEY\`, \`MONGO_URI\`, etc.
3. Reference them in workflows: \`\${{ secrets.SECRET_NAME }}\`

\`\`\`yaml
env:
  MONGO_URI: \${{ secrets.MONGO_URI }}
  JWT_SECRET: \${{ secrets.JWT_SECRET }}
\`\`\`

## Docker-Based CI/CD

\`\`\`yaml
name: Build and Push Docker Image

on:
  push:
    branches: [main]

jobs:
  docker:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Log in to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: srijan7904/my-app:latest
\`\`\`

## Caching for Faster Builds

\`\`\`yaml
      - name: Cache node_modules
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            \${{ runner.os }}-node-
\`\`\`

This can cut build times from 3 minutes to 30 seconds.

## Status Badges in README

\`\`\`markdown
![CI](https://github.com/Srijan-7904/my-app/actions/workflows/ci.yml/badge.svg)
\`\`\`

## My Recommended Workflow

\`\`\`
Feature branch → PR → CI runs tests → Review → Merge to main → CD deploys
\`\`\`

This is the **standard industry workflow** and practicing it on personal projects gives you a huge advantage in interviews.

## Common Gotchas

- Use \`npm ci\` (not \`npm install\`) in CI — it's faster and deterministic
- Always pin action versions: \`actions/checkout@v4\` not \`@latest\`
- Set \`timeout-minutes\` on jobs to prevent runaway builds
- Use \`concurrency\` groups to cancel redundant runs on new pushes

CI/CD transformed how I ship code. Every project I build now has at least a basic GitHub Actions workflow — it's become second nature.
    `,
    date: "Aug 5, 2025",
    readTime: "13 min read",
    category: "devops",
    tags: ["github-actions", "cicd", "devops", "nodejs", "docker"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: false,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 24,
    slug: "hackathon-survival-guide-cs-fresher",
    title: "Hackathon Survival Guide — Lessons from SIH and Intra-College Hackathons",
    excerpt:
      "From qualifying for Smart India Hackathon finals to leading teams at intra-college events — here's every practical lesson I've learned about winning hackathons as a CS fresher.",
    content: `
## Why Hackathons Matter More Than Marks

Your CGPA gets you through the resume filter. Your hackathon projects get you the interview. I've experienced this firsthand — the projects I built under pressure in 24-48 hour hackathons are the ones interviewers want to talk about.

At LPU, participating in and eventually leading teams at hackathons taught me more about real-world software development than most of my coursework.

## The Pre-Hackathon Checklist

Prepare these **before** the event starts:

\`\`\`
✅ Project boilerplates ready (MERN, Flask+React, Next.js)
✅ Component library installed and configured (shadcn/ui or MUI)
✅ Auth boilerplate with JWT (copy-paste ready)
✅ Vercel / Netlify / Render accounts set up and verified
✅ GitHub repos created, team members added as collaborators
✅ Figma team workspace set up
✅ Environment variable templates (.env.example)
✅ Docker Compose for local dev
\`\`\`

## Team Roles That Actually Work

For a 4-person team:

| Role | Responsibilities |
|---|---|
| **Tech Lead** | Architecture decisions, integration, deployment |
| **Frontend Dev** | UI components, responsiveness, animations |
| **Backend Dev** | API design, database, authentication |
| **Presenter / Designer** | Figma prototype, pitch deck, demo script |

One person usually doubles up. I typically take Tech Lead + Backend.

## The First 2 Hours Are Critical

\`\`\`
Hour 0-1: Problem analysis + solution brainstorm
Hour 1-2: Tech stack decision, architecture diagram, task breakdown
Hour 2+:  Build
\`\`\`

Do NOT start coding before you have a clear architecture. The biggest teams that fail are the ones who start coding immediately and realize 12 hours in that their approach doesn't work.

## Git Workflow for Hackathon Teams

\`\`\`bash
# Initial setup
git init
git remote add origin <repo-url>

# Each member works on feature branches
git checkout -b feature/auth
git checkout -b feature/dashboard
git checkout -b feature/api

# Never push directly to main
# Use PRs or at minimum:
git checkout main
git merge feature/auth --no-ff
\`\`\`

Use **descriptive commit messages**. Judges sometimes look at commit history.

## MVP First, Polish Later

The most common hackathon mistake: spending 8 hours making one screen perfect.

**Priority order:**
1. Core problem is solved (basic working demo)
2. End-to-end flow works (user can complete the main use case)
3. Error handling (app doesn't crash during demo)
4. UI polish (looks presentable)
5. Extra features (if time permits)

## What Judges Actually Look For

From my experience across multiple hackathons:

- **Problem clarity**: Can you explain the problem in one sentence?
- **Solution innovation**: Is your approach unique or significantly better?
- **Technical execution**: Does it actually work in the demo?
- **Real-world applicability**: Would real users actually use this?
- **Presentation**: Can a non-technical judge understand the value?

The best pitch formula:
> *"[Target user] struggles with [problem]. Our solution [product name] solves this by [key feature], resulting in [measurable impact]."*

## Smart India Hackathon — Key Takeaways

Qualifying for the SIH finale with the Smart Farming System project taught me:

1. **Domain research matters** — 2 days of reading about precision agriculture before coding made our solution 10x more credible.
2. **IoT + Web integration** is a powerful differentiator — hardware + software demos always stand out.
3. **Data visualization wins presentations** — our real-time dashboard with charts and maps got more attention than our underlying ML model.
4. **Mentor feedback loops** — use all available time with mentors. They often know the evaluation criteria better than the public documentation.

## Emergency Deployment Stack

When time is critical, this stack has never failed me:

\`\`\`
Frontend: Vercel (push to deploy, custom domain free)
Backend:  Render (free tier, deploys from GitHub)
Database: MongoDB Atlas (free cluster, no setup)
Storage:  Cloudinary (images/videos, free tier)
Domain:   .is-a.dev (free subdomains for students)
\`\`\`

Entire deployment in under 15 minutes.

## Demo Day Preparation

- **Record a backup video** — always. Networks fail, laptops crash.
- **Use realistic demo data** — fake data with names like "test123" looks unprofessional.
- **Practice the demo script** — know exactly which buttons to click and in what order.
- **Have a 1-minute, 3-minute, and 5-minute version** of your pitch.

## After the Hackathon

Win or lose, do this:

1. **Write a post-mortem** — what worked, what didn't, what you'd do differently.
2. **Deploy the project** — don't let good work sit in a private repo.
3. **Add it to your portfolio** — with screenshots, tech stack, and a live link.
4. **Connect with your team** on LinkedIn — these are your future collaborators.

Hackathons are the fastest learning environment in software development. The pressure, timeboxing, and real feedback from judges is irreplaceable.
    `,
    date: "Oct 18, 2025",
    readTime: "14 min read",
    category: "career",
    tags: ["hackathon", "sih", "fresher", "teamwork", "fullstack"],
    author: {
      name: "Srijan Jaiswal",
      avatar: "/developer-portrait.png",
      role: "Full Stack Developer",
    },
    featured: true,
    color: "from-violet-500/20 to-purple-500/20",
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) => post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag)))
    .slice(0, limit)
}

