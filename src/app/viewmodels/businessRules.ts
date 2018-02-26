
export interface BusinessRule {
    Name: string;
    MaxWeight: string;
    MinVolume: string;
    MaxVolume: string;
    AcceptsFragile: string;
}

export interface RootObject {
    businessRules: BusinessRule[];
}

export interface RealBusinessRule {
    Name: string;
    MaxWeight: number;
    MinVolume: number;
    MaxVolume: number;
    AcceptsFragile: boolean;
}

export interface RealRootObject {
    businessRules: RealBusinessRule[];
}
