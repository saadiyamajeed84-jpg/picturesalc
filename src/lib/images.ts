// Central map of official ACE Language Centre photos used across the site.
// All paths point to real photographs in /public/gallery (no stock / AI images).

export const img = {
  // Hero (portrait fits the tall hero card nicely)
  heroStudents: "/gallery/ace-004.jpg",
  // Faint landscape background behind the hero
  heroBg: "/gallery/ace-001.jpg",
  // Study in Malaysia campus feature (landscape)
  studyMalaysia: "/gallery/ace-002.jpg",
  // Classroom feature (landscape) — homepage + about
  classroom: "/gallery/ace-011.jpg",
  aboutClassroom: "/gallery/ace-016.jpg",
  // AI / technology learning (landscape classroom)
  aiLearning: "/gallery/ace-013.jpg",
  // Success story portrait
  successStudent: "/gallery/ace-031.jpg",
  // Visa / student services feature (portrait student)
  visaStudent: "/gallery/ace-032.jpg",
  // Facilities & accommodation (landscape)
  facilities: "/gallery/ace-014.jpg",
  accommodation: "/gallery/ace-015.jpg",
  // Homepage gallery preview strip
  galleryPreview: [
    { src: "/gallery/ace-011.jpg", label: "Classrooms" },
    { src: "/gallery/ace-031.jpg", label: "Our students" },
    { src: "/gallery/ace-086.jpg", label: "Graduation" },
    { src: "/gallery/ace-014.jpg", label: "Facilities" },
  ],
} as const;

// Default Open Graph / social share image
export const ogImage = "/gallery/ace-002.jpg";
