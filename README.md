<div align="center">

# 🌍 Better Uptime 🌍

### *A distributed website uptime monitoring system that leverages global validators*

[![Made with Bun](https://img.shields.io/badge/Made%20with-Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![Powered by Solana](https://img.shields.io/badge/Powered%20by-Solana-%239945FF.svg?style=for-the-badge&logo=solana&logoColor=white)](https://solana.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)

**🚀 Comprehensive coverage beyond traditional major city-based monitoring**

---

</div>

## 🏗️ Architecture Overview

Better Uptime is built as a **Turborepo monorepo** using modern technologies to create a scalable, distributed uptime monitoring platform.

### System Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │      API        │    │      Hub        │
│   (Next.js)     │◄──►│   (Express)     │◄──►│   (WebSocket)   │
│                 │    │                 │    │                 │
│ • Dashboard     │    │ • REST APIs     │    │ • Validator     │
│ • Auth (Clerk)  │    │ • JWT Auth      │    │   Coordination  │
│ • Real-time UI  │    │ • Database ORM  │    │ • Task Queue    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │                        │
                                │        ┌─────────────────┐
                                │        │   Validators    │
                                │        │   (Bun Workers) │
                                │        │                 │
                                │        │ • URL Testing   │
                                └────────┤ • Crypto Auth   │
                                         │ • Latency Track │
                                         └─────────────────┘
```

## 🛠️ Tech Stack

<div align="center">

### 🎯 **Core Technologies**

| Component | Technology | Description |
|-----------|------------|-------------|
| **Runtime** | ![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=flat-square&logo=bun&logoColor=white) | Fast JavaScript runtime |
| **Monorepo** | ![Turborepo](https://img.shields.io/badge/Turborepo-%23EF4444.svg?style=flat-square&logo=turborepo&logoColor=white) | Efficient builds and development |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=flat-square&logo=postgresql&logoColor=white) | With Prisma ORM |
| **Authentication** | ![Clerk](https://img.shields.io/badge/Clerk-%236C47FF.svg?style=flat-square&logo=clerk&logoColor=white) | User management |
| **Blockchain** | ![Solana](https://img.shields.io/badge/Solana-%239945FF.svg?style=flat-square&logo=solana&logoColor=white) | Validator incentives |

</div>

### 🎨 Frontend Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme**: Next-themes for dark/light mode

### ⚡ Backend Stack
- **API Server**: Express.js with TypeScript
- **WebSocket Hub**: Bun native WebSocket server
- **Database ORM**: Prisma Client
- **Authentication**: JSON Web Tokens (JWT)
- **CORS**: Configured for cross-origin requests

### Infrastructure
- **Package Manager**: Bun (v1.2.10)
- **Node Version**: >= 18
- **Database**: PostgreSQL
- **Blockchain Network**: Solana Mainnet

## 📁 Project Structure

```
better-uptime/
├── apps/                     # Application services
│   ├── frontend/            # Next.js dashboard application
│   ├── api/                 # Express REST API server
│   ├── hub/                 # WebSocket coordination hub
│   └── validator/           # Distributed validator nodes
├── packages/                # Shared packages
│   ├── db/                  # Prisma database client
│   ├── common/              # Shared TypeScript types
│   ├── ui/                  # Reusable UI components
│   ├── eslint-config/       # ESLint configurations
│   └── typescript-config/   # TypeScript configurations
└── Configuration files
```

## 🎯 Key Features

<div align="center">

### 🏢 **For Business Owners**

| Feature | Description | Benefit |
|---------|-------------|---------|
| 🌍 **Global Coverage** | Website monitoring from diverse geographical locations | Comprehensive uptime insights |
| 📊 **Real-time Dashboard** | Live status updates and historical data | Instant visibility |
| 🚨 **Custom Alerts** | Configurable notifications for downtime events | Proactive monitoring |
| ⚡ **Latency Tracking** | Response time monitoring across regions | Performance optimization |
| 📈 **Geographic Analytics** | Performance insights by validator location | Regional insights |

### 💰 **For Validators (Earnings)**

| Feature | Description | Reward |
|---------|-------------|--------|
| 🏆 **Decentralized Earning** | Get paid for validating websites | Crypto rewards |
| 🔐 **Cryptographic Authentication** | Solana wallet-based validator verification | Secure identity |
| 🗺️ **Location-based Rewards** | Premium rates for underserved geographical areas | Higher payouts |
| 🔄 **Automated Payouts** | Smart contract-based compensation system | Seamless payments |

</div>

## 🏃‍♂️ Quick Start

### Prerequisites
- Bun >= 1.2.10
- Node.js >= 18
- PostgreSQL database
- Solana wallet (for validators)

### Installation

```bash
# Clone the repository
git clone https://github.com/aakifnehal/better-uptime.git
cd better-uptime

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Configure your DATABASE_URL, CLERK_SECRET_KEY, etc.

# Initialize database
cd packages/db
bunx prisma migrate dev
bunx prisma generate
```

### Development

```bash
# Start all services in development mode
bun run dev

# Or start individual services
bun run dev --filter=frontend    # Next.js frontend
bun run dev --filter=api         # Express API
bun run dev --filter=hub         # WebSocket hub
bun run dev --filter=validator   # Validator node
```

### Build for Production

```bash
# Build all applications
bun run build

# Type checking across all packages
bun run check-types

# Lint all code
bun run lint
```

## 🗄️ Database Schema

The system uses PostgreSQL with the following core entities:

```prisma
model User {
  id    String @id @default(uuid())
  email String
}

model Website {
  id       String        @id @default(uuid())
  url      String
  userId   String
  disabled Boolean       @default(false)
  ticks    WebsiteTick[]
}

model Validator {
  id             String        @id @default(uuid())
  publicKey      String        // Solana wallet public key
  location       String        // Geographic location
  ip             String        // Validator IP address
  pendingPayouts Int           @default(0)
  ticks          WebsiteTick[]
}

model WebsiteTick {
  id          String        @id @default(uuid())
  websiteId   String
  validatorId String
  createdAt   DateTime
  status      WebsiteStatus // Good | Bad
  latency     Float         // Response time in ms
}
```

## 🔧 API Endpoints

### Website Management
- `POST /api/v1/website` - Add website for monitoring
- `GET /api/v1/websites` - List user's websites
- `GET /api/v1/website/status` - Get website status and ticks
- `DELETE /api/v1/website` - Remove website from monitoring

### Validator System
- `POST /api/v1/payout/:validatorId` - Process validator payments
- WebSocket endpoints for real-time validator coordination

## 🔐 Security Features

- **JWT Authentication**: Secure API access with JSON Web Tokens
- **Cryptographic Validation**: Solana signature verification for validators
- **CORS Protection**: Configured cross-origin resource sharing
- **Input Validation**: Request validation and sanitization
- **Environment Isolation**: Separate configurations for dev/prod

## 🌐 Validator Network

The validator system uses a hub-and-spoke model:

1. **Hub Server**: Central coordination via WebSocket (port 8081)
2. **Validator Nodes**: Distributed workers performing checks
3. **Crypto Authentication**: Solana wallet-based identity verification
4. **Incentive Mechanism**: Payment system for validated checks

### Validator Registration Process
```typescript
// Validator signs up with cryptographic proof
const signedMessage = await signMessage(`Signed message for ${callbackId}, ${publicKey}`, keypair);

// Hub verifies signature and registers validator
const verified = await verifyMessage(message, publicKey, signedMessage);
```

## 📊 Monitoring Workflow

1. **Website Registration**: Business owner adds website URL
2. **Validator Assignment**: Hub distributes check tasks to validators
3. **Distributed Testing**: Multiple validators test from different locations
4. **Result Aggregation**: Hub collects and processes validation results
5. **Real-time Updates**: Dashboard shows live status and analytics
6. **Payout Processing**: Validators receive compensation for successful checks

## 🚀 Deployment

### Environment Variables
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/better_uptime"

# Authentication
CLERK_SECRET_KEY="your_clerk_secret"

# Blockchain
SOLANA_RPC_URL="https://api.mainnet-beta.solana.com"
VALIDATOR_PRIVATE_KEY="[1,2,3,...]"  # Solana keypair as array
```

### Production Build
```bash
# Build all packages
bun run build

# Start production servers
cd apps/api && bun start
cd apps/hub && bun start
cd apps/frontend && bun start
```

## 🤝 Target Users

### Business Owners
Need comprehensive website uptime monitoring with global coverage to ensure optimal user experience across all geographical regions.

### Validators/Earners
Individuals looking to monetize their internet connection and computing resources by participating in the distributed monitoring network.

## 📈 Scalability

- **Horizontal Validator Scaling**: Easy addition of new validator nodes
- **Database Optimization**: Prisma ORM with connection pooling
- **Monorepo Benefits**: Shared code and efficient CI/CD
- **Microservice Architecture**: Independent scaling of components

---

<div align="center">

### 🌟 **Built with Modern Technologies** 🌟

![Bun](https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-%239945FF.svg?style=for-the-badge&logo=solana&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

### 💫 **Better Uptime - Monitoring the web, one validator at a time** 💫

*Made with ❤️ by the JavaScript ecosystem*

[![GitHub stars](https://img.shields.io/github/stars/aakifnehal/better-uptime?style=social)](https://github.com/aakifnehal/better-uptime)
[![GitHub forks](https://img.shields.io/github/forks/aakifnehal/better-uptime?style=social)](https://github.com/aakifnehal/better-uptime)

---

**🚀 Ready to monitor the world? Get started today!**

</div>

