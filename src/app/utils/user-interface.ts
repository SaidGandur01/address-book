export interface Name {
  title: string;
  first: string;
  last:  string;
}

export interface Login {
  uuid:     string;
  username: string;
  password: string;
  salt:     string;
  md5:      string;
  sha1:     string;
  sha256:   string;
}

export interface Dob {
  date: Date;
  age:  number;
}

export interface ID {
  name:  string;
  value: string;
}

export interface Picture {
  large:     string;
  medium:    string;
  thumbnail: string;
}

export interface Location {
  street: { number: number, name: string };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: { latitude: string, longitude: string },
  timezone: { offset: string, description: string }
}

export interface User {
  gender:     string;
  name:       Name;
  location:   Location;
  email:      string;
  login:      Login;
  dob:        Dob;
  registered: Dob;
  phone:      string;
  cell:       string;
  id:         ID;
  picture:    Picture;
  nat:        string;
}

export interface Info {
  seed:    string;
  results: number;
  page:    number;
  version: string;
}

export interface IUserResponse {
  results: User[];
  info:    Info;
}
