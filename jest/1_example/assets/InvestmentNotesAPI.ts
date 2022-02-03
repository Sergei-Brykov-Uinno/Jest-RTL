import { httpClient } from "../util/http";
import {
  InvestmentMediaResponse,
  InvestmentNoteDTO,
  InvestmentNoteUpdateResponse,
} from "../store/models/InvestmentNotes";
import { AxiosResponse } from "axios";

class InvestmentNotesAPI {
  createMedia = async (payload: FormData): Promise<{ data: InvestmentMediaResponse }> => {
    return httpClient.upload("/media?include=media", payload);
  };

  removeMedia = async (mediaId: string): Promise<AxiosResponse> => {
    return httpClient.delete(`/media/${mediaId}`);
  };

  createNote = async (payload: InvestmentNoteDTO): Promise<InvestmentMediaResponse> => {
    const response = await httpClient.post("/investment-notes", payload);
    return response.data;
  };

  updateNote = async (noteId: string, payload: InvestmentNoteDTO): Promise<{ data: InvestmentNoteUpdateResponse }> => {
    return httpClient.patch(`/investment-notes/${noteId}`, payload);
  };

  removeNote = async (noteId: string): Promise<void> => {
    httpClient.delete(`/investment-notes/${noteId}`);
  };
}

export const investmentNotesAPI = new InvestmentNotesAPI();
