export interface oAuthResponse {
  access_token: string;
  token_type: "bearer";
  expires_in: string;
  refresh_token: string;
  ref: {
    type: "app";
    id: string;
  };
}

export interface PodioFileResponse {
  mimetype: "application/pdf";
  perma_link: null;
  hosted_by: "podio";
  replaces: [];
  description: null;
  hosted_by_humanized_name: "Podio";
  presence: null;
  created_via: {
    url: null;
    auth_client_id: 46444;
    display: true;
    name: "Integracion podio";
    id: 46444;
  };
  created_by: {
    user_id: -1;
    name: "OGX";
    url: "https://podio.com/aiesec-in-panama/leaders-lab/apps/ogx";
    type: "app";
    image: null;
    avatar_type: "icon";
    avatar: -1;
    id: 26985385;
    avatar_id: 123;
    last_seen_on: null;
  };
  thumbnail_link: null;
  created_on: string;
  link: string;
  file_id: number;
  rights: ["delete", "view", "download", "update"];
  push: null;
  external_file_id: null;
  link_target: "_blank";
  size: number;
  name: string;
}

export interface IFile extends Blob {
  name: string;
  size: number;
  type: string;
}

export interface PodioItemResponse {
  item_id: number;
}

/* Form */
export interface IAtributos {
  titulo?: string;
  tipo: "button" | "email" | "file" | "password" | "text" | "number" | "submit";
  placeholder: string;
  className?: string;
  info?: string;
  name:
    | "First Name"
    | "Last Name"
    | "Podio Id"
    | "Email"
    | "Password"
    | "Phone"
    | "Universidad"
    | "Background"
    | "Referral"
    | "Edad"
    | "Ingles"
    | "Estudios"
    | "CV";
}

export interface IFormData {
  [k: string]: FormDataEntryValue;
}

export interface IFormItem {
  "First Name": string;
  "Last Name": string;
  "Podio Id": number;
  Email: string;
  Password: string;
  Phone: string;
  Universidad: IUniversidad;
  Background: string;
  Referral: IReferrals;
  Edad: number;
  Ingles: INivelIngles;
  Estudios: IEstudios;
  Programs: Array<string>;
  CV: IFile;
}

/* TYPES */

export type IProgramas = "Pasantia" | "Voluntariado" | "Profesor";

export type IReferrals =
  | "Amig@"
  | "Informaci??n en el campus"
  | "Presentaci??n en aula de clases"
  | "Facebook"
  | "Twitter"
  | "Instagram"
  | "LinkedIn"
  | "Otra red social"
  | "Motor de busqueda"
  | "Evento"
  | "Emails"
  | "Telegram"
  | "Medios (Revista, TV, Peri??dico o radio)"
  | "Otro";

export type INivelIngles =
  | "A1 - Principiante"
  | "A2 - Elemental"
  | "B1 - Intermedio"
  | "B2 - Intermedio Alto"
  | "C1 - Avanzado"
  | "C2 - Nativo";

