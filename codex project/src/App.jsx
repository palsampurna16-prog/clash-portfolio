import { useEffect, useMemo, useState } from 'react';
import villageBanner from './assets/village-banner.svg';

const sections = [
  {
    id: 'about',
    building: 'Town Hall',
    title: 'About',
    callout: 'Chief Profile',
    type: 'town-hall',
    x: '46%',
    y: '42%',
    short: 'Product strategy base',
    facts: [
      { label: 'Name', value: 'Sampurna Pal' },
      { label: 'Location', value: 'Vaasa, Finland' },
      {
        label: 'Status',
        value: 'MSc Economics & Business Administration, Industrial Engineering & Management',
      },
    ],
    summary:
      'Product-minded student with strong experience in KPI tracking, data analysis, operational reporting, and cross-functional collaboration.',
    additional: [
      'Works with AI tools: ChatGPT, Claude, and Perplexity',
      'Contributes to development and evaluation of AI agents',
      'Strong interest in game design, monetization systems, and player retention',
      'Background in economics and game theory',
    ],
    goal:
      'Contribute to LiveOps, Monetization, and Product Strategy in gaming companies.',
  },
  {
    id: 'skills',
    building: 'Army Camp',
    title: 'Skills',
    callout: 'Troops Unlocked',
    type: 'army-camp',
    x: '19%',
    y: '59%',
    short: 'Analytics squad ready',
    categories: [
      {
        label: 'Data & Analytics',
        items: [
          'Excel: advanced formulas, dashboards, pivot tables',
          'SAS',
          'Power BI: basic',
          'Google Sheets',
          'Data quality management',
          'Trend identification',
        ],
      },
      {
        label: 'Tools',
        items: [
          'Jira, Asana, Confluence',
          'Notion, Slack, Google Workspace',
          'SAP: learning',
        ],
      },
      {
        label: 'AI',
        items: ['ChatGPT', 'Claude', 'Perplexity'],
      },
      {
        label: 'Soft Skills',
        items: [
          'Analytical thinking',
          'Structured problem-solving',
          'Cross-functional collaboration',
          'Communication',
        ],
      },
    ],
  },
  {
    id: 'experience',
    building: 'Clan Castle',
    title: 'Experience',
    callout: 'Battle Logs',
    type: 'clan-castle',
    x: '70%',
    y: '53%',
    short: 'Cross-functional quests',
    jobs: [
      {
        role: 'Quality Team Lead',
        org: 'SkillCat',
        date: 'Nov 2024 - Present',
        wins: [
          'Managed 5+ concurrent workstreams',
          'Built KPI dashboards for management reviews',
          'Identified risks, dependencies, and data issues early',
          'Standardized reporting systems',
          'Coordinated across product, operations, and technical teams',
          'Tested and improved AI agents for content, graphics, and automation',
        ],
      },
      {
        role: 'Sports Editor',
        org: 'EssentiallySports & The SportsRush',
        date: '2023-2024',
        wins: [
          'Managed high-volume content pipelines',
          'Ensured quality, accuracy, and deadlines',
          'Worked with international contributors across time zones',
        ],
      },
      {
        role: 'Content Writer & Data Updater',
        org: 'NapCloud & Kidadl',
        date: '2021-2023',
        wins: [
          'Maintained structured content systems',
          'Ensured data accuracy and documentation quality',
          'Improved content using analytics and user feedback',
        ],
      },
    ],
  },
  {
    id: 'lab',
    building: 'Laboratory',
    title: 'Research & Certifications',
    callout: 'Research Lab',
    type: 'laboratory',
    x: '34%',
    y: '22%',
    short: 'Experiments brewing',
    education: [
      {
        label: 'MSc Economics & Business Administration: Ongoing',
        items: [
          'Operations Management',
          'Decision Analysis',
          'Statistical Data Processing: SAS',
          'Operations Research',
        ],
      },
      {
        label: 'MSc Economics',
        items: ['Game Theory', 'Decision-making models'],
      },
    ],
    certifications: [
      'Google Data Analytics Professional Certificate',
      'JPMorgan Finance Virtual Experience',
      'Google Digital Marketing Certification',
      'IELTS Band 7.5: C1',
    ],
    experiments: [
      'AI-assisted workflows',
      'Game economy design',
      'Player behavior analysis in F2P games',
    ],
  },
  {
    id: 'contact',
    building: 'Builder Hut',
    title: 'Contact',
    callout: 'Builder Ready',
    type: 'builder-hut',
    x: '79%',
    y: '24%',
    short: 'Send a builder',
    contact: [
      { label: 'Base', value: 'Vaasa, Finland' },
      { label: 'Email', value: 'palsampurna16@gmail.com', href: 'mailto:palsampurna16@gmail.com' },
      { label: 'Phone', value: '+358 468023928', href: 'tel:+358468023928' },
      { label: 'Work Status', value: 'Right to work in Finland' },
    ],
  },
];

