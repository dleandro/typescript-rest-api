type Metadata = {
  id: string;
  private: boolean;
  createdAt: string;
};

type Country = {
  country: string;
  code: string;
  vat: string;
  metadata: Metadata;
};

type JSONBinResponse = {
  record: Country[];
};


export {
    Metadata,
    Country,
    JSONBinResponse
}