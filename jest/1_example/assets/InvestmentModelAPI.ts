import { httpClient } from "../util/http";
import { AxiosResponse } from "axios";

class InvestmentModelAPI {
  // attachedFile = async <T extends { uuids: string[]; investment_id: string }>(payload: T): Promise<AxiosResponse> => {
  //   return httpClient.post("/investment-reviews/models", payload);
  // };

  updateFile = async (investmentReviewId: string, fileUuid: string): Promise<AxiosResponse> => {
    return httpClient.put(`/investment-reviews/${investmentReviewId}/models`, { uuids: [fileUuid] });
  };
}

export const investmentModelAPI = new InvestmentModelAPI();
