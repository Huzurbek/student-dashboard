const state=()=>({
    name:'Allayor',
    lessons: {
        lesson_1: {
            picture:[
                "m.jpg","k.jpg"
            ],
            tests:[
                // {
                //     question:"7. Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vazifasi uni ikkiga bo’lib yana birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                //     variants:[
                //         { answerText: 'Jeff ', isCorrect: false},
                //         { answerText: ' Bezos', isCorrect: false},
                //         { answerText: 'Odils', isCorrect: false},
                //         { answerText: 'komil', isCorrect: true},
                //
                //     ]
                // },
                {
                    question:"1  birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"3 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["@Bilmiman","Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"4 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"5  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"6  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"7 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["@Bilmiman","Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"8 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"9  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"10  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                }
            ]
        },
        lesson_2: {
            picture:[
                "m.jpg","k.jpg"
            ],
            tests:[
                {
                    question:"4 Lesson2 qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"5  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"6  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                }
            ]
        },
        lesson_3: {
            picture:[
                "m.jpg","k.jpg"
            ],
            tests:[
                // {
                //     question:"7. Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vazifasi uni ikkiga bo’lib yana birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                //     variants:[
                //         { answerText: 'Jeff ', isCorrect: false},
                //         { answerText: ' Bezos', isCorrect: false},
                //         { answerText: 'Odils', isCorrect: false},
                //         { answerText: 'komil', isCorrect: true},
                //
                //     ]
                // },
                {
                    question:"1  birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"3 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },

            ]
        },
        lesson_4: {
            picture:[
                "m.jpg","k.jpg"
            ],
            tests:[
                {
                    question:"1  Lesson 4 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },
                {
                    question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
                    variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
                },

            ]
        },
    },
    activeLesson: null,
    done: {}

    // lesson1:{
    //     picture:[
    //         "m.jpg","k.jpg"
    //     ],
    //     tests:[
    //         // {
    //         //     question:"7. Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vazifasi uni ikkiga bo’lib yana birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //         //     variants:[
    //         //         { answerText: 'Jeff ', isCorrect: false},
    //         //         { answerText: ' Bezos', isCorrect: false},
    //         //         { answerText: 'Odils', isCorrect: false},
    //         //         { answerText: 'komil', isCorrect: true},
    //         //
    //         //     ]
    //         // },
    //         {
    //             question:"1  birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"3 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"4 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"5  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"6  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         }
    //     ]
    // },
    // lesson2:{
    //     picture:[
    //         "m.jpg","k.jpg"
    //     ],
    //     tests:[
    //         {
    //             question:"1 Lesson2 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"3 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"4 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"5  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"6  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         }
    //     ]
    // },
    // lesson3:{
    //     picture:[
    //         "m.jpg","k.jpg"
    //     ],
    //     tests:[
    //         {
    //             question:"1 Lesson3  birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"2  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"3 birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"4 birlashtirib qo’yadi . Shu tugmani nomini toping ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"5  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         },
    //         {
    //             question:"6  birlashtirib qo’yadi . Shu tugmani nomini toping Panelning sarlavha satrida bir tugma joylashgan bo’lib, bu tugmaning vaz ?",
    //             variants:["Bilmiman","@Hechnima","Nimadur","Vapshe bilmiman"]
    //         }
    //     ]
    // },
})

export default  state