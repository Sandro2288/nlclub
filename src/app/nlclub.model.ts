export class nlclub {
	public id: string;
	public name: string;
	public gruendung: string;
	public headcoach: string;
	public gf: string;
	public sportchef: string;
	public stadion: string;
	public sitzplaetze: string;
	public stehplaetze: string;
	public adresse: string;
	public plz: string;
	public ort: string;
	public email: string;
	public logo: string;
	public photo: string;

	constructor(id: string, name: string, gruendung: string, headcoach: string, gf: string, sportchef: string, stadion: string, sitzplaetze: string, stehplaetze: string, adresse: string, plz: string, ort: string, email: string, logo: string, photo: string) {
    this.id = id;
    this.name = name;
    this.gruendung = gruendung;
    this.headcoach = headcoach;
    this.gf = gf;
    this.sportchef = sportchef;
    this.stadion = stadion;
    this.sitzplaetze = sitzplaetze;
    this.stehplaetze = stehplaetze;
    this.adresse = adresse;
    this.plz = plz;
    this.ort = ort;
    this.email = email;
    this.logo = logo;
    this.photo = photo;
  }
}
