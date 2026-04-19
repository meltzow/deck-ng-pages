const STORAGE_KEYS = {
  language: "deckng.site.language",
  consent: "deckng.site.analytics-consent",
  distinctId: "deckng.site.distinct-id",
};

const POSTHOG = {
  projectToken: "phc_za6nWkOZPQYfJGPGQff8tucXXvk2WbxlQMhHz9RENKK",
  host: "https://eu.i.posthog.com/capture/",
};

const SCREENSHOTS = {
  login: "./assets/site/login-screen.png",
  dashboard: "./assets/site/dashboard-screen.png",
  kanban: "./assets/site/kanban-screen.png",
  card: "./assets/site/card-screen.png",
  settings: "./assets/site/settings-screen.png",
};

const content = {
  en: {
    homeTitle: "deck NG",
    homeDescription:
      "deck NG is a bilingual Nextcloud Deck client for iPhone and Android with browser-based login, Kanban boards, card editing, and privacy-aware self-hosted workflows.",
    privacyTitle: "deck NG Privacy Policy",
    privacyDescription:
      "Privacy information for the deck NG website and app, including GitHub Pages hosting and consent-based PostHog website analytics.",
    legalTitle: "deck NG Legal Notice",
    legalDescription:
      "Legal notice and publisher information for the deck NG website and app.",
    headerTagline: "Teamwork and task flow for your own Nextcloud.",
    nav: {
      overview: "Overview",
      features: "Features",
      screens: "Screens",
      privacy: "Privacy",
      impressum: "Legal Notice",
    },
    downloadShort: "Download",
    hero: {
      eyebrow: "Nextcloud Deck on the go",
      title: "Manage boards and cards without giving up your own server.",
      text:
        "deck NG is a mobile Nextcloud Deck client for self-hosted project work. It connects to the Nextcloud server you choose, supports browser-based Login Flow v2, and gives you a focused Kanban workflow for boards, stacks, cards, assignees, labels, and due dates.",
      appStore: "Download on the App Store",
      playStore: "Get it on Google Play",
      points: [
        "Works with Nextcloud Server 28+ and the Deck app enabled.",
        "Bilingual app experience in German and English.",
        "Designed around self-hosting, clear permissions, and direct control over your workflow data.",
      ],
      signalLoginValue: "Login Flow v2",
      signalLoginLabel: "Browser-based authentication instead of typing your password into the app when supported.",
      signalBoardValue: "Kanban first",
      signalBoardLabel: "Boards, stacks, drag-and-drop card movement, and quick card creation from one screen.",
    },
    metrics: {
      eyebrow: "Grounded in the product",
      title: "The website copy follows current deck NG product behavior and specifications, not a stock landing page template.",
      items: [
        {
          value: "Nextcloud 28+",
          label: "Current compatibility statement from the app store metadata.",
        },
        {
          value: "DE + EN",
          label: "Language support in the app and across this website.",
        },
        {
          value: "iPhone + Android",
          label: "Primary download targets via the public App Store and Google Play listings.",
        },
        {
          value: "PostHog opt-in",
          label: "Website analytics only starts after your explicit consent.",
        },
      ],
    },
    features: {
      eyebrow: "What the app actually does",
      title: "Built around the real deck NG feature set.",
      text:
        "The feature overview below reflects the current app experience across login, dashboard discovery, board interaction, card editing, app settings, and privacy-related behavior.",
      items: [
        {
          icon: "↗",
          title: "Connect to your own Nextcloud",
          text:
            "Enter your server URL or scan a QR code. deck NG validates the server and supports Nextcloud Login Flow v2 with browser handoff and resume handling.",
        },
        {
          icon: "⌘",
          title: "Find boards quickly",
          text:
            "Browse your boards, search by name, filter archived entries, and sort dashboard results without leaving the main board overview.",
        },
        {
          icon: "≡",
          title: "Work in Kanban",
          text:
            "Open a board as stacked columns, move cards within or across stacks using drag and drop, refresh board data, and add new cards directly from a column.",
        },
        {
          icon: "✎",
          title: "Edit card details",
          text:
            "Update titles, descriptions, due dates, labels, and assignees. Markdown descriptions can be edited and previewed in the card detail screen.",
        },
        {
          icon: "◐",
          title: "Match your setup",
          text:
            "The app includes light, dark, and system theme modes, and exposes German and English language selection in settings.",
        },
        {
          icon: "⚑",
          title: "Feedback and analytics controls",
          text:
            "The app includes privacy policy access, legal information, analytics and feedback controls, and an opt-out path for custom tracking.",
        },
      ],
    },
    screens: {
      eyebrow: "Screens",
      title: "From login to card details.",
      text:
        "These screenshots show the current deck NG user flow from login to settings.",
      items: [
        {
          image: SCREENSHOTS.login,
          title: "Login",
          text: "Enter your server URL, start the browser flow, or scan a QR code.",
        },
        {
          image: SCREENSHOTS.dashboard,
          title: "Dashboard",
          text: "See boards, search them, filter them, and jump into active work.",
        },
        {
          image: SCREENSHOTS.kanban,
          title: "Kanban board",
          text: "Stacks and cards stay in a board view optimized for movement and context.",
        },
        {
          image: SCREENSHOTS.card,
          title: "Card details",
          text: "Edit descriptions, due dates, labels, and assignees in one place.",
        },
        {
          image: SCREENSHOTS.settings,
          title: "Settings",
          text: "Control language, theme mode, privacy information, and tracking preferences.",
        },
      ],
    },
    privacyStrip: {
      eyebrow: "Privacy and legal basics",
      title: "Static GitHub Pages site, explicit consent for website analytics, transparent app disclosures.",
      text:
        "This website is hosted via GitHub Pages. It uses local browser storage for language and consent preferences, and only sends website analytics to PostHog after opt-in. The privacy page also documents app-side data flows and privacy-relevant behavior.",
      items: [
        "No website tracking before consent.",
        "Website preferences are limited to language choice and analytics consent state.",
        "Separate disclosures for website hosting and app functionality.",
      ],
      link: "Read the privacy policy",
      consent: "Manage analytics consent",
    },
    downloads: {
      eyebrow: "Download and support",
      title: "Use the app or get support.",
      text:
        "The store links remain the primary call to action. Support and project information are available through the website and contact channel below.",
      items: [
        {
          title: "App Store",
          text: "Install deck NG on iPhone and iPad from Apple’s public listing.",
          href: "https://apps.apple.com/us/app/deck-ng/id6443334702",
          action: "Open App Store",
        },
        {
          title: "Google Play",
          text: "Install deck NG on Android from the public Play Store listing.",
          href: "https://play.google.com/store/apps/details?id=net.meltzow.deckng",
          action: "Open Google Play",
        },
        {
          title: "Support",
          text: "Send questions or feedback about deck NG directly by email.",
          href: "mailto:deck-ng@meltzow.net",
          action: "Contact support",
        },
      ],
    },
    footer:
      "deck NG is a Nextcloud Deck client focused on self-hosted project work from your phone.",
    footerPrivacy: "Privacy Policy",
    footerImpressum: "Legal Notice",
    footerSupport: "Contact support",
    footerConsent: "Privacy settings",
    consent: {
      title: "Website analytics are off until you opt in.",
      text:
        "If you allow analytics, this site sends basic usage events to PostHog so the public pages can be improved. Language and consent preferences are stored locally either way.",
      accept: "Allow analytics",
      decline: "Decline",
      dialogTitle: "Privacy settings",
      dialogText:
        "Change whether this website may send consent-based analytics to PostHog. This does not affect the app’s own settings.",
      analyticsTitle: "Website analytics",
      analyticsText:
        "When enabled, page visits and basic interaction events are sent to PostHog using the EU ingest endpoint.",
      save: "Save settings",
      cancel: "Close",
    },
    legalPages: {
      privacyEyebrow: "Privacy Policy",
      privacyTitle: "Privacy information for the website and the app",
      privacyIntro:
        "This page covers the public deck NG website hosted on GitHub Pages and the deck NG mobile app as described by current app behavior and public app metadata. Last updated: 19 April 2026.",
      privacyHtml: `
        <h2>1. Controller</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Germany</p>
        <p>Email: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></p>

        <h2>2. Scope of this notice</h2>
        <p>This privacy notice covers two separate contexts:</p>
        <ul>
          <li>the public website at <code>meltzow.github.io/deck-ng-pages</code>, and</li>
          <li>the mobile app “deck NG” for iPhone and Android.</li>
        </ul>

        <h2>3. Website hosting via GitHub Pages</h2>
        <p>This website is published through GitHub Pages. When you access the site, GitHub may process technical connection data such as IP address, request information, timestamps, browser data, and log files in order to deliver the website and protect the service.</p>
        <p>The legal basis for providing the website is Art. 6(1)(f) GDPR. The legitimate interest is the secure and reliable provision of this public product website.</p>
        <p>Further information about GitHub’s processing can be found in GitHub’s privacy information.</p>

        <h2>4. Local browser storage on the website</h2>
        <p>This website stores the following settings in your browser’s local storage:</p>
        <ul>
          <li>your selected language (<code>DE</code> or <code>EN</code>), and</li>
          <li>your website analytics consent choice.</li>
        </ul>
        <p>These entries are used to render the site in your preferred language and to remember whether website analytics may run. They are not used for advertising.</p>

        <h2>5. Website analytics with PostHog</h2>
        <p>This website uses PostHog for simple usage analytics only if you explicitly consent. Before consent, no PostHog events are sent from the website.</p>
        <p>If consent is granted, the website may send data such as visited page URL, page title, browser language, a pseudonymous website identifier stored in your browser, and basic interaction events. The site is configured to use PostHog’s EU ingest endpoint.</p>
        <p>The legal basis is your consent under Art. 6(1)(a) GDPR and, where applicable, the rules on storing or accessing information on end devices.</p>
        <p>You can withdraw or change your choice at any time via “Privacy settings” in the footer.</p>

        <h2>6. Contact by email</h2>
        <p>If you contact me by email, I process the information you provide in order to answer your request. This usually includes your email address, your message content, and any additional information you send voluntarily.</p>
        <p>The legal basis is Art. 6(1)(b) GDPR if your request relates to a contractual or pre-contractual matter, otherwise Art. 6(1)(f) GDPR.</p>

        <h2>7. App-related processing in deck NG</h2>
        <p>According to the current app behavior and public app metadata, the app processes data that is necessary to connect to your chosen Nextcloud server and to display and edit your Deck content.</p>
        <p>This can include in particular:</p>
        <ul>
          <li>the server URL you enter or scan,</li>
          <li>account information such as username and app password/token returned by Nextcloud Login Flow v2,</li>
          <li>board, stack, and card content retrieved from your Nextcloud server,</li>
          <li>labels, assignees, due dates, descriptions, and related Deck metadata, and</li>
          <li>local app settings such as language, theme mode, and tracking preferences.</li>
        </ul>
        <p>The legal basis for this processing is generally Art. 6(1)(b) GDPR insofar as it is required to provide the app functionality requested by you.</p>

        <h2>8. Authentication and Nextcloud Login Flow v2</h2>
        <p>The current app specifications describe support for Nextcloud Login Flow v2. In that flow, authentication is started against your Nextcloud server, continued in the system browser, and completed by returning app credentials to the app. This reduces the need for the app to handle your main account password directly where the server supports the flow.</p>

        <h2>9. App analytics, surveys, and feedback</h2>
        <p>The current app includes PostHog-based analytics, event tracking, screen tracking, exception capture, and feedback or survey related functionality, together with an opt-out path for custom tracking.</p>
        <p>Because app behavior can change over time, the exact scope of app-side analytics should always be assessed against the shipped app version. Where consent is required for analytics or feedback collection, the legal basis is Art. 6(1)(a) GDPR. Where processing is necessary for product security, stability, or service operation, the legal basis may also include Art. 6(1)(f) GDPR.</p>

        <h2>10. Recipients and third-country processing</h2>
        <p>Depending on the context, recipients may include:</p>
        <ul>
          <li>GitHub, for website hosting via GitHub Pages,</li>
          <li>PostHog, if you consent to website analytics or if app-side tracking is enabled in the app, and</li>
          <li>your own chosen Nextcloud server, which processes the project data you decide to sync through the app.</li>
        </ul>
        <p>Processing by providers may involve transfers to countries outside the EU/EEA. Where that occurs, it is based on the provider’s applicable legal safeguards.</p>

        <h2>11. Retention</h2>
        <p>Website language and consent settings remain in your browser until you delete them. Email inquiries are retained only as long as required to handle the communication and any resulting obligations. App-side retention depends primarily on your own Nextcloud server, your local app installation, and the configuration of any analytics providers that are enabled.</p>

        <h2>12. Your rights</h2>
        <p>You have the rights of access, rectification, erasure, restriction of processing, data portability, and objection, as well as the right to withdraw consent with effect for the future where processing is based on consent.</p>

        <h2>13. Right to lodge a complaint</h2>
        <p>You have the right to lodge a complaint with a supervisory authority. For North Rhine-Westphalia, this is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia.</p>
      `,
      legalEyebrow: "Legal Notice",
      legalTitle: "Publisher information for deck NG",
      legalIntro:
        "This legal notice applies to the public deck NG website and the associated app presence.",
      legalHtml: `
        <h2>Information pursuant to § 5 DDG</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Germany</p>
        <p>Email: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></p>

        <h2>Responsible for editorial content pursuant to § 18(2) MStV</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Germany</p>

        <h2>Project references</h2>
        <ul>
          <li>Website: <a href="https://meltzow.github.io/deck-ng-pages/">https://meltzow.github.io/deck-ng-pages/</a></li>
          <li>Support: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></li>
        </ul>

        <h2>VAT and business register</h2>
        <p>No VAT ID or commercial register entry is stated for this project site.</p>

        <h2>Consumer dispute resolution</h2>
        <p>I am neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        <p>The EU online dispute resolution platform was discontinued on 20 July 2025.</p>
      `,
    },
  },
  de: {
    homeTitle: "deck NG",
    homeDescription:
      "deck NG ist ein zweisprachiger Nextcloud-Deck-Client für iPhone und Android mit browserbasierter Anmeldung, Kanban-Boards, Kartenbearbeitung und datenschutzbewussten Self-Hosting-Abläufen.",
    privacyTitle: "deck NG Datenschutzerklärung",
    privacyDescription:
      "Datenschutzhinweise für die deck-NG-Website und App, einschließlich GitHub-Pages-Hosting und einwilligungsbasierter PostHog-Webanalyse.",
    legalTitle: "deck NG Impressum",
    legalDescription:
      "Impressum und Anbieterkennzeichnung für die deck-NG-Website und App.",
    headerTagline: "Teamarbeit und Aufgabenfluss für deine eigene Nextcloud.",
    nav: {
      overview: "Überblick",
      features: "Funktionen",
      screens: "Screens",
      privacy: "Datenschutz",
      impressum: "Impressum",
    },
    downloadShort: "Download",
    hero: {
      eyebrow: "Nextcloud Deck unterwegs",
      title: "Boards und Karten verwalten, ohne den eigenen Server aufzugeben.",
      text:
        "deck NG ist ein mobiler Nextcloud-Deck-Client für selbstgehostete Projektarbeit. Die App verbindet sich mit dem von dir gewählten Nextcloud-Server, unterstützt browserbasierten Login Flow v2 und bietet einen fokussierten Kanban-Ablauf für Boards, Stacks, Karten, Zuständigkeiten, Labels und Fälligkeitsdaten.",
      appStore: "Im App Store laden",
      playStore: "Bei Google Play laden",
      points: [
        "Funktioniert mit Nextcloud Server 28+ und aktivierter Deck-App.",
        "Zweisprachige App-Erfahrung auf Deutsch und Englisch.",
        "Ausgelegt auf Self-Hosting, klare Berechtigungen und direkte Kontrolle über deine Workflow-Daten.",
      ],
      signalLoginValue: "Login Flow v2",
      signalLoginLabel: "Browserbasierte Anmeldung statt Passworteingabe in der App, wenn der Server das unterstützt.",
      signalBoardValue: "Kanban zuerst",
      signalBoardLabel: "Boards, Stacks, Drag-and-Drop für Karten und schnelle Kartenerstellung in einer Ansicht.",
    },
    metrics: {
      eyebrow: "Am Produkt ausgerichtet",
      title: "Die Website-Texte basieren auf aktuellem Produktverhalten und Spezifikationen, nicht auf einer generischen Landingpage-Vorlage.",
      items: [
        {
          value: "Nextcloud 28+",
          label: "Aktueller Kompatibilitätshinweis aus den Store-Metadaten der App.",
        },
        {
          value: "DE + EN",
          label: "Sprachunterstützung in der App und auf dieser gesamten Website.",
        },
        {
          value: "iPhone + Android",
          label: "Primäre Download-Ziele über die öffentlichen App-Store- und Google-Play-Einträge.",
        },
        {
          value: "PostHog per Opt-in",
          label: "Website-Analyse startet erst nach ausdrücklicher Einwilligung.",
        },
      ],
    },
    features: {
      eyebrow: "Was die App tatsächlich kann",
      title: "Auf die reale deck-NG-Funktionsfläche gebaut.",
      text:
        "Die folgende Übersicht stützt sich auf die aktuellen UI-Abläufe und Produktfunktionen: Login, Dashboard, Board-Interaktion, Kartenbearbeitung, App-Einstellungen und datenschutzrelevantes Verhalten.",
      items: [
        {
          icon: "↗",
          title: "Mit deiner eigenen Nextcloud verbinden",
          text:
            "Server-URL eingeben oder QR-Code scannen. deck NG prüft den Server und unterstützt Nextcloud Login Flow v2 mit Browser-Weiterleitung und Wiederaufnahme.",
        },
        {
          icon: "⌘",
          title: "Boards schnell finden",
          text:
            "Boards durchsuchen, nach Namen suchen, archivierte Einträge filtern und Dashboard-Ergebnisse sortieren, ohne den Hauptüberblick zu verlassen.",
        },
        {
          icon: "≡",
          title: "In Kanban arbeiten",
          text:
            "Ein Board als Spaltenansicht öffnen, Karten per Drag-and-Drop innerhalb oder zwischen Stacks verschieben, Daten aktualisieren und neue Karten direkt in einer Spalte anlegen.",
        },
        {
          icon: "✎",
          title: "Kartendetails bearbeiten",
          text:
            "Titel, Beschreibung, Fälligkeitsdatum, Labels und Zuständigkeiten pflegen. Markdown-Beschreibungen lassen sich bearbeiten und direkt in der Detailansicht prüfen.",
        },
        {
          icon: "◐",
          title: "An dein Setup anpassen",
          text:
            "Die App enthält hellen, dunklen und System-Theme-Modus und bietet Deutsch und Englisch in den Einstellungen an.",
        },
        {
          icon: "⚑",
          title: "Feedback und Analysekontrolle",
          text:
            "Die App enthält Zugriff auf Datenschutzerklärung, rechtliche Informationen sowie Analytics-, Feedback- und Opt-out-Steuerung.",
        },
      ],
    },
    screens: {
      eyebrow: "Screens",
      title: "Vom Login bis zur Kartendetailansicht.",
      text:
        "Diese Screenshots zeigen den aktuellen deck-NG-Kernablauf, den diese Website beschreibt.",
      items: [
        {
          image: SCREENSHOTS.login,
          title: "Login",
          text: "Server-URL eingeben, Browser-Flow starten oder QR-Code scannen.",
        },
        {
          image: SCREENSHOTS.dashboard,
          title: "Dashboard",
          text: "Boards sehen, suchen, filtern und direkt in aktive Arbeit springen.",
        },
        {
          image: SCREENSHOTS.kanban,
          title: "Kanban-Board",
          text: "Stacks und Karten bleiben in einer Board-Ansicht mit Fokus auf Bewegung und Kontext.",
        },
        {
          image: SCREENSHOTS.card,
          title: "Kartendetails",
          text: "Beschreibungen, Fälligkeitsdaten, Labels und Zuständigkeiten an einer Stelle bearbeiten.",
        },
        {
          image: SCREENSHOTS.settings,
          title: "Einstellungen",
          text: "Sprache, Theme-Modus, Datenschutzinfos und Tracking-Präferenzen steuern.",
        },
      ],
    },
    privacyStrip: {
      eyebrow: "Datenschutz und Rechtliches",
      title: "Statische GitHub-Pages-Seite, ausdrückliche Einwilligung für Webanalyse, transparente App-Hinweise.",
      text:
        "Diese Website wird über GitHub Pages gehostet. Sie nutzt lokalen Browser-Speicher für Sprache und Einwilligungseinstellungen und sendet Website-Analytics erst nach Opt-in an PostHog. Die Datenschutzseite dokumentiert außerdem appseitige Datenflüsse und datenschutzrelevantes Verhalten.",
      items: [
        "Kein Website-Tracking vor Einwilligung.",
        "Website-Präferenzen beschränken sich auf Sprache und Analytics-Zustimmung.",
        "Getrennte Hinweise für Website-Hosting und App-Funktionalität.",
      ],
      link: "Datenschutzerklärung lesen",
      consent: "Analytics-Einwilligung verwalten",
    },
    downloads: {
      eyebrow: "Download und Support",
      title: "App nutzen oder Support erhalten.",
      text:
        "Die Store-Links bleiben die primären CTAs. Support und Projektinformationen laufen über diese Website und die Kontaktadresse unten.",
      items: [
        {
          title: "App Store",
          text: "deck NG auf iPhone und iPad über den öffentlichen Apple-Eintrag installieren.",
          href: "https://apps.apple.com/us/app/deck-ng/id6443334702",
          action: "App Store öffnen",
        },
        {
          title: "Google Play",
          text: "deck NG auf Android über den öffentlichen Play-Store-Eintrag installieren.",
          href: "https://play.google.com/store/apps/details?id=net.meltzow.deckng",
          action: "Google Play öffnen",
        },
        {
          title: "Support",
          text: "Fragen oder Feedback zu deck NG direkt per E-Mail senden.",
          href: "mailto:deck-ng@meltzow.net",
          action: "Support kontaktieren",
        },
      ],
    },
    footer:
      "deck NG ist ein Nextcloud-Deck-Client mit Fokus auf selbstgehostete Projektarbeit vom Smartphone aus.",
    footerPrivacy: "Datenschutzerklärung",
    footerImpressum: "Impressum",
    footerSupport: "Support kontaktieren",
    footerConsent: "Datenschutzeinstellungen",
    consent: {
      title: "Website-Analyse ist aus, bis du ausdrücklich zustimmst.",
      text:
        "Wenn du Analytics erlaubst, sendet diese Seite einfache Nutzungsereignisse an PostHog, damit die öffentlichen Seiten verbessert werden können. Sprach- und Einwilligungseinstellungen werden in jedem Fall lokal gespeichert.",
      accept: "Analytics erlauben",
      decline: "Ablehnen",
      dialogTitle: "Datenschutzeinstellungen",
      dialogText:
        "Hier kannst du festlegen, ob diese Website einwilligungsbasierte Analytics an PostHog senden darf. Die App-eigenen Einstellungen werden dadurch nicht geändert.",
      analyticsTitle: "Website-Analytics",
      analyticsText:
        "Wenn aktiviert, werden Seitenaufrufe und einfache Interaktionen über den EU-Ingest-Endpunkt an PostHog gesendet.",
      save: "Einstellungen speichern",
      cancel: "Schließen",
    },
    legalPages: {
      privacyEyebrow: "Datenschutzerklärung",
      privacyTitle: "Datenschutzhinweise für Website und App",
      privacyIntro:
        "Diese Seite deckt die öffentliche deck-NG-Website auf GitHub Pages sowie die deck-NG-Mobile-App auf Grundlage des aktuellen App-Verhaltens und der App-Metadaten ab. Stand: 19. April 2026.",
      privacyHtml: `
        <h2>1. Verantwortlicher</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Deutschland</p>
        <p>E-Mail: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></p>

        <h2>2. Geltungsbereich dieser Hinweise</h2>
        <p>Diese Datenschutzhinweise betreffen zwei getrennte Kontexte:</p>
        <ul>
          <li>die öffentliche Website unter <code>meltzow.github.io/deck-ng-pages</code> und</li>
          <li>die mobile App „deck NG“ für iPhone und Android.</li>
        </ul>

        <h2>3. Website-Hosting über GitHub Pages</h2>
        <p>Diese Website wird über GitHub Pages veröffentlicht. Beim Aufruf der Seite kann GitHub technische Verbindungsdaten wie IP-Adresse, Anfrageinformationen, Zeitstempel, Browserdaten und Logfiles verarbeiten, um die Website auszuliefern und den Dienst zu schützen.</p>
        <p>Rechtsgrundlage für die Bereitstellung der Website ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und zuverlässigen Bereitstellung dieser öffentlichen Produktwebsite.</p>
        <p>Weitere Informationen zur Verarbeitung durch GitHub findest du in den Datenschutzhinweisen von GitHub.</p>

        <h2>4. Lokaler Browser-Speicher auf der Website</h2>
        <p>Diese Website speichert folgende Einstellungen im lokalen Speicher deines Browsers:</p>
        <ul>
          <li>deine gewählte Sprache (<code>DE</code> oder <code>EN</code>) und</li>
          <li>deine Entscheidung zur Website-Analytics-Einwilligung.</li>
        </ul>
        <p>Diese Einträge dienen dazu, die Seite in deiner bevorzugten Sprache anzuzeigen und zu merken, ob Website-Analytics laufen darf. Sie werden nicht zu Werbezwecken eingesetzt.</p>

        <h2>5. Website-Analytics mit PostHog</h2>
        <p>Diese Website nutzt PostHog für einfache Nutzungsanalysen nur dann, wenn du ausdrücklich einwilligst. Vor der Einwilligung werden von der Website keine PostHog-Ereignisse gesendet.</p>
        <p>Wenn du einwilligst, kann die Website Daten wie aufgerufene Seiten-URL, Seitentitel, Browser-Sprache, eine pseudonyme Website-ID im Browser sowie einfache Interaktionsereignisse senden. Die Seite ist auf den EU-Ingest-Endpunkt von PostHog konfiguriert.</p>
        <p>Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO sowie, soweit anwendbar, die Regelung zum Speichern oder Auslesen von Informationen auf Endgeräten.</p>
        <p>Du kannst deine Entscheidung jederzeit über „Datenschutzeinstellungen“ im Footer widerrufen oder ändern.</p>

        <h2>6. Kontakt per E-Mail</h2>
        <p>Wenn du mich per E-Mail kontaktierst, verarbeite ich die von dir übermittelten Informationen, um deine Anfrage zu beantworten. Dazu gehören regelmäßig deine E-Mail-Adresse, der Nachrichteninhalt und freiwillig mitgesendete Angaben.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO.</p>

        <h2>7. App-bezogene Verarbeitung in deck NG</h2>
        <p>Nach dem aktuellen App-Verhalten und den öffentlichen App-Metadaten verarbeitet die App Daten, die erforderlich sind, um sich mit deinem gewählten Nextcloud-Server zu verbinden und deine Deck-Inhalte anzuzeigen und zu bearbeiten.</p>
        <p>Dazu können insbesondere gehören:</p>
        <ul>
          <li>die Server-URL, die du eingibst oder scannst,</li>
          <li>Kontoinformationen wie Benutzername und App-Passwort bzw. Token, die durch Nextcloud Login Flow v2 zurückgegeben werden,</li>
          <li>Board-, Stack- und Kartendaten, die von deinem Nextcloud-Server abgerufen werden,</li>
          <li>Labels, Zuständigkeiten, Fälligkeitsdaten, Beschreibungen und zugehörige Deck-Metadaten sowie</li>
          <li>lokale App-Einstellungen wie Sprache, Theme-Modus und Tracking-Präferenzen.</li>
        </ul>
        <p>Rechtsgrundlage ist hierfür grundsätzlich Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Bereitstellung der von dir gewünschten App-Funktion erforderlich ist.</p>

        <h2>8. Authentifizierung und Nextcloud Login Flow v2</h2>
        <p>Die aktuellen App-Spezifikationen beschreiben die Unterstützung von Nextcloud Login Flow v2. Dabei wird die Authentifizierung an deinem Nextcloud-Server gestartet, im Systembrowser fortgesetzt und durch die Rückgabe von App-Zugangsdaten an die App abgeschlossen. Dadurch muss die App dein Hauptkonto-Passwort, soweit der Server den Flow unterstützt, nicht direkt verarbeiten.</p>

        <h2>9. App-Analytics, Umfragen und Feedback</h2>
        <p>Die aktuelle App enthält PostHog-basierte Analytics, Event-Tracking, Screen-Tracking, Exception-Capture sowie Feedback- und Survey-Funktionen. Außerdem ist ein Opt-out-Pfad für benutzerdefiniertes Tracking vorgesehen.</p>
        <p>Da sich App-Verhalten im Zeitverlauf ändern kann, sollte der genaue Umfang appseitiger Analytics immer gegen die tatsächlich ausgelieferte App-Version geprüft werden. Soweit für Analytics oder Feedback eine Einwilligung erforderlich ist, ist Rechtsgrundlage Art. 6 Abs. 1 lit. a DSGVO. Soweit Verarbeitung für Produktsicherheit, Stabilität oder Betrieb erforderlich ist, kann zusätzlich Art. 6 Abs. 1 lit. f DSGVO einschlägig sein.</p>

        <h2>10. Empfänger und Drittlandverarbeitung</h2>
        <p>Je nach Kontext können Empfänger insbesondere sein:</p>
        <ul>
          <li>GitHub für das Website-Hosting über GitHub Pages,</li>
          <li>PostHog, wenn du in Website-Analytics einwilligst oder appseitiges Tracking in der App aktiviert ist, und</li>
          <li>dein selbst gewählter Nextcloud-Server, der die Projektdaten verarbeitet, die du über die App synchronisierst.</li>
        </ul>
        <p>Die Verarbeitung durch Anbieter kann Übermittlungen in Staaten außerhalb der EU bzw. des EWR einschließen. Soweit dies geschieht, erfolgt dies auf Grundlage der jeweils vorgesehenen rechtlichen Schutzmechanismen des Anbieters.</p>

        <h2>11. Speicherdauer</h2>
        <p>Website-Sprach- und Einwilligungseinstellungen bleiben in deinem Browser gespeichert, bis du sie löschst. E-Mail-Anfragen werden nur so lange aufbewahrt, wie dies zur Bearbeitung der Kommunikation und etwaiger Folgepflichten erforderlich ist. Die Speicherdauer appseitiger Daten hängt im Wesentlichen von deinem Nextcloud-Server, deiner lokalen App-Installation und der Konfiguration ggf. aktivierter Analytics-Anbieter ab.</p>

        <h2>12. Deine Rechte</h2>
        <p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, eine erteilte Einwilligung mit Wirkung für die Zukunft zu widerrufen, soweit die Verarbeitung auf Einwilligung beruht.</p>

        <h2>13. Beschwerderecht</h2>
        <p>Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Für Nordrhein-Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.</p>
      `,
      legalEyebrow: "Impressum",
      legalTitle: "Anbieterkennzeichnung für deck NG",
      legalIntro:
        "Dieses Impressum gilt für die öffentliche deck-NG-Website und den dazugehörigen App-Auftritt.",
      legalHtml: `
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Deutschland</p>
        <p>E-Mail: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></p>

        <h2>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 18 Abs. 2 MStV</h2>
        <p>Mario Meltzow<br />Keilbergweg 1<br />53894 Mechernich<br />Deutschland</p>

        <h2>Projektverweise</h2>
        <ul>
          <li>Website: <a href="https://meltzow.github.io/deck-ng-pages/">https://meltzow.github.io/deck-ng-pages/</a></li>
          <li>Support: <a href="mailto:deck-ng@meltzow.net">deck-ng@meltzow.net</a></li>
        </ul>

        <h2>Umsatzsteuer und Registerangaben</h2>
        <p>Für diese Projektwebsite werden keine Umsatzsteuer-ID und kein Handelsregistereintrag angegeben.</p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>Ich bin weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        <p>Die EU-Plattform zur Online-Streitbeilegung wurde am 20. Juli 2025 eingestellt.</p>
      `,
    },
  },
};

