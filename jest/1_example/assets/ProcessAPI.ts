import { ProcessDTOModel, SwitchActiveRequest, CreateProcessRequest } from "../store/models/Process";
import { Process } from "../store/process/Process";
import { httpClient } from "../util/http";

export type UpdateProcessParams = Partial<Pick<Process, "name" | "description" | "active">>;

const getActiveProcesses = async () => {
  const response = await httpClient.get<{ data: ProcessDTOModel[] }>("/processes?withCount=investmentReviews");

  return response.data;
};

const getProcessDetails = async (processId: string) => {
  const response = await httpClient.get<{ data: ProcessDTOModel }>(
    `/processes/${processId}?include=factors.user,factors.checklists.questions`
  );
  return response.data;
};
const getTemplateDetails = async (templateId: string) => {
  const response = await httpClient.get<{ data: ProcessDTOModel }>(
    `/processes-templates/${templateId}?include=factors.user,factors.checklists.questions`
  );

  return response.data;
};

const updateProcess = async (processId: string, body: UpdateProcessParams) => {
  const response = await httpClient.patch<UpdateProcessParams, { data: ProcessDTOModel }>(
    `/processes/${processId}`,
    body
  );

  return response.data;
};

const deleteProcess = async (processId: string) => {
  const response = await httpClient.delete(`/processes/${processId}`);
  return response;
};

const createProcess = async (payload: CreateProcessRequest) => {
  const response = await httpClient.post<CreateProcessRequest, { data: ProcessDTOModel }>(`/processes`, payload);
  return response.data;
};

const switchActivity = async (payload: SwitchActiveRequest) => {
  const response = await httpClient.post<SwitchActiveRequest, any>(`/processes/switch-activity`, payload);
  return response;
};

const addFactors = async (processId: string, payload: { factor_ids: string[] }) => {
  const response = await httpClient.post<{ factor_ids: string[] }, { data: ProcessDTOModel }>(
    `/processes/${processId}/factors`,
    payload
  );

  return response.data;
};

const removeFactors = async (processId: string, payload: { factor_ids: string[] }) => {
  const response = await httpClient.put<{ factor_ids: string[] }, { data: ProcessDTOModel }>(
    `/processes/${processId}/factors`,
    payload
  );

  return response.data;
};

const getAssociatedProcesses = async (processId: string) => {
  const response = await httpClient.get<{ data: ProcessDTOModel[] }>(`processes/${processId}/associated-processes`);
  return response.data;
};

const reorderFactors = async (processId: string, position_factor_ids: { [key: number]: string }) => {
  const payload = { position_factor_ids };
  await httpClient.put(`/processes/${processId}/reorder_factors_positions`, payload);
};

const getTemplates = async () => {
  const response = await httpClient.get<{ data: ProcessDTOModel[] }>("/processes-templates");
  return response.data;
};

const replicateProcess = async (templateId: string) => {
  const response = await httpClient.post<any, { data: ProcessDTOModel }>(`replicates/processes/${templateId}`, {});

  return response.data;
};

export default {
  replicateProcess,
  getTemplates,
  reorderFactors,
  getTemplateDetails,
  getActiveProcesses,
  getProcessDetails,
  updateProcess,
  deleteProcess,
  createProcess,
  switchActivity,
  addFactors,
  removeFactors,
  getAssociatedProcesses,
};
