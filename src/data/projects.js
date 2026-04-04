import Chowa from "../assets/images/Chowa.png";
import Jarfallahus from "../assets/images/jarfallahus-desktop.png";
import Todo from "../assets/images/todo.png";
import Musicfestival from "../assets/images/music-festival.png";
import MissionImpossible from "../assets/images/mission-usage-impossible.png";

export const projects = [
  {
    title: "JÄRFÄLLAHUS",
    description: "",
    slug: "jarfallahus",
    legacyId: "1",
    image: Jarfallahus,
    tags: ["Team project"],
    customClass: "blue-background",
    category: "UX/UI",
  },
  {
    title: "CHOWA",
    description: "",
    slug: "chowa",
    legacyId: "2",
    image: Chowa,
    tags: ["Branding"],
    customClass: "green-background",
    category: "UX/UI",
  },
  {
    title: "MISSION USAGE IMPOSSIBLE",
    description: "",
    slug: "mission-usage-impossible",
    legacyId: "5",
    image: MissionImpossible,
    tags: ["React Native"],
    buttonLabel: "Read more →",
    customClass: "gray-background",
    category: "Frontend",
  },
  {
    title: "MUSIC FESTIVAL",
    description: "",
    slug: "music-festival",
    legacyId: "4",
    image: Musicfestival,
    tags: ["API Integration"],
    buttonLabel: "Read more →",
    customClass: "pink-background",
    category: "Frontend",
  },
  {
    title: "TODO",
    description: "",
    slug: "todo",
    legacyId: "3",
    image: Todo,
    tags: ["React + Vite"],
    buttonLabel: "Read more →",
    customClass: "beige-background",
    category: "Frontend",
  },
];
