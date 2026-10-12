// ============ Tecrix Global — i18n dictionary (EN / TR / AR) ============
const translations = {
en: {
  nav: { services:"Services", ai:"AI Solutions", projects:"Projects", opensource:"Open Source", team:"Team", upwork:"Expertise", contact:"Contact", start_project:"Start a Project" },
  hero: {
    eyebrow:"Product & Software Studio · AI Agents · Mobile",
    title:'Custom Product & Software Development, <span class="text-accent">Focused on Your Success</span>',
    sub:"Tecrix Global designs, builds, and ships mobile apps, custom software, and intelligent AI agent systems — chatbots, voice agents, and automated workflows — for founders and enterprises who need to move fast.",
    cta_book:"Book a Free Consultation", cta_work:"See Our Work",
    stat1:"Completed Projects", stat2:"In-House Specialists", stat3:"Clutch Score", stat4:"MVP Scope Process",
    caption:"One agent, every workflow — chat, voice, CRM, and automation orchestrated in real time."
  },
  strip:{ trusted:"Trusted across mobile, e-commerce & on-demand platforms" },
  services:{
    eyebrow:"What We Do",
    title:"Services built to eliminate revenue leaks<br>and scale operational velocity",
    s1:{title:"Project Scope", desc:"A structured 15-day process that aligns product vision with business objectives before a single line of code is written."},
    s2:{title:"AI Development & Enablement", desc:"Machine learning and generative AI applied strategically so your business stays future-ready and competitive."},
    s3:{title:"MVP Builder", desc:"Rapid market entry with a high-quality MVP that balances speed with real quality standards for launch."},
    s4:{title:"Custom Software Development", desc:"Lean frameworks that transform your vision into tailored software solutions built for your exact business needs."},
    s5:{title:"UX/UI Design", desc:"Engaging, user-friendly products that combine aesthetic appeal with functional design principles."},
    s6:{title:"Dedicated Teams", desc:"A dedicated in-house development team assigned to your project for consistent communication and full alignment."},
    s7:{title:"Instructional Design & E-Learning", desc:"Educational content and training materials engineered for product adoption and transformative learning experiences."},
    s8:{title:"2D Animation", desc:"Animated visual content that boosts product engagement and explains complex concepts through motion."},
    s9:{title:"AI & Automation", desc:"n8n workflow automation, AI agents, and AI-powered applications that streamline operations and decisions."},
    s10:{title:"Create Your Voice Agents", desc:"Custom voice AI agents built for your business — real-time speech recognition, natural conversation, and voice-triggered automation for support, IVR, and hands-free workflows."},
    s11:{title:"AEO — AI Engine Optimization", desc:"We've moved past traditional SEO. AEO structures and positions your content for visibility inside AI search and answer engines — ChatGPT, Perplexity, Gemini — where your next customer is actually looking."},
    s12:{title:"University Admission Portals & Form Automation", desc:"End-to-end admission portals with automated document intake, eligibility checks, and AI-driven form-filling pipelines — cutting manual processing time for universities and study-abroad consultancies."},
    s13:{title:"AI Pixar-Style Animation", desc:"Character-driven 3D animated content generated with AI — Pixar-style visuals for product explainers, marketing campaigns, and brand storytelling without a traditional animation studio budget."},
    s14:{title:"Automated Truck Dispatch Calling", desc:"Voice AI that calls drivers and dispatchers automatically — confirming loads, relaying pickup details, and handling logistics coordination without a human on every call."}
  },
  ai:{
    eyebrow:"Generative AI & Automation",
    title:'One agent architecture. <span class="text-accent">Every channel your business needs.</span>',
    sub:"We design agentic systems that plug into your product, your support desk, and your operations — talking, texting, and acting on your behalf.",
    c1:{title:"Chatbot Assistants", desc:"RAG-powered conversational assistants trained on your docs, product, and policies — deployed on web, WhatsApp, or in-app for 24/7 support and lead qualification.", li1:"Retrieval-augmented generation (RAG)", li2:"Context-aware, on-brand responses", li3:"Human handoff & escalation logic"},
    c2:{title:"Autonomous AI Agents", desc:"Multi-step agents built on n8n and custom orchestration that read, decide, and act across your CRM, inbox, and internal tools without a human in the loop.", li1:"n8n & workflow automation", li2:"CRM & API integrations", li3:"Task chains with guardrails"},
    c3:{title:"Voice Agents", desc:"Real-time voice AI for hands-free support, IVR replacement, and safety triggers — the same voice-recognition engineering behind our Safeword emergency app.", li1:"Real-time speech recognition", li2:"Voice-triggered automations", li3:"Natural, low-latency conversation"}
  },
  projects:{
    eyebrow:"Our Work", title:"Products we've designed, built, and shipped",
    filter_all:"All", filter_ai:"AI & Voice", empty:"No projects match that filter yet.",
    p1:{badge:"Super App", desc:"A Flutter super-app combining social feed, marketplace, professional networking, and video — Facebook, Instagram, OLX, LinkedIn, and YouTube in one platform."},
    p2:{badge:"Safety · Voice AI", desc:"Real-time location tracking with voice-triggered emergency alerts — a pre-recorded phrase activates SOS and shares live location with emergency contacts."},
    p3:{badge:"Social", desc:"Dual-profile social platform: a standard profile for daily updates and a fantasy profile for persona creation and role-play, with built-in content moderation."},
    p4:{badge:"On-Demand", desc:"Connects users with local nursing agencies for in-home, hospice, or post-operative care — browse agencies, request a nurse, and get matched to a qualified professional."},
    p5:{badge:"On-Demand", desc:"Ride-hailing app with real-time driver matching, live trip tracking, in-app messaging, and automated payment processing."},
    p6:{badge:"On-Demand", desc:"Mobile barber booking — barbers travel to clients in a fully equipped van, with scheduling, ratings, and automated in-app payments."},
    p7:{badge:"Creator", desc:"A platform for uploading original art — music, videography, painting, photography — where creators can challenge each other head-to-head."},
    p8:{badge:"Marketplace", desc:"Dog pedigree management with visual pedigree charts, breeder social features, community groups, and an integrated marketplace for specialized dog food."},
    p9:{badge:"Client Build", desc:"Personalized video shoutout platform connecting fans with their favorite stars for any occasion — built for FourFox."},
    p10:{badge:"Client Build", desc:"A fast, simple consumer VPN app built and shipped as a revenue-generating product for Star Tech Bazaar."},
    p11:{badge:"Logistics · Bidding", desc:"Truck booking marketplace with a live bidding system — clients request a truck, drivers bid, clients approve. Companion driver-side app included."},
    p12:{badge:"Side Project", desc:"A local news application delivering regional news content in a clean, mobile-first reading experience."},
    p13:{badge:"Side Project", desc:"A simple, focused daily-quote app built with Flutter and Firebase."},
    p14:{badge:"Open Source Package", desc:"An open-source Flutter package for dynamic camera color filters, image cropping, text overlays, emojis, and custom filter color lists."},
    p15:{badge:"Smart Home · AI", desc:"Companion app for an AI-powered smart doorbell and home hub — HD live video with two-way talk, AI detection of people, packages, and pets, filtered alerts, and voice control for 500+ smart home devices."},
    p16:{badge:"EdTech", desc:"Professional development platform for teachers — book one-on-one coaching sessions, join live video meetings, message coaches, and access PDF and video learning resources."}
  },
  links:{ play_store:"Play Store", app_store:"App Store", github:"GitHub", view_live:"View live →" },
  engagement:{
    eyebrow:"Enterprise Collaborations", title:"Engagements alongside category leaders",
    fave:"A fandom-centric community platform where fans build connections through content and earn reward points redeemable for discounts.",
    daraz:"Engagement with one of the region's leading e-commerce platforms, spanning diverse product categories across multiple countries.",
    foodpanda:"Work alongside the Delivery Hero subsidiary's technology-driven, food-delivery-focused innovation."
  },
  deployed:{
    eyebrow:"Live Deployments", title:"Products in production, not just repositories",
    sub:"Shipped and deployed on Vercel — real platforms serving real users in the education and EdTech space.",
    d1:{desc:"Study-abroad consultancy platform — university matching, document review, application processing, and visa guidance for international students."},
    d2:{desc:"Higher-education portal covering 208 universities and ~45,000 programs, with a study finder, TR-YÖS exam info, and visa/scholarship guidance."},
    d3:{desc:"B2B SaaS dashboard for education partners — application tracking, commission/earnings dashboard, and a 200+ university database."}
  },
  opensource:{
    eyebrow:"Open Source", title:"Code in the open",
    sub:'A selection of public repositories — full-stack work spanning Angular, React, Node.js, and the MERN stack.\n      <a class="text-link" href="https://github.com/MTalhaArif" target="_blank" rel="noopener">View full GitHub profile →</a>'
  },
  repo:{
    r1:{desc:"Angular CRUD application."}, r2:{desc:"Interactive React blog site built with a JSON server."},
    r3:{desc:"Server-rendered blog application using Node.js and EJS templating."}, r4:{desc:"A memory-matching game built in React."},
    r5:{desc:"Full-stack application built on MongoDB, Express, React, and Node.js."}, r6:{desc:"Frontend application front-end build."}
  },
  upwork:{
    eyebrow:"Track Record", title:"Top Rated Plus on Upwork. Deep roots in e-learning.",
    sub:'Muhammad Talha Arif — AI Architect | Instructional Designer | Articulate 360 | PM — <strong>100% Job Success</strong>, Top Rated Plus, across 32 jobs.',
    stat1:"Job Success", stat3:"Total Jobs", stat4:"Total Hours",
    card1:{title:"AI Architect & Multi-Agent Systems", desc:"Bridging cognitive psychology, generative AI, and full-stack engineering to build intelligent systems that don't just transfer knowledge — they change behavior. Hands-on with multi-agent orchestration, advanced LLM orchestration (Claude and other leading models), and production-grade version control."},
    view_profile:"View Upwork profile →",
    card2:{title:"Instructional Design & E-Learning", desc:"Deep, proven e-learning delivery: interactive eCourses and enterprise training modules built in Articulate Storyline, Adobe Captivate, and Vyond, backed by ADDIE/SAM methodology, needs-assessment frameworks, and LMS deployment — the same discipline behind Tecrix Global's Instructional Design service line."},
    t1:{quote:'"A tremendous instructional designer that was able to accomplish a significant amount in very little time with very high quality. Would love to work with him again!"', cite:"Verified Client — Instructional Design w/ Vyond, 81 hrs"},
    t2:{quote:'"I am very impressed with the services they provide. His animation work is 100% incredible. He made all my projects in the given time and according to instructions."', cite:"Abdul M., Manager — Digital Marketing"},
    t3:{quote:'"Muhammad was great! Very easy to communicate with, super pleasant, responsive, and does excellent work. I\'ll definitely hire him again."', cite:"Verified Client — Vyond Whiteboard Video Project"},
    cert1:"🎓 Generative AI: Prompt Engineering — IBM", cert2:"🎓 Machine Learning with Python — IBM",
    cert3:"🎓 Google Project Management Certificate — Coursera", cert4:"🎓 McKinsey Forward Program — McKinsey & Company"
  },
  team:{
    eyebrow:"Leadership", title:"The team behind Tecrix Global",
    m1:{role:"Chief Technology Officer", desc:"Top Rated Upwork freelancer and technical co-founder — leads architecture, engineering, and AI systems delivery across every Tecrix Global build."},
    m2:{role:"Director of Marketing", desc:"Owns brand, positioning, and growth strategy — bringing Tecrix Global's products and case studies to the markets that need them."},
    m3:{role:"Executive Director", desc:"Drives company strategy, partnerships, and operational execution across the studio's client and product portfolio."},
    phone_label:"Phone"
  },
  contact:{
    eyebrow:"Get In Touch", title:"Let's architect your next system",
    sub:"Tell us about your product, your workflow bottleneck, or the agent you wish existed — we'll reply within one business day.",
    email_label:"Email", lahore_label:"Lahore Office", istanbul_label:"Istanbul Office", sargodha_label:"Sargodha Office",
    form_name:"Name", form_email:"Email", form_need:"What do you need built?", form_submit:"Send Message",
    form_note:"Thanks — this is a static demo form. Wire it up to your inbox/CRM to go live."
  },
  footer:{ copyright_pre:"©", copyright_post:"Tecrix Global. Custom software, mobile apps, and AI agent systems." },
  chat:{ title:"Tecrix Global Assistant", greeting:"Hi, I'm the Tecrix Global assistant demo. Ask me about services, projects, or how our agents work.", placeholder:"Type a message…" },
  bot:{
    services:"We offer Project Scope, AI Development, MVP Builder, Custom Software, UX/UI Design, Dedicated Teams, Instructional Design, 2D Animation, and AI & Automation.",
    projects:"Check the Projects section above — Xuma, Safeword, Bloodlines, Quicky, and more, plus engagements alongside Daraz, Foodpanda, and Fave.",
    agents:"Our AI agents run on n8n and custom orchestration — they read, decide, and act across your CRM, inbox, and internal tools.",
    voice:"Our voice agents handle real-time speech recognition and voice-triggered automation — the same tech behind our Safeword safety app.",
    chatbot:"We build RAG-powered chatbot assistants trained on your own docs and product data, deployable on web, WhatsApp, or in-app.",
    team:"Leadership: Muhammad Talha Arif (CTO), Ilhan Bisgin (Director of Marketing), and Junaid Qadir (Executive Director).",
    contact:"Reach us at info@tecrix.io, or use the contact form near the bottom of the page.",
    pricing:"Every engagement starts with our 15-day Project Scope process to size the work accurately — book a free consultation to get a quote.",
    fallback:"Thanks for the message — a real deployment of this assistant would route that to our team or a live LLM. Try asking about services, projects, agents, or voice."
  }
},

tr: {
  nav: { services:"Hizmetler", ai:"Yapay Zeka Çözümleri", projects:"Projeler", opensource:"Açık Kaynak", team:"Ekip", upwork:"Uzmanlık", contact:"İletişim", start_project:"Projeye Başla" },
  hero: {
    eyebrow:"Ürün ve Yazılım Stüdyosu · Yapay Zeka Ajanları · Mobil",
    title:'Özel Ürün ve Yazılım Geliştirme, <span class="text-accent">Başarınıza Odaklı</span>',
    sub:"Tecrix Global; kurucular ve hızlı hareket etmesi gereken kurumlar için mobil uygulamalar, özel yazılımlar ve akıllı yapay zeka ajan sistemleri — sohbet botları, sesli ajanlar ve otomatik iş akışları — tasarlar, geliştirir ve yayına alır.",
    cta_book:"Ücretsiz Danışmanlık Alın", cta_work:"Çalışmalarımızı İnceleyin",
    stat1:"Tamamlanan Proje", stat2:"Bünye İçi Uzman", stat3:"Clutch Puanı", stat4:"15 Günlük MVP Süreci",
    caption:"Tek bir ajan, her iş akışı — sohbet, ses, CRM ve otomasyon gerçek zamanlı olarak yönetilir."
  },
  strip:{ trusted:"Mobil, e-ticaret ve talep üzerine platformlarda güvenilir" },
  services:{
    eyebrow:"Ne Yapıyoruz",
    title:"Gelir kayıplarını ortadan kaldırmak<br>ve operasyonel hızı artırmak için tasarlanan hizmetler",
    s1:{title:"Proje Kapsamı", desc:"Tek bir satır kod yazılmadan önce ürün vizyonunu iş hedefleriyle uyumlu hale getiren yapılandırılmış 15 günlük bir süreç."},
    s2:{title:"Yapay Zeka Geliştirme ve Etkinleştirme", desc:"İşletmenizin geleceğe hazır ve rekabetçi kalması için stratejik olarak uygulanan makine öğrenimi ve üretken yapay zeka."},
    s3:{title:"MVP Oluşturucu", desc:"Lansman için hız ile gerçek kalite standartlarını dengeleyen yüksek kaliteli bir MVP ile pazara hızlı giriş."},
    s4:{title:"Özel Yazılım Geliştirme", desc:"Vizyonunuzu tam olarak iş ihtiyaçlarınıza uygun özel yazılım çözümlerine dönüştüren yalın çerçeveler."},
    s5:{title:"UX/UI Tasarım", desc:"Estetik çekiciliği işlevsel tasarım ilkeleriyle birleştiren, kullanıcı dostu ve etkileyici ürünler."},
    s6:{title:"Özel Ekipler", desc:"Tutarlı iletişim ve tam uyum için projenize atanan özel bir bünye içi geliştirme ekibi."},
    s7:{title:"Eğitim Tasarımı ve E-Öğrenme", desc:"Ürün benimsenmesi ve dönüştürücü öğrenme deneyimleri için tasarlanmış eğitim içerikleri ve materyaller."},
    s8:{title:"2D Animasyon", desc:"Ürün etkileşimini artıran ve karmaşık kavramları hareketle anlatan animasyonlu görsel içerikler."},
    s9:{title:"Yapay Zeka ve Otomasyon", desc:"Operasyonları ve kararları kolaylaştıran n8n iş akışı otomasyonu, yapay zeka ajanları ve yapay zeka destekli uygulamalar."},
    s10:{title:"Kendi Sesli Ajanlarınızı Oluşturun", desc:"İşletmeniz için özel geliştirilen sesli yapay zeka ajanları — gerçek zamanlı konuşma tanıma, doğal diyalog ve destek, IVR ile eller serbest iş akışları için sesle tetiklenen otomasyon."},
    s11:{title:"AEO — Yapay Zeka Motoru Optimizasyonu", desc:"Geleneksel SEO'yu geride bıraktık. AEO, içeriğinizi ChatGPT, Perplexity ve Gemini gibi yapay zeka arama ve yanıt motorlarında görünür kılacak şekilde yapılandırır ve konumlandırır — bir sonraki müşterinizin gerçekten baktığı yerde."},
    s12:{title:"Üniversite Başvuru Portalları ve Form Otomasyonu", desc:"Otomatik belge kabulü, uygunluk kontrolleri ve yapay zeka destekli form doldurma süreçleriyle uçtan uca başvuru portalları — üniversiteler ve yurt dışı eğitim danışmanlıkları için manuel işlem süresini azaltır."},
    s13:{title:"Yapay Zeka ile Pixar Tarzı Animasyon", desc:"Yapay zeka ile üretilen karakter odaklı 3D animasyon içerikleri — geleneksel bir animasyon stüdyosu bütçesi olmadan ürün tanıtımları, pazarlama kampanyaları ve marka hikâyeleri için Pixar tarzı görseller."},
    s14:{title:"Otomatik Kamyon Sevkiyat Aramaları", desc:"Sürücüleri ve sevkiyat görevlilerini otomatik olarak arayan sesli yapay zeka — yükleri onaylar, teslim alma detaylarını iletir ve her aramada bir insana ihtiyaç duymadan lojistik koordinasyonunu yönetir."}
  },
  ai:{
    eyebrow:"Üretken Yapay Zeka ve Otomasyon",
    title:'Tek bir ajan mimarisi. <span class="text-accent">İşletmenizin ihtiyaç duyduğu her kanal.</span>',
    sub:"Ürününüze, destek masanıza ve operasyonlarınıza entegre olan; sizin adınıza konuşan, yazışan ve harekete geçen ajan sistemleri tasarlıyoruz.",
    c1:{title:"Sohbet Botu Asistanları", desc:"Dokümanlarınız, ürününüz ve politikalarınız üzerinde eğitilmiş RAG destekli konuşma asistanları — 7/24 destek ve potansiyel müşteri nitelendirmesi için web, WhatsApp veya uygulama içinde devreye alınır.", li1:"Erişim destekli üretim (RAG)", li2:"Bağlama duyarlı, markanıza uygun yanıtlar", li3:"İnsan devri ve eskalasyon mantığı"},
    c2:{title:"Otonom Yapay Zeka Ajanları", desc:"n8n ve özel orkestrasyon üzerine inşa edilmiş; insan müdahalesi olmadan CRM'inizde, gelen kutunuzda ve dahili araçlarınızda okuyan, karar veren ve harekete geçen çok adımlı ajanlar.", li1:"n8n ve iş akışı otomasyonu", li2:"CRM ve API entegrasyonları", li3:"Güvenlik önlemleriyle görev zincirleri"},
    c3:{title:"Sesli Ajanlar", desc:"Eller serbest destek, IVR değişimi ve güvenlik tetikleyicileri için gerçek zamanlı sesli yapay zeka — Safeword acil durum uygulamamızın arkasındaki aynı ses tanıma mühendisliği.", li1:"Gerçek zamanlı konuşma tanıma", li2:"Sesle tetiklenen otomasyonlar", li3:"Doğal, düşük gecikmeli konuşma"}
  },
  projects:{
    eyebrow:"Çalışmalarımız", title:"Tasarladığımız, geliştirdiğimiz ve yayına aldığımız ürünler",
    filter_all:"Tümü", filter_ai:"Yapay Zeka ve Ses", empty:"Bu filtreyle eşleşen proje bulunmuyor.",
    p1:{badge:"Süper Uygulama", desc:"Sosyal akış, pazar yeri, profesyonel ağ kurma ve videoyu bir araya getiren bir Flutter süper uygulaması — tek platformda Facebook, Instagram, OLX, LinkedIn ve YouTube."},
    p2:{badge:"Güvenlik · Sesli Yapay Zeka", desc:"Sesle tetiklenen acil durum uyarılarıyla gerçek zamanlı konum takibi — önceden kaydedilmiş bir ifade SOS'u etkinleştirir ve canlı konumu acil durum kişileriyle paylaşır."},
    p3:{badge:"Sosyal", desc:"Çift profilli sosyal platform: günlük paylaşımlar için standart bir profil ve karakter yaratımı ile rol yapma için fantezi bir profil, yerleşik içerik denetimiyle birlikte."},
    p4:{badge:"Talep Üzerine", desc:"Kullanıcıları evde, hospis veya ameliyat sonrası bakım için yerel hemşirelik kurumlarıyla buluşturur — kurumlara göz atın, hemşire talep edin ve nitelikli bir profesyonelle eşleşin."},
    p5:{badge:"Talep Üzerine", desc:"Gerçek zamanlı sürücü eşleştirme, canlı yolculuk takibi, uygulama içi mesajlaşma ve otomatik ödeme işlemleriyle araç çağırma uygulaması."},
    p6:{badge:"Talep Üzerine", desc:"Mobil berber randevusu — berberler tam donanımlı bir araçla müşterilere gider; randevu, değerlendirme ve otomatik uygulama içi ödemelerle."},
    p7:{badge:"İçerik Üretici", desc:"Orijinal sanat eserlerinin — müzik, videografi, resim, fotoğrafçılık — yüklendiği ve içerik üreticilerin birbirine meydan okuyabildiği bir platform."},
    p8:{badge:"Pazar Yeri", desc:"Görsel soy ağaçları, yetiştirici sosyal özellikleri, topluluk grupları ve özel köpek maması için entegre bir pazar yeri ile köpek soy kütüğü yönetimi."},
    p9:{badge:"Müşteri Projesi", desc:"Hayranları herhangi bir vesileyle favori yıldızlarıyla buluşturan kişiselleştirilmiş video mesaj platformu — FourFox için geliştirildi."},
    p10:{badge:"Müşteri Projesi", desc:"Star Tech Bazaar için gelir getiren bir ürün olarak geliştirilip yayına alınan hızlı ve basit bir tüketici VPN uygulaması."},
    p11:{badge:"Lojistik · Teklif Sistemi", desc:"Canlı teklif sistemine sahip kamyon rezervasyon pazar yeri — müşteriler kamyon talep eder, sürücüler teklif verir, müşteriler onaylar. Sürücü tarafı için ayrı bir uygulama da dahildir."},
    p12:{badge:"Yan Proje", desc:"Temiz, mobil öncelikli bir okuma deneyimiyle bölgesel haber içeriği sunan yerel bir haber uygulaması."},
    p13:{badge:"Yan Proje", desc:"Flutter ve Firebase ile geliştirilmiş basit, odaklanmış bir günlük alıntı uygulaması."},
    p14:{badge:"Açık Kaynak Paketi", desc:"Dinamik kamera renk filtreleri, görüntü kırpma, metin ekleme, emoji ve özel filtre renk listeleri için açık kaynaklı bir Flutter paketi."},
    p15:{badge:"Akıllı Ev · Yapay Zekâ", desc:"Yapay zekâ destekli akıllı kapı zili ve ev merkezi için yardımcı uygulama — iki yönlü konuşmalı HD canlı video, kişi, paket ve evcil hayvanların yapay zekâ ile algılanması, filtrelenmiş bildirimler ve 500+ akıllı ev cihazı için sesli kontrol."},
    p16:{badge:"Eğitim Teknolojisi", desc:"Öğretmenler için mesleki gelişim platformu — birebir koçluk seansları planlayın, canlı görüntülü toplantılara katılın, koçlarla mesajlaşın ve PDF ile video öğrenme kaynaklarına erişin."}
  },
  links:{ play_store:"Play Store", app_store:"App Store", github:"GitHub", view_live:"Canlı görüntüle →" },
  engagement:{
    eyebrow:"Kurumsal İş Birlikleri", title:"Sektör liderleriyle birlikte yürütülen projeler",
    fave:"Hayranların içerik aracılığıyla bağlantı kurduğu ve indirimlerle değiştirilebilen ödül puanları kazandığı, hayran kitlesi odaklı bir topluluk platformu.",
    daraz:"Bölgenin önde gelen e-ticaret platformlarından biriyle, birden fazla ülkede çeşitli ürün kategorilerini kapsayan iş birliği.",
    foodpanda:"Delivery Hero'nun teknoloji odaklı, yemek teslimatına yönelik yenilikçi iştirakiyle birlikte çalışma."
  },
  deployed:{
    eyebrow:"Canlı Yayındaki Projeler", title:"Sadece depo değil, üretimde çalışan ürünler",
    sub:"Vercel üzerinde yayınlandı — eğitim ve EdTech alanında gerçek kullanıcılara hizmet veren gerçek platformlar.",
    d1:{desc:"Yurt dışı eğitim danışmanlığı platformu — uluslararası öğrenciler için üniversite eşleştirme, belge inceleme, başvuru işlemleri ve vize rehberliği."},
    d2:{desc:"208 üniversiteyi ve yaklaşık 45.000 programı kapsayan; program bulucu, TR-YÖS sınav bilgisi ve vize/burs rehberliği sunan yükseköğretim portalı."},
    d3:{desc:"Eğitim ortakları için B2B SaaS panosu — başvuru takibi, komisyon/kazanç panosu ve 200'den fazla üniversite içeren bir veritabanı."}
  },
  opensource:{
    eyebrow:"Açık Kaynak", title:"Açık kaynak kodları",
    sub:'Angular, React, Node.js ve MERN yığınına yayılan, tam yığın çalışmalar içeren bir dizi genel depo.\n      <a class="text-link" href="https://github.com/MTalhaArif" target="_blank" rel="noopener">Tüm GitHub profilini görüntüleyin →</a>'
  },
  repo:{
    r1:{desc:"Angular CRUD uygulaması."}, r2:{desc:"JSON sunucusuyla geliştirilmiş etkileşimli React blog sitesi."},
    r3:{desc:"Node.js ve EJS şablon motoru kullanılarak sunucu tarafında oluşturulan blog uygulaması."}, r4:{desc:"React ile geliştirilmiş bir hafıza eşleştirme oyunu."},
    r5:{desc:"MongoDB, Express, React ve Node.js üzerine inşa edilmiş tam yığın uygulama."}, r6:{desc:"Ön yüz uygulaması geliştirmesi."}
  },
  upwork:{
    eyebrow:"Geçmiş Performans", title:"Upwork'te Top Rated Plus. E-öğrenmede köklü uzmanlık.",
    sub:'Muhammad Talha Arif — Yapay Zeka Mimarı | Eğitim Tasarımcısı | Articulate 360 | PM — <strong>%100 İş Başarısı</strong>, Top Rated Plus, 32 iş genelinde.',
    stat1:"İş Başarısı", stat3:"Toplam İş", stat4:"Toplam Saat",
    card1:{title:"Yapay Zeka Mimarisi ve Çoklu Ajan Sistemleri", desc:"Yalnızca bilgi aktarmakla kalmayıp davranışı değiştiren akıllı sistemler kurmak için bilişsel psikolojiyi, üretken yapay zekayı ve tam yığın mühendisliği bir araya getiriyor. Çoklu ajan orkestrasyonu, gelişmiş LLM orkestrasyonu (Claude ve diğer önde gelen modeller) ve üretim düzeyinde sürüm kontrolü konusunda uygulamalı deneyim."},
    view_profile:"Upwork profilini görüntüleyin →",
    card2:{title:"Eğitim Tasarımı ve E-Öğrenme", desc:"Kanıtlanmış, derinlemesine e-öğrenme sunumu: Articulate Storyline, Adobe Captivate ve Vyond ile geliştirilen etkileşimli e-kurslar ve kurumsal eğitim modülleri; ADDIE/SAM metodolojisi, ihtiyaç analizi çerçeveleri ve LMS dağıtımıyla destekleniyor — Tecrix Global'in Eğitim Tasarımı hizmet hattının arkasındaki aynı disiplin."},
    t1:{quote:'"Çok kısa sürede önemli miktarda işi çok yüksek kalitede tamamlayabilen olağanüstü bir eğitim tasarımcısı. Onunla tekrar çalışmayı çok isteriz!"', cite:"Doğrulanmış Müşteri — Vyond ile Eğitim Tasarımı, 81 sa"},
    t2:{quote:'"Sundukları hizmetlerden çok etkilendim. Animasyon çalışması yüzde yüz mükemmel. Tüm projelerimi verilen sürede ve talimatlara uygun şekilde tamamladı."', cite:"Abdul M., Yönetici — Dijital Pazarlama"},
    t3:{quote:'"Muhammad harikaydı! İletişim kurması çok kolay, son derece kibar, duyarlı ve mükemmel iş çıkarıyor. Kesinlikle tekrar işe alacağım."', cite:"Doğrulanmış Müşteri — Vyond Beyaz Tahta Video Projesi"},
    cert1:"🎓 Üretken Yapay Zeka: Prompt Mühendisliği — IBM", cert2:"🎓 Python ile Makine Öğrenimi — IBM",
    cert3:"🎓 Google Proje Yönetimi Sertifikası — Coursera", cert4:"🎓 McKinsey Forward Programı — McKinsey & Company"
  },
  team:{
    eyebrow:"Liderlik", title:"Tecrix Global'in arkasındaki ekip",
    m1:{role:"Teknoloji Direktörü (CTO)", desc:"Upwork'te Top Rated serbest çalışan ve teknik kurucu ortak — Tecrix Global'in geliştirdiği her üründe mimari, mühendislik ve yapay zeka sistemleri teslimatına liderlik eder."},
    m2:{role:"Pazarlama Direktörü", desc:"Marka, konumlandırma ve büyüme stratejisini yönetir — Tecrix Global'in ürünlerini ve başarı hikayelerini ihtiyaç duyan pazarlara taşır."},
    m3:{role:"İcra Direktörü", desc:"Stüdyonun müşteri ve ürün portföyü genelinde şirket stratejisini, ortaklıkları ve operasyonel yürütmeyi yönlendirir."},
    phone_label:"Telefon"
  },
  contact:{
    eyebrow:"Bize Ulaşın", title:"Bir sonraki sisteminizi birlikte tasarlayalım",
    sub:"Ürününüzü, iş akışınızdaki tıkanıklığı veya var olmasını dilediğiniz ajanı bize anlatın — bir iş günü içinde size dönüş yapacağız.",
    email_label:"E-posta", lahore_label:"Lahor Ofisi", istanbul_label:"İstanbul Ofisi", sargodha_label:"Sargodha Ofisi",
    form_name:"Ad Soyad", form_email:"E-posta", form_need:"Neyin geliştirilmesini istiyorsunuz?", form_submit:"Mesaj Gönder",
    form_note:"Teşekkürler — bu statik bir demo formudur. Yayına almak için gelen kutunuza/CRM'inize bağlayın."
  },
  footer:{ copyright_pre:"©", copyright_post:"Tecrix Global. Özel yazılım, mobil uygulamalar ve yapay zeka ajan sistemleri." },
  chat:{ title:"Tecrix Global Asistanı", greeting:"Merhaba, ben Tecrix Global asistan demosuyum. Bana hizmetlerimiz, projelerimiz veya ajanlarımızın nasıl çalıştığı hakkında soru sorabilirsiniz.", placeholder:"Bir mesaj yazın…" },
  bot:{
    services:"Proje Kapsamı, Yapay Zeka Geliştirme, MVP Oluşturucu, Özel Yazılım, UX/UI Tasarım, Özel Ekipler, Eğitim Tasarımı, 2D Animasyon ve Yapay Zeka & Otomasyon hizmetleri sunuyoruz.",
    projects:"Yukarıdaki Projeler bölümüne göz atın — Xuma, Safeword, Bloodlines, Quicky ve daha fazlası, ayrıca Daraz, Foodpanda ve Fave ile yürüttüğümüz iş birlikleri.",
    agents:"Yapay zeka ajanlarımız n8n ve özel orkestrasyon üzerinde çalışır — CRM'inizde, gelen kutunuzda ve dahili araçlarınızda okur, karar verir ve harekete geçer.",
    voice:"Sesli ajanlarımız gerçek zamanlı konuşma tanıma ve sesle tetiklenen otomasyonu yönetir — Safeword güvenlik uygulamamızın arkasındaki aynı teknoloji.",
    chatbot:"Kendi dokümanlarınız ve ürün verileriniz üzerinde eğitilmiş, web, WhatsApp veya uygulama içinde devreye alınabilen RAG destekli sohbet botu asistanları geliştiriyoruz.",
    team:"Liderlik: Muhammad Talha Arif (CTO), Ilhan Bisgin (Pazarlama Direktörü) ve Junaid Qadir (İcra Direktörü).",
    contact:"Bize info@tecrix.io adresinden ulaşabilir veya sayfanın alt kısmındaki iletişim formunu kullanabilirsiniz.",
    pricing:"Her iş birliği, işi doğru şekilde ölçeklendirmek için 15 günlük Proje Kapsamı sürecimizle başlar — teklif almak için ücretsiz bir danışmanlık randevusu alın.",
    fallback:"Mesajınız için teşekkürler — bu asistanın gerçek bir sürümü bunu ekibimize veya canlı bir LLM'e yönlendirirdi. Hizmetler, projeler, ajanlar veya ses hakkında soru sormayı deneyin."
  }
},

ar: {
  nav: { services:"الخدمات", ai:"حلول الذكاء الاصطناعي", projects:"المشاريع", opensource:"المصدر المفتوح", team:"الفريق", upwork:"الخبرات", contact:"تواصل معنا", start_project:"ابدأ مشروعك" },
  hero: {
    eyebrow:"استوديو المنتجات والبرمجيات · وكلاء الذكاء الاصطناعي · الجوّال",
    title:'تطوير منتجات وبرمجيات مخصصة، <span class="text-accent">تركّز على نجاحك</span>',
    sub:"تصمّم Tecrix Global وتبني وتطلق تطبيقات الجوّال والبرمجيات المخصّصة وأنظمة وكلاء الذكاء الاصطناعي الذكية — روبوتات الدردشة والوكلاء الصوتيون وسير العمل الآلي — لأصحاب المشاريع والمؤسسات التي تحتاج إلى التحرك بسرعة.",
    cta_book:"احجز استشارة مجانية", cta_work:"اطّلع على أعمالنا",
    stat1:"مشروع مكتمل", stat2:"متخصص داخلي", stat3:"تقييم Clutch", stat4:"عملية تحديد نطاق خلال 15 يومًا",
    caption:"وكيل واحد، لكل سير عمل — الدردشة والصوت وإدارة علاقات العملاء والأتمتة، منسّقة في الوقت الفعلي."
  },
  strip:{ trusted:"موثوق به عبر منصّات الجوّال والتجارة الإلكترونية والخدمات عند الطلب" },
  services:{
    eyebrow:"ماذا نقدّم",
    title:"خدمات مصمّمة للقضاء على تسرّب الإيرادات<br>وزيادة سرعة العمليات",
    s1:{title:"تحديد نطاق المشروع", desc:"عملية منظّمة مدتها 15 يومًا تُوائم رؤية المنتج مع أهداف العمل قبل كتابة أي سطر من الكود."},
    s2:{title:"تطوير وتفعيل الذكاء الاصطناعي", desc:"تعلّم آلي وذكاء اصطناعي توليدي يُطبَّقان بشكل استراتيجي لإبقاء عملك جاهزًا للمستقبل وقادرًا على المنافسة."},
    s3:{title:"بناء المنتج الأولي (MVP)", desc:"دخول سريع إلى السوق بمنتج أولي عالي الجودة يوازن بين السرعة ومعايير الجودة الحقيقية عند الإطلاق."},
    s4:{title:"تطوير برمجيات مخصّصة", desc:"أطر عمل مرنة تحوّل رؤيتك إلى حلول برمجية مصمّمة خصيصًا لاحتياجات عملك الدقيقة."},
    s5:{title:"تصميم تجربة وواجهة المستخدم", desc:"منتجات جذّابة وسهلة الاستخدام تجمع بين الجاذبية الجمالية ومبادئ التصميم الوظيفي."},
    s6:{title:"فِرق مخصّصة", desc:"فريق تطوير داخلي مخصّص لمشروعك يضمن تواصلًا ثابتًا وتوافقًا كاملًا."},
    s7:{title:"التصميم التعليمي والتعلّم الإلكتروني", desc:"محتوى تعليمي ومواد تدريبية مصمّمة لتبنّي المنتج وتجارب تعلّم تحويلية."},
    s8:{title:"رسوم متحركة ثنائية الأبعاد", desc:"محتوى مرئي متحرّك يعزّز تفاعل المستخدم مع المنتج ويشرح المفاهيم المعقّدة من خلال الحركة."},
    s9:{title:"الذكاء الاصطناعي والأتمتة", desc:"أتمتة سير العمل عبر n8n، ووكلاء الذكاء الاصطناعي، وتطبيقات مدعومة بالذكاء الاصطناعي تُبسّط العمليات والقرارات."},
    s10:{title:"أنشئ وكلاءك الصوتيين", desc:"وكلاء صوتيون مخصّصون يُبنَون لعملك — تمييز صوتي فوري، محادثة طبيعية، وأتمتة تُفعَّل بالصوت للدعم وأنظمة الرد الآلي وسير العمل بدون استخدام اليدين."},
    s11:{title:"AEO — تحسين الظهور في محرّكات الذكاء الاصطناعي", desc:"تجاوزنا تحسين محركات البحث التقليدي (SEO). يعمل AEO على هيكلة محتواك وتموضعه ليكون مرئيًا داخل محركات البحث والإجابة القائمة على الذكاء الاصطناعي — ChatGPT وPerplexity وGemini — حيث يبحث عميلك القادم بالفعل."},
    s12:{title:"بوابات القبول الجامعي وأتمتة تعبئة النماذج", desc:"بوابات قبول متكاملة مع استقبال آلي للمستندات، وفحص الأهلية، وأنظمة تعبئة نماذج مدعومة بالذكاء الاصطناعي — تقلّص وقت المعالجة اليدوية للجامعات ومكاتب الاستشارات الدراسية بالخارج."},
    s13:{title:"رسوم متحركة بأسلوب Pixar بالذكاء الاصطناعي", desc:"محتوى رسوم متحركة ثلاثية الأبعاد يعتمد على الشخصيات ويُنتَج بالذكاء الاصطناعي — رسوم بأسلوب Pixar لشرح المنتجات والحملات التسويقية وسرد قصة العلامة التجارية دون الحاجة إلى ميزانية استوديو رسوم متحركة تقليدي."},
    s14:{title:"مكالمات إرسال الشاحنات الآلية", desc:"ذكاء اصطناعي صوتي يتّصل بالسائقين ومسؤولي الإرسال تلقائيًا — يؤكّد الحمولات، وينقل تفاصيل الاستلام، ويدير تنسيق اللوجستيات دون الحاجة إلى موظف بشري في كل مكالمة."}
  },
  ai:{
    eyebrow:"الذكاء الاصطناعي التوليدي والأتمتة",
    title:'معمارية وكيل واحدة. <span class="text-accent">كل قناة يحتاجها عملك.</span>',
    sub:"نصمّم أنظمة وكلاء تندمج مع منتجك ومكتب الدعم لديك وعملياتك — تتحدّث وتراسل وتتصرّف نيابةً عنك.",
    c1:{title:"مساعدو الدردشة الآلية", desc:"مساعدون محادثون مدعومون بتقنية RAG، مدرَّبون على مستنداتك ومنتجك وسياساتك — يُنشرون على الويب أو واتساب أو داخل التطبيق لتقديم دعم على مدار الساعة وتأهيل العملاء المحتملين.", li1:"التوليد المعزَّز بالاسترجاع (RAG)", li2:"ردود تراعي السياق ومتوافقة مع هوية علامتك", li3:"منطق التحويل إلى موظف بشري والتصعيد"},
    c2:{title:"وكلاء الذكاء الاصطناعي المستقلّون", desc:"وكلاء متعدّدو الخطوات مبنيّون على n8n وتنسيق مخصّص، يقرأون ويقرّرون ويتصرّفون عبر نظام إدارة علاقات العملاء وصندوق الوارد وأدواتك الداخلية دون تدخّل بشري.", li1:"أتمتة سير العمل عبر n8n", li2:"تكاملات CRM وواجهات برمجة التطبيقات", li3:"سلاسل مهام مزوَّدة بضوابط أمان"},
    c3:{title:"الوكلاء الصوتيون", desc:"ذكاء اصطناعي صوتي فوري للدعم بدون استخدام اليدين، واستبدال أنظمة الرد الآلي، ومحفّزات السلامة — بفضل هندسة التعرّف على الصوت ذاتها الكامنة خلف تطبيق الطوارئ Safeword.", li1:"تمييز صوتي فوري", li2:"أتمتة تُفعَّل بالصوت", li3:"محادثة طبيعية بزمن استجابة منخفض"}
  },
  projects:{
    eyebrow:"أعمالنا", title:"منتجات صمّمناها وطوّرناها وأطلقناها",
    filter_all:"الكل", filter_ai:"الذكاء الاصطناعي والصوت", empty:"لا توجد مشاريع مطابقة لهذا الفلتر بعد.",
    p1:{badge:"تطبيق شامل", desc:"تطبيق شامل مبني بتقنية Flutter يجمع بين الخلاصة الاجتماعية والسوق والتواصل المهني والفيديو — فيسبوك وإنستغرام وOLX ولينكدإن ويوتيوب في منصّة واحدة."},
    p2:{badge:"السلامة · ذكاء اصطناعي صوتي", desc:"تتبّع فوري للموقع مع تنبيهات طوارئ تُفعَّل بالصوت — عبارة مسجَّلة مسبقًا تُفعِّل نداء الاستغاثة وتشارك الموقع المباشر مع جهات اتصال الطوارئ."},
    p3:{badge:"اجتماعي", desc:"منصّة اجتماعية بملفّين شخصيّين: ملف قياسي للتحديثات اليومية وملف خيالي لابتكار شخصية وتقمّص الأدوار، مع نظام إشراف مدمج على المحتوى."},
    p4:{badge:"عند الطلب", desc:"يربط المستخدمين بوكالات تمريض محلية للرعاية المنزلية أو رعاية نهاية الحياة أو ما بعد العمليات — تصفّح الوكالات، اطلب ممرضًا، وتطابق مع أخصّائي مؤهَّل."},
    p5:{badge:"عند الطلب", desc:"تطبيق لطلب الرحلات مع مطابقة فورية للسائقين، وتتبّع مباشر للرحلة، ومراسلة داخل التطبيق، ومعالجة آلية للدفع."},
    p6:{badge:"عند الطلب", desc:"حجز حلاقين متنقّلين — يصل الحلّاقون إلى العملاء بمركبة مجهّزة بالكامل، مع الجدولة والتقييمات والدفع الآلي داخل التطبيق."},
    p7:{badge:"صانع محتوى", desc:"منصّة لرفع الأعمال الفنية الأصلية — موسيقى وتصوير فيديو ورسم وتصوير فوتوغرافي — حيث يمكن لصانعي المحتوى تحدّي بعضهم البعض مباشرة."},
    p8:{badge:"سوق إلكتروني", desc:"إدارة سلالات الكلاب مع مخطّطات نسب مرئية، وميزات اجتماعية للمربّين، ومجموعات مجتمعية، وسوق متكامل لأطعمة الكلاب المتخصّصة."},
    p9:{badge:"مشروع لعميل", desc:"منصّة فيديوهات تحية شخصية تربط المعجبين بنجومهم المفضّلين لأي مناسبة — طُوِّرت لصالح FourFox."},
    p10:{badge:"مشروع لعميل", desc:"تطبيق VPN بسيط وسريع للمستهلكين، طُوِّر وأُطلق كمنتج مُدرّ للإيرادات لصالح Star Tech Bazaar."},
    p11:{badge:"لوجستيات · نظام مزايدة", desc:"سوق حجز شاحنات بنظام مزايدة مباشر — يطلب العملاء شاحنة، ويقدّم السائقون عروضهم، ويوافق العملاء عليها. يتضمّن تطبيقًا مرافقًا لجانب السائق."},
    p12:{badge:"مشروع جانبي", desc:"تطبيق أخبار محلي يقدّم محتوى إخباريًا إقليميًا بتجربة قراءة نظيفة وموجّهة للجوّال أولًا."},
    p13:{badge:"مشروع جانبي", desc:"تطبيق اقتباسات يومية بسيط ومركَّز، مبني باستخدام Flutter وFirebase."},
    p14:{badge:"حزمة مفتوحة المصدر", desc:"حزمة Flutter مفتوحة المصدر لفلاتر ألوان الكاميرا الديناميكية، وقصّ الصور، وإضافة النصوص، والرموز التعبيرية، وقوائم ألوان فلاتر مخصّصة."},
    p15:{badge:"منزل ذكي · ذكاء اصطناعي", desc:"تطبيق مرافق لجرس باب ذكي ومركز منزلي مدعوم بالذكاء الاصطناعي — فيديو مباشر عالي الدقة مع تحدث ثنائي الاتجاه، واكتشاف الأشخاص والطرود والحيوانات الأليفة بالذكاء الاصطناعي، وتنبيهات مُفلترة، وتحكم صوتي بأكثر من 500 جهاز منزلي ذكي."},
    p16:{badge:"تقنيات التعليم", desc:"منصة تطوير مهني للمعلمين — احجز جلسات تدريب فردية، وانضم إلى اجتماعات فيديو مباشرة، وراسل المدربين، واطّلع على موارد تعليمية بصيغة PDF وفيديو."}
  },
  links:{ play_store:"متجر Play", app_store:"متجر App Store", github:"GitHub", view_live:"عرض النسخة المباشرة ←" },
  engagement:{
    eyebrow:"تعاونات مع كبرى المؤسسات", title:"مشاركات إلى جانب رواد القطاع",
    fave:"منصّة مجتمعية تتمحور حول المعجبين حيث يبني المعجبون علاقات من خلال المحتوى ويكسبون نقاط مكافآت قابلة للاستبدال بخصومات.",
    daraz:"تعاون مع إحدى منصّات التجارة الإلكترونية الرائدة في المنطقة، يشمل فئات منتجات متنوّعة عبر عدّة دول.",
    foodpanda:"العمل إلى جانب الابتكار التقني الموجَّه نحو توصيل الطعام لدى الشركة التابعة لـ Delivery Hero."
  },
  deployed:{
    eyebrow:"مشاريع منشورة فعليًا", title:"منتجات قيد التشغيل الفعلي، لا مجرّد مستودعات",
    sub:"تم إطلاقها ونشرها على Vercel — منصّات حقيقية تخدم مستخدمين حقيقيين في مجالي التعليم والتقنية التعليمية.",
    d1:{desc:"منصّة استشارات الدراسة بالخارج — مطابقة الجامعات، مراجعة المستندات، معالجة الطلبات، وإرشادات التأشيرة للطلاب الدوليين."},
    d2:{desc:"بوّابة تعليم عالٍ تغطّي 208 جامعة وحوالي 45,000 برنامج، مع أداة للبحث عن البرامج، ومعلومات عن اختبار TR-YÖS، وإرشادات التأشيرة والمنح الدراسية."},
    d3:{desc:"لوحة تحكّم SaaS لشركاء التعليم — تتبّع الطلبات، ولوحة العمولات والأرباح، وقاعدة بيانات تضمّ أكثر من 200 جامعة."}
  },
  opensource:{
    eyebrow:"المصدر المفتوح", title:"أكواد مفتوحة للجميع",
    sub:'مجموعة مختارة من المستودعات العامة — أعمال متكاملة تمتد عبر Angular وReact وNode.js وحزمة MERN.\n      <a class="text-link" href="https://github.com/MTalhaArif" target="_blank" rel="noopener">عرض الملف الشخصي الكامل على GitHub ←</a>'
  },
  repo:{
    r1:{desc:"تطبيق CRUD بتقنية Angular."}, r2:{desc:"موقع مدوّنة تفاعلي بتقنية React مبني باستخدام خادم JSON."},
    r3:{desc:"تطبيق مدوّنة يُعرَض من جانب الخادم باستخدام Node.js وقوالب EJS."}, r4:{desc:"لعبة مطابقة الذاكرة مبنية بتقنية React."},
    r5:{desc:"تطبيق متكامل مبني على MongoDB وExpress وReact وNode.js."}, r6:{desc:"بناء واجهة أمامية لتطبيق."}
  },
  upwork:{
    eyebrow:"سجل الإنجازات", title:"تصنيف Top Rated Plus على Upwork. خبرة عميقة في التعلّم الإلكتروني.",
    sub:'محمد طلحة عارف — مهندس ذكاء اصطناعي | مصمّم تعليمي | Articulate 360 | مدير مشاريع — <strong>نسبة نجاح 100%</strong>، تصنيف Top Rated Plus، عبر 32 مشروعًا.',
    stat1:"نسبة نجاح المهام", stat3:"إجمالي المشاريع", stat4:"إجمالي الساعات",
    card1:{title:"هندسة الذكاء الاصطناعي وأنظمة الوكلاء المتعدّدة", desc:"يجمع بين علم النفس المعرفي والذكاء الاصطناعي التوليدي والهندسة المتكاملة لبناء أنظمة ذكية لا تكتفي بنقل المعرفة بل تغيّر السلوك. خبرة عملية في تنسيق الوكلاء المتعدّدين، وتنسيق نماذج اللغة الكبرى المتقدّمة (Claude ونماذج رائدة أخرى)، والتحكّم في الإصدارات بمستوى الإنتاج."},
    view_profile:"عرض الملف الشخصي على Upwork ←",
    card2:{title:"التصميم التعليمي والتعلّم الإلكتروني", desc:"تقديم تعلّم إلكتروني عميق وموثَّق: دورات تفاعلية ووحدات تدريب مؤسسية مبنية باستخدام Articulate Storyline وAdobe Captivate وVyond، مدعومة بمنهجية ADDIE/SAM، وأطر تقييم الاحتياجات، ونشر أنظمة إدارة التعلّم — نفس المنهجية القائمة عليها خدمة التصميم التعليمي لدى Tecrix Global."},
    t1:{quote:'"مصمّم تعليمي رائع تمكّن من إنجاز قدر كبير من العمل في وقت قصير جدًا وبجودة عالية جدًا. يسعدنا العمل معه مجددًا!"', cite:"عميل موثَّق — تصميم تعليمي باستخدام Vyond، 81 ساعة"},
    t2:{quote:'"أنا معجب جدًا بالخدمات التي يقدّمونها. عمل الرسوم المتحركة رائع بنسبة 100%. أنجز جميع مشاريعي في الوقت المحدَّد ووفقًا للتعليمات."', cite:"عبد الله م.، مدير — التسويق الرقمي"},
    t3:{quote:'"كان محمد رائعًا! سهل التواصل معه للغاية، لطيف جدًا، سريع الاستجابة، وينجز عملًا ممتازًا. سأوظّفه بالتأكيد مرة أخرى."', cite:"عميل موثَّق — مشروع فيديو Vyond التوضيحي"},
    cert1:"🎓 الذكاء الاصطناعي التوليدي: هندسة الأوامر — IBM", cert2:"🎓 تعلّم الآلة باستخدام Python — IBM",
    cert3:"🎓 شهادة إدارة المشاريع من Google — Coursera", cert4:"🎓 برنامج McKinsey Forward — McKinsey & Company"
  },
  team:{
    eyebrow:"القيادة", title:"الفريق القائم على Tecrix Global",
    m1:{role:"الرئيس التنفيذي للتقنية (CTO)", desc:"مستقل مصنَّف Top Rated على Upwork وشريك مؤسِّس تقني — يقود الهندسة المعمارية والتطوير وتسليم أنظمة الذكاء الاصطناعي في كل منتج تبنيه Tecrix Global."},
    m2:{role:"مدير التسويق", desc:"يتولّى العلامة التجارية والتموضع واستراتيجية النمو — وينقل منتجات Tecrix Global ودراسات حالتها إلى الأسواق التي تحتاجها."},
    m3:{role:"المدير التنفيذي", desc:"يقود استراتيجية الشركة والشراكات والتنفيذ التشغيلي عبر محفظة عملاء ومنتجات الاستوديو."},
    phone_label:"الهاتف"
  },
  contact:{
    eyebrow:"تواصل معنا", title:"لنصمّم معًا نظامك القادم",
    sub:"أخبرنا عن منتجك، أو عن الاختناق في سير عملك، أو عن الوكيل الذي تتمنّى وجوده — سنردّ عليك خلال يوم عمل واحد.",
    email_label:"البريد الإلكتروني", lahore_label:"مكتب لاهور", istanbul_label:"مكتب إسطنبول", sargodha_label:"مكتب سرگودها",
    form_name:"الاسم", form_email:"البريد الإلكتروني", form_need:"ما الذي تحتاج إلى تطويره؟", form_submit:"إرسال الرسالة",
    form_note:"شكرًا لك — هذا نموذج تجريبي ثابت. اربطه بصندوق الوارد أو نظام إدارة علاقات العملاء الخاص بك لتفعيله."
  },
  footer:{ copyright_pre:"©", copyright_post:"Tecrix Global. برمجيات مخصّصة، تطبيقات جوّال، وأنظمة وكلاء ذكاء اصطناعي." },
  chat:{ title:"مساعد Tecrix Global", greeting:"مرحبًا، أنا نسخة تجريبية من مساعد Tecrix Global. اسألني عن خدماتنا أو مشاريعنا أو كيفية عمل وكلائنا.", placeholder:"اكتب رسالة…" },
  bot:{
    services:"نقدّم تحديد نطاق المشروع، وتطوير الذكاء الاصطناعي، وبناء المنتج الأولي، والبرمجيات المخصّصة، وتصميم UX/UI، والفرق المخصّصة، والتصميم التعليمي، والرسوم المتحركة ثنائية الأبعاد، والذكاء الاصطناعي والأتمتة.",
    projects:"اطّلع على قسم المشاريع أعلاه — Xuma وSafeword وBloodlines وQuicky والمزيد، إضافة إلى تعاوناتنا مع Daraz وFoodpanda وFave.",
    agents:"تعمل وكلاء الذكاء الاصطناعي لدينا على n8n وتنسيق مخصّص — تقرأ وتقرّر وتتصرّف عبر نظام CRM وصندوق الوارد وأدواتك الداخلية.",
    voice:"يتولّى وكلاؤنا الصوتيون التعرّف الفوري على الكلام والأتمتة المُفعَّلة بالصوت — نفس التقنية الكامنة خلف تطبيق السلامة Safeword.",
    chatbot:"نبني مساعدي دردشة مدعومين بتقنية RAG، مدرَّبين على مستنداتك وبيانات منتجك الخاصة، وقابلين للنشر على الويب أو واتساب أو داخل التطبيق.",
    team:"القيادة: محمد طلحة عارف (CTO)، إلهان بيشكين (مدير التسويق)، وجنيد قادر (المدير التنفيذي).",
    contact:"تواصل معنا عبر info@tecrix.io، أو استخدم نموذج التواصل في أسفل الصفحة.",
    pricing:"تبدأ كل مشاركة بعملية تحديد نطاق المشروع لدينا التي تستغرق 15 يومًا لتقدير حجم العمل بدقة — احجز استشارة مجانية للحصول على عرض سعر.",
    fallback:"شكرًا لرسالتك — في نشر فعلي لهذا المساعد سيتم توجيه ذلك إلى فريقنا أو إلى نموذج لغوي حي. جرّب السؤال عن الخدمات أو المشاريع أو الوكلاء أو الصوت."
  }
}
};

// ============ i18n engine ============
function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getPath(dict, el.getAttribute('data-i18n'));
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getPath(dict, el.getAttribute('data-i18n-html'));
    if (val != null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = getPath(dict, el.getAttribute('data-i18n-placeholder'));
    if (val != null) el.placeholder = val;
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('#langSwitch button').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem('tecrix-lang', lang);
  window.currentLang = lang;
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('tecrix-lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('#langSwitch button').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
});
