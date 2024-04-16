declare function buildError(error: any): {
    code: number;
    message: string;
    details: string[];
} | {
    code: any;
    message: any;
    details?: undefined;
};
export default buildError;
//# sourceMappingURL=build-error.d.ts.map