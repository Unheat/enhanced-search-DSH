# Enhanced Search for DeepSeek Harness (DSH Universal Palette)

[![GitHub release](https://img.shields.io/github/v/release/Unheat/enhanced-search-DSH.svg)](https://github.com/Unheat/enhanced-search-DSH/releases)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![CI](https://github.com/Unheat/enhanced-search-DSH/actions/workflows/ci.yml/badge.svg)](https://github.com/Unheat/enhanced-search-DSH/actions/workflows/ci.yml)

An enhanced, high-performance command palette and unified search center for DeepSeek Harness Web — upgraded with **ZCode Command Center** paradigms, interactive scope tabs, search history, multi-word token matching, and complete fix for DSH UI workspace navigation.

> Forked and upgraded from `@yunmin311/dsh-universal-palette` with SWE clean code standards and full test coverage.

---

## 🚀 Easy Installation in DSH

Pre-built bundles (`lib/client.js` and `lib/index.js`) are committed directly to the repository. No local compilation is required.

### Method 1: Install via GitHub URL (Recommended)

Run in your DSH profile directory (e.g. `~/.dsh/profiles/desktop/`):

```bash
cd ~/.dsh/profiles/desktop
pnpm add github:Unheat/enhanced-search-DSH
```

Then add or verify the dependency in `package.json`, or install directly via DSH CLI:

```bash
dsh plugin --profile desktop add github:Unheat/enhanced-search-DSH
```

### Method 2: Local Clone Link

```bash
git clone https://github.com/Unheat/enhanced-search-DSH.git
cd ~/.dsh/profiles/desktop
pnpm add link:/path/to/enhanced-search-DSH
```

Reload DSH (`Cmd + R` / `Ctrl + R`) and press `Cmd + K` (or `Cmd + Shift + K` / `Alt + Q`) or click the search icon in the sidebar or composer!

---

## ✨ What's Upgraded in Enhanced Search (ZCode-Inspired)

1. **Interactive Scope Pills Bar**:
   - `[All]`: Search everything simultaneously.
   - `[> Commands]`: Filter only commands and actions (prefix `>`).
   - `[# Sessions]`: Filter conversations and chat history (prefix `#`).
   - `[@ Workspaces]`: Filter workspaces and paths (prefix `@`).
2. **Search History Chips**:
   - Persisted deduplicated recent search history in `localStorage`.
   - Click any chip to re-run the search instantly, with a 1-click Clear History option.
3. **Multi-Word Tokenized Matching**:
   - Searches across title, keywords, session folder path, CWD, and snippet tokens simultaneously.
4. **Keyword Match Highlighting**:
   - Visually highlights matching words in results using `<mark>` accent tokens.
5. **Universal Composer Search Button**:
   - The search button in the composer toolbar (`conversation.input.left`) now seamlessly toggles the Universal Palette popup, pre-filling whatever draft text you started typing.
6. **Bug Fixes**:
   - Fixed `driver.ctx.sessions.open is not a function` by properly routing to `ctx.uiWorkspace.openSession`.
   - Fixed search icon click events in DSH sidebar to prevent falling back to native basic search.

**Composer search**

- Type `/find` from the native DSH slash menu, or use the Search button. Bare `/` remains owned by DSH.
- The Composer remains the only query input. `/find query` stays in the Composer, while the Search button opens the same search directly from the current draft without inserting `/find`.
- In an active conversation, results appear as a compact DSH-native surface above the Composer.
- In a zero-turn Hero session, results appear in the same DSH-native surface directly below the Composer: normal document flow, about five visible rows with internal scrolling, never covering the Composer. **This requires a host that declares the `conversation.hero.composer.dock` seat** — on hosts without it (including stock `0.1.2-rc.1`), Composer Search fails closed on the Hero surface instead of falling back upward; see [Compatibility](#compatibility).
- Hero and active presentations share the same controller, providers, ranking, and result execution.

**Global search**

- Press `Alt+Q` on Windows/Linux or `Cmd+Shift+K` on macOS.
- This opens the Floating Palette: zero-turn uses the compact variant, while active conversations use the full 600px variant.

Existing custom shortcuts are preserved. `Esc` closes the Palette; outside clicks close a Floating Palette and pass through to DSH.

## Usage

| Gesture | Result |
|---|---|
| `/` | Use the native DSH slash menu |
| Search button or `/find` | Open Composer Search from the Composer — downward Morph in a zero-turn Hero session, upward Morph when active |
| `Alt+Q` (Windows/Linux) or `Cmd+Shift+K` (macOS) | Toggle the Global Floating Palette |
| Type | Fuzzy search across commands, models, sessions, and history |
| `↑↓` | Move selection |
| `Enter` | Open / run the selected row |
| `Tab` | Action panel (infrastructure; current built-in providers expose primary actions only) |
| `Esc` | Close |

## Two search modes

### Composer Search — contextual / embedded

In an active conversation, the Composer stays the only query input and results appear in a compact DSH-native surface directly above it. In a zero-turn Hero session, the same Search button or `/find` entry opens the same surface directly below the Composer in normal document flow.

![Downward Composer Search in a zero-turn Hero session](https://raw.githubusercontent.com/yunmin311/dsh-universal-palette/main/docs/assets/readme/hero-composer-down.png)

![Upward Composer Search in an active conversation](https://raw.githubusercontent.com/yunmin311/dsh-universal-palette/main/docs/assets/readme/active-composer-morph.png)

### Global Floating Palette — global / navigational

The global shortcut always opens the Floating Palette. Zero-turn uses the compact 540px presentation; active conversations use the full 600px presentation shown at the top of this page.

![Searching the goal command](https://raw.githubusercontent.com/yunmin311/dsh-universal-palette/main/docs/assets/readme/command-search.png)

![A conversation hit with snippet and metadata](https://raw.githubusercontent.com/yunmin311/dsh-universal-palette/main/docs/assets/readme/conversation-hit.png)

## Search surfaces

| Surface | Source contract | Action | Needs active session |
|---|---|---|---|
| Commands | `ctx.remote.commands.list / execute` (official Host catalog) | Execute | Yes |
| Models | `ctx.modelDirectories` (official model directory) | Select | Yes |
| Sessions | `ctx.sessions` (official session controller) | Open | No |
| Conversation Hits | `ctx.sessions.search` (official FTS boundary) | Open | No |

## Community interoperability

Interoperability is verified against real installed plugins — see the [interoperability matrix](docs/INTEROPERABILITY_MATRIX.md).

- **Host command federation: automatic.** Host commands from community plugins (e.g. dsh-tui-command-ext's `/clear` `/rename` `/unarchive` `/compact-fast`, or a `/code-review` plugin) appear and execute with zero adaptation — the Palette reads the live official catalog.

  ![A third-party Host command discovered by exact query](https://raw.githubusercontent.com/yunmin311/dsh-universal-palette/main/docs/assets/readme/interop-command.png)

- **dsh-keys-palette: optional public bridge.** Registers one `universal-palette.open` action on its public `keys.actions` registry so you can bind a shortcut to open the Palette. Absent plugin, zero effect.
- **Tested coexistence:** dsh-tui-command-ext, dsh-session-workbench, dsh-reference-anything, dsh-keys-palette, dsh-market — all verified installed together on real DSH boots.
- **No private coupling.** Session Workbench and Reference Anything publish no public handoff API; the Palette integrates nothing beyond coexistence and documents upstream gaps instead of hacking around them.

This is not "supports all plugins" — only the contracts above are consumed, capability-detected, with zero behavior change when absent.

## For plugin authors

Universal Palette federates DSH's public contracts — you do not integrate with the Palette to become visible in it.

- **Host commands**: register through DSH's official Host command contract (`ctx.commands.register`) and the Palette discovers you automatically from the live catalog on every query. No Palette dependency, no adapter, no release coordination.
- **Deeper interoperability**: an optional, capability-detected adapter is considered only when your plugin exposes a stable public Cordis service. It must be zero-impact when your plugin is absent and lifecycle-safe when it unloads. The working example is dsh-keys-palette's public `keys.actions` registry, which the Palette uses to contribute one bindable "open" action.
- **Client-only `commandUi` commands, private registries, DOM state, and internal routes are off the table** — the Palette keeps plain coexistence there and waits for a public API ([upstream gaps](docs/UPSTREAM_INTEROP_GAPS.md)).
- **Session / reference / workspace plugins**: the same rule applies. A public handoff service or official contract is the only path into Palette secondary integrations; no public seam means `WAIT_PUBLIC_API`.

Universal Palette currently has no Provider SDK, and none is planned. The preferred ecosystem path is: **register with DSH, and the Palette federates public contracts.** Details and verified cases: [interoperability matrix](docs/INTEROPERABILITY_MATRIX.md).

## Compatibility

Verified against:
- `@deepseek-ai/dsh@0.1.2-rc.1` (baseline, `deepseek-ai/deepseek-harness@76fda729799fe9b3848dbe2c211d4b231032b81e`)
- `@deepseek-ai/dsh@0.1.5-rc.1` (API drift verified; compatible seams only)

Other DSH revisions are unverified. Details: [COMPATIBILITY.md](docs/COMPATIBILITY.md), [COMMAND_COMPATIBILITY.md](docs/COMMAND_COMPATIBILITY.md).

### 0.1.5-rc.1 API drift (does not affect Universal Palette)

The Palette consumes only the following public Client seams; these are **compatible** between 0.1.2-rc.1 and 0.1.5-rc.1:

- `ctx.remote.commands.list` — unchanged array shape
- `ctx.sessions.list / binding / search / open` — unchanged shapes
- `ctx.workspaces.list / create` — unchanged
- `ctx.modelDirectories.directoryFor / load / select` — unchanged
- `ctx.inputTriggers.registerSource / sessionOf / adjudicate` — envelope field renamed `images`→`attachments` (Palette does not submit images)
- `ctx.slots.spec / subscribe / inject / register` — unchanged names for `shell.overlay`, `conversation.input.left`, `conversation.input.overlay`, `conversation.hero.composer.dock`, `conversation.composer.dock`, `sidebar.footer.action`
- `locale`, `plugin lifecycle` — unchanged

Breaking changes in 0.1.5 (e.g. `commands.execute` 3rd param `images`→`attachments`, session format V3, wire `seedLength`→`isSeeded`, history events restructure) do not intersect the Palette's call surface.

### Hero surface

- Stock `0.1.2-rc.1` / `0.1.5-rc.1`: no `conversation.hero.composer.dock` → Composer Search **fails closed** (Search button disabled with reason; `/find` claimed but answers capability error; no upward fallback).
- Enhanced Hero experience (downward Morph) requires a host that declares `conversation.hero.composer.dock`. The verified host is the maintainer's fork (`yunmin311/deepseek-harness`, branch `feat/hero-composer-dock` at SHA `321bf88d10e0176674226d02de59d3e0bd79579d`). This is **not upstream support**; the fork is maintained as the long-term enhanced host for the full Hero experience.

### Desktop

- No official DeepSeek Desktop installer is published. The upstream repo contains Desktop packaging infrastructure (`apps/desktop` Electron shell + `apps/desktop-host`), but no installers are available on `https://download.deepseek.com/_/harness/desktop/stable/...` (404 at review time).
- Community wrappers (Electron/Tauri/Wails shells bundling stock `dsh web`) exist but are **not in the verified matrix**.
- `deepseekagent.io` / third-party sites are not official DeepSeek products.

## Privacy & Security

- No telemetry and no analytics.
- No network requests of its own: everything goes through DSH's in-process public Client APIs.
- No credentials read or stored; the demo/acceptance profiles run credential-free by design.
- User preferences (shortcut, frecency) live in browser `localStorage` under the Palette's own namespace.
- History search delegates to DSH's session FTS; its database belongs to the DSH profile, not to this plugin.

## Testing

- `pnpm run check` — typecheck + unit tests (including the Keys Palette bridge lifecycle).
- `pnpm run build` — host ESM face + browser CJS bundle with a purity gate.
- Real DSH acceptance on Windows: official command compatibility gate ([`scripts/command-compat.mjs`](scripts/command-compat.mjs)), multi-plugin coexistence probes ([`scripts/interop-probe.mjs`](scripts/interop-probe.mjs)), and recorded evidence under [`evidence/`](evidence/).

## Known limitations

- Locked to DSH `0.1.2-rc.1`; other revisions are unverified.
- Client-only `commandUi` commands (e.g. popup pickers) are not discoverable — DSH exposes no public enumeration yet ([upstream gaps](docs/UPSTREAM_INTEROP_GAPS.md)).

## Development

```powershell
pnpm install
pnpm run check
pnpm run build
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Compatibility](docs/COMPATIBILITY.md)
- [Command compatibility](docs/COMMAND_COMPATIBILITY.md)
- [Design contract](docs/DESIGN_CONTRACT.md)
- [Interoperability matrix](docs/INTEROPERABILITY_MATRIX.md)
- [Upstream interop gaps](docs/UPSTREAM_INTEROP_GAPS.md)
- [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)
