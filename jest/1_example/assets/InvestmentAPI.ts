import { Ticker } from "../store/investmentTicker.helpers";
import {
  AttachInvestmentProcessParams,
  DetachInvestmentProcessParams,
  InvestmentDTO,
  UpdateInvestmentParams,
} from "../store/models/Investment";
import { InvestmentReview } from "../store/models/InvestmentReview";
import { httpClient } from "../util/http";

interface IInvestmentAPI {
  get: (investmentId: string) => Promise<InvestmentDTO>;
  // attachProcesses: (id: string, payload: AttachInvestmentProcessParams) => Promise<void>;
}

class InvestmentAPI implements IInvestmentAPI {
  get = async (investmentId: string) => {
    const response = await httpClient.get<{ data: InvestmentDTO }>(
      `/investments/${investmentId}?include=processes.factors,review`
    );
    return response.data;
  };
  createTicker = async (ticker: Ticker) => {
    const response = await httpClient.post("/investments", ticker);
    return response.data;
  };

  updateTicker = async (id: string, ticker: Ticker) => {
    const response = await httpClient.put(`/investments/${id}`, ticker);
    return response.data;
  };
  attachSharings = async (sharedHash: string, signature: string) => {
    return await httpClient.post(`/sharings/${sharedHash}/user-attach?signature=${signature}`, {});
  };

  getEstimationFinancials = async (investmentId: string) => {
    const response = await httpClient.get<{ data: any }>(`/investments/${investmentId}/estimation`);
    return response.data;
  };

  getHistoricalFinancials = async (investmentId: string) => {
    const response = await httpClient.get<{ data: any }>(`/investments/${investmentId}/historical`);
    return response.data;
  };

  update = async (id: string, payload: UpdateInvestmentParams) => {
    const response = await httpClient.patch<UpdateInvestmentParams, { data: InvestmentDTO }>(
      `/investments/${id}`,
      payload
    );
    return response.data;
  };

  attachProcesses = async (id: string, payload: AttachInvestmentProcessParams) => {
    return httpClient.post<AttachInvestmentProcessParams>(`/investments/${id}/processes`, payload);
  };

  detachProcesses = async (payload: DetachInvestmentProcessParams) => {
    await httpClient.put<DetachInvestmentProcessParams>(`/investment-processes`, payload);
    return;
  };

  createInvestmentReview = async <T extends { investment_id: string; summary: string }>(
    payload: T
  ): Promise<{ data: InvestmentReview }> => {
    return httpClient.post<T>("/investment-reviews", payload);
  };

  updateInvestmentReview = async <T extends { summary: string }>(
    investmentReviewId: string,
    payload: T
  ): Promise<{ data: InvestmentReview }> => {
    return httpClient.patch<T>(`/investment-reviews/${investmentReviewId}`, payload);
  };
}

export const investmentAPI = new InvestmentAPI();
