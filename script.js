var year = new Date().getFullYear();

var student = {
    student1: {
        name: "Ada Bilgi",
        birthdate: "2012",
        get age() {
            var age = year - this.birthdate;
            return age;
        },
        notes: {
            first: 70,
            second: 70,
            third: 80,
            get average() {
                return (this.first + this.second + this.third) / 3;
            },
        },
    },

    student2: {
        name: "Yiğit Bilgi",
        birthdate: "2010",
        get age() {
            var age = year - this.birthdate;
            return age;
        },
        notes: {
            first: 70,
            second: 70,
            third: 80,
            get average() {
                return (this.first + this.second + this.third) / 3;
            },
            get isPassed() {
                let passnote = 50;
                let message;
                switch (true) {
                    case this.average < passnote:
                        message = "Kaldınız";
                        break;
                    case this.average >= passnote:
                        message = "Geçtiniz";
                        break;
                }
                return message;
            },
        },
    },
};
console.log(student.student2.notes.isPassed);
