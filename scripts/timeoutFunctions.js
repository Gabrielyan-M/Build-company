 function timeoutClassListFun (element, task,className, milliseconds) {

    const fun = `${element}.classList.${task}('${className}')`

    setTimeout(() => {
        fun
    }, milliseconds)
}

export { timeoutClassListFun }