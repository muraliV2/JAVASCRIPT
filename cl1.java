class football {
    constructor(player, team, position) {
        this.player = player;
        this.team = team;
        this.position = position;
    }

    DisplayPosition() {
        console.log(`my name is ${this.player} and playing in ${this.team} team and I am a ${this.position}`);
    }

    Alternate(pol) {
        this.position = this.position + " " + pol;
    }
}

let f1 = new football("Ronaldo", "Man United", "Winger");

f1.DisplayPosition();
f1.Alternate(" & Striker");
f1.DisplayPosition();
