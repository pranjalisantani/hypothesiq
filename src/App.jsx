import { useEffect, useMemo, useRef, useState } from 'react'

import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  MapPin,
} from 'lucide-react'

import { events, projects, resources, team } from './data/content'

import {
  Assistant,
  Atmosphere,
  Boot,
  Button,
  Cursor,
  Heading,
  Nav,
  ProfileArchive,
  Register,
  Sound,
} from './components'

const types = ['All', 'Workshops', 'Hackathons', 'Competitions', 'Talks']

export default function App() {
  const [boot, setBoot] = useState(true)
  const [filter, setFilter] = useState('All')
  const [event, setEvent] = useState()
  const [sound, setSound] = useState(false)

  const audio = useRef(null)

  const list = useMemo(
    () =>
      filter === 'All'
        ? events
        : events.filter((x) => x.type === filter),
    [filter]
  )

  // AUDIO SETUP
  useEffect(() => {
    const audioUrl = `${import.meta.env.BASE_URL}assets/audio/struct.mpeg`

    audio.current = new Audio(audioUrl)
    audio.current.loop = true
    audio.current.volume = 0.18
    audio.current.preload = 'auto'

    const pref =
      localStorage.getItem('hypothesiq-sound') ||
      localStorage.getItem('acm-sound')
    setSound(pref === 'on')

    return () => {
      if (audio.current) {
        audio.current.pause()
        audio.current.src = ''
        audio.current = null
      }
    }
  }, [])

  // SOUND TOGGLE
  async function setAudio(next) {
    if (!audio.current) {
      console.error('Audio element is not ready')
      return
    }

    if (next) {
      try {
        await audio.current.play()

        setSound(true)
        localStorage.setItem('hypothesiq-sound', 'on')
        localStorage.setItem('acm-sound', 'on')
      } catch (error) {
        console.error('Audio could not start:', error)
        setSound(false)
      }
    } else {
      audio.current.pause()
      setSound(false)
      localStorage.setItem('hypothesiq-sound', 'off')
      localStorage.setItem('acm-sound', 'off')
    }
  }

  // BOOT SCREEN ENTER
  function enter() {
    setBoot(false)

    // Boot button click is a real user interaction,
    // allowing the browser to start audio.
    setTimeout(() => {
      setAudio(true)
    }, 0)
  }

  return (
    <>
      <Atmosphere />

      <Cursor />

      {boot && <Boot enter={enter} />}

      <div
        className={
          boot
            ? 'experience experience--locked'
            : 'experience'
        }
      >
        <Nav />

        <Sound
          on={sound}
          toggle={() => setAudio(!sound)}
        />

        <main>
          <section id="home" className="hero">
            <div className="hero__grid">
              <div className="hero__copy">
                <p>
                  HYPOTHESIQ // INVESTIGATION WORKSPACE{' '}
                  <i>FIELD: ACTIVE</i>
                </p>

                <h1>
                  ENGINEER
                  <br />
                  <i>WHAT'S NEXT.</i>
                </h1>

                <span>
                  Hypothesiq is an engineering investigation workspace for restless learners,
                  generous builders, and technically curious minds
                  shaping the future through computing.
                </span>

                <div className="actions">
                  <Button href="#events">
                    EXPLORE EVENTS
                  </Button>

                  <Button href="#contact" quiet>
                    JOIN THE COMMUNITY
                  </Button>
                </div>
              </div>

              <aside className="hero__telemetry glass">
                <p>
                  <b>HYPOTHESIQ CORE</b>
                  <span>ONLINE</span>
                </p>

                <div>
                  <small>NETWORK NODES</small>
                  <b>175</b>
                </div>

                <div>
                  <small>SYSTEM MODE</small>
                  <b>THINK / TEST / TRACE</b>
                </div>

                <div>
                  <small>SYSTEM UPLINK</small>
                  <b>READY</b>
                </div>
              </aside>
            </div>

            <aside className="system glass">
              <small>HYPOTHESIQ / LIVE SIGNAL</small>
              <b>∞</b>
              <span>THINK · TEST · TRACE</span>
            </aside>

            <a className="scroll" href="#about">
              SCROLL TO EXPLORE <ArrowDown />
            </a>
          </section>

          <section id="about" className="section about">
            <b>HQ</b>

            <div>
              <Heading
                tag="01 / IDENTITY"
                title={
                  <>
                    Curiosity is the
                    <br />
                    <i>starting point.</i>
                  </>
                }
                text="Hypothesiq makes room for engineers to encounter computing as an empirical discipline: build things, test what works, and leave the system better for whoever arrives next."
              />

              <div className="facts glass">
                <span>
                  <b>150+</b>
                  MEMBERS
                </span>

                <span>
                  <b>24</b>
                  EVENTS HELD
                </span>

                <span>
                  <b>08</b>
                  ACTIVE PROJECTS
                </span>
              </div>
            </div>
          </section>

          <section id="events" className="section events">
            <div className="row">
              <Heading
                tag="02 / EVENT ARCHIVE"
                title={
                  <>
                    The room where
                    <br />
                    <i>things begin.</i>
                  </>
                }
                text="Workshops, talks, competitions, and long nights spent making something real."
              />

              <div className="filters">
                {types.map((t) => (
                  <button
                    onClick={() => setFilter(t)}
                    className={filter === t ? 'active' : ''}
                    key={t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="eventgrid">
              {list.map((e, i) => (
                <article
                  className="event glass"
                  key={e.title}
                >
                  <div>
                    <span>
                      EVENT {String(i + 1).padStart(3, '0')}
                    </span>

                    <span>{e.status}</span>
                  </div>

                  <small>
                    {e.date} · {e.type}
                  </small>

                  <h3>{e.title}</h3>

                  <p>{e.text}</p>

                  <button onClick={() => setEvent(e)}>
                    REGISTER <ArrowUpRight />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="access section">
            <Heading
              tag="02.A / EVENT ACCESS"
              title={
                <>
                  Participation,
                  <br />
                  <i>wide open.</i>
                </>
              }
              text="Open technical event participation. Select an event from the archive to start registration."
            />

            <article className="access-card glass">
              <p>EVENT ACCESS</p>

              <b>FREE</b>

              <span>
                Open technical event participation
              </span>

              <Button href="#events">
                CHOOSE AN EVENT
              </Button>
            </article>
          </section>

          <section
            id="members"
            className="section members"
          >
            <Heading
              tag="03 / BUILDER ARCHIVE"
              title={
                <>
                  Systems are not logos.
                  <br />
                  <i>They are built by people.</i>
                </>
              }
              text="A living archive of the people building and investigating with Hypothesiq."
            />

            <ProfileArchive />
          </section>

          <section
            id="projects"
            className="section projects"
          >
            <Heading
              tag="04 / WORK IN PROGRESS"
              title={
                <>
                  Small teams.
                  <br />
                  <i>Serious experiments.</i>
                </>
              }
              text="Student-led projects that make an idea concrete."
            />

            <div>
              {projects.map((p, i) => (
                <article
                  className="glass"
                  key={p.title}
                >
                  <small>
                    0{i + 1} / {p.category}
                  </small>

                  <h3>{p.title}</h3>

                  <p>{p.text}</p>

                  <span>
                    {p.stack.map((s) => (
                      <b key={s}>{s}</b>
                    ))}
                  </span>

                  <span className="project-status">
                    REPOSITORY PENDING
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section
            id="achievements"
            className="section milestones"
          >
            <Heading
              tag="05 / MILESTONES"
              title={
                <>
                  What we learn
                  <br />
                  <i>leaves a trace.</i>
                </>
              }
              text="Verified outcomes belong here as the workspace writes its next season."
            />

            <div>
              {[
                [
                  '01',
                  'Competitions',
                  'Details pending verification.',
                ],
                [
                  '02',
                  'Community',
                  'Details pending verification.',
                ],
                [
                  '03',
                  'Growth',
                  'Details pending verification.',
                ],
              ].map((x) => (
                <article key={x[0]}>
                  <small>{x[0]}</small>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="resources"
            className="section resources"
          >
            <Heading
              tag="06 / OPEN KNOWLEDGE"
              title={
                <>
                  Maps for the
                  <br />
                  <i>unmapped.</i>
                </>
              }
              text="A few considered places to begin."
            />

            <div>
              {resources.map(([a, b, c], i) => (
                <div
                  className="resource-item"
                  key={a}
                >
                  <small>0{i + 1}</small>

                  <span>
                    <small>{c}</small>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </span>

                  <small className="resource-status">
                    RESOURCE PENDING
                  </small>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="contact"
          >
            <div>
              <p>07 / MAKE CONTACT</p>

              <h2>
                Bring your
                <br />
                <i>curiosity.</i>
              </h2>

              <span>
                <MapPin /> Location details pending
                <br />
                Direct inquiries channel opening soon
              </span>
            </div>

            <div className="contact-action">
              INQUIRIES
              <br />
              OPENING SOON
            </div>
          </section>
        </main>

        <footer>
          HYPOTHESIQ
          <span>
            THINK. TEST. TRACE.
          </span>{' '}
          © 2026
        </footer>

        {event && (
          <Register
            event={event}
            close={() => setEvent()}
          />
        )}

        <Assistant />
      </div>
    </>
  )
}