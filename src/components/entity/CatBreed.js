export default class CatBreed {

    static persian = new CatBreed("PERSIAN");
    static sphynx = new CatBreed("SPHYNX");
    static ragdoll = new CatBreed("RAGDOLL");
    static mainCoon = new CatBreed("MAIN_COON");
    static abyssinian = new CatBreed("ABYSSINIAN");
    static siamese = new CatBreed("SIAMESE");
    static birman = new CatBreed("BIRMAN");
    static scottishFold = new CatBreed("SCOTTISH_FOLD");
    static bengal = new CatBreed("BENGAL");
    static munchkin = new CatBreed("MUNCHKIN");
    static ragamuffin = new CatBreed("RAGAMUFFIN");
    static norwegian = new CatBreed("NORWEGIAN");
    static other = new CatBreed("OTHER");

    constructor(value) {
        this.value = value
    }


    displayName() {
        switch(this.value) {
            case "PERSIAN":
                return "Persan";
            case "SPHYNX":
                return "Sphynx";
            case "RAGDOLL":
                return "Ragdoll";
            case "MAIN_COON":
                return "Main Coon";
            case "ABYSSINIAN":
                return "Abyssin";
            case "SIAMESE":
                return "Siamois";
            case "BIRMAN":
                return "Sacré de Birmanie";
            case "SCOTTISH_FOLD":
                return "Scottish Fold";
            case "BENGAL":
                return "Bengal";
            case "MUNCHKIN":
                return "Munchkin";
            case "RAGAMUFFIN":
                return "Ragamuffin";
            case "NORWEGIAN":
                return "Norvégien";
            default:
                return "Autre"
        }
    }
}