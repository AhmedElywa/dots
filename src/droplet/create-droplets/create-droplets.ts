import { IResponse, IContext } from '../../types';
import { IDroplet } from '..';

export interface ICreateDropletsApiResponse {
  droplets: IDroplet[];
}

export interface ICreateDropletsApiRequest {
  backups?: boolean;
  image: string | number;
  ipv6?: boolean;
  monitoring?: boolean;
  names: string[];
  private_networking?: boolean;
  region?: string;
  size: string;
  ssh_keys?: Array<string | number>;
  tags?: string[];
  user_data?: string;
  volumes?: string[];
  vpc_uuid?: string;
  with_droplet_agent?: boolean;
}

export type CreateDropletsResponse = IResponse<ICreateDropletsApiResponse>;

export const createDroplets = ({
  httpClient,
}: IContext) => ({
  backups,
  image,
  ipv6,
  monitoring,
  names,
  private_networking,
  region,
  size,
  ssh_keys,
  tags,
  user_data,
  volumes,
  vpc_uuid,
  with_droplet_agent,
}: ICreateDropletsApiRequest): Promise<Readonly<CreateDropletsResponse>> => {
  const url = '/droplets';
  const body = {
    backups,
    image,
    ipv6,
    monitoring,
    names,
    private_networking,
    region,
    size,
    ssh_keys,
    tags,
    user_data,
    volumes,
    vpc_uuid,
    with_droplet_agent,
  };

  return httpClient.post<ICreateDropletsApiResponse>(url, body);
};
