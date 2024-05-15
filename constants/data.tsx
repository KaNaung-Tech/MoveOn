import {
  FileIcon,
  GalleryIcon,
  QuestionIcon,
  ReadingIcon,
  UserIcon,
} from "@/assets/icons";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const ACTIVITIES_DATA = [
  {
    icon: <ReadingIcon />,
    title: "Reading",
    subTitle: "Positive Quotes",
    route: "",
  },
  {
    icon: <QuestionIcon />,
    title: "Questions",
    subTitle: "Self-Discovery",
    route: "",
  },
  {
    icon: <GalleryIcon />,
    title: "Activities",
    subTitle: "1 Week Activities",
    route: "",
  },
];

export const Profile_Data = [
  {
    id: 1,
    title: "My Profile",
    icon: <UserIcon />,
    route: "/(user)/profile",
  },
  {
    id: 2,
    title: "My Activities",
    icon: <FileIcon />,
    route: "/(user)/activities",
  },
  {
    id: 3,
    title: "Notification",
    icon: <MaterialCommunityIcons name="bell-ring-outline" size={20} />,
    route: "/(user)/notification",
  },
  {
    id: 4,
    title: "Settings",
    icon: <AntDesign name="setting" size={20} />,
    route: "/(user)/settings",
  },
  {
    id: 5,
    title: "About App",
    icon: <Feather name="alert-circle" size={20} />,
    route: "/(user)/about_app",
  },
];