const page = document.body.dataset.page;
let currentLang = getStoredLanguage();
let analyticsConsent = getStoredConsent();

document.addEventListener("DOMContentLoaded", () => {
  bindCommonUI();
  render();
  showConsentBannerIfNeeded();
  trackPageView();
});

function bindCommonUI() {
  const menuToggle = document.getElementById("menu-toggle");
  const siteHeader = document.querySelector(".site-header");

  if (menuToggle && siteHeader) {
    menuToggle.addEventListener("click", () => {
      const isOpen = siteHeader.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      writeStorage(STORAGE_KEYS.language, currentLang);
      render();
      captureEvent("website_language_changed", { language: currentLang });
    });
  });

  const consentBanner = document.getElementById("consent-banner");
  const consentAccept = document.getElementById("consent-accept");
  const consentDecline = document.getElementById("consent-decline");
  const footerConsent = document.getElementById("footer-consent");
  const privacyConsent = document.getElementById("privacy-consent");
  const dialog = document.getElementById("consent-dialog");
  const dialogSave = document.getElementById("dialog-save");
  const dialogCancel = document.getElementById("dialog-cancel");
  const dialogClose = document.getElementById("dialog-close");
  const analyticsToggle = document.getElementById("analytics-toggle");

  if (consentAccept) {
    consentAccept.addEventListener("click", () => {
      setConsent("granted");
      if (consentBanner) consentBanner.hidden = true;
      renderConsentDialogState();
      captureEvent("website_analytics_consent_updated", { consent: "granted" });
      trackPageView(true);
    });
  }

  if (consentDecline) {
    consentDecline.addEventListener("click", () => {
      setConsent("denied");
      if (consentBanner) consentBanner.hidden = true;
      renderConsentDialogState();
    });
  }

  [footerConsent, privacyConsent].forEach((button) => {
    if (!button || !dialog) return;
    button.addEventListener("click", () => {
      renderConsentDialogState();
      openConsentDialog(dialog);
    });
  });

  if (dialogSave && analyticsToggle && dialog) {
    dialogSave.addEventListener("click", () => {
      setConsent(analyticsToggle.checked ? "granted" : "denied");
      dialog.close();
      const banner = document.getElementById("consent-banner");
      if (banner) banner.hidden = true;
      captureEvent("website_analytics_consent_updated", { consent: analyticsConsent });
      if (analyticsConsent === "granted") {
        trackPageView(true);
      }
      closeConsentDialog(dialog);
    });
  }

  [dialogCancel, dialogClose].forEach((button) => {
    if (!button || !dialog) return;
    button.addEventListener("click", (event) => {
      event.preventDefault();
      closeConsentDialog(dialog);
    });
  });

  if (dialog) {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        closeConsentDialog(dialog);
      }
    });
  }
}

