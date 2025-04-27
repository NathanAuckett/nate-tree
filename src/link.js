console.log("Populating links...");
const linkListSocials = document.getElementById("linkList_socials");
const linkListGames = document.getElementById("linkList_games");

const LINK_TYPE = {
    SOCIAL: "SOCIAL",
    GAME: "GAME",
}

function AddLink(title = "Link", image = "", url = "", type = LINK_TYPE.SOCIAL){
    console.log(`Adding ${title}`);
    const linkTemplate = document.getElementById("linkTemplate");
    const newLink = linkTemplate.content.cloneNode(true);

    newLink.getElementById("link").href = url;
    newLink.getElementById("title").innerHTML = title;
    newLink.getElementById("image").src = image;

    switch (type){
        case LINK_TYPE.SOCIAL:
            linkListSocials.appendChild(newLink);
            break;
        case LINK_TYPE.GAME:
            linkListGames.appendChild(newLink);
            break;
    }
}

//Socials
AddLink(
    "Blue Sky",
    "./src/graphics/Bluesky_Logo.svg",
    "https://bsky.app/profile/nathanauckett.bsky.social",
    LINK_TYPE.SOCIAL
);
AddLink(
    "Github",
    "./src/graphics/github-mark.svg",
    "https://github.com/NathanAuckett",
    LINK_TYPE.SOCIAL
);
AddLink(
    "X",
    "./src/graphics/x-logo.svg",
    "https://x.com/NathanAuckett",
    LINK_TYPE.SOCIAL
);

//Games
AddLink(
    "Eldritchvania",
    "./src/graphics/eldritchvania.jpg",
    "https://store.steampowered.com/app/2423710/Eldritchvania/",
    LINK_TYPE.GAME
);