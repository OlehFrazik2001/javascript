// function task1(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("1.Прокинутися")
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 1500);
//         }
//     )
// }
//
// function task2(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("2.Помитися");
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 1000);
//         }
//     )
// }
//
// function task3(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("3.Почистити зуби");
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 200);
//         }
//     )
// }
//
// function task4(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("4.Зробити чай")
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 300);
//         }
//     )
// }
//
// function task5(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("5.Поїсти");
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 700);
//         }
//     )
// }
//
// function task6(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("6.Послухати лекцію");
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 1200);
//         }
//     )
// }
//
// function task7(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("7.Зробити дз")
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 1500);
//         }
//     )
// }
//
// function task8(status) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     if (status) {
//                         console.log("8.Лягти спати");
//                         resolve(status);
//                     } else {
//                         reject(status)
//                     }
//                 }
//                 , 150);
//         }
//     )
// }


//  PROMISES

// task1(true)
//     .then((value) => task2(value)
//         .then((value) => task3(value)
//             .then((value) => task4(value)
//                 .then((value) => task5(value)
//                     .then((value) => task6(value)
//                         .then((value) => task7(value)
//                             .then((value) => task8(value)
//                             )
//                         )
//                     )
//                 )
//             )
//         )
//     )
//     .catch(()=> console.error("Щось пішло не по плану"));
//


//   ASYNC

// async function make(status) {
//     try {
//         await task1(true);
//         await task2(true);
//         await task3(true);
//         await task4(status);
//         await task5(true);
//         await task6(true);
//         await task7(true);
//         await task8(true);
//     } catch {
//         console.error("Щось пішло не по плану");
//     }
// }
//
// make(true);
// make(false);


//   CALLBACK

function task1(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("1.Прокинутися")
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1500);
}

function task2(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("2.Помитися");
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}

function task3(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("3.Почистити зуби");
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}

function task4(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("4.Зробити чай")
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}

function task5(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("5.Поїсти");
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}

function task6(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("6.Послухати лекцію");
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}

function task7(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("7.Зробити дз")
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}


function task8(status, callback) {
    setTimeout(() => {
            if (status) {
                console.log("8.Лягти спати");
                callback(null, status)
            } else {
                callback(status, null)
            }
        }
        , 1000);

}


task1(true, (err, status) => {
        if (err) {
            console.log("Щось пішло не по плану");
        } else {
            task2(true, (err, status) => {
                    if (err) {
                        console.log("Щось пішло не по плану");
                    } else {
                        task3(true, (err, status) => {
                                if (err) {
                                    console.log("Щось пішло не по плану");
                                } else {
                                    task4(true, (err, status) => {
                                            if (err) {
                                                console.log("Щось пішло не по плану");
                                            } else {
                                                task5(true, (err, status) => {
                                                        if (err) {
                                                            console.log("Щось пішло не по плану");
                                                        } else {
                                                            task6(true, (err, status) => {
                                                                    if (err) {
                                                                        console.log("Щось пішло не по плану");
                                                                    } else {
                                                                        task7(true, (err, status) => {
                                                                                if (err) {
                                                                                    console.log("Щось пішло не по плану");
                                                                                } else {
                                                                                    task8(true, (err, status) => {
                                                                                            if (err) {
                                                                                                console.log("Щось пішло не по плану");
                                                                                            }
                                                                                        }
                                                                                    )

                                                                                }
                                                                            }
                                                                        )
                                                                    }
                                                                }
                                                            )
                                                        }
                                                    }
                                                )
                                            }
                                        }
                                    )
                                }
                            }
                        )
                    }
                }
            )
        }
    }
)
