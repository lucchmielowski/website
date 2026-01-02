import React from 'react'
import { twMerge } from 'tailwind-merge'

export const WhykyvCard = ({ card, color }) => {
  return (
    <div
      key={card.title}
      className="group relative bg-dark-50/90 backdrop-blur-sm p-8 rounded-3xl border border-stroke/50 flex flex-col space-y-6 w-full h-full transition-all duration-300 hover:border-primary-100/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 overflow-hidden"
    >
      <div className="relative z-10 flex flex-col space-y-5">
        {/* Icon and Title Section */}
        <div className="flex items-center gap-3">
          <span
            className={twMerge(
              'w-12 h-12 p-2.5 rounded-xl flex justify-center items-center shadow-lg transition-all duration-300 group-hover:scale-105 flex-shrink-0',
              color.iconBg,
            )}
          >
            <card.icon className={twMerge('w-6 h-6', color.iconText)} />
          </span>
          <h3
            className={twMerge(
              'text-sm sm:text-base font-bold rounded-full px-4 py-1.5 whitespace-nowrap transition-all duration-300',
              color.titleBg,
              color.titleText,
            )}
          >
            {card.title}
          </h3>
        </div>

        {/* Description */}
        <div className="flex-1 space-y-3 text-left">
          <p className="text-base sm:text-lg leading-relaxed text-white/90 font-medium">
            {card.desc1}
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-white/70">
            {card.desc2}
          </p>
        </div>
      </div>
    </div>
  )
}
