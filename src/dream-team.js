module.exports = function createDreamTeam(members) {
    let squad = [];
    if (Array.isArray(members)) {
        for (let i of members) {
            if (typeof i === "string") {
                let arr = i.trim().split("");
                squad.push(arr[0].toUpperCase());
            }
        }
        return squad
            .sort()

        .join("");
    } else {
        return false;
    }
};