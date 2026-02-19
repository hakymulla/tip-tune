import type { AnalyticsEvent } from "../types/onboarding";

const SESSION_ID = Math.random().toString(36).slice(2);

export const analytics = {
  track: ({ event, properties = {} }: AnalyticsEvent) => {
    const payload = {
      event,
      sessionId: SESSION_ID,
      timestamp: new Date().toISOString(),
      ...properties,
    };
    // In production, replace with real analytics (Segment, Mixpanel, etc.)
    console.log("[Analytics]", payload);
    // window.analytics?.track(event, payload);
  },

  onboardingStepViewed: (step: string, stepIndex: number) => {
    analytics.track({
      event: "Onboarding Step Viewed",
      properties: { step, stepIndex },
    });
  },

  onboardingStepCompleted: (
    step: string,
    stepIndex: number,
    timeSpentMs: number,
  ) => {
    analytics.track({
      event: "Onboarding Step Completed",
      properties: { step, stepIndex, timeSpentMs },
    });
  },

  onboardingSkipped: (step: string) => {
    analytics.track({ event: "Onboarding Step Skipped", properties: { step } });
  },

  onboardingCompleted: (totalTimeMs: number) => {
    analytics.track({
      event: "Onboarding Completed",
      properties: { totalTimeMs },
    });
  },

  onboardingDraftSaved: (step: string) => {
    analytics.track({ event: "Onboarding Draft Saved", properties: { step } });
  },

  walletConnected: (network: string) => {
    analytics.track({ event: "Wallet Connected", properties: { network } });
  },

  trackUploaded: (fileSize: number, fileType: string) => {
    analytics.track({
      event: "Track Uploaded",
      properties: { fileSize, fileType },
    });
  },
};
