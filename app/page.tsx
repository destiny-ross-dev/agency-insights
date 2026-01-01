export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-28 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,116,144,0.18),_transparent_70%)]" />
          <div className="absolute right-10 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.18),_transparent_70%)]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_70%)]" />
        </div>
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              AI
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Agency Insights
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Revenue Command
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#revenue">
              Revenue
            </a>
            <a className="hover:text-slate-900" href="#performance">
              Performance
            </a>
            <a className="hover:text-slate-900" href="#coaching">
              Coaching
            </a>
            <button className="rounded-full border border-slate-300 px-4 py-2 text-slate-700 hover:border-slate-900 hover:text-slate-900">
              Log in
            </button>
          </nav>
        </header>

        <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-8 sm:px-10 lg:flex-row lg:items-center">
          <section className="flex-1 space-y-8">
            <span className="fade-up inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Built for seasoned producers
            </span>
            <div className="space-y-6">
              <h1 className="fade-up fade-delay-1 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Know which agents are driving premium and why it is happening.
              </h1>
              <p className="fade-up fade-delay-2 max-w-xl text-lg leading-8 text-slate-600">
                Track producer performance with clean activity ratios and
                premium outcomes: contact rate, pitch rate, conversion rate,
                bind rate, and average premium per policy. Built for leaders who
                coach with facts, not hunches.
              </p>
            </div>
            <div className="fade-up fade-delay-3 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
                Book a demo
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-900 hover:text-slate-900">
                See a live scorecard
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Contact-to-quote visibility
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Pitch and bind ratios
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Premium per producer
              </div>
            </div>
          </section>

          <section className="relative flex-1">
            <div className="fade-up fade-delay-2 rounded-3xl border border-white/70 bg-white/90 p-6 shadow-xl shadow-slate-900/10 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-500">
                  Producer Performance Pulse
                </p>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  +12% conversion lift
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Premium generated
                  </p>
                  <p className="mt-3 text-2xl font-semibold">$8.4M</p>
                  <p className="mt-2 text-xs text-slate-300">
                    Top 20 agents, last 30 days
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Contact ratio
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">
                    38%
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Contacts per lead accepted
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Pitch ratio
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900">
                    62%
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Quotes delivered per contact
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-600">
                    Bind ratio
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-amber-900">
                    24%
                  </p>
                  <p className="mt-2 text-xs text-amber-700">
                    Policies bound per quote
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section
        id="revenue"
        className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Agent premium tracking
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Premium you can explain, from first contact to bound policy.
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Track premium generated by agent, campaign, and channel. Connect
            activity ratios to outcomes so you can answer the only question that
            matters: which behaviors are producing premium right now?
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Premium per agent",
                copy: "Rank producers by generated premium, policies bound, and average premium size.",
              },
              {
                title: "Contact-to-quote",
                copy: "Spot contact ratios by source and coach outreach quality, not just volume.",
              },
              {
                title: "Quote-to-bind",
                copy: "See who closes and who stalls; address pitch quality and follow-through.",
              },
              {
                title: "Cycle time",
                copy: "Measure time from lead accepted to bind to keep pipeline velocity honest.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4"
              >
                <p className="text-base font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Agent scorecard
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                label: "Premium generated",
                value: "$12.1M",
                note: "Top 25 agents, last 90 days",
              },
              {
                label: "Contact ratio",
                value: "38%",
                note: "Contacts per lead accepted",
              },
              {
                label: "Conversion ratio",
                value: "24%",
                note: "Policies bound per quote",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>{item.label}</span>
                  <span className="text-slate-900">{item.value}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="performance"
        className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10"
      >
        <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white md:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Performance insight
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Know who is winning, who is stalled, and what to coach next.
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                We surface the behaviors behind the numbers: contact rate, pitch
                rate, bind rate, and premium per policy. Your leadership
                conversations shift from guesswork to targeted action.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Contact ratio by lead source and campaign.",
                "Pitch ratio by line of business and agent.",
                "Bind rate by carrier and quote type.",
                "Premium per policy and per producer.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="coaching"
        className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-10"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-900/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Coaching workflow
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">
                Coaching built for agents who already know the craft.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Identify the exact agents and stages that need coaching. Share
                targeted playbooks, pitch guidance, and follow-up cadences
                without micromanagement.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <span>Pitch quality reviews</span>
                  <span className="text-slate-900">12 this week</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <span>Follow-up cadence coaching</span>
                  <span className="text-slate-900">8 reps active</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                  <span>Conversion gap alerts</span>
                  <span className="text-slate-900">5 flagged</span>
                </div>
              </div>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Coaching focus
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Zero in on the next 30 days.
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Prioritize the top five agents most likely to swing premium.
                The system writes the agenda; you bring the coaching.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Advisory brief
              </p>
              <p className="mt-4 text-2xl font-semibold">
                “We stopped guessing and started coaching with facts. Our
                agents respect the data, and their close rates show it.”
              </p>
              <p className="mt-4 text-sm text-slate-300">
                Director of Sales, top 25 regional agency
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 text-sm text-slate-500 sm:px-10 md:flex-row md:items-center">
          <div>
            <p className="text-base font-semibold text-slate-900">
              Agency Insights
            </p>
            <p>Premium clarity for the agency that sells complex risk.</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a className="hover:text-slate-900" href="#">
              Security
            </a>
            <a className="hover:text-slate-900" href="#">
              Data policy
            </a>
            <a className="hover:text-slate-900" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
