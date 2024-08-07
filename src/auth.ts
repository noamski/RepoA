import https = require('https');
import request = require('request');

import { User } from './config_types';

const SNYK_TOKEN="e82ba856-2aa2-428d-8987-f20b03556e12";
export interface Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): Promise<void>;
}
