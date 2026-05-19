import SmartBreadcrumb from '../ui/smart-breadcrumb'

const TERMS = [
  {
    id: 'afci',
    term: 'AFCI',
    full: 'Arc Fault Circuit Interrupter',
    definition:
      'A circuit breaker that continuously monitors electrical current and shuts off power the moment it detects dangerous electrical arcing — the kind of sparking that starts fires inside walls. Required by the NEC in bedrooms, living rooms, and other living spaces in new construction.',
  },
  {
    id: 'amperage',
    term: 'Amperage (Amps)',
    full: null,
    definition:
      'The measure of how much electrical current is flowing through a circuit at any given moment. Think of it like the volume of water flowing through a pipe. Most household outlets are rated at 15 or 20 amps; large appliances like electric dryers or EV chargers require 30–50 amp dedicated circuits.',
  },
  {
    id: 'bonding',
    term: 'Bonding',
    full: null,
    definition:
      'The practice of connecting all metal parts of an electrical system together to ensure they share the same electrical potential. Bonding prevents dangerous voltage differences between components — for example, between your water pipes and your electrical panel — which could otherwise cause a shock.',
  },
  {
    id: 'circuit-breaker',
    term: 'Circuit Breaker',
    full: null,
    definition:
      'A safety switch inside your electrical panel that automatically trips and cuts power when a circuit is overloaded or a fault is detected. Unlike a fuse, a tripped breaker can simply be reset. Modern panels use breakers rated in amps (15A, 20A, 30A, etc.) to protect each individual circuit in the home or building.',
  },
  {
    id: 'conduit',
    term: 'Conduit',
    full: null,
    definition:
      'A protective tube — typically metal (EMT) or PVC — through which electrical wires are routed. Conduit is required in exposed areas like garages, basements, and commercial spaces where wiring could be subject to physical damage. It also makes future wire replacement far easier.',
  },
  {
    id: 'dedicated-circuit',
    term: 'Dedicated Circuit',
    full: null,
    definition:
      'An electrical circuit reserved for a single appliance or device, with its own breaker in the panel and no shared outlets. Refrigerators, dishwashers, washing machines, EV chargers, and HVAC equipment typically require dedicated circuits to prevent tripping and ensure safe, reliable operation.',
  },
  {
    id: 'gfci',
    term: 'GFCI',
    full: 'Ground Fault Circuit Interrupter',
    definition:
      'A fast-acting safety device that shuts off power within milliseconds when it detects even a tiny imbalance between the current going out and coming back — a sign that electricity may be flowing through a person or into water. Required by code in kitchens, bathrooms, garages, outdoors, and near any water source.',
  },
  {
    id: 'grounding',
    term: 'Grounding',
    full: null,
    definition:
      'A safety system that provides a direct, low-resistance path for fault current to flow safely to the earth rather than through a person. A properly grounded system keeps metal appliance cases, outlets, and panels at earth potential — so if a live wire touches a metal surface, the breaker trips instead of you getting a shock.',
  },
  {
    id: 'hot-wire',
    term: 'Hot Wire',
    full: null,
    definition:
      'The wire that carries energized current from the breaker panel to a device or outlet. In standard household wiring, hot wires are typically black (or red for a second hot leg). Never touch a hot wire without confirming the circuit is de-energized with a voltage tester — hot wires are always live even when a switch is off.',
  },
  {
    id: 'junction-box',
    term: 'Junction Box',
    full: null,
    definition:
      'An enclosed metal or plastic box that houses and protects wire splices and connections. All wire connections must be made inside a junction box per the NEC — this contains any sparking or heat from a loose connection and prevents fires. Junction boxes must remain accessible and cannot be buried behind drywall.',
  },
  {
    id: 'kilowatt-hour',
    term: 'Kilowatt-Hour (kWh)',
    full: null,
    definition:
      "The unit your utility company uses to bill you for electricity. One kWh equals using 1,000 watts of power for one continuous hour — for example, running ten 100-watt light bulbs for one hour. Understanding your appliances' wattage helps estimate your monthly bill and identify energy hogs.",
  },
  {
    id: 'load-calculation',
    term: 'Load Calculation',
    full: null,
    definition:
      "A formal engineering process used to determine a building's total electrical demand — accounting for lighting, appliances, HVAC, and all connected devices. Load calculations ensure the service entrance, panel, and wiring are properly sized. They're required before panel upgrades, new construction, and major additions.",
  },
  {
    id: 'load-center',
    term: 'Load Center',
    full: 'Electrical Panel / Breaker Box',
    definition:
      "The metal cabinet that receives electricity from the utility and distributes it to individual circuits throughout the building via circuit breakers. It's the central hub of your electrical system. Most modern homes have a 200-amp load center; older homes may still have 100-amp or even 60-amp panels that may need upgrading.",
  },
  {
    id: 'nec-code',
    term: 'NEC Code',
    full: 'National Electrical Code',
    definition:
      'The standard for safe electrical installation in the United States, published by the National Fire Protection Association (NFPA 70) and updated every three years. The NEC sets minimum requirements for wiring methods, materials, and equipment. Minnesota and Wisconsin both adopt the NEC, with local amendments enforced by state and city inspectors.',
  },
  {
    id: 'neutral-wire',
    term: 'Neutral Wire',
    full: null,
    definition:
      'The return path wire that carries current back to the panel after it has passed through a load. In standard household wiring, neutral wires are white. The neutral is bonded to ground at the main panel — but never at sub-panels or downstream points, which could create dangerous parallel paths for current.',
  },
  {
    id: 'outlet',
    term: 'Outlet / Receptacle',
    full: null,
    definition:
      'The wall-mounted point where electrical devices plug in. Standard household outlets are 120V/15A or 120V/20A (NEMA 5-15 and 5-20). Larger appliances require 240V outlets (dryer, range, EV charger). GFCI outlets protect against shock near water; tamper-resistant outlets (TR) prevent children from inserting objects and are required in new construction.',
  },
  {
    id: 'panel-upgrade',
    term: 'Panel Upgrade',
    full: null,
    definition:
      'The replacement of an outdated or undersized electrical panel with a new, higher-capacity one. Common triggers include adding a hot tub, EV charger, or major addition; having an older 100-amp or 60-amp service; or replacing a recalled panel brand (Zinsco, Federal Pacific). A typical modern upgrade is from 100A to 200A or 400A service.',
  },
  {
    id: 'romex',
    term: 'Romex',
    full: 'NM-B Cable',
    definition:
      "A brand name (owned by Southwire) that has become the generic term for non-metallic sheathed cable (NM-B) — the flexible plastic-jacketed cable used for most interior residential wiring. Romex bundles a hot wire, neutral wire, and ground wire inside a single jacket. It's not permitted in commercial buildings or anywhere it could be exposed to physical damage.",
  },
  {
    id: 'service-entrance',
    term: 'Service Entrance',
    full: null,
    definition:
      "Where the utility company's power line connects to your building's electrical system — typically at a weatherhead on the roof, down through a meter base, and into the main panel. The utility owns everything up to the meter; the homeowner owns and is responsible for everything from the meter inward, including the service entrance conductors.",
  },
  {
    id: 'short-circuit',
    term: 'Short Circuit',
    full: null,
    definition:
      "A fault condition where electricity takes an unintended, low-resistance path — most commonly when a hot wire contacts a neutral or ground wire. The result is an instant surge of current that trips the breaker. A short circuit that doesn't trip a breaker (due to a faulty breaker) will generate extreme heat and can start a fire quickly.",
  },
  {
    id: 'three-phase-power',
    term: 'Three-Phase Power',
    full: null,
    definition:
      'An electrical system that uses three alternating currents offset 120° from each other, delivering power more efficiently than single-phase. Common in commercial buildings, industrial facilities, and multi-unit housing. Three-phase power supports larger motors, HVAC equipment, and heavy machinery, and is more cost-effective to run at scale than single-phase.',
  },
  {
    id: 'transformer',
    term: 'Transformer',
    full: null,
    definition:
      'A device that transfers electrical energy between circuits by stepping voltage up or down using electromagnetic induction. The utility transformer on the pole outside steps high-voltage transmission power (thousands of volts) down to the 120/240V used in homes. Commercial properties often have pad-mounted transformers on site.',
  },
  {
    id: 'voltage',
    term: 'Voltage (Volts)',
    full: null,
    definition:
      'The measure of electrical pressure or potential difference that drives current through a circuit. Think of it like the water pressure in a pipe. Standard U.S. household voltage is 120V for most outlets and 240V for large appliances. Most commercial and industrial equipment operates on 208V or 480V systems.',
  },
  {
    id: 'wattage',
    term: 'Wattage (Watts)',
    full: null,
    definition:
      'The measure of electrical power — the rate at which energy is consumed or produced. Calculated as Volts × Amps = Watts. A 100-watt light bulb uses 100 watts of power. Knowing the wattage of your devices helps with load calculations, circuit sizing, and understanding your electricity bill.',
  },
]

