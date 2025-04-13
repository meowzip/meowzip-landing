"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Cat, BookText, Users, MessagesSquare, Bell, Smartphone, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureInfo {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureInfo[] = [
  {
    icon: Cat,
    title: "고양이 모음집",
    description: "길고양이 프로필 등록 및 관리, 고양이별 상세 정보 기록, 이미지 업로드 및 관리를 할 수 있습니다.",
  },
  {
    icon: BookText,
    title: "돌봄 일지",
    description: "일별 돌봄 활동을 기록하고 사진을 첨부하며, 돌봄 히스토리를 관리할 수 있습니다.",
  },
  {
    icon: Users,
    title: "공동 냥육",
    description: "다른 케어테이커와 협업하고 돌봄 일정을 공유하며 실시간 알림을 받을 수 있습니다.",
  },
  {
    icon: MessagesSquare,
    title: "커뮤니티",
    description: "피드를 작성하고 공유하며 댓글, 좋아요/북마크 기능을 통해 사용자간 소통할 수 있습니다.",
  },
  {
    icon: Bell,
    title: "알림",
    description: "중요한 돌봄 활동이나 커뮤니티 소식에 대한 알림을 받고 관리할 수 있습니다.",
  },
];

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const featureCardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
  hover: {
    y: -6,
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  }
};

const iconVariants = {
    initial: { scale: 0, rotate: -90 },
    animate: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: { delay: i * 0.1 + 0.3, type: "spring", stiffness: 260, damping: 20 }
    }),
    hover: {
      rotate: 10,
      scale: 1.1,
      transition: { duration: 0.2 }
    }
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-x-hidden"
      style={{ backgroundPositionY: backgroundY }}
    >
      <main className="flex-grow container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
        <motion.section
          className="text-center mb-20 md:mb-32"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 mb-6 leading-tight"
            variants={itemVariants}
          >
            냥.zip
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            길고양이 케어테이커를 위한 스마트한 돌봄 일지. <br className="hidden sm:block" />
            소중한 길냥이들의 일상을 기록하고 함께 돌보세요.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Button asChild size="lg" className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-3 shadow-lg hover:bg-gray-800 transition-colors duration-300">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Apple className="mr-2 h-5 w-5" /> App Store
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
             <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-white border-gray-300 rounded-full px-8 py-3 shadow-lg hover:bg-gray-50 transition-colors duration-300">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-5 w-5 text-gray-700" /> <span className="text-gray-800">Google Play</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="mb-20 md:mb-32">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            냥.zip의 특별한 기능들
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                variants={featureCardVariants}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="h-full rounded-xl transition-shadow duration-300 border border-gray-100 overflow-hidden bg-white/80 backdrop-blur-sm cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4 p-6 bg-gradient-to-tr from-orange-50 to-amber-50 border-b border-gray-100">
                     <motion.div variants={iconVariants} custom={index}>
                       <feature.icon className="h-8 w-8 text-orange-500" />
                     </motion.div>
                     <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
            className="text-center bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl p-10 md:p-16 shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, transition: { delay: 0.3, duration: 0.5 }}}
                viewport={{ once: true }}
            />
             <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1, transition: { delay: 0.4, duration: 0.5 }}}
                viewport={{ once: true }}
            />

            <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.5 }}}
                viewport={{ once: true }}
            >
                지금 바로 시작하세요!
            </motion.h2>
            <motion.p
                className="text-lg text-white/90 mb-8 max-w-xl mx-auto relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 }}}
                viewport={{ once: true }}
             >
                냥.zip과 함께 길고양이 돌봄의 새로운 경험을 만들어보세요.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative z-10"
             >
                <Button asChild size="lg" className="bg-white text-orange-600 rounded-full px-8 py-3 shadow-md hover:bg-orange-50 transition-colors duration-300 font-semibold">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        앱 다운로드 <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
            </motion.div>
        </motion.section>

      </main>

      <footer className="py-8 border-t border-gray-200/70">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Meow.zip. Crafted with ❤️ for street cats.
        </div>
      </footer>
    </motion.div>
  );
}