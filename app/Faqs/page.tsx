"use client";
import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Container, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Do you accept walk-ins?",
    answer:
      "We recommend booking in advance to ensure availability. Walk-ins are welcome but not guaranteed.",
  },
  {
    question: "What skincare products do you use?",
    answer:
      "We use clean, professional-grade skincare products that are gentle and effective.",
  },
  {
    question: "How does the AI skin analysis work?",
    answer:
      "Our AI system scans your skin to detect hydration levels, texture, pigmentation, and other key concerns. This data helps us create a treatment plan tailored just for you.",
  },
];

const Faqs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ my: 2, marginTop:5}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Faqs;
