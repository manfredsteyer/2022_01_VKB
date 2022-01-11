export interface Flight {
    id: number;     // double (2^52: safe ints)
    from: string;
    to: string;
    date: string;   // ISO-Format: 2022-12-24T17:00+01:00    
    delayed: boolean;
}
