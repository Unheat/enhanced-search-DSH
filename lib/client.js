window.__ModuleLoader__.load({
	id: "@yunmin311/dsh-universal-palette",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperties(exports, {
			__esModule: { value: true },
			[Symbol.toStringTag]: { value: "Module" }
		});
		//#region \0rolldown/runtime.js
		var __create = Object.create;
		var __defProp = Object.defineProperty;
		var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames = Object.getOwnPropertyNames;
		var __getProtoOf = Object.getPrototypeOf;
		var __hasOwnProp = Object.prototype.hasOwnProperty;
		var __copyProps = (to, from, except, desc) => {
			if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
				key = keys[i];
				if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
			return to;
		};
		var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
			value: mod,
			enumerable: true
		}) : target, mod));
		//#endregion
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		_deepseek_ai_dsh_client_ui_primitives = __toESM(_deepseek_ai_dsh_client_ui_primitives, 1);
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/locales.ts
		const NS = "universal-palette";
		const en = {
			palette: "Universal Palette",
			search: "Search commands, sessions, models, history…",
			results: "Palette results",
			searching: "Searching…",
			noResults: "No results for \"{query}\"",
			tryAgain: "Try a shorter phrase or a command name.",
			choose: "Select a workspace to start",
			create: "Create or open a Session",
			requires: "Commands and models require an active Session",
			workspace: "Select workspace",
			newSession: "New session",
			recent: "Recent sessions",
			newHint: "Create or open a blank Session",
			chooseHint: "Choose a workspace, then start a Session",
			recentHint: "Open an existing conversation",
			noRecent: "No recent sessions yet. Start a Session from the sidebar.",
			empty: "Choose a workspace or start a Session to continue.",
			current: "Current",
			commands: "Quick actions",
			models: "Models",
			history: "History",
			actions: "Actions",
			footer: "↑↓ Navigate · Enter Open/Run · Esc Close",
			open: "Open",
			untitled: "Untitled Session",
			idle: "Idle",
			running: "Running",
			justNow: "Just now",
			minutes: "{n}m ago",
			hours: "{n}h ago",
			days: "{n}d ago",
			modelChoice: "Select this model",
			modelPicker: "Open DSH model selector",
			high: "High",
			low: "Low",
			medium: "Medium",
			"command.goal": "Set or view the goal for a long-running task",
			"command.permission": "View or change the permission preset",
			"command.compact": "Compact older conversation history",
			"command.export": "Download the Session log as a ZIP archive",
			"command.feedback": "Record feedback about this Session",
			"command.plan": "Enter or leave plan mode",
			feedbackRequired: "Feedback text is required. Use /feedback <text> in the DSH composer.",
			actionFailed: "Action unavailable. Check the DSH Session or try again.",
			providerFailed: "Some results are unavailable. Try again.",
			shortcutConflict: "\"{shortcut}\" is also used by {owners}.",
			heroSearchUnavailable: "Composer Search is unavailable on this host's Hero surface.",
			scopeAll: "All",
			scopeCommands: "Commands",
			scopeSessions: "Sessions",
			scopeWorkspaces: "Workspaces",
			recentSearches: "Recent searches",
			clearHistory: "Clear"
		};
		const zh = {
			palette: "通用面板",
			search: "搜索命令、会话、模型与历史…",
			results: "搜索结果",
			searching: "正在搜索…",
			noResults: "未找到“{query}”的结果",
			tryAgain: "试试更短的词句或命令名称。",
			choose: "选择工作区开始",
			create: "创建或打开会话",
			requires: "命令和模型需要先打开会话",
			workspace: "选择工作区",
			newSession: "新建会话",
			recent: "最近会话",
			newHint: "创建或打开空白会话",
			chooseHint: "先选择工作区，再开始会话",
			recentHint: "打开已有对话",
			noRecent: "暂无最近会话，可从侧栏开始新会话。",
			empty: "选择工作区或开始会话以继续。",
			current: "当前",
			commands: "快捷操作",
			models: "模型",
			history: "历史",
			actions: "操作",
			footer: "↑↓ 移动 · Enter 打开/执行 · Esc 关闭",
			open: "打开",
			untitled: "未命名会话",
			idle: "空闲",
			running: "运行中",
			justNow: "刚刚",
			minutes: "{n}分钟前",
			hours: "{n}小时前",
			days: "{n}天前",
			modelChoice: "选择此模型",
			modelPicker: "打开模型选择器",
			high: "高",
			low: "低",
			medium: "中",
			"command.goal": "设置或查看长期任务目标",
			"command.permission": "查看或切换权限预设",
			"command.compact": "压缩较早的对话历史",
			"command.export": "将会话日志下载为 ZIP 文件",
			"command.feedback": "记录对此会话的反馈",
			"command.plan": "进入或退出规划模式",
			feedbackRequired: "请在会话输入框使用 /feedback <反馈内容>。",
			actionFailed: "操作暂不可用，请检查当前会话或重试。",
			providerFailed: "部分结果暂不可用，请重试。",
			shortcutConflict: "\"{shortcut}\" 同时被 {owners} 使用。",
			heroSearchUnavailable: "当前宿主的 Hero 页面不支持 Composer Search。",
			scopeAll: "全部",
			scopeCommands: "命令",
			scopeSessions: "会话",
			scopeWorkspaces: "工作区",
			recentSearches: "最近搜索",
			clearHistory: "清除"
		};
		function ageText(updatedAt, t) {
			if (updatedAt === void 0) return "";
			const minutes = Math.max(0, Math.floor((Date.now() - updatedAt) / 6e4));
			if (minutes < 1) return t("justNow");
			if (minutes < 60) return t("minutes", { n: minutes });
			if (minutes < 1440) return t("hours", { n: Math.floor(minutes / 60) });
			return t("days", { n: Math.floor(minutes / 1440) });
		}
		/** Translate owned UI copy; never translate user titles, snippets or identifiers. */
		function presentItem(item, t, chinese) {
			let subtitle = item.subtitle;
			let badges = item.badges?.map((value) => value === "current" ? t("current") : value === "high" || value === "medium" || value === "low" ? t(value) : value);
			if (item.kind === "command") {
				const key = `command.${item.title.replace(/^\//, "")}`;
				if (key in en) subtitle = t(key);
				else if (item.id === "commands:client:model") subtitle = t("modelPicker");
			} else if (item.kind === "model" && chinese) subtitle = [item.source, t("modelChoice")].filter(Boolean).join(" · ");
			else if (item.kind === "session") {
				subtitle = subtitle?.split(" · ").map((value) => value === "current" || value === "idle" || value === "running" ? t(value) : value).join(" · ");
				badges = [ageText(item.updatedAt, t)].filter(Boolean);
			}
			return {
				...item,
				title: item.title || t("untitled"),
				subtitle,
				badges
			};
		}
		//#endregion
		//#region src/client/state/preferences.ts
		const BASE_PREFERENCES = {
			pins: {},
			frecency: {},
			glassIntensity: "soft"
		};
		const PREFERENCES_SCHEMA_VERSION = 1;
		const LEGACY_DEFAULT_SHORTCUT = "Ctrl+Shift+K";
		const STORAGE_KEY$1 = "dsh-universal-palette/preferences";
		const DECAY_HALF_LIFE_MS = 6048e5;
		function frecencyScore(record, now) {
			if (!record) return 0;
			const halfLives = Math.max(0, now - record.lastUsedAt) / DECAY_HALF_LIFE_MS;
			const decay = Math.pow(.5, halfLives);
			return Math.log10(1 + record.count) * decay;
		}
		var PreferencesStore = class {
			backend;
			platformDefaultShortcut;
			current;
			shortcutCustomized = false;
			listeners = /* @__PURE__ */ new Set();
			constructor(backend, platformDefaultShortcut) {
				this.backend = backend;
				this.platformDefaultShortcut = platformDefaultShortcut;
				this.current = {
					...BASE_PREFERENCES,
					shortcut: platformDefaultShortcut
				};
			}
			async load() {
				const normalized = normalizeStoredPreferences(await this.backend.load(), this.platformDefaultShortcut);
				this.current = normalized.preferences;
				this.shortcutCustomized = normalized.shortcutCustomized;
				this.notify();
			}
			get snapshot() {
				return this.current;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			}
			async togglePin(itemId) {
				const next = { ...this.current.pins };
				if (next[itemId]) delete next[itemId];
				else next[itemId] = Date.now();
				this.current = {
					...this.current,
					pins: next
				};
				await this.persist();
				return Boolean(next[itemId]);
			}
			async recordUse(itemId) {
				const now = Date.now();
				const prev = this.current.frecency[itemId];
				const next = { ...this.current.frecency };
				next[itemId] = {
					count: (prev?.count ?? 0) + 1,
					lastUsedAt: now
				};
				this.current = {
					...this.current,
					frecency: next
				};
				await this.persist();
			}
			async resetRanking() {
				this.current = {
					...this.current,
					frecency: {}
				};
				await this.persist();
			}
			dispose() {
				this.listeners.clear();
			}
			async persist() {
				await this.backend.save({
					schemaVersion: PREFERENCES_SCHEMA_VERSION,
					shortcutCustomized: this.shortcutCustomized,
					...this.current
				});
				this.notify();
			}
			notify() {
				for (const l of this.listeners) l();
			}
		};
		function normalizeStoredPreferences(stored, platformDefaultShortcut) {
			const storedShortcut = typeof stored?.shortcut === "string" && stored.shortcut.trim().length > 0 ? stored.shortcut : void 0;
			const shortcutCustomized = stored?.schemaVersion === PREFERENCES_SCHEMA_VERSION && typeof stored.shortcutCustomized === "boolean" ? stored.shortcutCustomized === true && storedShortcut !== void 0 : storedShortcut !== void 0 && storedShortcut !== LEGACY_DEFAULT_SHORTCUT;
			const shortcut = shortcutCustomized ? storedShortcut : platformDefaultShortcut;
			const glassIntensity = stored?.glassIntensity === "solid" || stored?.glassIntensity === "glass" || stored?.glassIntensity === "soft" ? stored.glassIntensity : BASE_PREFERENCES.glassIntensity;
			return {
				preferences: {
					pins: stored?.pins ?? {},
					frecency: stored?.frecency ?? {},
					glassIntensity,
					shortcut
				},
				shortcutCustomized
			};
		}
		function createLocalStorageBackend() {
			return {
				async load() {
					if (typeof localStorage === "undefined") return null;
					try {
						const raw = localStorage.getItem(STORAGE_KEY$1);
						if (!raw) return null;
						return JSON.parse(raw);
					} catch {
						return null;
					}
				},
				async save(prefs) {
					if (typeof localStorage === "undefined") return;
					try {
						localStorage.setItem(STORAGE_KEY$1, JSON.stringify(prefs));
					} catch {}
				}
			};
		}
		//#endregion
		//#region src/client/ranking/fuzzy.ts
		function lower(s) {
			return s.toLowerCase();
		}
		function findRanges(haystack, needle) {
			if (needle.length === 0) return [];
			const ranges = [];
			let from = 0;
			while (from <= haystack.length - needle.length) {
				const idx = haystack.indexOf(needle, from);
				if (idx < 0) break;
				ranges.push({
					start: idx,
					end: idx + needle.length
				});
				from = idx + needle.length;
			}
			return ranges;
		}
		function subsequence(haystack, needle) {
			const h = lower(haystack);
			const n = lower(needle);
			if (n.length === 0) return [];
			const ranges = [];
			let hi = 0;
			for (let ni = 0; ni < n.length; ni++) {
				const ch = n.charCodeAt(ni);
				let found = -1;
				for (let j = hi; j < h.length; j++) if (h.charCodeAt(j) === ch) {
					found = j;
					break;
				}
				if (found < 0) return null;
				ranges.push({
					start: found,
					end: found + 1
				});
				hi = found + 1;
			}
			return ranges;
		}
		function matchSingleWord(q, input) {
			const title = input.title;
			const lt = lower(title).replace(/^\//, "");
			const lq = lower(q).replace(/^\//, "");
			if (lq === "") return {
				score: title.startsWith("/") ? .92 : 0,
				ranges: []
			};
			if (lt === lq) return {
				score: 1,
				ranges: [{
					start: 0,
					end: title.length
				}]
			};
			if (input.aliases && input.aliases.length > 0) {
				for (const a of input.aliases) if (lower(a) === lq) return {
					score: .95,
					ranges: findRanges(lt, lq)
				};
			}
			if (lt.startsWith(lq)) {
				const offset = title.startsWith("/") ? 1 : 0;
				return {
					score: .92,
					ranges: [{
						start: offset,
						end: offset + lq.length
					}]
				};
			}
			const boundaryMatch = new RegExp(`\\b${escapeRegExp(lq)}`, "i").exec(lt);
			if (boundaryMatch) {
				const offset = (title.startsWith("/") ? 1 : 0) + boundaryMatch.index;
				return {
					score: .88,
					ranges: [{
						start: offset,
						end: offset + lq.length
					}]
				};
			}
			if (input.keywords && input.keywords.length > 0) for (const k of input.keywords) {
				const lk = lower(k);
				if (lk === lq) return {
					score: .92,
					ranges: findRanges(lower(title), lq)
				};
				if (lk.startsWith(lq)) return {
					score: .86,
					ranges: findRanges(lower(title), lq)
				};
				if (lk.includes("/") || lk.includes("\\")) {
					const segments = lk.split(/[\\/]/).filter(Boolean);
					if (segments.some((seg) => seg === lq)) return {
						score: .85,
						ranges: findRanges(lower(title), lq)
					};
					if (segments.some((seg) => seg.startsWith(lq))) return {
						score: .8,
						ranges: findRanges(lower(title), lq)
					};
				}
			}
			if (lt.includes(lq)) return {
				score: .84,
				ranges: findRanges(lower(title), lq)
			};
			for (const alias of input.aliases ?? []) if (lower(alias).startsWith(lq)) return {
				score: .9,
				ranges: []
			};
			if (input.snippet && lower(input.snippet).includes(lq)) return {
				score: .82,
				ranges: []
			};
			if (input.subtitle) {
				const lsub = lower(input.subtitle);
				if (lsub.includes("/") || lsub.includes("\\")) {
					if (lsub.split(/[\\/\s·]+/).filter(Boolean).some((seg) => seg === lq)) return {
						score: .8,
						ranges: []
					};
				}
				if (lsub.includes(lq)) return {
					score: .5,
					ranges: []
				};
			}
			const sub = subsequence(title, q);
			if (sub) {
				const totalSpan = sub[sub.length - 1].end - sub[0].start;
				const density = q.length / Math.max(totalSpan, 1);
				const early = 1 - sub[0].start / Math.max(lt.length, 1);
				const score = Math.min(.78, .45 + .25 * density + .08 * early);
				if (q.length >= 3 && density >= .5) return {
					score,
					ranges: sub
				};
			}
			return {
				score: 0,
				ranges: []
			};
		}
		function matchItem(query, input) {
			const q = query.trim();
			if (q.length === 0) return {
				score: 0,
				ranges: []
			};
			const words = q.split(/\s+/).filter(Boolean);
			if (words.length > 1) {
				const results = words.map((w) => matchSingleWord(w, input));
				if (results.every((r) => r.score >= .65)) {
					const avgScore = results.reduce((acc, r) => acc + r.score, 0) / results.length;
					const allRanges = results.flatMap((r) => r.ranges).sort((a, b) => a.start - b.start);
					const titleLower = lower(input.title);
					const allInTitle = words.every((w) => titleLower.includes(lower(w)));
					return {
						score: Math.min(1, avgScore + (allInTitle ? .05 : 0)),
						ranges: allRanges
					};
				}
				return {
					score: 0,
					ranges: []
				};
			}
			return matchSingleWord(q, input);
		}
		function escapeRegExp(s) {
			return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		}
		//#endregion
		//#region src/client/ranking/rank.ts
		const WEIGHTS = {
			text: .8,
			context: .08,
			frecency: .06,
			pin: .04,
			hint: .02
		};
		function contextScore(item, ctx) {
			let s = 0;
			const ic = item.context ?? {};
			if (ctx.workspaceId && ic.workspaceId === ctx.workspaceId) s += .55;
			if (ctx.sessionId && ic.sessionId === ctx.sessionId) s += .25;
			if (ctx.provider && ic.provider === ctx.provider) s += .2;
			return Math.min(1, s);
		}
		function pinBoost(itemId, preferences) {
			return preferences.pins[itemId] ? 1 : 0;
		}
		function providerHintScore(item, hint, queryEmpty) {
			if (!hint) return 0;
			if (item.kind === "command" || item.kind === "action") return 1;
			return 0;
		}
		function emptyQueryScore(item, prefs, ctx, now) {
			let s = 0;
			s += pinBoost(item.id, prefs) * 1;
			s += contextScore(item, ctx) * .7;
			s += frecencyScore(prefs.frecency[item.id], now) * .4;
			if (item.context?.workspaceId === ctx.workspaceId && ctx.workspaceId) s += .15;
			return s;
		}
		function rankItems(items, input) {
			const visible = [];
			for (const it of items) visible.push(it);
			const empty = input.query.trim().length === 0;
			const scored = visible.map((item) => {
				if (empty) return {
					item,
					score: emptyQueryScore(item, input.preferences, input.context, input.now),
					match: {
						score: 0,
						ranges: []
					}
				};
				const match = matchItem(input.query, {
					title: item.title,
					subtitle: item.subtitle,
					keywords: item.keywords,
					aliases: item.aliases,
					snippet: item.snippet
				});
				const text = match.score;
				const ctx = contextScore(item, input.context);
				const freq = Math.min(1, frecencyScore(input.preferences.frecency[item.id], input.now));
				const pin = pinBoost(item.id, input.preferences);
				const hint = providerHintScore(item, input.actionsHint, false);
				return {
					item,
					score: WEIGHTS.text * text + WEIGHTS.context * ctx + WEIGHTS.frecency * freq + WEIGHTS.pin * pin + WEIGHTS.hint * hint,
					match
				};
			});
			scored.sort((a, b) => (!empty ? Number(b.match.score >= .9) - Number(a.match.score >= .9) : 0) || b.score - a.score);
			return scored.filter((s) => empty || s.match.score >= .6);
		}
		//#endregion
		//#region src/client/search-scope.ts
		function resolveQueryScope(rawDraft) {
			const trimmed = rawDraft.trimStart();
			if (trimmed.startsWith(">")) return {
				query: trimmed.slice(1).trimStart(),
				scope: "commands",
				prefix: ">",
				explicit: true
			};
			if (trimmed.startsWith("#")) return {
				query: trimmed.slice(1).trimStart(),
				scope: "sessions",
				prefix: "#",
				explicit: true
			};
			if (trimmed.startsWith("@")) return {
				query: trimmed.slice(1).trimStart(),
				scope: "workspaces",
				prefix: "@",
				explicit: true
			};
			return {
				query: rawDraft.trim(),
				scope: "all",
				prefix: "",
				explicit: false
			};
		}
		function scopeToPrefix(scope) {
			switch (scope) {
				case "commands": return ">";
				case "sessions": return "#";
				case "workspaces": return "@";
				default: return "";
			}
		}
		//#endregion
		//#region src/client/aggregator.ts
		const DEFAULT_SOFT_DEADLINE_MS = 600;
		const DEFAULT_HARD_LIMIT = 40;
		const DEFAULT_DEBOUNCE_MS = 28;
		var PaletteAggregator = class {
			providers;
			preferencesGetter;
			contextGetter;
			nowFn;
			softDeadlineMs;
			hardLimit;
			debounceMs;
			acceptLateResults;
			state = {
				status: "idle",
				query: "",
				actionsHint: false,
				items: [],
				failures: [],
				seq: 0
			};
			listeners = /* @__PURE__ */ new Set();
			currentController = null;
			debounceTimer = null;
			constructor(opts) {
				this.providers = opts.providers;
				this.preferencesGetter = opts.preferences;
				this.contextGetter = opts.context ?? (() => ({}));
				this.nowFn = opts.now ?? Date.now;
				this.softDeadlineMs = opts.softDeadlineMs ?? DEFAULT_SOFT_DEADLINE_MS;
				this.hardLimit = opts.hardLimit ?? DEFAULT_HARD_LIMIT;
				this.debounceMs = opts.debounceMs ?? DEFAULT_DEBOUNCE_MS;
				this.acceptLateResults = opts.acceptLateResults ?? false;
			}
			getState() {
				return this.state;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				listener(this.state);
				return () => {
					this.listeners.delete(listener);
				};
			}
			setQuery(query) {
				if (this.debounceTimer) clearTimeout(this.debounceTimer);
				this.debounceTimer = setTimeout(() => {
					this.debounceTimer = null;
					this.runQuery(query);
				}, this.debounceMs);
			}
			setQueryImmediate(query) {
				if (this.debounceTimer) {
					clearTimeout(this.debounceTimer);
					this.debounceTimer = null;
				}
				return this.runQuery(query);
			}
			cancel() {
				if (this.debounceTimer) {
					clearTimeout(this.debounceTimer);
					this.debounceTimer = null;
				}
				if (this.currentController) {
					this.currentController.abort();
					this.currentController = null;
				}
			}
			dispose() {
				this.cancel();
				this.listeners.clear();
			}
			async runQuery(query) {
				if (this.currentController) this.currentController.abort();
				const controller = new AbortController();
				this.currentController = controller;
				const seq = this.state.seq + 1;
				const resolved = resolveQueryScope(query);
				const actionsHint = resolved.scope === "commands";
				const effectiveQuery = resolved.query;
				const context = this.contextGetter();
				this.state = {
					...this.state,
					status: "loading",
					query: effectiveQuery,
					actionsHint,
					items: [],
					failures: [],
					seq
				};
				this.notify();
				const input = {
					query: effectiveQuery,
					actionsHint,
					context,
					limit: this.hardLimit
				};
				const collectPromises = this.providers.map((p) => this.collectOne(p, input, controller.signal));
				const collected = [];
				const failures = [];
				const settled = collectPromises.map(() => false);
				const publish = () => {
					if (controller.signal.aborted) return;
					const capped = rankItems(collected, {
						query: effectiveQuery,
						context,
						preferences: this.preferencesGetter(),
						now: this.nowFn(),
						actionsHint
					}).slice(0, this.hardLimit);
					this.state = {
						status: capped.length === 0 ? "empty" : "ready",
						query: effectiveQuery,
						actionsHint,
						items: capped,
						failures: [...failures],
						seq
					};
					this.notify();
				};
				await new Promise((resolve) => {
					let done = false;
					const finish = () => {
						if (done) return;
						done = true;
						clearTimeout(deadlineTimer);
						controller.signal.removeEventListener("abort", onAbort);
						resolve();
					};
					const onAbort = () => finish();
					const deadlineTimer = setTimeout(() => {
						for (let i = 0; i < settled.length; i++) if (!settled[i]) failures.push({
							providerId: this.providers[i].id,
							reason: "late"
						});
						publish();
						finish();
					}, this.softDeadlineMs);
					controller.signal.addEventListener("abort", onAbort, { once: true });
					if (collectPromises.length === 0) {
						publish();
						finish();
						return;
					}
					collectPromises.forEach((promise, i) => {
						promise.then((result) => {
							if (controller.signal.aborted) return;
							settled[i] = true;
							if (done && this.acceptLateResults) {
								const late = failures.findIndex((f) => f.providerId === this.providers[i].id && f.reason === "late");
								if (late !== -1) failures.splice(late, 1);
							}
							if (result.kind === "ok") collected.push(...result.items);
							else if (result.kind === "fail" && result.reason !== "aborted") failures.push({
								providerId: result.providerId,
								reason: result.reason
							});
							if (done && this.acceptLateResults) publish();
							if (!done && settled.every(Boolean)) {
								publish();
								finish();
							}
						});
					});
				});
			}
			async collectOne(provider, input, signal) {
				try {
					const items = await provider.collect(input, signal);
					if (signal.aborted) return {
						kind: "fail",
						providerId: provider.id,
						reason: "aborted"
					};
					return {
						kind: "ok",
						items
					};
				} catch (err) {
					const reason = err instanceof Error ? err.message : String(err);
					return {
						kind: "fail",
						providerId: provider.id,
						reason
					};
				}
			}
			notify() {
				for (const l of this.listeners) l(this.state);
			}
		};
		//#endregion
		//#region src/client/adapters.ts
		const EMPTY_ITEMS = [];
		function currentTopLevelSession(sessions) {
			const id = sessions.list.getSnapshot().current;
			if (id === void 0) return void 0;
			const binding = sessions.binding(id);
			if (sessions.subagentAddress(id) !== void 0) return void 0;
			if (binding !== void 0 && binding.session.getSnapshot().subagent !== null) return void 0;
			return {
				id,
				binding
			};
		}
		function currentPaletteContext(sessions, workspaces) {
			const sessionId = sessions.list.getSnapshot().current;
			if (sessionId === void 0) return {};
			const workspace = workspaces.list.getSnapshot().items.find((candidate) => candidate.sessionIds.includes(sessionId));
			return {
				sessionId: String(sessionId),
				...workspace === void 0 ? {} : { workspaceId: String(workspace.workspaceId) }
			};
		}
		function remoteError(operation, result) {
			return /* @__PURE__ */ new Error(`${operation} failed: ${result.error.code}: ${result.error.message}`);
		}
		function createCommandsProvider(remote, sessions, inputTriggers) {
			return {
				id: "commands",
				label: "Commands",
				availability: "ready",
				async collect(input, signal) {
					const current = currentTopLevelSession(sessions);
					if (current === void 0) return EMPTY_ITEMS;
					const result = await remote.list(current.id);
					if (!result.ok) throw remoteError("commands.list", result);
					if (signal.aborted) return EMPTY_ITEMS;
					const items = result.value.map((descriptor) => commandItem(remote, current.id, descriptor, input.context));
					const scope = inputTriggers && sessions.scope(current.id);
					if (inputTriggers && scope && !result.value.some((command) => command.name === "model")) items.push({
						id: "commands:client:model",
						providerId: "commands",
						kind: "command",
						title: "/model",
						subtitle: "Open DSH model selector",
						badges: ["DSH"],
						context: {
							...input.context,
							sessionId: String(current.id)
						},
						primary: {
							id: "open-model-selector",
							title: "Open",
							async run(signal) {
								if (await inputTriggers.sessionOf(scope).adjudicate("/model", signal, { images: 0 }) !== "handled") throw new Error("The DSH /model UI command is unavailable in this Session.");
							}
						}
					});
					return items;
				}
			};
		}
		function commandItem(remote, sessionId, descriptor, context) {
			const line = `/${descriptor.name}`;
			const keywords = [
				descriptor.name,
				descriptor.description,
				descriptor.input?.hint
			].filter((k) => typeof k === "string" && k.length > 0);
			return {
				id: `commands:${descriptor.name}`,
				providerId: "commands",
				kind: "command",
				title: line,
				aliases: [descriptor.name],
				source: "DSH",
				subtitle: descriptor.description,
				keywords,
				primary: {
					id: "execute",
					title: "Execute",
					kind: "primary",
					async run(signal) {
						const result = await remote.execute(sessionId, line, [], signal);
						if (!result.ok) throw remoteError("commands.execute", result);
						if (result.value === void 0) throw new Error(`commands.execute rejected unknown or malformed command: ${line}`);
						if (result.value.result.kind === "error") throw new Error(result.value.result.text);
					}
				},
				secondary: [],
				context: {
					...context,
					sessionId: String(sessionId)
				}
			};
		}
		function createSessionsProvider(sessions, workspaces, uiWorkspace) {
			return {
				id: "sessions",
				label: "Sessions",
				availability: "ready",
				async collect(input, signal) {
					let state = sessions.list.getSnapshot();
					if (state.phase === "pending") {
						await sessions.refresh();
						state = sessions.list.getSnapshot();
					}
					if (signal.aborted) return EMPTY_ITEMS;
					const workspaceState = workspaces.list.getSnapshot();
					return sessionItems(sessions, state, workspaceState, input.context, input.limit, uiWorkspace);
				}
			};
		}
		function sessionItems(sessions, state, workspaces, context, limit, uiWorkspace) {
			const archived = new Set(workspaces.archivedSessionIds);
			const items = [];
			for (const id of state.ids) {
				const summary = state.byId[id];
				if (summary === void 0 || archived.has(id)) continue;
				if (summary.parentId !== void 0 || summary.origin === "subagent") continue;
				const workspace = workspaces.items.find((candidate) => candidate.sessionIds.includes(id));
				items.push(sessionItem(sessions, summary, workspace?.workspaceId, state.current === id, context, uiWorkspace));
				if (items.length >= limit) break;
			}
			return items;
		}
		function sessionItem(sessions, summary, workspaceId, current, context, uiWorkspace) {
			const folderName = (summary.cwd ? summary.cwd.split(/[\\/]/).filter(Boolean) : []).at(-1);
			const keywords = [
				summary.title,
				summary.cwd,
				folderName,
				summary.id
			].filter((k) => typeof k === "string" && k.length > 0);
			return {
				id: `sessions:${summary.id}`,
				providerId: "sessions",
				kind: "session",
				title: summary.displayTitle || summary.title || "Untitled Session",
				updatedAt: summary.updatedAt,
				isCurrent: current,
				subtitle: [
					current ? "current" : void 0,
					summary.running ? "running" : "idle",
					summary.cwd
				].filter((part) => part !== void 0).join(" · "),
				keywords,
				badges: [relativeAge(summary.updatedAt)],
				primary: {
					id: "open",
					title: "Open",
					kind: "primary",
					run: () => {
						if (uiWorkspace && typeof uiWorkspace.openSession === "function") uiWorkspace.openSession(summary.id);
						else if (typeof sessions.open === "function") sessions.open(summary.id);
					}
				},
				secondary: [],
				context: {
					...context,
					sessionId: String(summary.id),
					...workspaceId === void 0 ? {} : { workspaceId: String(workspaceId) }
				}
			};
		}
		function createModelsProvider(sessions, modelDirectories) {
			return {
				id: "models",
				label: "Models",
				availability: "ready",
				async collect(input, signal) {
					const current = currentTopLevelSession(sessions);
					if (current === void 0) return EMPTY_ITEMS;
					const directory = modelDirectories.directoryFor(current.id);
					const state = await directory.load();
					if (signal.aborted) return EMPTY_ITEMS;
					return modelItems(directory, state, current.id, input.context, input.limit);
				}
			};
		}
		function modelItems(directory, state, sessionId, context, limit) {
			const items = [];
			for (const group of state.groups) for (const model of group.models) {
				items.push(modelItem(directory, state, group, model, sessionId, context));
				if (items.length >= limit) return items;
			}
			return items;
		}
		function modelItem(directory, state, group, model, sessionId, context) {
			const current = state.current?.provider === group.id && state.current.model === model.id;
			const reasoningEffort = current ? state.current?.reasoningEffort ?? model.reasoning?.defaultEffort : model.reasoning?.defaultEffort;
			return {
				id: `models:${group.id}:${model.id}`,
				providerId: "models",
				kind: "model",
				title: model.name,
				source: group.name,
				subtitle: model.description === void 0 ? group.name : `${group.name} · ${model.description}`,
				keywords: [
					group.id,
					group.name,
					model.id,
					model.name,
					model.description
				].filter((k) => typeof k === "string" && k.length > 0),
				badges: current ? ["current"] : reasoningEffort === void 0 ? void 0 : [reasoningEffort],
				primary: {
					id: "select",
					title: current ? "Selected" : "Select",
					kind: "primary",
					async run() {
						const selection = {
							provider: group.id,
							model: model.id,
							...reasoningEffort === void 0 ? {} : { reasoningEffort }
						};
						await directory.select(selection);
					}
				},
				secondary: [],
				context: {
					...context,
					provider: group.id,
					sessionId: String(sessionId)
				}
			};
		}
		function createConversationHitsProvider(sessions, uiWorkspace) {
			return {
				id: "conversation-hits",
				label: "Conversation Hits",
				availability: "ready",
				async collect(input, signal) {
					const query = input.query.trim();
					if (query === "") return EMPTY_ITEMS;
					const result = await sessions.search(query, signal);
					if (!result.ok) throw remoteError("sessions.search", result);
					if (signal.aborted) return EMPTY_ITEMS;
					return result.value.items.slice(0, input.limit).map((hit) => {
						const sess = sessions.list.getSnapshot().byId[hit.sessionId];
						const sessTitle = sess?.displayTitle ?? sess?.title ?? String(hit.sessionId);
						const folderName = (sess?.cwd?.split(/[\\/]/).filter(Boolean) ?? []).at(-1);
						return {
							id: `conversation-hits:${hit.sessionId}`,
							providerId: "conversation-hits",
							kind: "conversation-hit",
							title: sessTitle,
							updatedAt: sess?.updatedAt,
							workspaceTitle: folderName,
							source: "DSH",
							subtitle: "history hit",
							snippet: hit.snippet,
							keywords: [hit.snippet],
							primary: {
								id: "open",
								title: "Open",
								kind: "primary",
								run: () => {
									if (uiWorkspace && typeof uiWorkspace.openSession === "function") uiWorkspace.openSession(hit.sessionId);
									else if (typeof sessions.open === "function") sessions.open(hit.sessionId);
								}
							},
							secondary: [],
							context: {
								...input.context,
								sessionId: String(hit.sessionId)
							}
						};
					});
				}
			};
		}
		function relativeAge(updatedAt) {
			const minutes = Math.max(0, Math.round((Date.now() - updatedAt) / 6e4));
			if (minutes < 1) return "just now";
			if (minutes < 60) return `${minutes}m ago`;
			const hours = Math.round(minutes / 60);
			if (hours < 24) return `${hours}h ago`;
			return `${Math.round(hours / 24)}d ago`;
		}
		//#endregion
		//#region src/client/keysActions.ts
		const OPEN_ACTION_ID = "universal-palette.open";
		/**
		* Watch the public service and keep exactly one action registered while it
		* exists. Returns a disposer for tests; production callers wrap it in
		* `ctx.effect`. Never reads Keys Palette internals: bindings, sources and the
		* built-in actions stay owned by dsh-keys-palette.
		*/
		function bridgeKeysActions(ctx, options) {
			let unregister;
			let service;
			const attach = (next) => {
				unregister?.();
				unregister = next.register({
					id: OPEN_ACTION_ID,
					label: options.label(),
					description: options.description(),
					run: options.toggle
				});
				service = next;
			};
			const readService = () => typeof ctx.get === "function" ? ctx.get("keys.actions") : void 0;
			const existing = readService();
			if (existing) attach(existing);
			let offService;
			if (!existing && typeof ctx.on === "function") offService = ctx.on("internal/service", (name, value) => {
				if (name !== "keys.actions") return;
				if (value) {
					if (!service) attach(value);
				} else if (service) {
					service = void 0;
					unregister = void 0;
				}
			});
			const offLocale = options.onLocaleChange?.(() => {
				if (service) attach(service);
			});
			return () => {
				unregister?.();
				unregister = void 0;
				service = void 0;
				offService?.();
				offLocale?.();
			};
		}
		//#endregion
		//#region src/client/search-controller.ts
		/**
		* Single shared controller.
		*
		* Aggregator is mandatory at construction so both surfaces can rely on a
		* synchronous initial `aggregator` snapshot for the first paint. The
		* controller subscribes to the aggregator and re-emits on every batched
		* update.
		*/
		var SearchController = class {
			deps;
			listeners = /* @__PURE__ */ new Set();
			state;
			aggregatorUnsub;
			constructor(deps) {
				this.deps = deps;
				this.state = {
					presentation: null,
					sessionId: null,
					composerEntry: null,
					query: "",
					draft: "",
					mode: "all",
					aggregator: deps.aggregator.getState(),
					selectedIndex: 0,
					actionPanelOpen: false,
					actionPanelSelectedIndex: 0,
					generation: 0,
					hasAggregator: true,
					error: null
				};
				this.aggregatorUnsub = deps.aggregator.subscribe((next) => {
					this.state = {
						...this.state,
						aggregator: next
					};
					this.emit();
				});
			}
			getState() {
				return this.state;
			}
			subscribe(listener) {
				this.listeners.add(listener);
				listener(this.state);
				return () => {
					this.listeners.delete(listener);
				};
			}
			/**
			* Open the Floating surface. Atomic with respect to any other
			* presentation: the floating presentation commits *before* the old
			* surface's teardown callback fires. If Morph is open, Morph is closed
			* via `close()` after the new presentation is committed (single-surface
			* invariant).
			*/
			openFloating() {
				const next = {
					...this.state,
					presentation: "floating",
					sessionId: null,
					composerEntry: null,
					draft: "",
					mode: "all",
					selectedIndex: 0,
					actionPanelOpen: false,
					actionPanelSelectedIndex: 0,
					generation: this.state.generation + 1,
					error: null
				};
				this.commit(next);
				this.deps.aggregator.setQuery(next.draft);
			}
			/**
			* Open Composer-owned Search in the slot-mounted Morph presentation.
			* Fail-closed compatibility gate: a Hero surface (cold) on a host that
			* does not declare the Hero composer dock never enters the Morph
			* presentation — the shared `conversation.input.overlay` seat must not
			* be used as a downward fallback. Active sessions are unaffected.
			*/
			openComposerSearch(sessionId, entry = "direct") {
				if (!this.deps.heroComposerSearchAllowed()) return;
				this.openMorph(sessionId, entry);
			}
			/**
			* Open the Morph surface scoped to `sessionId`. Atomic: closes any open
			* Floating. Surfaces that re-open with a different `sessionId` bump the
			* generation, so the next render can rebind its session scope and the
			* aggregator's stale result cannot leak.
			*
			* Opening itself is a search trigger: the aggregator is always re-queried
			* with the reset draft, even when the query value did not change (notably
			* the empty-query first open, where no draft diff would otherwise fire).
			*/
			openMorph(sessionId, entry = "direct") {
				const next = {
					...this.state,
					presentation: "morph",
					sessionId,
					composerEntry: entry,
					draft: "",
					mode: "all",
					selectedIndex: 0,
					actionPanelOpen: false,
					actionPanelSelectedIndex: 0,
					generation: this.state.generation + 1,
					error: null
				};
				this.commit(next);
				this.deps.aggregator.setQuery(next.draft);
			}
			/** Switch the open presentation without resetting draft/query/etc. */
			switchPresentation(next, sessionId) {
				if (this.state.presentation === next) return;
				const state = {
					...this.state,
					presentation: next,
					sessionId: next === "floating" ? null : sessionId,
					composerEntry: next === "floating" ? null : this.state.composerEntry ?? "direct",
					generation: this.state.generation + 1,
					error: null
				};
				this.commit(state);
			}
			/** Close whatever surface is open. Aggregator is *not* cancelled here;
			* surfaces that own the floating lifetime are responsible for that. */
			close() {
				if (this.state.presentation === null) return;
				const next = {
					...this.state,
					presentation: null,
					sessionId: null,
					composerEntry: null,
					generation: this.state.generation + 1,
					error: null
				};
				this.commit(next);
			}
			setDraft(text) {
				if (this.state.draft === text) return;
				this.state = {
					...this.state,
					draft: text,
					error: null
				};
				this.emit();
				this.deps.aggregator.setQuery(text);
			}
			setMode(mode) {
				if (this.state.mode === mode) return;
				this.state = {
					...this.state,
					mode,
					draft: "",
					selectedIndex: 0,
					error: null
				};
				this.emit();
				this.deps.aggregator.setQueryImmediate("");
			}
			setSelectedIndex(index) {
				if (this.state.selectedIndex === index) return;
				this.state = {
					...this.state,
					selectedIndex: index
				};
				this.emit();
			}
			setActionPanelOpen(open) {
				if (this.state.actionPanelOpen === open) return;
				this.state = {
					...this.state,
					actionPanelOpen: open,
					actionPanelSelectedIndex: 0
				};
				this.emit();
			}
			setActionPanelIndex(index) {
				if (this.state.actionPanelSelectedIndex === index) return;
				this.state = {
					...this.state,
					actionPanelSelectedIndex: index
				};
				this.emit();
			}
			/**
			* Report the last action-run outcome. Surfaces call this with `null`
			* before every run attempt and with the failure message in their catch
			* path; commit paths (open/close/switch/mode/draft) clear it so a stale
			* action error can never outlive the interaction that produced it.
			*/
			reportError(message) {
				if (this.state.error === message) return;
				this.state = {
					...this.state,
					error: message
				};
				this.emit();
			}
			/** Returns the effective cold verdict for the surface to map to layout. */
			cold() {
				return this.deps.cold();
			}
			/** Returns the fail-closed Composer Search verdict (`!cold || hero dock declared`). */
			heroComposerSearchAllowed() {
				return this.deps.heroComposerSearchAllowed();
			}
			/** Release all subscribers and tear down the aggregator subscription. */
			dispose() {
				this.aggregatorUnsub();
				this.listeners.clear();
			}
			commit(next) {
				this.state = next;
				this.emit();
			}
			emit() {
				for (const listener of this.listeners) listener(this.state);
			}
		};
		//#endregion
		//#region src/client/cold.ts
		/**
		* Pure verdict from a Session Binding snapshot.
		*
		* - `undefined` binding or `undefined`/`null` snapshot -> `active` (the
		*   signal is unavailable; we never gamble on the more aggressive cold
		*   variant).
		* - snapshot `blank === true` -> cold.
		* - otherwise -> active.
		*/
		function verdictFromSnapshot(snapshot) {
			if (snapshot === void 0 || snapshot === null) return false;
			return snapshot.blank === true;
		}
		/**
		* Pure verdict from a binding. A `binding` of `undefined` (current id
		* resolves no binding) is `active` — the conservative signal.
		*/
		function verdictFromBinding(binding) {
			if (binding === void 0) return false;
			const getSnapshot = binding.session?.getSnapshot;
			if (typeof getSnapshot !== "function") return false;
			return verdictFromSnapshot(getSnapshot.call(binding.session));
		}
		/**
		* Pure verdict from a sessions service: empty list (no current id) is
		* cold; everything else defers to the binding verdict.
		*/
		function verdictFromSessions(sessions) {
			const current = sessions.list?.getSnapshot?.()?.current;
			if (current === void 0) return true;
			return verdictFromBinding(sessions.binding?.(current));
		}
		/**
		* Build a composite observable over Session Controller public state.
		*
		* - Subscribes to `ctx.sessions.list` for current-id changes.
		* - Subscribes to the current Session binding's `session` observable for
		*   `blank` flips; the subscription is moved whenever `current` changes,
		*   and is removed when there is no current Session.
		*
		* `stale-unknown` behavior: the observable keeps the last *confirmed*
		* verdict until either upstream confirms a new one. A transient
		* `undefined` binding never collapses cold back to active.
		*/
		function subscribeCold(ctx) {
			let verdict = readCold(ctx);
			const listeners = /* @__PURE__ */ new Set();
			let bindingOff;
			let sessionsOff;
			let disposed = false;
			const notify = () => {
				for (const fn of listeners) fn();
			};
			const rebind = () => {
				if (disposed) return;
				bindingOff?.();
				bindingOff = void 0;
				const list = ctx.sessions?.list;
				if (!list || typeof list.getSnapshot !== "function") return;
				const next = readCold(ctx);
				const id = list.getSnapshot().current;
				if (id === void 0) {
					if (next !== verdict) {
						verdict = next;
						notify();
					}
					return;
				}
				const binding = ctx.sessions.binding?.(id);
				if (binding === void 0 || typeof binding.session?.subscribe !== "function") return;
				if (next !== verdict) {
					verdict = next;
					notify();
				}
				const observed = binding.session.getSnapshot?.();
				bindingOff = binding.session.subscribe(() => {
					if (disposed) return;
					const confirmed = verdictFromSnapshot(binding.session.getSnapshot?.());
					if (confirmed !== verdict) {
						verdict = confirmed;
						notify();
					}
				});
				if (observed && verdictFromSnapshot(observed) !== verdict) {
					verdict = verdictFromSnapshot(observed);
					notify();
				}
			};
			sessionsOff = ctx.sessions?.list?.subscribe?.(() => {
				rebind();
			});
			rebind();
			return {
				getSnapshot: () => verdict,
				subscribe(fn) {
					if (disposed) return () => {};
					listeners.add(fn);
					return () => {
						listeners.delete(fn);
					};
				},
				dispose() {
					if (disposed) return;
					disposed = true;
					sessionsOff?.();
					sessionsOff = void 0;
					bindingOff?.();
					bindingOff = void 0;
					listeners.clear();
				}
			};
		}
		/**
		* Convenience read used by `subscribeCold` initial pass and pure tests.
		* Defensive against partial context mocks: every accessor is optional
		* and a wholly-missing signal reports cold (the legacy V0 default)
		* rather than throwing. Production code paths always have a real
		* `ctx.sessions.list.getSnapshot().current`.
		*/
		function readCold(ctx) {
			const list = ctx.sessions?.list;
			if (!list || typeof list.getSnapshot !== "function") return true;
			return verdictFromSessions(ctx.sessions);
		}
		//#endregion
		//#region src/client/heroDock.ts
		/** The experimental seat this plugin registers into; declared by enhanced hosts only. */
		const HERO_COMPOSER_DOCK = "conversation.hero.composer.dock";
		/**
		* Whether the host declares the Hero composer dock. Defensive against
		* partial test mocks: a missing or hostile slots face reports `false`
		* (fail closed), never throws.
		*/
		function createHeroDockAvailability(ctx) {
			const slots = ctx.slots;
			const read = () => {
				try {
					return typeof slots?.spec === "function" ? slots.spec(HERO_COMPOSER_DOCK) !== void 0 : false;
				} catch {
					return false;
				}
			};
			const listeners = /* @__PURE__ */ new Set();
			let off;
			if (typeof slots?.subscribe === "function") try {
				off = slots.subscribe(HERO_COMPOSER_DOCK, () => {
					for (const fn of [...listeners]) fn();
				});
			} catch {
				off = void 0;
			}
			return {
				getSnapshot: read,
				subscribe(fn) {
					listeners.add(fn);
					return () => {
						listeners.delete(fn);
					};
				},
				dispose: () => {
					try {
						off?.();
					} catch {}
					listeners.clear();
				}
			};
		}
		/**
		* Composer Search availability: `!cold || heroDockAvailable`.
		* Active sessions always pass; a Hero surface passes only when the host
		* declares the dock. Both upstream observables keep the verdict live.
		*/
		function createComposerSearchAvailability(cold, heroDock) {
			const read = () => !cold.getSnapshot() || heroDock.getSnapshot();
			const listeners = /* @__PURE__ */ new Set();
			const emit = () => {
				for (const fn of [...listeners]) fn();
			};
			const offCold = cold.subscribe(emit);
			const offDock = heroDock.subscribe(emit);
			return {
				getSnapshot: read,
				subscribe(fn) {
					listeners.add(fn);
					return () => {
						listeners.delete(fn);
					};
				},
				dispose: () => {
					try {
						offCold();
					} catch {}
					try {
						offDock();
					} catch {}
					listeners.clear();
				}
			};
		}
		/**
		* Render-level suppression for the shared active overlay seat. This is a
		* compatibility gate, not placement routing: placement stays owned by the
		* slot mount location. A Hero surface (cold) on a host without the dock
		* must not present the upward overlay.
		*/
		function suppressActiveOverlay(placement, cold, composerSearchAllowed) {
			return placement === "active-up" && cold && !composerSearchAllowed;
		}
		/**
		* Live suppression verdict for the shared active overlay seat, composed
		* from the cold verdict and the Composer Search availability. Surfaces
		* subscribe to it instead of reading cold directly, so the gate stays
		* reactive without re-introducing blank-driven placement.
		*/
		function createActiveOverlaySuppression(cold, composerSearch) {
			const read = () => suppressActiveOverlay("active-up", cold.getSnapshot(), composerSearch.getSnapshot());
			const listeners = /* @__PURE__ */ new Set();
			const emit = () => {
				for (const fn of [...listeners]) fn();
			};
			const offCold = cold.subscribe(emit);
			const offSearch = composerSearch.subscribe(emit);
			return {
				getSnapshot: read,
				subscribe(fn) {
					listeners.add(fn);
					return () => {
						listeners.delete(fn);
					};
				},
				dispose: () => {
					try {
						offCold();
					} catch {}
					try {
						offSearch();
					} catch {}
					listeners.clear();
				}
			};
		}
		//#endregion
		//#region src/client/sidebarState.ts
		function createSidebarObservable() {
			let wide = true;
			const listeners = /* @__PURE__ */ new Set();
			return {
				observable: {
					getSnapshot: () => wide,
					subscribe(fn) {
						listeners.add(fn);
						return () => {
							listeners.delete(fn);
						};
					}
				},
				setWide(next) {
					if (wide === next) return;
					wide = next;
					for (const listener of listeners) listener();
				}
			};
		}
		//#endregion
		//#region src/client/keyboard.ts
		const KNOWN_SHORTCUTS = {
			"Ctrl+K": "dsh-spotlight",
			"Cmd+K": "dsh-spotlight",
			"Alt+M": "dsh-model-palette",
			"Shift+Shift": "dsh-command-palette"
		};
		function normalizeMac(e) {
			const parts = [];
			if (e.metaKey) parts.push("Cmd");
			else if (e.ctrlKey) parts.push("Ctrl");
			if (e.altKey) parts.push("Alt");
			if (e.shiftKey && !(e.key === "Shift" && !e.ctrlKey && !e.altKey && !e.metaKey)) parts.push("Shift");
			const key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
			if (![
				"Control",
				"Shift",
				"Alt",
				"Meta"
			].includes(key)) parts.push(key);
			return parts.join("+");
		}
		function detectShortcut(e) {
			return normalizeMac(e);
		}
		function checkConflicts(shortcut) {
			const conflicts = [];
			for (const [key, owner] of Object.entries(KNOWN_SHORTCUTS)) if (key === shortcut) conflicts.push(owner);
			return {
				shortcut,
				conflictsWith: conflicts
			};
		}
		function attachKeyboard(opts) {
			function isComposing(target) {
				if (!(target instanceof HTMLElement)) return false;
				return target.dataset["composing"] === "true";
			}
			function handler(e) {
				if (e.isComposing || isComposing(e.target) || e.repeat) return;
				if (e.key === "Escape" && opts.isOpen?.()) {
					e.preventDefault();
					e.stopPropagation();
					(opts.onEscape ?? opts.onClose)();
					return;
				}
				const detected = detectShortcut(e);
				const isCmdK = (e.metaKey || e.ctrlKey) && !e.altKey && !e.shiftKey && (e.key === "k" || e.key === "K");
				if (detected === opts.shortcut || isCmdK) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					if (opts.isOpen?.()) opts.onClose();
					else opts.onOpen();
				}
			}
			if (typeof window !== "undefined") window.addEventListener("keydown", handler, { capture: true });
			const report = checkConflicts(opts.shortcut);
			if (report.conflictsWith.length > 0 && opts.onConflictDetected) opts.onConflictDetected(report);
			return {
				dispose() {
					if (typeof window !== "undefined") window.removeEventListener("keydown", handler, { capture: true });
				},
				reportConflicts() {
					return report;
				}
			};
		}
		//#endregion
		//#region src/client/shortcutConflicts.ts
		function createConflictObservable(initial = null) {
			let current = initial;
			const listeners = /* @__PURE__ */ new Set();
			return {
				getSnapshot: () => current,
				subscribe(fn) {
					listeners.add(fn);
					return () => {
						listeners.delete(fn);
					};
				},
				set(next) {
					if (current?.shortcut === next?.shortcut && current?.owners.length === next?.owners.length && (current?.owners ?? []).every((owner, i) => next?.owners[i] === owner)) return;
					current = next;
					for (const fn of [...listeners]) fn();
				}
			};
		}
		//#endregion
		//#region src/client/shortcut.ts
		function defaultShortcut(platform) {
			return platform === "darwin" ? "Cmd+Shift+K" : "Alt+Q";
		}
		//#endregion
		//#region src/client/icons.tsx
		function icon(current, legacy) {
			const component = Reflect.get(_deepseek_ai_dsh_client_ui_primitives, current) ?? Reflect.get(_deepseek_ai_dsh_client_ui_primitives, legacy);
			if (component === void 0) throw new Error(`Universal Palette: missing DSH icon ${current}`);
			return function PaletteIcon(props) {
				return (0, react.createElement)(component, {
					size: 16,
					...props
				});
			};
		}
		const IconSearchOutline16 = icon("IconSearchOutlineRegular", "IconSearchOutline16");
		const IconNewChatOutline16 = icon("IconNewChatOutlineRegular", "IconNewChatOutline16");
		const IconFolderOpenOutline16 = icon("IconFolderOpenOutlineRegular", "IconFolderOpenOutline16");
		const IconClockOutline16 = icon("IconClockOutlineRegular", "IconClockOutline16");
		const IconSparkle16 = icon("IconSparkleRegular", "IconSparkle16");
		const IconSkillOutline16 = icon("IconSkillOutlineRegular", "IconSkillOutline16");
		const IconAgentPresetOutline16 = icon("IconAgentPresetOutlineRegular", "IconAgentPresetOutline16");
		//#endregion
		//#region src/client/HighlightedText.ts
		function findTextMatchRanges(text, query) {
			const normalizedText = text.toLowerCase();
			const rawParts = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
			if (rawParts.length === 0 || text.length === 0) return [];
			const seen = /* @__PURE__ */ new Set();
			const parts = [];
			for (const part of rawParts) {
				const clean = part.replace(/^[>#@/]/, "");
				if (clean.length > 0 && !seen.has(clean)) {
					seen.add(clean);
					parts.push(clean);
				}
			}
			if (parts.length === 0) return [];
			const ranges = [];
			for (const part of parts) {
				let index = 0;
				while (index <= normalizedText.length - part.length) {
					const matchIndex = normalizedText.indexOf(part, index);
					if (matchIndex === -1) break;
					ranges.push({
						start: matchIndex,
						end: matchIndex + part.length
					});
					index = matchIndex + part.length;
				}
			}
			ranges.sort((a, b) => a.start - b.start || a.end - b.end);
			const merged = [];
			for (const r of ranges) {
				const last = merged[merged.length - 1];
				if (!last || r.start > last.end) merged.push({
					start: r.start,
					end: r.end
				});
				else last.end = Math.max(last.end, r.end);
			}
			return merged;
		}
		function HighlightedText(props) {
			const { text, query, highlightClassName } = props;
			const ranges = findTextMatchRanges(text, query);
			if (ranges.length === 0) return text;
			const nodes = [];
			let cursor = 0;
			ranges.forEach((range, idx) => {
				if (cursor < range.start) nodes.push((0, react.createElement)("span", { key: `p-${idx}` }, text.slice(cursor, range.start)));
				nodes.push((0, react.createElement)("mark", {
					key: `m-${idx}`,
					className: highlightClassName
				}, text.slice(range.start, range.end)));
				cursor = range.end;
			});
			if (cursor < text.length) nodes.push((0, react.createElement)("span", { key: "p-end" }, text.slice(cursor)));
			return (0, react.createElement)("span", null, ...nodes);
		}
		//#endregion
		//#region \0up-css:/Users/dangtruongan/study/dsh-universal-palette/src/client/UniversalPalette.module.css.mjs
		var UniversalPalette_module_css_default = {
			"section": "up_3oSXFa_section",
			"empty": "up_3oSXFa_empty",
			"error": "up_3oSXFa_error",
			"search": "up_3oSXFa_search",
			"surface": "up_3oSXFa_surface",
			"meta": "up_3oSXFa_meta",
			"badge": "up_3oSXFa_badge",
			"icon": "up_3oSXFa_icon",
			"rowBody": "up_3oSXFa_rowBody",
			"historyBar": "up_3oSXFa_historyBar",
			"searchIcon": "up_3oSXFa_searchIcon",
			"commandIcon": "up_3oSXFa_commandIcon",
			"selected": "up_3oSXFa_selected",
			"snippet": "up_3oSXFa_snippet",
			"scopeBar": "up_3oSXFa_scopeBar",
			"scopePillActive": "up_3oSXFa_scopePillActive",
			"root": "up_3oSXFa_root",
			"titleLine": "up_3oSXFa_titleLine",
			"historyRow": "up_3oSXFa_historyRow",
			"searchInput": "up_3oSXFa_searchInput",
			"action": "up_3oSXFa_action",
			"historyChip": "up_3oSXFa_historyChip",
			"list": "up_3oSXFa_list",
			"historyChips": "up_3oSXFa_historyChips",
			"title": "up_3oSXFa_title",
			"clearHistoryBtn": "up_3oSXFa_clearHistoryBtn",
			"hint": "up_3oSXFa_hint",
			"actionPanel": "up_3oSXFa_actionPanel",
			"scopePill": "up_3oSXFa_scopePill",
			"historyMeta": "up_3oSXFa_historyMeta",
			"highlightMark": "up_3oSXFa_highlightMark",
			"footer": "up_3oSXFa_footer",
			"historyLabel": "up_3oSXFa_historyLabel",
			"guidance": "up_3oSXFa_guidance",
			"row": "up_3oSXFa_row",
			"heading": "up_3oSXFa_heading"
		};
		const cssText$1 = ".up_3oSXFa_root{box-sizing:border-box;padding:clamp(64px,10vh,104px) 16px 24px;font:13px/1.5 var(--dsw-font-family);justify-content:center;align-items:flex-start;padding-inline-start:calc(16px + clamp(0px,4vw,56px));display:flex;position:absolute;inset:0;pointer-events:none!important}.up_3oSXFa_root[data-sidebar-wide=true]{padding-inline-start:calc(16px + clamp(0px,16vw,280px))}.up_3oSXFa_root[data-presentation=floating][data-cold=true]{justify-content:center;padding-inline:calc(16px + clamp(0px,4vw,56px)) 16px}.up_3oSXFa_root[data-presentation=floating][data-cold=true] .up_3oSXFa_surface{width:540px;max-height:min(60vh,320px)}.up_3oSXFa_root[data-presentation=floating][data-cold=true] .up_3oSXFa_list{max-height:min(40vh,240px)}.up_3oSXFa_root[data-presentation=morph][data-cold=false]{pointer-events:none;justify-content:center;padding:0;display:flex;position:absolute;inset:auto 0 calc(100% + 4px)}.up_3oSXFa_root[data-presentation=morph][data-cold=false] .up_3oSXFa_surface{pointer-events:auto;width:600px;max-width:100%;max-height:min(70vh,480px)}.up_3oSXFa_root[data-presentation=morph][data-cold=false] .up_3oSXFa_list{max-height:min(50vh,360px)}.up_3oSXFa_surface{pointer-events:auto;box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l1);background:color-mix(in srgb, var(--dsw-specific-menu) 76%, transparent);backdrop-filter:blur(22px)saturate(1.12);width:600px;max-width:100%;max-height:100%;color:var(--dsw-alias-label-primary);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-panel);--dsh-scrollbar-thumb:var(--dsw-alias-scrollbar-bg-l2);--dsh-scrollbar-thumb-hover:var(--dsw-alias-scrollbar-hover-l2);border-radius:20px;flex-direction:column;display:flex;overflow:hidden}.up_3oSXFa_search{border-bottom:.5px solid var(--dsw-alias-border-l2);flex:none;align-items:center;gap:10px;min-height:52px;padding:0 18px;display:flex}.up_3oSXFa_searchIcon{color:var(--dsw-alias-label-tertiary);flex:none}.up_3oSXFa_searchInput{width:100%;min-width:0;font:inherit;color:inherit;caret-color:var(--dsw-alias-label-primary);background:0 0;border:0;outline:none;padding:0;font-size:14px}.up_3oSXFa_searchInput::placeholder{color:var(--dsw-alias-label-tertiary)}.up_3oSXFa_list{min-height:0;max-height:440px;padding:4px;overflow-y:auto}.up_3oSXFa_section{color:var(--dsw-alias-label-tertiary);padding:3px 12px 1px;font-size:11px;line-height:18px}.up_3oSXFa_titleLine{align-items:baseline;gap:10px;min-width:0;display:flex}.up_3oSXFa_titleLine .up_3oSXFa_title{flex:1;min-width:0}.up_3oSXFa_historyMeta{text-overflow:ellipsis;white-space:nowrap;max-width:48%;color:var(--dsw-alias-label-tertiary);font-size:10px;overflow:hidden}.up_3oSXFa_row{box-sizing:border-box;min-height:46px;transition:background-color var(--ds-transition-duration-fast) var(--ds-ease-in-out);cursor:pointer;border-radius:8px;align-items:center;gap:10px;padding:4px 12px;display:flex}.up_3oSXFa_row:hover,.up_3oSXFa_selected{background:var(--dsw-alias-interactive-bg-hover)}.up_3oSXFa_historyRow{min-height:58px}.up_3oSXFa_icon{width:18px;color:var(--dsw-alias-label-tertiary);flex:none;justify-content:center;align-items:center;display:flex}.up_3oSXFa_commandIcon{font:16px var(--ds-font-family-code)}.up_3oSXFa_rowBody{flex:1;min-width:0}.up_3oSXFa_title{white-space:nowrap;text-overflow:ellipsis;font-size:13px;font-weight:500;overflow:hidden}.up_3oSXFa_meta,.up_3oSXFa_snippet{color:var(--dsw-alias-label-tertiary);white-space:nowrap;text-overflow:ellipsis;font-size:12px;overflow:hidden}.up_3oSXFa_badge{color:var(--dsw-alias-label-tertiary);white-space:nowrap;flex:none;font-size:11px}.up_3oSXFa_empty{color:var(--dsw-alias-label-secondary);overflow-wrap:anywhere;padding:16px 14px}.up_3oSXFa_empty span{color:var(--dsw-alias-label-tertiary);margin-top:4px;font-size:12px;display:block}.up_3oSXFa_guidance{padding:12px 18px 6px}.up_3oSXFa_heading{color:var(--dsw-alias-label-secondary);font-size:12px;font-weight:500}.up_3oSXFa_hint{color:var(--dsw-alias-label-tertiary);margin-top:4px;font-size:12px}.up_3oSXFa_error{color:var(--dsw-alias-state-error-primary);padding:8px 18px}.up_3oSXFa_actionPanel{border-top:.5px solid var(--dsw-alias-border-l2);padding:4px}.up_3oSXFa_action{text-align:left;width:100%;color:inherit;font:inherit;cursor:pointer;background:0 0;border:0;border-radius:8px;padding:8px 12px;display:block}.up_3oSXFa_action:hover,.up_3oSXFa_action.up_3oSXFa_selected{background:var(--dsw-alias-interactive-bg-hover)}.up_3oSXFa_scopeBar{border-bottom:.5px solid var(--dsw-alias-border-l2);flex:none;align-items:center;gap:6px;padding:6px 18px 8px;display:flex;overflow-x:auto}.up_3oSXFa_scopePill{border:.5px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;transition:all var(--ds-transition-duration-fast) var(--ds-ease-in-out);white-space:nowrap;background:0 0;border-radius:12px;align-items:center;gap:4px;padding:2px 9px;font-size:11px;display:inline-flex}.up_3oSXFa_scopePill:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.up_3oSXFa_scopePillActive{background:color-mix(in srgb, var(--dsw-alias-interactive-primary,#3b82f6) 18%, transparent);border-color:var(--dsw-alias-interactive-primary,#3b82f6);color:var(--dsw-alias-label-primary);font-weight:500}.up_3oSXFa_historyBar{border-bottom:.5px solid var(--dsw-alias-border-l2);flex-wrap:wrap;align-items:center;gap:8px;padding:6px 18px;display:flex}.up_3oSXFa_historyLabel{color:var(--dsw-alias-label-tertiary);flex:none;font-size:11px}.up_3oSXFa_historyChips{flex-wrap:wrap;flex:1;align-items:center;gap:6px;display:flex}.up_3oSXFa_historyChip{border:.5px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;transition:background-color var(--ds-transition-duration-fast);background:0 0;border-radius:6px;align-items:center;padding:2px 8px;font-size:11px;display:inline-flex}.up_3oSXFa_historyChip:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}.up_3oSXFa_clearHistoryBtn{color:var(--dsw-alias-label-tertiary);font:inherit;cursor:pointer;background:0 0;border:0;margin-left:auto;padding:2px 4px;font-size:10px}.up_3oSXFa_clearHistoryBtn:hover{color:var(--dsw-alias-label-secondary);text-decoration:underline}.up_3oSXFa_highlightMark{background:color-mix(in srgb, var(--dsw-alias-interactive-primary,#3b82f6) 24%, transparent);color:inherit;border-radius:2px;padding:0 1px;font-weight:600}.up_3oSXFa_footer{color:var(--dsw-alias-label-tertiary);border-top:.5px solid var(--dsw-alias-border-l2);white-space:nowrap;flex:none;padding:10px 18px;font-size:11px}@supports not (backdrop-filter:blur(1px)){.up_3oSXFa_surface{background:var(--dsw-specific-menu)}}@media (prefers-contrast:more){.up_3oSXFa_surface{background:var(--dsw-specific-menu)}}@media (prefers-reduced-motion:reduce){.up_3oSXFa_row{transition:none}}@media (width<=640px){.up_3oSXFa_root,.up_3oSXFa_root[data-sidebar-wide=true]{padding-inline:12px}.up_3oSXFa_footer{padding-inline:12px;font-size:10px}}";
		//#endregion
		//#region src/client/UniversalPalette.tsx
		/** Stable, presentation-agnostic renderer shared by Floating and Morph. */
		function UniversalPalette(props) {
			const surface = (0, react.useRef)(null);
			const search = (0, react.useRef)(null);
			const selectedRow = (0, react.useRef)(null);
			const returnFocus = (0, react.useRef)(typeof document !== "undefined" && document.activeElement instanceof HTMLElement ? document.activeElement : null);
			const composing = (0, react.useRef)(false);
			const close = (0, react.useRef)(props.onClose);
			close.current = props.onClose;
			(0, react.useLayoutEffect)(() => {
				search.current?.focus({ preventScroll: true });
				return () => {
					if (returnFocus.current?.isConnected) returnFocus.current.focus({ preventScroll: true });
				};
			}, []);
			(0, react.useEffect)(() => {
				const outside = (event) => {
					if (event.target instanceof Node && !surface.current?.contains(event.target)) close.current();
				};
				window.addEventListener("pointerdown", outside, { capture: true });
				return () => window.removeEventListener("pointerdown", outside, { capture: true });
			}, []);
			(0, react.useEffect)(() => {
				selectedRow.current?.scrollIntoView({ block: "nearest" });
			}, [props.selectedIndex]);
			const current = props.items[props.selectedIndex]?.item;
			const actions = current ? [current.primary, ...current.secondary ?? []] : [];
			const keydown = (event) => {
				if (composing.current || event.nativeEvent.isComposing || event.repeat) return;
				switch (event.key) {
					case "Escape":
						event.preventDefault();
						if (props.actionPanelOpen) props.onCloseActionPanel();
						else close.current();
						break;
					case "ArrowDown":
					case "ArrowUp": {
						event.preventDefault();
						const step = event.key === "ArrowDown" ? 1 : -1;
						if (props.actionPanelOpen && actions.length) props.onActionPanelIndexChange((props.actionPanelSelectedIndex + step + actions.length) % actions.length);
						else props.onSelectedIndexChange(Math.max(0, Math.min(props.items.length - 1, props.selectedIndex + step)));
						break;
					}
					case "Enter":
						event.preventDefault();
						if (props.actionPanelOpen) {
							const action = actions[props.actionPanelSelectedIndex];
							if (current && action) props.onRunSecondary(current, action);
						} else props.onRunPrimary();
						break;
					case "Tab":
						event.preventDefault();
						if (props.actionPanelOpen) props.onCloseActionPanel();
						else if (actions.length) {
							props.onActionPanelIndexChange(0);
							props.onOpenActionPanel();
						}
				}
			};
			const rootAttrs = {
				"data-plugin": "dsh-universal-palette",
				"data-sidebar-wide": String(props.sidebarWide),
				"data-cold": String(props.cold),
				"data-presentation": props.rootDataAttributes?.["data-presentation"] ?? "floating"
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: UniversalPalette_module_css_default.root,
				...rootAttrs,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", {
					"data-plugin": "dsh-universal-palette",
					children: cssText$1
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					ref: surface,
					className: UniversalPalette_module_css_default.surface,
					role: "dialog",
					"aria-label": props.t("palette"),
					children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: UniversalPalette_module_css_default.search,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconSearchOutline16, { className: UniversalPalette_module_css_default.searchIcon }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								ref: search,
								className: UniversalPalette_module_css_default.searchInput,
								"aria-label": props.t("search"),
								role: "combobox",
								"aria-expanded": "true",
								"aria-controls": "up-results",
								"aria-autocomplete": "list",
								"aria-activedescendant": current ? `up-result-${props.selectedIndex}` : void 0,
								placeholder: props.t("search"),
								value: props.query,
								spellCheck: false,
								autoComplete: "off",
								onKeyDown: keydown,
								onCompositionStart: () => {
									composing.current = true;
								},
								onCompositionEnd: (event) => {
									composing.current = false;
									props.onQueryChange(event.currentTarget.value);
								},
								onChange: (event) => props.onQueryChange(event.currentTarget.value)
							})]
						}),
						props.onSelectScope && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: UniversalPalette_module_css_default.scopeBar,
							role: "tablist",
							children: [
								/* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: `${UniversalPalette_module_css_default.scopePill} ${!props.activeScope || props.activeScope === "all" ? UniversalPalette_module_css_default.scopePillActive : ""}`,
									onClick: () => props.onSelectScope?.("all"),
									children: props.t("scopeAll")
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `${UniversalPalette_module_css_default.scopePill} ${props.activeScope === "commands" ? UniversalPalette_module_css_default.scopePillActive : ""}`,
									onClick: () => props.onSelectScope?.("commands"),
									children: ["> ", props.t("scopeCommands")]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `${UniversalPalette_module_css_default.scopePill} ${props.activeScope === "sessions" ? UniversalPalette_module_css_default.scopePillActive : ""}`,
									onClick: () => props.onSelectScope?.("sessions"),
									children: ["# ", props.t("scopeSessions")]
								}),
								/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: `${UniversalPalette_module_css_default.scopePill} ${props.activeScope === "workspaces" ? UniversalPalette_module_css_default.scopePillActive : ""}`,
									onClick: () => props.onSelectScope?.("workspaces"),
									children: ["@ ", props.t("scopeWorkspaces")]
								})
							]
						}),
						props.historyEntries && props.historyEntries.length > 0 && !props.query.trim() && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: UniversalPalette_module_css_default.historyBar,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: UniversalPalette_module_css_default.historyLabel,
								children: props.t("recentSearches")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								className: UniversalPalette_module_css_default.historyChips,
								children: [props.historyEntries.map((h, i) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("button", {
									type: "button",
									className: UniversalPalette_module_css_default.historyChip,
									onClick: () => props.onPickHistory?.(h),
									children: [h.scope !== "all" ? `${scopeToPrefix(h.scope)} ` : "", h.query]
								}, `${h.query}-${i}`)), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
									type: "button",
									className: UniversalPalette_module_css_default.clearHistoryBtn,
									onClick: () => props.onClearHistory?.(),
									children: props.t("clearHistory")
								})]
							})]
						}),
						(props.guidance || props.contextHint) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: UniversalPalette_module_css_default.guidance,
							children: [props.guidance && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: UniversalPalette_module_css_default.heading,
								children: props.guidance
							}), props.contextHint && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: UniversalPalette_module_css_default.hint,
								children: props.contextHint
							})]
						}),
						props.conflicts.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: UniversalPalette_module_css_default.guidance,
							"data-conflict": "true",
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: UniversalPalette_module_css_default.hint,
								role: "status",
								children: props.t("shortcutConflict", {
									shortcut: props.shortcut ?? "",
									owners: props.conflicts.join(", ")
								})
							})
						}),
						props.error && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: UniversalPalette_module_css_default.error,
							role: "alert",
							children: props.error
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: UniversalPalette_module_css_default.list,
							id: "up-results",
							role: "listbox",
							"aria-label": props.t("results"),
							children: props.items.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: UniversalPalette_module_css_default.empty,
								role: "status",
								children: props.isLoading ? props.t("searching") : props.query.trim() ? /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [props.t("noResults", { query: props.query }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: props.t("tryAgain") })] }) : props.emptyMessage ?? props.t("empty")
							}) : props.items.map(({ item }, index) => {
								const Icon = item.kind === "model" ? IconSparkle16 : item.kind === "workspace" || item.id === "startup:workspace" ? IconFolderOpenOutline16 : item.kind === "conversation-hit" || item.id === "startup:recent" ? IconClockOutline16 : IconNewChatOutline16;
								const section = item.kind === "session" ? "current" : item.kind === "model" ? "models" : item.kind === "workspace" ? "workspace" : item.kind === "conversation-hit" ? "history" : "commands";
								const metadata = item.kind === "conversation-hit" ? [
									props.t("history"),
									item.updatedAt ? new Date(item.updatedAt).toLocaleString() : "",
									item.workspaceTitle
								].filter(Boolean).join(" · ") : void 0;
								return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [props.sections && (index === 0 || props.items[index - 1]?.item.kind !== item.kind) && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
									className: UniversalPalette_module_css_default.section,
									role: "presentation",
									children: props.t(section)
								}), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
									ref: index === props.selectedIndex ? selectedRow : void 0,
									id: `up-result-${index}`,
									className: `${UniversalPalette_module_css_default.row} ${index === props.selectedIndex ? UniversalPalette_module_css_default.selected : ""} ${item.snippet ? UniversalPalette_module_css_default.historyRow : ""}`,
									role: "option",
									"aria-selected": index === props.selectedIndex,
									"data-kind": item.kind,
									"data-session-id": item.kind === "session" ? item.context?.sessionId : void 0,
									onPointerMove: () => {
										if (props.selectedIndex !== index) props.onSelectedIndexChange(index);
									},
									onMouseDown: (event) => event.preventDefault(),
									onClick: () => {
										props.onSelectedIndexChange(index);
										props.onRunSecondary(item, item.primary);
									},
									children: [
										/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: UniversalPalette_module_css_default.icon,
											"aria-hidden": "true",
											children: item.kind === "command" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
												className: UniversalPalette_module_css_default.commandIcon,
												children: "/"
											}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {})
										}),
										/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
											className: UniversalPalette_module_css_default.rowBody,
											children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
												className: UniversalPalette_module_css_default.titleLine,
												children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
													className: UniversalPalette_module_css_default.title,
													children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HighlightedText, {
														text: item.title,
														query: props.query,
														highlightClassName: UniversalPalette_module_css_default.highlightMark
													})
												}), metadata && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
													className: UniversalPalette_module_css_default.historyMeta,
													children: metadata
												})]
											}), item.snippet ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: UniversalPalette_module_css_default.snippet,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HighlightedText, {
													text: item.snippet,
													query: props.query,
													highlightClassName: UniversalPalette_module_css_default.highlightMark
												})
											}) : item.subtitle ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
												className: UniversalPalette_module_css_default.meta,
												children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(HighlightedText, {
													text: item.subtitle,
													query: props.query,
													highlightClassName: UniversalPalette_module_css_default.highlightMark
												})
											}) : null]
										}),
										item.badges?.length ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: UniversalPalette_module_css_default.badge,
											children: item.badges.join(" · ")
										}) : null,
										actions.length > 0 && index === props.selectedIndex && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: UniversalPalette_module_css_default.badge,
											children: "Tab"
										})
									]
								})] }, item.id);
							})
						}),
						props.actionPanelOpen && current && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: UniversalPalette_module_css_default.actionPanel,
							role: "listbox",
							"aria-label": props.t("actions"),
							children: actions.map((action, index) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								className: `${UniversalPalette_module_css_default.action} ${index === props.actionPanelSelectedIndex ? UniversalPalette_module_css_default.selected : ""}`,
								role: "option",
								"aria-selected": index === props.actionPanelSelectedIndex,
								onMouseDown: (event) => event.preventDefault(),
								onClick: () => props.onRunSecondary(current, action),
								children: action.title
							}, action.id))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: UniversalPalette_module_css_default.footer,
							children: props.t("footer")
						})
					]
				})]
			});
		}
		//#endregion
		//#region src/client/startup.ts
		/** Navigation only: the official Workspace UI owns picking and blank-session reuse. */
		function createStartupItems(ctx, showWorkspaces, showRecent, t = (key) => en[key]) {
			const pick = async () => {
				const path = await ctx.uiWorkspace.pickDirectory();
				if (path === null) return;
				const workspace = await ctx.workspaces.create({ path });
				const id = await ctx.uiWorkspace.connectWorkspace(workspace.workspaceId);
				if (typeof ctx.uiWorkspace?.openSession === "function") ctx.uiWorkspace.openSession(id);
				else if (typeof ctx.sessions?.open === "function") ctx.sessions.open(id);
			};
			const hasWorkspace = ctx.workspaces.list.getSnapshot().items.length > 0;
			return [
				{
					id: "startup:workspace",
					providerId: "navigation",
					kind: "action",
					title: t("workspace"),
					subtitle: t("choose"),
					primary: {
						id: "select-workspace",
						title: t("workspace"),
						stayOpen: true,
						run: hasWorkspace ? showWorkspaces : pick
					}
				},
				{
					id: "startup:new",
					providerId: "navigation",
					kind: "action",
					title: t("newSession"),
					subtitle: hasWorkspace ? t("newHint") : t("chooseHint"),
					primary: {
						id: "new-session",
						title: t("newSession"),
						stayOpen: true,
						run: hasWorkspace ? () => {
							ctx.uiWorkspace.startSession();
						} : pick
					}
				},
				{
					id: "startup:recent",
					providerId: "navigation",
					kind: "action",
					title: t("recent"),
					subtitle: t("recentHint"),
					primary: {
						id: "recent",
						title: t("recent"),
						stayOpen: true,
						run: showRecent
					}
				}
			];
		}
		/** Keep each available native category visible, retaining rank/frecency within it. */
		function contextualItems(items) {
			const unique = /* @__PURE__ */ new Map();
			for (const row of items) {
				const item = row.item;
				const identity = item.kind === "session" ? item.context?.sessionId ?? item.id : item.id;
				const key = `${item.kind}:${identity}`;
				const previous = unique.get(key);
				if (!previous || item.kind === "session" && item.isCurrent && !previous.item.isCurrent) unique.set(key, row);
			}
			const groups = [
				"session",
				"command",
				"model"
			].map((kind) => [...unique.values()].filter((row) => row.item.kind === kind));
			groups[0].sort((a, b) => Number(!!b.item.isCurrent) - Number(!!a.item.isCurrent));
			const result = [];
			for (let n = 0; result.length < 8 && groups.some((group) => n < group.length); n++) for (const group of groups) if (group[n] && result.length < 8) result.push(group[n]);
			return [
				"session",
				"command",
				"model"
			].flatMap((kind) => result.filter((row) => row.item.kind === kind));
		}
		//#endregion
		//#region src/client/paletteSurface.tsx
		/**
		* Pure projection from `SearchState + driver` to the renderer-friendly
		* `PreparedView`. No I/O, no React, no surface-specific state.
		*/
		function prepareView(state, driver) {
			const draft = state.draft;
			const resolved = resolveQueryScope(draft);
			const effectiveScope = resolved.explicit ? resolved.scope : state.mode;
			const cleanQuery = resolved.query;
			const pendingQuery = effectiveScope !== "workspaces" && state.aggregator.query !== cleanQuery;
			const queryItems = state.aggregator.items;
			let visible;
			if (effectiveScope === "sessions") visible = queryItems.filter((row) => row.item.kind === "session" || row.item.kind === "conversation-hit").map((row) => ({
				item: row.item,
				score: row.score,
				matchRanges: row.match.ranges
			}));
			else if (effectiveScope === "commands") visible = queryItems.filter((row) => row.item.kind === "command" || row.item.kind === "action").map((row) => ({
				item: row.item,
				score: row.score,
				matchRanges: row.match.ranges
			}));
			else if (effectiveScope === "workspaces") {
				const q = cleanQuery.toLowerCase();
				visible = driver.workspaces.filter((w) => !q || `${w.title} ${w.path}`.toLowerCase().includes(q)).map((w) => ({
					item: workspaceItem(w, driver),
					score: 0,
					matchRanges: []
				}));
			} else if (!driver.hasSession && cleanQuery === "") {
				const startup = createStartupItems(driver.ctx, () => driver.setMode("workspaces"), () => driver.setMode("sessions"), driver.t);
				const base = contextualItems(queryItems);
				visible = [...startup.map(asRanked), ...base.map((r) => ({
					item: r.item,
					score: r.score,
					matchRanges: r.match.ranges
				}))];
			} else if (cleanQuery === "") visible = (driver.hasSession ? contextualItems(queryItems) : queryItems).map((row) => ({
				item: row.item,
				score: row.score,
				matchRanges: row.match.ranges
			}));
			else visible = queryItems.map((r) => ({
				item: r.item,
				score: r.score,
				matchRanges: r.match.ranges
			}));
			const guidance = effectiveScope === "workspaces" ? driver.t("workspace") : effectiveScope === "sessions" ? driver.t("recent") : effectiveScope === "commands" ? driver.t("commands") : !driver.hasSession && cleanQuery === "" ? driver.workspaces.length === 0 ? driver.t("choose") : driver.t("create") : void 0;
			const contextHint = !driver.hasSession && cleanQuery === "" ? driver.t("requires") : effectiveScope === "sessions" && visible.length === 0 ? driver.t("noRecent") : void 0;
			const emptyMessage = effectiveScope === "sessions" ? driver.t("noRecent") : driver.t("empty");
			return {
				items: pendingQuery ? [] : visible,
				guidance,
				contextHint,
				sections: driver.hasSession && effectiveScope === "all" && cleanQuery === "" || effectiveScope === "all" && cleanQuery !== "",
				emptyMessage,
				isEmpty: visible.length === 0,
				pendingQuery,
				activeScope: effectiveScope,
				effectiveQuery: cleanQuery
			};
		}
		function asRanked(item) {
			return {
				item,
				score: 0,
				matchRanges: []
			};
		}
		function workspaceItem(w, driver) {
			return {
				id: `workspace:${w.workspaceId}`,
				providerId: "navigation",
				kind: "workspace",
				title: w.title,
				subtitle: w.path,
				primary: {
					id: "open-workspace",
					title: "Open",
					run: async () => {
						const ui = driver.ctx.uiWorkspace;
						if (ui && typeof ui.connectWorkspace === "function") {
							const sessionId = await ui.connectWorkspace(w.workspaceId);
							if (typeof ui.openSession === "function") ui.openSession(sessionId);
							else if (typeof driver.ctx.sessions?.open === "function") driver.ctx.sessions.open(sessionId);
						} else if (ui && typeof ui.openWorkspace === "function") await ui.openWorkspace(w.workspaceId);
						else if (typeof driver.ctx.sessions?.open === "function") driver.ctx.sessions.open(w.workspaceId);
					}
				}
			};
		}
		function localizedError(reason, t) {
			const message = reason instanceof Error ? reason.message : String(reason);
			return message.startsWith("Feedback text is required") ? t("feedbackRequired") : message;
		}
		//#endregion
		//#region src/client/search-history.ts
		const STORAGE_KEY = "dsh-universal-palette:search-history";
		const MAX_HISTORY_ITEMS = 15;
		function getStorage() {
			if (typeof window === "undefined") return null;
			try {
				return window.localStorage;
			} catch {
				return null;
			}
		}
		function readSearchHistory() {
			const storage = getStorage();
			if (!storage) return [];
			try {
				const raw = storage.getItem(STORAGE_KEY);
				if (!raw) return [];
				const parsed = JSON.parse(raw);
				if (!Array.isArray(parsed)) return [];
				return parsed.filter((entry) => entry && typeof entry === "object" && typeof entry.query === "string" && typeof entry.timestamp === "number").slice(0, MAX_HISTORY_ITEMS);
			} catch {
				return [];
			}
		}
		function pushSearchHistory(query, scope = "all") {
			const trimmed = query.trim();
			if (!trimmed || trimmed === ">" || trimmed === "#" || trimmed === "@") return readSearchHistory();
			const storage = getStorage();
			const nextEntry = {
				query: trimmed,
				scope,
				timestamp: Date.now()
			};
			const current = readSearchHistory();
			const lowerQuery = trimmed.toLowerCase();
			const deduplicated = [nextEntry, ...current.filter((entry) => entry.query.toLowerCase() !== lowerQuery)].slice(0, MAX_HISTORY_ITEMS);
			if (storage) try {
				storage.setItem(STORAGE_KEY, JSON.stringify(deduplicated));
			} catch {}
			return deduplicated;
		}
		function clearSearchHistory() {
			const storage = getStorage();
			if (!storage) return;
			try {
				storage.removeItem(STORAGE_KEY);
			} catch {}
		}
		//#endregion
		//#region src/client/floating.tsx
		function Floating(props) {
			const locale = (0, react.useSyncExternalStore)((fn) => props.ctx.locale.subscribe(fn), () => props.ctx.locale.getSnapshot());
			const t = (0, react.useMemo)(() => bindLocale$2(props.ctx.locale, NS), [props.ctx.locale]);
			const sidebarWide = (0, react.useSyncExternalStore)(props.sidebar.subscribe, props.sidebar.getSnapshot);
			const cold = (0, react.useSyncExternalStore)(props.cold.subscribe, props.cold.getSnapshot);
			const controller = props.controller;
			const state = (0, react.useSyncExternalStore)((fn) => controller.subscribe(fn), () => controller.getState());
			const conflicts = (0, react.useSyncExternalStore)(props.shortcutConflicts?.subscribe ?? (() => () => void 0), props.shortcutConflicts?.getSnapshot ?? (() => null), props.shortcutConflicts?.getSnapshot ?? (() => null));
			const returnFocus = (0, react.useRef)(null);
			const [history, setHistory] = (0, react.useState)(() => readSearchHistory());
			const [view, setView] = (0, react.useState)(() => buildView$1(state, props, t, controller));
			(0, react.useEffect)(() => {
				setView(buildView$1(state, props, t, controller));
			}, [
				state,
				props,
				t,
				locale,
				controller
			]);
			(0, react.useEffect)(() => {
				if (state.presentation === "floating") setHistory(readSearchHistory());
			}, [state.presentation]);
			(0, react.useEffect)(() => {
				const refresh = () => {
					if (controller.getState().presentation !== "floating") return;
					props.aggregator.setQueryImmediate(controller.getState().draft);
				};
				const offSessions = props.ctx.sessions.list.subscribe(refresh);
				const offWorkspaces = props.ctx.workspaces.list.subscribe(refresh);
				return () => {
					offSessions();
					offWorkspaces();
				};
			}, [controller, props]);
			(0, react.useLayoutEffect)(() => {
				if (state.presentation !== "floating") {
					if (returnFocus.current?.isConnected) {
						returnFocus.current.focus({ preventScroll: true });
						returnFocus.current = null;
					}
					return;
				}
				returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
			}, [state.presentation]);
			if (state.presentation !== "floating") return null;
			const displayError = state.error ? localizedError(state.error, t) : state.aggregator.failures.length ? t("providerFailed") : "";
			const recordCurrentSearch = () => {
				const q = (view.effectiveQuery || state.draft).trim();
				if (q) {
					const updated = pushSearchHistory(q, view.activeScope);
					setHistory(updated);
				}
			};
			const runPrimary = async () => {
				const item = view.items[Math.min(state.selectedIndex, Math.max(0, view.items.length - 1))]?.item;
				if (!item) return;
				recordCurrentSearch();
				controller.reportError(null);
				try {
					await props.preferences.recordUse(item.id);
					await item.primary.run(new AbortController().signal);
					if (item.primary.stayOpen !== true) controller.close();
				} catch (e) {
					controller.reportError(e instanceof Error ? e.message : String(e));
				}
			};
			const runSecondary = async (item, action) => {
				recordCurrentSearch();
				controller.reportError(null);
				try {
					await props.preferences.recordUse(item.id);
					await action.run(new AbortController().signal);
					if (action.stayOpen !== true) controller.close();
					else controller.setActionPanelOpen(false);
				} catch (e) {
					controller.reportError(e instanceof Error ? e.message : String(e));
				}
			};
			const handleSelectScope = (scope) => {
				const prefix = scopeToPrefix(scope);
				if (scope === "all") {
					controller.setMode("all");
					controller.setDraft(view.effectiveQuery);
				} else {
					controller.setMode(scope);
					controller.setDraft(prefix ? `${prefix} ${view.effectiveQuery}`.trimEnd() : view.effectiveQuery);
				}
			};
			const handlePickHistory = (entry) => {
				const prefix = scopeToPrefix(entry.scope);
				const fullText = prefix ? `${prefix} ${entry.query}` : entry.query;
				controller.setDraft(fullText);
			};
			const handleClearHistory = () => {
				clearSearchHistory();
				setHistory([]);
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				"data-presentation": "floating",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(UniversalPalette, {
					t,
					sidebarWide,
					cold,
					query: state.draft,
					isLoading: view.pendingQuery || state.aggregator.status === "loading",
					isEmpty: view.items.length === 0,
					sections: view.sections,
					emptyMessage: view.emptyMessage,
					guidance: view.guidance,
					contextHint: view.contextHint,
					error: displayError,
					items: view.items,
					selectedIndex: Math.min(state.selectedIndex, Math.max(0, view.items.length - 1)),
					conflicts: conflicts?.owners ?? [],
					shortcut: conflicts?.shortcut,
					actionPanelOpen: state.actionPanelOpen,
					actionPanelSelectedIndex: state.actionPanelSelectedIndex,
					onSelectedIndexChange: (i) => controller.setSelectedIndex(i),
					onQueryChange: (q) => controller.setDraft(q),
					onRunPrimary: () => {
						runPrimary();
					},
					onRunSecondary: (item, action) => {
						runSecondary(item, action);
					},
					onOpenActionPanel: () => controller.setActionPanelOpen(true),
					onCloseActionPanel: () => controller.setActionPanelOpen(false),
					onActionPanelIndexChange: (i) => controller.setActionPanelIndex(i),
					onClose: () => controller.close(),
					activeScope: view.activeScope,
					onSelectScope: handleSelectScope,
					historyEntries: history,
					onPickHistory: handlePickHistory,
					onClearHistory: handleClearHistory,
					rootDataAttributes: { "data-presentation": "floating" }
				})
			});
		}
		function buildView$1(state, props, t, controller) {
			const workspaces = props.ctx.workspaces.list.getSnapshot().items.map((w) => ({
				workspaceId: String(w.workspaceId),
				title: w.title,
				path: w.path
			}));
			return prepareView(state, {
				ctx: props.ctx,
				hasSession: props.ctx.sessions.list.getSnapshot().current !== void 0,
				workspaces,
				t,
				setMode: (mode) => controller.setMode(mode)
			});
		}
		function bindLocale$2(locale, ns) {
			return locale.bind(ns);
		}
		//#endregion
		//#region src/client/morphPresentation.ts
		const FIND_PREFIX = "/find";
		/** Project the public Composer draft into the Morph query without owning input. */
		function composerSearchQuery(draft) {
			if (draft === FIND_PREFIX || draft.startsWith(`${FIND_PREFIX} `)) return {
				query: draft.slice(5).trimStart(),
				slashMode: true
			};
			return {
				query: draft,
				slashMode: false
			};
		}
		/** Only the result kinds useful in the compact native-style row get a marker. */
		function morphTypeLabel(kind) {
			switch (kind) {
				case "command": return "COMMAND";
				case "model": return "MODEL";
				case "session": return "SESSION";
				case "conversation-hit": return "CONVERSATION";
				case "skill": return "SKILL";
				default: return;
			}
		}
		/** Keep provider prose to one quiet row instead of leaking long metadata blobs. */
		function conciseMorphDescription(value, limit = 96) {
			const normalized = value?.replace(/\s+/g, " ").trim() ?? "";
			return normalized.length <= limit ? normalized : `${normalized.slice(0, limit).trimEnd()}…`;
		}
		//#endregion
		//#region \0up-css:/Users/dangtruongan/study/dsh-universal-palette/src/client/MorphResults.module.css.mjs
		var MorphResults_module_css_default = {
			"list": "up_mdLpLq_list",
			"state": "up_mdLpLq_state",
			"root": "up_mdLpLq_root",
			"title": "up_mdLpLq_title",
			"row": "up_mdLpLq_row",
			"commandIcon": "up_mdLpLq_commandIcon",
			"selected": "up_mdLpLq_selected",
			"description": "up_mdLpLq_description",
			"type": "up_mdLpLq_type",
			"error": "up_mdLpLq_error",
			"icon": "up_mdLpLq_icon",
			"surface": "up_mdLpLq_surface"
		};
		const cssText = ".up_mdLpLq_root{pointer-events:none;color:var(--dsw-alias-label-primary);font:14px/22px var(--dsw-font-family);position:absolute;bottom:calc(100% + 4px);left:0;right:0}.up_mdLpLq_surface{pointer-events:auto;box-sizing:border-box;background:var(--dsw-specific-menu);width:100%;max-height:min(320px,48vh);box-shadow:var(--dsw-elevation-prominent);border:0;border-radius:20px;padding:4px;overflow:hidden}.up_mdLpLq_list{scrollbar-width:thin;scrollbar-color:var(--dsw-alias-scrollbar-bg-l2) transparent;max-height:min(312px,48vh);overflow-y:auto}.up_mdLpLq_root[data-placement=hero-down]{width:100%;max-width:var(--dsh-composer-card-max-width);box-sizing:border-box;margin-top:4px;position:static}.up_mdLpLq_root[data-placement=hero-down] .up_mdLpLq_surface{border-radius:12px 12px 20px 20px;max-height:208px}.up_mdLpLq_root[data-placement=hero-down] .up_mdLpLq_list{max-height:200px}.up_mdLpLq_root[data-placement=active-up] .up_mdLpLq_surface{border-radius:20px 20px 12px 12px}.up_mdLpLq_list::-webkit-scrollbar{width:6px}.up_mdLpLq_list::-webkit-scrollbar-track{background:0 0}.up_mdLpLq_list::-webkit-scrollbar-thumb{background:var(--dsw-alias-scrollbar-bg-l2);border-radius:999px}.up_mdLpLq_list::-webkit-scrollbar-thumb:hover{background:var(--dsw-alias-scrollbar-hover-l2)}.up_mdLpLq_row{box-sizing:border-box;cursor:pointer;border-radius:10px;align-items:center;gap:8px;min-height:40px;padding:8px 10px;display:flex}.up_mdLpLq_row:hover,.up_mdLpLq_selected{background:var(--dsw-alias-interactive-bg-hover)}.up_mdLpLq_icon{width:16px;height:16px;color:var(--dsw-alias-label-tertiary);flex:none;justify-content:center;align-items:center;display:inline-flex}.up_mdLpLq_commandIcon{font:15px/16px var(--ds-font-family-code)}.up_mdLpLq_title{text-overflow:ellipsis;white-space:nowrap;min-width:0;max-width:40%;font-weight:500;overflow:hidden}.up_mdLpLq_description{text-overflow:ellipsis;white-space:nowrap;min-width:0;color:var(--dsw-alias-label-tertiary);flex:1;overflow:hidden}.up_mdLpLq_type{color:var(--dsw-alias-label-tertiary);letter-spacing:.04em;flex:none;font-size:10px}.up_mdLpLq_state{box-sizing:border-box;min-height:40px;color:var(--dsw-alias-label-tertiary);padding:8px 10px}.up_mdLpLq_error{color:var(--dsw-alias-state-error-primary)}@media (prefers-reduced-motion:reduce){.up_mdLpLq_row{scroll-behavior:auto}}";
		//#endregion
		//#region src/client/MorphResults.tsx
		/** Result-only renderer: the resident DSH Composer remains the sole input. */
		function MorphResults(props) {
			const selected = (0, react.useRef)(null);
			(0, react.useLayoutEffect)(() => {
				selected.current?.scrollIntoView({ block: "nearest" });
			}, [props.selectedIndex]);
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: MorphResults_module_css_default.root,
				"data-plugin": "dsh-universal-palette",
				"data-presentation": "morph",
				"data-placement": props.placement,
				"data-session-id": props.sessionId,
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("style", {
					"data-plugin": "dsh-universal-palette-morph",
					children: cssText
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: MorphResults_module_css_default.surface,
					children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: MorphResults_module_css_default.list,
						role: "listbox",
						"aria-label": props.label,
						children: props.error ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: `${MorphResults_module_css_default.state} ${MorphResults_module_css_default.error}`,
							role: "alert",
							children: props.error
						}) : props.items.length === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: MorphResults_module_css_default.state,
							role: "status",
							children: props.loading ? props.loadingText : props.emptyText
						}) : props.items.map(({ item }, index) => {
							const description = conciseMorphDescription(item.subtitle ?? item.snippet);
							const type = morphTypeLabel(item.kind);
							const Icon = item.kind === "model" ? IconSparkle16 : item.kind === "conversation-hit" ? IconClockOutline16 : item.kind === "skill" ? IconSkillOutline16 : item.kind === "workspace" ? IconFolderOpenOutline16 : item.kind === "command" ? IconAgentPresetOutline16 : IconNewChatOutline16;
							return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
								ref: index === props.selectedIndex ? selected : void 0,
								className: `${MorphResults_module_css_default.row} ${index === props.selectedIndex ? MorphResults_module_css_default.selected : ""}`,
								role: "option",
								"aria-selected": index === props.selectedIndex,
								"data-kind": item.kind,
								onPointerMove: () => props.onSelectedIndexChange(index),
								onMouseDown: (event) => event.preventDefault(),
								onClick: () => props.onRun(index),
								children: [
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: MorphResults_module_css_default.icon,
										"aria-hidden": "true",
										children: item.kind === "command" ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
											className: MorphResults_module_css_default.commandIcon,
											children: "/"
										}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)(Icon, {})
									}),
									/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: MorphResults_module_css_default.title,
										children: item.title
									}),
									description && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: MorphResults_module_css_default.description,
										children: description
									}),
									type && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
										className: MorphResults_module_css_default.type,
										children: type
									})
								]
							}, item.id);
						})
					})
				})]
			});
		}
		//#endregion
		//#region src/client/morph.tsx
		/**
		* Composer Morph presentation.
		*
		* Registered through the host's mutually exclusive Composer seats. The seat
		* itself supplies placement: Hero dock points down; active overlay points up.
		*
		* Active positioning reuses DSH MenuView's public popup pattern
		* (position: absolute; bottom: calc(100% + 4px)).
		*/
		const subscribeNever$1 = () => () => void 0;
		const snapshotFalse = () => false;
		/**
		* One Morph instance per Session; its lifecycle is the slot lifecycle.
		* Renders whenever the shared controller commits presentation morph for
		* the bound Session. Placement is owned by the Host slot that mounted it.
		*/
		function Morph(props) {
			const locale = (0, react.useSyncExternalStore)((fn) => props.ctx.locale.subscribe(fn), () => props.ctx.locale.getSnapshot());
			const t = (0, react.useMemo)(() => bindLocale$1(props.ctx.locale, NS), [props.ctx.locale]);
			(0, react.useLayoutEffect)(() => props.placement === "hero-down" ? props.heroSeat.mount() : void 0, [props.heroSeat, props.placement]);
			const heroSeatMounted = (0, react.useSyncExternalStore)(props.heroSeat.subscribe, props.heroSeat.getSnapshot);
			const overlaySuppressed = (0, react.useSyncExternalStore)(props.overlaySuppressed?.subscribe ?? subscribeNever$1, props.overlaySuppressed?.getSnapshot ?? snapshotFalse, props.overlaySuppressed?.getSnapshot ?? snapshotFalse);
			const state = (0, react.useSyncExternalStore)((fn) => props.controller.subscribe(fn), () => props.controller.getState());
			const composer = composerSearchQuery(props.useInput((input) => input.draft));
			const view = (0, react.useMemo)(() => buildView(state, t, locale.active.startsWith("zh")), [
				locale,
				state,
				t
			]);
			(0, react.useEffect)(() => {
				if (state.presentation !== "morph" || state.sessionId !== props.sessionId) return;
				if (state.composerEntry === "slash" && !composer.slashMode) {
					props.controller.close();
					return;
				}
				if (state.draft !== composer.query) {
					props.controller.setSelectedIndex(0);
					props.controller.setDraft(composer.query);
				}
			}, [
				composer.query,
				composer.slashMode,
				props.controller,
				props.sessionId,
				state.composerEntry,
				state.draft,
				state.presentation,
				state.sessionId
			]);
			const closeMorph = () => {
				if (state.composerEntry === "slash" && composer.slashMode) props.inputActions.setDraft(composer.query);
				props.controller.close();
			};
			const runAt = async (index) => {
				const item = view.items[Math.min(index, Math.max(0, view.items.length - 1))]?.item;
				if (!item) return;
				props.controller.reportError(null);
				try {
					if (state.composerEntry === "slash" && composer.slashMode) props.inputActions.setDraft(composer.query);
					await props.preferences.recordUse(item.id);
					await item.primary.run(new AbortController().signal);
					if (item.primary.stayOpen !== true) props.controller.close();
				} catch (e) {
					props.controller.reportError(e instanceof Error ? e.message : String(e));
				}
			};
			(0, react.useEffect)(() => {
				if (state.presentation !== "morph" || state.sessionId !== props.sessionId) return;
				const onKeyDown = (event) => {
					if (event.isComposing || event.repeat) return;
					if (event.key === "Escape") {
						event.preventDefault();
						event.stopPropagation();
						closeMorph();
					} else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
						event.preventDefault();
						event.stopPropagation();
						const step = event.key === "ArrowDown" ? 1 : -1;
						props.controller.setSelectedIndex(Math.max(0, Math.min(view.items.length - 1, state.selectedIndex + step)));
					} else if (event.key === "Enter" && state.composerEntry === "direct") {
						event.preventDefault();
						event.stopPropagation();
						runAt(state.selectedIndex);
					}
				};
				window.addEventListener("keydown", onKeyDown, { capture: true });
				return () => window.removeEventListener("keydown", onKeyDown, { capture: true });
			}, [
				composer.query,
				composer.slashMode,
				props.controller,
				props.inputActions,
				props.preferences,
				props.sessionId,
				state.composerEntry,
				state.presentation,
				state.selectedIndex,
				state.sessionId,
				view.items
			]);
			if (state.presentation !== "morph") return null;
			if (state.sessionId !== props.sessionId) return null;
			if (props.placement === "active-up" && heroSeatMounted) return null;
			if (props.placement === "active-up" && overlaySuppressed) return null;
			const displayError = state.error ? localizedError(state.error, t) : state.aggregator.failures.length ? t("providerFailed") : "";
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(MorphResults, {
				placement: props.placement,
				sessionId: props.sessionId,
				label: t("results"),
				loadingText: t("searching"),
				emptyText: view.emptyMessage,
				error: displayError,
				loading: view.pendingQuery || state.aggregator.status === "loading",
				items: view.items,
				selectedIndex: Math.min(state.selectedIndex, Math.max(0, view.items.length - 1)),
				onSelectedIndexChange: (index) => props.controller.setSelectedIndex(index),
				onRun: (index) => {
					props.controller.setSelectedIndex(index);
					runAt(index);
				}
			});
		}
		function buildView(state, t, chinese) {
			const effective = state.draft.trim().replace(/^>\s*/, "");
			const pendingQuery = state.aggregator.query !== effective;
			return {
				items: pendingQuery ? [] : state.aggregator.items.map((row) => ({
					item: presentItem(row.item, t, chinese),
					score: row.score,
					matchRanges: row.match.ranges
				})),
				pendingQuery,
				emptyMessage: effective ? t("noResults", { query: state.draft }) : t("empty")
			};
		}
		function bindLocale$1(locale, ns) {
			return locale.bind(ns);
		}
		//#endregion
		//#region src/client/searchButton.tsx
		/**
		* Composer Search button.
		*
		* Registered into the public `conversation.input.left` slot — strict
		* per-Session, list-kind. The component is a button that opens the
		* Composer Morph through the shared SearchController. The Host-selected slot
		* controls whether results render below Hero or above active Composer. On
		* Session switch the slot disposer automatically removes the entry.
		*
		* Fail-closed compatibility: the live availability observable
		* (`!cold || hero dock declared`) disables the button on a Hero surface
		* whose host does not declare the dock — the click-time controller gate
		* remains as the second line of defense.
		*
		* Zero access to package-private composer APIs.
		*/
		const SEARCH_BUTTON_ID = "dsh-universal-palette.search";
		const subscribeNever = () => () => void 0;
		const snapshotTrue = () => true;
		function SearchButton(props) {
			const t = (0, react.useMemo)(() => bindLocale(props.ctx.locale, "universal-palette"), [props.ctx.locale]);
			const allowed = (0, react.useSyncExternalStore)(props.allowed?.subscribe ?? subscribeNever, props.allowed?.getSnapshot ?? snapshotTrue, props.allowed?.getSnapshot ?? snapshotTrue);
			const label = allowed ? t("palette") : t("heroSearchUnavailable");
			return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
				type: "button",
				"data-plugin": "dsh-universal-palette",
				"data-search-button": "true",
				"aria-label": label,
				title: label,
				disabled: !allowed,
				onClick: () => {
					if (!allowed) return;
					if (props.controller.getState().presentation === "floating") props.controller.close();
					else {
						props.controller.openFloating();
						if (typeof document !== "undefined") {
							const draft = document.querySelector("textarea")?.value?.trim();
							if (draft && !draft.startsWith("/")) props.controller.setDraft(draft);
						}
					}
				},
				style: {
					background: "transparent",
					border: 0,
					padding: "4px 8px",
					display: "inline-flex",
					alignItems: "center",
					gap: "4px",
					cursor: allowed ? "pointer" : "default",
					color: "inherit",
					opacity: allowed ? 1 : .4
				},
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(IconSearchOutline16, {})
			});
		}
		function bindLocale(locale, ns) {
			return locale.bind(ns);
		}
		const FIND_NAME = "universal-palette.find-source";
		function makeFindCollision(collisions) {
			return new PublicSlashFindCollision(collisions);
		}
		var PublicSlashFindCollision = class extends Error {
			code = "PUBLIC_SLASH_FIND_COLLISION";
			constructor(collisions) {
				super(`Host command catalog already registers 'find' (${collisions.join(", ")}); Universal Palette will not register /find.`);
			}
		};
		/**
		* Probe the Host command catalog for an exact `find` command name.
		* Allow ONLY on a successful response whose payload is the contracted
		* descriptor array without `find`; every other outcome denies.
		*/
		async function findHostFindCollisions(ctx) {
			const current = ctx.sessions?.list?.getSnapshot?.()?.current;
			if (current === void 0) return {
				kind: "allow",
				coldStart: true
			};
			const list = ctx.remote?.commands?.list;
			if (typeof list !== "function") return {
				kind: "deny",
				reason: "catalog-unavailable",
				collisions: []
			};
			let result;
			try {
				result = await list(current);
			} catch {
				return {
					kind: "deny",
					reason: "catalog-unavailable",
					collisions: []
				};
			}
			try {
				if (result === null || typeof result !== "object") return {
					kind: "deny",
					reason: "catalog-contract",
					collisions: []
				};
				if (!result.ok) return {
					kind: "deny",
					reason: "catalog-unavailable",
					collisions: []
				};
				if (result.value === void 0 || !Array.isArray(result.value)) return {
					kind: "deny",
					reason: "catalog-contract",
					collisions: []
				};
				const collisions = result.value.filter((entry) => entry?.name === "find").map((entry) => entry.name);
				return collisions.length > 0 ? {
					kind: "deny",
					reason: "host-collision",
					collisions
				} : {
					kind: "allow",
					coldStart: false
				};
			} catch {
				return {
					kind: "deny",
					reason: "catalog-contract",
					collisions: []
				};
			}
		}
		/**
		* Build the `/find` Input Trigger source. The source returns the
		* single candidate `find`, accepts exact `/find` Enter arbitration, and
		* otherwise returns `undefined` so the normal pipeline continues.
		*
		* With a capability, the candidate is withheld (`[]`) on a Hero surface
		* whose host lacks the dock, and the claim's submit answers with the
		* localized capability error instead of touching the Agent pipeline.
		*/
		function createFindSource(open, executeSelected = async () => false, capability) {
			const openAfterHostSettles = () => {
				globalThis.setTimeout(open, 0);
			};
			const enterSearchMode = () => {
				openAfterHostSettles();
				return { claim: {
					token: "/find ",
					hint: "Search",
					async submit(args) {
						if (capability && !capability.composerSearchAllowed()) return {
							kind: "error",
							text: capability.unavailableError()
						};
						try {
							return await executeSelected(args.trimStart()) ? { kind: "success" } : {
								kind: "error",
								text: "No search result selected."
							};
						} catch (error) {
							return {
								kind: "error",
								text: error instanceof Error ? error.message : String(error)
							};
						}
					}
				} };
			};
			const candidateOffered = () => capability?.composerSearchAllowed() ?? true;
			return {
				trigger: "/",
				name: FIND_NAME,
				order: 50,
				showGroupTitle: false,
				async candidates(_session) {
					if (!candidateOffered()) return [];
					return [{
						name: "find",
						description: "Search commands, sessions, models, and conversations",
						icon: "folder",
						value: "find"
					}];
				},
				onPick() {
					return enterSearchMode();
				},
				matchSpace(_session, token) {
					return token === "/find" ? enterSearchMode() : void 0;
				},
				async matchEnter(_session, line, _signal, _envelope) {
					const trimmed = line.trim();
					if (trimmed !== "/find" && !trimmed.startsWith("/find ")) return void 0;
					return enterSearchMode();
				}
			};
		}
		/**
		* Register the /find Input Trigger source.
		*
		* Order:
		* 1. Probe the Host command catalog for an exact `find` command name for
		*    the session present at registration time, if any. A collision throws
		*    `PublicSlashFindCollision` so a host-owned `/find` is never shadowed.
		* 2. Otherwise register the source via `ctx.inputTriggers.registerSource`.
		* 3. Cold start: when no session existed at apply time the probe could not
		*    run, so a `sessions.list` watcher re-runs the verdict on every current-
		*    session change and withdraws the registration while the active session's
		*    catalog owns `find`. No catalog snapshot/cache is kept — each verdict
		*    re-probes the live public contract.
		*/
		async function registerFindSource(options) {
			const initial = await findHostFindCollisions(options.ctx);
			if (initial.kind === "deny" && initial.reason === "host-collision") throw makeFindCollision(initial.collisions);
			const open = () => {
				const id = options.ctx.sessions?.list?.getSnapshot?.()?.current;
				if (id === void 0) return;
				options.controller.openComposerSearch(String(id), "slash");
			};
			const executeSelected = async (query) => {
				if (options.controller.getState().draft !== query) options.controller.setDraft(query);
				const state = options.controller.getState();
				if (state.aggregator.query !== query.trim()) return false;
				const row = state.aggregator.items[Math.min(state.selectedIndex, Math.max(0, state.aggregator.items.length - 1))];
				if (!row) return false;
				await options.preferences?.recordUse(row.item.id);
				await row.item.primary.run(new AbortController().signal);
				if (row.item.primary.stayOpen !== true) options.controller.close();
				return true;
			};
			const triggers = options.ctx.inputTriggers;
			const registerSource = triggers?.registerSource;
			if (typeof registerSource !== "function") return () => {};
			let sourceDisposer = null;
			let disposed = false;
			const setRegistered = (registered) => {
				if (disposed) return;
				if (registered && sourceDisposer === null) sourceDisposer = registerSource.call(triggers, createFindSource(open, executeSelected, options.capability));
				else if (!registered && sourceDisposer !== null) {
					try {
						sourceDisposer();
					} catch {}
					sourceDisposer = null;
				}
			};
			const logDenial = (verdict) => {
				if (verdict.reason === "host-collision") console.error("[dsh-universal-palette]", makeFindCollision(verdict.collisions).message);
				else if (verdict.reason === "catalog-contract") console.error("[dsh-universal-palette] /find collision probe: host catalog payload is not the contracted CommandDescriptor array; /find claim withdrawn (fail-closed).");
				else console.error("[dsh-universal-palette] /find collision probe: host command catalog unavailable; /find claim withdrawn (fail-closed).");
			};
			if (initial.kind === "deny") logDenial(initial);
			setRegistered(initial.kind === "allow");
			const list = options.ctx.sessions?.list;
			let offSessions;
			let probeSeq = 0;
			if (list && typeof list.subscribe === "function") offSessions = list.subscribe(() => {
				if (disposed) return;
				const seq = ++probeSeq;
				findHostFindCollisions(options.ctx).then((verdict) => {
					if (disposed || seq !== probeSeq) return;
					if (verdict.kind === "deny") logDenial(verdict);
					setRegistered(verdict.kind === "allow");
				}).catch((error) => {
					if (disposed || seq !== probeSeq) return;
					setRegistered(false);
					console.error("[dsh-universal-palette] /find collision probe failed:", error);
				});
			});
			return options.ctx.effect(() => () => {
				disposed = true;
				offSessions?.();
				try {
					sourceDisposer?.();
				} catch {}
				sourceDisposer = null;
			}, "universal-palette: /find input trigger source");
		}
		//#endregion
		//#region src/client/morphSeatPresence.ts
		function createHeroSeatPresence() {
			const mounts = /* @__PURE__ */ new Set();
			const listeners = /* @__PURE__ */ new Set();
			const emit = () => {
				for (const listener of [...listeners]) listener();
			};
			return {
				getSnapshot: () => mounts.size > 0,
				subscribe(listener) {
					listeners.add(listener);
					return () => listeners.delete(listener);
				},
				mount() {
					const token = Symbol("hero-composer-dock");
					const wasMounted = mounts.size > 0;
					mounts.add(token);
					if (!wasMounted) emit();
					let disposed = false;
					return () => {
						if (disposed) return;
						disposed = true;
						const wasLast = mounts.size === 1 && mounts.has(token);
						mounts.delete(token);
						if (wasLast) emit();
					};
				}
			};
		}
		//#endregion
		//#region src/client/index.ts
		const inject = [
			"remote",
			"remote.commands",
			"sessions",
			"workspaces",
			"modelDirectories",
			"slots",
			"uiWorkspace",
			"inputTriggers",
			"locale"
		];
		/**
		* Backwards-compatible verdict helper. The implementation moved to
		* `cold.ts` for live subscription support; this re-export preserves the
		* public name and pure-function semantics, so unit tests that target the
		* `sessionCold` symbol keep working.
		*/
		function sessionCold(ctx) {
			return verdictFromSessions(ctx.sessions);
		}
		/** Localized fail-closed error for a claimed `/find` on an unsupported Hero surface. */
		function capabilityErrorText(ctx) {
			try {
				const bind = ctx.locale.bind;
				const text = typeof bind === "function" ? bind.call(ctx.locale, NS)("heroSearchUnavailable") : void 0;
				if (typeof text === "string" && text.length > 0 && !text.includes("heroSearchUnavailable")) return text;
			} catch {}
			return "Composer Search is unavailable on this host's Hero surface.";
		}
		function detectBrowserPlatform() {
			const proc = globalThis.process;
			if (proc && typeof proc.platform === "string") return proc.platform;
			const ua = typeof navigator !== "undefined" ? navigator.userAgent ?? "" : "";
			return /Mac|iPhone|iPad/i.test(ua) ? "darwin" : "win32";
		}
		function SearchButtonSlot(props) {
			return (0, react.createElement)(SearchButton, {
				ctx: props.ctx,
				controller: props.controller,
				allowed: props.allowed
			});
		}
		/** Register only after ui-layout has declared shell.overlay. */
		function apply(ctx) {
			try {
				return applyInternal(ctx);
			} catch (error) {
				console.error("[dsh-universal-palette] apply failed:", error);
				throw error;
			}
		}
		function applyInternal(ctx) {
			ctx.effect(() => ctx.locale.register(NS, {
				zh,
				en
			}), "universal-palette: dictionaries");
			const preferences = new PreferencesStore(createLocalStorageBackend(), defaultShortcut(detectBrowserPlatform()));
			preferences.load();
			const aggregator = new PaletteAggregator({
				acceptLateResults: true,
				providers: [
					createCommandsProvider(ctx.remote.commands, ctx.sessions, ctx.inputTriggers),
					createSessionsProvider(ctx.sessions, ctx.workspaces, ctx.uiWorkspace),
					createModelsProvider(ctx.sessions, ctx.modelDirectories),
					createConversationHitsProvider(ctx.sessions, ctx.uiWorkspace)
				],
				preferences: () => preferences.snapshot,
				context: () => currentPaletteContext(ctx.sessions, ctx.workspaces)
			});
			const heroDockAvailability = createHeroDockAvailability(ctx);
			ctx.effect(() => () => heroDockAvailability.dispose(), "universal-palette: hero dock capability");
			let cold;
			try {
				cold = subscribeCold(ctx);
			} catch (error) {
				console.warn("[dsh-universal-palette] subscribeCold failed, defaulting to active:", error);
				cold = {
					getSnapshot: () => false,
					subscribe: () => () => void 0,
					dispose: () => {}
				};
			}
			ctx.effect(() => () => cold.dispose(), "universal-palette: cold observable");
			const composerSearchAvailability = createComposerSearchAvailability(cold, heroDockAvailability);
			ctx.effect(() => () => composerSearchAvailability.dispose(), "universal-palette: composer search availability");
			const overlaySuppression = createActiveOverlaySuppression(cold, composerSearchAvailability);
			ctx.effect(() => () => overlaySuppression.dispose(), "universal-palette: active overlay suppression");
			const controller = new SearchController({
				aggregator,
				preferences: () => preferences.snapshot,
				cold: () => readCold(ctx),
				heroComposerSearchAllowed: () => composerSearchAvailability.getSnapshot()
			});
			const heroSeat = createHeroSeatPresence();
			ctx.effect(() => () => {
				aggregator.dispose();
				controller.dispose();
				preferences.dispose();
			}, "universal-palette: palette core cleanup");
			const sidebarState = createSidebarObservable();
			const sidebar = sidebarState.observable;
			const SidebarState = (props) => {
				(0, react.useEffect)(() => {
					sidebarState.setWide(props.wide);
				}, [props.wide]);
				return null;
			};
			ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
				name: "sidebar.footer.action",
				id: "dsh-universal-palette-layout-state"
			}, SidebarState));
			const paletteControl = { toggle: () => {
				if (controller.getState().presentation === "floating") controller.close();
				else controller.openFloating();
			} };
			ctx.effect(() => bridgeKeysActions(ctx, {
				label: () => ctx.locale.getSnapshot().active.startsWith("zh") ? "打开 Universal Palette" : "Open Universal Palette",
				description: () => ctx.locale.getSnapshot().active.startsWith("zh") ? "搜索命令、会话、模型与历史" : "Search commands, sessions, models, and history",
				toggle: () => paletteControl.toggle(),
				onLocaleChange: (fn) => typeof ctx.locale.subscribe === "function" ? ctx.locale.subscribe(fn) : () => {}
			}), "universal-palette: keys-actions bridge");
			let activeShortcut = preferences.snapshot.shortcut;
			const shortcutConflicts = createConflictObservable();
			const attach = (shortcut) => {
				const handle = attachKeyboard({
					shortcut,
					isOpen: () => controller.getState().presentation === "floating",
					onOpen: () => controller.openFloating(),
					onClose: () => controller.close(),
					onEscape: () => controller.close(),
					onConflictDetected: (report) => {
						console.warn("[dsh-universal-palette] shortcut conflict:", report);
					}
				});
				const report = handle.reportConflicts();
				shortcutConflicts.set(report.conflictsWith.length > 0 ? {
					shortcut: report.shortcut,
					owners: report.conflictsWith
				} : null);
				return handle;
			};
			const keyboard = attach(activeShortcut);
			ctx.effect(() => () => keyboard.dispose(), "universal-palette: keyboard listener");
			if (typeof document !== "undefined") {
				const isSearchTrigger = (el) => {
					if (el.closest("[data-plugin=\"dsh-universal-palette\"]")) return { isTrigger: false };
					if (el.tagName === "INPUT") {
						const input = el;
						const placeholder = (input.placeholder || "").toLowerCase();
						const cls = String(input.className || "");
						if (placeholder.includes("search session") || placeholder.includes("搜索会话") || cls.includes("searchInput")) return {
							isTrigger: true,
							initialText: input.value
						};
						return { isTrigger: false };
					}
					const target = el.closest("button, [role=\"button\"], div[class*=\"search\"]");
					if (!target) return { isTrigger: false };
					const aria = (target.getAttribute("aria-label") || "").toLowerCase();
					const shortcuts = target.getAttribute("aria-keyshortcuts") || "";
					const cls = String(target.className || "");
					if (cls.includes("searchButton") || shortcuts.includes("KeyK")) return { isTrigger: true };
					if (cls.includes("search") && !cls.includes("searchTree") && !cls.includes("searchResult") && !cls.includes("searchStatus")) return { isTrigger: true };
					if ((aria.includes("search") || aria.includes("搜索") || aria.includes("検索") || aria.includes("buscar")) && (aria.includes("session") || aria.includes("会话") || shortcuts.includes("K"))) return { isTrigger: true };
					return { isTrigger: false };
				};
				const dismissNativeSidebarSearch = () => {
					document.querySelectorAll("input[class*=\"searchInput\"]").forEach((input) => {
						if (!input.closest("[data-plugin=\"dsh-universal-palette\"]")) {
							input.blur();
							input.dispatchEvent(new KeyboardEvent("keydown", {
								key: "Escape",
								bubbles: true
							}));
						}
					});
					const clearBtn = document.querySelector("button[aria-label*=\"clear\"], button[class*=\"clearButton\"]");
					if (clearBtn && !clearBtn.closest("[data-plugin=\"dsh-universal-palette\"]")) try {
						clearBtn.click();
					} catch {}
				};
				const onSearchTrigger = (e) => {
					const target = e.target;
					if (!target) return;
					const check = isSearchTrigger(target);
					if (check.isTrigger) {
						e.preventDefault();
						e.stopPropagation();
						e.stopImmediatePropagation();
						if (target instanceof HTMLElement) target.blur();
						dismissNativeSidebarSearch();
						if (controller.getState().presentation === "floating") controller.close();
						else {
							controller.openFloating();
							if (check.initialText) controller.setDraft(check.initialText);
						}
					}
				};
				document.addEventListener("click", onSearchTrigger, true);
				document.addEventListener("pointerdown", onSearchTrigger, true);
				document.addEventListener("focusin", onSearchTrigger, true);
				ctx.effect(() => () => {
					document.removeEventListener("click", onSearchTrigger, true);
					document.removeEventListener("pointerdown", onSearchTrigger, true);
					document.removeEventListener("focusin", onSearchTrigger, true);
				}, "universal-palette: search icon click interceptor");
			}
			ctx.effect(() => preferences.subscribe(() => {
				const nextActive = preferences.snapshot.shortcut;
				if (nextActive === activeShortcut) return;
				keyboard.dispose();
				const replacement = attach(nextActive);
				activeShortcut = nextActive;
				keyboard.dispose = replacement.dispose.bind(replacement);
			}), "universal-palette: shortcut migration watcher");
			const FloatingEntry = () => (0, react.createElement)(Floating, {
				ctx,
				sidebar,
				aggregator,
				preferences,
				cold,
				paletteControl,
				controller,
				shortcutConflicts
			});
			ctx.slots.inject("shell.overlay", () => ctx.slots.register({
				name: "shell.overlay",
				id: "dsh-universal-palette"
			}, FloatingEntry));
			ctx.slots.inject("conversation.hero.composer.dock", () => ctx.slots.register({
				name: "conversation.hero.composer.dock",
				id: "dsh-universal-palette-morph-hero"
			}, (props) => (0, react.createElement)(Morph, {
				ctx,
				sessionId: props.sessionId,
				controller,
				sidebar,
				aggregator,
				preferences,
				heroSeat,
				placement: "hero-down",
				useInput: props.useInput,
				inputActions: props.inputActions
			})));
			ctx.slots.inject("conversation.input.overlay", () => ctx.slots.register({
				name: "conversation.input.overlay",
				id: "dsh-universal-palette-morph-active"
			}, (props) => (0, react.createElement)(Morph, {
				ctx,
				sessionId: props.sessionId,
				controller,
				sidebar,
				aggregator,
				preferences,
				heroSeat,
				placement: "active-up",
				useInput: props.useInput,
				inputActions: props.inputActions,
				overlaySuppressed: overlaySuppression
			})));
			ctx.slots.inject("conversation.input.left", () => ctx.slots.register({
				name: "conversation.input.left",
				id: SEARCH_BUTTON_ID
			}, () => (0, react.createElement)(SearchButtonSlot, {
				ctx,
				controller
			})));
			ctx.effect(() => {
				let cancelled = false;
				let disposer = null;
				registerFindSource({
					ctx,
					controller,
					preferences,
					capability: {
						composerSearchAllowed: () => composerSearchAvailability.getSnapshot(),
						unavailableError: () => capabilityErrorText(ctx)
					}
				}).then((d) => {
					if (cancelled) {
						try {
							d();
						} catch {}
						return;
					}
					disposer = d;
				}).catch((error) => {
					if (error instanceof PublicSlashFindCollision) console.error("[dsh-universal-palette]", error.message);
					else console.error("[dsh-universal-palette] /find source registration failed:", error);
				});
				return () => {
					cancelled = true;
					try {
						disposer?.();
					} catch {}
				};
			}, "universal-palette: /find source lifecycle");
		}
		var client_default = {
			inject,
			apply
		};
		//#endregion
		exports.apply = apply;
		exports.default = client_default;
		exports.inject = inject;
		exports.sessionCold = sessionCold;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map