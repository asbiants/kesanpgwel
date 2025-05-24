"use client"
import { MessageForm } from '@/components/MessageForm'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Home() {
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, margin: "-150px" })

  return (
    <main className="min-h-screen relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/space-background.mp4" type="video/mp4" />
        Browser Anda tidak mendukung tag video.
      </video>

      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 sm:p-10 border border-purple-100">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700">
              Hai Guys! Akhirnya kita sampai di Acara 12
            </h1>
            <div className="text-l text-gray-700 leading-relaxed min-h-[300px]">
              <TypeAnimation
                sequence={[
                  'Selamat Guys! Kalian sudah sampai tahap ini, kurang lebih 12 acara sudah kalian lewati. Capek, iya. Seru? juga iya KAYAKNYA WKWKWK. Tapi yang paling penting… udah kelar! Thanks buat semua yang udah saling bantu, semoga next-nya makin kompak dan jangan sering typo yaaa 😅',
                  1000,
                  'Selamat Guys! Kalian sudah sampai tahap ini, kurang lebih 12 acara sudah kalian lewati. Capek, iya. Seru? juga iya KAYAKNYA WKWKWK. Tapi yang paling penting… udah kelar! Thanks buat semua yang udah saling bantu, semoga next-nya makin kompak dan jangan sering typo yaaa 😅\n\nDari kami asisten (asbi, della, difa, alip) memohon maaf sebesar - besarnya ya kalau selama mengampu dan membersamai kalian masih banyak kurangnya. Kami juga manusia biasaa ANJAAAYYY... jadi kami juga memiliki kekurangan, Kami bukan nabi boyyy...., haarap di maklumi ya guys hehehe... Semangat buat kalian semua. semoga dilancarkan semua urusannya... project, PKL dan lainnya... Sekian dari kami yaa,',
                  1000,
                  'Selamat Guys! Kalian sudah sampai tahap ini, kurang lebih 12 acara sudah kalian lewati. Capek, iya. Seru? juga iya KAYAKNYA WKWKWK. Tapi yang paling penting… udah kelar! Thanks buat semua yang udah saling bantu, semoga next-nya makin kompak dan jangan sering typo yaaa 😅\n\nDari kami asisten (asbi, della, difa, alip) memohon maaf sebesar - besarnya ya kalau selama mengampu dan membersamai kalian masih banyak kurangnya. Kami juga manusia biasaa ANJAAAYYY... jadi kami juga memiliki kekurangan, Kami bukan nabi boyyy...., haarap di maklumi ya guys hehehe... Semangat buat kalian semua. semoga dilancarkan semua urusannya... project, PKL dan lainnya... Sekian dari kami yaa,\n\nRegards\nAsbi, Alip, Diva, Della',
                ]}
                wrapper="p"
                speed={50}
                cursor={true}
                repeat={0}
                className="whitespace-pre-line"
              />
            </div>
          </div>

          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ 
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.1
            }}
            className="mt-12 pt-8 border-t border-purple-200"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3
              }}
              className="text-3xl font-bold text-center text-purple-800 mb-8"
            >
              Kesan Pesanmu Dong Guys!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5
              }}
            >
              <MessageForm />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 animate-float z-10">
        <Image
          src="/astronaut.png"
          alt="Astronot Mengambang"
          width={150}
          height={150}
        />
      </div>
    </main>
  )
}
