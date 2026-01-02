import {
  cardColors1,
  heroSectionHeadingContent,
  heroTags,
  whyKyvernoCards,
} from '../constants'

import { Button } from '../components/Button'
import { HeadingContent } from '../components/HeadingContent'
import { Tag } from '../components/Tag'
import { WhykyvCard } from '../components/WhykyvCard'
import { Zap } from 'lucide-react'
import { motion } from 'motion/react'

export const HeroSection = () => {
  const zapIcon = Zap

  const { headingText, paragraphText } = heroSectionHeadingContent

  return (
    <section className="w-full bg-gradient-to-br from-dark-50 via-dark-50 to-dark-100 relative pt-16 pb-16 sm:pt-24 md:pt-12 sm:pb-24 md:pb-16 lg:pb-12 overflow-hidden border-b border-stroke/50 md:border-b-[0.5px] lg:border-b">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="assets/images/lg-hero-ball.svg"
          alt="lg-hero-ball"
          className="hidden sm:inline-block absolute sm:top-20 sm:left-8 lg:top-20 lg:left-20 opacity-30"
        />
        <img
          src="assets/images/sm-hero-ball.svg"
          alt="sm-hero-ball"
          className="hidden sm:inline-block absolute sm:right-15 sm:top-50 md:right-25 lg:top-50 lg:right-50 xl:right-90 opacity-30"
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center space-y-8 sm:space-y-10">
        <HeadingContent
          headingParts={headingText}
          subheading={paragraphText}
          variant="level1"
          headerLevel="h1"
        />

        {/* Feature Cards */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 sm:mt-12">
          {whyKyvernoCards.map((card, index) => (
            <WhykyvCard card={card} color={cardColors1[index]} key={index} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-8 md:mt-4 sm:mt-6">
          <Button href="/docs/introduction" variant="primary" size="large">
            Get Started
          </Button>
          <Button
            href="https://playground.kyverno.io/"
            variant="secondary"
            size="large"
          >
            Explore Kyverno
          </Button>
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-4 flex-wrap justify-center mt-4 md:mt-4 sm:mt-8">
          <Tag
            variant="secondary"
            href="https://nirmata.com/"
            className="bg-dark-50/80 backdrop-blur-sm border border-stroke/50 text-white/90 hover:bg-dark-50 hover:border-primary-100/50 transition-all text-sm sm:text-base"
          >
            Created with <span className="text-red-500">❤️</span> by Nirmata
          </Tag>
        </div>
      </div>
    </section>
  )
}