// Build A–Z letter index from available terms
const LETTERS = [...new Set(TERMS.map(t => t.term[0].toUpperCase()))].sort()

export default function GlossaryPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="glossary-hero">
        <div className="glossary-hero-bg" />
        <SmartBreadcrumb />
        <div className="wrap glossary-hero-inner">
          <p className="hero-eyebrow">Resources</p>
          <h1>
            <span className="hero-title-line">ELECTRICAL</span>
            <span className="hero-title-line"><span className="text-orange">GLOSSARY</span></span>
          </h1>
          <p className="glossary-hero-tagline">
            Plain-English definitions for the electrical terms you'll hear from your contractor, inspector, or code book — so you always know exactly what's being done in your home or building.
          </p>
        </div>
      </section>

      {/* ── Letter Nav ───────────────────────────── */}
      <nav className="glossary-letter-nav" aria-label="Jump to letter">
        <div className="wrap">
          <ul className="glossary-letter-list">
            {LETTERS.map(letter => (
              <li key={letter}>
                <a href={`#letter-${letter}`} className="glossary-letter-link">{letter}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Terms ────────────────────────────────── */}
      <section className="glossary-section">
        <div className="wrap">
          {LETTERS.map(letter => {
            const group = TERMS.filter(t => t.term[0].toUpperCase() === letter)
            return (
              <div key={letter} id={`letter-${letter}`} className="glossary-group">
                <div className="glossary-group-letter" aria-hidden="true">{letter}</div>
                <div className="glossary-cards">
                  {group.map(item => (
                    <div key={item.id} id={item.id} className="glossary-card">
                      <div className="glossary-card-term">
                        <span className="glossary-term-name">{item.term}</span>
                        {item.full && <span className="glossary-term-full">— {item.full}</span>}
                      </div>
                      <p className="glossary-card-def">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────── */}
      <section className="glossary-cta">
        <div className="wrap glossary-cta-inner">
          <div>
            <p className="glossary-cta-eyebrow">Still have questions?</p>
            <h2 className="glossary-cta-heading">Talk to a Licensed Electrician</h2>
            <p className="glossary-cta-body">Our team is happy to walk you through anything before, during, or after your project. No jargon, no pressure.</p>
          </div>
          <a href="/contact-us" className="btn-orange">GET A FREE ESTIMATE</a>
        </div>
      </section>
    </>
  )
}
