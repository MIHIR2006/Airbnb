export interface Photo {
  src: string;
  alt: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Amenity {
  icon: string;
  label: string;
  available: boolean;
}

export interface SleepingArrangement {
  room: string;
  subtitle: string;
  photo: Photo;
}

export interface ReviewCategoryScore {
  label: string;
  icon: string;
  score: number;
}

export interface ReviewTag {
  icon: string;
  label: string;
  count: number;
}

export interface Review {
  id: string;
  author: string;
  authorTenure: string;
  rating: number;
  date: string;
  text: string;
  avatar?: Photo;
  avatarInitial?: string;
  avatarColor?: string;
}

export interface CoHost {
  name: string;
  avatar?: Photo;
  avatarInitial?: string;
  avatarColor?: string;
}

export interface Host {
  name: string;
  yearsHosting: string;
  logo: Photo;
  reviewCount: number;
  rating: number;
  yearsHostingNum: number;
  bio: string[];
  responseRate: string;
  responseTime: string;
  verified: boolean;
  coHosts: CoHost[];
}

export interface ThingsToKnowSection {
  icon: string;
  title: string;
  lines: string[];
  linkLabel: string;
}

export interface PhotoRoom {
  room: string;
  thumbnail: Photo;
  photos: Photo[];
}

export interface NearbyListing {
  id: string;
  title: string;
  price: number;
  rating: number;
  photo: Photo;
  photos?: Photo[];
}

export interface Listing {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  rating: number;
  reviewCount: number;
  guestFavorite: boolean;
  guestFavoriteText: string;
  heroPhotos: Photo[];
  photoTour: PhotoRoom[];
  host: Host;
  highlights: Highlight[];
  descriptionTranslatedNotice: string;
  description: string;
  sleepingArrangements: SleepingArrangement[];
  amenities: Amenity[];
  totalAmenities: number;
  pricePerStay: number;
  currency: string;
  nights: number;
  checkIn: string;
  checkOut: string;
  freeCancellationDate: string;
  defaultGuests: number;
  reviewBreakdown: {
    distribution: { stars: number; percent: number }[];
    categories: ReviewCategoryScore[];
  };
  reviewTags: ReviewTag[];
  reviews: Review[];
  address: string;
  mapNote: string;
  neighbourhoodHighlights: string;
  thingsToKnow: ThingsToKnowSection[];
  nearbyListings: NearbyListing[];
}