const resourceChips = [
  'LiveOps',
  'Monetization',
  'Product Strategy',
  'Player Retention',
  'Product Analytics',
];

function App() {
  const [view, setView] = useState('landing');
  const [activeId, setActiveId] = useState(null);

  const activeSection = useMemo(
    () => sections.find((section) => section.id === activeId),
    [activeId],
  );

  useEffect(() => {
    if (!activeSection) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const enterVillage = () => {
    setView('loading');
    window.setTimeout(() => setView('village'), 700);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#7ccf55] text-[#172d28]">
      {view === 'landing' && <StartScreen onEnter={enterVillage} />}
      {view === 'loading' && <LoadingScreen />}
      {view === 'village' && <Village activeId={activeId} onOpen={setActiveId} />}

      {activeSection && (
        <SectionModal section={activeSection} onClose={() => setActiveId(null)} />
      )}
    </main>
  );
}

function StartScreen({ onEnter }) {
  return (
    <section className="start-screen min-h-screen px-4 py-8 text-center">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-7">
        <img
          src={villageBanner}
          alt="Original cartoony strategy village with bright grass, flags, river, and small buildings"
          className="start-banner w-full max-w-3xl rounded-lg border-[6px] border-[#315936] bg-[#91da66] shadow-pop"
        />
        <div className="max-w-3xl">
          <p className="mb-3 font-display text-2xl text-[#fff6a8] outlined-text sm:text-4xl">
            WELCOME, CHIEF!
          </p>
          <h1 className="font-display text-5xl leading-none text-[#ffd447] outlined-text sm:text-7xl md:text-8xl">
            THE VILLAGE AWAITS.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-extrabold leading-relaxed text-[#20372e] sm:text-xl">
            Tap to enter and explore a strategist trained in data, systems, and
            decision-making.
          </p>
        </div>
        <button className="game-button" type="button" onClick={onEnter}>
          Enter Village
        </button>
      </div>
    </section>
  );
}

function LoadingScreen() {
  return (
    <section className="start-screen grid min-h-screen place-items-center px-4 text-center">
      <div className="loading-panel">
        <div className="loading-camp" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="font-display text-4xl text-[#ffd447] outlined-text sm:text-6xl">
          Scouting Village
        </p>
        <p className="mt-4 font-black text-[#20372e]">Deploying Sampurna&apos;s quest map...</p>
      </div>
    </section>
  );
}

function Village({ activeId, onOpen }) {
  return (
    <section className="village-shell min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <header className="hud-bar">
          <div>
            <p className="font-display text-xl text-[#ffe26f] outlined-text sm:text-2xl">
              Sampurna Pal
            </p>
            <p className="text-sm font-black uppercase text-[#eaf8d7] sm:text-base">
              Vaasa Base | Internship Quest: LiveOps + Monetization + Product Strategy
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
            {resourceChips.map((chip) => (
              <span className="resource-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </header>

        <div className="map-board">
          <div className="map-river" aria-hidden="true" />
          <div className="map-path path-one" aria-hidden="true" />
          <div className="map-path path-two" aria-hidden="true" />
          <div className="map-tree tree-a" aria-hidden="true" />
          <div className="map-tree tree-b" aria-hidden="true" />
          <div className="map-tree tree-c" aria-hidden="true" />
          <div className="map-rock rock-a" aria-hidden="true" />
          <div className="map-rock rock-b" aria-hidden="true" />
          <div className="map-flag flag-a" aria-hidden="true" />
          <div className="map-flag flag-b" aria-hidden="true" />

          <div className="building-grid">
            {sections.map((section) => (
              <BuildingButton
                key={section.id}
                section={section}
                isActive={activeId === section.id}
                onOpen={() => onOpen(section.id)}
              />
            ))}
          </div>
        </div>

        <p className="mx-auto max-w-4xl rounded-lg bg-[#245337] px-4 py-3 text-center text-sm font-black text-[#f1ffd9] shadow-tile">
          Pick a building to open Sampurna&apos;s strategy logs, unlocked troops, lab
          research, and builder contact.
        </p>
      </div>
    </section>
  );
}

function BuildingButton({ section, isActive, onOpen }) {
  return (
    <button
      type="button"
      className={`building-token ${isActive ? 'is-active' : ''}`}
      style={{ '--x': section.x, '--y': section.y }}
      onClick={onOpen}
      aria-label={`Open ${section.building}: ${section.title}`}
    >
      <BuildingArt type={section.type} />
      <span className="building-name">{section.building}</span>
      <span className="building-short">{section.short}</span>
    </button>
  );
}

function BuildingArt({ type }) {
  return (
    <span className={`building-art ${type}`} aria-hidden="true">
      <span className="roof" />
      <span className="body" />
      <span className="door" />
      <span className="flag" />
      <span className="spark" />
      <span className="crest" />
    </span>
  );
}

function SectionModal({ section, onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${section.id}-title`}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b-[5px] border-[#2d5d35] pb-4">
          <div>
            <p className="font-display text-2xl text-[#ffe26f] outlined-text">{section.building}</p>
            <h2
              id={`${section.id}-title`}
              className="font-display text-4xl leading-none text-[#ffd447] outlined-text sm:text-5xl"
            >
              {section.title}
            </h2>
          </div>
          <button className="close-button" type="button" onClick={onClose} aria-label="Close panel">
            x
          </button>
        </div>

        <div className="mt-5">
          <p className="badge-title">{section.callout}</p>
          {renderSectionContent(section)}
        </div>
      </section>
    </div>
  );
}

function renderSectionContent(section) {
  if (section.id === 'about') {
    return (
      <div className="space-y-5">
        <ul className="grid gap-3 md:grid-cols-3">
          {section.facts.map((fact) => (
            <li className="info-tile" key={fact.label}>
              <span className="tile-label">{fact.label}</span>
              {fact.value}
            </li>
          ))}
        </ul>
        <p className="mission-scroll">{section.summary}</p>
        <div>
          <h3 className="subheading">Strategist Traits</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {section.additional.map((item) => (
              <li className="quest-win" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="goal-banner">
          <span>Goal</span>
          {section.goal}
        </div>
      </div>
    );
  }

  if (section.id === 'skills') {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        {section.categories.map((category) => (
          <article className="quest-log" key={category.label}>
            <h3 className="subheading">{category.label}</h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li className="troop-tile" key={item}>
                  <span className="troop-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (section.id === 'experience') {
    return (
      <div className="space-y-4">
        {section.jobs.map((job) => (
          <article className="quest-log" key={`${job.role}-${job.org}`}>
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-2xl text-[#204a37]">{job.role}</h3>
                <p className="font-black text-[#c53d37]">{job.org}</p>
              </div>
              <p className="font-display text-lg text-[#3f6e44]">{job.date}</p>
            </div>
            <ul className="space-y-2">
              {job.wins.map((win) => (
                <li className="quest-win" key={win}>
                  {win}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (section.id === 'lab') {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h3 className="subheading">Education</h3>
          {section.education.map((group) => (
            <article className="quest-log" key={group.label}>
              <h4 className="font-display text-2xl text-[#204a37]">{group.label}</h4>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li className="quest-win" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="space-y-5">
          <div>
            <h3 className="subheading">Certifications</h3>
            <ul className="space-y-3">
              {section.certifications.map((item) => (
                <li className="info-tile" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subheading">Ongoing Experiments</h3>
            <ul className="space-y-3">
              {section.experiments.map((item) => (
                <li className="experiment-tile" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {section.contact.map((item) => (
        <div className="contact-tile" key={item.label}>
          <p className="font-display text-xl text-[#ffe26f] outlined-text">{item.label}</p>
          {item.href ? (
            <a href={item.href} className="contact-link">
              {item.value}
            </a>
          ) : (
            <p className="font-black text-[#fff6a8]">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
