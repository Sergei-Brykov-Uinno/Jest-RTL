import { InvestmentProcessItemStore } from "../process-item/InvestmentProcessItemStore";
import { InvestmentProcessItemDTO } from "./InvestmentProcessItem";
import { Media } from "./Media";

export type InvestmentProcessDTO = {
  id: string;
  process_id: string;
  name: string;
  description: string;
  is_active: boolean;
  is_default: false;
  score: number | null;
  relevance: number | null;
  valuation: number | null;
  comment: string | null;
  updated_at: string;
  factors: { data: InvestmentProcessItemDTO[] };
  media?: Media;

  user: {
    data: {
      username: string;
    };
  };
};

export type InvestmentProcess = {
  id: string;
  name: string;
  description: string;
  isActive?: boolean;
  isDefault?: boolean;
  score: number | null;
  relevance: number | null;
  valuation: number | null;
  comment: string;
  updatedAt: string;
  authorName: string;
  factors: InvestmentProcessItemStore[];
};
