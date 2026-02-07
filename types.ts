
export enum View {
  DASHBOARD = 'DASHBOARD',
  BRAND_FORGE = 'BRAND_FORGE',
  VOICE_LINES = 'VOICE_LINES',
  DOMAIN_SCOUT = 'DOMAIN_SCOUT',
  LOGO_FORGE = 'LOGO_FORGE',
  REVIEW_MIND = 'REVIEW_MIND',
  CAMPAIGN_CRAFT = 'CAMPAIGN_CRAFT',
  VISUAL_FORGE = 'VISUAL_FORGE',
  IMAGE_EDITOR = 'IMAGE_EDITOR',
  CHAT_BUDDY = 'CHAT_BUDDY',
  REALITY_LAB = 'REALITY_LAB'
}

export interface GroundingSource {
  title?: string;
  uri: string;
}

export interface ToolResult {
  text?: string;
  imageUrl?: string;
  sources?: GroundingSource[];
  promptUsed?: string;
}

export interface SentimentData {
  positives: string[];
  negatives: string[];
  reply: string;
  tone: string;
}

export interface PerceptionResult {
  marketAnalyst: {
    category: string;
    sizeType: string;
    competitionLevel: string;
    maturity: string;
    outlook: string;
  };
  investorPerspective: {
    profitPotential: string;
    scalability: string;
    riskLevel: string;
    viability: string;
    salesQuarters: string;
  };
  advisorView: {
    strengths: string[];
    weaknesses: string[];
    difficulty: string;
    suggestions: string[];
  };
  publicReaction: {
    generalPublic: string;
    premiumCustomers: string;
    techUsers: string;
    investors: string;
  };
  brutalReality: {
    failurePoints: string[];
    marketExisting: string;
    threatFactors: string[];
    critique: string;
  };
  opportunityExpansion: {
    improvements: string[];
    differentiation: string;
    growthDirections: string[];
    featureExtensions: string[];
  };
}
