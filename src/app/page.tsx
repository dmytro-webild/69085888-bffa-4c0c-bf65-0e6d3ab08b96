"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Code, Lightbulb, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="darkode"
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="darkode"
          description="Learn programming from scratch with interactive tutorials, real-world projects, and a supportive community. Master JavaScript, Python, Web Development, and more."
          buttons={[
            { text: "Start Learning", href: "#features" },
            { text: "Explore Courses", href: "#about" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-modern-programming-dashboard-interface-1773343286891-4ffccdcf.png"
          imageAlt="Programming dashboard interface"
          frameStyle="browser"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="Why Choose Darkode?"
          description="Discover what makes our platform the perfect choice for beginning programmers"
          tag="Features"
          features={[
            {
              id: "1",              title: "Interactive Learning Paths",              tags: ["Beginner-Friendly", "Structured"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/an-interactive-learning-interface-showin-1773343287424-5b961e89.png",              imageAlt: "Interactive learning interface"
            },
            {
              id: "2",              title: "Thriving Community Support",              tags: ["Community", "Help Available"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-vibrant-community-forum-interface-for--1773343289659-335ccf63.png",              imageAlt: "Community forum interface"
            },
            {
              id: "3",              title: "Build Real Projects",              tags: ["Practical", "Portfolio"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-project-portfolio-showcase-for-program-1773343290193-3e5a8ea5.png",              imageAlt: "Project showcase portfolio"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Darkode"
          description="Founded by Naman Chandra, Darkode is dedicated to making programming education accessible to everyone. We believe that learning to code should be engaging, supportive, and practical."
          tag="Our Mission"
          bulletPoints={[
            {
              title: "Beginner-Focused",              description: "Our courses are designed specifically for people new to programming, with clear explanations and step-by-step guidance.",              icon: Lightbulb
            },
            {
              title: "Hands-On Learning",              description: "Build real projects from day one. Theory combined with practical coding exercises to reinforce your skills.",              icon: Code
            },
            {
              title: "Expert Mentorship",              description: "Access to experienced developers who are passionate about helping others learn and grow in their programming journey.",              icon: Users
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-vibrant-workspace-scene-showing-multip-1773343287566-0cd22222.png"
          imageAlt="Darkode community workspace"
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Learners Say"
          description="Hear from programmers who have transformed their careers with Darkode"
          tag="Success Stories"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Priya Sharma",              handle: "@priya_dev",              testimonial: "Darkode made programming feel accessible and fun! I went from zero coding knowledge to building my first web project in just 3 months. The community support is incredible.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-professional-headshot-of-a-diverse-you-1773343286260-df14460f.png",              imageAlt: "Priya Sharma"
            },
            {
              id: "2",              name: "Rajesh Kumar",              handle: "@rajesh_codes",              testimonial: "The interactive lessons and real-world projects helped me understand programming concepts better than traditional courses. Highly recommended for beginners!",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-professional-headshot-of-a-confident-t-1773343286879-df7be2f9.png",              imageAlt: "Rajesh Kumar"
            },
            {
              id: "3",              name: "Aarav Patel",              handle: "@aarav_tech",              testimonial: "I love how Darkode breaks down complex topics into digestible lessons. The community forums have been invaluable for getting help when I get stuck.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-diverse-professional-headshot-of-someo-1773343286858-5f1da857.png",              imageAlt: "Aarav Patel"
            },
            {
              id: "4",              name: "Deepika Singh",              handle: "@deepika_developer",              testimonial: "Best learning platform for beginners! The courses are well-structured, the instructors are supportive, and I've already landed an internship thanks to the skills I learned.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/a-professional-headshot-of-a-tech-profes-1773343286399-05f88fd7.png",              imageAlt: "Deepika Singh"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about learning with Darkode"
          tag="Help"
          faqs={[
            {
              id: "1",              title: "Do I need any programming experience to start?",              content: "Not at all! Darkode is specifically designed for complete beginners. We start from the absolute basics and guide you through every step of your learning journey. No prior experience is necessary."
            },
            {
              id: "2",              title: "What programming languages are covered?",              content: "Our curriculum covers JavaScript, Python, HTML/CSS, React, Node.js, and more. We focus on languages that are in high demand and great for beginners to learn modern web development."
            },
            {
              id: "3",              title: "How long does it take to complete a course?",              content: "Course duration varies based on your pace and the specific course. Most beginner courses take 4-12 weeks of consistent study. You can learn at your own pace and revisit lessons anytime."
            },
            {
              id: "4",              title: "Is there a community to get help from?",              content: "Yes! We have an active community forum where you can ask questions, share your progress, and get feedback from other learners and mentors. Community support is one of our core values."
            },
            {
              id: "5",              title: "Will I get a certificate after completing courses?",              content: "Absolutely! Upon completing any course, you'll receive a certificate of completion that you can add to your portfolio and resume to showcase your newly acquired skills."
            },
            {
              id: "6",              title: "What if I get stuck on a problem?",              content: "Our mentors and community members are always ready to help! You can post your question on the forum, and you'll typically get helpful responses within hours. We encourage collaborative learning."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to start your programming journey? Join thousands of beginners learning with Darkode today and take your first step towards a tech career."
          animationType="entrance-slide"
          buttons={[
            { text: "Get Started Free", href: "#features" },
            { text: "Contact Us", href: "mailto:hello@darkode.dev" }
          ]}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ArGKeI4Vl3Rn1Y58bPVv3LWLAI/an-abstract-tech-themed-background-with--1773343286365-ec54d513.png"
          imageAlt="Darkode technology background"
          logoText="darkode"
          copyrightText="© 2025 Darkode | Founded by Naman Chandra"
          columns={[
            {
              title: "Platform",              items: [
                { label: "Courses", href: "#features" },
                { label: "Community", href: "#testimonials" },
                { label: "Projects", href: "#about" },
                { label: "Pricing", href: "#" }
              ]
            },
            {
              title: "Learn",              items: [
                { label: "JavaScript", href: "#" },
                { label: "Python", href: "#" },
                { label: "Web Development", href: "#" },
                { label: "Resources", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
