class DataWorker {
    public static AloneCounts: Array<number> = [ 3, 3, 1, 5, 1, 5, 1, 5, 3, 3, 10, 1, 2 ];
    public static StudentCounts: Array<number> = [ 5, 2, 1, 3, 1, 5, 1, 8, 2, 5, 12, 1, 2 ];
    public static YoungCoupleCounts: Array<number> = [ 3, 3, 1, 5, 3, 5, 2, 8, 3, 3, 8, 2, 2 ];
    public static DisabledCounts: Array<number> = [ 3, 5, 5, 5, 2, 5, 2, 8, 3, 1, 8, 2, 1 ];
    public static FamilyCounts: Array<number> = [ 5, 5, 1, 5, 5, 5, 5, 8, 5, 5, 5, 5, 1 ];
    public static PensioneurCounts: Array<number> = [ 5, 5, 5, 8, 2, 5, 1, 8, 5, 3, 8, 2, 1 ];
    public static AloneWeigths: Array<number> = [ 1, 1, 0, 1.5, 0, 0, 0, 1, 1, 0.5, 2, 0, 1 ];
    public static StudentWeigths: Array<number> = [ 1, 2, 0, 1, 0, 1, 0, 1.5, 1, 0.75, 2, 0, 2 ];
    public static YoungCoupleWeigths: Array<number> = [ 1, 0.5, 0, 1, 1, 1, 0.5, 1.5, 1, 1, 2, 0.5, 0.5 ];
    public static DisabledWeigths: Array<number> = [ 2, 0, 2, 2, 0, 0.5, 0, 1.5, 1, 0, 2, 0, 0 ];
    public static FamilyWeigths: Array<number> = [ 1.5, 1, 0, 1.5, 2, 1, 1.5, 2, 1.5, 1, 2, 2, 0.5 ];
    public static PensioneurWeigths: Array<number> = [ 2, 1, 1, 2, 0, 1, 0, 2, 1.5, 0, 2, 0, 0 ];
}

export default DataWorker;