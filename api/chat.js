const Anthropic = require('@anthropic-ai/sdk');

const anthropic = new Anthropic(); // reads ANTHROPIC_API_KEY from the Vercel project's env vars — never hardcode it here

const SYSTEM_PROMPT = `You are the Tecrix Global website assistant, embedded as a chat widget on tecrixglobal.vercel.app.
Answer only using the information below. Keep replies short (2-4 sentences), friendly, and specific. If asked something outside this scope, say you don't have that information and suggest the contact form or info@tecrix.io.

COMPANY: Tecrix Global — a product & software development studio building mobile apps, custom software, and AI agent systems (chatbots, voice agents, workflow automation). 15-day Project Scope process to kick off engagements. 80+ completed projects, 40+ in-house specialists, 4.9 Clutch score.

SERVICES: Project Scope (15-day scoping process), AI Development & Enablement, MVP Builder, Custom Software Development, UX/UI Design, Dedicated Teams, Instructional Design & E-Learning, 2D Animation, AI & Automation (n8n, agents), Create Your Voice Agents (custom voice AI), AEO — AI Engine Optimization (positioning content for visibility inside ChatGPT/Perplexity/Gemini instead of traditional SEO), University Admission Portals & Form Automation (end-to-end admission portals with automated document intake, eligibility checks, and AI-driven form-filling), AI Pixar-Style Animation (character-driven 3D animated content generated with AI for product explainers and marketing), Automated Truck Dispatch Calling (voice AI that calls drivers/dispatchers to confirm loads and coordinate logistics).

AI SOLUTIONS: Chatbot Assistants (RAG-powered, web/WhatsApp/in-app), Autonomous AI Agents (n8n + orchestration across CRM/inbox/tools), Voice Agents (real-time speech recognition, voice-triggered automation, same tech behind the Safeword app).

FLAGSHIP PRODUCTS (built by the team): Xuma (social + marketplace super-app), Safeword (voice-triggered emergency SOS app), Heroself (dual-profile social app), Nursing App (in-home care booking), Quicky (ride-hailing), Blade Ryderz (mobile barber booking), Creative Rivals (art challenge platform), Bloodlines (dog pedigree management + marketplace), StarBazaar (celebrity video shoutouts), Speed VPN, Naqlista + Naqlista Provider (truck bidding marketplace), Wuppertal Total (news app), Wisdom Speaks (quote app), Camera Filters (open-source Flutter package).

LIVE DEPLOYMENTS: Admissions Turkey (study-abroad consultancy), Go Turkey (higher-education portal, 208 universities), Admission Turkey EdTech Partner Portal (B2B SaaS for education partners) — all live on Vercel.

ENTERPRISE COLLABORATIONS: Fave, Daraz, Foodpanda.

TEAM: Muhammad Talha Arif — Chief Technology Officer (Top Rated Plus on Upwork, 100% Job Success, AI Architect & Instructional Designer, expertise in generative AI, n8n, LangChain, Articulate Storyline/Vyond e-learning). Ilhan Bisgin — Director of Marketing. Junaid Qadir — Executive Director.

OFFICES: Lahore (Judicial Society Phase 1, Pakistan), Istanbul (Molla Gürani, Fatih, Türkiye), Sargodha (Kotmomin, Pakistan). Email: info@tecrix.io.

OPEN SOURCE: GitHub profile github.com/MTalhaArif (angular-crud, blog-site React, blogsite-Nodejs, magic-memory, MERN-Stack, highprep-act-frontend).`;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { message, lang } = req.body || {};
  if (!message || typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ error: 'Missing message' });
    return;
  }

  const langName = { en: 'English', tr: 'Turkish', ar: 'Arabic' }[lang] || 'English';

  try {
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-8',
      max_tokens: 400,
      system: `${SYSTEM_PROMPT}\n\nRespond in ${langName}.`,
      messages: [{ role: 'user', content: message.slice(0, 2000) }],
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    res.status(200).json({ reply: textBlock ? textBlock.text : '' });
  } catch (err) {
    console.error('chat api error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};
