import { Bike } from "./types";

export const bikes: Bike[] = [
  {
    id: "1",
    name: "City Cruiser",
    category: "regular",
    price: 599,
    rating: 4,
    description:
      "Perfect urban companion for daily commutes. Lightweight aluminum frame with comfortable geometry for city riding.",
    features: ["Aluminum frame", "7-speed Shimano", "Front basket ready", "LED lights included"],
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Mountain Explorer",
    category: "regular",
    price: 899,
    rating: 5,
    description:
      "Tackle any trail with confidence. Robust construction with front suspension for smooth off-road adventures.",
    features: ["Steel frame", "21-speed gears", "Front suspension", "Disc brakes"],
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "Road Master",
    category: "regular",
    price: 1299,
    rating: 4,
    description: "Aerodynamic design built for speed. Carbon fiber components for maximum performance on paved roads.",
    features: ["Carbon fork", "18-speed", "Drop handlebars", "Clipless pedals ready"],
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "Himiway",
    category: "electric",
    price: 2199,
    rating: 5,
    description:
      "Silent power meets elegant design. 500W motor with intelligent pedal assist for effortless commuting.",
    features: ["500W motor", "60km range", "Removable battery", "LCD display"],
    image:
      "https://images.unsplash.com/photo-1631068191810-a27cf9b3716f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "EcoRide Pro",
    category: "electric",
    price: 2899,
    rating: 4,
    description:
      "Premium electric bike with advanced features. Long-range battery and multiple riding modes for versatility.",
    features: ["750W motor", "80km range", "5 assist levels", "Integrated lights"],
    image:
      "https://images.unsplash.com/photo-1624243519828-52a0f2c88af3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Himiway Bolt",
    category: "electric",
    price: 3499,
    rating: 5,
    description: "High-performance electric mountain bike. Conquer hills and trails with powerful motor assistance.",
    features: ["1000W motor", "100km range", "Full suspension", "Hydraulic brakes"],
    image:
      "https://images.unsplash.com/photo-1618987688327-dc0b28888fe4?q=80&w=1803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "Glide X1",
    category: "selfPropelled",
    price: 1899,
    rating: 4,
    description: "Throttle-controlled electric bike. No pedaling required - just twist and go for pure convenience.",
    features: ["Throttle control", "45km range", "Step-through frame", "USB charging"],
    image:
      "https://images.unsplash.com/photo-1621354770480-de9a0313a30f?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    name: "Urban Moto",
    category: "selfPropelled",
    price: 2499,
    rating: 5,
    description:
      "Scooter-style electric bike. Comfortable seating position with powerful acceleration for city travel.",
    features: ["800W motor", "55km range", "Comfort seat", "Digital speedometer"],
    image:
      "https://images.unsplash.com/photo-1684938165113-de976f24f6d6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    name: "Velocity Max",
    category: "selfPropelled",
    price: 3299,
    rating: 4,
    description: "Premium throttle-only electric bike. Maximum power and range for the ultimate pedal-free experience.",
    features: ["1200W motor", "70km range", "Dual suspension", "Anti-theft alarm"],
    image:
      "https://images.unsplash.com/photo-1623993308369-017255b87e2c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
