import { Reveal, StaggerGroup, staggerItem } from './Reveal'
import { Counter } from './Counter'
import { stats } from '../data/menu'
import storyImage from '../assets/images/parmejano-1.jpg'
import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-parm-black px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal y={40} className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={storyImage}
              alt="Fresh pizza, made the Parmejano way"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-parm-black/50 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-4 rounded-2xl bg-parm-red px-5 py-4 shadow-xl sm:-right-8"
          >
            <p className="font-display text-2xl font-bold text-parm-cream">485°C</p>
            <p className="font-body text-xs text-parm-cream/80">wood-fired heat</p>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-parm-red-light">
              // 03 — Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-parm-cream sm:text-5xl">
              Dough. Fire. Napoli.
            </h2>
            <p className="mt-4 font-body text-parm-cream/65">
              Parmejano started with one question: why does "fast pizza" have to mean
              "forgettable pizza"? So we built a wood-fired oven that runs past 900°F, source dough
              we actually proof for a full day, and finish every pie with San Marzano tomatoes,
              fior di latte, and parmesan we'd stand behind ourselves. No shortcuts, no soggy
              middles — just true Neapolitan mastery, one pie at a time.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <p className="font-display text-3xl font-bold text-parm-red-light sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-body text-sm text-parm-cream/55">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
