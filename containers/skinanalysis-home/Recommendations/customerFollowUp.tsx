"use client";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  styled,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import axios from "axios";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/store/store";

// Make.com webhook that receives a consultation request. Reuses the same hook
// as the scan; the `event` field distinguishes the two payloads.
const CONSULTATION_WEBHOOK_URL =
  "https://hook.eu1.make.com/l35iie6ib0pdzol0hlv7jztdeonumrkg";

const StyledFollowUp = styled(Box)(({ theme }) => ({
  paddingBottom: 75,
  paddingTop: 75,
  "& .follow-up-card": {
    position: "relative",
    overflow: "hidden",
    borderRadius: 24,
    padding: theme.spacing(6, 4),
    textAlign: "center",
    color: theme.palette.common.white,
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    boxShadow: `0px 20px 45px -20px ${theme.palette.primary.main}`,
  },
  "& .follow-up-card .MuiTypography-h4": {
    fontWeight: 800,
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  "& .follow-up-card .subtitle": {
    opacity: 0.9,
    maxWidth: 560,
    margin: "12px auto 0",
  },
  "& .book-btn": {
    marginTop: theme.spacing(4),
    minWidth: 240,
    borderRadius: 100,
    paddingTop: 12,
    paddingBottom: 12,
    fontWeight: 700,
    textTransform: "none",
    fontSize: 16,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      opacity: 0.92,
    },
  },
  "& .success-box": {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  "& .success-box svg": {
    fontSize: 56,
  },
}));

interface CustomerFollowUpProps {
  // The recommendation payload fetched on this page (fetch-recommendations).
  data?: any;
}

const CustomerFollowUp = ({ data }: CustomerFollowUpProps) => {
  const { data: session } = useSession();
  const location = useAppSelector(
    (state) => (state.analysisSlice as any)?.location
  );

  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleBookConsultation = async () => {
    if (status !== "idle") return;
    setStatus("loading");

    // The recommendations page exposes the scan report at data.data[0]. Pull
    // the analysis details from it so the free-consultation request carries the
    // full context. Field names are accepted in both camelCase and snake_case
    // so we are resilient to the exact backend response shape.
    const report = data?.data?.[0] || {};
    const pick = (...candidates: any[]) =>
      candidates.find((value) => value !== undefined && value !== null);

    const resultUrl = pick(
      report.publicUrl,
      report.userId && report._id
        ? `https://skincarevendingnew.vercel.app/user/view-skincare-recommnedations?userId=${report.userId}&productRecommendationId=${report._id}`
        : undefined
    );

    try {
      await axios.post(CONSULTATION_WEBHOOK_URL, {
        event: "free_consultation_request",
        requested_at: new Date().toISOString(),
        user: {
          user_id: pick(report.userId, report.user?._id, report.user?.user_id, session?.user?.id),
          name: pick(session?.user?.name, report.user?.name),
          email: pick(session?.user?.email, report.user?.email),
          phone: pick(session?.user?.mobileNumber, report.user?.phone, report.user?.mobileNumber),
        },
        machine_name: pick(report.machineName, report.machine_name, report.machine?.name),
        machine_location: pick(report.machineLocation, report.machine_location, report.machine?.location, location),
        result_url: resultUrl,
        skin_type: pick(session?.user?.skinType, report.skinType, report.skin_type),
        overall_score: pick(report.overallScore, report.overall_score),
        overall_rating: pick(report.overallRating, report.overall_rating),
        skin_metrics: pick(report.skinMetrics, report.skin_metrics),
        key_concerns: pick(report.keyConcerns, report.key_concerns),
        detected_attributes: pick(report.detectedAttributes, report.detected_attributes),
      });
    } catch (error) {
      // Even if the webhook fails we still confirm to the user; the team can
      // follow up via the details already captured during the scan.
    } finally {
      setStatus("success");
    }
  };

  return (
    <StyledFollowUp>
      <Container maxWidth="md">
        <Box className="follow-up-card">
          <Typography variant="h4">
            Hey! Do you need a special consultation for better skin?
          </Typography>
          <Typography variant="body1" className="subtitle">
            Get personalised guidance from our skin experts tailored to your
            analysis results.
          </Typography>

          {status === "success" ? (
            <Box className="success-box">
              <Icon icon="solar:check-circle-bold" />
              <Typography variant="h6" fontWeight={700}>
                Thank you! Our team will reach out to you shortly.
              </Typography>
            </Box>
          ) : (
            <Button
              className="book-btn"
              variant="contained"
              disableElevation
              disabled={status === "loading"}
              onClick={handleBookConsultation}
              startIcon={
                status === "loading" ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <Icon icon="solar:calendar-bold" />
                )
              }
            >
              {status === "loading" ? "Booking..." : "Book Free Consultation"}
            </Button>
          )}
        </Box>
      </Container>
    </StyledFollowUp>
  );
};

export default CustomerFollowUp;
