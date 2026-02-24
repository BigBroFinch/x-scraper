import { XScraper } from '@/api';
import { promises as fs } from 'fs';
import * as log4js from 'log4js';

export const logger = log4js
  .configure({
    appenders: {
      system: {
        type: 'file',
        filename: 'logs/test.log',
        layout: {
          type: 'pattern',
          pattern: '[%d{hh:mm:ss}] [%p] %m',
        },
      },
      out: {
        type: 'stdout',
        layout: {
          type: 'pattern',
          pattern: '[%d{hh:mm:ss}] [%p] %m',
        },
      },
    },
    categories: {
      default: { appenders: ['system', 'out'], level: 'all' },
    },
  })
  .getLogger('Test');

export type Cookie = {
  name: string;
  domain: string;
  value: string;
};

export const getClient = async () => {
  const api = new XScraper();
  api.setAdditionalApiHeaders({
    'sec-ch-ua-platform': '"Windows"',
  });
  api.setAdditionalApiHeaders({
    'sec-ch-ua-platform': '"Windows"',
  });
  let json: { [key: string]: string } = {};
  try {
    const data = await fs.readFile('cookies.json', 'utf-8');
    const parsed = JSON.parse(data);
    const cookies = parsed as Cookie[];
    json = Object.fromEntries(
      cookies.filter((e) => ['.twitter.com', '.x.com'].includes(e.domain)).map((e) => [e.name, e.value]),
    );
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      console.warn('⚠ 没有找到 cookies.json 文件，测试将自动以降级（Guest 模式）运行，部分基于登录态的接口测试可能不通过（如发推/点赞/取关）。');
      return getGuestClient();
    }
    throw e;
  }
  const client = await api.getClientFromCookies(json);
  return client;
};
export const getGuestClient = async () => {
  const api = new XScraper();
  return await api.getGuestClient();
};
