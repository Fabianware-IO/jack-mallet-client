export interface Version {
    version: string;
}

export interface Data {
  _id: {
    '$oid': string
  };
  name: string;
  email: string;
}

export interface SubscriberQ {
  _id: {
    '$oid': string
  };
  username: string;
  password: string;
  registrationDomain: string;
  outboundProxy: string;
  registrationInterval: string;
}
