export interface IGenAiExternalApiKey {
  uuid: string;
  name?: string;
  created_at?: string;
  last_used_at?: string;
  enabled?: boolean;
}

export interface IGenAiOpenAIKey extends IGenAiExternalApiKey {
  models?: string[];
}

export interface IGenAiAnthropicKey extends IGenAiExternalApiKey {
  models?: string[];
}

export interface IGenAiExternalApiKeyCreateRequest {
  api_key: string;
  name?: string;
}

export interface IGenAiExternalApiKeyUpdateRequest {
  name?: string;
  enabled?: boolean;
  api_key?: string;
} 