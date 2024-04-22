import {Feedback} from "./Feedback";

class ResultData {
    public static UserGroupName: string;
    public static Address: string;
    public static District: string;
    public static BibliothekRating: string;
    public static ClinicRating: string;
    public static DisParkRating: string;
    public static DoctorRating: string;
    public static KinderGartenRating: string;
    public static MuseumRating: string;
    public static MusikSchoolRating: string;
    public static ParkRating: string;
    public static PoliceStationRating: string;
    public static PoolRating: string;
    public static PublicTransportRating: string;
    public static SchoolRating: string;
    public static UniversityRating: string;
    public static AverageRating: string;
    public static Lines: Array<string> = [];
    public static LinesDistance: Array<string> = [];
    public static ParkNames: Array<string> = [];
    public static ParkDrinks: Array<boolean> = [];
    public static ParkDogs: Array<boolean> = [];
    public static ParkPlay: Array<boolean> = [];
    public static ParkDistances: Array<number> = [];

    public static BibliothekCount: number = 0;
    public static ClinicCount: number = 0;
    public static DisParkCount: number = 0;
    public static DoctorsCount: number = 0;
    public static KindergartdensCount: number = 0;
    public static MuseumsCount: number = 0;
    public static MusicSchoolsCount: number = 0;
    public static ParksCount: number = 0;
    public static PoliceStationsCount: number = 0;
    public static PoolsCount: number = 0;
    public static StopsCount: number = 0;
    public static SchoolsCount: number = 0;
    public static UniversitiesCount: number = 0;

    public static Feedbacks: Array<Feedback> = [];
}

export default ResultData;