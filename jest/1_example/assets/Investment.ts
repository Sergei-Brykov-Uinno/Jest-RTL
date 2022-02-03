import { InvestmentProcessDTO } from "./InvestmentProcess";
import { DataSourceMetaModel, DataSourceModel } from "./DataSource";
import { InvestmentReview } from "./InvestmentReview";
import { Ticker } from "../investmentTicker.helpers";

export type InvestmentDTO = {
  object: string;
  id: string;
  ticker: string;
  meta: DataSourceMetaModel;
  summary: string | null;
  updated_at: string;
  review: { data?: InvestmentReview };
  investment: {
    meta: Ticker;
    id: string;
  };
  processes: {
    data: InvestmentProcessDTO[];
  };
  type: string;
};

export function investmentReviewGuard(value: any): value is InvestmentReview {
  return (value as InvestmentReview)?.summary !== undefined;
}

export type Model = {
  id: string;
  url: string;
  name: string;
  file_name: string;
};

export type InvestmentNote = {
  id: string;
  media: {
    data: {
      url: string;
      file_name: string;
      id: string;
    };
  };
  object: string;
  title: string;
  typed_text: string;
  updated_at: string;
};

export type CreateInvestmentRequest = {
  ticker: string;
  data_source_id: string;
};

export type UpdateInvestmentParams = Partial<Pick<InvestmentModel, "summary">>;

export type AttachInvestmentProcessParams = {
  process_ids: string[];
};

export type DetachInvestmentProcessParams = {
  investment_process_ids: string[];
};
type TickerDataModel = {
  data: DataSourceModel;
};

export type InvestmentModel = {
  object: string;
  id: string;
  ticker: TickerDataModel;
  summary: string | null;
};
