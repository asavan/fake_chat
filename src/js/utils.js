export function multilineToHtml(s) {
    return s.replace(/\n/g, "<br>");
}

export function restoreLineBreak(str) {
    return str.replace(/\\n/g, "\n");
}

export function isAllDigits(str) {
    return [...str].every(char => char >= "0" && char <= "9");
}

export function hideElem(el) {
    if (el) {
        el.classList.add("hidden");
    }
}

export function showElem(el) {
    if (el) {
        el.classList.remove("hidden");
    }
}

export default function install(window, document) {
    const footer = document.querySelector(".footer");
    const btnAdd = document.querySelector(".js-install");
    let beforeinstallpromptevent;
    btnAdd.addEventListener("click", (e) => {
        if (!beforeinstallpromptevent) {
            return;
        }
        e.preventDefault();
        hideElem(footer);
        // Show the prompt
        beforeinstallpromptevent.prompt();
        // Wait for the user to respond to the prompt
        beforeinstallpromptevent.userChoice.then((resp) => {
            console.log(JSON.stringify(resp));
        });
    });

    window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent the mini-info bar from appearing.
        e.preventDefault();
        // Stash the event so it can be triggered later.
        beforeinstallpromptevent = e;
        showElem(footer);
    });
    return btnAdd;
}
