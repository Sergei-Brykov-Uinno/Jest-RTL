import { action, computed, makeAutoObservable, observable, runInAction } from "mobx";
import { investmentProcessAPI } from "../api/InvestmentProcessAPI";
import { formatDate } from "../util/dateFormatter";
import { InvestmentProcessItemStore } from "./process-item/InvestmentProcessItemStore";
import { InvestmentDTO } from "./models/Investment";
import { InvestmentProcessDTO } from "./models/InvestmentProcess";
import { Media } from "./models/Media";
import { uploadFileAPI } from "../api/UploadFileAPI";
import { toast } from "react-toastify";

export class InvestmentProcessStore {
  id: string;
  processId: string;
  name: string;
  description: string;
  isDefault: boolean;
  active: boolean;
  score: number | null;
  relevance: number | null;
  valuation: number | null;
  comment: string | null;
  updatedAt: string;
  authorName: string;
  factors: InvestmentProcessItemStore[] = [];
  editField: "comment" | null = null;
  pathToItem = null;

  media: Media | null;

  constructor(investmentProcess: InvestmentProcessDTO, investment: InvestmentDTO | null) {
    this.id = investmentProcess.id;
    this.processId = investmentProcess.process_id;
    this.name = investmentProcess.name;
    this.description = investmentProcess.description;
    this.isDefault = investmentProcess.is_default;
    this.score = investmentProcess.score;
    this.relevance = investmentProcess.relevance;
    this.valuation = investmentProcess.valuation;
    this.comment = investmentProcess.comment;
    this.updatedAt = formatDate(investmentProcess.updated_at);
    this.authorName = investmentProcess.user.data.username;
    this.media = investmentProcess.media || null;
    this.active = investmentProcess.is_active;

    investmentProcess.factors?.data.forEach((factor, factorIndex) => {
      this.factors.push(new InvestmentProcessItemStore(factor, investment, [factorIndex]));
    });

    makeAutoObservable(this, {
      factors: observable.deep,
      media: observable.deep,
      mediaFileUrl: computed,
      mediaFileName: computed,
      update: action.bound,
      setEditState: action.bound,
      uploadMedia: action.bound,
      deleteMedia: action.bound,
      attachFile: action.bound,
    });
  }

  async update(key: "comment", value: string) {
    /**
     * This copy is needed to reset changes on updating error;
     */
    const investmentProcessShallowCopy = { ...this };
    const body = { [key]: value };
    try {
      runInAction(() => {
        Object.assign(this, body, { updatedAt: formatDate(new Date().toISOString()) });
        this.setEditState(key);
      });
      await investmentProcessAPI.update(this.id, { [key]: value });
    } catch (e) {
      runInAction(() => {
        Object.assign(this, investmentProcessShallowCopy, { editField: null });
      });
    }
  }

  async attachFile(uuid: string) {
    const body = { uuids: [uuid] };
    const { media = null } = await investmentProcessAPI.update(this.id, body);
    runInAction(() => {
      this.media = media;
    });
  }

  setEditState(key: "comment") {
    this.editField = this.editField === key ? null : key;
  }

  get mediaFileUrl() {
    return this.media?.data.url;
  }

  get mediaFileName() {
    return this.media?.data.file_name;
  }

  async uploadMedia(file: File) {
    const formData = new FormData();
    formData.append("collection", "process");
    formData.append("file", file);

    const uploadFileResponse = await uploadFileAPI.createMedia(formData);
    const uuid = uploadFileResponse.data.uuid as string;
    console.log("HERE", uuid);
    await this.attachFile(uuid);
  }

  async deleteMedia() {
    if (this.media?.data.id) {
      await uploadFileAPI.removeMedia(this.media?.data.id);
    } else {
      toast.warn("The media file has already been deleted");
    }
    runInAction(() => {
      this.media = null;
    });
  }
}