function render() {
  const t = content[currentLang];
  document.documentElement.lang = currentLang;
  renderMeta(t);
  renderCommon(t);

  if (page === "home") {
    renderHome(t);
  } else if (page === "privacy") {
    renderLegal(t, "privacy");
  } else if (page === "impressum") {
    renderLegal(t, "legal");
  }
}

function renderMeta(t) {
  const titles = {
    home: t.homeTitle,
    privacy: t.legalPages.privacyTitle,
    impressum: t.legalPages.legalTitle,
  };
  const descriptions = {
    home: t.homeDescription,
    privacy: t.privacyDescription,
    impressum: t.legalDescription,
  };

  document.title = titles[page] || t.homeTitle;

  const description = descriptions[page] || t.homeDescription;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (descriptionMeta) descriptionMeta.setAttribute("content", description);
  if (ogTitle) ogTitle.setAttribute("content", document.title);
  if (ogDescription) ogDescription.setAttribute("content", description);
  if (twitterTitle) twitterTitle.setAttribute("content", document.title);
  if (twitterDescription) twitterDescription.setAttribute("content", description);
}

function renderCommon(t) {
  setText("header-tagline", t.headerTagline);
  setText("header-download", t.downloadShort);
  setText("footer-text", t.footer);
  setText("footer-privacy", t.footerPrivacy);
  setText("footer-impressum", t.footerImpressum);
  setText("footer-support", t.footerSupport);
  setText("footer-consent", t.footerConsent);

  const navEntries = t.nav;
  Object.entries(navEntries).forEach(([key, value]) => {
    const link = document.querySelector(`[data-nav="${key}"]`);
    if (link) {
      link.textContent = value;
      link.classList.toggle("is-active", key === page || (page === "home" && key === "overview"));
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === currentLang);
  });

  const consent = t.consent;
  setText("consent-title", consent.title);
  setText("consent-text", consent.text);
  setText("consent-accept", consent.accept);
  setText("consent-decline", consent.decline);
  setText("dialog-title", consent.dialogTitle);
  setText("dialog-text", consent.dialogText);
  setText("dialog-analytics-title", consent.analyticsTitle);
  setText("dialog-analytics-text", consent.analyticsText);
  setText("dialog-save", consent.save);
  setText("dialog-cancel", consent.cancel);

  renderConsentDialogState();
}

