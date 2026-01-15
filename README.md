# 🎵 TipTune

**Real-time music tips powered by Stellar**

TipTune is a revolutionary platform that connects music lovers directly with artists through instant, frictionless micro-tipping. Stream your favorite tracks and show appreciation with lightning-fast Stellar payments.

[![Stellar](https://img.shields.io/badge/Built%20on-Stellar-black?style=flat&logo=stellar)](https://stellar.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

##  Features

-  **Stream Music** - Listen to tracks from independent artists
- **Instant Tips** - Send XLM or USDC tips with one tap
-  **Live Notifications** - Artists see tips in real-time during performances
-  **Micro-transactions** - Tips as low as $0.10 thanks to Stellar's low fees
-  **Global Reach** - Borderless payments to artists anywhere
-  **Artist Dashboard** - Track earnings, top supporters, and engagement
- **Artist Profiles** - Showcase music, bio, and tip history
-  **Secure Wallet Integration** - Connect with Freighter, Albedo, or other Stellar wallets

---

## Why TipTune?

Traditional music streaming pays artists fractions of a cent per stream. TipTune flips the model:

- **Direct support**: 100% of tips go directly to artists (minus minimal network fees)
- **Instant settlement**: Artists receive funds in seconds, not months
- **Fan connection**: Build stronger relationships through direct appreciation
- **Transparent**: All transactions visible on the Stellar blockchain

---

##  Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Blockchain**: Stellar Network
- **Smart Contracts**: Soroban (Stellar's smart contract platform)
- **Wallet Integration**: Freighter, Albedo, xBull
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Audio Streaming**: Web Audio API / HowlerJS
- **Real-time**: WebSockets for live notifications

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Stellar wallet (Freighter recommended for development)

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/tiptune.git
cd tiptune

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your .env file with:
# - Stellar network settings (testnet/mainnet)
# - Database credentials
# - API keys

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see TipTune in action!

---

## 🎯 Quick Start

### For Listeners

1. **Connect Wallet** - Click "Connect Wallet" and approve connection
2. **Browse Artists** - Explore the artist directory
3. **Listen & Tip** - Play a track and tap the tip button
4. **Select Amount** - Choose or enter custom tip amount
5. **Send** - Confirm transaction in your wallet

### For Artists

1. **Sign Up** - Create artist profile with Stellar wallet
2. **Upload Music** - Add tracks with metadata and artwork
3. **Share Profile** - Share your TipTune link with fans
4. **Receive Tips** - Get notified instantly when fans tip
5. **Track Analytics** - View earnings and engagement stats

---

## 🏗️ Project Structure

```
tiptune/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── utils/          # Utility functions
│   │   └── stellar/        # Stellar integration logic
│   └── public/             # Static assets
├── backend/
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── stellar/        # Stellar SDK integration
│   └── migrations/         # Database migrations
├── contracts/              # Soroban smart contracts
└── docs/                   # Documentation
```

---

## Contributing

We welcome contributions! TipTune is participating in the **Stellar Drips Wave Program** - check out our open issues to earn rewards while building something awesome.

### Getting Started

1. Check out our [CONTRIBUTING.md](CONTRIBUTING.md) guide
2. Browse [open issues](https://github.com/yourusername/tiptune/issues) tagged with `good-first-issue`
3. Read the [Code of Conduct](CODE_OF_CONDUCT.md)
4. Join our [Discord community](https://discord.gg/tiptune)

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with clear commit messages
4. Write/update tests
5. Push to your fork
6. Open a Pull Request

---

## 🎵 Roadmap

### Phase 1: MVP (Current)
- [x] Basic music player
- [x] Wallet connection
- [x] Simple tipping functionality
- [x] Artist profiles
- [ ] Real-time notifications

### Phase 2: Enhanced Features
- [ ] Playlist creation
- [ ] Social features (comments, likes)
- [ ] Artist analytics dashboard
- [ ] Multiple currency support (USDC, custom tokens)
- [ ] Mobile app (React Native)

### Phase 3: Advanced
- [ ] NFT integration (collectible releases)
- [ ] Live streaming with tips
- [ ] Subscription tiers
- [ ] Artist collaboration tools
- [ ] Governance token for platform decisions

---

## Use Cases

- **Independent Artists**: Earn directly from superfans
- **Podcasters**: Monetize episodes with listener tips
- **Live Performers**: Receive virtual tips during streams
- **Music Educators**: Get paid for lessons and tutorials
- **Remix Artists**: Share work and receive appreciation

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Built on [Stellar](https://stellar.org) blockchain
- Supported by [Stellar Development Foundation](https://stellar.org/foundation)
- Part of the [Drips Wave Program](https://www.drips.network/wave)
- Icons by [Lucide](https://lucide.dev)

---

## Contact & Community


- **Discord**: [Join our community](https://discord.gg/tiptune)
- **Email**: hello@tiptune.io

---

## 💡 Support the Project

If you find TipTune valuable, consider:
- Starring this repository
- Reporting bugs and suggesting features
- Contributing code or documentation
- Using TipTune to support your favorite artists

**Built with ❤️ by the TipTune community**
