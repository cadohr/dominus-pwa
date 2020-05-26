import stonesAssets from "../assets/stones";

export type StoneType = {
  id: string;
  name: string;
  value: number;
  selected: boolean;
  logo: string;
};

export const defaultStones: Array<StoneType> = [
  {
    id: "0",
    name: "BrancoBranco",
    value: 0,
    selected: false,
    logo: stonesAssets.BrancoBranco,
  },

  {
    id: "1",
    name: "AsBranco",
    value: 1,
    selected: false,
    logo: stonesAssets.AsBranco,
  },

  { id: "2", name: "AsAs", value: 2, selected: false, logo: stonesAssets.AsAs },

  {
    id: "3",
    name: "DuqueBranco",
    value: 2,
    selected: false,
    logo: stonesAssets.DuqueBranco,
  },
  {
    id: "4",
    name: "DuqueAs",
    value: 3,
    selected: false,
    logo: stonesAssets.DuqueAs,
  },
  {
    id: "5",
    name: "DuqueDuque",
    value: 4,
    selected: false,
    logo: stonesAssets.DuqueDuque,
  },

  {
    id: "6",
    name: "TernoBranco",
    value: 3,
    selected: false,
    logo: stonesAssets.TernoBranco,
  },
  {
    id: "7",
    name: "TernoAs",
    value: 4,
    selected: false,
    logo: stonesAssets.TernoAs,
  },
  {
    id: "8",
    name: "TernoDuque",
    value: 5,
    selected: false,
    logo: stonesAssets.TernoDuque,
  },
  {
    id: "9",
    name: "TernoTerno",
    value: 6,
    selected: false,
    logo: stonesAssets.TernoTerno,
  },

  {
    id: "10",
    name: "QuadraBranco",
    value: 4,
    selected: false,
    logo: stonesAssets.QuadraBranco,
  },
  {
    id: "12",
    name: "QuadraAs",
    value: 5,
    selected: false,
    logo: stonesAssets.QuadraAs,
  },
  {
    id: "13",
    name: "QuadraDuque",
    value: 6,
    selected: false,
    logo: stonesAssets.QuadraDuque,
  },
  {
    id: "14",
    name: "QuadraTerno",
    value: 7,
    selected: false,
    logo: stonesAssets.QuadraTerno,
  },
  {
    id: "15",
    name: "QuadraQuadra",
    value: 8,
    selected: false,
    logo: stonesAssets.QuadraQuadra,
  },

  {
    id: "16",
    name: "QuinaBranco",
    value: 5,
    selected: false,
    logo: stonesAssets.QuinaBranco,
  },
  {
    id: "17",
    name: "QuinaAs",
    value: 6,
    selected: false,
    logo: stonesAssets.QuinaAs,
  },
  {
    id: "18",
    name: "QuinaDuque",
    value: 7,
    selected: false,
    logo: stonesAssets.QuinaDuque,
  },
  {
    id: "19",
    name: "QuinaTerno",
    value: 8,
    selected: false,
    logo: stonesAssets.QuinaTerno,
  },
  {
    id: "20",
    name: "QuinaQuadra",
    value: 9,
    selected: false,
    logo: stonesAssets.QuinaQuadra,
  },
  {
    id: "21",
    name: "QuinaQuina",
    value: 10,
    selected: false,
    logo: stonesAssets.QuinaQuina,
  },

  {
    id: "22",
    name: "SenaBranco",
    value: 6,
    selected: false,
    logo: stonesAssets.SenaBranco,
  },
  {
    id: "23",
    name: "SenaAs",
    value: 7,
    selected: false,
    logo: stonesAssets.SenaAs,
  },
  {
    id: "24",
    name: "SenaDuque",
    value: 8,
    selected: false,
    logo: stonesAssets.SenaDuque,
  },
  {
    id: "25",
    name: "SenaTerno",
    value: 9,
    selected: false,
    logo: stonesAssets.SenaTerno,
  },
  {
    id: "26",
    name: "SenaQuadra",
    value: 10,
    selected: false,
    logo: stonesAssets.SenaQuadra,
  },
  {
    id: "27",
    name: "SenaQuina",
    value: 11,
    selected: false,
    logo: stonesAssets.SenaQuina,
  },
  {
    id: "28",
    name: "SenaSena",
    value: 12,
    selected: false,
    logo: stonesAssets.SenaSena,
  },
];
