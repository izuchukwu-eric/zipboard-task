"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle"

const faqData = [
  {
    id: "item-1",
    question: "Q1. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis."
  },
  {
    id: "item-2",
    question: "Q2. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a."
  },
  {
    id: "item-3",
    question: "Q3. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultricies posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmkldnklco cndkjncac akj va.",
  },
  {
    id: "item-4",
    question: "Q4. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
  },
  {
    id: "item-5",
    question: "Q5. Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel.",
  },
]

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleContentClick = (itemId: string) => {
    setOpenItems(prev => prev.filter(id => id !== itemId))
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 right-0 z-10">
          <ModeToggle />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-blue-400 mb-4 font-dm-sans">
            Frequently asked questions
          </h1>
        </div>
        
        <div className="mt-28">
          <Accordion 
            type="multiple" 
            className="w-full"
            value={openItems}
            onValueChange={setOpenItems}
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={index === faqData.length - 1 ? "border-b border-gray-300 dark:border-white/50" : ""}
              >
                <AccordionTrigger className="flex justify-between items-center cursor-pointer w-full px-6 py-4 text-left hover:no-underline transition-colors duration-200">
                  <span className="text-xl font-bold text-black dark:text-white pr-4 font-dm-sans">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-6 pt-0 max-w-4xl cursor-pointer"
                  onClick={() => handleContentClick(faq.id)}
                >
                  <div className="text-black dark:text-white font-dm-sans font-normal text-sm md:text-[16px] max-w-3xl">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}