export type IUniversidad =
  | "Escuela de Arquitectura y Dise??o de America Latina y el Caribe"
  | "ISAE - Metet??| Dari??n"
  | "UDI Universidad del Istmo - Chorrera"
  | "ISAE - La Chorrera| Pm?? Oeste"
  | "Universidad de Panam?? - San Miguelito"
  | "USMA - Col??n"
  | "Universidad Santander"
  | "Universidad Tecnol??gica de Panam?? - Col??n"
  | "Universidad Americana - El Carmen"
  | "Universidad Abierta y a Distancia - Sede Ciudad de Panam??"
  | "UDELAS - Col??n"
  | "Universidad Americana - Campus Ciudad de Panam??"
  | "Universidad Latina - Fac. Ciencias de la Salud"
  | "International University (INTERUNI)"
  | "Universidad Interamericana de Panam?? (UIP)"
  | "Universidad del Arte Ganexa"
  | "UMECIT"
  | "Universidad Latina de Panam?? - Ciudad Capital"
  | "ISAE - Campus Central - Ciudad de Panam??"
  | "Universidad Tecnol??gica de Panam?? - Panam?? Oeste"
  | "UDI Universidad del Istmo - Col??n"
  | "INCAE - Business School"
  | "Universidad Hispoamericana de Panam??"
  | "Universidad de Alta Direcci??n"
  | "ADEN International Business School - Ciudad de Panam??"
  | "Universidad Panamericana (UPAM)"
  | "Universidad Mar??tima Internacional de Panam??"
  | "Universidad Cristiana de Panam??"
  | "Universidad Internacional de Ciencia y Tecnolog??a UNICYT"
  | "ULACEX"
  | "No estudiando actualmente - USMA"
  | "USMA - Campus Ciudad de Panam??"
  | "No estudiando actualmente - UTP"
  | "Universidad Tecnol??gica de Panam?? - Sede Ciudad de Panam??"
  | "Otro"
  | "QLU Panama - University of Louisville"
  | "Universidad de Panam?? - Panam?? Oeste"
  | "Universidad de Panam?? - Col??n"
  | "Universidad de San Francisco de Panam??"
  | "Universidad de Panam?? - Panam?? Este"
  | "UDI Universidad del Istmo - Campus Ciudad de Panam??"
  | "ISTHMUS"
  | "No estudiando actualmente - UDI"
  | "Universidad de Panam?? - Sede Ciudad de Panam??"
  | "UDI Universidad del Istmo - Panam??"
  | "EAFIT"
  | "Universidad Americana - Pm??. Oeste"
  | "Universidad de Panam?? - Dari??n"
  | "UDELAS - Campus Ciudad de Panam??"
  | "Florida State University"
  | "UDI Universidad del Istmo - Los Pueblos"
  | "Universidad Americana - Los Pueblos"
  | "Columbus University"
  | "No estudiando actualmente - Universidad de Panam??"
  | "UDI Universidad del Istmo - Sede Veraguas"
  | "Universidad de Panam?? - Azuero"
  | "Universidad Tecnol??gica de Panam?? - Sede Veraguas"
  | "Universidad Abierta y a Distancia - Sede Santiago"
  | "USMA - Sede Veraguas"
  | "UDELAS - Sede Veraguas"
  | "Universidad Latina de Panam?? - Sede Veraguas"
  | "Universidad de Panam?? | Centro Regional de Azuero"
  | "UDELAS - Azuero"
  | "Universidad Tecnol??gica de Panam?? - Azuero"
  | "No estudiando actualmente - Veraguas"
  | "Universidad Tecnol??gica Oteima - Santiago"
  | "UDELAS - Veraguas"
  | "ISAE - Santiago| Veraguas"
  | "Universidad de Panam?? - Veraguas"
  | "Universidad de Panam?? - Los Santos"
  | "Universidad Latina - Chitr??"
  | "Universidad Abierta y a Distancia - Sede Penonom??"
  | "No estudiando actualmente - Cocl??"
  | "Universidad Latina de Panam?? - Sede Chitr??"
  | "UDI Universidad del Istmo - Chitr??"
  | "ISAE - Chitr??| Herrera"
  | "USMA - Chitr??"
  | "UDI Universidad del Istmo - Las Tablas"
  | "UDELAS - Cocl??"
  | "Universidad de Panam?? - Cocl??"
  | "Universidad Tecnol??gica de Panam?? - Cocl??"
  | "ISAE - Penonom??| Cocl??"
  | "Universidad Latina - Penonom??"
  | "Universidad Tecnol??gica de Panam?? - Chiriqu??"
  | "No estudiando actualmente - Chiriqui"
  | "Universidad de Panam?? - Bocas del Toro"
  | "Universidad Tecnol??gica de Panam?? - Bocas del Toro"
  | "UDELAS - Chiriqu??"
  | "UDI Universidad del Istmo - Changuinola"
  | "USMA - Chiriqu??"
  | "Universidad Autonoma de Chiriqu?? (UNACHI)"
  | "Universidad de Cartago"
  | "UDI Universidad del Istmo - Chiriqu??"
  | "ISAE - Changuinola| Bocas del Toro"
  | "ISAE - David| Chiriqu??"
  | "Universidad Latina - Chiriqu??"
  | "Universidad Tecnol??gica Oteima - Chiriqu??";

export type ISegmentacion =
  | "Chiriqu??"
  | "Cocl??"
  | "Santiago"
  | "UP"
  | "UTP"
  | "VE";

export type IEstudios =
  | "Bachiller"
  | "T??cnico"
  | "Pregrado (cursando)"
  | "Pregrado (graduado)"
  | "Postgrado"
  | "Doctorado/Maestria";

export type IBackgrounds =
  | "Contabilidad"
  | "Ingenier??a Aeroespacial"
  | "Agricultura"
  | "Antropolog??a"
  | "Arqueolog??a"
  | "Arquitectura"
  | "Arte"
  | "Seguros"
  | "Auditor??as"
  | "Ingenier??a automotriz"
  | "Banca"
  | "Bioingenier??a"
  | "Biolog??a"
  | "Ciencia Biom??dica"
  | "Administraci??n de Empresas"
  | "Ingenier??a Qu??mica"
  | "Qu??mica"
  | "Ingenier??a civil"
  | "Comunicaci??n y periodismo"
  | "Ingenier??a Inform??tica"
  | "Ciencias de la Computaci??n"
  | "Dise??o"
  | "Ciencias de la Tierra"
  | "Ecolog??a"
  | "Ciencias econ??micas"
  | "Educaci??n"
  | "Ingenier??a el??ctrica"
  | "Ingenier??a electr??nica"
  | "Emprendimiento"
  | "Ingenier??a Ambiental"
  | "Finanzas"
  | "Geograf??a"
  | "Dise??o gr??fico"
  | "Ciencia de la salud"
  | "Historia"
  | "Recursos humanos"
  | "Dise??o industrial"
  | "Ingenier??a Industrial"
  | "Relaciones Internacionales"
  | "Comercio internacional"
  | "Idiomas"
  | "Ley"
  | "Ling????stica"
  | "Literatura"
  | "Log??stica"
  | "Marketing"
  | "Ingenier??a de materiales"
  | "Matem??ticas"
  | "Ingenier??a Mec??nica"
  | "Artes de los medios"
  | "Medicina"
  | "Ciencias militares"
  | "M??sica"
  | "Nanotecnolog??a"
  | "Enfermer??a"
  | "Nutrici??n"
  | "Ingenier??a del Petr??leo"
  | "Filosof??a"
  | "F??sica"
  | "Ciencias Pol??ticas"
  | "Psicolog??a"
  | "Administraci??n P??blica"
  | "Relaciones p??blicas"
  | "Religi??n"
  | "Trabajo Social"
  | "Sociolog??a"
  | "Ingenier??a o Desarrollo de software"
  | "Deportes"
  | "Estad??sticas"
  | "Ingenier??a en Sistemas y Computaci??n"
  | "Ingenier??a en Telecomunicaciones"
  | "Teatro"
  | "Turismo y gesti??n hotelera"
  | "Veterinaria"
  | "Otro";
