type Media = {
  file_name: string;
  url: string;
  id: string;
};
export type InvestmentMediaResponse = {
  id: string;
  object: string;
  title: string;
  typed_text: string;
  updated_at: string;
  uuid: string;
  media: {
    data: Media;
  };
};

export type InvestmentNoteDTO = {
  uuids?: string[];
  investment_id?: string;
  investment_review_id: string;
  title: string;
  typed_text?: string;
};

export type InvestmentNoteUpdateResponse = {
  object: string;
  id: string;
  title: string;
  typed_text: string | null;
  updated_at: string;
  media?: {
    data: {
      object: string;
      id: string;
      url: string;
      name: string;
      file_name: string;
      extension: string;
    };
  };
};