function renderHome(t) {
  setText("hero-eyebrow", t.hero.eyebrow);
  setText("hero-title", t.hero.title);
  setText("hero-text", t.hero.text);
  setText("hero-app-store", t.hero.appStore);
  setText("hero-play-store", t.hero.playStore);
  setText("signal-login-value", t.hero.signalLoginValue);
  setText("signal-login-label", t.hero.signalLoginLabel);
  setText("signal-board-value", t.hero.signalBoardValue);
  setText("signal-board-label", t.hero.signalBoardLabel);

  fillList("hero-points", t.hero.points, (item) => `<li>${item}</li>`);

  setText("metrics-eyebrow", t.metrics.eyebrow);
  setText("metrics-title", t.metrics.title);
  fillList(
    "metric-grid",
    t.metrics.items,
    (item) => `
      <article class="metric-card">
        <div class="metric-value">${item.value}</div>
        <p class="metric-copy">${item.label}</p>
      </article>
    `,
  );

  setText("features-eyebrow", t.features.eyebrow);
  setText("features-title", t.features.title);
  setText("features-text", t.features.text);
  fillList(
    "feature-grid",
    t.features.items,
    (item) => `
      <article class="feature-card">
        <div class="feature-icon">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  );

  setText("screens-eyebrow", t.screens.eyebrow);
  setText("screens-title", t.screens.title);
  setText("screens-text", t.screens.text);
  fillList(
    "screenshot-grid",
    t.screens.items,
    (item) => `
      <article class="screen-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  );

  setText("privacy-eyebrow", t.privacyStrip.eyebrow);
  setText("privacy-title", t.privacyStrip.title);
  setText("privacy-text", t.privacyStrip.text);
  setText("privacy-link", t.privacyStrip.link);
  setText("privacy-consent", t.privacyStrip.consent);
  fillList("privacy-list", t.privacyStrip.items, (item) => `<li>${item}</li>`);

  setText("download-eyebrow", t.downloads.eyebrow);
  setText("download-title", t.downloads.title);
  setText("download-text", t.downloads.text);
  fillList(
    "download-grid",
    t.downloads.items,
    (item) => `
      <article class="download-card">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="button button-secondary" href="${item.href}" target="_blank" rel="noreferrer">${item.action}</a>
      </article>
    `,
  );
}

function renderLegal(t, kind) {
  const legal = t.legalPages;

  if (kind === "privacy") {
    setText("legal-eyebrow", legal.privacyEyebrow);
    setText("legal-title", legal.privacyTitle);
    setText("legal-intro", legal.privacyIntro);
    setHTML("legal-content", legal.privacyHtml);
  } else {
    setText("legal-eyebrow", legal.legalEyebrow);
    setText("legal-title", legal.legalTitle);
    setText("legal-intro", legal.legalIntro);
    setHTML("legal-content", legal.legalHtml);
  }
}

function renderConsentDialogState() {
  const analyticsToggle = document.getElementById("analytics-toggle");
  if (analyticsToggle) {
    analyticsToggle.checked = analyticsConsent === "granted";
  }
}

function showConsentBannerIfNeeded() {
  const banner = document.getElementById("consent-banner");
  if (!banner) return;
  banner.hidden = analyticsConsent !== null;
}

function setConsent(value) {
  analyticsConsent = value;
  writeStorage(STORAGE_KEYS.consent, value);
}

function getStoredLanguage() {
  return readStorage(STORAGE_KEYS.language) || "en";
}

function getStoredConsent() {
  return readStorage(STORAGE_KEYS.consent);
}

function getDistinctId() {
  let distinctId = readStorage(STORAGE_KEYS.distinctId);
  if (!distinctId) {
    distinctId =
      globalThis.crypto?.randomUUID?.() ||
      `deckng-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    writeStorage(STORAGE_KEYS.distinctId, distinctId);
  }
  return distinctId;
}

function trackPageView(force = false) {
  if (analyticsConsent !== "granted" || (!force && window.__deckNgTrackedPageView)) {
    return;
  }

  captureEvent("$pageview", {
    page_type: page,
    language: currentLang,
    path: window.location.pathname,
  });
  window.__deckNgTrackedPageView = true;
}

function captureEvent(eventName, properties = {}) {
  if (analyticsConsent !== "granted") return;

  const payload = {
    api_key: POSTHOG.projectToken,
    event: eventName,
    properties: {
      distinct_id: getDistinctId(),
      $current_url: window.location.href,
      $pathname: window.location.pathname,
      site_language: currentLang,
      ...properties,
    },
  };

  fetch(POSTHOG.host, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {});
}

function fillList(id, items, renderItem) {
  const target = document.getElementById(id);
  if (!target) return;
  target.innerHTML = items.map(renderItem).join("");
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setHTML(id, value) {
  const element = document.getElementById(id);
  if (element) element.innerHTML = value;
}

function openConsentDialog(dialog) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "open");
    dialog.classList.add("is-open");
  }
}

function closeConsentDialog(dialog) {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
    dialog.classList.remove("is-open");
  }
}

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}
