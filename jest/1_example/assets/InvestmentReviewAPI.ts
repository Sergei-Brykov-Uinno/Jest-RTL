import { SharedItemInitialValuesTypes } from "../components/molecules/create-shares-modal/CreateShareModalProps";
import { AttachInvestmentProcessParams, InvestmentReview } from "../store/models/InvestmentReview";
import { httpClient } from "../util/http";

class InvestmentReviewAPI {
  get = async (reviewId: string): Promise<InvestmentReview> => {
    const response = await httpClient.get<{ data: any }>(`/investment-reviews/${reviewId}`);

    return response.data;
  };

  create = async (investment_id: string) => {
    const response = await httpClient.post(`/investment-reviews`, { investment_id });
    return response;
  };

  updateSummaryReview = async <T extends { summary: string }>(
    reviewId: string,
    payload: T
  ): Promise<InvestmentReview> => {
    const response = await httpClient.patch<T>(`/investment-reviews/${reviewId}`, payload);
    return response.data;
  };

  attachProcesses = async (reviewId: string, payload: AttachInvestmentProcessParams) => {
    const response = await httpClient.post<AttachInvestmentProcessParams>(
      `/investment-reviews/${reviewId}/processes?include=investment`,
      payload
    );
    return response.data;
  };

  attachProcessesByProcessItem = async (reviewId: string, payload: AttachInvestmentProcessParams) => {
    return httpClient.post<AttachInvestmentProcessParams>(`/investment-reviews/${reviewId}/process`, payload);
  };
  getEstimationFinancials = async (reviewId: string) => {
    const response = await httpClient.get<{ data: any }>(`/investment-reviews/${reviewId}/estimation`);
    return response.data;
  };

  getHistoricalFinancials = async (reviewId: string) => {
    const response = await httpClient.get<{ data: any }>(`/investment-reviews/${reviewId}/historical`);
    return response.data;
  };

  createSharings = async (payload: SharedItemInitialValuesTypes & { entity_id: string }) => {
    const response = await httpClient.post(`/sharings`, payload);
    return response;
  };
}

export const investmentReviewAPI = new InvestmentReviewAPI();
