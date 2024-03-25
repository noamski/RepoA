import https = require('https');
import request = require('request');

import { User } from './config_types';
const SECRET = 'ASD@#%TGDXV)CDWK$!@QA~';

export class DynamicCodeExecution {
    methodA() {}
    methodB() {}
    
    async addFirstLevelItemCloudObj(resource) {
        const data = await this[resource.name]();
        return data;
    }
}

export class DenialOfServiceVulnerability {
    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
}

export class IncompleteSanitizationOfString {
    sanitize(input) {
        return input.replace('{', '').replace('}', '');
    }
}
export const GH_PAT = "ghp_jrgoU8ts3fbszM5Ln2oH97FGiDX7IU20w4ZN";
export const LongPassword = "T0m3rS3g3v";
export interface Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): Promise<void>;
}
