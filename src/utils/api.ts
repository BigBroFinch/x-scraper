import { ApiUtilsHeader } from '@/models';
import * as i from '@/openapi';
export * from './timelineProjection';

export type InitOverridesType = (flag: { [key: string]: any }) => i.InitOverrideFunction;

export const getKwargs = (flag: { [key: string]: any }, additional: { [key: string]: any }): any => {
  const kwargs: { [key: string]: any } = { pathQueryId: flag.queryId };
  if (flag.variables != undefined) {
    kwargs.variables = JSON.stringify({ ...flag.variables, ...additional });
  }
  if (flag.features != undefined) {
    kwargs.features = JSON.stringify(flag.features);
  }
  if (flag.fieldToggles != undefined) {
    kwargs.fieldToggles = JSON.stringify(flag.fieldToggles);
  }
  return kwargs;
};

export const errorCheck = <T>(data: T | undefined, error: i.ErrorResponse[] | undefined): T => {
  if (data == undefined) {
    throw Error(error?.map((e) => e.message).join(', ') ?? 'No data');
  }
  return data;
};

export const buildHeader = (headers: Headers): ApiUtilsHeader => {
  return {
    raw: headers,
    connectionHash: headers.get('x-connection-hash'),
    contentTypeOptions: headers.get('x-content-type-options'),
    frameOptions: headers.get('x-frame-options'),
    rateLimitLimit: Number(headers.get('x-rate-limit-limit') ?? 0),
    rateLimitRemaining: Number(headers.get('x-rate-limit-remaining') ?? 0),
    rateLimitReset: Number(headers.get('x-rate-limit-reset') ?? 0),
    responseTime: Number(headers.get('x-response-time')),
    tfePreserveBody: headers.get('x-tfe-preserve-body') == 'true',
    transactionId: headers.get('x-transaction-id'),
    twitterResponseTags: headers.get('x-twitter-response-tags'),
    xssProtection: Number(headers.get('x-xss-protection')),
  };
};
