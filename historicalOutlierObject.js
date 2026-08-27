const historicalOutliers = [
    {
        image: "assets/bill-gates.jpg",
        blurb: "Bill Gates started programming at an early age for his time due to school club investment in a personal computer. Through a string of opportunity, by the time he was an adult, he had more practice coding than perhaps anyone else his age. This allowed him to take advantage of the personal computing revolution in the 1970s by writing a BASIC interpreter for Altair and eventually Windows. Today, he is the 19th richest man alive.",
        name: "Bill Gates",
        outlier: {
            birthYear: years.find(y => y.year === 1955),
            randomStats: new Map([
                ["month", 9],
                ["family-class", 19],
                ["tech-access", 20],
                ["cultural-background", 15],
                ["education", 18],
                ["iq", 19],
                ["luck", 18]
            ]),
            chosenStats: new Map([
                ["technology", 10],
                ["industry", 7],
                ["legal", 5],
                ["music", 5],
                ["science", 7],
                ["athleticism", 5],
                ["creativity", 8],
                ["discipline", 9],
                ["persistence", 10],
                ["social", 6]
            ])
        }
    },

    {
        image: "assets/steve-jobs.jpg",
        blurb: "Steve Jobs was a creative entrepreneur. He took advantage of the computing revolution in the 1970s by creating the Apple I personal computer, and later the iPhone and many apple products you are familiar with.",
        name: "Steve Jobs",
        outlier: {
            birthYear: years.find(y => y.year === 1955),
            randomStats: new Map([
                ["month", 1],
                ["family-class", 12],
                ["tech-access", 18],
                ["cultural-background", 14],
                ["education", 12],
                ["iq", 17],
                ["luck", 18]
            ]),
            chosenStats: new Map([
                ["technology", 9],
                ["industry", 9],
                ["legal", 5],
                ["music", 5],
                ["science", 6],
                ["athleticism", 5],
                ["creativity", 10],
                ["discipline", 8],
                ["persistence", 10],
                ["social", 9]
            ])
        }
    },

    {
        image: "assets/chris-langan.webp",
        blurb: "Chris Langan is a man often referred to as the smartest man in the United States, and even sometimes on the planet. This is due to an extraordinarily high score on an IQ test. However, despite his high IQ, Langan's family was of a lower class and thus Langan struggled with a mindset that is reinforced by lower class parenting. He dropped out of college twice, and worked as rancher for most of his life. Langan now promotes a bogus theory called the CTMU and promotes conspiracy theories around why the government is suppressing it, including that the US government did 9/11 to supress the CTMU.",
        name: "Chris Langan",
        outlier: {
            birthYear: years.find(y => y.year === 1955),
            randomStats: new Map([
                ["month", 2],
                ["family-class", 3],
                ["tech-access", 3],
                ["cultural-background", 2],
                ["education", 3],
                ["iq", 20],
                ["luck", 5]
            ]),
            chosenStats: new Map([
                ["technology", 5],
                ["industry", 8],
                ["legal", 5],
                ["music", 5],
                ["science", 19],
                ["athleticism", 9],
                ["creativity", 10],
                ["discipline", 10],
                ["persistence", 3],
                ["social", 3]
            ])
        }
    },

    {
        image: "assets/j-robert-oppenheimer.jpg",
        blurb: "A physicist with a troubled youth who through his skill and social skills that led him to become the head of the Manhattan Project.",
        name: "J. Robert Oppenheimer",
        outlier: {
            birthYear: years.find(y => y.year === 1900),
            randomStats: new Map([
                ["month", 3],
                ["family-class", 15],
                ["tech-access", 5],
                ["cultural-background", 15],
                ["education", 18],
                ["iq", 16],
                ["luck", 19]
            ]),
            chosenStats: new Map([
                ["technology", 6],
                ["industry", 5],
                ["legal", 2],
                ["music", 3],
                ["science", 12],
                ["athleticism", 5],
                ["creativity", 5],
                ["discipline", 10],
                ["persistence", 10],
                ["social", 15]
            ])
        }
    },

    {
        image: "assets/wayne-gretzky.jpg",
        blurb: "Wayne Gretzky is one of the greatest hockey players of all time. He was greatly advantaged in the Canadian hockey system due to his January birthday, as Gladwell describes in Chapter 1.",
        name: "Wayne Gretzky",
        outlier: {
            birthYear: years.find(y => y.year === 1955),
            randomStats: new Map([
                ["month", 0],
                ["family-class", 10],
                ["tech-access", 8],
                ["cultural-background", 7],
                ["education", 8],
                ["iq", 15],
                ["luck", 15]
            ]),
            chosenStats: new Map([
                ["technology", 2],
                ["industry", 3],
                ["legal", 2],
                ["music", 4],
                ["science", 5],
                ["athleticism", 17],
                ["creativity", 10],
                ["discipline", 9],
                ["persistence", 9],
                ["social", 10]
            ])
        }
    },

    {
        image: "assets/paul-mccartney.jpg",
        blurb: "Paul McCartney is one of the two surviving members of the Beatles. The Beatles as a band gained experience in live performance while playing in Hamburg, Germany. They became the biggest band in the world, sparking the British Invasion which refers to a period in the 1960s when British bands started to become popular in the USA.",
        name: "Paul McCartney",
        outlier: {
            birthYear: years.find(y => y.year === 1940),
            randomStats: new Map([
                ["month", 5],
                ["family-class", 11],
                ["tech-access", 3],
                ["cultural-background", 20],
                ["education", 17],
                ["iq", 18],
                ["luck", 16]
            ]),
            chosenStats: new Map([
                ["technology", 5],
                ["industry", 5],
                ["legal", 5],
                ["music", 10],
                ["science", 5],
                ["athleticism", 5],
                ["creativity", 10],
                ["discipline", 10],
                ["persistence", 9],
                ["social", 8]
            ])
        }
    },

    {
        image: "assets/joe-flom.jpg",
        blurb: "A lawyer who was originally discriminated against due to his Jewish heritage. Working at a second-rate law firm, Flom had to do work considered too 'dirty' for mainstream firms. This 'dirty' work of takeovers and litigation became advantageous later on, making him an expert in the preeminent legal field of his time.",
        name: "Joe Flom",
        outlier: {
            birthYear: years.find(y => y.year === 1920),
            randomStats: new Map([
                ["month", 11],
                ["family-class", 5],
                ["tech-access", 4],
                ["cultural-background", 20],
                ["education", 9],
                ["iq", 15],
                ["luck", 15]
            ]),
            chosenStats: new Map([
                ["technology", 3],
                ["industry", 5],
                ["legal", 12],
                ["music", 4],
                ["science", 2],
                ["athleticism", 5],
                ["creativity", 9],
                ["discipline", 12],
                ["persistence", 10],
                ["social", 10]
            ])
        }
    },

    {
        image: "assets/bill-joy.jpg",
        blurb: "Bill Joy, was an almost accidental computer programmer. Due to the vast access to computers at the University of Michigan, Joy fell in love with programming. Due to access to computers there and at Berkeley he had thousands of hours of programming by the point he was asked to rewrite UNIX. He later founded Sun Microsystems, which wrote many important programs like the Java language.",
        name: "Bill Joy",
        outlier: {
            birthYear: years.find(y => y.year === 1955),
            randomStats: new Map([
                ["month", 10],
                ["family-class", 14],
                ["tech-access", 20],
                ["cultural-background", 15],
                ["education", 19],
                ["iq", 19],
                ["luck", 19]
            ]),
            chosenStats: new Map([
                ["technology", 10],
                ["industry", 6],
                ["legal", 5],
                ["music", 5],
                ["science", 9],
                ["athleticism", 5],
                ["creativity", 9],
                ["discipline", 10],
                ["persistence", 10],
                ["social", 6]
            ])
        }
    }
];