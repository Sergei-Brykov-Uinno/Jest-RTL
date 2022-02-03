import { InvestmentProcessDTO } from "./InvestmentProcess";
import { DataSourceMetaModel, DataSourceModel } from "./DataSource";
import { InvestmentDTO, Model } from "./Investment";

export type InvestmentReviewDTO = {
  object: string;
  id: string;
  ticker: string;
  summary: string | null;
  meta: DataSourceMetaModel;
  updated_at: string;
  review: { data: InvestmentReview };
  isOwner?: boolean;
  processes: {
    data: InvestmentProcessDTO[];
  };
};

export type InvestmentReview = {
  id: string;
  object: string;
  summary: string;
  updated_at: string;
  notes?: { data: InvestmentNote[] };
  model?: { data: Model };
  investment?: InvestmentDTO;
  processes?: {
    data: InvestmentProcessDTO[];
  };
  permissions?: {
    data: {
      notes?: boolean;
      models?: boolean;
    };
  };
  isOwner?: boolean;
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
